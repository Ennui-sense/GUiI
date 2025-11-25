import "./Header.scss";

import { useState, useEffect } from "react";

import Logo from "../Logo/Logo";
import Button from "../Button/Button";

interface HeaderMenuItem {
  id: number;
  documentId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface HeaderMenuItemResponse {
  data: HeaderMenuItem[];
}

interface LoaderData {
  HeaderMenuItemData: HeaderMenuItemResponse;
}

const Header = () => {
  const [data, setData] = useState<LoaderData | null>(null);
  const [loading, setLoading] = useState(true);

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
    <header className="header">
      <div className="header__inner container">
        <Logo className="header__logo" />

        <div className="header__actions">
          <nav className="header__menu">
            <ul className="header__menu-list">
              {data.HeaderMenuItemData.data?.map((item) => (
                <li key={item.id} className="header__menu-item">
                  <a href="" className="header__menu-link">
                    {item.content}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

					<Button className="header__button" variant="light" isSmall>Поступить</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
