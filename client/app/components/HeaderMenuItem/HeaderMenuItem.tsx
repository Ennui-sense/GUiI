import clsx from "clsx";

import type { HeaderMenuItem } from "../Header/Header";

import ArrowRightIcon from "~/assets/icons/arrow-right.svg?react";

interface HeaderMenuItemProps {
  item: HeaderMenuItem;
  activeId: number | null;
  onClick: (id: number | null) => void;
  href?: string;
}

const HeaderMenuItem = ({
  activeId,
  item,
  onClick,
  href,
}: HeaderMenuItemProps) => {
  if (href) {
    return (
      <a href={href} className="header__menu-link body-s-medium">
        {item.content}
      </a>
    );
  }

  return (
    <button
      className={clsx("header__menu-button body-s-medium", {
        active: activeId === item.id,
      })}
      onClick={() => onClick(item.id)}
    >
      {item.content}

      <ArrowRightIcon />
    </button>
  );
};

export default HeaderMenuItem;
