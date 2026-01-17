import "./HeaderModalCard.scss";

import LinkWithArrow from "../LinkWithArrow/LinkWithArrow";

interface HeaderModalCardProps {
  title: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  description: string;
}

const HeaderModalCard = ({
  title,
  Icon,
  description,
}: HeaderModalCardProps) => {
  return (
    <article className="header-modal-card">
      <div className="header-modal-card__inner">
        {Icon != undefined ? <Icon /> : ""}

        <div className="header-modal-card__info">
          <p className="header-modal-card__title body-l-medium">{title}</p>
          <p className="header-modal-card__description body-xs-regular">{description}</p>
        </div>

				<LinkWithArrow href="/" className="header-modal-card__link"> </LinkWithArrow>
      </div>
    </article>
  );
};

export default HeaderModalCard;
