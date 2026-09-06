import { store } from '../state/store.js';
import {
  IconTractor,
  IconCoins,
  IconZap,
  IconTruck,
  IconLock
} from '../components/icons.js';

export function renderFarmerRegisterPage() {
  return `
    <div class="farmer-register-page">
      <!-- Hero -->
      <section class="membership-hero" style="background: linear-gradient(135deg, #00332e 0%, #004c46 70%, #217870 180%);">
        <div class="container" style="max-width:840px;">
          <span style="display:inline-flex; align-items:center; gap:6px; font-size:0.85rem; font-weight:700; background:rgba(255,255,255,0.15); color:#ffffff; padding:0.35rem 1rem; border-radius:999px; margin-bottom:1rem;">
            ${IconTractor(14)}
            <span>Kisan & FPO Onboarding Portal</span>
          </span>
          <h1 class="heading-display" style="color:#ffffff; margin-bottom:1rem; font-size:2.8rem;">
            Sell Direct to Consumers & Bulk Buyers
          </h1>
          <p class="body-lg" style="color:#e4fbf7; margin-bottom:2rem;">
            Stop surrendering 40%-60% of your crop value to APMC dalals and commission cartels. Set your own fair price, pack at your farm or village aggregation center, and receive direct digital payments into your bank account.
          </p>
        </div>
      </section>

      <!-- Why Sell on KISAN -->
      <section style="padding: 4rem 0; background:#f7faf9;">
        <div class="container">
          <div class="grid grid-cols-3 md:grid-cols-1 gap-6">
            <div style="background:#ffffff; border:1px solid #d6e0df; border-radius:1rem; padding:2rem;">
              <div style="color:#00665e; margin-bottom:0.75rem;">${IconCoins(28)}</div>
              <h4 style="font-size:1.2rem; font-weight:700; color:#004c46; margin-bottom:0.5rem;">+40% to +70% Higher Realization</h4>
              <p class="body-sm">You determine your farm-gate price. No arbitrary mandi deductions, auction distress dumping, or unaccounted weight deductions.</p>
            </div>

            <div style="background:#ffffff; border:1px solid #d6e0df; border-radius:1rem; padding:2rem;">
              <div style="color:#00665e; margin-bottom:0.75rem;">${IconZap(28)}</div>
              <h4 style="font-size:1.2rem; font-weight:700; color:#004c46; margin-bottom:0.5rem;">Direct Digital Payouts (48h)</h4>
              <p class="body-sm">Payment transferred directly via NEFT/UPI into your bank account within 48 hours of dispatch. No deferred credit or uncashed mandi receipts.</p>
            </div>

            <div style="background:#ffffff; border:1px solid #d6e0df; border-radius:1rem; padding:2rem;">
              <div style="color:#00665e; margin-bottom:0.75rem;">${IconTruck(28)}</div>
              <h4 style="font-size:1.2rem; font-weight:700; color:#004c46; margin-bottom:0.5rem;">Farm-Gate Aggregation Logistics</h4>
              <p class="body-sm">Our logistics partners pick up packed crates directly from your orchard, Gaushala, or village FPO packhouse. Zero hassle of hiring private trucks.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Registration Form -->
      <section style="padding: 5rem 0;">
        <div class="container" style="max-width:760px;">
          <div class="farmer-form-container">
            <div style="margin-bottom:2rem; text-align:center;">
              <span class="badge badge-organic" style="margin-bottom:0.4rem; display:inline-block;">Join 14,000+ Kisans</span>
              <h2 class="heading-lg" style="color:#004c46;">Register as a Farmer or FPO</h2>
              <p class="body-sm">Fill out your agricultural details. Our Kisan Onboarding Manager will contact you on WhatsApp within 24 hours.</p>
            </div>

            <form id="kisan-registration-form" style="display:flex; flex-direction:column; gap:1.25rem;">
              <div class="grid grid-cols-2 md:grid-cols-1 gap-4">
                <div>
                  <label class="label-sm-default" style="display:block; margin-bottom:0.35rem; font-weight:700;">Entity Type</label>
                  <select id="kisan-entity-type" class="c-input" required>
                    <option value="individual">Individual Farmer / Family Orchard</option>
                    <option value="fpo">Registered FPO / Cooperative (FPC)</option>
                    <option value="shg">Self-Help Group (SHG) / Tribal Collective</option>
                    <option value="gaushala">Indigenous Cow Gaushala / Dairy Producer</option>
                  </select>
                </div>
                <div>
                  <label class="label-sm-default" style="display:block; margin-bottom:0.35rem; font-weight:700;">Farmer / FPO Lead Name</label>
                  <input type="text" id="kisan-name" required placeholder="e.g. Ramesh Chandra Patel" class="c-input">
                </div>
              </div>

              <div class="grid grid-cols-2 md:grid-cols-1 gap-4">
                <div>
                  <label class="label-sm-default" style="display:block; margin-bottom:0.35rem; font-weight:700;">Mobile & WhatsApp Number</label>
                  <input type="tel" id="kisan-phone" required placeholder="+91 98765 43210" class="c-input">
                </div>
                <div>
                  <label class="label-sm-default" style="display:block; margin-bottom:0.35rem; font-weight:700;">State & District</label>
                  <input type="text" id="kisan-location" required placeholder="e.g. Junagadh, Gujarat" class="c-input">
                </div>
              </div>

              <div class="grid grid-cols-2 md:grid-cols-1 gap-4">
                <div>
                  <label class="label-sm-default" style="display:block; margin-bottom:0.35rem; font-weight:700;">Primary Harvest Crops</label>
                  <input type="text" id="kisan-crops" required placeholder="e.g. Alphonso Mango, A2 Ghee, Onions..." class="c-input">
                </div>
                <div>
                  <label class="label-sm-default" style="display:block; margin-bottom:0.35rem; font-weight:700;">Estimated Annual Yield</label>
                  <input type="text" id="kisan-volume" required placeholder="e.g. 15 Metric Tons / 500 Quintals" class="c-input">
                </div>
              </div>

              <div>
                <label class="label-sm-default" style="display:block; margin-bottom:0.35rem; font-weight:700;">Farming Practices / Certifications</label>
                <div class="kisan-practices-grid">
                  <label style="display:flex; align-items:center; gap:0.4rem; font-size:0.85rem;">
                    <input type="checkbox" checked class="filter-checkbox"> NPOP Organic
                  </label>
                  <label style="display:flex; align-items:center; gap:0.4rem; font-size:0.85rem;">
                    <input type="checkbox" checked class="filter-checkbox"> ZBNF Natural
                  </label>
                  <label style="display:flex; align-items:center; gap:0.4rem; font-size:0.85rem;">
                    <input type="checkbox" class="filter-checkbox"> GI-Tagged
                  </label>
                </div>
              </div>

              <div style="background:#f7faf9; border-radius:0.75rem; padding:0.85rem; font-size:0.8rem; color:#535858; display:flex; align-items:center; gap:6px;">
                <span style="color:#00665e;">${IconLock(14)}</span>
                <span><strong>Zero Risk:</strong> Registration is 100% free. KISAN takes no listing fees or upfront charges. We charge only a tiny 6-8% platform maintenance fee upon successful sales.</span>
              </div>

              <button type="submit" class="c-btn c-btn-primary c-btn-block c-btn-lg" style="font-weight:700;">
                Submit Farmer Registration &rarr;
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  `;
}

export function attachFarmerRegisterListeners() {
  const form = document.getElementById('kisan-registration-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('kisan-name')?.value;
    const phone = document.getElementById('kisan-phone')?.value;
    alert(`Dhanyawaad ${name} Ji!\n\nYour farmer listing application has been received. Our agricultural field team will reach out on ${phone} within 24 hours to schedule farm verification and upload your first lot!`);
    form.reset();
  });
}
