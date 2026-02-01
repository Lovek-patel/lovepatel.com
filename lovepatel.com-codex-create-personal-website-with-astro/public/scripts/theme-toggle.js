const root = document.documentElement;
const toggle = document.querySelector('[data-theme-toggle]');

const getPreferredTheme = () => {
  const stored = localStorage.getItem('theme');
  if (stored) return stored;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

const setTheme = (theme) => {
  root.dataset.theme = theme;
  if (toggle) {
    toggle.setAttribute('aria-pressed', theme === 'light');
  }
};

setTheme(getPreferredTheme());

if (toggle) {
  toggle.addEventListener('click', () => {
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
  });
}
