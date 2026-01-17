import type { Route } from "./+types/directions.$direction";

import qs from "qs";

import Page from "~/layouts/Page/Page";

import HeroDirection from "~/sections/HeroDirection/HeroDirection";
import Professions from "~/sections/Professions/Professions";
import Dormitory from "~/sections/Dormitory/Dormitory";
import MilitaryDepartment from "~/sections/MilitaryDepartment/MilitaryDepartment";
import News from "~/sections/News/News";

import { useState, useEffect } from "react";

import { useOnInView } from "react-intersection-observer";

import { useNavigation } from "~/contexts/NavigationContext.jsx";

export interface ProfessionsDirectionItem {
  title: string;
  icon: string;
  id: number;
}

export interface DirectionData {
  id: number;
  title: string;
  fullName: string;
  shortName: string;
  code: string;
  educationForm: string;
  durationStudy: string;
  passingGrade: string;
  price: number;
  availabilityDormitory: boolean;
  availabilityMilitaryDepartment: boolean;
  accentColor: { accentColor: string };
  professions: ProfessionsDirectionItem[];
  degrees: { degree: string }[];
}

export async function loader({ params }: Route.LoaderArgs) {
  const BASE_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";
  const pathDirections = "/api/directions";
  const pathDirectionPage = "/api/direction-page";

  const urlDirections = new URL(pathDirections, BASE_URL);
  const urlDirectionPage = new URL(pathDirectionPage, BASE_URL);

  // Используем параметр из URL для фильтрации
  urlDirections.search = qs.stringify(
    {
      filters: { title: params.direction },
      populate: {
        professions: {
          populate: "*",
        },
        accentColor: {
          populate: "*",
        },
      },
    },
    { encodeValuesOnly: true }
  );

  urlDirectionPage.search = qs.stringify({
    populate: "*",
  });

  const responseDirections = await fetch(urlDirections.href);
  const responseDirectionPage = await fetch(urlDirectionPage.href);

  const dataDirections = await responseDirections.json();
  const dataDirectionPage = await responseDirectionPage.json();

  return {
    directionsData: dataDirections,
    directionPageData: dataDirectionPage,
  };
}

export function meta({ loaderData }: Route.MetaArgs) {
  const currentDirection = loaderData?.directionsData?.data?.[0];

  return [
    { title: `Кафедра ГУиИ | ${currentDirection.shortName}` },
    { name: "description", content: `${currentDirection.title} Page` },
  ];
}

export default function DirectionRoute({
  loaderData,
  params,
}: Route.ComponentProps) {
  const { setNavigationState } = useNavigation();
  // Используем params из Route.ComponentProps
  const directionParam = params.direction;

  // Данные из loader
  const currentDirection: DirectionData = loaderData?.directionsData?.data?.[0];
  const directionPageData = loaderData?.directionPageData.data.sections;

  const professionsSectionData = directionPageData.find(
    (item: any) => item.__component === "direction.professions"
  );
  const dormitorySectionData = directionPageData.find(
    (item: any) => item.__component === "direction.dormitory"
  );
  const militaryDepartmentSectionData = directionPageData.find(
    (item: any) => item.__component === "direction.military-department"
  );

  if (!currentDirection) {
    return (
      <Page>
        <h1>Направление не найдено</h1>
        <p>Направление "{directionParam}" не существует.</p>
      </Page>
    );
  }

  const inViewRef = useOnInView((inView) => {
    if (inView) {
      setNavigationState({ activeTab: false });
    } else {
      setNavigationState({ activeTab: true });
    }
  });

  return (
    <Page>
      <div ref={inViewRef}>
        <HeroDirection data={currentDirection}></HeroDirection>
      </div>
      <Professions
        title={professionsSectionData.title}
        description={professionsSectionData.description}
        professions={currentDirection.professions}
      />
      {currentDirection.availabilityDormitory && (
        <Dormitory
          title={dormitorySectionData.title}
          description={dormitorySectionData.description}
        />
      )}
      {currentDirection.availabilityMilitaryDepartment && (
        <MilitaryDepartment />
      )}
      <News group={currentDirection.shortName} />
    </Page>
  );
}
