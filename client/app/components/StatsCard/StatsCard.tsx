import "./StatsCard.scss";

import type { IStatsCard } from "~/data/StatsCardsData";

const StatsCard = ({ count, characteristic }: IStatsCard) => {
  return (
    <div className="stats-card">
      <h3 className="stats-card__title">
        <span className="stats-card__count h2">{count}</span>
        <span className="stats-card__characteristic body-l-medium">{characteristic}</span>
      </h3>
    </div>
  );
};

export default StatsCard;
