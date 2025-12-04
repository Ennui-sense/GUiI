import { useState } from "react";

import type { LoaderData } from "../Header/Header";

import HeaderMenuItem from "../HeaderMenuItem/HeaderMenuItem";

import clsx from "clsx";

interface HeaderMenuProps {
	data: LoaderData
}

const HeaderMenu = ({data}: HeaderMenuProps) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleModal = (id: number | null) => {
    setActiveId(activeId !== id ? id : null);
  };

  return (
    <nav className="header__menu">
      <ul className="header__menu-list">
        {data.HeaderMenuItemData.data.map((item) => (
          <li key={item.id} className="header__menu-item">
						<HeaderMenuItem activeId={activeId} item={item} onClick={toggleModal} href={item.href}/>
            <div
              className={clsx("header__modal", {
                "visually-hidden": activeId !== item.id,
              })}
            >
              {item.content}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderMenu;
