import "./Workers.scss";

import Section from "~/layouts/Section/Section";
import WorkersList from "~/components/WorkersList/WorkersList";

const Workers = () => {
  return (
    <Section
      title="Коллектив кафедры"
      sectionName="workers"
      description="Объединяем опытных преподавателей и молодых исследователей, ведём научные проекты мирового масштаба"
      buttonText="Смотреть всех"
      buttonVariant="gray"
    >
      <div className="workers__inner">
        <WorkersList />
      </div>
    </Section>
  );
};

export default Workers;
