import type { Route } from "./+types/directions.$direction";

import qs from "qs";

import Page from "~/layouts/Page/Page";

import HeroDirection from "~/sections/HeroDirection/HeroDirection";
import Professions from "~/sections/Professions/Professions";
import Dormitory from "~/sections/Dormitory/Dormitory";
import MilitaryDepartment from "~/sections/MilitaryDepartment/MilitaryDepartment";

export interface ProfessionsDirectionBlockItem {
  title: string;
  image: { url: string };
  id: number;
}

interface ProfessionsDirectionBlock {
  __component: string;
  professions: ProfessionsDirectionBlockItem[];
}

export interface HeroDirectionBlock {
  __component: string;
  id: number;
  fullName: string;
  shortName: string;
  code: string;
  educationForm: string;
  durationStudy: string;
  passingGrade: string;
  price: number;
  availabilityDormitory: boolean;
  availabilityMilitaryDepartment: boolean;
  direction_accent_color: { accentColor: string };
}

interface DirectionData {
  id: number;
  title: string;
}

interface DirectionResponse {
  data: DirectionData[];
}

export async function loader({ params }: Route.LoaderArgs) {
  const BASE_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";
  const path = "/api/directions";
  const url = new URL(path, BASE_URL);

  // Используем параметр из URL для фильтрации
  url.search = qs.stringify({
    filters: { title: params.direction },
    populate: {
      blocks: {
        on: {
          "direction.hero": {
            populate: "*",
          },
          "direction.professions": {
            populate: {
              professions: {
                populate: "*",
              },
            },
          },
        },
      },
    },
  });

  const response = await fetch(url.href);
  const data = await response.json();
  return { directionsData: data };
}

export function meta({ loaderData }: Route.MetaArgs) {
  const currentDirection = loaderData?.directionsData?.data?.[0];
  const heroBlock = currentDirection.blocks?.find(
    (block: HeroDirectionBlock) => block.__component === "direction.hero"
  );

  return [
    { title: `Кафедра ГУиИ | ${heroBlock.shortName}` },
    { name: "description", content: `${currentDirection.title} Page` },
  ];
}

export default function DirectionRoute({
  loaderData,
  params,
}: Route.ComponentProps) {
  // Используем params из Route.ComponentProps
  const directionParam = params.direction;

  // Данные из loader
  const currentDirection = loaderData?.directionsData?.data?.[0];

  if (!currentDirection) {
    return (
      <Page>
        <h1>Направление не найдено</h1>
        <p>Направление "{directionParam}" не существует.</p>
      </Page>
    );
  }

  // Находим hero блок для текущего направления
  const heroBlock = currentDirection.blocks?.find(
    (block: HeroDirectionBlock) => block.__component === "direction.hero"
  );

  const professionsBlock = currentDirection.blocks?.find(
    (block: ProfessionsDirectionBlock) =>
      block.__component === "direction.professions"
  );

  return (
    <Page>
      <HeroDirection data={heroBlock}></HeroDirection>
      <Professions data={professionsBlock.professions} />
      <Dormitory />
      <MilitaryDepartment />

      {/* {professionsBlock && (
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">Профессии направления</h3>

          <ul className="list-disc pl-5 space-y-2">
            {professionsBlock.professions?.map((prof: any) => (
              <li key={prof.id} className="text-lg">
                {prof.title}
                <img src={`http://localhost:1337${prof.image.url}`} alt="" />
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </Page>
  );
}
