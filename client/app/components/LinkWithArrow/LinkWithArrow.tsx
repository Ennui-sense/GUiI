import clsx from "clsx";
import "./LinkWithArrow.scss";

import ArrowRightIcon from "~/assets/icons/arrow-right.svg?react";

interface LinkWithArrowProps {
  href: string;
  children: string;
  className: string;
}

const LinkWithArrow = ({ href, children, className }: LinkWithArrowProps) => {
  return (
    <a href={href} className={clsx("link-with-arrow", className)}>
      {children}

      <ArrowRightIcon />
    </a>
  );
};

export default LinkWithArrow;
