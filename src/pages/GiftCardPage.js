import { store } from '../state/store.js';
import { IconSparkles } from '../components/icons.js';

export function renderGiftCardPage() {
  return `
    <div class="gift-card-page">
      <div class="container" style="padding-top:3.5rem; padding-bottom:5rem;">
        <div class="section-header" style="text-align:center; max-width:720px; margin-bottom:3rem;">
          <span class="badge badge-adoption" style="margin-bottom:0.75rem; display:inline-block;">Auspicious & Pure Gifting</span>
          <h1 class="heading-display">Gift Organic Harvests & Tree Adoptions</h1>
          <p class="body-lg">The perfect thoughtful gift for Diwali, weddings, housewarmings, and birthdays. Give your loved ones an adopted Alphonso mango tree, pure A2 Vedic ghee, or fresh farm produce.</p>
        </div>

        <div class="gift-card-preview-wrap">
          <!-- Left: Configurator -->
          <div style="background:#ffffff; border:1px solid #d6e0df; border-radius:1.5rem; padding:2.25rem; box-shadow:0 8px 24px rgba(0,0,0,0.05);">
            <h3 style="font-size:1.25rem; font-weight:700; color:#1a1c1c; margin-bottom:1.25rem;">Customize your gift voucher</h3>

            <!-- Amount selector -->
            <label class="label-md-strong" style="display:block; margin-bottom:0.6rem;">Select Gift Value (₹ INR)</label>
            <div class="gift-card-amounts-grid">
              <button class="c-btn c-btn-outline gift-amt-btn active" data-amount="1000">₹1,000</button>
              <button class="c-btn c-btn-outline gift-amt-btn" data-amount="2500">₹2,500</button>
              <button class="c-btn c-btn-outline gift-amt-btn" data-amount="5000">₹5,000</button>
              <button class="c-btn c-btn-outline gift-amt-btn" data-amount="10000">₹10,000</button>
            </div>

            <!-- Recipient name -->
            <div style="margin-bottom:1.25rem;">
              <label class="label-sm-default" style="display:block; margin-bottom:0.35rem; font-weight:700;">Recipient's Name</label>
              <input type="text" id="gift-recipient-name" value="Aarav Sharma" class="c-input" placeholder="e.g. Aarav">
            </div>

            <!-- Sender name -->
            <div style="margin-bottom:1.25rem;">
              <label class="label-sm-default" style="display:block; margin-bottom:0.35rem; font-weight:700;">From</label>
              <input type="text" id="gift-sender-name" value="Priya & Rohan" class="c-input" placeholder="Your name">
            </div>

            <!-- Occasion / Message -->
            <div style="margin-bottom:1.5rem;">
              <label class="label-sm-default" style="display:block; margin-bottom:0.35rem; font-weight:700;">Personal Greeting / Wishes</label>
              <textarea id="gift-message" rows="3" class="c-input" style="resize:vertical;">Shubh Deepavali! May this year bring health, purity, and sweetness with your very own adopted organic mango tree.</textarea>
            </div>

            <button id="btn-add-gift-card" class="c-btn c-btn-primary c-btn-block c-btn-lg">
              Add Gift Card to Basket →
            </button>
          </div>

          <!-- Right: Live Certificate Card Preview -->
          <div>
            <div style="font-size:0.85rem; font-weight:700; color:#535858; margin-bottom:0.75rem; text-transform:uppercase;">
              Live Certificate Preview
            </div>

            <div class="certificate-card" style="background: linear-gradient(135deg, #004c46 0%, #00665e 60%, #e14f00 100%);">
              <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                <div>
                  <div style="background:#ffffff; padding:4px 10px; border-radius:8px; display:inline-block; margin-bottom:0.35rem;">
                    <img src="/logo.png" alt="KISAN" style="height:26px; vertical-align:middle;" />
                  </div>
                  <div style="font-size:0.75rem; opacity:0.85; text-transform:uppercase; letter-spacing:0.05em;">Shubh Harvest Voucher</div>
                </div>
                <div id="live-card-amount" style="font-size:2.2rem; font-weight:900; color:#9ce9df;">₹1,000</div>
              </div>

              <div style="margin:1.5rem 0;">
                <span style="font-size:0.8rem; opacity:0.8;">Specially gifted to:</span>
                <h2 id="live-card-recipient" style="font-size:1.85rem; font-weight:700; margin:0.2rem 0 0.5rem 0;">Aarav Sharma</h2>
                <p id="live-card-message" style="font-size:0.95rem; opacity:0.95; font-style:italic; line-height:1.4;">
                  "Shubh Deepavali! May this year bring health, purity, and sweetness with your very own adopted organic mango tree."
                </p>
              </div>

              <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid rgba(255,255,255,0.2); padding-top:1rem; font-size:0.8rem;">
                <div>From: <strong id="live-card-sender">Priya & Rohan</strong></div>
                <div style="font-family:monospace; opacity:0.85;">KC-IN-2026-X89</div>
              </div>
            </div>

            <div style="margin-top:1.5rem; background:#f7faf9; border-radius:1rem; padding:1.25rem; font-size:0.85rem; color:#535858; line-height:1.5; display:flex; align-items:flex-start; gap:8px;">
              <span style="color:#00665e; margin-top:2px;">${IconSparkles(16)}</span>
              <span><strong>How it works:</strong> The recipient receives an instant WhatsApp or Email gift certificate containing a unique code redeemable against any Devgad Alphonso mangoes, Gir A2 bilona ghee, or seasonal farm box across India. Never expires.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function attachGiftCardListeners() {
  const amtBtns = document.querySelectorAll('.gift-amt-btn');
  const recipientInput = document.getElementById('gift-recipient-name');
  const senderInput = document.getElementById('gift-sender-name');
  const messageInput = document.getElementById('gift-message');

  let currentAmount = 1000;

  amtBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      amtBtns.forEach(b => {
        b.classList.remove('active');
        b.style.backgroundColor = 'transparent';
        b.style.color = '#00665e';
      });
      const t = e.currentTarget;
      t.classList.add('active');
      t.style.backgroundColor = '#00665e';
      t.style.color = '#ffffff';

      currentAmount = parseFloat(t.getAttribute('data-amount'));
      document.getElementById('live-card-amount').textContent = store.formatPrice(currentAmount);
    });
  });

  recipientInput?.addEventListener('input', (e) => {
    document.getElementById('live-card-recipient').textContent = e.target.value || 'Recipient';
  });

  senderInput?.addEventListener('input', (e) => {
    document.getElementById('live-card-sender').textContent = e.target.value || 'Someone special';
  });

  messageInput?.addEventListener('input', (e) => {
    document.getElementById('live-card-message').textContent = `"${e.target.value || ''}"`;
  });

  document.getElementById('btn-add-gift-card')?.addEventListener('click', () => {
    const recipient = recipientInput?.value || 'Friend';
    store.addToCart({
      id: 'gift-card-' + Date.now(),
      title: `KISAN Gift Voucher for ${recipient}`,
      img: 'https://common.crowdfarming.com/uploaded-images/1785489058860-177462ef-2d92-44b4-b6f5-e19ec0082de6.jpg?Imwidth=320',
      price: currentAmount,
      size: `${store.formatPrice(currentAmount)} Gift Voucher`,
      isAdoption: false,
      farmerName: 'KISAN Gifting'
    });
  });
}
