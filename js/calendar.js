// Алгоритм: при прокрутке страницы, как только блок с календарём появляется в зоне видимости, он подсвечивается.
// Ссылка на блок-схему: https://app.diagrams.net/#G1K429dtNyUYHp734oIxobs8q4gMOSeTjd#%7B%22pageId%22%3A%22Wz0CzlS7Yllp8K9p48SS%22%7D 

// Объявляем переменную для календарного блока
const calendarBlock = document.querySelector('.calendar__grid');

const scheduleData = {
  "2025-01-03": "Английский: Present Simple",
  "2025-01-06": "Немецкий: алфавит и произношение",
  "2025-01-10": "EN: Academic Writing Basics",
  "2025-01-14": "DE: Modalverben — введение",
  "2025-01-17": "Методика: Digital Tools in Class",
  "2025-01-20": "EN: Listening A2",
  "2025-01-24": "DE: Письмо — открытки и e-mail",
  "2025-01-28": "Методика: Управление вниманием",
  "2025-02-01": "EN: Describing People",
  "2025-02-04": "DE: Времена глаголов",
  "2025-02-08": "EN: Writing an Essay",
  "2025-02-11": "DE: Вопросительные предложения",
  "2025-02-14": "Методика: Геймификация",
  "2025-02-17": "EN: Reading for Detail",
  "2025-02-21": "DE: Диалоги A2",
  "2025-02-25": "EN: Irregular Verbs",
  "2025-03-02": "EN: Travel Vocabulary",
  "2025-03-05": "DE: Строим диалог",
  "2025-03-09": "Методика: Работа в парах",
  "2025-03-12": "EN: Future Tenses",
  "2025-03-15": "DE: Lesen und Verstehen",
  "2025-03-19": "EN: Writing a CV",
  "2025-03-22": "DE: Предлоги места",
  "2025-03-27": "Методика: Оценка навыков",
  "2025-04-01": "EN: Passive Voice",
  "2025-04-04": "DE: Семья и отношения",
  "2025-04-08": "EN: Listening B1",
  "2025-04-11": "DE: Грамматика B1",
  "2025-04-15": "Методика: Создание плана урока",
  "2025-04-18": "EN: Storytelling Techniques",
  "2025-04-22": "DE: Reisen — лекcика",
  "2025-04-26": "EN: Giving Presentations",
  "2025-05-01": "EN: Вводный урок A1",
  "2025-05-03": "DE: Произношение",
  "2025-05-07": "EN: Чтение A2",
  "2025-05-10": "DE: Диалоги в кафе",
  "2025-05-15": "EN: Английский A2",
  "2025-05-20": "DE: Немецкий B1",
  "2025-05-24": "Методика: CLIL",
  "2025-05-28": "EN: Идиомы в речи",
  "2025-06-02": "EN: Writing informal letters",
  "2025-06-05": "DE: Повседневные выражения",
  "2025-06-08": "Методика: Работа с видео",
  "2025-06-11": "EN: Listening — интервью",
  "2025-06-14": "DE: Времена прошедшего",
  "2025-06-17": "EN: Устная часть экзамена",
  "2025-06-21": "DE: A1 Prüfungsvorbereitung",
  "2025-06-25": "EN: Collocations",
  "2025-07-01": "EN: Conditional Sentences",
  "2025-07-04": "DE: Modalverben vertiefen",
  "2025-07-08": "EN: Formal Email Writing",
  "2025-07-12": "DE: Словообразование",
  "2025-07-15": "Методика: Работа с карточками",
  "2025-07-18": "EN: IELTS Speaking Tips",
  "2025-07-22": "DE: Порядок слов",
  "2025-07-26": "EN: Prepositions of Place",
  "2025-08-03": "EN: Describing Pictures",
  "2025-08-06": "DE: Hörverstehen",
  "2025-08-10": "EN: Linking Words",
  "2025-08-13": "DE: Тематический лексикон",
  "2025-08-17": "Методика: Тестирование",
  "2025-08-20": "EN: Reported Speech",
  "2025-08-24": "DE: Schreiben A2",
  "2025-08-28": "EN: Vocabulary Expansion",
  "2025-09-02": "EN: Everyday English",
  "2025-09-06": "DE: Ein Interview führen",
  "2025-09-09": "Методика: Обратная связь",
  "2025-09-12": "EN: Listening — podcasts",
  "2025-09-15": "DE: Сложные глаголы",
  "2025-09-19": "EN: Speaking B1",
  "2025-09-23": "DE: Beschreibung von Bildern",
  "2025-09-27": "EN: Article Writing",
  "2025-10-01": "EN: Story Writing Techniques",
  "2025-10-05": "DE: Vergangenheit",
  "2025-10-09": "Методика: Групповая работа",
  "2025-10-13": "EN: Grammar Review B1",
  "2025-10-17": "DE: Лексика профессий",
  "2025-10-21": "EN: British vs American English",
  "2025-10-25": "DE: Вопросительные слова",
  "2025-10-29": "EN: Time Expressions",
  "2025-11-02": "EN: Writing Descriptions",
  "2025-11-06": "DE: Работа с текстами",
  "2025-11-10": "EN: Idioms and Phrasal Verbs",
  "2025-11-14": "DE: Конструкции с zu/zu+inf",
  "2025-11-18": "Методика: Электронные ресурсы",
  "2025-11-22": "EN: Giving Opinions",
  "2025-11-26": "DE: Практика устной речи",
  "2025-11-30": "EN: Paraphrasing",
  "2025-12-01": "EN: Reading Strategies",
  "2025-12-05": "DE: Advent in Deutschland",
  "2025-12-09": "EN: Grammar Test Review",
  "2025-12-13": "DE: Письменная практика B1",
  "2025-12-17": "Методика: Подведение итогов",
  "2025-12-20": "EN: Describing Charts",
  "2025-12-24": "DE: Weihnachtslieder",
  "2025-12-28": "EN: Year-in-Review Speaking"
};


