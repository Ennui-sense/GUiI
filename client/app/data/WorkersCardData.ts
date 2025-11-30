interface IWorkersCardData {
  imageSrc: string;
  name: string;
  profession: string;
  description: string;
}

export const WorkersCardData: IWorkersCardData[] = [
  {
    imageSrc: "/app/assets/img/workers/1.jpg",
    name: "Мохов Виктор Павлович",
    profession: "Декан Гуманитарного факультета",
    description:
      "Поможет с переводом на другой факультет, восстановлением и отчислением",
  },
  {
    imageSrc: "/app/assets/img/workers/2.jpg",
    name: "Паздникова Наталья Павловна",
    profession: "Заведующий кафедрой, доцент",
    description: "Поможет с вопросами по научной работе, курсовым и дипломам",
  },
  {
    imageSrc: "/app/assets/img/workers/3.jpg",
    name: "Михайлова Юлия Владимировна",
    profession: "Заместитель декана по учебной работе",
    description:
      "Поможет студентам МТИД проставить зачёты и продлить студенческий",
  },
  {
    imageSrc: "/app/assets/img/workers/4.jpg",
    name: "Юрьева Ольга Владимировна",
    profession: "Заместитель декана по учебной работе",
    description:
      "Поможет студентам ГМУ проставить зачёты и продлить студенческий",
  },
];
