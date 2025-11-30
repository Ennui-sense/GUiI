import "./WorkersList.scss";

import { WorkersCardData } from "~/data/WorkersCardData";

import WorkersCard from "../WorkersCard/WorkersCard";

const WorkersList = () => {
  return (
    <ul className="workers__list">
      {WorkersCardData.map(({ imageSrc, name, profession, description }) => (
        <li className="workers__item">
          <WorkersCard
            imageSrc={imageSrc}
            name={name}
            profession={profession}
            description={description}
          />
        </li>
      ))}
    </ul>
  );
};

export default WorkersList;
