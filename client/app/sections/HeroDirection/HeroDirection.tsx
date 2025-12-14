import "./HeroDirection.scss";

import type { DirectionData } from "~/routes/directions.$direction";

import HeroDirectionList from "~/components/HeroDirectionList/HeroDirectionList";

interface HeroDirectionsProps {
  data: DirectionData;
}

interface HeroDirectionInfo {
  id: number;
  characteristic: string;
  value: string;
}

const HeroDirection = ({ data }: HeroDirectionsProps) => {
  const {
    code,
    educationForm,
    fullName,
    passingGrade,
		durationStudy,
    price,
    availabilityDormitory,
    availabilityMilitaryDepartment,
    accentColor,
  } = data;

  const HeroDirectionInfoListData: HeroDirectionInfo[] = [
    {
      id: 1,
      characteristic: "Форма обучения",
      value: educationForm,
    },
    {
      id: 2,
      characteristic: "Длительность",
      value: durationStudy,
    },
    {
      id: 3,
      characteristic: "Проходной балл",
      value: passingGrade,
    },
    {
      id: 4,
      characteristic: "Стоимость",
      value: `от ${price.toLocaleString("ru-Ru").toString()} ₽`,
    },
    {
      id: 5,
      characteristic: "Общежитие",
      value: availabilityDormitory ? "есть" : "отсутствует",
    },
    {
      id: 6,
      characteristic: "Военная кафедра",
      value: availabilityMilitaryDepartment ? "есть" : "отсутствует",
    },
  ];

  return (
    <section
      className="hero-direction"
      style={{ "--color-accent": accentColor.accentColor } as React.CSSProperties}
    >
      <div className="hero-direction__inner">
        <div className="hero-direction__info">
          <p className="hero-direction__code">{code}</p>
          <h1 className="hero-direction__title">{fullName}</h1>
        </div>

        <HeroDirectionList data={HeroDirectionInfoListData} />
      </div>
    </section>
  );
};

export default HeroDirection;
