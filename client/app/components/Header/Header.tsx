import "./Header.scss";

import { useState, useEffect } from "react";

import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

import { useNavigation } from "~/contexts/NavigationContext.jsx";
import clsx from "clsx";

export interface HeaderMenuItemAPI {
  id: number;
  documentId: string;
  content: string;
  href: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface HeaderMenuItemResponse {
  data: HeaderMenuItemAPI[];
}

export interface LoaderData {
  HeaderMenuItemData: HeaderMenuItemResponse;
}

const Header = () => {
  const [data, setData] = useState<LoaderData | null>(null);
  const [loading, setLoading] = useState(true);

  const { navigationState } = useNavigation();

  useEffect(() => {
    async function loadData() {
      const BASE_URL =
        import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";
      const path = "/api/header-menus";
      const url = new URL(path, BASE_URL);

      const response = await fetch(url.href);
      const HeaderMenuItemData = await response.json();

      setData({ HeaderMenuItemData });
      setLoading(false);
    }

    loadData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No data found</p>;

  return (
    <header className={clsx("header", {"header--transparent": !navigationState.activeTab})}>
      <div className="header__inner container">
        <Logo className="header__logo" variant={!navigationState.activeTab ? "light" : "dark"}/>

        <div className="header__actions">
          <HeaderMenu data={data} />

          <Button className="header__button" variant={!navigationState.activeTab ? "light" : "dark"} isSmall>
            Поступить
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
