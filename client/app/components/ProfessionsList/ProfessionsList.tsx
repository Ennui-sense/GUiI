import type { IProfessionsCard } from "~/data/ProfessionsCardsData";

interface ProfessionsListProps {
  data: IProfessionsCard[];
  onClick: (id: number) => void;
}

const ProfessionsList = ({ data, onClick }: ProfessionsListProps) => {
  return (
    <ul className="professions__list">
      {data.map(({ id, title, Icon }) => (
        <li className="professions__item" key={id} onClick={() => onClick(id)}>
          <button type="button" className="professions__item-button">
            <Icon />
            <h3 className="professions__item-title body-l-medium">{title}</h3>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProfessionsList;
