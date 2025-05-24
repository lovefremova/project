'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const courseTitles = [
    'Английский для начинающих',
    'Современный немецкий: от B1 до B2',
    'Академическое письмо на английском',
    'Методика преподавания иностранных языков'
  ];

  const newsList = [
    {
        title: 'Технологии на уроке',
        text: 'Виртуальная реальность в обучении — первый опыт преподавателей.'
    },
    {
        title: 'Дистанционное обучение',
        text: 'Как сохранить мотивацию студентов и избежать выгорания?'
    },
    {
        title: 'Цифровая педагогика',
        text: 'Учитель нового поколения — технологии и подходы.'
    }
  ]

  const coursesContainer = document.querySelector('.courses__list');
  if (coursesContainer) {
    coursesContainer.innerHTML = '';
    courseTitles.forEach((title, index) => {
      const courseDiv = document.createElement('div');
      courseDiv.className = `courses__item courses__item--${index + 1}`;
      courseDiv.innerHTML = `<span class="courses__text">${title}</span>`;
      coursesContainer.appendChild(courseDiv);
    });
  }
  const newsContainer = document.querySelector('.news__list');
  if (newsContainer) {
    newsContainer.innerHTML = '';
    for (const index in newsList) {
      if (newsList.hasOwnProperty(index)) {
        const news = newsList[index];
        const newsItem = document.createElement('div');
        newsItem.className = `news__item news__item--${parseInt(index) + 1}`;
        newsItem.innerHTML = `
          <p class="news__text" title="${news.title}">${news.text}</p>
        `;
        newsContainer.appendChild(newsItem);
      }
    }
  }

  // Кнопка скролла вверх
  const scrollButton = document.createElement('button');
  scrollButton.innerText = '↑';
  scrollButton.classList.add('scroll-to-top');
  scrollButton.style.position = 'fixed';
  scrollButton.style.bottom = '20px';
  scrollButton.style.right = '20px';
  scrollButton.style.padding = '10px 15px';
  scrollButton.style.display = 'none';
  scrollButton.style.backgroundColor = '#2c3e50';
  scrollButton.style.color = 'white';
  scrollButton.style.border = 'none';
  scrollButton.style.borderRadius = '5px';
  scrollButton.style.cursor = 'pointer';
  document.body.appendChild(scrollButton);

  scrollButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    scrollButton.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
});