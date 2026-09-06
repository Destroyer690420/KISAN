import './styles/tokens.css';
import './styles/base.css';
import './styles/components.css';
import './styles/pages.css';

import { store } from './state/store.js';
import { resolveRoute } from './router.js';
import { renderHeader, attachHeaderListeners } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { renderCartDrawer, attachCartListeners } from './components/CartDrawer.js';
import { renderSearchModal, attachSearchListeners } from './components/SearchModal.js';
import { renderCountryCurrencyModal, attachCountryCurrencyListeners } from './components/CountryCurrencyModal.js';
import { renderAuthModal, attachAuthListeners } from './components/AuthModal.js';
import { renderRfqModal, attachRfqListeners } from './components/RfqModal.js';
import { renderToasts } from './components/Toast.js';

const appEl = document.getElementById('app');

function renderApp() {
  const currentRoute = resolveRoute();

  appEl.innerHTML = `
    ${renderHeader()}
    <main id="main-content">
      ${currentRoute.render()}
    </main>
    ${renderFooter()}
    ${renderCartDrawer()}
    ${renderSearchModal()}
    ${renderCountryCurrencyModal()}
    ${renderAuthModal()}
    ${renderRfqModal()}
    ${renderToasts()}
  `;

  // Attach component listeners
  attachHeaderListeners();
  attachCartListeners();
  attachSearchListeners();
  attachCountryCurrencyListeners();
  attachAuthListeners();
  attachRfqListeners();
  currentRoute.attach();

  // Highlight active nav links
  const hash = window.location.hash || '#/';
  document.querySelectorAll('.nav-link').forEach(link => {
    const route = link.getAttribute('data-route');
    if (route && (hash === `#${route}` || (route === '/direct-from-farmer' && hash.startsWith('#/direct-from-farmer')))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Re-render on state changes
store.subscribe(() => {
  renderApp();
});

// Re-render on navigation
window.addEventListener('hashchange', () => {
  window.scrollTo({ top: 0, behavior: 'instant' });
  renderApp();
});

// Keyboard Esc to close modals
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    store.setCartOpen(false);
    store.setSearchOpen(false);
    store.setLocationModalOpen(false);
    store.setAuthModalOpen(false);
    store.setRfqModalOpen(false);
  }
});

// Initial boot
renderApp();
