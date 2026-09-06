import { store } from '../state/store.js';
import { IconBuilding, IconCheck } from './icons.js';

export function renderRfqModal() {
  const state = store.getState();
  const isOpen = state.isRfqModalOpen;
  const product = state.rfqProduct;

  return `
    <div id="rfq-modal-backdrop" class="modal-backdrop ${isOpen ? 'open' : ''}">
      <div class="modal-dialog" style="max-width:580px; padding:2rem;">
        <button id="close-rfq-modal" class="modal-close-btn" aria-label="Close RFQ dialog">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>

        <div style="margin-bottom:1.5rem;">
          <span class="badge badge-organic" style="display:inline-flex; align-items:center; gap:5px; margin-bottom:0.4rem;">
            ${IconBuilding(13)}
            <span>B2B & Institutional Procurement</span>
          </span>
          <h3 style="font-size:1.4rem; font-weight:700; color:#004c46; margin-bottom:0.35rem;">
            Request Bulk FPO Quote (RFQ)
          </h3>
          <p class="body-sm" style="color:#535858;">
            Direct dispatch from farmer packhouses. Zero dalal commissions, formal GST invoicing, batch lab inspection reports, and Pan-India commercial freight.
          </p>
        </div>

        ${product ? `
          <div style="display:flex; align-items:center; gap:1rem; padding:0.85rem; background:#f7faf9; border:1px solid #d6e0df; border-radius:0.75rem; margin-bottom:1.25rem;">
            <img src="${product.images[0]}" alt="${product.title}" style="width:52px; height:52px; border-radius:0.5rem; object-fit:cover;">
            <div style="flex:1;">
              <strong style="color:#1a1c1c; font-size:0.95rem;">${product.title}</strong>
              <div style="font-size:0.8rem; color:#00665e;">FPO: ${product.fpoName}</div>
              <div style="font-size:0.75rem; color:#535858;">Base Bulk Price: <strong>₹${product.bulkPrice}/${product.bulkUnit}</strong> (MOQ: ${product.bulkMOQ} ${product.bulkUnit.split(' ')[0]})</div>
            </div>
          </div>
        ` : ''}

        <form id="rfq-form" style="display:flex; flex-direction:column; gap:1rem;">
          <div class="grid grid-cols-2 md:grid-cols-1 gap-3">
            <div>
              <label class="label-sm-default" style="display:block; margin-bottom:0.3rem; font-weight:700;">Business / Buyer Type</label>
              <select id="rfq-buyer-type" class="c-input" required>
                <option value="horeca">Hotel / Restaurant / Cloud Kitchen</option>
                <option value="kirana">Kirana / Supermarket Chain</option>
                <option value="society">Housing Society Bulk Group</option>
                <option value="processor">Food Processor / Sweet Manufacturer</option>
                <option value="institution">Corporate / Institutional Canteen</option>
              </select>
            </div>
            <div>
              <label class="label-sm-default" style="display:block; margin-bottom:0.3rem; font-weight:700;">Required Quantity (kg / MT)</label>
              <input type="text" id="rfq-qty" required placeholder="e.g. 500 kg or 5 Metric Tons" class="c-input">
            </div>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-1 gap-3">
            <div>
              <label class="label-sm-default" style="display:block; margin-bottom:0.3rem; font-weight:700;">Contact Person / Buyer Name</label>
              <input type="text" id="rfq-name" required placeholder="e.g. Rajesh Singhania" class="c-input">
            </div>
            <div>
              <label class="label-sm-default" style="display:block; margin-bottom:0.3rem; font-weight:700;">Business Mobile / WhatsApp</label>
              <input type="tel" id="rfq-phone" required placeholder="+91 98765 43210" class="c-input">
            </div>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-1 gap-3">
            <div>
              <label class="label-sm-default" style="display:block; margin-bottom:0.3rem; font-weight:700;">Delivery Destination City & Pincode</label>
              <input type="text" id="rfq-destination" required placeholder="e.g. Pune, MH - 411038" class="c-input">
            </div>
            <div>
              <label class="label-sm-default" style="display:block; margin-bottom:0.3rem; font-weight:700;">GSTIN (Optional for B2B Input Credit)</label>
              <input type="text" id="rfq-gstin" placeholder="27AAAAA0000A1Z5" class="c-input" style="text-transform:uppercase;">
            </div>
          </div>

          <div>
            <label class="label-sm-default" style="display:block; margin-bottom:0.3rem; font-weight:700;">Specific Quality & Packaging Requirements</label>
            <textarea id="rfq-notes" rows="2" class="c-input" placeholder="e.g. Need ripe table fruits in 20kg crates, delivery by next Wednesday morning, sample needed first..."></textarea>
          </div>

          <div style="background:#eef7f5; border:1px solid #7fcbc2; border-radius:0.75rem; padding:0.75rem; font-size:0.8rem; color:#004c46; display:flex; align-items:center; gap:6px;">
            ${IconCheck(14)}
            <span><strong>Kisan Direct Guarantee:</strong> The FPO will review your quote and dispatch farm-gate pricing within 4 hours. No hidden broker commissions.</span>
          </div>

          <button type="submit" class="c-btn c-btn-primary c-btn-block c-btn-lg" style="margin-top:0.5rem; font-weight:700;">
            Submit Bulk RFQ to FPO &rarr;
          </button>
        </form>
      </div>
    </div>
  `;
}

export function attachRfqListeners() {
  const backdrop = document.getElementById('rfq-modal-backdrop');
  const closeBtn = document.getElementById('close-rfq-modal');
  const form = document.getElementById('rfq-form');

  const close = () => store.setRfqModalOpen(false);

  closeBtn?.addEventListener('click', close);
  backdrop?.addEventListener('click', (e) => {
    if (e.target === backdrop) close();
  });

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const buyerName = document.getElementById('rfq-name')?.value;
    const qty = document.getElementById('rfq-qty')?.value;
    const currentProduct = store.getState().rfqProduct;

    alert(`RFQ Successfully Submitted!\n\nDhanyawaad, ${buyerName}!\nYour request for ${qty} of ${currentProduct ? currentProduct.title : 'bulk produce'} has been transmitted directly to ${currentProduct ? currentProduct.fpoName : 'the verified FPO'}.\n\nThe FPO commercial desk will contact you via WhatsApp / call within 4 hours with farm-gate invoice rates.`);

    close();
  });
}
