import { store } from '../state/store.js';
import { fpos } from '../data/fpos.js';
import {
  IconWheat,
  IconMapPin,
  IconCheck,
  IconTrendingUp,
  IconArrowRight
} from '../components/icons.js';

export function renderFpoNetworkPage() {
  return `
    <div class="fpo-page">
      <!-- Hero -->
      <section class="membership-hero" style="background: linear-gradient(135deg, #004c46 0%, #00665e 60%, #1f5f5b 100%);">
        <div class="container" style="max-width:860px;">
          <span style="display:inline-flex; align-items:center; gap:6px; font-size:0.85rem; font-weight:700; background:rgba(255,255,255,0.15); color:#ffffff; padding:0.35rem 1rem; border-radius:999px; margin-bottom:1rem;">
            ${IconWheat(14)}
            <span>Verified FPO Federation</span>
          </span>
          <h1 class="heading-display" style="color:#ffffff; margin-bottom:1rem; font-size:2.85rem;">
            India's Farmer Producer Organizations (FPOs)
          </h1>
          <p class="body-lg" style="color:#e4fbf7; margin-bottom:2rem;">
            Discover verified farmer producer companies and grassroots agrarian collectives uniting 14,000+ smallholder family farms. Modern packhouses, zero carbide, standard grading, and 100% direct mandi-bypass trade.
          </p>
          <div style="display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
            <a href="#/direct-from-farmer" class="c-btn c-btn-primary c-btn-lg" style="display:inline-flex; align-items:center; gap:8px; font-weight:700;">
              <span>Explore FPO Produce</span>
              ${IconArrowRight(14)}
            </a>
            <a href="#/sell" class="c-btn c-btn-secondary c-btn-lg" style="font-weight:700;">
              Register Your FPO / Cooperative
            </a>
          </div>
        </div>
      </section>

      <!-- FPO Federation Stats -->
      <section style="background:#ffffff; padding:2.5rem 0; border-bottom:1px solid #eef2f2;">
        <div class="container">
          <div class="grid grid-cols-4 md:grid-cols-2 gap-4 text-center">
            <div>
              <div style="font-size:2.2rem; font-weight:900; color:#00665e;">14,270+</div>
              <div style="font-size:0.85rem; color:#535858; font-weight:600;">Associated Smallholder Kisans</div>
            </div>
            <div>
              <div style="font-size:2.2rem; font-weight:900; color:#00665e;">67,500+</div>
              <div style="font-size:0.85rem; color:#535858; font-weight:600;">Acres of Verified Farmland</div>
            </div>
            <div>
              <div style="font-size:2.2rem; font-weight:900; color:#00665e;">₹68 Crore+</div>
              <div style="font-size:0.85rem; color:#535858; font-weight:600;">Direct Farm Payout Realized</div>
            </div>
            <div>
              <div style="font-size:2.2rem; font-weight:900; color:#00665e;">0%</div>
              <div style="font-size:0.85rem; color:#535858; font-weight:600;">Mandi Dalal Commission</div>
            </div>
          </div>
        </div>
      </section>

      <!-- FPO Directory Cards -->
      <section style="padding: 5rem 0; background:#f7faf9;">
        <div class="container">
          <div class="section-header" style="text-align:center; max-width:700px; margin:0 auto 3.5rem auto;">
            <span class="badge badge-organic" style="margin-bottom:0.4rem; display:inline-block;">Grassroots Collectives</span>
            <h2 class="heading-xl">Verified FPO Partners Across India</h2>
            <p class="body-md">Every FPO is vetted for member equity, fair village payments, and chemical-free agricultural standards.</p>
          </div>

          <div style="display:flex; flex-direction:column; gap:2.5rem;">
            ${fpos.map(fpo => `
              <div style="background:#ffffff; border:1px solid #d6e0df; border-radius:1.5rem; overflow:hidden; box-shadow:0 8px 24px rgba(0,0,0,0.04);">
                <div class="grid grid-cols-3 md:grid-cols-1">
                  <!-- Col 1: Visual & Head kisan -->
                  <div style="position:relative; min-height:260px;">
                    <img src="${fpo.coverImage}" alt="${fpo.name}" style="width:100%; height:100%; object-fit:cover;">
                    <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%);"></div>
                    <div style="position:absolute; bottom:1.25rem; left:1.25rem; right:1.25rem; color:#ffffff;">
                      <div style="display:flex; align-items:center; gap:0.75rem;">
                        <img src="${fpo.avatar}" alt="${fpo.leadKisan}" style="width:48px; height:48px; border-radius:50%; border:2px solid #ffffff; object-fit:cover;">
                        <div>
                          <div style="font-size:0.75rem; color:#ffd3c0; font-weight:700;">Founding Leader</div>
                          <div style="font-size:0.95rem; font-weight:700;">${fpo.leadKisan}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Col 2: Info & Facilities -->
                  <div class="fpo-card-col-info">
                    <div>
                      <div class="flex justify-between items-start flex-wrap gap-2" style="margin-bottom:0.75rem;">
                        <div>
                          <span class="badge badge-organic" style="display:inline-flex; align-items:center; gap:4px; margin-bottom:0.35rem;">
                            ${IconMapPin(12)}
                            <span>${fpo.district}, ${fpo.state} &middot; Est. ${fpo.establishedYear}</span>
                          </span>
                          <h3 style="font-size:1.45rem; font-weight:800; color:#1a1c1c;">${fpo.name}</h3>
                        </div>
                        <div style="text-align:right;">
                          <div style="font-size:1.35rem; font-weight:900; color:#00665e;">${fpo.memberFarmersCount.toLocaleString('en-IN')}+</div>
                          <div style="font-size:0.75rem; color:#535858; font-weight:600;">Member Kisan Families</div>
                        </div>
                      </div>

                      <p class="body-sm" style="line-height:1.6; margin-bottom:1.25rem; color:#2a2d2c;">
                        ${fpo.description}
                      </p>

                      <!-- Key Crops -->
                      <div style="margin-bottom:1rem;">
                        <span style="font-size:0.8rem; font-weight:700; color:#535858; margin-right:0.5rem;">Crops & Specialities:</span>
                        ${fpo.cropsSpeciality.map(crop => `
                          <span style="display:inline-block; font-size:0.75rem; font-weight:600; padding:0.2rem 0.5rem; background:#f0f7f6; color:#004c46; border-radius:4px; margin:2px;">
                            ${crop}
                          </span>
                        `).join('')}
                      </div>

                      <!-- Infrastructure & Facilities -->
                      <div style="margin-bottom:1.25rem;">
                        <span style="font-size:0.8rem; font-weight:700; color:#535858; margin-right:0.5rem;">Aggregated Infrastructure:</span>
                        <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-top:0.3rem;">
                          ${fpo.facilities.map(fac => `
                            <span style="display:inline-flex; align-items:center; gap:0.3rem; font-size:0.75rem; color:#1a1c1c; background:#ffffff; border:1px solid #d6e0df; padding:0.25rem 0.6rem; border-radius:999px;">
                              ${IconCheck(12)}
                              <span>${fac}</span>
                            </span>
                          `).join('')}
                        </div>
                      </div>

                      <!-- Impact callout -->
                      <div style="background:#eef7f5; border-left:3px solid #00665e; padding:0.6rem 0.85rem; font-size:0.8rem; color:#004c46; margin-bottom:1.25rem; display:flex; align-items:center; gap:6px;">
                        ${IconTrendingUp(14)}
                        <span><strong>Mandi Bypass Impact:</strong> ${fpo.mandiBypassImpact}</span>
                      </div>
                    </div>

                    <!-- Actions -->
                    <div style="display:flex; gap:1rem; flex-wrap:wrap; border-top:1px solid #f0f4f4; padding-top:1rem;">
                      <a href="#/direct-from-farmer?state=${fpo.state === 'Maharashtra' ? 'MH' : fpo.state === 'Gujarat' ? 'GJ' : fpo.state === 'Himachal Pradesh' ? 'HP' : fpo.state === 'Rajasthan' ? 'RJ' : 'KL'}" class="c-btn c-btn-primary c-btn-sm" style="display:inline-flex; align-items:center; gap:5px; font-weight:700;">
                        <span>Browse ${fpo.shortName} Harvests</span>
                        ${IconArrowRight(13)}
                      </a>
                      <a href="#/bulk" class="c-btn c-btn-outline c-btn-sm" style="font-weight:700;">
                        Source in Bulk from this FPO
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    </div>
  `;
}
