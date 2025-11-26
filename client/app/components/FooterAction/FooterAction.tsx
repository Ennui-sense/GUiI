import "./FooterAction.scss";

import type { ILinkItem } from "../../data/FooterData";
import clsx from "clsx";

interface FooterActionProps {
  title: string;
  links: ILinkItem[];
  className: string;
}

const FooterAction = ({ title, links, className }: FooterActionProps) => {
  return (
    <div className={clsx("footer-action", className)}>
      <p className="footer-action__title">{title}</p>
      <ul className="footer-action__list">
        {links.map(({ id, src, text }) => (
          <li className="footer-action__item" key={id}>
            <a href={src} className="footer-action__link">
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterAction;
