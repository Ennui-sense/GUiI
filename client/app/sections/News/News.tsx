import "./News.scss";

import Section from "~/layouts/Section/Section";
import NewsList from "~/components/NewsList/NewsList";

interface NewsProps {
	group?: string
}

const News = ({group}: NewsProps) => {
  return (
    <Section
      sectionName="news"
      title="Новости"
      description="Последние новости о жизни кафедры и наших студентов"
      buttonText="Смотреть все"
      sectionVariant="gray"
    >
      <div className="news__inner">
        <NewsList group={group}/>
      </div>
    </Section>
  );
};

export default News;
