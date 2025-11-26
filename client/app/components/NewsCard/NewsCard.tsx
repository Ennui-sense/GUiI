import "./NewsCard.scss";

import LinkWithArrow from "../LinkWithArrow/LinkWithArrow";

interface NewsCardProps {
  imageSrc: string;
  category: string;
  text: string;
  publishedAt: string;
}

import test from "~/assets/img/news/1.jpg";

const NewsCard = ({ imageSrc, category, text, publishedAt }: NewsCardProps) => {
  return (
    <article className="news-card">
      <div className="news-card__wrapper-image">
        <img
          src={imageSrc}
          alt=""
          className="news-card__image"
          width={364}
          height={222}
          loading="lazy"
        />
      </div>

      <div className="news-card__inner">
        <div className="news-card__body">
          <div className="news-card__info">
            <span className="news-card__category">{category}</span> •{" "}
            <span className="news-card__date">{publishedAt}</span>
          </div>

          <p className="news-card__text">{text}</p>
        </div>

        <LinkWithArrow className="news-card__link" href="/">
          Перейти к посту
        </LinkWithArrow>
      </div>
    </article>
  );
};

export default NewsCard;
