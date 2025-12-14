import "./Stats.scss";

import Section from "~/layouts/Section/Section";
import StatsList from "~/components/StatsList/StatsList";

const Stats = () => {
  return (
    <Section
      sectionName="stats"
      title="Статистика нашей кафедры"
      isTitleVisible={false}
    >
      <div className="stats__inner">
        <StatsList />
      </div>
    </Section>
  );
};

export default Stats;
