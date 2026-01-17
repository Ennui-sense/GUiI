import Icon from "../Icon/Icon";

interface ProfessionsListProps {
  filteredProfessions: { title: string; icon: string; id: number }[];
}

const ProfessionsList = ({ filteredProfessions }: ProfessionsListProps) => {
  return (
    <ul className="professions__list">
      {filteredProfessions.map(({ id, title, icon }) => (
        <li className="professions__item" key={id}>
          <Icon icon={icon} className="professions__item-icon"/>

          <h3 className="professions__item-title body-l-medium">{title}</h3>
        </li>
      ))}
    </ul>
  );
};

export default ProfessionsList;
