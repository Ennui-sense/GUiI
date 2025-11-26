import Page from "~/layouts/Page/Page";
import Hero from "~/sections/Hero/Hero";

export function meta() {
  return [
    { title: "Кафедра ГУиИ" },
    { name: "description", content: "Home Page" },
  ];
}

export default function IndexRoute() {
  return (
    <Page>
      <Hero />
			1223124
    </Page>
  );
}
