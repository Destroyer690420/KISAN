import { store } from '../state/store.js';
import { products } from '../data/products.js';
import { fpos } from '../data/fpos.js';
import { IconStar, IconBuilding, IconShoppingBag, IconTruck } from '../components/icons.js';

export function renderProductDetailPage(slug) {
  const product = products.find(p => p.slug === slug) || products[0];
  const fpo = fpos.find(f => f.id === product.fpoId) || fpos[0];
  const isBulkInitial = store.getState().buyerMode === 'bulk';

  return `
    <div class="product-detail-page">
      <div class="container" style="padding-top: 2rem; padding-bottom: 5rem;">
        <!-- Breadcrumb -->
        <nav class="breadcrumb-nav" style="margin-bottom: 1.5rem; font-size:0.85rem; color:#676d6c;">
          <a href="#/" style="color:#00665e;">Home</a>
          <span style="margin: 0 0.5rem;">/</span>
          <a href="#/direct-from-farmer" style="color:#00665e;">Marketplace</a>
          <span style="margin: 0 0.5rem;">/</span>
          <span style="color:#1a1c1c; font-weight:600;">${product.title}</span>
        </nav>

        <div class="pdp-grid">
          <!-- Left Column: Gallery & Farmer Story -->
          <div>
            <div class="pdp-gallery-main">
              <img id="pdp-active-img" src="${product.images[0]}" alt="${product.title}" class="pdp-main-image">
            </div>
            
            <div class="pdp-thumbnails-row">
              ${product.images.map((img, i) => `
                <img src="${img}" alt="Thumbnail ${i + 1}" class="pdp-thumb ${i === 0 ? 'active' : ''}" data-src="${img}">
              `).join('')}
            </div>

            <!-- FPO & Farmer Collective Card -->
            <div class="farmer-profile-card" style="margin-top:2.5rem; background:#ffffff; border:1px solid #d6e0df; border-radius:1.25rem; padding:2rem;">
              <div class="flex items-center gap-4" style="margin-bottom:1.5rem;">
                <img src="${fpo.avatar}" alt="${fpo.name}" style="width:64px; height:64px; border-radius:50%; object-fit:cover; border:2px solid #00665e;">
                <div>
                  <span class="badge badge-organic" style="margin-bottom:0.25rem; display:inline-block;">Verified Producer Collective</span>
                  <h3 style="font-size:1.35rem; font-weight:700; color:#1a1c1c;">${product.fpoName}</h3>
                  <div style="font-size:0.85rem; color:#00665e; font-weight:600;">${fpo.memberFarmersCount.toLocaleString('en-IN')}+ Smallholder Kisan Families · ${product.state}</div>
                </div>
              </div>

              <p class="body-md" style="line-height:1.6; margin-bottom:1.25rem; color:#2a2d2c;">
                ${product.farmerStory}
              </p>

              <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:1rem; padding:1.25rem; background:#f7faf9; border-radius:0.75rem;">
                <div>
                  <div style="font-size:0.75rem; color:#7d8483;">Lead Farmer / Rep</div>
                  <div style="font-weight:700; font-size:0.9rem; color:#1a1c1c;">${product.leadFarmer.split('&')[0]}</div>
                </div>
                <div>
                  <div style="font-size:0.75rem; color:#7d8483;">Location / District</div>
                  <div style="font-weight:700; font-size:0.9rem; color:#1a1c1c;">${product.location}</div>
                </div>
                <div>
                  <div style="font-size:0.75rem; color:#7d8483;">Harvest Season</div>
                  <div style="font-weight:700; font-size:0.9rem; color:#00665e;">${product.harvestSeason}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Purchasing Box (Dual Mode: Retail vs Bulk) -->
          <div>
            <div class="flex items-center gap-2" style="margin-bottom:0.5rem; flex-wrap:wrap;">
              ${product.badges.map(b => `<span class="badge badge-organic">${b}</span>`).join('')}
              <span class="badge badge-adoption" style="display:inline-flex; align-items:center; gap:4px;">
                <span style="color:#d97706; display:flex;">${IconStar(13)}</span>
                <span>${product.rating} (${product.reviewsCount} reviews)</span>
              </span>
            </div>

            <h1 class="heading-xl" style="margin-bottom:0.5rem; color:#1a1c1c;">${product.title}</h1>
            <p class="body-md" style="margin-bottom:1.5rem;">${product.description}</p>

            <!-- FPO Banner -->
            <div style="display:flex; align-items:center; gap:0.75rem; background:#f0f7f6; padding:0.75rem 1rem; border-radius:0.75rem; margin-bottom:1.5rem; border:1px solid #cce8e4;">
              <span style="color:#00665e; display:flex;">${IconBuilding(20)}</span>
              <div style="flex:1;">
                <div style="font-weight:700; font-size:0.9rem; color:#004c46;">Direct from ${product.fpoName}</div>
                <div style="font-size:0.75rem; color:#535858;">Aggregated from ${product.location} · Zero APMC Mandi Middlemen</div>
              </div>
            </div>

            <!-- Order Box Card (Dual Mode) -->
            <div class="order-box-card">
              <!-- Mode Tabs -->
              <div class="order-mode-tabs">
                <button id="pdp-tab-retail" class="order-mode-tab ${!isBulkInitial ? 'active' : ''}" style="display:inline-flex; align-items:center; justify-content:center; gap:6px;">
                  ${IconShoppingBag(14)}
                  <span>Household Retail Pack</span>
                </button>
                <button id="pdp-tab-bulk" class="order-mode-tab ${isBulkInitial ? 'active' : ''}" style="display:inline-flex; align-items:center; justify-content:center; gap:6px;">
                  ${IconBuilding(14)}
                  <span>B2B Bulk Wholesale</span>
                </button>
              </div>

              <!-- Retail Purchasing View -->
              <div id="pdp-retail-view" style="display:${!isBulkInitial ? 'block' : 'none'};">
                <h4 style="font-size:1rem; font-weight:700; margin-bottom:0.75rem;">Select Household Pack Size</h4>
                <div style="display:flex; flex-direction:column; gap:0.6rem; margin-bottom:1.5rem;">
                  ${product.boxes.map((box, i) => `
                    <label class="box-size-option" style="display:flex; align-items:center; justify-content:space-between; padding:0.85rem 1rem; border:1.5px solid ${i === 0 ? '#00665e' : '#d6e0df'}; border-radius:0.75rem; background:${i === 0 ? '#e4fbf7' : '#ffffff'}; cursor:pointer;">
                      <div class="flex items-center gap-3">
                        <input type="radio" name="retail-box-radio" value="${box.size}" data-price="${box.price}" data-unit-price="${box.pricePerKg}" ${i === 0 ? 'checked' : ''} class="filter-checkbox">
                        <div>
                          <strong style="font-size:0.95rem; color:#1a1c1c;">${box.size}</strong>
                          <div style="font-size:0.75rem; color:#676d6c;">${box.servings}</div>
                        </div>
                      </div>
                      <div style="text-align:right;">
                        <strong style="color:#00665e; font-size:1.1rem;">${store.formatPrice(box.price)}</strong>
                        <div style="font-size:0.75rem; color:#7d8483;">(${store.formatPrice(box.pricePerKg)}/unit)</div>
                      </div>
                    </label>
                  `).join('')}
                </div>

                <button id="btn-add-retail" class="c-btn c-btn-primary c-btn-block c-btn-lg">
                  Add Fresh Farm Box to Basket →
                </button>
              </div>

              <!-- Bulk B2B Wholesale View -->
              <div id="pdp-bulk-view" style="display:${isBulkInitial ? 'block' : 'none'};">
                <div style="background:#f7faf9; border:1px solid #7fcbc2; border-radius:0.75rem; padding:1rem; margin-bottom:1.25rem;">
                  <div class="flex justify-between items-baseline">
                    <span style="font-size:0.85rem; font-weight:700; color:#004c46;">Wholesale Farm-Gate Price:</span>
                    <strong style="font-size:1.5rem; color:#00665e;">₹${product.bulkPrice}/${product.bulkUnit}</strong>
                  </div>
                  <div style="font-size:0.75rem; color:#535858; margin-top:0.25rem;">
                    Minimum Order Quantity (MOQ): <strong>${product.bulkMOQ} ${product.bulkUnit.split(' ')[0]}</strong>
                  </div>
                  <div style="font-size:0.75rem; color:#535858; margin-top:0.2rem;">
                    Packaging: <strong>${product.bulkPackaging}</strong>
                  </div>
                </div>

                <h4 style="font-size:0.95rem; font-weight:700; margin-bottom:0.6rem;">Select Volume Procurement Tier:</h4>
                <div style="display:flex; flex-direction:column; gap:0.5rem; margin-bottom:1.25rem;">
                  ${product.bulkTiers.map((tier, i) => `
                    <label style="display:flex; align-items:center; justify-content:space-between; padding:0.75rem 1rem; border:1px solid ${i === 0 ? '#00665e' : '#d6e0df'}; border-radius:0.5rem; background:${i === 0 ? '#f0f7f6' : '#ffffff'}; cursor:pointer;">
                      <div class="flex items-center gap-2">
                        <input type="radio" name="bulk-tier-radio" value="${tier.minQty}" data-price="${tier.pricePerKg}" data-label="${tier.label}" ${i === 0 ? 'checked' : ''} class="filter-checkbox">
                        <span style="font-size:0.85rem; font-weight:600;">${tier.label}</span>
                      </div>
                      <strong style="color:#00665e; font-size:0.95rem;">₹${tier.pricePerKg}/kg</strong>
                    </label>
                  `).join('')}
                </div>

                <div style="display:flex; gap:0.5rem;">
                  <button id="btn-add-bulk" class="c-btn c-btn-primary c-btn-lg" style="flex:1.2;">
                    Add Bulk Lot to Basket →
                  </button>
                  <button id="btn-pdp-rfq" class="c-btn c-btn-outline c-btn-lg" style="flex:1;">
                    Request RFQ
                  </button>
                </div>
              </div>
            </div>

            <!-- Shipping note -->
            <div style="display:flex; align-items:center; gap:0.75rem; margin-top:1.5rem; padding:0.75rem 1rem; background:#f7faf9; border-radius:0.75rem; font-size:0.85rem; color:#535858;">
              <span style="color:#00665e; display:flex;">${IconTruck(20)}</span>
              <div>
                <strong>Direct Farm-to-Door Dispatch:</strong> Packed within 24 hours of plucking. 100% Free delivery on orders over ₹999.
              </div>
            </div>
          </div>
        </div>

        <!-- Section: Price Transparency Breakdown (Mandi vs KISAN) -->
        <section style="margin-top: 5rem; padding: 3rem; background:#f7faf9; border-radius:1.5rem;">
          <div style="max-width:760px; margin-bottom:2rem;">
            <span class="badge badge-organic" style="margin-bottom:0.4rem; display:inline-block;">Mutual Profit Maximization</span>
            <h3 class="heading-lg" style="margin-bottom:0.5rem;">Where does your money go?</h3>
            <p class="body-md">
              In traditional APMC mandis, the kisan receives less than 20% while consumers overpay for chemical-treated produce. On KISAN, farmers receive up to 82% of revenue, and buyers save up to 45%.
            </p>
          </div>

          <div class="cost-breakdown-bar">
            <div class="cost-segment cost-farmer" style="width:70%;">70% Direct to Kisan/FPO</div>
            <div class="cost-segment cost-logistics" style="width:16%;">16% Farm Logistics & Cold-Chain</div>
            <div class="cost-segment cost-packaging" style="width:6%;">6% Eco Crates & Hay</div>
            <div class="cost-segment cost-cf" style="width:8%;">8% Tech Platform Fee</div>
          </div>

          <div class="grid grid-cols-4 lg:grid-cols-2 md:grid-cols-1 gap-4" style="margin-top:1.5rem;">
            <div style="background:#ffffff; padding:1.25rem; border-radius:0.75rem; border-top:3px solid #00665e;">
              <strong style="color:#00665e; font-size:1.05rem;">70% Direct to Kisan</strong>
              <p class="body-sm" style="font-size:0.8rem; margin-top:0.25rem;">Transferred straight to the farmer's bank account within 48h of harvest.</p>
            </div>
            <div style="background:#ffffff; padding:1.25rem; border-radius:0.75rem; border-top:3px solid #27749a;">
              <strong style="color:#27749a; font-size:1.05rem;">16% Farm Logistics</strong>
              <p class="body-sm" style="font-size:0.8rem; margin-top:0.25rem;">Direct express refrigerated courier pickup from village hub to your doorstep.</p>
            </div>
            <div style="background:#ffffff; padding:1.25rem; border-radius:0.75rem; border-top:3px solid #e14f00;">
              <strong style="color:#e14f00; font-size:1.05rem;">6% Eco Packaging</strong>
              <p class="body-sm" style="font-size:0.8rem; margin-top:0.25rem;">Ventilated corrugated cartons, returnable plastic crates, and natural straw hay.</p>
            </div>
            <div style="background:#ffffff; padding:1.25rem; border-radius:0.75rem; border-top:3px solid #7fcbc2;">
              <strong style="color:#004c46; font-size:1.05rem;">8% KISAN Fee</strong>
              <p class="body-sm" style="font-size:0.8rem; margin-top:0.25rem;">Quality audits, optical grading technology, and farmer software portal.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  `;
}

