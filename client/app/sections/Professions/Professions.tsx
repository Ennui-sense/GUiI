import "./Professions.scss";

import Section from "~/layouts/Section/Section";

import { useState } from "react";

import type { ProfessionsDirectionBlockItem } from "~/routes/directions.$direction";

import ProfessionsList from "~/components/ProfessionsList/ProfessionsList";

interface ProfessionsProps {
	data: ProfessionsDirectionBlockItem[]
}

const Professions = ({data}: ProfessionsProps) => {
	console.log(data);
	
  const [activeCardId, setActiveCardId] = useState<number>(data[0].id);

  const handleClick = (id: number) => {
    setActiveCardId(id);
  };

  const activeCard = data.find((card) => card.id === activeCardId);
	const filteredCards = data.filter((card) => card !== activeCard)

  return (
    <Section
      sectionName="professions"
      title="Кем станете после выпуска"
      description="Программа развивает те способности, которые помогут стать востребованным специалистом "
    >
      <div className="professions__inner">
        <div className="professions__active">
          <h3 className="professions__active-title">{activeCard?.title}</h3>

					<img src={`http://localhost:1337${activeCard?.image.url}`} alt="" className="professions__active-image" />
          {/* <Icon></Icon> */}
        </div>

        <ProfessionsList data={filteredCards} onClick={handleClick}/>
      </div>
    </Section>
  );
};

export default Professions;
