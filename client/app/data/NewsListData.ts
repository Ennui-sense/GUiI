interface INewslistData {
  imageSrc: string;
  category: string;
  publishedAt: string;
  text: string;
}
import gkmem from "./../assets/img/news/1.jpg"
export const NewsListData: INewslistData[] = [
  {
    imageSrc: "/app/assets/img/news/1.jpg",
    category: "МТИД",
    publishedAt: "4 ноября",
    text: "Анастасия Толстенко - участница XV СЛЕТа СТУДЕНЧЕСКИХ ОТРЯДОВ ПФО  (16-19 октября) г. Казань. Ежегодный слёт студенческих отрядов ПФО – это комплекс мероприятий, подводящих  итоги трудового семестра и работы студотрядов в течение года.",
  },
  {
    imageSrc: "/app/assets/img/news/2.jpg",
    category: "ГМУ",
    publishedAt: "24 октября",
    text: "Студенты группы ГМУ-24 посетили Пермскую городскую думу с экскурсией и встретились с ее председателем Д. В. Малютиным.",
  },
  {
    imageSrc: "/app/assets/img/news/3.jpg",
    category: "МТИД",
    publishedAt: "7 октября",
    text: "Анастасия Толстенко - участница XV СЛЕТа СТУДЕНЧЕСКИХ ОТРЯДОВ ПФО  (16-19 октября) г. Казань.\n\nЕжегодный слёт студенческих отрядов ПФО – это комплекс мероприятий, подводящих  итоги трудового семестра и работы студотрядов в течение года.",
  },
];
