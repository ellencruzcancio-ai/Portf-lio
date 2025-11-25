const themeToggle = document.querySelector('.theme-switch');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Verifica se o usuário já escolheu um tema antes
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
}

themeToggle.addEventListener('click', () => {
    let theme = body.getAttribute('data-theme');

    if (theme === 'dark') {
        body.setAttribute('data-theme', 'light');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    }
});