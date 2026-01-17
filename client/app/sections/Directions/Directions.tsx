import "./Directions.scss";

import qs from "qs";

import Section from "~/layouts/Section/Section";
import DirectionsList from "~/components/DirectionsList/DirectionsList";

import { useEffect, useState } from "react";

export interface IDirectionCard {
  id: number;
  shortName: string;
  fullName: string;
  degrees: { degree: string }[];
	title: string;
	icon: string;
	accentColor: {accentColor: string};
}

interface DirectionCardResponse {
  data: IDirectionCard[];
}

interface DirectionCardData {
  directionsData: DirectionCardResponse;
}

const Directions = () => {
  const [data, setData] = useState<DirectionCardData | null>(null);

  useEffect(() => {
    async function loadData() {
      const BASE_URL =
        import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";
      const path = "/api/directions";
      const url = new URL(path, BASE_URL);

      url.search = qs.stringify({
        populate: "*",
      });

      const response = await fetch(url.href);
      const directionsData = await response.json();

      setData({ directionsData });
    }

    loadData();
  }, []);

  if (!data) return <p>No data found</p>;

  return (
    <Section sectionName="directions" title="Направления подготовки">
      <div className="directions__inner">
        <DirectionsList data={data?.directionsData.data} />
      </div>
    </Section>
  );
};

export default Directions;
