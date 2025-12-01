import "./Professions.scss";

import Section from "~/layouts/Section/Section";

import { useState } from "react";

import { ProfessionsCardsData } from "~/data/ProfessionsCardsData";

import ProfessionsList from "~/components/ProfessionsList/ProfessionsList";

const Professions = () => {
  const [activeCardId, setActiveCardId] = useState<number>(1);

  const handleClick = (id: number) => {
    setActiveCardId(id);
  };

  const activeCard = ProfessionsCardsData.find((card) => card.id === activeCardId);
	const filteredCards = ProfessionsCardsData.filter((card) => card !== activeCard)

  const { id, title, Icon } = activeCard;

  return (
    <Section
      sectionName="professions"
      title="Кем станете после выпуска"
      description="Программа развивает те способности, которые помогут стать востребованным специалистом "
    >
      <div className="professions__inner container">
        <div className="professions__active">
          <h3 className="professions__active-title">{title}</h3>

          <Icon></Icon>
        </div>

        <ProfessionsList data={filteredCards} onClick={handleClick}/>
      </div>
    </Section>
  );
};

export default Professions;
