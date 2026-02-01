const root = document.documentElement;
const themeToggle = document.querySelector('[data-theme-toggle]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const menuPopup = document.querySelector('[data-menu]');

const getPreferredTheme = () => {
  const stored = localStorage.getItem('theme');
  if (stored) return stored;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

const setTheme = (theme) => {
  root.dataset.theme = theme;
  if (themeToggle) {
    themeToggle.setAttribute('aria-pressed', theme === 'light');
    themeToggle.textContent = theme === 'light' ? '🌞' : '🌙';
  }
};

setTheme(getPreferredTheme());

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  });
}

if (menuToggle && menuPopup) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuPopup.classList.toggle('show');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });

  document.addEventListener('click', (event) => {
    if (!menuPopup.contains(event.target) && !menuToggle.contains(event.target)) {
      menuPopup.classList.remove('show');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}
