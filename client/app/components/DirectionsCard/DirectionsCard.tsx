import "./DirectionsCard.scss";

import LinkWithArrow from "../LinkWithArrow/LinkWithArrow";

import Icon from "../Icon/Icon";
// import type { IDirectionsCard } from "~/data/DirectionsCardsData";

interface DirectionsCardProps {
	title: string;
	description: string;
	tags: {degree: string}[]
	href: string;
	icon: string;
	accentColor: {accentColor: string}
}

const DirectionsCard = ({
  title,
  description,
  tags,
	href,
	icon,
	accentColor
}: DirectionsCardProps) => {
  return (
    <article className="directions-card">
      <Icon icon={icon} fill={accentColor.accentColor} className="directions-card__icon"/>

      <div className="directions-card__body">
        <div className="directions-card__content">
          <h3 className="directions-card__title">{title}</h3>
          <p className="directions-card__description">{description}</p>
        </div>

        <div className="directions-card__tags">
          {tags.map(({degree}) => (
            <p className="directions-card__tag body-s-regular" key={degree}>
              {degree}
            </p>
          ))}
        </div>
      </div>

      <LinkWithArrow className="directions-card__link" href={href}>
        Подробнее
      </LinkWithArrow>
    </article>
  );
};

export default DirectionsCard;
