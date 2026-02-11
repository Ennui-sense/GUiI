import { NewsCardsData } from "~/data/NewsCardsData";

import qs from "qs";

import NewsCard from "../NewsCard/NewsCard";

import { useState, useEffect } from "react";

interface newsListProps {
  group?: string;
}

export interface NewsItemAPI {
  id: number;
  text: string;
  photo: string;
  date: number;
  label: string;
	url: string;
}

interface NewsItemResponse {
  data: NewsItemAPI[];
}

export interface LoaderData {
  newsItemData: NewsItemResponse;
}

const NewsList = ({ group }: newsListProps) => {
  const [data, setData] = useState<LoaderData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const BASE_URL =  import.meta.env.PROD ? import.meta.env.VITE_STRAPI_URL : "http://localhost:1337";
      const path = "/api/vk-news";
      const url = new URL(path, BASE_URL);

      const response = await fetch(url.href);
      const loaderData = await response.json();

      setData(loaderData);
      setLoading(false);
    }

    loadData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No data found</p>;

	let news;

  if (group) {
    news = data.result.filter((item) => item.label === group);
  }
	else {
		news = data.result 
	}

  return (
    <ul className="news__list">
      {news.slice(0, 3).map(({ date, label, text, photo, id, url }) => (
        <li className="news__item" key={id}>
          <NewsCard
            photo={photo}
            label={label}
            text={text}
            date={date}
            id={id}
						url={url}
          />
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
