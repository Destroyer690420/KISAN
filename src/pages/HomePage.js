import { store } from '../state/store.js';
import { products } from '../data/products.js';
import { fpos } from '../data/fpos.js';
import {
  IconWheat,
  IconShoppingBag,
  IconBuilding,
  IconTractor,
  IconArrowRight,
  IconMapPin,
  IconUsers,
  IconCheck,
  IconCheckCircle
} from '../components/icons.js';

export function renderHomePage() {
  const isBulk = store.getState().buyerMode === 'bulk';
  const featuredProduce = [
    products.find(p => p.id === 'devgad-alphonso-mango'),
    products.find(p => p.id === 'sehore-sharbati-wheat'),
    products.find(p => p.id === 'traditional-basmati-rice'),
    products.find(p => p.id === 'nashik-farm-fresh-tomatoes'),
    products.find(p => p.id === 'lasalgaon-red-onions'),
    products.find(p => p.id === 'kinnaur-royal-apple')
  ].filter(Boolean);

  return `
    <div class="home-page">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <div class="hero-content">
            <div class="hero-tagline" style="display:inline-flex; align-items:center; gap:6px;">
              <span style="color:#00665e; display:flex; align-items:center;">${IconWheat(14)}</span>
              <span>Direct AgTech Marketplace &middot; Connecting 14,000+ Farmers & FPOs</span>
            </div>
            <h1 class="heading-display hero-title">
              Direct from Indian Farmers & FPOs to Consumers & Bulk Buyers
            </h1>
            <p class="hero-subtitle">
              Eliminate exploitative APMC mandi middlemen. Maximizing profits for farmers with +40% to +70% higher payouts, and delivering 20% to 45% lower prices for households and commercial bulk buyers across India.
            </p>
            <div class="hero-actions">
              <a href="#/direct-from-farmer" class="c-btn c-btn-primary c-btn-lg" style="display:inline-flex; align-items:center; gap:8px;">
                ${IconShoppingBag(18)}
                <span>Shop Direct (Household)</span>
              </a>
              <a href="#/bulk" class="c-btn c-btn-secondary c-btn-lg" style="display:inline-flex; align-items:center; gap:8px;">
                ${IconBuilding(18)}
                <span>Source in Bulk (B2B)</span>
              </a>
              <a href="#/sell" class="c-btn c-btn-outline c-btn-lg" style="display:inline-flex; align-items:center; gap:8px;">
                ${IconTractor(18)}
                <span>Sell as Farmer / FPO</span>
              </a>
            </div>
          </div>

          <!-- Seasonal Harvest Showcase Grid -->
          <div class="seasonal-banner-grid">
            <a href="#/product/devgad-alphonso-mangoes" class="seasonal-card">
              <img src="https://common.crowdfarming.com/uploaded-images/1768511919635-7be21903-7eb1-4887-84a8-5fee869413f7.jpg?Imwidth=800" class="seasonal-card-bg" alt="Devgad Alphonso Mangoes">
              <div class="seasonal-card-overlay"></div>
              <div class="seasonal-card-content">
                <div class="seasonal-card-tag">GI-Tagged &middot; Sahyadri Farmers FPC</div>
                <h3 class="seasonal-card-title">Devgad Alphonso Mangoes: Retail Boxes & 20kg Crates</h3>
                <span class="c-btn c-btn-secondary c-btn-sm" style="align-self:flex-start; display:inline-flex; align-items:center; gap:5px;">
                  <span>Order Direct</span>
                  ${IconArrowRight(13)}
                </span>
              </div>
            </a>

            <a href="#/product/desi-gir-cow-vedic-a2-bilona-ghee" class="seasonal-card">
              <img src="https://common.crowdfarming.com/uploaded-images/1773235038786-8b07d805-c2d8-4c1c-9675-2a3c420f38a0.png?Imwidth=800" class="seasonal-card-bg" alt="Gir Cow A2 Ghee">
              <div class="seasonal-card-overlay"></div>
              <div class="seasonal-card-content">
                <div class="seasonal-card-tag">Ancient Bilona &middot; Gir Krishi FPO</div>
                <h3 class="seasonal-card-title">Pure Desi Gir Cow Vedic A2 Ghee (1L Jars to 15L Tins)</h3>
                <span class="c-btn c-btn-secondary c-btn-sm" style="align-self:flex-start; display:inline-flex; align-items:center; gap:5px;">
                  <span>View Vedic Ghee</span>
                  ${IconArrowRight(13)}
                </span>
              </div>
            </a>

            <a href="#/product/kinnaur-royal-delicious-apples" class="seasonal-card">
              <img src="https://common.crowdfarming.com/uploaded-images/1714990611226-844a71c0-a83a-4d2a-b9a2-a32050d95227.jpg?Imwidth=800" class="seasonal-card-bg" alt="Kinnaur Apples">
              <div class="seasonal-card-overlay"></div>
              <div class="seasonal-card-content">
                <div class="seasonal-card-tag">High Altitude 9,200ft &middot; Kinnaur FPO</div>
                <h3 class="seasonal-card-title">Snow-Fed Kinnaur Apples (Zero Wax Coating)</h3>
                <span class="c-btn c-btn-secondary c-btn-sm" style="align-self:flex-start; display:inline-flex; align-items:center; gap:5px;">
                  <span>View Mountain Apples</span>
                  ${IconArrowRight(13)}
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- Key Two-Sided Benefits Bar -->
      <section style="background-color: #00332e; color: #ffffff; padding: 3rem 0;">
        <div class="container">
          <div class="grid grid-cols-2 md:grid-cols-1 gap-6 items-center">
            <div class="benefits-bar-col-left">
              <span style="font-size:0.8rem; font-weight:700; color:#9ce9df; text-transform:uppercase; letter-spacing:0.05em;">Benefit 1: For Indian Farmers & FPOs</span>
              <h3 style="font-size:1.65rem; font-weight:800; margin:0.3rem 0 0.5rem 0; color:#ffffff;">Better Prices, Guaranteed</h3>
              <p style="font-size:0.95rem; color:#d6e0df; line-height:1.5;">
                Farmers set their own fair price and receive <strong>65% to 82%</strong> of buyer expenditure directly into their bank account within 48 hours. Zero dalal commissions, zero arbitrary auction distress deductions.
              </p>
            </div>

            <div class="benefits-bar-col-right">
              <span style="font-size:0.8rem; font-weight:700; color:#ffd3c0; text-transform:uppercase; letter-spacing:0.05em;">Benefit 2: For Consumers & Bulk Buyers</span>
              <h3 style="font-size:1.65rem; font-weight:800; margin:0.3rem 0 0.5rem 0; color:#ffffff;">Lower Prices, Fresher Harvest</h3>
              <p style="font-size:0.95rem; color:#d6e0df; line-height:1.5;">
                Households save <strong>20%-30%</strong> compared to retail supermarkets, and bulk businesses save <strong>35%-45%</strong> compared to city wholesale mandis. 100% tree-ripened, chemical-free, and traceable to the farm gate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Live Marketplace Products (Dual Mode) -->
      <section style="padding: 5rem 0;">
        <div class="container">
          <div class="section-header flex justify-between items-end flex-wrap gap-4" style="margin-bottom:2.5rem;">
            <div>
              <span class="badge badge-organic" style="margin-bottom:0.4rem; display:inline-block;">Farm-Fresh Direct Catalog</span>
              <h2 class="heading-xl">Available Produce from Verified FPOs</h2>
              <p class="body-md">Packed on demand at village aggregation centers and dispatched express to your pincode.</p>
            </div>

            <!-- Mode Selector Switch -->
            <div style="display:flex; background:#f0f4f4; padding:3px; border-radius:999px; border:1px solid #e1e8e7;">
              <button id="home-filter-retail" class="order-mode-tab ${!isBulk ? 'active' : ''}" style="display:inline-flex; align-items:center; gap:5px; font-size:0.82rem; font-weight:700; padding:0.4rem 1rem; border-radius:999px; border:none; cursor:pointer; background:${!isBulk ? '#00665e' : 'transparent'}; color:${!isBulk ? '#ffffff' : '#535858'};">
                ${IconShoppingBag(14)}
                <span>Household Packs</span>
              </button>
              <button id="home-filter-bulk" class="order-mode-tab ${isBulk ? 'active' : ''}" style="display:inline-flex; align-items:center; gap:5px; font-size:0.82rem; font-weight:700; padding:0.4rem 1rem; border-radius:999px; border:none; cursor:pointer; background:${isBulk ? '#00665e' : 'transparent'}; color:${isBulk ? '#ffffff' : '#535858'};">
                ${IconBuilding(14)}
                <span>Bulk B2B Wholesale</span>
              </button>
            </div>
          </div>

          <div class="grid grid-cols-3 md:grid-cols-1 gap-6">
            ${featuredProduce.map(p => `
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
                      ${isBulk ? `MOQ: ${p.bulkMOQ} ${p.bulkUnit.split(' ')[0]}` : p.badges[0]}
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
                      <strong>${isBulk ? 'Wholesale MOQ' : 'Packaging'}:</strong> ${isBulk ? `${p.bulkMOQ} ${p.bulkUnit} (${p.bulkPackaging})` : p.retailUnit}
                    </div>

                    <!-- Pricing Comparison Block -->
                    <div style="background:#f9fafb; border:1px solid #f3f4f6; border-radius:10px; padding:0.75rem 0.85rem; margin-bottom:0.5rem; font-size:0.8rem;">
                      <div class="flex justify-between items-baseline">
                        <span style="font-weight:600; color:#374151;">
                          ${isBulk ? 'Wholesale Price:' : 'Direct Price:'}
                        </span>
                        <strong style="color:#004c46; font-size:1.18rem; font-weight:800;">
                          ${isBulk ? `₹${p.bulkPrice}/${p.bulkUnit}` : store.formatPrice(p.price)}
                        </strong>
                      </div>

                      <div class="flex justify-between items-baseline" style="color:#9ca3af; font-size:0.75rem; margin-top:0.25rem;">
                        <span>Market Comparison:</span>
                        <span style="text-decoration:line-through;">
                          ₹${p.mandiPriceComp.supermarketRetailRate}/kg
                        </span>
                      </div>

                      <div style="color:#00665e; font-size:0.75rem; font-weight:700; margin-top:0.35rem; border-top:1px solid #e5e7eb; padding-top:0.35rem; display:flex; align-items:center; gap:4px;">
                        ${IconCheck(13)}
                        <span>${p.mandiPriceComp.farmerGainPercent}% more paid directly to Kisan</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div style="padding:0 1.5rem 1.5rem 1.5rem; display:flex; gap:0.5rem;">
                  <a href="#/product/${p.slug}" class="c-btn c-btn-primary c-btn-block c-btn-sm" style="display:flex; align-items:center; justify-content:center; gap:6px; font-weight:700;">
                    <span>${isBulk ? 'View Bulk Lots' : 'Order Retail'}</span>
                    ${IconArrowRight(13)}
                  </a>
                  ${isBulk ? `
                    <button class="c-btn c-btn-outline c-btn-sm home-rfq-btn" data-id="${p.id}" style="padding:0.4rem 0.75rem; font-weight:700;">
                      RFQ
                    </button>
                  ` : ''}
                </div>
              </div>
            `).join('')}
          </div>

          <div style="text-align:center; margin-top:3rem;">
            <a href="#/direct-from-farmer" class="c-btn c-btn-outline c-btn-lg" style="display:inline-flex; align-items:center; gap:8px; font-weight:700;">
              <span>Explore All Indian Produce & Commodities (${products.length} Lots)</span>
              ${IconArrowRight(16)}
            </a>
          </div>
        </div>
      </section>

      <!-- Verified FPO Network Section -->
      <section style="padding: 5rem 0; background:#f7faf9;">
        <div class="container">
          <div class="section-header text-center" style="max-width:760px; margin:0 auto 3.5rem auto;">
            <span class="badge badge-adoption" style="margin-bottom:0.5rem; display:inline-block;">Collectives & Cooperatives</span>
            <h2 class="heading-xl">Empowering Grassroots Farmer Producer Companies</h2>
            <p class="body-md">KISAN directly partners with registered FPOs, aggregating smallholder family farms to provide cold chain sorting, standardized grading, and fair digital commerce.</p>
          </div>

          <div class="grid grid-cols-3 md:grid-cols-1 gap-6">
            ${fpos.slice(0, 3).map(fpo => `
              <div style="background:#ffffff; border:1px solid #d6e0df; border-radius:1.25rem; overflow:hidden; box-shadow:0 4px 14px rgba(0,0,0,0.04); display:flex; flex-direction:column; justify-content:space-between;">
                <div>
                  <div style="position:relative; height:180px;">
                    <img src="${fpo.coverImage}" alt="${fpo.name}" style="width:100%; height:100%; object-fit:cover;">
                    <div style="position:absolute; top:1rem; left:1rem; background:rgba(0,0,0,0.65); color:#ffffff; padding:0.25rem 0.65rem; border-radius:999px; font-size:0.75rem; font-weight:700; display:inline-flex; align-items:center; gap:4px;">
                      ${IconMapPin(12)}
                      <span>${fpo.state}</span>
                    </div>
                  </div>

                  <div style="padding:1.5rem;">
                    <h3 style="font-size:1.25rem; font-weight:700; color:#1a1c1c; margin-bottom:0.4rem;">${fpo.name}</h3>
                    <div style="font-size:0.85rem; color:#00665e; font-weight:700; margin-bottom:0.75rem; display:flex; align-items:center; gap:5px;">
                      ${IconUsers(14)}
                      <span>${fpo.memberFarmersCount.toLocaleString('en-IN')}+ Member Kisan Families</span>
                    </div>
                    <p class="body-sm" style="font-size:0.85rem; line-height:1.5; color:#535858; margin-bottom:1rem;">
                      ${fpo.description.slice(0, 140)}...
                    </p>
                    <div style="font-size:0.75rem; color:#1a1c1c; background:#f7faf9; border-radius:0.5rem; padding:0.5rem;">
                      <strong>Crops:</strong> ${fpo.cropsSpeciality.slice(0, 2).join(', ')}
                    </div>
                  </div>
                </div>

                <div style="padding:0 1.5rem 1.5rem 1.5rem;">
                  <a href="#/fpos" class="c-btn c-btn-outline c-btn-block c-btn-sm" style="display:flex; align-items:center; justify-content:center; gap:6px; font-weight:700;">
                    <span>View FPO Profile & Lots</span>
                    ${IconArrowRight(13)}
                  </a>
                </div>
              </div>
            `).join('')}
          </div>

          <div style="text-align:center; margin-top:2.5rem;">
            <a href="#/fpos" class="c-btn c-btn-primary" style="display:inline-flex; align-items:center; gap:8px; font-weight:700;">
              <span>View All ${fpos.length} Verified FPOs Across India</span>
              ${IconArrowRight(16)}
            </a>
          </div>
        </div>
      </section>

      <!-- APMC Mandi vs KISAN Comparison -->
      <section class="comparison-section">
        <div class="container">
          <div class="section-header">
            <span class="badge badge-organic" style="margin-bottom:0.5rem; display:inline-block;">Fair & Pure Food System</span>
            <h2 class="heading-xl">Traditional Mandis vs. KISAN Direct: The Real Truth</h2>
            <p class="body-lg">Traditional Indian fruit and vegetable mandis rely on chemical middlemen. We connect you directly with ethical kisans who care for soil and health.</p>
          </div>

          <div class="comparison-table-wrap">
            <table class="comparison-table">
              <thead>
                <tr>
                  <th style="width:30%;">Parameter</th>
                  <th style="width:35%;">Traditional APMC Mandis & Supermarkets</th>
                  <th class="highlight-col" style="width:35%;">KISAN Direct</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Farmer Earnings</strong></td>
                  <td>Farmer receives barely 15% - 22% of customer spend after dalal commission cuts</td>
                  <td class="highlight-col"><strong>Farmer sets own price and receives 65% - 82%</strong> directly via bank transfer</td>
                </tr>
                <tr>
                  <td><strong>Consumer & Bulk Pricing</strong></td>
                  <td>Inflated by 4-6 intermediaries, multiple transit hops, and urban wholesale margins</td>
                  <td class="highlight-col"><strong>20% to 45% cheaper</strong> because there are zero commission brokers in between</td>
                </tr>
                <tr>
                  <td><strong>Ripening Process</strong></td>
                  <td>Plucked raw/immature and ripened in dangerous calcium carbide or ethylene gas rooms</td>
                  <td class="highlight-col"><strong>100% Tree-ripened naturally</strong> in traditional rice straw beds (Gawat)</td>
                </tr>
                <tr>
                  <td><strong>Pesticides & Wax</strong></td>
                  <td>Heavy systemic pesticides, synthetic fungicides, and toxic cosmetic wax coatings</td>
                  <td class="highlight-col"><strong>Zero chemical wax or post-harvest sprays</strong>; NPOP & ZBNF bio-fertilizers</td>
                </tr>
                <tr>
                  <td><strong>Traceability & Accountability</strong></td>
                  <td>Anonymous mixed lot from unknown brokers with zero farmer accountability</td>
                  <td class="highlight-col"><strong>Full FPO & Kisan traceability:</strong> farm location, harvest date, and lab reports</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- Impact Counter Section -->
      <section style="background-color: #00332e; color: #ffffff; padding: 5rem 0;">
        <div class="container">
          <div class="grid grid-cols-4 md:grid-cols-2 gap-8 text-center">
            <div>
              <div class="stat-number" style="color: #9ce9df;">14,270+</div>
              <div class="stat-label" style="color: #d6e0df;">Associated Smallholder Kisans</div>
            </div>
            <div>
              <div class="stat-number" style="color: #9ce9df;">₹48.6 Cr+</div>
              <div class="stat-label" style="color: #d6e0df;">Extra Income Earned by Farmers</div>
            </div>
            <div>
              <div class="stat-number" style="color: #9ce9df;">25,000+</div>
              <div class="stat-label" style="color: #d6e0df;">Indian Pincodes Served Direct</div>
            </div>
            <div>
              <div class="stat-number" style="color: #9ce9df;">0%</div>
              <div class="stat-label" style="color: #d6e0df;">APMC Dalal Intermediary Fee</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

export function attachHomeListeners() {
  document.getElementById('home-filter-retail')?.addEventListener('click', () => {
    store.setBuyerMode('retail');
  });

  document.getElementById('home-filter-bulk')?.addEventListener('click', () => {
    store.setBuyerMode('bulk');
  });

  document.querySelectorAll('.home-rfq-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const prodId = e.currentTarget.getAttribute('data-id');
      const prod = products.find(p => p.id === prodId);
      store.setRfqModalOpen(true, prod);
    });
  });
}
