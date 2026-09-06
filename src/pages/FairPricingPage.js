import { store } from '../state/store.js';
import { products } from '../data/products.js';
import { IconTrendingUp, IconXCircle, IconCheckCircle } from '../components/icons.js';

export function renderFairPricingPage() {
  return `
    <div class="fair-pricing-page">
      <!-- Hero -->
      <section class="membership-hero" style="background: linear-gradient(135deg, #00332e 0%, #004c46 65%, #217870 100%);">
        <div class="container" style="max-width:860px;">
          <span style="display:inline-flex; align-items:center; gap:6px; font-size:0.85rem; font-weight:700; background:rgba(255,255,255,0.15); color:#ffffff; padding:0.35rem 1rem; border-radius:999px; margin-bottom:1rem;">
            ${IconTrendingUp(14)}
            <span>100% Price Transparency Index</span>
          </span>
          <h1 class="heading-display" style="color:#ffffff; margin-bottom:1rem; font-size:2.85rem;">
            Fair Prices for Kisans. Lower Prices for Buyers.
          </h1>
          <p class="body-lg" style="color:#e4fbf7; margin-bottom:2rem;">
            Traditional APMC mandis subject farmers to 4-6 layers of commission agents, dalals, and middlemen cartels. Here is the verified economic truth of how eliminating middlemen creates a win-win for both farmers and consumers.
          </p>
        </div>
      </section>

      <!-- Live Comparison Table -->
      <section style="padding: 5rem 0; background:#f7faf9;">
        <div class="container">
          <div class="section-header" style="text-align:center; max-width:740px; margin:0 auto 3rem auto;">
            <span class="badge badge-organic" style="margin-bottom:0.4rem; display:inline-block;">Live Mandi vs KISAN Matrix</span>
            <h2 class="heading-xl">Commodity Price Comparison Across India</h2>
            <p class="body-md">Updated weekly based on AGMARKNET APMC mandi averages and major Indian retail supermarket markups.</p>
          </div>

          <div class="comparison-table-wrap" style="box-shadow:0 8px 30px rgba(0,0,0,0.06); border-radius:1.25rem; overflow:hidden;">
            <table class="comparison-table">
              <thead>
                <tr>
                  <th style="width:25%;">Commodity & FPO</th>
                  <th style="width:18%;">Mandi Farmer Price (What Kisan Gets)</th>
                  <th class="highlight-col" style="width:20%;">KISAN Payout (Direct to Kisan)</th>
                  <th style="width:18%;">Supermarket Price (What Consumer Pays)</th>
                  <th class="highlight-col" style="width:19%;">KISAN Price (What You Pay)</th>
                </tr>
              </thead>
              <tbody>
                ${products.map(p => `
                  <tr>
                    <td>
                      <strong>${p.title}</strong>
                      <div style="font-size:0.75rem; color:#00665e;">${p.fpoName} (${p.state})</div>
                    </td>
                    <td style="color:#ba2f1e;">
                      ₹${p.mandiPriceComp.mandiFarmerRate}/kg
                      <div style="font-size:0.7rem; color:#7d8483;">After dalal cuts</div>
                    </td>
                    <td class="highlight-col" style="font-weight:700; color:#00665e;">
                      ₹${p.mandiPriceComp.kisanConnectFarmerPayout}/kg
                      <span style="font-size:0.7rem; background:#e4fbf7; color:#00665e; padding:2px 6px; border-radius:4px; margin-left:4px;">
                        +${p.mandiPriceComp.farmerGainPercent}%
                      </span>
                    </td>
                    <td style="color:#ba2f1e; text-decoration:line-through;">
                      ₹${p.mandiPriceComp.supermarketRetailRate}/kg
                    </td>
                    <td class="highlight-col" style="font-weight:700; color:#00665e;">
                      ₹${p.mandiPriceComp.kisanConnectRetailPrice}/kg
                      <span style="font-size:0.7rem; background:#ffd3c0; color:#ba2f1e; padding:2px 6px; border-radius:4px; margin-left:4px;">
                        -${p.mandiPriceComp.buyerSavingsPercent}%
                      </span>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <!-- The Economic Pie Chart Breakdown -->
          <div class="grid grid-cols-2 md:grid-cols-1 gap-6" style="margin-top:4rem;">
            <div style="background:#ffffff; border:1px solid #d6e0df; border-radius:1.5rem; padding:2.5rem;">
              <h3 style="font-size:1.35rem; font-weight:700; color:#ba2f1e; margin-bottom:1rem; display:flex; align-items:center; gap:8px;">
                ${IconXCircle(20)}
                <span>The Traditional APMC Mandi System</span>
              </h3>
              <p class="body-sm" style="margin-bottom:1.5rem;">
                In the old mandi structure, up to 75% of the customer's money is consumed by commission agents, multiple logistics hops, spoilage, and retail markups:
              </p>
              <div style="display:flex; flex-direction:column; gap:0.75rem;">
                <div>
                  <div class="flex justify-between" style="font-size:0.85rem; font-weight:700;">
                    <span>Farmer Realization:</span>
                    <span style="color:#ba2f1e;">Barely 18% - 22%</span>
                  </div>
                  <div style="height:8px; background:#f0f4f4; border-radius:4px; overflow:hidden; margin-top:4px;">
                    <div style="width:20%; height:100%; background:#ba2f1e;"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between" style="font-size:0.85rem; font-weight:700;">
                    <span>Middlemen, Dalals & Retail Markups:</span>
                    <span style="color:#ba2f1e;">60% - 65%</span>
                  </div>
                  <div style="height:8px; background:#f0f4f4; border-radius:4px; overflow:hidden; margin-top:4px;">
                    <div style="width:62%; height:100%; background:#e14f00;"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between" style="font-size:0.85rem; font-weight:700;">
                    <span>Packaging & Waste/Dumping:</span>
                    <span>15% - 20%</span>
                  </div>
                  <div style="height:8px; background:#f0f4f4; border-radius:4px; overflow:hidden; margin-top:4px;">
                    <div style="width:18%; height:100%; background:#7d8483;"></div>
                  </div>
                </div>
              </div>
            </div>

            <div style="background:#ffffff; border:2px solid #7fcbc2; border-radius:1.5rem; padding:2.5rem;">
              <h3 style="font-size:1.35rem; font-weight:700; color:#004c46; margin-bottom:1rem; display:flex; align-items:center; gap:8px;">
                ${IconCheckCircle(20)}
                <span>The KISAN Direct Marketplace</span>
              </h3>
              <p class="body-sm" style="margin-bottom:1.5rem;">
                By removing every broker and commission dalal, money flows where it belongs &mdash; into kisan accounts and buyer savings:
              </p>
              <div style="display:flex; flex-direction:column; gap:0.75rem;">
                <div>
                  <div class="flex justify-between" style="font-size:0.85rem; font-weight:700;">
                    <span>Direct to Kisan / FPO Bank Account:</span>
                    <span style="color:#00665e;">65% - 82% Direct</span>
                  </div>
                  <div style="height:8px; background:#f0f4f4; border-radius:4px; overflow:hidden; margin-top:4px;">
                    <div style="width:72%; height:100%; background:#00665e;"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between" style="font-size:0.85rem; font-weight:700;">
                    <span>Farm-to-Door Courier Freight:</span>
                    <span>18% (Fast & Temp Controlled)</span>
                  </div>
                  <div style="height:8px; background:#f0f4f4; border-radius:4px; overflow:hidden; margin-top:4px;">
                    <div style="width:18%; height:100%; background:#27749a;"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between" style="font-size:0.85rem; font-weight:700;">
                    <span>KISAN Platform Tech Fee:</span>
                    <span style="color:#004c46;">Only 8% (Zero hidden fees)</span>
                  </div>
                  <div style="height:8px; background:#f0f4f4; border-radius:4px; overflow:hidden; margin-top:4px;">
                    <div style="width:8%; height:100%; background:#7fcbc2;"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}
