import "./Events.scss";

import Section from "~/layouts/Section/Section";

import EventsFilters from "~/components/EventsFilters/EventsFilters";
import EventsList from "~/components/EventsList/EventsList";
import Button from "~/components/Button/Button";

import { EventsCardsData } from "~/data/EventsCardsData";

import { useState } from "react";

const Events = () => {
  const [activeCategory, setActiveCategory] = useState<string>("teams");
  const [countVisibleCards, setCountVisibleCards] = useState<number>(3);

  const handleFilterClick = (category: string) => {
    setActiveCategory(category);
		setCountVisibleCards(3)
  };

  const filteredEventsCards = EventsCardsData.filter(
    (eventCard) => eventCard.category === activeCategory
  );

  const handleAddButtonClick = () => {
    setCountVisibleCards(countVisibleCards + 3);
  };

  return (
    <Section
      sectionName="events"
      title="Студенческая жизнь"
      description="В Пермском Политехе студенты занимаются спортом, творческими направлениями и социальными проектами, открывая возможности для саморазвития и ярких впечатлений"
      sectionVariant="gray"
    >
      <div className="events__inner">
        <EventsFilters
          onClick={handleFilterClick}
          activeCategory={activeCategory}
					eventsCards={EventsCardsData}
        />
        <EventsList
          filteredEventsCards={filteredEventsCards.slice(0, countVisibleCards)}
        />
        {filteredEventsCards.length >	 countVisibleCards && (
          <Button
            className="events__button"
            variant="dark"
            onClick={handleAddButtonClick}
          >
            Показать еще
          </Button>
        )}
      </div>
    </Section>
  );
};

export default Events;
