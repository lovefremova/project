// Алгоритм: при прокрутке страницы, как только блок с календарём появляется в зоне видимости, он подсвечивается.
// Ссылка на блок-схему: https://app.diagrams.net/#G1K429dtNyUYHp734oIxobs8q4gMOSeTjd#%7B%22pageId%22%3A%22Wz0CzlS7Yllp8K9p48SS%22%7D 

// Объявляем переменную для календарного блока
const calendarBlock = document.querySelector('.calendar__grid');

// Функция для проверки видимости элемента
function isVisible(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}

// Слушатель на событие scroll
window.addEventListener('scroll', () => {
  if (isVisible(calendarBlock)) {
    console.log('Блок календаря стал видимым');
  }
});

const scheduleData = {
  "2025-05-15": "Английский A2",
  "2025-05-20": "Немецкий B1",
  "2025-05-27": "Методика"
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