export function attachProductDetailListeners() {
  const currentSlug = window.location.hash.replace('#/product/', '').split('?')[0];
  const product = products.find(p => p.slug === currentSlug) || products[0];

  // Gallery click handlers
  document.querySelectorAll('.pdp-thumb').forEach(thumb => {
    thumb.addEventListener('click', (e) => {
      document.querySelectorAll('.pdp-thumb').forEach(t => t.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const src = e.currentTarget.getAttribute('data-src');
      const mainImg = document.getElementById('pdp-active-img');
      if (mainImg) mainImg.src = src;
    });
  });

  // Mode tab switches
  const tabRetail = document.getElementById('pdp-tab-retail');
  const tabBulk = document.getElementById('pdp-tab-bulk');
  const retailView = document.getElementById('pdp-retail-view');
  const bulkView = document.getElementById('pdp-bulk-view');

  tabRetail?.addEventListener('click', () => {
    tabRetail.classList.add('active');
    tabBulk?.classList.remove('active');
    if (retailView) retailView.style.display = 'block';
    if (bulkView) bulkView.style.display = 'none';
  });

  tabBulk?.addEventListener('click', () => {
    tabBulk.classList.add('active');
    tabRetail?.classList.remove('active');
    if (bulkView) bulkView.style.display = 'block';
    if (retailView) retailView.style.display = 'none';
  });

  // Radio box selection highlighting
  document.querySelectorAll('input[name="retail-box-radio"]').forEach(radio => {
    radio.addEventListener('change', () => {
      document.querySelectorAll('.box-size-option').forEach(l => {
        l.style.borderColor = '#d6e0df';
        l.style.backgroundColor = '#ffffff';
      });
      const parent = radio.closest('.box-size-option');
      if (parent) {
        parent.style.borderColor = '#00665e';
        parent.style.backgroundColor = '#e4fbf7';
      }
    });
  });

  // Add retail box to basket
  document.getElementById('btn-add-retail')?.addEventListener('click', () => {
    const selectedRadio = document.querySelector('input[name="retail-box-radio"]:checked');
    const boxSize = selectedRadio?.value || product.boxes[0].size;
    const price = parseFloat(selectedRadio?.getAttribute('data-price')) || product.boxes[0].price;

    store.addToCart({
      id: `${product.id}-retail`,
      title: product.title,
      img: product.images[0],
      price,
      size: boxSize,
      isBulk: false,
      fpoName: product.fpoName
    });
  });

  // Add bulk lot to basket
  document.getElementById('btn-add-bulk')?.addEventListener('click', () => {
    const selectedTier = document.querySelector('input[name="bulk-tier-radio"]:checked');
    const minQty = parseInt(selectedTier?.value) || product.bulkMOQ;
    const pricePerKg = parseFloat(selectedTier?.getAttribute('data-price')) || product.bulkPrice;
    const totalBulkPrice = Math.round(minQty * pricePerKg);

    store.addToCart({
      id: `${product.id}-bulk-${minQty}`,
      title: `${product.title} (Wholesale Lot: ${minQty} kg)`,
      img: product.images[0],
      price: totalBulkPrice,
      size: `${minQty} kg in ${product.bulkPackaging}`,
      isBulk: true,
      fpoName: product.fpoName
    });
  });

  // Request RFQ button
  document.getElementById('btn-pdp-rfq')?.addEventListener('click', () => {
    store.setRfqModalOpen(true, product);
  });
}
