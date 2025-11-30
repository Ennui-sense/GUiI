import "./StatsCard.scss";

import type { IStatsCardData } from "~/data/StatsCardData";

const StatsCard = ({ count, characteristic }: IStatsCardData) => {
  return (
    <article className="stats-card">
      <h3 className="stats-card__title">
        <span className="stats-card__count">{count}</span>
        <span className="stats-card__characteristic">{characteristic}</span>
      </h3>
    </article>
  );
};

export default StatsCard;
