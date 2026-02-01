const root = document.documentElement;
const themeToggle = document.querySelector('[data-theme-toggle]');
const mobileToggle = document.querySelector('[data-mobile-toggle]');
const mobilePanel = document.querySelector('[data-mobile-panel]');
const mobileOverlay = document.querySelector('[data-mobile-overlay]');
const mobileClose = document.querySelector('[data-mobile-close]');
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

const closeMobilePanel = () => {
  if (!mobilePanel || !mobileToggle || !mobileOverlay) return;
  mobilePanel.classList.remove('is-open');
  mobileOverlay.classList.remove('is-visible');
  mobileToggle.setAttribute('aria-expanded', 'false');
};

if (mobileToggle && mobilePanel && mobileOverlay) {
  mobileToggle.addEventListener('click', () => {
    const isOpen = mobilePanel.classList.toggle('is-open');
    mobileOverlay.classList.toggle('is-visible', isOpen);
    mobileToggle.setAttribute('aria-expanded', isOpen);
  });

  if (mobileClose) {
    mobileClose.addEventListener('click', closeMobilePanel);
  }

  mobileOverlay.addEventListener('click', closeMobilePanel);
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

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMobilePanel();
  }
});
