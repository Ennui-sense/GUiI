import "./Directions.scss";

import Section from "~/layouts/Section/Section";
import DirectionsList from "~/components/DirectionsList/DirectionsList";

const Directions = () => {
  return (
    <Section sectionName="directions" title="Направления подготовки">
      <div className="directions__inner">
        <DirectionsList />
      </div>
    </Section>
  );
};

export default Directions;
