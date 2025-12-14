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
  isSectionInnerRow?: boolean;
  isSectionInnerRowReverse?: boolean;
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
  isSectionInnerRow = false,
  isSectionInnerRowReverse = false,
}: SectionProps) => {
  return (
    <section
      className={clsx(
        "section",
        sectionVariant && `section--${sectionVariant}`
      )}
    >
      <div
        className={clsx("section__inner", {
          "section__inner--row": isSectionInnerRow,
          "section__inner--row-reverse": isSectionInnerRowReverse,
					"container": !isHeaderCenter
        })}
      >
        <div
          className={clsx(
            "section__header",
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
            {description && (
              <p className="section__description">{description}</p>
            )}
          </div>

          {buttonText && (
            <Button className="section__button" variant={buttonVariant}>
              {buttonText}
            </Button>
          )}
        </div>

        <div className={clsx("section__body", sectionName)}>{children}</div>
      </div>
    </section>
  );
};

export default Section;
