export interface IEventsCard {
  id?: number;
  imageSrc: string;
  title: string;
  author: string;
  location: string;
	category: string;
}

export const EventsCardsData: IEventsCard[] = [
  {
    id: 1,
    imageSrc: "/img/events/1.jpg",
    title: "Авторский студенческий театр «17-ая скрипка»",
    author: "Артемьева Юлия Александровна",
    location: "Комсомольский проспект, 29, ауд. 22, 24 (ЦРМП)",
		category: "teams"
  },
  {
    id: 2,
    imageSrc: "/img/events/2.jpg",
    title: "Музыкальная студия «ПРОПЕТЬ»",
    author: "Мамыкина Юлия Николаевна",
    location: "Комсомольский проспект, 29, ауд. 22, 24 (ЦРМП)",
		category: "teams"
  },
	{
		id: 3,
		imageSrc: "/img/events/3.jpg",
		title: "Хореографическая студия “Postscriptum”",
		author: "Абдурахманова Александра Андреевна",
		location: "Комсомольский проспект, 29, ауд. 14 (Клуб студентов)",
		category: "teams"
	},
  {
    id: 4,
    imageSrc: "/img/events/4.jpg",
    title: "Фольклорно-этнографическая студия «Радольница»",
    author: "Надеждина Алена Александровна",
    location: "Комсомольский проспект, 29, ауд. 2 (Клуб студентов)",
		category: "teams"
  },
  {
    id: 5,
    imageSrc: "/img/events/5.jpg",
    title: "Творческое объединение «Лидер»",
    author: "Панькова Екатерина Илдусовна",
    location: "Комсомольский проспект, 29, ауд. 1 (ЦРМП)",
		category: "teams"
  },
  {
    id: 6,
    imageSrc: "/img/events/6.jpg",
    title: "Творческое объединение «КВН»",
    author: "Суворов Вячеслав Сергеевич",
    location: "Комсомольский проспект, 29, ауд. 26 (Клуб студентов)",
		category: "sport"
  },
];
