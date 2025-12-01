import type { Route } from "./+types/mtid";

import Page from "~/layouts/Page/Page";

import { DirectionsPagesData } from "~/data/DirectionsPagesData";

import HeroDirection from "~/sections/HeroDirection/HeroDirection";
import Professions from "~/sections/Professions/Professions";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Кафедра ГУиИ | МТИД" },
    { name: "description", content: "MTID Page" },
  ];
}

export default function MtidRoute() {
  const filteredData = DirectionsPagesData.find(
    (direction) => direction.id === "mtid"
  );

  if (!filteredData) {
    return (
      <Page>
        <p>Ой... Где-то косяк, такое направление не найдено.</p>
      </Page>
    );
  }

  return (
    <Page>
      <HeroDirection data={filteredData} />
      <Professions />
    </Page>
  );
}
