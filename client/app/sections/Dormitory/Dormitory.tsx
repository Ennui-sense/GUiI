import "./Dormitory.scss";

import Section from "~/layouts/Section/Section";

import DormitoryImageSrc from "~/assets/img/dormitory.jpg";

interface DormitoryProps {
  title: string;
  description: string;
}

const Dormitory = ({ title, description }: DormitoryProps) => {
  return (
    <Section
      sectionName="dormitory"
      title={title}
      description={description}
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
