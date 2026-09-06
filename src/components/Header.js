import { store } from '../state/store.js';
import {
  IconShoppingBag,
  IconBuilding,
  IconMapPin,
  IconSearch,
  IconUser,
  IconChevronDown,
  IconWheat,
  IconTrendingUp,
  IconTractor,
  IconHelpCircle,
  IconFileText,
  IconPlay,
  IconX
} from './icons.js';

export function renderHeader() {
  const state = store.getState();
  const region = state.selectedRegion;
  const cartCount = store.getCartCount();
  const isBulk = state.buyerMode === 'bulk';
  const currentHash = window.location.hash || '#/';

  const isMarketActive = currentHash.startsWith('#/direct-from-farmer');
  const isBulkActive = currentHash.startsWith('#/bulk');
  const isFpoActive = currentHash.startsWith('#/fpos');
  const isFairActive = currentHash.startsWith('#/fair-pricing');
  const isSellActive = currentHash.startsWith('#/sell');

  return `
    <header class="site-header">
      <div class="container">
        <!-- Brand Logo -->
        <a href="#/" class="brand-logo" id="nav-logo" title="KISAN - Direct Farm Marketplace">
          <img src="/logo.png" alt="KISAN" class="brand-logo-img" />
        </a>

        <!-- Navigation Links -->
        <nav class="header-nav">
          <a href="#/direct-from-farmer" class="nav-link ${isMarketActive ? 'active' : ''}">
            Marketplace
          </a>
          <a href="#/bulk" class="nav-link ${isBulkActive ? 'active' : ''}">
            Bulk Sourcing
            <span class="nav-chip">B2B</span>
          </a>
          <a href="#/fpos" class="nav-link ${isFpoActive ? 'active' : ''}">
            FPO Network
          </a>
          <a href="#/fair-pricing" class="nav-link ${isFairActive ? 'active' : ''}">
            Price Index
          </a>
          <a href="#/sell" class="nav-link ${isSellActive ? 'active' : ''}" style="color:#00665e;">
            Sell Direct
          </a>
        </nav>

        <!-- Actions Toolbar -->
        <div class="header-actions">
          <!-- Segmented Buyer Mode Switcher -->
          <div class="buyer-mode-nav-toggle hide-on-mobile" title="Switch between Retail Household and Wholesale B2B Sourcing">
            <button id="toggle-mode-retail" class="buyer-mode-btn ${!isBulk ? 'active' : ''}">
              ${IconShoppingBag(13)}
              <span>Retail</span>
            </button>
            <button id="toggle-mode-bulk" class="buyer-mode-btn ${isBulk ? 'active' : ''}">
              ${IconBuilding(13)}
              <span>Bulk B2B</span>
            </button>
          </div>

          <!-- Location Selector Pill -->
          <button id="header-location-btn" class="header-loc-btn" title="Change delivery location pincode">
            <span style="color:#00665e; display:flex; align-items:center;">${IconMapPin(13)}</span>
            <span class="hide-on-mobile" style="font-size:0.8rem;">${region.city}</span>
            <span style="color:#94a3b8; display:flex; align-items:center;">${IconChevronDown(11)}</span>
          </button>

          <div class="header-sep hide-on-mobile"></div>

          <!-- Search Button -->
          <button id="header-search-btn" class="icon-btn" aria-label="Search produce and farmers" title="Search catalog">
            ${IconSearch(17)}
          </button>

          <!-- Judge Demo Button for Hackathon Evaluation -->
          <a href="#/demo" class="c-btn c-btn-primary c-btn-sm judge-demo-nav-btn" title="Interactive 7-Step Hackathon Judge Demo Workflow" style="padding:0.38rem 0.85rem; font-size:0.8rem; font-weight:700; border-radius:999px; gap:6px; display:inline-flex; align-items:center; background:#00665e; color:#ffffff; text-decoration:none; box-shadow:0 2px 8px rgba(0,102,94,0.25);">
            <span style="display:flex; align-items:center;">${IconPlay(12)}</span>
            <span>Judge Demo</span>
            <span class="nav-chip" style="background:#00332e; color:#9ce9df; font-size:0.62rem; padding:1px 5px; letter-spacing:0.5px;">LIVE</span>
          </a>

          <!-- User Account Button -->
          <button id="header-user-btn" class="icon-btn hide-on-phone" aria-label="User Account" title="My Account / Sign In">
            ${IconUser(17)}
          </button>

          <!-- Cart Button -->
          <button id="header-cart-btn" class="icon-btn cart-btn" aria-label="Shopping Basket" title="View Harvest Basket">
            ${IconShoppingBag(17)}
            ${cartCount > 0 ? `<span class="cart-count-badge">${cartCount}</span>` : ''}
          </button>

          <!-- Mobile Hamburger -->
          <button id="header-hamburger-btn" class="icon-btn hamburger-btn" aria-label="Open Menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Drawer Navigation -->
    <div id="mobile-menu-drawer" class="cart-drawer-overlay">
      <div class="cart-drawer" style="right:auto; left:0; transform:translateX(-100%);">
        <div class="cart-drawer-header">
          <a href="#/" style="display:flex; align-items:center;">
            <img src="/logo.png" alt="KISAN" class="brand-logo-img" style="height:36px;" />
          </a>
          <button id="close-mobile-menu" class="modal-close-btn" style="position:static;">
            ${IconX(18)}
          </button>
        </div>
        <div class="cart-drawer-body">
          <div style="padding:0.75rem 0; margin-bottom:1rem; border-bottom:1px solid #eef2f2;">
            <div style="font-size:0.75rem; font-weight:700; color:#7d8483; margin-bottom:0.5rem; text-transform:uppercase;">Select Buyer Mode:</div>
            <div style="display:flex; gap:0.5rem;">
              <button id="mobile-toggle-retail" class="c-btn ${!isBulk ? 'c-btn-primary' : 'c-btn-outline'} c-btn-sm" style="flex:1; display:flex; align-items:center; justify-content:center; gap:6px;">
                ${IconShoppingBag(14)} Retail / Home
              </button>
              <button id="mobile-toggle-bulk" class="c-btn ${isBulk ? 'c-btn-primary' : 'c-btn-outline'} c-btn-sm" style="flex:1; display:flex; align-items:center; justify-content:center; gap:6px;">
                ${IconBuilding(14)} Bulk B2B
              </button>
            </div>
          </div>
          <!-- Judge Demo Card for Hackathon Presentation -->
          <a href="#/demo" class="mobile-nav-link" style="background:linear-gradient(135deg,#004c46,#00665e); color:#ffffff; padding:0.85rem 1rem; border-radius:12px; margin-bottom:1rem; display:flex; align-items:center; justify-content:space-between; text-decoration:none; box-shadow:0 4px 12px rgba(0,76,70,0.25);">
            <div style="display:flex; align-items:center; gap:10px;">
              <span style="background:rgba(255,255,255,0.2); width:32px; height:32px; border-radius:50%; display:flex; align-items:center; justify-content:center;">${IconPlay(16)}</span>
              <div>
                <div style="font-weight:700; font-size:0.95rem; color:#ffffff;">Judge Demo Workflow</div>
                <div style="font-size:0.75rem; color:#9ce9df;">Farmer to Logistics to Payout</div>
              </div>
            </div>
            <span style="background:#ffffff; color:#004c46; padding:3px 10px; border-radius:999px; font-size:0.75rem; font-weight:800;">LIVE</span>
          </a>
          <a href="#/direct-from-farmer" class="nav-link mobile-nav-link" style="font-size:1.05rem; padding:0.75rem 0; display:flex; align-items:center; gap:10px;">
            <span style="color:#00665e;">${IconShoppingBag(16)}</span> Marketplace
          </a>
          <a href="#/bulk" class="nav-link mobile-nav-link" style="font-size:1.05rem; padding:0.75rem 0; display:flex; align-items:center; gap:10px;">
            <span style="color:#00665e;">${IconBuilding(16)}</span> Bulk & B2B Sourcing
          </a>
          <a href="#/fpos" class="nav-link mobile-nav-link" style="font-size:1.05rem; padding:0.75rem 0; display:flex; align-items:center; gap:10px;">
            <span style="color:#00665e;">${IconWheat(16)}</span> Verified FPO Network
          </a>
          <a href="#/fair-pricing" class="nav-link mobile-nav-link" style="font-size:1.05rem; padding:0.75rem 0; display:flex; align-items:center; gap:10px;">
            <span style="color:#00665e;">${IconTrendingUp(16)}</span> Mandi Price Index
          </a>
          <a href="#/sell" class="nav-link mobile-nav-link" style="font-size:1.05rem; padding:0.75rem 0; color:#00665e; font-weight:700; display:flex; align-items:center; gap:10px;">
            <span>${IconTractor(16)}</span> Sell as Farmer / FPO
          </a>
          <button id="mobile-user-btn" class="nav-link mobile-nav-link" style="font-size:1.05rem; padding:0.75rem 0; width:100%; text-align:left; display:flex; align-items:center; gap:10px; border:none; background:none; cursor:pointer;">
            <span style="color:#00665e;">${IconUser(16)}</span> ${state.user ? `Account (${state.user.email.split('@')[0]})` : 'Sign In / Account'}
          </button>
          <hr style="border:none; border-top:1px solid #f0f4f4; margin:1rem 0;">
          <a href="#/contact" class="nav-link mobile-nav-link" style="font-size:0.95rem; padding:0.5rem 0; color:#535858; display:flex; align-items:center; gap:10px;">
            <span style="color:#717a78;">${IconHelpCircle(16)}</span> Kisan Care & Support
          </a>
          <a href="#/tos" class="nav-link mobile-nav-link" style="font-size:0.95rem; padding:0.5rem 0; color:#535858; display:flex; align-items:center; gap:10px;">
            <span style="color:#717a78;">${IconFileText(16)}</span> Direct Trade & Fair Terms
          </a>
        </div>
      </div>
    </div>
  `;
}

