import { store } from '../state/store.js';
import {
  IconBox,
  IconLeaf,
  IconShield,
  IconArrowRight
} from '../components/icons.js';

export function renderSupportPage() {
  return `
    <div class="support-page">
      <div class="container" style="padding: 4rem 0 5rem 0; max-width:860px;">
        <div class="section-header" style="text-align:center; margin-bottom:3.5rem;">
          <span class="badge badge-organic" style="margin-bottom:0.75rem; display:inline-block;">Kisan Care & Support</span>
          <h1 class="heading-display">How can we help you today?</h1>
          <p class="body-lg">Direct support for KISAN members and our partner organic agricultural producers across India.</p>
        </div>

        <!-- Help Topics Grid -->
        <div class="grid grid-cols-3 md:grid-cols-1 gap-6" style="margin-bottom:3.5rem;">
          <div style="background:#ffffff; border:1px solid #eef2f2; border-radius:1rem; padding:1.75rem; text-align:center;">
            <div style="color:#00665e; margin-bottom:0.75rem; display:flex; justify-content:center;">${IconBox(28)}</div>
            <h4 style="font-size:1.1rem; font-weight:700; color:#1a1c1c; margin-bottom:0.4rem;">Orders & Deliveries</h4>
            <p class="body-sm">Track your farm dispatch, update delivery address, or check pincode delivery time.</p>
          </div>

          <div style="background:#ffffff; border:1px solid #eef2f2; border-radius:1rem; padding:1.75rem; text-align:center;">
            <div style="color:#00665e; margin-bottom:0.75rem; display:flex; justify-content:center;">${IconLeaf(28)}</div>
            <h4 style="font-size:1.1rem; font-weight:700; color:#1a1c1c;">Tree & Cow Adoptions</h4>
            <p class="body-sm">Manage adopted Alphonso/Kesar trees or Gir cows, view photos sent directly by your kisan.</p>
          </div>

          <div style="background:#ffffff; border:1px solid #eef2f2; border-radius:1rem; padding:1.75rem; text-align:center;">
            <div style="color:#00665e; margin-bottom:0.75rem; display:flex; justify-content:center;">${IconShield(28)}</div>
            <h4 style="font-size:1.1rem; font-weight:700; color:#1a1c1c; margin-bottom:0.4rem;">100% Quality Guarantee</h4>
            <p class="body-sm">Report courier transit damage within 48 hours for immediate refund or free replacement.</p>
          </div>
        </div>

        <!-- Open Incident / Claim Form -->
        <div style="background:#f7faf9; border:1.5px solid #d6e0df; border-radius:1.5rem; padding:2.5rem; margin-bottom:4rem;">
          <div style="margin-bottom:1.5rem;">
            <span class="badge badge-adoption" style="margin-bottom:0.4rem; display:inline-block;">100% Freshness Guarantee</span>
            <h3 class="heading-lg" style="color:#004c46;">Open a Quality Claim</h3>
            <p class="body-md">Because our harvests travel without artificial chemical waxes or preservatives, occasional transit delays or fruit bruising can occur. Let us know and we will resolve it immediately.</p>
          </div>

          <form id="incident-form" style="display:flex; flex-direction:column; gap:1.25rem;" onsubmit="event.preventDefault(); alert('Claim submitted successfully! Our Kisan Care team in Mumbai will process your resolution within 24 hours.');">
            <div class="grid grid-cols-2 md:grid-cols-1 gap-4">
              <div>
                <label class="label-sm-default" style="display:block; margin-bottom:0.35rem; font-weight:700;">Order ID / Number</label>
                <input type="text" required placeholder="e.g. KC-IN-84291" class="c-input">
              </div>
              <div>
                <label class="label-sm-default" style="display:block; margin-bottom:0.35rem; font-weight:700;">Your WhatsApp / Mobile Number</label>
                <input type="tel" required placeholder="+91 98765 43210" class="c-input">
              </div>
            </div>

            <div>
              <label class="label-sm-default" style="display:block; margin-bottom:0.35rem; font-weight:700;">Issue Category</label>
              <select class="c-input" required>
                <option value="">Select issue type</option>
                <option value="damage">Mangoes / Fruits arrived bruised during courier transit</option>
                <option value="delay">Courier delivery delayed past harvest window</option>
                <option value="missing">Missing items in farm box</option>
                <option value="quality">Fruit ripeness or flavor concern</option>
                <option value="other">General inquiry / feedback</option>
              </select>
            </div>

            <div>
              <label class="label-sm-default" style="display:block; margin-bottom:0.35rem; font-weight:700;">Description of issue</label>
              <textarea rows="4" required placeholder="Please describe what happened with your delivery..." class="c-input"></textarea>
            </div>

            <button type="submit" class="c-btn c-btn-primary c-btn-lg" style="align-self:flex-start; display:inline-flex; align-items:center; gap:8px; font-weight:700;">
              <span>Submit Quality Claim</span>
              ${IconArrowRight(14)}
            </button>
          </form>
        </div>
      </div>
    </div>
  `;
}
