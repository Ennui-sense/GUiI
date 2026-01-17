export interface IWorkersCard {
  id?: number;
  imageSrc: string;
  name: string;
  profession: string;
  description: string;
}

export const WorkersCardsData: IWorkersCard[] = [
  {
    id: 1,
    imageSrc: "/img/workers/1.jpg",
    name: "Мохов Виктор Павлович",
    profession: "Декан Гуманитарного факультета",
    description:
      "Поможет с переводом на другой факультет, восстановлением и отчислением",
  },
  {
    id: 2,
    imageSrc: "/img/workers/2.jpg",
    name: "Паздникова Наталья Павловна",
    profession: "Заведующий кафедрой, доцент",
    description: "Поможет с вопросами по научной работе, курсовым и дипломам",
  },
  {
    id: 3,
    imageSrc: "/img/workers/3.jpg",
    name: "Михайлова Юлия Владимировна",
    profession: "Заместитель декана по учебной работе",
    description:
      "Поможет студентам МТИД проставить зачёты и продлить студенческий",
  },
  {
    id: 4,
    imageSrc: "/img/workers/4.jpg",
    name: "Юрьева Ольга Владимировна",
    profession: "Заместитель декана по учебной работе",
    description:
      "Поможет студентам ГМУ проставить зачёты и продлить студенческий",
  },
];
