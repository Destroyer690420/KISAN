import { store } from '../state/store.js';
import { products } from '../data/products.js';
import { fpos } from '../data/fpos.js';
import {
  IconBuilding,
  IconFileText,
  IconHotel,
  IconStore,
  IconFactory,
  IconUsers,
  IconBox,
  IconArrowRight,
  IconMapPin
} from '../components/icons.js';

export function renderBulkPage() {
  return `
    <div class="bulk-page">
      <!-- Hero -->
      <section class="membership-hero" style="background: linear-gradient(135deg, #00332e 0%, #004c46 60%, #00665e 100%);">
        <div class="container" style="max-width:880px;">
          <span style="display:inline-flex; align-items:center; gap:6px; font-size:0.85rem; font-weight:700; background:rgba(255,255,255,0.15); color:#ffffff; padding:0.35rem 1rem; border-radius:999px; margin-bottom:1rem;">
            ${IconBuilding(14)}
            <span>B2B Wholesale & Institutional Sourcing</span>
          </span>
          <h1 class="heading-display" style="color:#ffffff; margin-bottom:1rem; font-size:2.75rem;">
            Direct Farm-Gate Sourcing for Bulk Buyers & Businesses
          </h1>
          <p class="body-lg" style="color:#e4fbf7; margin-bottom:2rem;">
            Procure crates, quintals, and truckloads directly from 14,000+ verified Indian farmers and FPOs. Save 30%-45% by bypassing APMC commission agents, with standardized sorting, GST invoices, and farm-to-warehouse logistics.
          </p>

          <div class="hero-actions" style="margin-top:2rem;">
            <a href="#bulk-calculator-section" class="c-btn c-btn-primary c-btn-lg" style="font-weight:700;">
              Calculate Bulk Savings &darr;
            </a>
            <button id="hero-open-rfq-btn" class="c-btn c-btn-secondary c-btn-lg" style="display:inline-flex; align-items:center; gap:8px; font-weight:700;">
              ${IconFileText(16)}
              <span>Request Custom RFQ Quote</span>
            </button>
          </div>
        </div>
      </section>

      <!-- Target Sectors Served -->
      <section style="padding: 4rem 0; background:#f7faf9;">
        <div class="container">
          <div style="text-align:center; max-width:700px; margin:0 auto 3rem auto;">
            <span class="badge badge-organic" style="margin-bottom:0.4rem; display:inline-block;">Institutional Reliability</span>
            <h2 class="heading-xl">Built for commercial buyers of all sizes</h2>
            <p class="body-md">Whether you operate a 500-seat banquet hall, a chain of cafes, or a housing society buying group, KISAN delivers farm-fresh harvests without mandi friction.</p>
          </div>

          <div class="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
            <div style="background:#ffffff; border:1px solid #d6e0df; border-radius:1rem; padding:1.75rem;">
              <div style="color:#00665e; margin-bottom:0.75rem;">${IconHotel(30)}</div>
              <h4 style="font-size:1.15rem; font-weight:700; color:#1a1c1c; margin-bottom:0.4rem;">Hotels & Restaurants</h4>
              <p class="body-sm">A-Grade uniform table fruits, pure Vedic ghee, and chef-grade spices delivered on weekly schedules with 100% replacement guarantee.</p>
            </div>

            <div style="background:#ffffff; border:1px solid #d6e0df; border-radius:1rem; padding:1.75rem;">
              <div style="color:#00665e; margin-bottom:0.75rem;">${IconStore(30)}</div>
              <h4 style="font-size:1.15rem; font-weight:700; color:#1a1c1c; margin-bottom:0.4rem;">Kiranas & Retailers</h4>
              <p class="body-sm">Stock high-margin GI-tagged Devgad Alphonso and organic pulses in retail-ready packaging. 35% higher retailer margins than APMC wholesalers.</p>
            </div>

            <div style="background:#ffffff; border:1px solid #d6e0df; border-radius:1rem; padding:1.75rem;">
              <div style="color:#00665e; margin-bottom:0.75rem;">${IconFactory(30)}</div>
              <h4 style="font-size:1.15rem; font-weight:700; color:#1a1c1c; margin-bottom:0.4rem;">Food Processors</h4>
              <p class="body-sm">Source bulk Gir Kesar mangoes for Aamras, cold-pressed mustard oil in 200L drums, and coffee beans in 25kg hermetic bags with full NPOP lab certificates.</p>
            </div>

            <div style="background:#ffffff; border:1px solid #d6e0df; border-radius:1rem; padding:1.75rem;">
              <div style="color:#00665e; margin-bottom:0.75rem;">${IconUsers(30)}</div>
              <h4 style="font-size:1.15rem; font-weight:700; color:#1a1c1c; margin-bottom:0.4rem;">Housing Societies</h4>
              <p class="body-sm">Community group orders: 50+ families pool together to receive wholesale crate pricing direct from orchards with doorstep delivery to apartment gates.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Interactive Bulk Savings Calculator -->
      <section id="bulk-calculator-section" style="padding: 5rem 0;">
        <div class="container" style="max-width:920px;">
          <div class="bulk-calculator-card">
            <div style="text-align:center; margin-bottom:2rem;">
              <span class="badge badge-organic" style="margin-bottom:0.5rem; display:inline-block;">Live Price Simulator</span>
              <h2 class="heading-xl" style="color:#004c46;">Commercial Sourcing & Mandi Savings Calculator</h2>
              <p class="body-md">See how much your business saves while paying a fair, dignified price directly to Indian kisans.</p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-1 gap-6" style="margin-bottom:2.5rem;">
              <div>
                <label class="label-md-strong" style="display:block; margin-bottom:0.5rem;">Select Commodity Harvest:</label>
                <select id="calc-commodity-select" class="c-input" style="font-size:1rem; font-weight:600;">
                  ${products.map(p => `
                    <option value="${p.id}" data-bulk-price="${p.bulkPrice}" data-mandi-rate="${p.mandiPriceComp.supermarketRetailRate}" data-farmer-payout="${p.mandiPriceComp.kisanConnectFarmerPayout}">
                      ${p.title} (FPO: ${p.fpoName.split(' ')[0]})
                    </option>
                  `).join('')}
                </select>
              </div>

              <div>
                <label class="label-md-strong" style="display:block; margin-bottom:0.5rem;">
                  Procurement Volume: <strong id="calc-qty-display" style="color:#00665e;">250 kg</strong>
                </label>
                <input type="range" id="calc-qty-slider" min="50" max="2500" step="50" value="250" style="width:100%; accent-color:#00665e; height:8px; cursor:pointer;">
                <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:#7d8483; margin-top:0.25rem;">
                  <span>50 kg (Min MOQ)</span>
                  <span>500 kg</span>
                  <span>1,500 kg</span>
                  <span>2,500 kg (Full Truckload)</span>
                </div>
              </div>
            </div>

            <!-- Calculation Output Cards -->
            <div class="bulk-metrics-card">
              <div style="text-align:center;">
                <div style="font-size:0.8rem; color:#676d6c; margin-bottom:0.25rem;">City Mandi / Wholesaler Cost</div>
                <div id="calc-mandi-cost" style="font-size:1.75rem; font-weight:800; color:#ba2f1e; text-decoration:line-through;">₹87,500</div>
                <div style="font-size:0.75rem; color:#7d8483; margin-top:0.2rem;">Includes 42% broker cuts</div>
              </div>

              <div style="text-align:center;" class="bulk-metric-col-mid">
                <div style="font-size:0.8rem; color:#004c46; margin-bottom:0.25rem; font-weight:700;">KISAN Direct Cost</div>
                <div id="calc-direct-cost" style="font-size:1.75rem; font-weight:800; color:#00665e;">₹41,250</div>
                <div style="font-size:0.75rem; color:#00665e; font-weight:700; margin-top:0.2rem;">Farm-gate dispatch rate</div>
              </div>

              <div style="text-align:center;">
                <div style="font-size:0.8rem; color:#e14f00; margin-bottom:0.25rem; font-weight:700;">Your Business Savings</div>
                <div id="calc-net-savings" style="font-size:1.75rem; font-weight:900; color:#e14f00;">₹46,250 (53%)</div>
                <div style="font-size:0.75rem; color:#535858; margin-top:0.2rem;">+ ₹36,250 extra direct to farmer!</div>
              </div>
            </div>

            <div style="text-align:center; margin-top:2rem;">
              <button id="calc-request-quote-btn" class="c-btn c-btn-primary c-btn-lg" style="display:inline-flex; align-items:center; gap:8px; font-weight:700;">
                <span>Request Formal Quotation for this Batch</span>
                ${IconArrowRight(16)}
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Active FPO Bulk Inventory Batches -->
      <section style="padding: 5rem 0; background:#fafcfc;">
        <div class="container">
          <div class="section-header flex justify-between items-end flex-wrap gap-4" style="margin-bottom:2.5rem;">
            <div>
              <span class="badge badge-adoption" style="margin-bottom:0.4rem; display:inline-block;">Live FPO Packhouse Lots</span>
              <h2 class="heading-xl">Ready for Commercial Dispatch</h2>
              <p class="body-md">Standardized grades, palletized packaging, and Pan-India cold-chain logistics.</p>
            </div>
            <a href="#/direct-from-farmer" class="c-btn c-btn-outline" style="display:inline-flex; align-items:center; gap:6px; font-weight:700;">
              <span>View Complete Catalog</span>
              ${IconArrowRight(14)}
            </a>
          </div>

          <div class="grid grid-cols-3 md:grid-cols-1 gap-6">
            ${products.map(p => `
              <div class="product-card" style="background:#ffffff; border:1px solid #d6e0df; border-radius:1.25rem; overflow:hidden; box-shadow:0 4px 14px rgba(0,0,0,0.04); display:flex; flex-direction:column; justify-content:space-between; transition:transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;">
                <div>
                  <div style="position:relative; height:180px; overflow:hidden; background-color:#f1f5f9;">
                    <a href="#/product/${p.slug}" style="display:block; width:100%; height:100%;">
                      <img src="${p.images[0]}" alt="${p.title}" style="width:100%; height:100%; object-fit:cover; transition:transform 0.4s ease;" loading="lazy">
                    </a>
                    <div style="position:absolute; top:1rem; left:1rem; background:rgba(0,0,0,0.65); backdrop-filter:blur(4px); -webkit-backdrop-filter:blur(4px); color:#ffffff; padding:0.25rem 0.65rem; border-radius:999px; font-size:0.75rem; font-weight:700; display:inline-flex; align-items:center; gap:4px; z-index:2;">
                      ${IconMapPin(12)}
                      <span>${p.state}</span>
                    </div>
                    <div style="position:absolute; top:1rem; right:1rem; background:rgba(0, 102, 94, 0.9); backdrop-filter:blur(4px); -webkit-backdrop-filter:blur(4px); color:#ffffff; padding:0.25rem 0.65rem; border-radius:999px; font-size:0.72rem; font-weight:700; z-index:2;">
                      MOQ: ${p.bulkMOQ} ${p.bulkUnit.split(' ')[0]}
                    </div>
                  </div>

                  <div style="padding:1.35rem 1.5rem 1rem 1.5rem;">
                    <h3 style="font-size:1.15rem; font-weight:700; color:#1a1c1c; margin-bottom:0.35rem; line-height:1.35;">
                      <a href="#/product/${p.slug}" style="text-decoration:none; color:inherit;">${p.title}</a>
                    </h3>

                    <div style="font-size:0.85rem; color:#00665e; font-weight:700; margin-bottom:0.65rem; display:flex; align-items:center; gap:5px;">
                      ${IconUsers(14)}
                      <span>${p.fpoMembersCount ? `${p.fpoMembersCount.toLocaleString('en-IN')}+ Member Kisan Families` : p.fpoName}</span>
                    </div>

                    <p class="body-sm" style="font-size:0.85rem; line-height:1.5; color:#535858; margin-bottom:0.85rem; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">
                      ${p.description}
                    </p>

                    <div style="font-size:0.78rem; color:#1a1c1c; background:#f7faf9; border:1px solid #eef2f2; border-radius:0.5rem; padding:0.5rem 0.75rem; margin-bottom:1rem;">
                      <strong>Bulk Packaging:</strong> ${p.bulkPackaging}
                    </div>

                    <!-- Volume Pricing Tier -->
                    <div style="background:#f9fafb; border:1px solid #f3f4f6; border-radius:10px; padding:0.75rem 0.85rem; margin-bottom:0.5rem; font-size:0.8rem;">
                      <div style="display:flex; justify-content:space-between; align-items:baseline;">
                        <span style="color:#374151; font-weight:600;">Wholesale B2B Rate:</span>
                        <strong style="color:#004c46; font-size:1.18rem; font-weight:800;">₹${p.bulkPrice}/${p.bulkUnit}</strong>
                      </div>
                      <div style="display:flex; justify-content:space-between; color:#9ca3af; font-size:0.75rem; margin-top:0.25rem;">
                        <span>Retail Unit Rate:</span>
                        <span style="text-decoration:line-through;">₹${p.retailPricePerKg}/kg</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div style="padding:0 1.5rem 1.5rem 1.5rem; display:flex; gap:0.5rem;">
                  <button class="c-btn c-btn-outline c-btn-sm btn-quick-rfq" data-id="${p.id}" style="flex:1; font-weight:700;">
                    Request RFQ
                  </button>
                  <a href="#/product/${p.slug}" class="c-btn c-btn-primary c-btn-sm" style="flex:1; text-align:center; font-weight:700; display:inline-flex; align-items:center; justify-content:center; gap:5px;">
                    <span>View Lots</span>
                    ${IconArrowRight(13)}
                  </a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    </div>
  `;
}

export function attachBulkListeners() {
  const commoditySelect = document.getElementById('calc-commodity-select');
  const qtySlider = document.getElementById('calc-qty-slider');
  const qtyDisplay = document.getElementById('calc-qty-display');
  const mandiCostEl = document.getElementById('calc-mandi-cost');
  const directCostEl = document.getElementById('calc-direct-cost');
  const netSavingsEl = document.getElementById('calc-net-savings');

  const updateCalculator = () => {
    if (!commoditySelect || !qtySlider) return;
    const selectedOption = commoditySelect.options[commoditySelect.selectedIndex];
    const bulkPrice = parseFloat(selectedOption.getAttribute('data-bulk-price')) || 150;
    const mandiRate = parseFloat(selectedOption.getAttribute('data-mandi-rate')) || 320;
    const qty = parseInt(qtySlider.value) || 250;

    if (qtyDisplay) qtyDisplay.textContent = `${qty} kg`;

    const mandiTotal = Math.round(mandiRate * qty);
    const directTotal = Math.round(bulkPrice * qty);
    const savings = Math.max(0, mandiTotal - directTotal);
    const savingsPercent = Math.round((savings / mandiTotal) * 100);

    if (mandiCostEl) mandiCostEl.textContent = store.formatPrice(mandiTotal);
    if (directCostEl) directCostEl.textContent = store.formatPrice(directTotal);
    if (netSavingsEl) netSavingsEl.textContent = `${store.formatPrice(savings)} (${savingsPercent}%)`;
  };

  commoditySelect?.addEventListener('change', updateCalculator);
  qtySlider?.addEventListener('input', updateCalculator);

  document.getElementById('hero-open-rfq-btn')?.addEventListener('click', () => {
    store.setRfqModalOpen(true, products[0]);
  });

  document.getElementById('calc-request-quote-btn')?.addEventListener('click', () => {
    const selectedProduct = products.find(p => p.id === commoditySelect?.value) || products[0];
    store.setRfqModalOpen(true, selectedProduct);
  });

  document.querySelectorAll('.btn-quick-rfq').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const prodId = e.currentTarget.getAttribute('data-id');
      const prod = products.find(p => p.id === prodId);
      store.setRfqModalOpen(true, prod);
    });
  });

  // Run initial calculation
  updateCalculator();
}
