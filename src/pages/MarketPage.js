import { store } from '../state/store.js';
import { products } from '../data/products.js';
import {
  IconShoppingBag,
  IconBuilding,
  IconGrid,
  IconApple,
  IconMilk,
  IconCoffee,
  IconFlower,
  IconSpice,
  IconCheck,
  IconCheckCircle,
  IconBox,
  IconMapPin,
  IconUsers,
  IconArrowRight,
  IconWheat,
  IconLeaf
} from '../components/icons.js';

export function renderMarketPage() {
  const urlParams = new URLSearchParams(window.location.hash.split('?')[1] || '');
  const activeCategory = urlParams.get('category') || 'all';
  const onlyBulk = urlParams.get('isBulk') === 'true' || store.getState().buyerMode === 'bulk';
  const sort = urlParams.get('sort') || 'popularity';
  const stateFilter = urlParams.get('state') || 'all';
  const isBulk = onlyBulk;

  let filtered = [...products];

  if (activeCategory !== 'all') {
    filtered = filtered.filter(p => p.category === activeCategory);
  }

  if (stateFilter !== 'all') {
    filtered = filtered.filter(p => p.stateCode?.toLowerCase() === stateFilter.toLowerCase());
  }

  // Sorting
  if (sort === 'price-asc') {
    filtered.sort((a, b) => (isBulk ? a.bulkPrice : a.price) - (isBulk ? b.bulkPrice : b.price));
  } else if (sort === 'price-desc') {
    filtered.sort((a, b) => (isBulk ? b.bulkPrice : b.price) - (isBulk ? a.bulkPrice : a.price));
  } else if (sort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sort === 'kisan-gain') {
    filtered.sort((a, b) => b.mandiPriceComp.farmerGainPercent - a.mandiPriceComp.farmerGainPercent);
  }

  const categories = [
    { id: 'all', label: 'All Produce & Commodities', icon: IconGrid(15) },
    { id: 'grains-staples', label: 'Wheat & Rice Grains', icon: IconWheat(15) },
    { id: 'vegetables', label: 'Fresh Farm Vegetables', icon: IconLeaf(15) },
    { id: 'pulses-dals', label: 'Pulses & Desi Dals', icon: IconBox(15) },
    { id: 'fruits', label: 'Mangoes & Mountain Apples', icon: IconApple(15) },
    { id: 'dairy-eggs', label: 'Desi Gir Cow A2 Ghee', icon: IconMilk(15) },
    { id: 'oils-sauces-spices', label: 'Mustard Oil & Spices', icon: IconSpice(15) },
    { id: 'beverages', label: 'Chikmagalur Coffee', icon: IconCoffee(15) },
    { id: 'pantry-essentials', label: 'Jaggery & Saffron', icon: IconFlower(15) }
  ];

  return `
    <div class="market-page">
      <!-- Catalog Header -->
      <div class="catalog-header" style="background:#fcfdfd; border-bottom:1px solid #eef2f2; padding:2rem 0 1.25rem 0;">
        <div class="container">
          <div class="flex justify-between items-center flex-wrap gap-4" style="margin-bottom:1.5rem;">
            <div>
              <div style="display:inline-flex; align-items:center; gap:6px; background:#e6f4f2; color:#005c54; padding:0.25rem 0.75rem; border-radius:999px; font-size:0.75rem; font-weight:700; margin-bottom:0.6rem;">
                ${isBulk ? IconBuilding(14) : IconCheckCircle(14)}
                <span>${isBulk ? 'Direct B2B Wholesale Lots' : 'Direct From Indian Kisans & FPOs'}</span>
              </div>
              <h1 class="heading-xl" style="font-size:2.2rem; font-weight:800; letter-spacing:-0.02em; color:#111827; margin-bottom:0.35rem;">
                ${isBulk ? 'Wholesale Commodity Marketplace (B2B)' : 'Farmers & FPO Marketplace (Retail)'}
              </h1>
              <p class="body-md" style="color:#4b5563; max-width:650px;">
                ${isBulk
                  ? 'Source crates, quintals, and metric tons directly from verified FPOs. Zero mandi dalal commissions.'
                  : 'Authentic GI-tagged, organic & natural produce harvested on demand across Indian states at mandi-bypass prices.'}
              </p>
            </div>

            <!-- Mode & Sort Controls -->
            <div class="flex items-center gap-3 flex-wrap">
              <!-- Segmented Switch -->
              <div style="display:inline-flex; background:#f0f4f4; padding:3px; border-radius:999px; border:1px solid #e1e8e7;">
                <button id="market-mode-retail" class="order-mode-tab ${!isBulk ? 'active' : ''}" style="display:inline-flex; align-items:center; gap:5px; font-size:0.78rem; font-weight:700; padding:0.35rem 0.85rem; border-radius:999px; border:none; cursor:pointer; background:${!isBulk ? '#00665e' : 'transparent'}; color:${!isBulk ? '#ffffff' : '#535858'};">
                  ${IconShoppingBag(13)}
                  <span>Retail</span>
                </button>
                <button id="market-mode-bulk" class="order-mode-tab ${isBulk ? 'active' : ''}" style="display:inline-flex; align-items:center; gap:5px; font-size:0.78rem; font-weight:700; padding:0.35rem 0.85rem; border-radius:999px; border:none; cursor:pointer; background:${isBulk ? '#00665e' : 'transparent'}; color:${isBulk ? '#ffffff' : '#535858'};">
                  ${IconBuilding(13)}
                  <span>Bulk B2B</span>
                </button>
              </div>

              <div class="flex items-center gap-2">
                <label for="catalog-sort" class="label-sm-default" style="font-weight:600; color:#374151; font-size:0.85rem;">Sort:</label>
                <select id="catalog-sort" class="c-input" style="width:auto; padding:0.4rem 0.85rem; border-radius:999px; font-size:0.85rem; border:1px solid #d1d5db; background:#ffffff;">
                  <option value="popularity" ${sort === 'popularity' ? 'selected' : ''}>Most Popular</option>
                  <option value="kisan-gain" ${sort === 'kisan-gain' ? 'selected' : ''}>Highest Kisan Realization (+%)</option>
                  <option value="rating" ${sort === 'rating' ? 'selected' : ''}>Highest Rating</option>
                  <option value="price-asc" ${sort === 'price-asc' ? 'selected' : ''}>Price: Low to High</option>
                  <option value="price-desc" ${sort === 'price-desc' ? 'selected' : ''}>Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Category Pills Scroll -->
          <div class="category-pills-scroll" style="display:flex; gap:0.6rem; overflow-x:auto; padding:0.5rem 0 1rem 0; scrollbar-width:none;">
            ${categories.map(cat => `
              <a href="#/direct-from-farmer?category=${cat.id}${isBulk ? '&isBulk=true' : ''}"
                 class="category-pill ${activeCategory === cat.id ? 'active' : ''}">
                <span class="cat-pill-icon">${cat.icon}</span>
                <span>${cat.label}</span>
              </a>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Main Catalog Layout -->
      <div class="container">
        <!-- Mobile Filter Bar (< 900px) -->
        <div class="mobile-filter-bar" style="padding-top:1rem;">
          <button id="mobile-filter-toggle-btn" class="c-btn c-btn-outline c-btn-sm" style="display:inline-flex; align-items:center; gap:6px; font-weight:700;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
            <span>Filter by State & Origin</span>
          </button>
          <span style="font-size:0.82rem; color:#4b5563; font-weight:600;">${stateFilter !== 'all' ? `Filtered: ${stateFilter}` : 'All 28 States'}</span>
        </div>

        <div class="catalog-layout">
          <!-- Sidebar Filters -->
          <aside class="catalog-sidebar" id="catalog-sidebar-el">
            <div class="filter-group">
              <h4 class="filter-title" style="font-size:0.9rem; font-weight:700; color:#111827; text-transform:uppercase; letter-spacing:0.04em; margin-bottom:0.75rem;">Buyer Mode</h4>
              <label class="filter-option" style="display:flex; align-items:center; gap:0.5rem; font-size:0.88rem; color:#374151; cursor:pointer;">
                <input type="checkbox" id="filter-bulk-only" class="filter-checkbox" ${isBulk ? 'checked' : ''}>
                <span>Wholesale Bulk Crates (B2B)</span>
              </label>
            </div>

            <div class="filter-group">
              <h4 class="filter-title" style="font-size:0.9rem; font-weight:700; color:#111827; text-transform:uppercase; letter-spacing:0.04em; margin-bottom:0.75rem;">Origin State & FPO</h4>
              <label class="filter-option" style="display:flex; align-items:center; gap:0.5rem; font-size:0.88rem; color:#374151; margin-bottom:0.5rem; cursor:pointer;">
                <input type="radio" name="state-radio" class="filter-checkbox" value="all" ${stateFilter === 'all' ? 'checked' : ''}>
                <span>All Indian States</span>
              </label>
              <label class="filter-option" style="display:flex; align-items:center; gap:0.5rem; font-size:0.88rem; color:#374151; margin-bottom:0.5rem; cursor:pointer;">
                <input type="radio" name="state-radio" class="filter-checkbox" value="MH" ${stateFilter === 'MH' ? 'checked' : ''}>
                <span><span class="state-badge">MH</span> Maharashtra (Sahyadri & Lasalgaon)</span>
              </label>
              <label class="filter-option" style="display:flex; align-items:center; gap:0.5rem; font-size:0.88rem; color:#374151; margin-bottom:0.5rem; cursor:pointer;">
                <input type="radio" name="state-radio" class="filter-checkbox" value="MP" ${stateFilter === 'MP' ? 'checked' : ''}>
                <span><span class="state-badge">MP</span> Madhya Pradesh (Sehore Wheat & Garlic)</span>
              </label>
              <label class="filter-option" style="display:flex; align-items:center; gap:0.5rem; font-size:0.88rem; color:#374151; margin-bottom:0.5rem; cursor:pointer;">
                <input type="radio" name="state-radio" class="filter-checkbox" value="UK" ${stateFilter === 'UK' ? 'checked' : ''}>
                <span><span class="state-badge">UK</span> Uttarakhand (Doon Valley Basmati)</span>
              </label>
              <label class="filter-option" style="display:flex; align-items:center; gap:0.5rem; font-size:0.88rem; color:#374151; margin-bottom:0.5rem; cursor:pointer;">
                <input type="radio" name="state-radio" class="filter-checkbox" value="AP" ${stateFilter === 'AP' ? 'checked' : ''}>
                <span><span class="state-badge">AP</span> Andhra Pradesh (Sona Masoori & Chillies)</span>
              </label>
              <label class="filter-option" style="display:flex; align-items:center; gap:0.5rem; font-size:0.88rem; color:#374151; margin-bottom:0.5rem; cursor:pointer;">
                <input type="radio" name="state-radio" class="filter-checkbox" value="UP" ${stateFilter === 'UP' ? 'checked' : ''}>
                <span><span class="state-badge">UP</span> Uttar Pradesh (Agra Table Potatoes)</span>
              </label>
              <label class="filter-option" style="display:flex; align-items:center; gap:0.5rem; font-size:0.88rem; color:#374151; margin-bottom:0.5rem; cursor:pointer;">
                <input type="radio" name="state-radio" class="filter-checkbox" value="PB" ${stateFilter === 'PB' ? 'checked' : ''}>
                <span><span class="state-badge">PB</span> Punjab (Malwa Farm Cauliflower)</span>
              </label>
              <label class="filter-option" style="display:flex; align-items:center; gap:0.5rem; font-size:0.88rem; color:#374151; margin-bottom:0.5rem; cursor:pointer;">
                <input type="radio" name="state-radio" class="filter-checkbox" value="GJ" ${stateFilter === 'GJ' ? 'checked' : ''}>
                <span><span class="state-badge">GJ</span> Gujarat (Talala Gir & Anand Bhindi)</span>
              </label>
              <label class="filter-option" style="display:flex; align-items:center; gap:0.5rem; font-size:0.88rem; color:#374151; margin-bottom:0.5rem; cursor:pointer;">
                <input type="radio" name="state-radio" class="filter-checkbox" value="HP" ${stateFilter === 'HP' ? 'checked' : ''}>
                <span><span class="state-badge">HP</span> Himachal (Kinnaur Apple FPO)</span>
              </label>
              <label class="filter-option" style="display:flex; align-items:center; gap:0.5rem; font-size:0.88rem; color:#374151; margin-bottom:0.5rem; cursor:pointer;">
                <input type="radio" name="state-radio" class="filter-checkbox" value="KA" ${stateFilter === 'KA' ? 'checked' : ''}>
                <span><span class="state-badge">KA</span> Karnataka (Coffee & Baingan)</span>
              </label>
              <label class="filter-option" style="display:flex; align-items:center; gap:0.5rem; font-size:0.88rem; color:#374151; margin-bottom:0.5rem; cursor:pointer;">
                <input type="radio" name="state-radio" class="filter-checkbox" value="JK" ${stateFilter === 'JK' ? 'checked' : ''}>
                <span><span class="state-badge">JK</span> Kashmir (Pampore Saffron FPO)</span>
              </label>
              <label class="filter-option" style="display:flex; align-items:center; gap:0.5rem; font-size:0.88rem; color:#374151; margin-bottom:0.5rem; cursor:pointer;">
                <input type="radio" name="state-radio" class="filter-checkbox" value="RJ" ${stateFilter === 'RJ' ? 'checked' : ''}>
                <span><span class="state-badge">RJ</span> Rajasthan (Mustard & Moong Dal)</span>
              </label>
              <label class="filter-option" style="display:flex; align-items:center; gap:0.5rem; font-size:0.88rem; color:#374151; margin-bottom:0.5rem; cursor:pointer;">
                <input type="radio" name="state-radio" class="filter-checkbox" value="KL" ${stateFilter === 'KL' ? 'checked' : ''}>
                <span><span class="state-badge">KL</span> Kerala (Wayanad Spices & Ginger)</span>
              </label>
            </div>

            <div class="filter-group">
              <h4 class="filter-title" style="font-size:0.9rem; font-weight:700; color:#111827; text-transform:uppercase; letter-spacing:0.04em; margin-bottom:0.75rem;">Verified Certifications</h4>
              <label class="filter-option" style="display:flex; align-items:center; gap:0.5rem; font-size:0.88rem; color:#374151; margin-bottom:0.4rem; cursor:pointer;">
                <input type="checkbox" checked disabled class="filter-checkbox">
                <span>FSSAI / NPOP Jaivik Bharat</span>
              </label>
              <label class="filter-option" style="display:flex; align-items:center; gap:0.5rem; font-size:0.88rem; color:#374151; margin-bottom:0.4rem; cursor:pointer;">
                <input type="checkbox" checked disabled class="filter-checkbox">
                <span>100% Calcium Carbide-Free</span>
              </label>
              <label class="filter-option" style="display:flex; align-items:center; gap:0.5rem; font-size:0.88rem; color:#374151; cursor:pointer;">
                <input type="checkbox" class="filter-checkbox">
                <span>GI-Tagged Origin</span>
              </label>
            </div>

            <div style="background-color:#e6f4f2; padding:1.25rem; border-radius:1rem; border:1px solid #c9e8e4;">
              <h5 style="font-weight:700; color:#004c46; margin-bottom:0.35rem; font-size:0.95rem;">Need Custom Bulk Volume?</h5>
              <p class="body-sm" style="color:#217870; margin-bottom:0.75rem; font-size:0.82rem; line-height:1.4;">Get customized farm-gate price quotes for container/truckload orders directly from FPOs.</p>
              <button id="sidebar-rfq-btn" class="c-btn c-btn-primary c-btn-sm c-btn-block" style="font-weight:700;">Request Bulk RFQ</button>
            </div>
          </aside>

          <!-- Products Grid -->
          <main>
            <div class="flex justify-between items-center" style="margin-bottom:1.5rem;">
              <span class="body-sm" style="color:#4b5563;">Showing <strong>${filtered.length}</strong> harvest lots (${isBulk ? 'B2B Wholesale' : 'Retail Household'})</span>
              ${(activeCategory !== 'all' || isBulk || stateFilter !== 'all') ? `
                <a href="#/direct-from-farmer" style="font-size:0.85rem; color:#b91c1c; text-decoration:none; font-weight:600;">Reset all filters</a>
              ` : ''}
            </div>

            <div class="grid grid-cols-3 md:grid-cols-1 gap-6">
              ${filtered.map(p => `
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

                      <!-- Price & Transparency Box -->
                      <div style="background:#f9fafb; border:1px solid #f3f4f6; border-radius:10px; padding:0.75rem 0.85rem; margin-bottom:0.5rem; font-size:0.8rem;">
                        <div class="flex justify-between items-baseline">
                          <span style="font-weight:600; color:#374151;">
                            ${isBulk ? 'B2B Wholesale Rate:' : 'Direct Price:'}
                          </span>
                          <strong style="color:#004c46; font-size:1.18rem; font-weight:800;">
                            ${isBulk ? `₹${p.bulkPrice}/${p.bulkUnit}` : store.formatPrice(p.price)}
                          </strong>
                        </div>

                        <div class="flex justify-between items-baseline" style="color:#9ca3af; font-size:0.75rem; margin-top:0.25rem;">
                          <span>Mandi Wholesale / Market:</span>
                          <span style="text-decoration:line-through;">
                            ₹${p.mandiPriceComp.supermarketRetailRate}/kg
                          </span>
                        </div>

                        <div style="color:#00665e; font-size:0.75rem; font-weight:700; margin-top:0.35rem; border-top:1px solid #e5e7eb; padding-top:0.35rem; display:flex; align-items:center; gap:4px;">
                          ${IconCheck(13)}
                          <span>Kisan receives ${p.mandiPriceComp.farmerGainPercent}% more than APMC Mandi</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style="padding:0 1.5rem 1.5rem 1.5rem; display:flex; gap:0.5rem;">
                    <a href="#/product/${p.slug}" class="c-btn c-btn-primary c-btn-block c-btn-sm" style="display:flex; align-items:center; justify-content:center; gap:6px; font-weight:700;">
                      <span>${isBulk ? 'View Bulk Tiers' : 'Order Direct'}</span>
                      ${IconArrowRight(13)}
                    </a>
                    ${isBulk ? `
                      <button class="c-btn c-btn-outline c-btn-sm market-rfq-btn" data-id="${p.id}" style="padding:0.4rem 0.75rem; font-weight:700;">
                        RFQ
                      </button>
                    ` : ''}
                  </div>
                </div>
              `).join('')}
            </div>
          </main>
        </div>
      </div>
    </div>
  `;
}

export function attachMarketListeners() {
  const sortSelect = document.getElementById('catalog-sort');
  const bulkCheckbox = document.getElementById('filter-bulk-only');
  const stateRadios = document.querySelectorAll('input[name="state-radio"]');

  const updateFilters = () => {
    const params = new URLSearchParams(window.location.hash.split('?')[1] || '');
    if (sortSelect) params.set('sort', sortSelect.value);
    if (bulkCheckbox) {
      if (bulkCheckbox.checked) params.set('isBulk', 'true');
      else params.delete('isBulk');
    }
    const selectedState = document.querySelector('input[name="state-radio"]:checked')?.value;
    if (selectedState && selectedState !== 'all') {
      params.set('state', selectedState);
    } else {
      params.delete('state');
    }
    window.location.hash = `#/direct-from-farmer?${params.toString()}`;
  };

  sortSelect?.addEventListener('change', updateFilters);
  bulkCheckbox?.addEventListener('change', updateFilters);
  stateRadios.forEach(r => r.addEventListener('change', updateFilters));

  document.getElementById('market-mode-retail')?.addEventListener('click', () => {
    store.setBuyerMode('retail');
    const params = new URLSearchParams(window.location.hash.split('?')[1] || '');
    params.delete('isBulk');
    window.location.hash = `#/direct-from-farmer?${params.toString()}`;
  });

  document.getElementById('market-mode-bulk')?.addEventListener('click', () => {
    store.setBuyerMode('bulk');
    const params = new URLSearchParams(window.location.hash.split('?')[1] || '');
    params.set('isBulk', 'true');
    window.location.hash = `#/direct-from-farmer?${params.toString()}`;
  });

  document.getElementById('sidebar-rfq-btn')?.addEventListener('click', () => {
    store.setRfqModalOpen(true, products[0]);
  });

  document.getElementById('mobile-filter-toggle-btn')?.addEventListener('click', () => {
    const sidebar = document.getElementById('catalog-sidebar-el');
    sidebar?.classList.toggle('mobile-open');
  });

  document.querySelectorAll('.market-rfq-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const prodId = e.currentTarget.getAttribute('data-id');
      const prod = products.find(p => p.id === prodId);
      store.setRfqModalOpen(true, prod);
    });
  });
}
