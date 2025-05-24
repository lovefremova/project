const form = document.querySelector('.subscribe-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.email.value;
    localStorage.setItem('subscribedEmail', email);
    alert('Email сохранён!');
    form.reset();
  });

  const savedEmail = localStorage.getItem('subscribedEmail');
  if (savedEmail) {
    form.email.value = savedEmail;
  }
}