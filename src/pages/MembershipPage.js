import { store } from '../state/store.js';
import {
  IconAward,
  IconTruck,
  IconZap,
  IconTag,
  IconStore,
  IconLock
} from '../components/icons.js';

export function renderMembershipPage() {
  const isAnnual = store.getState().membershipSelectedPlan === 'annual';

  return `
    <div class="membership-page">
      <!-- Hero -->
      <section class="membership-hero">
        <div class="container" style="max-width:820px;">
          <span style="display:inline-flex; align-items:center; gap:6px; font-size:0.85rem; font-weight:700; background:rgba(255,255,255,0.15); color:#ffffff; padding:0.35rem 1rem; border-radius:999px; margin-bottom:1rem;">
            ${IconAward(14)}
            <span>KISAN Membership</span>
          </span>
          <h1 class="heading-display" style="color:#ffffff; margin-bottom:1rem;">
            The Kisan Mitra Pass
          </h1>
          <p class="body-lg" style="color:#e4fbf7; margin-bottom:2rem;">
            Unlimited free direct farm-to-door express delivery across 25,000+ Indian pincodes, VIP early access to Alphonso & Kesar harvests, 10% box discounts, and contribution to the 1% for Soil fund.
          </p>

          <!-- Plan Billing Toggle -->
          <div style="display:inline-flex; flex-wrap:wrap; justify-content:center; max-width:100%; background:rgba(0,0,0,0.25); padding:0.35rem; border-radius:999px; gap:4px;">
            <button id="plan-toggle-annual" class="order-mode-tab ${isAnnual ? 'active' : ''}" style="color:${isAnnual ? '#00665e' : '#ffffff'}; font-weight:700; white-space:nowrap;">
              Annual Pass &middot; Only ₹83/month
            </button>
            <button id="plan-toggle-monthly" class="order-mode-tab ${!isAnnual ? 'active' : ''}" style="color:${!isAnnual ? '#00665e' : '#ffffff'}; font-weight:700; white-space:nowrap;">
              Monthly Pass (₹149/mo)
            </button>
          </div>
        </div>
      </section>

      <!-- Member Benefits Grid -->
      <section style="padding: 5rem 0;">
        <div class="container">
          <div class="pass-card-grid">
            <!-- Left: Perks List -->
            <div>
              <span class="badge badge-organic" style="margin-bottom:0.5rem; display:inline-block;">Kisan Mitra Privileges</span>
              <h2 class="heading-xl" style="margin-bottom:1.5rem;">Why Indian families love the Kisan Mitra Pass</h2>

              <div class="pass-perk-item">
                <div class="pass-perk-icon" style="color:#00665e; display:flex; align-items:center; justify-content:center;">${IconTruck(22)}</div>
                <div>
                  <h4 style="font-size:1.1rem; font-weight:700; color:#1a1c1c;">100% Free Shipping on All Farm Boxes</h4>
                  <p class="body-sm">Order fresh mangoes, A2 bilona ghee, or weekly sabzis whenever you need without worrying about delivery charges. Direct express delivery to Mumbai, Bengaluru, Delhi, Hyderabad, Chennai, and tier-2/3 cities.</p>
                </div>
              </div>

              <div class="pass-perk-item">
                <div class="pass-perk-icon" style="color:#00665e; display:flex; align-items:center; justify-content:center;">${IconZap(22)}</div>
                <div>
                  <h4 style="font-size:1.1rem; font-weight:700; color:#1a1c1c;">72-Hour Early Reservation for Limited Mango Crops</h4>
                  <p class="body-sm">Devgad Alphonso, Talala Gir Kesar, and Kinnaur snow apples are harvested in limited batches. Kisan Mitra members get early booking before public release.</p>
                </div>
              </div>

              <div class="pass-perk-item">
                <div class="pass-perk-icon" style="color:#00665e; display:flex; align-items:center; justify-content:center;">${IconTag(22)}</div>
                <div>
                  <h4 style="font-size:1.1rem; font-weight:700; color:#1a1c1c;">Flat 10% Member Discount on Box Top-Ups</h4>
                  <p class="body-sm">Save 10% on all single-estate coffees, cold-pressed oils, pure A2 ghee jars, and Kashmiri saffron throughout your pass validity.</p>
                </div>
              </div>

              <div class="pass-perk-item">
                <div class="pass-perk-icon" style="color:#00665e; display:flex; align-items:center; justify-content:center;">${IconStore(22)}</div>
                <div>
                  <h4 style="font-size:1.1rem; font-weight:700; color:#1a1c1c;">Annual Farm & Gaushala Visit Pass</h4>
                  <p class="body-sm">Complimentary invitation for your family to visit our partner organic mango baugs in Devgad or Gir Gaushala in Saurashtra to experience real kisan life.</p>
                </div>
              </div>
            </div>

            <!-- Right: Pricing Card -->
            <div style="background:#ffffff; border:2px solid #00665e; border-radius:1.75rem; padding:2.5rem; box-shadow:0 16px 40px rgba(0,50,45,0.08); text-align:center;">
              <span class="badge badge-adoption" style="margin-bottom:0.75rem; display:inline-block;">Kisan Mitra All-Access</span>
              <div style="font-size:3.25rem; font-weight:900; color:#00665e; line-height:1; margin:1rem 0 0.5rem 0;">
                ${isAnnual ? store.formatPrice(999) : store.formatPrice(149)}
              </div>
              <div style="font-size:0.9rem; color:#676d6c; margin-bottom:2rem;">
                ${isAnnual ? 'Billed annually at ₹999/yr · Save ₹789' : 'Billed monthly at ₹149/mo · Cancel anytime'}
              </div>

              <button id="btn-join-harvest-pass" class="c-btn c-btn-primary c-btn-block c-btn-lg" style="margin-bottom:1rem; font-weight:700;">
                Activate Kisan Mitra Pass &rarr;
              </button>

              <div style="font-size:0.8rem; color:#7d8483; display:flex; align-items:center; justify-content:center; gap:4px;">
                <span style="color:#00665e;">${IconLock(13)}</span>
                <span>30-Day satisfaction refund &middot; Zero hidden fees</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

export function attachMembershipListeners() {
  document.getElementById('plan-toggle-annual')?.addEventListener('click', () => {
    store.state.membershipSelectedPlan = 'annual';
    store.notify();
  });

  document.getElementById('plan-toggle-monthly')?.addEventListener('click', () => {
    store.state.membershipSelectedPlan = 'monthly';
    store.notify();
  });

  document.getElementById('btn-join-harvest-pass')?.addEventListener('click', () => {
    const isAnnual = store.getState().membershipSelectedPlan === 'annual';
    const planName = isAnnual ? 'Annual Kisan Mitra Pass (₹999)' : 'Monthly Kisan Mitra Pass (₹149)';
    alert(`Dhanyawaad for choosing the ${planName}!\n\nYour membership has been activated. Enjoy unlimited FREE delivery on all Devgad Alphonso boxes, Gir A2 bilona ghee, and weekly organic harvest boxes across India!`);
    store.showToast('Kisan Mitra Pass Activated!', 'success');
  });
}
