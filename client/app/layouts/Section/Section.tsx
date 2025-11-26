import "./Section.scss";

import clsx from "clsx";

import Button from "~/components/Button/Button";

import type { ReactNode } from "react";

interface SectionProps {
  sectionName: string;
  children: ReactNode;
  title: string;
  description?: string;
  buttonText?: string;
  buttonVariant?: "light" | "gray" | "dark";
  sectionVariant?: "gray" | "dark";
}

const Section = ({
  sectionName,
  children,
  title,
  description,
  buttonText,
  buttonVariant = "light",
  sectionVariant,
}: SectionProps) => {
  return (
    <section
      className={clsx(
        "section",
        sectionVariant && `section--${sectionVariant}`
      )}
    >
      <div className="section__header container">
        <div className="section__content">
          <h2 className="section__title">{title}</h2>
          {description && <p className="section__description">{description}</p>}
        </div>

        {buttonText && (
          <Button className="section__button" variant={buttonVariant}>
            {buttonText}
          </Button>
        )}
      </div>

      <div className={clsx("section__body", sectionName)}>{children}</div>
    </section>
  );
};

export default Section;
