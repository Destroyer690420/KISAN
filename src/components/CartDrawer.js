import { store } from '../state/store.js';
import {
  IconTrendingUp,
  IconCheckCircle,
  IconBuilding,
  IconShoppingBag,
  IconLock
} from './icons.js';

export function renderCartDrawer() {
  const state = store.getState();
  const isOpen = state.isCartOpen;
  const items = state.cart;
  const subtotal = store.getCartSubtotal();
  const directFarmerPayout = store.getCartFarmerDirectPayout();
  const buyerSavings = store.getCartEstimatedBuyerSavings();
  const freeShippingThreshold = 999;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFree = Math.max(0, freeShippingThreshold - subtotal);

  return `
    <div id="cart-drawer-overlay" class="cart-drawer-overlay ${isOpen ? 'open' : ''}">
      <div class="cart-drawer">
        <!-- Header -->
        <div class="cart-drawer-header">
          <div class="flex items-center gap-2">
            <h3 style="font-size:1.25rem; font-weight:700; color:#1a1c1c;">Your Direct Farm Order</h3>
            <span class="badge badge-adoption" style="font-size:0.75rem;">${store.getCartCount()} items</span>
          </div>
          <button id="close-cart-btn" class="modal-close-btn" style="position:static;" aria-label="Close Basket">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>

        <!-- Body -->
        <div class="cart-drawer-body">
          <!-- Impact Banner (Mutual Benefit: Farmer Profit + Buyer Savings) -->
          ${items.length > 0 ? `
            <div style="background:linear-gradient(135deg, #004c46 0%, #00665e 100%); color:#ffffff; border-radius:0.85rem; padding:0.85rem 1rem; margin-bottom:1rem; font-size:0.8rem;">
              <div style="display:flex; align-items:center; gap:6px; font-weight:700; font-size:0.85rem; margin-bottom:0.25rem; color:#9ce9df;">
                ${IconTrendingUp(14)}
                <span>Direct Impact & Mandi Bypass</span>
              </div>
              <div style="display:flex; justify-content:space-between; gap:0.5rem; margin-top:0.4rem;">
                <div>
                  <span style="opacity:0.8; font-size:0.75rem;">Paid to Kisan/FPO:</span>
                  <div style="font-size:1rem; font-weight:800; color:#ffffff;">${store.formatPrice(directFarmerPayout)}</div>
                </div>
                <div style="text-align:right;">
                  <span style="opacity:0.8; font-size:0.75rem;">Your Savings vs Retail:</span>
                  <div style="font-size:1rem; font-weight:800; color:#ffd3c0;">${store.formatPrice(buyerSavings)}</div>
                </div>
              </div>
            </div>
          ` : ''}

          <!-- Free Delivery Meter -->
          <div class="free-shipping-bar">
            ${remainingForFree > 0
              ? `Add <strong>${store.formatPrice(remainingForFree)}</strong> more to unlock <strong>FREE direct farm dispatch</strong>!`
              : `<span style="color:#00665e; display:inline-flex; align-items:center; gap:4px;">${IconCheckCircle(14)}</span> <strong>Congratulations!</strong> You unlocked FREE direct farm delivery across India!`
            }
            <div class="progress-track">
              <div class="progress-fill" style="width: ${progressPercent}%;"></div>
            </div>
          </div>

          ${items.length === 0 ? `
            <div style="text-align:center; padding:3rem 1rem; color:#7d8483;">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#b3bdbc" stroke-width="1.5" style="margin:0 auto 1.25rem auto;">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              <h4 style="font-size:1.15rem; font-weight:700; color:#1a1c1c; margin-bottom:0.5rem;">Your order basket is empty</h4>
              <p class="body-sm" style="margin-bottom:1.5rem;">Explore authentic Devgad Alphonso mangoes, Gir A2 bilona ghee, Kinnaur apples, or bulk wholesale crates directly from verified Indian FPOs.</p>
              <a href="#/direct-from-farmer" class="c-btn c-btn-primary" onclick="store.setCartOpen(false)">Browse Direct Farm Marketplace</a>
            </div>
          ` : `
            <div class="cart-items-list">
              ${items.map((item, index) => `
                <div class="cart-item-row" data-index="${index}">
                  <img src="${item.img}" alt="${item.title}" class="cart-item-thumb">
                  <div class="cart-item-details">
                    <div class="flex justify-between items-start gap-1">
                      <div>
                        <h4 class="cart-item-title">${item.title}</h4>
                        <span class="badge ${item.isBulk ? 'badge-adoption' : 'badge-organic'}" style="display:inline-flex; align-items:center; gap:4px; font-size:0.65rem; padding:0.15rem 0.4rem; margin-top:0.2rem;">
                          ${item.isBulk ? `${IconBuilding(11)} B2B Bulk Crate` : `${IconShoppingBag(11)} Retail Household`}
                        </span>
                      </div>
                      <button class="cart-remove-item" data-index="${index}" style="color:#ba2f1e; opacity:0.8; padding:2px; background:none; border:none; cursor:pointer;" title="Remove">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                      </button>
                    </div>

                    <div class="cart-item-meta" style="margin-top:0.3rem;">
                      <span>${item.fpoName ? `FPO: ${item.fpoName} · ` : ''}${item.size || item.weight || 'Standard box'}</span>
                    </div>

                    <div class="cart-item-controls" style="margin-top:0.5rem;">
                      <div class="qty-selector">
                        <button class="qty-btn qty-decrease" data-index="${index}" aria-label="Decrease quantity">−</button>
                        <span class="qty-number">${item.quantity}</span>
                        <button class="qty-btn qty-increase" data-index="${index}" aria-label="Increase quantity">+</button>
                      </div>
                      <div style="font-size:1.05rem; font-weight:700; color:#00665e;">
                        ${store.formatPrice(item.price * item.quantity)}
                      </div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          `}
        </div>

        <!-- Footer -->
        ${items.length > 0 ? `
          <div class="cart-drawer-footer">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
              <span style="color:#535858; font-size:0.95rem;">Order Subtotal</span>
              <span style="font-size:1.35rem; font-weight:800; color:#1a1c1c;">${store.formatPrice(subtotal)}</span>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.25rem; font-size:0.85rem; color:#676d6c;">
              <span>Direct Farm-to-Door Courier Freight</span>
              <span style="font-weight:600; color:${remainingForFree === 0 ? '#00665e' : '#1a1c1c'};">
                ${remainingForFree === 0 ? 'FREE' : store.formatPrice(99)}
              </span>
            </div>

            <button id="cart-checkout-btn" class="c-btn c-btn-primary c-btn-block c-btn-lg" style="margin-bottom:0.75rem; font-weight:700;">
              Proceed to Direct Checkout (UPI / B2B NEFT) &rarr;
            </button>

            <div style="display:flex; align-items:center; justify-content:center; gap:0.4rem; font-size:0.75rem; color:#7d8483;">
              <span style="display:flex; align-items:center;">${IconLock(13)}</span>
              <span>Direct Payout to Farmer/FPO Bank Account &middot; Zero Dalal Fee &middot; FSSAI Certified</span>
            </div>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

export function attachCartListeners() {
  const overlay = document.getElementById('cart-drawer-overlay');
  const closeBtn = document.getElementById('close-cart-btn');

  closeBtn?.addEventListener('click', () => {
    store.setCartOpen(false);
  });

  overlay?.addEventListener('click', (e) => {
    if (e.target === overlay) {
      store.setCartOpen(false);
    }
  });

  document.querySelectorAll('.qty-decrease').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.getAttribute('data-index'));
      const item = store.getState().cart[idx];
      if (item) store.updateCartQuantity(idx, item.quantity - 1);
    });
  });

  document.querySelectorAll('.qty-increase').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.getAttribute('data-index'));
      const item = store.getState().cart[idx];
      if (item) store.updateCartQuantity(idx, item.quantity + 1);
    });
  });

  document.querySelectorAll('.cart-remove-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.getAttribute('data-index'));
      store.updateCartQuantity(idx, 0);
    });
  });

  document.getElementById('cart-checkout-btn')?.addEventListener('click', () => {
    const payout = store.formatPrice(store.getCartFarmerDirectPayout());
    const savings = store.formatPrice(store.getCartEstimatedBuyerSavings());
    alert(`Order Placed Successfully!\n\n• ${payout} has been credited directly to the respective Kisan & FPO bank accounts.\n• You saved ${savings} by eliminating APMC mandi middlemen.\n\nYour fresh harvest is being packed at the village aggregation center!`);
    store.clearCart();
    store.setCartOpen(false);
  });
}
