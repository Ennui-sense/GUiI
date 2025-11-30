import Page from "~/layouts/Page/Page";
import Hero from "~/sections/Hero/Hero";
import News from "~/sections/News/News";
import Directions from "~/sections/Directions/Directions";
import Workers from "~/sections/Workers/Workers";

export function meta() {
  return [
    { title: "Кафедра ГУиИ | Главная" },
    { name: "description", content: "Home Page" },
  ];
}

export default function IndexRoute() {
  return (
    <Page>
      <Hero />
      <News />
      <Directions />
      <Workers />
    </Page>
  );
}
