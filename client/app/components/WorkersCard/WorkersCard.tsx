import "./WorkersCard.scss";

interface WorkersCardProps {
  imageSrc: string;
  name: string;
  profession: string;
  description: string;
}

const WorkersCard = ({
  imageSrc,
  name,
  profession,
  description,
}: WorkersCardProps) => {
  return (
    <article className="workers-card">
      <img
        src={imageSrc}
        alt=""
        className="workers-card__image"
        width={64}
        height={64}
        loading="lazy"
      />

      <div className="workers-card__inner">
        <div className="workers-card__header">
          <p className="workers-card__name">{name}</p>
          <p className="workers-card__profession">{profession}</p>
        </div>

        <p className="workers-card__description">{description}</p>
      </div>
    </article>
  );
};

export default WorkersCard;
