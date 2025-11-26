import "./NewsList.scss";

import { NewsListData } from "~/data/NewsListData";

import NewsCard from "../NewsCard/NewsCard";

const NewsList = () => {
  return (
    <ul className="news__list">
      {NewsListData.map(({ imageSrc, category, text, publishedAt }, index) => (
        <li className="news__item" key={index + 1}>
          <NewsCard
            imageSrc={imageSrc}
            category={category}
            text={text}
            publishedAt={publishedAt}
          />
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
