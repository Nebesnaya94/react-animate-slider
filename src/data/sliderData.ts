import { TDates, ISliderItem } from "./models";
import { createDates } from "../helpers/createDates";

export const infoList: ISliderItem[] = [
  {
    title: "Книги",
    items: [
      {
        date: 1985,
        info: "«Рассказ служанки» / The Handmaid's Tale. Автор: Маргарет Этвуд. Жанры: Роман, Научная фантастика, Фантастика, Антиутопическая литература, Трагедия, Фэнтези, Феминистская научная фантастика",
      },
      {
        date: 1985,
        info: "«Парфюмер» / Das Parfum. Автор: Патрик Зюскинд. Жанры: Роман, Ужасы, Мистерия, Магический реализм, Исторический жанр",
      },
      {
        date: 1991,
        info: "«Американский психопат» / American Psycho. Автор: Брет Истон Эллис. Жанры: Сатира, Ужасы, Чёрный юмор, Литература постмодернизма, Трансгрессивная литература, Психологический реализм",
      },
      {
        date: 1996,
        info: "«Благие знамения» / Good Omens. Авторы: Терри Пратчетт, Нейл Гейман. Жанры: Юмор, Фэнтези, Комедия, Ужасы, Юмористическая литература",
      },
      {
        date: 1996,
        info: "«Игра престолов» / A Game of Thrones. Автор: Джордж Р. Р. Мартин. Жанры: Роман, Эпическое фэнтези, Фэнтези, Сага, Политическая фантастика",
      },
      {
        date: 1997,
        info: "«Мемуары гейши» / Memoirs of a Geisha. Автор: Артур Голден. Жанры: Роман, Исторический жанр",
      },
    ],
  },
  {
    title: "Кино",
    items: [
      {
        date: 1993,
        info: "«Список Шиндлера» / Schindler's List, США. Режиссер: Стивен Спилберг",
      },
      {
        date: 1994,
        info: "«Побег из Шоушенка» / The Shawshank Redemption, США. Режиссер: Фрэнк Дарабонт",
      },
      {
        date: 1994,
        info: "«Криминальное чтиво» / Pulp Fiction, США. Режиссер: Квентин Тарантино",
      },
      {
        date: 1999,
        info: "«Зеленая миля» / The Green Mile, США. Режиссер: Фрэнк Дарабонт",
      },
      {
        date: 1999,
        info: "«Бойцовский клуб» / Fight Club, США. Режиссер: Дэвид Финчер",
      },
      {
        date: 2001,
        info: "«Унесённые призраками» / Sen to Chihiro no kamikakushi, Япония. Режиссер: Хаяо Миядзаки",
      },
    ],
  },
  {
    title: "Музыка",
    items: [
      {
        date: 2000,
        info: "Bon Jovi - It’s My Life. Альбом: «Crush». Жанры: Поп-рок, Арена-рок, Рок",
      },
      {
        date: 2001,
        info: "Тату - Нас Не Догонят. Альбом: «200 по встречной». Жанры: Russian Pop, Поп-музыка",
      },
      {
        date: 2003,
        info: "Evanescence - Bring Me To Life. Альбом: «Fallen». Жанры: Хард-рок, Готик-метал, Метал, Альтернативная музыка/инди",
      },
      {
        date: 2003,
        info: "Linkin Park - Numb. Альбом: «Meteora». Жанры: Альтернативный рок, Поп-рок, Эмо, Альтернативная музыка/инди, Метал, Рок",
      },
      {
        date: 2004,
        info: "Green Day - Wake Me Up When September Ends. Альбом: «American Idiot». Жанр: Альтернативная музыка/инди",
      },
      {
        date: 2005,
        info: "Global Dj's - The Sound Of San-Francisco. Альбом: «Network». Жанр: Танцевальная/электронная музыка",
      },
    ],
  },
];

export const datesList: TDates[] = createDates(infoList);