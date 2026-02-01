const mobileToggle = document.querySelector('[data-mobile-toggle]');
const overlayWrapper = document.querySelector('[data-mobile-overlay]');
const overlay = overlayWrapper?.querySelector('[data-overlay]');
const panel = overlayWrapper?.querySelector('[data-panel]');
const closeButton = overlayWrapper?.querySelector('[data-mobile-close]');

const closePanel = () => {
  if (!overlay || !panel || !mobileToggle) return;
  overlay.classList.remove('opacity-100');
  overlay.classList.add('opacity-0');
  overlay.classList.add('pointer-events-none');
  panel.classList.remove('translate-x-0');
  panel.classList.add('translate-x-full');
  mobileToggle.setAttribute('aria-expanded', 'false');
};

const openPanel = () => {
  if (!overlay || !panel || !mobileToggle) return;
  overlay.classList.remove('opacity-0');
  overlay.classList.remove('pointer-events-none');
  overlay.classList.add('opacity-100');
  panel.classList.remove('translate-x-full');
  panel.classList.add('translate-x-0');
  mobileToggle.setAttribute('aria-expanded', 'true');
};

if (mobileToggle && overlay && panel) {
  mobileToggle.addEventListener('click', () => {
    if (mobileToggle.getAttribute('aria-expanded') === 'true') {
      closePanel();
    } else {
      openPanel();
    }
  });

  overlay.addEventListener('click', closePanel);
  closeButton?.addEventListener('click', closePanel);
}

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closePanel();
  }
});
