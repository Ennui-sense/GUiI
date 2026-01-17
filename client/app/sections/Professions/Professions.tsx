import "./Professions.scss";

import Section from "~/layouts/Section/Section";
import ProfessionsList from "~/components/ProfessionsList/ProfessionsList";

import Icon from "~/components/Icon/Icon";

interface ProfessionsProps {
  title: string;
  description: string;
  professions: { title: string; icon: string, id: number	 }[];
}

const Professions = ({ title, description, professions }: ProfessionsProps) => {
  if (!professions) return <p>Профессий нету у него еще</p>;

  const accentProfession = professions[0]

	const filteredProfessions = professions.filter((item) => item !== accentProfession)

  return (
    <Section sectionName="professions" title={title} description={description}>
      <div className="professions__inner">
        <div className="professions__accent">
          <h3 className="professions__accent-title">
            {accentProfession?.title}
          </h3>
          {accentProfession?.icon && (
            <Icon icon={accentProfession?.icon} className="professions__accent-icon"></Icon>
          )}
        </div>

        <ProfessionsList filteredProfessions={filteredProfessions}/>
      </div>
    </Section>
  );
};

export default Professions;
