import { store } from '../state/store.js';
import {
  IconCheck,
  IconApple,
  IconLeaf,
  IconWheat
} from '../components/icons.js';

export function renderSubscriptionPage() {
  return `
    <div class="subscription-page">
      <!-- Hero -->
      <section class="sub-hero">
        <div class="container" style="max-width:820px;">
          <span class="badge badge-organic" style="margin-bottom:0.75rem; display:inline-block;">100% Certified Organic Sabzi & Fruits</span>
          <h1 class="heading-display" style="margin-bottom:1rem;">Farm-to-Kitchen Sabzi Subscription</h1>
          <p class="body-lg" style="margin-bottom:2rem;">
            Fresh organic vegetables and seasonal fruits harvested at dawn by nearby natural farmers. Zero cold-storage holding, 100% chemical-free. Pause, skip, or cancel anytime with one click.
          </p>

          <!-- Frequency Selector Tabs -->
          <div class="sub-frequency-selector">
            <button class="sub-freq-btn active" data-freq="weekly">Weekly</button>
            <button class="sub-freq-btn" data-freq="fortnightly">Every 2 Weeks</button>
            <button class="sub-freq-btn" data-freq="monthly">Monthly</button>
          </div>
        </div>
      </section>

      <!-- Box Sizes -->
      <section style="padding: 2rem 0 5rem 0;">
        <div class="container">
          <div class="box-tier-grid">
            <!-- Box 1: Small / Couple -->
            <div class="box-tier-card">
              <span style="font-size:0.8rem; font-weight:700; color:#535858; text-transform:uppercase;">1 - 2 People</span>
              <h3 style="font-size:1.5rem; font-weight:700; color:#1a1c1c; margin:0.4rem 0 0.75rem 0;">Chhota Parivar Sabzi Box</h3>
              <p class="body-sm" style="margin-bottom:1.5rem;">4 - 5 kg of fresh staple Indian vegetables and fruits for couples or single food lovers.</p>

              <div style="font-size:2rem; font-weight:800; color:#00665e; margin-bottom:1.5rem;">
                ${store.formatPrice(699)} <span style="font-size:0.9rem; font-weight:500; color:#676d6c;">/ box</span>
              </div>

              <ul style="list-style:none; display:flex; flex-direction:column; gap:0.6rem; font-size:0.9rem; color:#414545; margin-bottom:2rem;">
                <li style="display:flex; align-items:center; gap:6px;"><span style="color:#00665e;">${IconCheck(13)}</span> Desi tomatoes, potatoes, onions, green chillies</li>
                <li style="display:flex; align-items:center; gap:6px;"><span style="color:#00665e;">${IconCheck(13)}</span> 2 seasonal sabzis (bhindi / tinda / palak)</li>
                <li style="display:flex; align-items:center; gap:6px;"><span style="color:#00665e;">${IconCheck(13)}</span> 1 seasonal fruit variety (mango / apple)</li>
                <li style="display:flex; align-items:center; gap:6px;"><span style="color:#00665e;">${IconCheck(13)}</span> Free doorstep delivery every week</li>
              </ul>

              <button class="c-btn c-btn-outline c-btn-block btn-select-sub-box" data-name="Chhota Parivar Sabzi Box" data-price="699" data-weight="4.5 kg" style="font-weight:700;">
                Select Chhota Box &rarr;
              </button>
            </div>

            <!-- Box 2: Medium Parivar (Featured) -->
            <div class="box-tier-card featured">
              <span style="font-size:0.8rem; font-weight:700; color:#00665e; text-transform:uppercase;">3 - 4 People</span>
              <h3 style="font-size:1.5rem; font-weight:700; color:#1a1c1c; margin:0.4rem 0 0.75rem 0;">Bada Parivar Kitchen Box</h3>
              <p class="body-sm" style="margin-bottom:1.5rem;">8 - 9 kg of diverse peak-season organic vegetables, fresh saag/leafy greens, and seasonal fruits.</p>

              <div style="font-size:2rem; font-weight:800; color:#00665e; margin-bottom:1.5rem;">
                ${store.formatPrice(999)} <span style="font-size:0.9rem; font-weight:500; color:#676d6c;">/ box</span>
              </div>

              <ul style="list-style:none; display:flex; flex-direction:column; gap:0.6rem; font-size:0.9rem; color:#414545; margin-bottom:2rem;">
                <li style="display:flex; align-items:center; gap:6px;"><span style="color:#00665e;">${IconCheck(13)}</span> Complete kitchen staples: Aloo, Pyaaz, Desi Tamatar</li>
                <li style="display:flex; align-items:center; gap:6px;"><span style="color:#00665e;">${IconCheck(13)}</span> Fresh leafy saag: Palak, Methi, Coriander, Mint</li>
                <li style="display:flex; align-items:center; gap:6px;"><span style="color:#00665e;">${IconCheck(13)}</span> 3 seasonal gourds and vegetables (Lauki, Bhindi, Karela)</li>
                <li style="display:flex; align-items:center; gap:6px;"><span style="color:#00665e;">${IconCheck(13)}</span> 2 seasonal fruits + weekly kisan note</li>
              </ul>

              <button class="c-btn c-btn-primary c-btn-block btn-select-sub-box" data-name="Bada Parivar Kitchen Box" data-price="999" data-weight="8.5 kg" style="font-weight:700;">
                Select Bada Parivar Box &rarr;
              </button>
            </div>

            <!-- Box 3: Pure Fruit Box -->
            <div class="box-tier-card">
              <span style="font-size:0.8rem; font-weight:700; color:#535858; text-transform:uppercase;">Fruit Enthusiasts</span>
              <h3 style="font-size:1.5rem; font-weight:700; color:#1a1c1c; margin:0.4rem 0 0.75rem 0;">Indian Seasonal Fruit Box</h3>
              <p class="body-sm" style="margin-bottom:1.5rem;">6 - 7 kg of pure tree-ripened organic fruits from Konkan, Himalayas, and South India.</p>

              <div style="font-size:2rem; font-weight:800; color:#00665e; margin-bottom:1.5rem;">
                ${store.formatPrice(849)} <span style="font-size:0.9rem; font-weight:500; color:#676d6c;">/ box</span>
              </div>

              <ul style="list-style:none; display:flex; flex-direction:column; gap:0.6rem; font-size:0.9rem; color:#414545; margin-bottom:2rem;">
                <li style="display:flex; align-items:center; gap:6px;"><span style="color:#00665e;">${IconCheck(13)}</span> Devgad Alphonso, Gir Kesar (in season)</li>
                <li style="display:flex; align-items:center; gap:6px;"><span style="color:#00665e;">${IconCheck(13)}</span> Kinnaur Mountain Apples & Pears</li>
                <li style="display:flex; align-items:center; gap:6px;"><span style="color:#00665e;">${IconCheck(13)}</span> Nagpur Mandarins & Pollachi Coconuts</li>
                <li style="display:flex; align-items:center; gap:6px;"><span style="color:#00665e;">${IconCheck(13)}</span> 100% Carbide-free, zero cosmetic waxes</li>
              </ul>

              <button class="c-btn c-btn-outline c-btn-block btn-select-sub-box" data-name="Indian Seasonal Fruit Box" data-price="849" data-weight="6.5 kg" style="font-weight:700;">
                Select Fruit Box &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- What's in season this week -->
      <section style="padding: 4rem 0; background-color: #fafcfc;">
        <div class="container">
          <div class="section-header">
            <h2 class="heading-lg">Freshly harvested in this week’s Indian farm boxes</h2>
            <p class="body-md">Harvested at dawn and dispatched directly to avoid nutrient loss.</p>
          </div>

          <div class="grid grid-cols-4 lg:grid-cols-2 md:grid-cols-1 gap-6">
            <div style="background:#ffffff; border:1px solid #eef2f2; border-radius:1rem; padding:1.25rem; text-align:center;">
              <div style="color:#00665e; margin-bottom:0.75rem; display:flex; justify-content:center;">${IconApple(32)}</div>
              <strong style="display:block; color:#1a1c1c;">Devgad Alphonso Mangoes</strong>
              <span class="body-sm">Devgad Hapus Baug · Konkan</span>
            </div>
            <div style="background:#ffffff; border:1px solid #eef2f2; border-radius:1rem; padding:1.25rem; text-align:center;">
              <div style="color:#00665e; margin-bottom:0.75rem; display:flex; justify-content:center;">${IconLeaf(32)}</div>
              <strong style="display:block; color:#1a1c1c;">Country Desi Tomatoes</strong>
              <span class="body-sm">Godavari Natural Farm · Andhra</span>
            </div>
            <div style="background:#ffffff; border:1px solid #eef2f2; border-radius:1rem; padding:1.25rem; text-align:center;">
              <div style="color:#00665e; margin-bottom:0.75rem; display:flex; justify-content:center;">${IconWheat(32)}</div>
              <strong style="display:block; color:#1a1c1c;">Organic Kasuri Methi & Palak</strong>
              <span class="body-sm">Maru Jaivik Krishi · Rajasthan</span>
            </div>
            <div style="background:#ffffff; border:1px solid #eef2f2; border-radius:1rem; padding:1.25rem; text-align:center;">
              <div style="color:#00665e; margin-bottom:0.75rem; display:flex; justify-content:center;">${IconApple(32)}</div>
              <strong style="display:block; color:#1a1c1c;">Kinnaur Royal Apples</strong>
              <span class="body-sm">Spiti Border Orchards · Himachal</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

export function attachSubscriptionListeners() {
  document.querySelectorAll('.sub-freq-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.sub-freq-btn').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
    });
  });

  document.querySelectorAll('.btn-select-sub-box').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const name = e.currentTarget.getAttribute('data-name');
      const price = parseFloat(e.currentTarget.getAttribute('data-price'));
      const weight = e.currentTarget.getAttribute('data-weight');
      const activeFreq = document.querySelector('.sub-freq-btn.active')?.textContent || 'Weekly';

      store.addToCart({
        id: 'sub-' + name.toLowerCase().replace(/\s+/g, '-'),
        title: `${name} (${activeFreq})`,
        img: 'https://common.crowdfarming.com/uploaded-images/1785489058860-177462ef-2d92-44b4-b6f5-e19ec0082de6.jpg?Imwidth=320',
        price: price,
        size: weight,
        isAdoption: false,
        farmerName: 'Indian Organic Kisan Collective'
      });
    });
  });
}
