const root = document.documentElement;
const themeToggle = document.querySelector('[data-theme-toggle]');
const mobileToggle = document.querySelector('[data-mobile-toggle]');
const mobilePanel = document.querySelector('[data-mobile-panel]');
const searchToggle = document.querySelector('[data-search-toggle]');
const searchDialog = document.querySelector('[data-search-dialog]');
const searchClose = document.querySelector('[data-search-close]');

const preferredTheme = () => {
  const stored = localStorage.getItem('theme');
  if (stored) return stored;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

const applyTheme = (theme) => {
  root.dataset.theme = theme;
  if (themeToggle) {
    themeToggle.setAttribute('aria-pressed', theme === 'light');
  }
};

applyTheme(preferredTheme());

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
    applyTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  });
}

if (mobileToggle && mobilePanel) {
  mobileToggle.addEventListener('click', () => {
    const isOpen = mobilePanel.classList.toggle('is-open');
    mobileToggle.setAttribute('aria-expanded', isOpen);
  });

  document.addEventListener('click', (event) => {
    if (!mobilePanel.contains(event.target) && !mobileToggle.contains(event.target)) {
      mobilePanel.classList.remove('is-open');
      mobileToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

if (searchToggle && searchDialog) {
  searchToggle.addEventListener('click', () => {
    searchDialog.showModal();
  });

  if (searchClose) {
    searchClose.addEventListener('click', () => searchDialog.close());
  }

  searchDialog.addEventListener('click', (event) => {
    if (event.target === searchDialog) {
      searchDialog.close();
    }
  });
}
