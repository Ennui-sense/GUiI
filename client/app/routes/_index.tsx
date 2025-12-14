import Page from "~/layouts/Page/Page";
import Hero from "~/sections/Hero/Hero";
import News from "~/sections/News/News";
import Directions from "~/sections/Directions/Directions";
import Workers from "~/sections/Workers/Workers";
import Stats from "~/sections/Stats/Stats";
import Partners from "~/sections/Partners/Partners";
import Events from "~/sections/Events/Events";

import { useOnInView } from "react-intersection-observer";

import { useNavigation } from "~/contexts/NavigationContext.jsx";

export function meta() {
  return [
    { title: "Кафедра ГУиИ | Главная" },
    { name: "description", content: "Home Page" },
  ];
}

export default function IndexRoute() {
  const { setNavigationState } = useNavigation();

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
        <Hero />
      </div>
      <News />
      <Directions />
      <Workers />
      <Stats />
      <Partners />
      <Events />
    </Page>
  );
}
