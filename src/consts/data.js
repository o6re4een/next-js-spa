import img1 from "@/assets/news/1.png";
import img2 from "@/assets/news/2.png";
import img3 from "@/assets/news/3.png";

import HighEd from "@/assets/Benefits/HighEd.svg";
import MidEd from "@/assets/Benefits/MidEd.svg";
import TargetEd from "@/assets/Benefits/TargetEd.svg";
import AbiturIcon from "@/assets/Benefits/Abitur.svg";
import CampusIcon from "@/assets/Benefits/Campus.svg";
import Folder from "@/assets/Benefits/FolderIcon.svg";
import Acceptance from "@/assets/Benefits/Acceptance.svg";
import Prikaz from "@/assets/Benefits/Prikaz.svg";
import PaidEd from "@/assets/Benefits/PaidEd.svg";

export const data = {
  news: [
    {
      date: "25.11.2024",
      image: img1,
      heading: "Городской круглый стол",
      text: "21 ноября в читальном зале нашего вуза состоялся Круглый стол на тему «Проблемы психолого-педагогического сопровождения несовершеннолетних в г. Нижний Тагил», организаторами которого выступили доценты кафедры социальной работы, управления и права И. Ж. Калашников и О. В. Калашникова. В нем приняли участие педагоги-психологи образовательных организаций города, а также студенты СГФ и ФЕМИ. ",
    },
    {
      date: "25.11.2024",
      image: img2,
      heading: "Гимн студентов «Gaudeamus»",
      text: "18 ноября, в преддверии Дня преподавателя высшей школы, студенты 1 курса факультета художественного образования (профили «Изобразительное искусство и Дополнительное образование (дизайн)» и «Графический дизайн» познакомились с историей создания студенческого гимна «Gaudeamus».  ",
    },
    {
      date: "25.11.2024",
      image: img3,
      heading: "Студент года",
      text: "Цель премии – выявить и поддержать обучающихся образовательных организаций России, у которых есть особые достижения в области профессиональной деятельности, творчества, спорта, молодежной политики, студенческого лидерства, общественной деятельности и добровольчества. ",
    },
  ],
  benefits: [
    {
      title: "Высшее образование, бакалавриат, магистратура",
      icon: HighEd,
    },
    {
      title: "Среднее профессиональное образование",
      icon: MidEd,
    },
    {
      title: "Целевое образование",
      icon: TargetEd,
    },
    {
      title: "Новости для абитуриентов",
      icon: AbiturIcon,
    },
    {
      title: "Общежитие",
      icon: CampusIcon,
    },
    {
      title: "Нормативно-правовые документы, регламентирующие прием",
      icon: Folder,
    },
    {
      title: "Ход приема (списки поступающих конкурсные списки)",
      icon: Acceptance,
    },
    {
      title: "Приказы о зачисление",
      icon: Prikaz,
    },
    {
      title: "Платные образовательные услуги",
      icon: PaidEd,
    },
  ],
};
