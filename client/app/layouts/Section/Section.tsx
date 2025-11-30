import "./Section.scss";

import clsx from "clsx";

import Button from "~/components/Button/Button";

import type { ReactNode } from "react";

interface SectionProps {
  sectionName: ReactNode;
  children: ReactNode;
  title: string;
  description?: string;
  buttonText?: string;
  buttonVariant?: "light" | "gray" | "dark";
  sectionVariant?: "gray" | "dark";
  isTitleVisible?: boolean;
  isHeaderCenter?: boolean;
}

const Section = ({
  sectionName,
  children,
  title,
  description,
  buttonText,
  buttonVariant = "light",
  sectionVariant,
  isTitleVisible = true,
  isHeaderCenter = false,
}: SectionProps) => {
  return (
    <section
      className={clsx(
        "section",
        sectionVariant && `section--${sectionVariant}`
      )}
    >
      <div
        className={clsx(
          "section__header container",
          isHeaderCenter && "section__header--center"
        )}
      >
        <div className="section__content">
          <h2
            className={clsx(
              "section__title",
              !isTitleVisible && "visually-hidden"
            )}
          >
            {title}
          </h2>
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
