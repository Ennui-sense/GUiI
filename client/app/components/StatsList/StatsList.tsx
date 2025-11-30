import StatsCard from "../StatsCard/StatsCard";

import { StatsCardData } from "~/data/StatsCardData";

const StatsList = () => {
  return (
    <ul className="stats__list">
      {StatsCardData.map(({ count, characteristic }) => (
        <li className="stats__item">
          <StatsCard count={count} characteristic={characteristic}/>
        </li>
      ))}
    </ul>
  );
};

export default StatsList;
