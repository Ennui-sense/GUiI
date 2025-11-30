import { PartnersData } from "~/data/PartnersData";

const PartnersList = () => {
  return (
    <ul className="partners__list">
      {PartnersData.map((partner) => (
        <li className="partners__item">
          <img
            src={partner}
            alt=""
            className="partners__image"
            width={182}
            height={56}
            loading="lazy"
          />
        </li>
      ))}
    </ul>
  );
};

export default PartnersList;
