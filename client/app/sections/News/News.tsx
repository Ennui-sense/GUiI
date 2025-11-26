import "./News.scss";

import Section from "~/layouts/Section/Section";
import NewsList from "~/components/NewsList/NewsList";

const News = () => {
  return (
    <Section
      sectionName="news"
      title="Новости"
      description="Последние новости о жизни кафедры и наших студентов"
      buttonText="Смотреть все"
      sectionVariant="gray"
    >
      <div className="news__inner container">
        <NewsList />
      </div>
    </Section>
  );
};

export default News;
