
function toggleMenu() {
    const navMenu = document.querySelector('.nav__menu');
    navMenu.classList.toggle('nav__menu--active');
}

document.querySelector('.burger').addEventListener('click', () => {
    toggleMenu()
})