const monthDays = {
  1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30,
  7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31
};

const monthNames = [
  'Январь', 'Февраль', 'Март', 'Апрель',
  'Май', 'Июнь', 'Июль', 'Август',
  'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];

const calendarContainer = document.querySelector('.calendar__grid');
const calendarTitle = document.createElement('div');
calendarTitle.className = 'calendar__title-wrapper';
calendarContainer.before(calendarTitle);

const today = new Date();
let currentYear = today.getFullYear();
let currentMonth = today.getMonth() + 1;

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function generateCalendar(year, month) {
  calendarContainer.innerHTML = '';
  calendarTitle.innerHTML = '';

  // Заголовок календаря < Месяц Год >
  const prevBtn = document.createElement('button');
  prevBtn.textContent = '<';
  prevBtn.className = 'calendar__btn';

  const nextBtn = document.createElement('button');
  nextBtn.textContent = '>';
  nextBtn.className = 'calendar__btn';

  const title = document.createElement('span');
  title.className = 'calendar__month-title';
  title.textContent = `${monthNames[month - 1]} ${year}`;

  calendarTitle.appendChild(prevBtn);
  calendarTitle.appendChild(title);
  calendarTitle.appendChild(nextBtn);

  // Обработка високосного февраля
  let daysInMonth = monthDays[month];
  if (month === 2 && isLeapYear(year)) {
    daysInMonth = 29;
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month - 1, day);
    const formattedDate = date.toISOString().split('T')[0];

    const cell = document.createElement('div');
    cell.classList.add('calendar__cell');
    cell.textContent = day;
    cell.setAttribute('data-date', formattedDate);

    if (scheduleData[formattedDate]) {
      cell.classList.add('has-lesson');
      cell.title = scheduleData[formattedDate];
    }

    calendarContainer.appendChild(cell);
  }

  // Слушатели на кнопки
  prevBtn.addEventListener('click', () => {
    if (currentMonth === 1) {
      currentMonth = 12;
      currentYear -= 1;
    } else {
      currentMonth -= 1;
    }
    generateCalendar(currentYear, currentMonth);
  });

  nextBtn.addEventListener('click', () => {
    if (currentMonth === 12) {
      currentMonth = 1;
      currentYear += 1;
    } else {
      currentMonth += 1;
    }
    generateCalendar(currentYear, currentMonth);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  generateCalendar(currentYear, currentMonth);
});