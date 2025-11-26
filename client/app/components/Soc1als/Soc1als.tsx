import "./Soc1als.scss";

import { Soc1alsData } from "../../data/FooterData";
import clsx from "clsx";

interface FooterSoc1alsProps {
  className: string;
}

const Soc1als = ({ className }: FooterSoc1alsProps) => {
  return (
    <div className={clsx("soc1als", className)}>
      {Soc1alsData.map(({ Icon, id, label, href }) => (
        <a href={href} className="soc1als-link" key={id}>
          <Icon/>

					<span className="visually-hidden">{label}</span>
        </a>
      ))}
    </div>
  );
};

export default Soc1als;
