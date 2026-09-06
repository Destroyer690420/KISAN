import { store } from '../state/store.js';
import { faqs } from '../data/faqs.js';
import {
  IconX,
  IconCheck,
  IconWheat,
  IconMilk,
  IconLeaf,
  IconAward
} from '../components/icons.js';

export function renderRegenerativePage() {
  return `
    <div class="regenerative-page">
      <!-- Manifesto Hero -->
      <section class="regen-manifesto-hero">
        <div class="container" style="max-width:880px;">
          <span class="badge badge-regenerative" style="margin-bottom:1rem; display:inline-block; font-size:0.85rem; padding:0.4rem 1rem;">
            Prakritik Krishi & Soil Healing
          </span>
          <h1 class="heading-display" style="color:#ffffff; margin-bottom:1.5rem;">
            Reviving the sacred soils of Bharat
          </h1>
          <p class="body-lg" style="color:#d6e0df; margin-bottom:2.5rem; line-height:1.7;">
            Decades of green revolution chemical fertilizers and pesticides depleted India’s soil carbon, poisoned rural groundwater, and burdened kisans with recurring debt. Natural & Regenerative Farming restores living microbial fertility through Desi Cow bio-culture (Jeevamrut), multi-layer agroforestry, and zero stubble burning.
          </p>
          <div style="display:flex; justify-content:center; gap:1rem;">
            <a href="#/direct-from-farmer" class="c-btn c-btn-secondary c-btn-lg">Explore Natural Farms</a>
            <a href="#/membership" class="c-btn c-btn-outline c-btn-lg" style="border-color:#ffffff; color:#ffffff;">1% for Indian Soil Fund</a>
          </div>
        </div>
      </section>

      <!-- Life of a Tree: Chemical Farming vs. Natural Prakritik Farming -->
      <section style="padding: 5rem 0;">
        <div class="container">
          <div class="section-header">
            <h2 class="heading-xl">Chemical Monoculture vs. Indian Regenerative Farming</h2>
            <p class="body-lg">How traditional Vedic and natural practices heal soil micro-biology and restore groundwater.</p>
          </div>

          <div class="comparison-slider-container">
            <!-- Chemical Model -->
            <div class="tree-model-card tree-model-conventional">
              <div class="flex items-center gap-2" style="color:#ba2f1e; margin-bottom:1rem;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                <h3 style="font-size:1.35rem; font-weight:700;">Chemical & Urea Intensive</h3>
              </div>
              <ul style="list-style:none; display:flex; flex-direction:column; gap:1rem; font-size:0.95rem; color:#414545;">
                <li style="display:flex; align-items:flex-start; gap:8px;">
                  <span style="color:#ba2f1e; margin-top:3px;">${IconX(14)}</span>
                  <span><strong>Soil Salinization & Hard Pan:</strong> Excessive synthetic urea and DAP destroy earthworm channels and natural topsoil humus.</span>
                </li>
                <li style="display:flex; align-items:flex-start; gap:8px;">
                  <span style="color:#ba2f1e; margin-top:3px;">${IconX(14)}</span>
                  <span><strong>Heavy Groundwater Depletion:</strong> Compacted lifeless soil cannot hold monsoon rainwater, causing flash runoffs and falling tube-well levels.</span>
                </li>
                <li style="display:flex; align-items:flex-start; gap:8px;">
                  <span style="color:#ba2f1e; margin-top:3px;">${IconX(14)}</span>
                  <span><strong>Pesticide Residues in Food:</strong> Endosulfan, chlorpyrifos, and chemical sprays enter fruits, vegetables, and milk.</span>
                </li>
                <li style="display:flex; align-items:flex-start; gap:8px;">
                  <span style="color:#ba2f1e; margin-top:3px;">${IconX(14)}</span>
                  <span><strong>Farmer Debt Cycle:</strong> High recurring cost of hybrid GM seeds, chemical fertilizers, and toxic sprays.</span>
                </li>
              </ul>
            </div>

            <!-- Regenerative Model -->
            <div class="tree-model-card tree-model-regenerative">
              <div class="flex items-center gap-2" style="color:#006847; margin-bottom:1rem;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <h3 style="font-size:1.35rem; font-weight:700;">Prakritik & Desi Cow Bio-Culture</h3>
              </div>
              <ul style="list-style:none; display:flex; flex-direction:column; gap:1rem; font-size:0.95rem; color:#1a1c1c;">
                <li style="display:flex; align-items:flex-start; gap:8px;">
                  <span style="color:#00665e; margin-top:3px;">${IconCheck(14)}</span>
                  <span><strong>Jeevamrut & Micro-Biology:</strong> 1 gram of Desi Cow dung contains over 300 crore beneficial microbes that unlock bound soil minerals.</span>
                </li>
                <li style="display:flex; align-items:flex-start; gap:8px;">
                  <span style="color:#00665e; margin-top:3px;">${IconCheck(14)}</span>
                  <span><strong>Water Sponge Effect (Acchadana):</strong> Organic straw mulching prevents soil evaporation, cutting irrigation requirements by up to 50%.</span>
                </li>
                <li style="display:flex; align-items:flex-start; gap:8px;">
                  <span style="color:#00665e; margin-top:3px;">${IconCheck(14)}</span>
                  <span><strong>Multi-Tier Companion Cropping:</strong> Legumes, spices, and fruit trees planted together naturally fix atmospheric nitrogen.</span>
                </li>
                <li style="display:flex; align-items:flex-start; gap:8px;">
                  <span style="color:#00665e; margin-top:3px;">${IconCheck(14)}</span>
                  <span><strong>Kisan Financial Sovereignty:</strong> Zero reliance on chemical corporations; 100% farm-prepared natural bio-inputs.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 1% for Indian Soil Program -->
      <section style="padding: 5rem 0; background-color: #f7faf9;">
        <div class="container">
          <div style="background:#00332e; color:#ffffff; border-radius:1.75rem; padding:3.5rem 3rem; display:grid; grid-template-columns:1.2fr 1fr; gap:3rem; align-items:center;">
            <div>
              <span class="badge badge-regenerative" style="margin-bottom:1rem; display:inline-block;">KISAN Initiative</span>
              <h2 class="heading-xl" style="color:#ffffff; margin-bottom:1rem;">1% for Indian Soil Fund</h2>
              <p class="body-lg" style="color:#d6e0df; margin-bottom:1.5rem; line-height:1.6;">
                1% of every order on KISAN directly funds independent smallholder kisans transitioning away from chemical inputs toward certified natural farming.
              </p>
              <div style="display:flex; gap:1.5rem; flex-wrap:wrap;">
                <div>
                  <div style="font-size:2.2rem; font-weight:800; color:#9ce9df;">₹4.8 Crore+</div>
                  <div style="font-size:0.85rem; color:#d6e0df;">Invested in Indian soil organic testing</div>
                </div>
                <div>
                  <div style="font-size:2.2rem; font-weight:800; color:#9ce9df;">120+ Panchayats</div>
                  <div style="font-size:0.85rem; color:#d6e0df;">Empowered with Desi Cow bio-units</div>
                </div>
              </div>
            </div>
            <div style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.15); border-radius:1.25rem; padding:2rem;">
              <h4 style="font-size:1.15rem; font-weight:700; color:#ffffff; margin-bottom:1rem;">Where the fund is deployed</h4>
              <div style="display:flex; flex-direction:column; gap:0.75rem; font-size:0.9rem; color:#e4fbf7;">
                <div style="display:flex; align-items:center; gap:8px;">
                  <span style="color:#9ce9df;">${IconWheat(15)}</span>
                  <span><strong>35%</strong> Free lab testing for soil organic carbon & chemical residue audits</span>
                </div>
                <div style="display:flex; align-items:center; gap:8px;">
                  <span style="color:#9ce9df;">${IconMilk(15)}</span>
                  <span><strong>30%</strong> Subsidies for community Desi Gaushalas & Jeevamrut preparation tanks</span>
                </div>
                <div style="display:flex; align-items:center; gap:8px;">
                  <span style="color:#9ce9df;">${IconLeaf(15)}</span>
                  <span><strong>20%</strong> Farm pond rainwater recharge & drip irrigation setups</span>
                </div>
                <div style="display:flex; align-items:center; gap:8px;">
                  <span style="color:#9ce9df;">${IconAward(15)}</span>
                  <span><strong>15%</strong> Master kisan workshops and indigenous seed preservation (Beej Swaraj)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Regenerative FAQs -->
      <section style="padding: 5rem 0;">
        <div class="container" style="max-width:820px;">
          <h3 class="heading-lg" style="margin-bottom:1.5rem; text-align:center;">Prakritik Krishi & Natural Farming FAQ</h3>
          <div style="display:flex; flex-direction:column; gap:1rem;">
            ${faqs.regenerative.map(f => `
              <details style="background:#ffffff; border:1px solid #eef2f2; border-radius:0.75rem; padding:1.25rem; cursor:pointer;">
                <summary style="font-weight:700; font-size:1.05rem; color:#1a1c1c; list-style:none; display:flex; justify-content:space-between; align-items:center;">
                  <span>${f.q}</span>
                  <span style="color:#00665e; font-size:1.25rem;">+</span>
                </summary>
                <p class="body-sm" style="margin-top:1rem; line-height:1.6; color:#414545;">
                  ${f.a}
                </p>
              </details>
            `).join('')}
          </div>
        </div>
      </section>
    </div>
  `;
}
