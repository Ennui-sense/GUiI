import "./MilitaryDepartment.scss";

import Section from "~/layouts/Section/Section";

import MilitaryDepartmentImageSrc from "~/assets/img/military-department.jpg"

const MilitaryDepartment = () => {
  return (
    <Section
      sectionName="military-department"
      title="Военная кафедра"
      description="Выпускники военно-учебного центра не будут проходить срочную службу в армии, а станут заканчивать вуз сержантами и солдатами запаса"
      buttonText="Узнать подробнее"
      buttonVariant="gray"
      isSectionInnerRow
    >
      <div className="military-department__inner">
        <img
          src={MilitaryDepartmentImageSrc}
          alt=""
          className="military-department__image"
          width={578}
          height={385}
          loading="lazy"
        />
      </div>
    </Section>
  );
};

export default MilitaryDepartment;