export function attachHeaderListeners() {
  document.getElementById('toggle-mode-retail')?.addEventListener('click', () => {
    store.setBuyerMode('retail');
  });

  document.getElementById('toggle-mode-bulk')?.addEventListener('click', () => {
    store.setBuyerMode('bulk');
  });

  document.getElementById('mobile-toggle-retail')?.addEventListener('click', () => {
    store.setBuyerMode('retail');
  });

  document.getElementById('mobile-toggle-bulk')?.addEventListener('click', () => {
    store.setBuyerMode('bulk');
  });

  document.getElementById('header-location-btn')?.addEventListener('click', () => {
    store.setLocationModalOpen(true);
  });

  document.getElementById('header-search-btn')?.addEventListener('click', () => {
    store.setSearchOpen(true);
  });

  document.getElementById('header-cart-btn')?.addEventListener('click', () => {
    store.setCartOpen(true);
  });

  document.getElementById('header-user-btn')?.addEventListener('click', () => {
    const { user } = store.getState();
    if (user) {
      if (confirm(`Signed in as ${user.email}. Do you want to sign out?`)) {
        store.logout();
      }
    } else {
      store.setAuthModalOpen(true);
    }
  });

  const mobileDrawer = document.getElementById('mobile-menu-drawer');
  const openMenuBtn = document.getElementById('header-hamburger-btn');
  const closeMenuBtn = document.getElementById('close-mobile-menu');

  openMenuBtn?.addEventListener('click', () => {
    mobileDrawer?.classList.add('open');
    const drawerEl = mobileDrawer?.querySelector('.cart-drawer');
    if (drawerEl) drawerEl.style.transform = 'translateX(0)';
  });

  const closeMenu = () => {
    mobileDrawer?.classList.remove('open');
    const drawerEl = mobileDrawer?.querySelector('.cart-drawer');
    if (drawerEl) drawerEl.style.transform = 'translateX(-100%)';
  };

  closeMenuBtn?.addEventListener('click', closeMenu);
  mobileDrawer?.addEventListener('click', (e) => {
    if (e.target === mobileDrawer) closeMenu();
  });
  mobileDrawer?.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.getElementById('mobile-user-btn')?.addEventListener('click', () => {
    closeMenu();
    const { user } = store.getState();
    if (user) {
      if (confirm(`Signed in as ${user.email}. Do you want to sign out?`)) {
        store.logout();
      }
    } else {
      store.setAuthModalOpen(true);
    }
  });
}
