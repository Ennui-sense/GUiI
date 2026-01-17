// import MtidIcon from "~/assets/icons/pen-nib.svg?react";
// import GmuIcon from "~/assets/icons/books.svg?react";
// import GuopIcon from "~/assets/icons/scales.svg?react";

export interface IDirectionsCard {
  id?: number;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> | undefined;
  title: string;
  description: string;
  shortDescription: string;
  tags: string[];
}

export const DirectionsCardsData: IDirectionsCard[] = [
  {
    id: 1,
    Icon: undefined,
    title: "МТИД",
    description: "Мультимедийные технологии и информационный дизайн",
    shortDescription: "Будущим дизайнерам",
    tags: ["Бакалавриат"],
  },
  {
    id: 2,
    Icon: undefined,
    title: "ГМУ",
    description: "Государственное и муниципальное управление",
    shortDescription: "Будущим менеджерам",
    tags: ["Бакалавриат", "Магистратура", "Аспирантура"],
  },
  {
    id: 3,
    Icon: undefined,
    title: "ГУОП",
    description: "Государственное управление и отраслевые политики",
    shortDescription: "Будущим политикам",
    tags: ["Аспирантура"],
  },
];
