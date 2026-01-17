import qs from "qs";
import DirectionsCard from "../DirectionsCard/DirectionsCard";
import { DirectionsCardsData } from "~/data/DirectionsCardsData";

import type { IDirectionCard } from "~/sections/Directions/Directions";
import clsx from "clsx";
import type React from "react";

interface DirectionsListProps {
  data: IDirectionCard[];
}

const DirectionsList = ({ data }: DirectionsListProps) => {
  return (
    <ul className="directions__list">
      {/* {DirectionsCardsData.map(({ Icon, title, description, tags, id }) => (
        <li className="directions__item" key={id}>
          <DirectionsCard
            Icon={Icon}
            title={title}
            description={description}
            tags={tags}
          />
        </li>
      ))} */}
      {data.map(({ id, shortName, fullName, degrees, title, icon, accentColor }) => (
        <li
          className="directions__item"
          key={id}
          style={{ "--count-elements": data.length } as React.CSSProperties}
        >
          <DirectionsCard
            title={shortName}
            description={fullName}
            tags={degrees}
            href={`/directions/${title}`}
						icon={icon}
						accentColor={accentColor}
          />
        </li>
      ))}
    </ul>
  );
};

export default DirectionsList;
