import { store, INDIAN_REGIONS } from '../state/store.js';
import { IconMapPin, IconCheck } from './icons.js';

export function renderCountryCurrencyModal() {
  const state = store.getState();
  const isOpen = state.isLocationModalOpen;
  const currentRegion = state.selectedRegion;

  return `
    <div id="country-modal-backdrop" class="modal-backdrop ${isOpen ? 'open' : ''}">
      <div class="modal-dialog" style="max-width:540px;">
        <button id="close-country-modal" class="modal-close-btn" aria-label="Close location selector">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>

        <div class="flex items-center gap-2" style="margin-bottom:0.5rem;">
          <span style="color:#00665e; display:flex; align-items:center;">${IconMapPin(22)}</span>
          <h3 style="font-size:1.35rem; font-weight:700; color:#1a1c1c;">Select Delivery Location</h3>
        </div>
        <p class="body-sm" style="margin-bottom:1.5rem; color:#535858;">
          Direct farm-to-door express delivery available across all 28 Indian States, Union Territories and 25,000+ pincodes.
        </p>

        <!-- Pincode input -->
        <div style="background:#f6fbf9; border:1.5px solid #7fcbc2; border-radius:1rem; padding:1.25rem; margin-bottom:1.5rem;">
          <label class="label-md-strong" style="display:block; margin-bottom:0.4rem; color:#004c46;">
            Enter Your Delivery Pincode
          </label>
          <div style="display:flex; gap:0.5rem;">
            <input
              type="text"
              id="input-custom-pincode"
              maxlength="6"
              value="${state.pincode}"
              placeholder="e.g. 400050"
              class="c-input"
              style="font-size:1.1rem; font-weight:700; letter-spacing:0.05em;"
            >
            <button id="btn-apply-pincode" class="c-btn c-btn-primary" style="white-space:nowrap; font-weight:700;">
              Apply Pincode
            </button>
          </div>
          <div style="font-size:0.75rem; color:#00665e; margin-top:0.4rem; display:flex; align-items:center; gap:4px;">
            ${IconCheck(13)}
            <span>Eligible for direct harvest express farm delivery</span>
          </div>
        </div>

        <!-- Quick Select Major Metros -->
        <div>
          <label class="label-md-strong" style="display:block; margin-bottom:0.6rem;">
            Popular Delivery Hubs
          </label>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem; max-height:240px; overflow-y:auto; padding-right:0.25rem;">
            ${INDIAN_REGIONS.map(r => `
              <button
                class="region-select-btn ${currentRegion.code === r.code ? 'active' : ''}"
                data-code="${r.code}"
                style="display:flex; align-items:center; gap:0.6rem; padding:0.65rem 0.85rem; border-radius:0.5rem; border:1.5px solid ${currentRegion.code === r.code ? '#00665e' : '#eef2f2'}; background:${currentRegion.code === r.code ? '#e4fbf7' : '#ffffff'}; font-size:0.9rem; font-weight:${currentRegion.code === r.code ? '700' : '500'}; color:#1a1c1c; text-align:left; cursor:pointer;"
              >
                <span class="state-badge">${r.code}</span>
                <div style="line-height:1.2;">
                  <div>${r.city}</div>
                  <span style="font-size:0.75rem; color:#676d6c;">${r.name} (${r.pincode})</span>
                </div>
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

export function attachCountryCurrencyListeners() {
  const backdrop = document.getElementById('country-modal-backdrop');
  const closeBtn = document.getElementById('close-country-modal');

  const close = () => store.setLocationModalOpen(false);

  closeBtn?.addEventListener('click', close);
  backdrop?.addEventListener('click', (e) => {
    if (e.target === backdrop) close();
  });

  document.querySelectorAll('.region-select-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const code = e.currentTarget.getAttribute('data-code');
      store.setRegion(code);
      store.showToast(`Delivery location set to ${store.getState().selectedRegion.city} (${store.getState().pincode})`, 'success');
      close();
    });
  });

  document.getElementById('btn-apply-pincode')?.addEventListener('click', () => {
    const pincode = document.getElementById('input-custom-pincode')?.value.trim();
    if (pincode && pincode.length === 6 && /^\d+$/.test(pincode)) {
      store.state.pincode = pincode;
      store.saveStorage('cf_in_pincode', pincode);
      store.showToast(`Pincode updated to ${pincode}`, 'success');
      close();
    } else {
      alert('Please enter a valid 6-digit Indian delivery pincode');
    }
  });
}
