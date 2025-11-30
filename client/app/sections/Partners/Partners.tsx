import "./Partners.scss";

import Section from "~/layouts/Section/Section";
import PartnersList from "~/components/PartnersList/PartnersList";

const Partners = () => {
  return (
    <Section
      sectionVariant="dark"
      title="Готовим выпускников, востребованных в науке, дизайне и органах власти"
      description="Многие из компаний сотрудничают с Политехом напрямую и участвуют в учебном процессе"
      sectionName="partners"
      isHeaderCenter
    >
      <div className="partners__inner">
        <PartnersList />
      </div>
    </Section>
  );
};

export default Partners;
