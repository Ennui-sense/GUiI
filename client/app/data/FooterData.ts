import VkIcon from "~/assets/icons/vk.svg?react";
import TelegramIcon from "~/assets/icons/telegram.svg?react";
import RutubeIcon from "~/assets/icons/rutube.svg?react";

export interface ILinkItem {
  text: string;
  src: string;
  id: string;
}

export interface IFooterActionsData {
  title: string;
  id: string;
  links: ILinkItem[];
}

export interface ISoc1alsData {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  id: string;
  href: string;
  label: string;
}

export const FooterActionsData: IFooterActionsData[] = [
  {
    id: "directions",
    title: "Направления",
    links: [
      { id: "mtid", text: "МТИД", src: "/mtid" },
      { id: "gmu", text: "ГМУ", src: "/gmu" },
      { id: "guop", text: "ГУОП", src: "/guop" },
    ],
  },
  {
    id: "about-department",
    title: "О кафедре",
    links: [
      { id: "mission", text: "Миссия и история", src: "/about" },
      { id: "teachers", text: "Преподаватели", src: "/teachers" },
      { id: "contacts", text: "Контакты", src: "/contacts" },
      { id: "news", text: "Новости", src: "/news" },
    ],
  },
  {
    id: "about-polytech",
    title: "О Политехе",
    links: [
      { id: "pstu-website", text: "Сайт ПНИПУ", src: "https://pstu.edu" },
      {
        id: "org-info",
        text: "Сведения об образовательной организации",
        src: "/organization",
      },
      { id: "payment", text: "Оплата образовательных услуг", src: "/payment" },
      { id: "requisites", text: "Реквизиты ПНИПУ", src: "/requisites" },
    ],
  },
  {
    id: "media-requests",
    title: "По запросам от СМИ",
    links: [
      {
        id: "media-phone",
        text: "+7 (342) 2-198-119",
        src: "tel:+73422198119",
      },
      {
        id: "media-email",
        text: "kolesnik@pstu.ru",
        src: "mailto:kolesnik@pstu.ru",
      },
    ],
  },
  {
    id: "general-questions",
    title: "По любым вопросам",
    links: [
      {
        id: "general-phone",
        text: "+7 (342) 2-198-520",
        src: "tel:+73422198520",
      },
      { id: "general-email", text: "kanc@pstu.ru", src: "mailto:kanc@pstu.ru" },
    ],
  },
  {
    id: "admission-questions",
    title: "По вопросам поступления",
    links: [
      {
        id: "admission-phone",
        text: "+7 (342) 2-198-065",
        src: "tel:+73422198065",
      },
      {
        id: "admission-email",
        text: "enter@pstu.ru",
        src: "mailto:enter@pstu.ru",
      },
    ],
  },
];

export const Soc1alsData: ISoc1alsData[] = [
  {
    id: "vk",
    Icon: VkIcon,
    href: "https://vk.com/yourpage",
    label: "Мы ВКонтакте",
  },
  {
    id: "telegram",
    Icon: TelegramIcon,
    href: "https://t.me/yourchannel",
    label: "Наш Telegram",
  },
  {
    id: "rutube",
    Icon: RutubeIcon,
    href: "https://t.me/yourchannel",
    label: "Мы на Rutube",
  },
];
