import {
  IconWheat,
  IconAward,
  IconLeaf,
  IconShield
} from './icons.js';

export function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container">
        <!-- Top Newsletter / Values banner -->
        <div style="background-color:#00332e; color:#ffffff; border-radius:1.5rem; padding:3rem; margin-bottom:4rem; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:2rem;">
          <div style="max-width:560px;">
            <div style="display:inline-flex; align-items:center; gap:6px; font-size:0.8rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; color:#9ce9df; margin-bottom:0.4rem;">
              <span>${IconWheat(14)}</span>
              <span>Direct AgTech Marketplace for India</span>
            </div>
            <h3 style="font-size:1.85rem; font-weight:700; margin:0.4rem 0 0.75rem 0; line-height:1.2;">
              Better prices for farmers. Lower prices for consumers & businesses.
            </h3>
            <p style="font-size:0.95rem; color:#d6e0df; line-height:1.5;">
              Subscribe for weekly harvest arrivals, seasonal mango wholesale lots, cold-pressed oil dispatches, and APMC mandi price comparison updates.
            </p>
          </div>
          <form id="footer-newsletter-form" style="display:flex; gap:0.5rem; width:100%; max-width:440px;" onsubmit="event.preventDefault(); alert('Dhanyawaad! You are subscribed to weekly farm-direct harvest and wholesale lot updates.');">
            <input type="email" required placeholder="Enter your business or personal email" style="flex:1; padding:0.85rem 1.25rem; background:#ffffff; border-radius:999px; color:#1a1c1c; font-size:0.95rem; border:none;">
            <button type="submit" class="c-btn c-btn-secondary" style="font-weight:700;">Subscribe</button>
          </form>
        </div>

        <div class="footer-grid">
          <!-- Col 1: Brand & Mission -->
          <div>
            <a href="#/" class="brand-logo" style="margin-bottom:1rem; display:inline-block;">
              <img src="/logo.png" alt="KISAN" class="brand-logo-img" style="height:44px;" />
            </a>
            <p class="body-sm" style="margin-bottom:1.5rem; line-height:1.6; color:#535858;">
              India's digital marketplace connecting farmers and FPOs directly with consumers and bulk buyers. Eliminating APMC middlemen to maximize farmer profitability and deliver lower prices to buyers.
            </p>
            <div style="display:flex; align-items:center; gap:0.6rem; flex-wrap:wrap;">
              <span style="display:inline-flex; align-items:center; gap:0.4rem; padding:0.35rem 0.75rem; background:#ffffff; border:1px solid #d6e0df; border-radius:999px; font-size:0.75rem; font-weight:700; color:#00665e;">
                ${IconAward(14)} FSSAI Jaivik Bharat
              </span>
              <span style="display:inline-flex; align-items:center; gap:0.4rem; padding:0.35rem 0.75rem; background:#ffffff; border:1px solid #d6e0df; border-radius:999px; font-size:0.75rem; font-weight:700; color:#00665e;">
                ${IconLeaf(14)} NPOP India Organic
              </span>
              <span style="display:inline-flex; align-items:center; gap:0.4rem; padding:0.35rem 0.75rem; background:#ffffff; border:1px solid #d6e0df; border-radius:999px; font-size:0.75rem; font-weight:700; color:#00665e;">
                ${IconShield(14)} 100% Zero Carbide
              </span>
            </div>
          </div>

          <!-- Col 2: Retail Marketplace -->
          <div>
            <h4 class="footer-col-title">Retail Marketplace</h4>
            <ul class="footer-links-list">
              <li><a href="#/direct-from-farmer?category=fruits">Devgad & Gir Mangoes</a></li>
              <li><a href="#/direct-from-farmer?category=fruits">Kinnaur Mountain Apples</a></li>
              <li><a href="#/direct-from-farmer?category=dairy-eggs">Desi Gir Cow A2 Ghee</a></li>
              <li><a href="#/direct-from-farmer?category=beverages">Chikmagalur Arabica Coffee</a></li>
              <li><a href="#/direct-from-farmer?category=pantry-essentials">Pampore Kashmiri Saffron</a></li>
              <li><a href="#/direct-from-farmer?category=oils-sauces-spices">Wood-Pressed Mustard Oil</a></li>
              <li><a href="#/direct-from-farmer?category=oils-sauces-spices">Wayanad Bold Spices</a></li>
            </ul>
          </div>

          <!-- Col 3: Bulk & Institutional B2B -->
          <div>
            <h4 class="footer-col-title">Bulk Buyers (B2B)</h4>
            <ul class="footer-links-list">
              <li><a href="#/bulk">HoReCa (Hotel & Restaurant Supply)</a></li>
              <li><a href="#/bulk">Kirana & Retailer Wholesale</a></li>
              <li><a href="#/bulk">Housing Society Group Buying</a></li>
              <li><a href="#/bulk">Food Processor Crates</a></li>
              <li><a href="#/bulk">Request Custom Bulk RFQ</a></li>
              <li><a href="#/bulk#bulk-calculator-section">Mandi Savings Calculator</a></li>
            </ul>
          </div>

          <!-- Col 4: For Farmers & FPOs -->
          <div>
            <h4 class="footer-col-title">For Farmers & FPOs</h4>
            <ul class="footer-links-list">
              <li><a href="#/sell">Sell Your Harvest Direct</a></li>
              <li><a href="#/sell">FPO Onboarding Registration</a></li>
              <li><a href="#/fpos">Verified FPO Directory</a></li>
              <li><a href="#/fair-pricing">Fair Price Index (Mandi vs Direct)</a></li>
              <li><a href="#/contact">Kisan Help Desk</a></li>
              <li><a href="#/tos">Direct Trade Terms & Settlement</a></li>
            </ul>
          </div>

          <!-- Col 5: Payment & Trust -->
          <div>
            <h4 class="footer-col-title">B2B & Retail Payments</h4>
            <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-bottom:1.5rem;">
              <span style="padding:0.4rem 0.75rem; background:#ffffff; border:1px solid #d6e0df; border-radius:0.4rem; font-size:0.8rem; font-weight:700; color:#1a1c1c;">UPI / QR</span>
              <span style="padding:0.4rem 0.75rem; background:#ffffff; border:1px solid #d6e0df; border-radius:0.4rem; font-size:0.8rem; font-weight:700; color:#1a1c1c;">B2B NEFT / RTGS</span>
              <span style="padding:0.4rem 0.75rem; background:#ffffff; border:1px solid #d6e0df; border-radius:0.4rem; font-size:0.8rem; font-weight:700; color:#1a1c1c;">GST Invoicing</span>
              <span style="padding:0.4rem 0.75rem; background:#ffffff; border:1px solid #d6e0df; border-radius:0.4rem; font-size:0.8rem; font-weight:700; color:#1a1c1c;">RuPay / Cards</span>
            </div>

            <h5 class="label-sm-default" style="font-weight:700; margin-bottom:0.6rem; color:#1a1c1c;">Connect With Us</h5>
            <div class="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener" class="social-icon-btn" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener" class="social-icon-btn" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener" class="social-icon-btn" aria-label="X">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div>
            &copy; 2026 KISAN India Pvt. Ltd. Empowering 14,000+ Kisans and FPOs across 28 Indian States.
          </div>
          <div style="display:flex; gap:1.5rem; flex-wrap:wrap;">
            <a href="#/tos">Direct Trade Agreement</a>
            <a href="#/fair-pricing">Price Transparency</a>
            <a href="#/tos">FSSAI Compliance</a>
            <a href="#/contact">Kisan Support</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
