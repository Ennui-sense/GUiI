import "./Hero.scss";

import { useState, useEffect } from "react";
import HeroPattern from "~/assets/img/pattern.png";

interface Hero {
  id: number;
  documentId: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface HeroResponse {
  data: Hero;
}

interface LoaderData {
  HeroData: HeroResponse;
}

const Hero = () => {
  const [data, setData] = useState<LoaderData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const BASE_URL =
        import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";
      const path = "/api/hero";
      const url = new URL(path, BASE_URL);

      const response = await fetch(url.href);
      const HeroData = await response.json();
			console.log(HeroData)
      setData({ HeroData });
      setLoading(false);
    }

    loadData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No data found</p>;

  return (
    <section className="hero">
      <div className="hero__inner container">
        <div className="hero__body">
          <h1 className="hero__title">{data.HeroData.data?.title}</h1>
          <p className="hero__description">{data.HeroData.data?.description}</p>
        </div>

        <img
          src={HeroPattern}
          alt=""
          className="hero__pattern"
          width={1440}
          height={215}
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;
