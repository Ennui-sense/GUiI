import type { Route } from "./+types/directions.$direction";

import qs from "qs";

import Page from "~/layouts/Page/Page";

import HeroDirection from "~/sections/HeroDirection/HeroDirection";
import Professions from "~/sections/Professions/Professions";
import Dormitory from "~/sections/Dormitory/Dormitory";
import MilitaryDepartment from "~/sections/MilitaryDepartment/MilitaryDepartment";
import News from "~/sections/News/News";

import { useOnInView } from "react-intersection-observer";

import { useNavigation } from "~/contexts/NavigationContext.jsx";

export interface ProfessionsDirectionBlockItem {
  title: string;
  image: { url: string };
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
  professions: ProfessionsDirectionBlockItem[];
  degrees: { degree: string }[];
}

export async function loader({ params }: Route.LoaderArgs) {
  const BASE_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";
  const path = "/api/directions";
  const url = new URL(path, BASE_URL);

  // Используем параметр из URL для фильтрации
  url.search = qs.stringify(
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

  const response = await fetch(url.href);
  const data = await response.json();

  return { directionsData: data };
}

export function meta({ loaderData }: Route.MetaArgs) {
  const currentDirection = loaderData?.directionsData?.data?.[0];
  console.log(currentDirection);

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

  if (!currentDirection) {
    return (
      <Page>
        <h1>Направление не найдено</h1>
        <p>Направление "{directionParam}" не существует.</p>
      </Page>
    );
  }

  const inViewRef = useOnInView((inView, entry) => {
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
      <Professions data={currentDirection.professions} />
      {currentDirection.availabilityDormitory && <Dormitory />}
      {currentDirection.availabilityMilitaryDepartment && (
        <MilitaryDepartment />
      )}
      <News group={currentDirection.shortName} />
    </Page>
  );
}
