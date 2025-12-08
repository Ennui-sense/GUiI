import "./Dormitory.scss";

import Section from "~/layouts/Section/Section";

import DormitoryImageSrc from "~/assets/img/dormitory.jpg";

const Dormitory = () => {
  return (
    <Section
      sectionName="dormitory"
      title="Общежитие"
      description="Жизнь в нашем общежитии обеспечивает студентов комфортными условиями для погружения в учёбу и активного отдыха, объединяя их в тёплую атмосферу новых знакомств"
      buttonText="Узнать подробнее"
      buttonVariant="gray"
      isSectionInnerRowReverse
    >
      <div className="dormitory__inner">
        <img
          src={DormitoryImageSrc}
          alt=""
          className="dormitory__image"
          width={578}
          height={385}
          loading="lazy"
        />
      </div>
    </Section>
  );
};

export default Dormitory;
