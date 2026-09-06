import { store } from '../state/store.js';
import { LANGUAGES, getTranslation } from '../i18n/translations.js';
import {
  IconTractor,
  IconBuilding,
  IconCheck,
  IconCheckCircle,
  IconTruck,
  IconTrendingUp,
  IconShield,
  IconCoins,
  IconClock,
  IconNavigation,
  IconPhone,
  IconCreditCard,
  IconScale,
  IconRotateCcw,
  IconPlay,
  IconChevronRight,
  IconArrowRight,
  IconSparkles,
  IconLeaf,
  IconShoppingBag,
  IconVolume2
} from '../components/icons.js';

export function renderDemoWorkflowPage() {
  const state = store.getState();
  const langCode = state.language || 'en';
  const t = getTranslation(langCode);
  const step = state.demoStep || 1;
  const role = state.demoRole || 'farmer';
  const farmer = state.demoFarmer;
  const product = state.demoProduct;
  const negotiation = state.demoNegotiation;
  const logistics = state.demoLogistics;
  const trackingStage = state.demoTrackingStage || 4;

  return `
    <div class="demo-workflow-wrapper" style="background:#f8faf9; min-height:90vh; padding:2rem 0 5rem;">
      <div class="container" style="max-width:1160px; margin:0 auto; padding:0 1.25rem;">
        


        <!-- 7-Step Navigation Bar -->
        <div class="demo-stepper-container" style="background:#ffffff; border:1px solid #e2ecea; border-radius:16px; padding:1rem 1.25rem; margin-bottom:2rem; box-shadow:0 4px 16px rgba(0,0,0,0.03); overflow-x:auto;">
          <div class="demo-stepper-bar" style="display:flex; align-items:center; justify-content:space-between; min-width:820px; gap:0.5rem;">
            
            ${renderStepItem(1, t.step1Title, t.step1Desc, step)}
            ${renderStepDivider(1, step)}
            ${renderStepItem(2, t.step2Title, t.step2Desc, step)}
            ${renderStepDivider(2, step)}
            ${renderStepItem(3, t.step3Title, t.step3Desc, step)}
            ${renderStepDivider(3, step)}
            ${renderStepItem(4, t.step4Title, t.step4Desc, step)}
            ${renderStepDivider(4, step)}
            ${renderStepItem(5, t.step5Title, t.step5Desc, step)}
            ${renderStepDivider(5, step)}
            ${renderStepItem(6, t.step6Title, t.step6Desc, step)}
            ${renderStepDivider(6, step)}
            ${renderStepItem(7, t.step7Title, t.step7Desc, step)}

          </div>
        </div>

        <!-- Dynamic Step Content Box -->
        <div class="demo-step-content-box" style="background:#ffffff; border:1px solid #e2ecea; border-radius:20px; padding:2rem 2.25rem; box-shadow:0 8px 24px rgba(0,0,0,0.04);">
          ${renderCurrentStepContent(step, role, farmer, product, negotiation, logistics, trackingStage, t, langCode)}
        </div>

      </div>
    </div>
  `;
}

function renderStepItem(stepNum, shortTitle, desc, currentStep) {
  const isCompleted = stepNum < currentStep;
  const isActive = stepNum === currentStep;
  
  let bg = '#f1f5f4';
  let color = '#718280';
  let border = '1px solid #d5e2e0';
  
  if (isActive) {
    bg = '#00665e';
    color = '#ffffff';
    border = '1px solid #00665e';
  } else if (isCompleted) {
    bg = '#eaf5f3';
    color = '#00665e';
    border = '1px solid #9ce9df';
  }

  return `
    <button class="demo-step-jump-btn" data-step="${stepNum}" id="stepper-step-${stepNum}" style="background:none; border:none; cursor:pointer; padding:4px 8px; text-align:left; display:flex; align-items:center; gap:10px; border-radius:10px; transition:all 0.2s;">
      <div style="width:34px; height:34px; border-radius:50%; background:${bg}; color:${color}; border:${border}; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:0.85rem; flex-shrink:0;">
        ${isCompleted ? IconCheck(16) : stepNum}
      </div>
      <div>
        <div style="font-size:0.8rem; font-weight:700; color:${isActive ? '#00665e' : isCompleted ? '#1a2e2b' : '#718280'}; line-height:1.2;">
          ${shortTitle}
        </div>
        <div style="font-size:0.7rem; color:#889694; white-space:nowrap;">
          ${desc}
        </div>
      </div>
    </button>
  `;
}

function renderStepDivider(stepNum, currentStep) {
  const isDone = stepNum < currentStep;
  return `
    <div style="flex:1; height:2px; background:${isDone ? '#00665e' : '#e2ecea'}; min-width:16px;"></div>
  `;
}

function renderCurrentStepContent(step, role, farmer, product, negotiation, logistics, trackingStage, t, langCode) {
  switch (step) {
    case 1:
      return renderStep1RoleSelection(role, t);
    case 2:
      return renderStep2FarmerProfile(farmer, t);
    case 3:
      return renderStep3ProduceAndForecast(product, t, langCode);
    case 4:
      return renderStep4MarketNegotiation(product, negotiation, t);
    case 5:
      return renderStep5SmartLogistics(product, logistics, t);
    case 6:
      return renderStep6ProfitImpact(negotiation, logistics, t);
    case 7:
      return renderStep7LiveTracking(product, logistics, trackingStage, t, langCode);
    default:
      return renderStep1RoleSelection(role, t);
  }
}

// -------------------------------------------------------------
// STEP 1: ROLE SELECTION
// -------------------------------------------------------------
function renderStep1RoleSelection(role, t) {
  return `
    <div style="max-width:820px; margin:0 auto; text-align:center;">
      <div style="display:inline-flex; align-items:center; gap:6px; color:#00665e; background:#eaf5f3; padding:4px 12px; border-radius:999px; font-size:0.8rem; font-weight:700; margin-bottom:0.75rem;">
        <span>${t.step1Tag}</span>
      </div>
      <h2 style="font-size:2rem; font-weight:800; color:#1a2e2b; margin-bottom:0.5rem;">
        ${t.step1Heading}
      </h2>
      <p style="font-size:1rem; color:#5c6c69; margin-bottom:2.25rem;">
        ${t.step1Subheading}
      </p>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1.5rem; text-align:left; margin-bottom:2rem;">
        
        <!-- Farmer Card -->
        <div id="role-select-farmer" class="demo-role-card ${role === 'farmer' ? 'active-role' : ''}" style="border:2px solid ${role === 'farmer' ? '#00665e' : '#e2ecea'}; background:${role === 'farmer' ? '#f4faf8' : '#ffffff'}; border-radius:16px; padding:1.75rem; cursor:pointer; position:relative; transition:all 0.2s; box-shadow:${role === 'farmer' ? '0 8px 24px rgba(0,102,94,0.12)' : 'none'};">
          <div style="display:inline-block; background:#00665e; color:#ffffff; font-size:0.7rem; font-weight:800; padding:3px 10px; border-radius:999px; margin-bottom:1rem; text-transform:uppercase; letter-spacing:0.5px;">
            ${t.farmerRoleBadge}
          </div>
          <div style="display:flex; align-items:center; gap:12px; margin-bottom:1rem;">
            <div style="width:48px; height:48px; border-radius:12px; background:#00665e; color:#ffffff; display:flex; align-items:center; justify-content:center;">
              ${IconTractor(24)}
            </div>
            <div>
              <h3 style="font-size:1.25rem; font-weight:800; color:#1a2e2b; margin:0;">${t.farmerRoleTitle}</h3>
              <div style="font-size:0.8rem; color:#00665e; font-weight:700;">${t.farmerRoleSubtitle}</div>
            </div>
          </div>
          <p style="font-size:0.9rem; color:#5c6c69; line-height:1.5; margin-bottom:1.25rem;">
            ${t.farmerRoleDesc}
          </p>
          <ul style="list-style:none; padding:0; margin:0 0 1.5rem; font-size:0.85rem; color:#2c3e3b; display:flex; flex-direction:column; gap:8px;">
            <li style="display:flex; align-items:center; gap:8px;">
              <span style="color:#00665e;">${IconCheckCircle(16)}</span> ${t.farmerBenefit1}
            </li>
            <li style="display:flex; align-items:center; gap:8px;">
              <span style="color:#00665e;">${IconCheckCircle(16)}</span> ${t.farmerBenefit2}
            </li>
            <li style="display:flex; align-items:center; gap:8px;">
              <span style="color:#00665e;">${IconCheckCircle(16)}</span> ${t.farmerBenefit3}
            </li>
          </ul>
          <button id="btn-continue-farmer" type="button" class="c-btn c-btn-primary c-btn-block" style="font-weight:700; padding:0.75rem; border-radius:10px;">
            ${t.btnContinueFarmer}
          </button>
        </div>

        <!-- Buyer Card -->
        <div id="role-select-buyer" class="demo-role-card ${role === 'buyer' ? 'active-role' : ''}" style="border:2px solid ${role === 'buyer' ? '#00665e' : '#e2ecea'}; background:${role === 'buyer' ? '#f4faf8' : '#ffffff'}; border-radius:16px; padding:1.75rem; cursor:pointer; position:relative; transition:all 0.2s; box-shadow:${role === 'buyer' ? '0 8px 24px rgba(0,102,94,0.12)' : 'none'};">
          <div style="display:inline-block; background:#64748b; color:#ffffff; font-size:0.7rem; font-weight:800; padding:3px 10px; border-radius:999px; margin-bottom:1rem; text-transform:uppercase; letter-spacing:0.5px;">
            ${t.buyerRoleBadge}
          </div>
          <div style="display:flex; align-items:center; gap:12px; margin-bottom:1rem;">
            <div style="width:48px; height:48px; border-radius:12px; background:#eaf5f3; color:#00665e; display:flex; align-items:center; justify-content:center;">
              ${IconBuilding(24)}
            </div>
            <div>
              <h3 style="font-size:1.25rem; font-weight:800; color:#1a2e2b; margin:0;">${t.buyerRoleTitle}</h3>
              <div style="font-size:0.8rem; color:#64748b; font-weight:700;">${t.buyerRoleSubtitle}</div>
            </div>
          </div>
          <p style="font-size:0.9rem; color:#5c6c69; line-height:1.5; margin-bottom:1.25rem;">
            ${t.buyerRoleDesc}
          </p>
          <ul style="list-style:none; padding:0; margin:0 0 1.5rem; font-size:0.85rem; color:#2c3e3b; display:flex; flex-direction:column; gap:8px;">
            <li style="display:flex; align-items:center; gap:8px;">
              <span style="color:#00665e;">${IconCheckCircle(16)}</span> ${t.buyerBenefit1}
            </li>
            <li style="display:flex; align-items:center; gap:8px;">
              <span style="color:#00665e;">${IconCheckCircle(16)}</span> ${t.buyerBenefit2}
            </li>
            <li style="display:flex; align-items:center; gap:8px;">
              <span style="color:#00665e;">${IconCheckCircle(16)}</span> ${t.buyerBenefit3}
            </li>
          </ul>
          <button id="btn-continue-buyer" type="button" class="c-btn c-btn-outline c-btn-block" style="font-weight:700; padding:0.75rem; border-radius:10px;">
            ${t.btnContinueBuyer}
          </button>
        </div>

      </div>

      <div style="font-size:0.85rem; color:#718280;">
        ${t.step1FooterNote}
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// STEP 2: FARMER IDENTITY & MOBILE ONBOARDING
// -------------------------------------------------------------
function renderStep2FarmerProfile(farmer, t) {
  return `
    <div style="max-width:720px; margin:0 auto;">
      <div style="text-align:center; margin-bottom:2rem;">
        <div style="display:inline-flex; align-items:center; gap:6px; color:#00665e; background:#eaf5f3; padding:4px 12px; border-radius:999px; font-size:0.8rem; font-weight:700; margin-bottom:0.75rem;">
          <span>${t.step2Tag}</span>
        </div>
        <h2 style="font-size:1.85rem; font-weight:800; color:#1a2e2b; margin-bottom:0.4rem;">
          ${t.step2Heading}
        </h2>
        <p style="font-size:0.95rem; color:#5c6c69; margin:0;">
          ${t.step2Subheading}
        </p>
      </div>

      <div style="background:#eaf5f3; border:1px solid #c2e2dd; border-radius:12px; padding:0.85rem 1.25rem; margin-bottom:1.75rem; display:flex; align-items:center; justify-content:space-between; gap:12px;">
        <div style="display:flex; align-items:center; gap:10px;">
          <span style="color:#00665e;">${IconShield(20)}</span>
          <div style="font-size:0.85rem; color:#1a2e2b;">
            ${t.step2Badge}
          </div>
        </div>
        <button id="demo-fill-farmer-btn" type="button" class="c-btn c-btn-sm" style="background:#00665e; color:#ffffff; font-size:0.75rem; padding:0.35rem 0.85rem; border-radius:999px; font-weight:700; white-space:nowrap; border:none; cursor:pointer;">
          ${t.btnAutoFillFarmer}
        </button>
      </div>

      <form id="demo-farmer-form" style="display:flex; flex-direction:column; gap:1.25rem;">
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.25rem;">
          <div>
            <label class="label-sm-default" style="display:block; margin-bottom:0.4rem; font-weight:700; color:#1a2e2b;">
              ${t.labelFarmerName}
            </label>
            <input type="text" id="demo-farmer-name" required value="${farmer.name}" class="c-input" placeholder="Rajesh Patil" style="width:100%;">
          </div>
          <div>
            <label class="label-sm-default" style="display:block; margin-bottom:0.4rem; font-weight:700; color:#1a2e2b;">
              ${t.labelFarmerPhone}
            </label>
            <div style="position:relative;">
              <input type="tel" id="demo-farmer-phone" required value="${farmer.phone}" class="c-input" placeholder="+91 98230 45120" style="width:100%; padding-right:85px;">
              <span style="position:absolute; right:10px; top:50%; transform:translateY(-50%); background:#00665e; color:#ffffff; font-size:0.68rem; font-weight:700; padding:2px 7px; border-radius:4px;">
                ${t.badgeVerified}
              </span>
            </div>
          </div>
        </div>

        <div>
          <label class="label-sm-default" style="display:block; margin-bottom:0.4rem; font-weight:700; color:#1a2e2b;">
            ${t.labelLocation}
          </label>
          <div style="position:relative;">
            <input type="text" id="demo-farmer-location" required value="${farmer.location}" class="c-input" placeholder="Pimpalgaon Baswant, Nashik, Maharashtra" style="width:100%;">
          </div>
          <div style="font-size:0.75rem; color:#718280; margin-top:0.25rem;">
            ${t.locationHint}
          </div>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.25rem;">
          <div>
            <label class="label-sm-default" style="display:block; margin-bottom:0.4rem; font-weight:700; color:#1a2e2b;">
              ${t.labelFpo}
            </label>
            <input type="text" id="demo-farmer-fpo" value="${farmer.fpoName}" class="c-input" placeholder="Nashik Kisan Samruddhi FPO" style="width:100%;">
          </div>
          <div>
            <label class="label-sm-default" style="display:block; margin-bottom:0.4rem; font-weight:700; color:#1a2e2b;">
              ${t.labelCrops}
            </label>
            <input type="text" id="demo-farmer-crops" value="${farmer.crops}" class="c-input" placeholder="Hybrid Tomatoes, Lasalgaon Onions" style="width:100%;">
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:1.5rem; pt:1rem; border-top:1px solid #f0f4f4;">
          <button type="button" id="demo-step2-back-btn" class="c-btn c-btn-outline" style="font-weight:600;">
            ${t.btnBackToRole}
          </button>
          <button id="demo-step2-submit-btn" type="submit" class="c-btn c-btn-primary" style="font-weight:700; padding:0.75rem 1.75rem;">
            ${t.btnSaveProfile}
          </button>
        </div>
      </form>
    </div>
  `;
}

// -------------------------------------------------------------
// STEP 3: ENTER PRODUCTION / UPLOAD PRODUCE & AI PRICE FORECAST
// -------------------------------------------------------------
function renderStep3ProduceAndForecast(product, t, langCode) {
  return `
    <div>
      <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:flex-end; margin-bottom:1.75rem; gap:1rem; border-bottom:1px solid #eef3f2; padding-bottom:1.25rem;">
        <div>
          <div style="display:inline-flex; align-items:center; gap:6px; color:#00665e; background:#eaf5f3; padding:4px 12px; border-radius:999px; font-size:0.8rem; font-weight:700; margin-bottom:0.5rem;">
            <span>${t.step3Tag}</span>
          </div>
          <h2 style="font-size:1.85rem; font-weight:800; color:#1a2e2b; margin:0;">
            ${t.step3Heading}
          </h2>
          <p style="font-size:0.95rem; color:#5c6c69; margin:0.3rem 0 0;">
            ${t.step3Subheading}
          </p>
        </div>
        <button id="demo-fill-produce-btn" type="button" class="c-btn c-btn-sm" style="background:#004c46; color:#ffffff; font-weight:700; font-size:0.8rem; border-radius:8px; border:none; padding:0.5rem 1rem; display:inline-flex; align-items:center; gap:6px; cursor:pointer;">
          ${IconSparkles(14)}
          <span>${t.btnLoadTomatoPreset}</span>
        </button>
      </div>

      <div style="display:grid; grid-template-columns:1.1fr 1fr; gap:2rem; align-items:start;">
        
        <!-- Left Column: Produce Upload Form -->
        <div style="background:#fcfdfd; border:1px solid #e2ecea; border-radius:16px; padding:1.75rem;">
          <h3 style="font-size:1.15rem; font-weight:800; color:#1a2e2b; margin-bottom:1.25rem; display:flex; align-items:center; gap:8px;">
            <span style="color:#00665e;">${IconLeaf(18)}</span>
            <span>${t.produceFormTitle}</span>
          </h3>

          <form id="demo-produce-form" style="display:flex; flex-direction:column; gap:1.1rem;">
            <div>
              <label class="label-sm-default" style="display:block; margin-bottom:0.35rem; font-weight:700; color:#1a2e2b;">
                ${t.labelProduceTitle}
              </label>
              <input type="text" id="demo-prod-title" required value="${product.title}" class="c-input" style="width:100%;">
            </div>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
              <div>
                <label class="label-sm-default" style="display:block; margin-bottom:0.35rem; font-weight:700; color:#1a2e2b;">
                  ${t.labelVolumeKg}
                </label>
                <div style="position:relative;">
                  <input type="number" id="demo-prod-volume" required value="${product.volume}" min="50" step="50" class="c-input" style="width:100%; font-weight:700;">
                  <span style="position:absolute; right:12px; top:50%; transform:translateY(-50%); font-size:0.8rem; color:#718280; font-weight:700;">
                    KG
                  </span>
                </div>
                <div style="font-size:0.72rem; color:#718280; margin-top:0.2rem;">
                  ${t.volumeHint}
                </div>
              </div>

              <div>
                <label class="label-sm-default" style="display:block; margin-bottom:0.35rem; font-weight:700; color:#1a2e2b;">
                  ${t.labelAskingPrice}
                </label>
                <div style="position:relative;">
                  <input type="number" id="demo-prod-price" required value="${product.askingPrice}" min="5" step="1" class="c-input" style="width:100%; font-weight:700; color:#00665e;">
                  <span style="position:absolute; right:12px; top:50%; transform:translateY(-50%); font-size:0.8rem; color:#00665e; font-weight:700;">
                    ₹ / KG
                  </span>
                </div>
                <div style="font-size:0.72rem; color:#00665e; font-weight:600; margin-top:0.2rem;">
                  ${t.totalLotValue} ₹${(product.volume * product.askingPrice).toLocaleString('en-IN')}
                </div>
              </div>
            </div>

            <div>
              <label class="label-sm-default" style="display:block; margin-bottom:0.35rem; font-weight:700; color:#1a2e2b;">
                ${t.labelImage}
              </label>
              <div style="display:flex; gap:12px; align-items:center;">
                <img src="${product.image}" id="demo-prod-preview-img" alt="Crop Preview" style="width:72px; height:72px; object-fit:cover; border-radius:10px; border:1px solid #d5e2e0;">
                <div style="flex:1;">
                  <select id="demo-prod-image-select" class="c-select" style="width:100%; font-size:0.85rem;">
                    <option value="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&auto=format&fit=crop&q=80" selected>Fresh Desi Hybrid Tomatoes (Red Firm Crates)</option>
                    <option value="https://images.unsplash.com/photo-1508747703725-719777637510?w=800&auto=format&fit=crop&q=80">Lasalgaon Pink Harvest Onions</option>
                    <option value="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&auto=format&fit=crop&q=80">Golden Sharbati Wheat Quintal Sacks</option>
                    <option value="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&auto=format&fit=crop&q=80">Dehradun Aged Basmati Rice</option>
                  </select>
                  <div style="font-size:0.72rem; color:#718280; margin-top:0.25rem;">
                    ${t.imageHint}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label class="label-sm-default" style="display:block; margin-bottom:0.35rem; font-weight:700; color:#1a2e2b;">
                ${t.labelDescription}
              </label>
              <textarea id="demo-prod-desc" rows="3" class="c-input" style="width:100%; font-size:0.85rem; line-height:1.4;">${product.description}</textarea>
            </div>

            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.5rem;">
              <button type="button" id="demo-step3-back-btn" class="c-btn c-btn-outline c-btn-sm" style="font-weight:600;">
                ${t.btnBack}
              </button>
              <button id="demo-step3-submit-btn" type="submit" class="c-btn c-btn-primary" style="font-weight:700; padding:0.7rem 1.5rem;">
                ${t.btnPublishProduce}
              </button>
            </div>
          </form>
        </div>

        <!-- Right Column: AI Mandi Price Forecasting Engine -->
        <div style="background:linear-gradient(180deg, #f3faf8 0%, #ffffff 100%); border:2px solid #b7ded8; border-radius:18px; padding:1.75rem; box-shadow:0 8px 24px rgba(0,102,94,0.06);">
          
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1rem;">
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="background:#00665e; color:#ffffff; width:30px; height:30px; border-radius:8px; display:flex; align-items:center; justify-content:center;">
                ${IconTrendingUp(16)}
              </span>
              <div>
                <h3 style="font-size:1.05rem; font-weight:800; color:#1a2e2b; margin:0;">${t.aiIntelligenceTitle}</h3>
                <div style="font-size:0.72rem; color:#00665e; font-weight:700;">${t.aiTrainedBadge}</div>
              </div>
            </div>
            <span style="background:#00665e; color:#9ce9df; font-size:0.68rem; font-weight:800; padding:2px 8px; border-radius:6px; letter-spacing:0.5px;">
              ${t.aiActiveModel}
            </span>
          </div>

          <p style="font-size:0.85rem; color:#4a5a57; line-height:1.45; margin-bottom:1.25rem;">
            ${t.aiIntelligenceDesc}
          </p>

          <!-- Price Bar Comparison Chart -->
          <div style="background:#ffffff; border:1px solid #dbeae8; border-radius:12px; padding:1.25rem; margin-bottom:1.25rem;">
            <div style="font-size:0.75rem; font-weight:700; color:#718280; text-transform:uppercase; margin-bottom:1rem; letter-spacing:0.5px;">
              ${t.chartTitle}
            </div>

            <!-- APMC Today -->
            <div style="margin-bottom:0.85rem;">
              <div style="display:flex; justify-content:space-between; font-size:0.8rem; margin-bottom:0.25rem;">
                <span style="color:#64748b; font-weight:600;">${t.chartApmcToday}</span>
                <span style="color:#e11d48; font-weight:800;">₹${product.mandiRateToday} / kg</span>
              </div>
              <div style="height:12px; background:#f1f5f9; border-radius:999px; overflow:hidden;">
                <div style="height:100%; width:${(product.mandiRateToday / 65) * 100}%; background:#f43f5e; border-radius:999px;"></div>
              </div>
            </div>

            <!-- Kisan Connect Direct Today -->
            <div style="margin-bottom:0.85rem;">
              <div style="display:flex; justify-content:space-between; font-size:0.8rem; margin-bottom:0.25rem;">
                <span style="color:#004c46; font-weight:700;">${t.chartKcToday}</span>
                <span style="color:#00665e; font-weight:800;">₹${product.askingPrice} / kg (+87.5%)</span>
              </div>
              <div style="height:12px; background:#eaf5f3; border-radius:999px; overflow:hidden;">
                <div style="height:100%; width:${(product.askingPrice / 65) * 100}%; background:#00665e; border-radius:999px;"></div>
              </div>
            </div>

            <!-- 7-Day Forecast -->
            <div style="margin-bottom:0.85rem;">
              <div style="display:flex; justify-content:space-between; font-size:0.8rem; margin-bottom:0.25rem;">
                <span style="color:#0369a1; font-weight:700;">${t.chartForecast7}</span>
                <span style="color:#0284c7; font-weight:800;">₹${product.forecast7Days} / kg (+15.5%)</span>
              </div>
              <div style="height:12px; background:#e0f2fe; border-radius:999px; overflow:hidden;">
                <div style="height:100%; width:${(product.forecast7Days / 65) * 100}%; background:#0284c7; border-radius:999px;"></div>
              </div>
            </div>

            <!-- 14-Day Forecast -->
            <div>
              <div style="display:flex; justify-content:space-between; font-size:0.8rem; margin-bottom:0.25rem;">
                <span style="color:#15803d; font-weight:700;">${t.chartForecast14}</span>
                <span style="color:#16a34a; font-weight:800;">₹${product.forecast14Days} / kg (+28.8%)</span>
              </div>
              <div style="height:12px; background:#dcfce7; border-radius:999px; overflow:hidden;">
                <div style="height:100%; width:${(product.forecast14Days / 65) * 100}%; background:#16a34a; border-radius:999px;"></div>
              </div>
            </div>

          </div>

          <!-- AI Recommendation Alert Box with Rural Audio Guidance Button -->
          <div style="background:#ffffff; border:1px solid #9ce9df; border-left:4px solid #00665e; border-radius:12px; padding:1.15rem; margin-bottom:1rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
              <div style="display:flex; align-items:center; gap:6px; font-weight:800; font-size:0.85rem; color:#004c46;">
                ${IconSparkles(15)}
                <span>${t.aiAdviceTitle}</span>
              </div>
              <!-- Voice Guidance Button for Non-Literate Farmers -->
              <button id="demo-voice-advice-btn" type="button" class="voice-audio-btn" title="Audio Guidance for Rural Farmers" style="background:#eaf5f3; color:#00665e; border:1px solid #9ce9df; border-radius:999px; padding:3px 10px; font-size:0.75rem; font-weight:800; cursor:pointer; display:inline-flex; align-items:center; gap:5px; transition:all 0.2s;">
                <span style="display:flex; align-items:center;">${IconVolume2(13)}</span>
                <span id="demo-voice-btn-text">${t.btnListenVoice}</span>
              </button>
            </div>
            
            <p id="demo-advice-text-content" style="font-size:0.84rem; color:#2c3e3b; margin:0 0 0.5rem; line-height:1.45;">
              ${t.aiAdviceText}
            </p>

            <div style="display:flex; align-items:center; gap:6px; font-size:0.72rem; color:#00665e; background:#f4faf8; padding:4px 8px; border-radius:6px;">
              <span>${IconVolume2(11)}</span>
              <span><strong>Accessibility Note:</strong> Uneducated farmers can tap the speaker button to hear AI advice read aloud in their mother tongue.</span>
            </div>
          </div>

          <div style="background:#eaf5f3; border-radius:8px; padding:0.65rem 0.85rem; font-size:0.78rem; color:#004c46; display:flex; align-items:center; justify-content:space-between;">
            <span>${t.aiExtraProfitLabel}</span>
            <strong style="font-size:0.95rem; color:#00665e;">+₹3,500 to +₹6,500</strong>
          </div>

        </div>

      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// STEP 4: MARKETPLACE LISTING & LIVE BUYER OFFER NEGOTIATION
// -------------------------------------------------------------
function renderStep4MarketNegotiation(product, negotiation, t) {
  const isAgreed = negotiation.status === 'agreed';
  const isCountering = negotiation.status === 'countering';
  const isRejected = negotiation.status === 'rejected';
  const counterVal = negotiation.farmerCounterPrice || 43;
  const agreedVal = negotiation.agreedPrice || 43;
  const agreedTotal = negotiation.totalAgreedAmount || (product.volume * agreedVal);

  return `
    <div>
      <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:flex-end; margin-bottom:1.75rem; gap:1rem; border-bottom:1px solid #eef3f2; padding-bottom:1.25rem;">
        <div>
          <div style="display:inline-flex; align-items:center; gap:6px; color:#00665e; background:#eaf5f3; padding:4px 12px; border-radius:999px; font-size:0.8rem; font-weight:700; margin-bottom:0.5rem;">
            <span>${t.step4Tag}</span>
          </div>
          <h2 style="font-size:1.85rem; font-weight:800; color:#1a2e2b; margin:0;">
            ${t.step4Heading}
          </h2>
          <p style="font-size:0.95rem; color:#5c6c69; margin:0.3rem 0 0;">
            ${t.step4Subheading}
          </p>
        </div>
        <div style="background:#eaf5f3; border:1px solid #9ce9df; border-radius:8px; padding:0.4rem 0.85rem; font-size:0.8rem; color:#004c46; font-weight:700; display:flex; align-items:center; gap:6px;">
          <span style="display:flex; align-items:center; color:#00665e;">${IconCheckCircle(16)}</span>
          <span>${t.badgeMarketLive}</span>
        </div>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1.15fr; gap:2rem; align-items:start;">
        
        <!-- Left: How the Buyer Views the Listing on Kisan Connect -->
        <div style="background:#ffffff; border:1px solid #e2ecea; border-radius:16px; overflow:hidden; box-shadow:0 4px 16px rgba(0,0,0,0.04);">
          <div style="position:relative;">
            <img src="${product.image}" alt="${product.title}" style="width:100%; height:200px; object-fit:cover;">
            <div style="position:absolute; top:12px; left:12px; background:rgba(0,51,46,0.9); color:#ffffff; font-size:0.75rem; font-weight:700; padding:4px 10px; border-radius:6px;">
              ${t.lotBadge}
            </div>
            <div style="position:absolute; bottom:12px; right:12px; background:#ffffff; color:#00665e; font-size:0.85rem; font-weight:800; padding:4px 10px; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.15);">
              ${t.askingBadge}
            </div>
          </div>

          <div style="padding:1.25rem;">
            <div style="font-size:0.75rem; font-weight:700; color:#00665e; text-transform:uppercase; margin-bottom:0.25rem;">
              ${t.farmerDirectOrigin}
            </div>
            <h3 style="font-size:1.1rem; font-weight:800; color:#1a2e2b; margin-bottom:0.5rem; line-height:1.3;">
              ${product.title}
            </h3>
            <p style="font-size:0.82rem; color:#5c6c69; line-height:1.45; margin-bottom:1rem;">
              ${product.description}
            </p>

            <div style="background:#f8faf9; border-radius:10px; padding:0.85rem; display:flex; justify-content:space-between; align-items:center; font-size:0.82rem;">
              <div>
                <div style="color:#718280;">Lot Volume</div>
                <strong style="color:#1a2e2b; font-size:0.95rem;">500 kg (25 crates)</strong>
              </div>
              <div>
                <div style="color:#718280;">Mandi Rate</div>
                <span style="color:#e11d48; text-decoration:line-through;">₹${product.mandiRateToday}/kg</span>
              </div>
              <div>
                <div style="color:#718280;">Farmer In-Hand Goal</div>
                <strong style="color:#00665e; font-size:0.95rem;">₹${(product.volume * product.askingPrice).toLocaleString('en-IN')}</strong>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Interactive Negotiation Console -->
        <div style="background:#fcfdfd; border:2px solid #cce5e1; border-radius:18px; padding:1.75rem; box-shadow:0 8px 24px rgba(0,102,94,0.06);">
          
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.25rem; border-bottom:1px solid #eef3f2; padding-bottom:0.85rem;">
            <div>
              <div style="font-size:0.75rem; font-weight:700; color:#00665e; text-transform:uppercase;">
                ${t.buyerBoxTitle}
              </div>
              <h3 style="font-size:1.15rem; font-weight:800; color:#1a2e2b; margin:0.15rem 0 0;">
                ${negotiation.buyerName}
              </h3>
            </div>
            <span style="background:#eaf5f3; color:#00665e; font-size:0.72rem; font-weight:700; padding:3px 8px; border-radius:999px;">
              ${t.badgeGstVerified}
            </span>
          </div>

          <!-- Negotiation Message Thread -->
          <div id="demo-chat-thread" style="display:flex; flex-direction:column; gap:0.85rem; margin-bottom:1.5rem;">
            
            <!-- Message 1: Farmer Initial Asking Price -->
            <div style="align-self:flex-end; max-width:85%; background:#00665e; color:#ffffff; padding:0.85rem 1rem; border-radius:14px 14px 2px 14px; font-size:0.85rem; box-shadow:0 2px 8px rgba(0,102,94,0.2);">
              <div style="font-size:0.7rem; color:#9ce9df; font-weight:700; margin-bottom:2px;">Rajesh Patil (Farmer)</div>
              <div>Listed 500kg Grade-A Tomatoes @ <strong>₹${negotiation.farmerAskingPrice}/kg</strong> (Total: ₹${(product.volume * negotiation.farmerAskingPrice).toLocaleString('en-IN')}).</div>
            </div>

            <!-- Message 2: Buyer Initial Offer Message (Incoming Offer ₹41/kg) -->
            <div style="align-self:flex-start; max-width:88%; background:#f1f5f9; color:#1e293b; padding:0.85rem 1rem; border-radius:14px 14px 14px 2px; font-size:0.85rem; border:1px solid #e2e8f0; box-shadow:0 2px 6px rgba(0,0,0,0.03);">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                <span style="font-size:0.72rem; color:#64748b; font-weight:700;">Subhash Commercial Kitchens (Buyer)</span>
                <span style="background:#e0f2fe; color:#0369a1; font-size:0.68rem; font-weight:800; padding:1px 6px; border-radius:4px;">INCOMING OFFER</span>
              </div>
              <div style="line-height:1.45;">${t.buyerInitialMsg}</div>
              <div style="margin-top:6px; padding-top:6px; border-top:1px solid #e2e8f0; font-size:0.8rem; color:#0284c7; font-weight:800; display:flex; justify-content:space-between; align-items:center;">
                <span>Buyer Offer: ₹41/kg</span>
                <span>Total: ₹${(product.volume * 41).toLocaleString('en-IN')}</span>
              </div>
            </div>

            <!-- Message 3: Farmer Counter Message (Shown if countered or agreed at ₹43) -->
            ${isAgreed && agreedVal !== 41 ? `
              <div style="align-self:flex-end; max-width:85%; background:#004c46; color:#ffffff; padding:0.85rem 1rem; border-radius:14px 14px 2px 14px; font-size:0.85rem; box-shadow:0 2px 8px rgba(0,76,70,0.2);">
                <div style="font-size:0.7rem; color:#9ce9df; font-weight:700; margin-bottom:2px;">Rajesh Patil (Farmer)</div>
                <div>"These are Grade-A vine-ripened tomatoes, no storage rot. My counter is ₹${counterVal}/kg. Deal?"</div>
              </div>
            ` : ''}

            <!-- Message 4: Buyer Acceptance Message (Shown when agreed) -->
            ${isAgreed ? `
              <div style="align-self:flex-start; max-width:88%; background:#dcfce7; color:#166534; padding:0.85rem 1rem; border-radius:14px 14px 14px 2px; font-size:0.85rem; border:1px solid #bbf7d0; box-shadow:0 2px 8px rgba(22,101,52,0.1);">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:3px;">
                  <span style="font-size:0.72rem; color:#15803d; font-weight:700;">Subhash Commercial Kitchens (Buyer)</span>
                  <span style="background:#22c55e; color:#ffffff; font-size:0.68rem; font-weight:800; padding:1px 6px; border-radius:4px;">OFFER ACCEPTED</span>
                </div>
                <div style="line-height:1.45;">${agreedVal === 41 ? t.buyerAcceptDirectMsg : `"Agreed! ₹${agreedVal}/kg for 500kg is fair. We have locked ₹${agreedTotal.toLocaleString('en-IN')} in Kisan Connect Escrow."`}</div>
              </div>
            ` : ''}

          </div>

          <!-- Negotiation Action Console -->
          <div style="background:#ffffff; border:1px solid #d5e4e2; border-radius:14px; padding:1.25rem;">
            
            ${!isAgreed && !isCountering ? `
              <!-- Initial State: 3 Clickable Buttons for Farmer (Accept, Reject, Counter) -->
              <div>
                <div style="font-size:0.78rem; font-weight:700; color:#5c6c69; margin-bottom:0.75rem; text-transform:uppercase; letter-spacing:0.5px;">
                  ${t.farmerActionPrompt}
                </div>

                ${isRejected ? `
                  <div style="background:#fff1f2; border:1px solid #fecdd3; border-radius:8px; padding:8px 12px; font-size:0.78rem; color:#be123c; margin-bottom:0.85rem; display:flex; align-items:center; gap:6px;">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                    <span>${t.rejectedNotice}</span>
                  </div>
                ` : ''}

                <div style="display:grid; grid-template-columns:1fr 1fr 1.25fr; gap:10px;">
                  <button id="demo-action-accept-btn" type="button" class="c-btn" style="background:#00665e; color:#ffffff; font-weight:700; padding:0.75rem 0.5rem; border-radius:10px; border:none; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:6px; box-shadow:0 2px 6px rgba(0,102,94,0.2); transition:all 0.15s;">
                    ${IconCheckCircle(16)}
                    <span>${t.btnActionAccept}</span>
                  </button>
                  <button id="demo-action-reject-btn" type="button" class="c-btn" style="background:#fff1f2; color:#e11d48; border:1px solid #fecdd3; font-weight:700; padding:0.75rem 0.5rem; border-radius:10px; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:6px; transition:all 0.15s;">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    <span>${t.btnActionReject}</span>
                  </button>
                  <button id="demo-action-counter-btn" type="button" class="c-btn" style="background:#eaf5f3; color:#00665e; border:2px solid #00665e; font-weight:800; padding:0.75rem 0.5rem; border-radius:10px; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:6px; box-shadow:0 2px 8px rgba(0,102,94,0.12); transition:all 0.15s;">
                    ${IconScale(16)}
                    <span>${t.btnActionCounter}</span>
                  </button>
                </div>
              </div>
            ` : ''}

            ${isCountering || isRejected ? `
              <!-- Countering State: Enter 43 and Submit -->
              <div style="background:#f4faf8; border:2px solid #00665e; border-radius:12px; padding:1.15rem; animation:fadeIn 0.2s ease-out;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
                  <span style="font-weight:800; font-size:0.88rem; color:#1a2e2b;">
                    ${t.counterPromptTitle}
                  </span>
                  <span id="demo-counter-preview-val" style="font-size:0.82rem; font-weight:800; color:#00665e; background:#ffffff; padding:3px 10px; border-radius:999px; border:1px solid #9ce9df;">
                    Total: ₹${(product.volume * counterVal).toLocaleString('en-IN')}
                  </span>
                </div>

                <div style="display:flex; gap:10px; align-items:center; margin-bottom:0.75rem;">
                  <div style="position:relative; width:130px;">
                    <input type="number" id="demo-counter-price-input" value="${counterVal}" min="30" max="60" step="1" class="c-input" style="width:100%; font-weight:800; font-size:1.15rem; color:#00665e; padding-right:38px; text-align:center;">
                    <span style="position:absolute; right:10px; top:50%; transform:translateY(-50%); font-size:0.75rem; font-weight:700; color:#718280;">₹/kg</span>
                  </div>
                  <button id="demo-submit-counter-btn" type="button" class="c-btn c-btn-primary" style="flex:1; font-weight:800; padding:0.75rem 1rem; border-radius:10px; display:flex; align-items:center; justify-content:center; gap:8px;">
                    <span>${t.btnSubmitCounter} (₹${counterVal}/kg)</span>
                    ${IconArrowRight(16)}
                  </button>
                  <button id="demo-cancel-counter-btn" type="button" class="c-btn c-btn-outline" style="font-weight:600; padding:0.75rem 0.85rem; border-radius:10px;">
                    ${t.btnCancelCounter}
                  </button>
                </div>

                <div style="font-size:0.75rem; color:#5c6c69; display:flex; align-items:center; gap:6px;">
                  <span style="color:#00665e;">${IconTrendingUp(14)}</span>
                  <span>Mandi rate is ₹24/kg. At ₹${counterVal}/kg, you earn <strong>+${Math.round(((counterVal - 24) / 24) * 100)}% more</strong> (+₹${((counterVal - 24) * product.volume).toLocaleString('en-IN')} higher than APMC).</span>
                </div>
              </div>
            ` : ''}

            ${isAgreed ? `
              <!-- Agreed State: Deal Confirmed + Proceed to Logistics Button -->
              <div>
                <div style="background:#eaf5f3; border:2px solid #00665e; border-radius:12px; padding:1.1rem; margin-bottom:1.25rem; text-align:center;">
                  <div style="display:inline-flex; align-items:center; gap:6px; color:#00665e; font-weight:800; font-size:1.05rem; margin-bottom:0.25rem;">
                    ${IconCheckCircle(20)}
                    <span>Deal Agreed & Confirmed at ₹${agreedVal}/kg!</span>
                  </div>
                  <div style="font-size:0.95rem; color:#1a2e2b; font-weight:700;">
                    Total Transaction Value: ₹${agreedTotal.toLocaleString('en-IN')} (500kg × ₹${agreedVal}/kg)
                  </div>
                  <div style="font-size:0.75rem; color:#00665e; font-weight:600; margin-top:0.35rem;">
                    ${t.escrowLockedNote}
                  </div>
                </div>

                <button id="demo-proceed-to-logistics-btn" type="button" class="c-btn c-btn-primary c-btn-block c-btn-lg" style="font-weight:800; font-size:1.05rem; padding:0.9rem; border-radius:10px; box-shadow:0 4px 14px rgba(0,102,94,0.3); display:flex; align-items:center; justify-content:center; gap:8px;">
                  <span>${t.btnSellAndBookLogistics}</span>
                  ${IconArrowRight(18)}
                </button>

                <div style="text-align:center; margin-top:0.75rem;">
                  <button id="demo-renegotiate-btn" type="button" style="background:none; border:none; color:#00665e; font-size:0.78rem; font-weight:700; text-decoration:underline; cursor:pointer;">
                    ${t.btnRenegotiate}
                  </button>
                </div>
              </div>
            ` : ''}

          </div>

          <div style="display:flex; justify-content:flex-start; margin-top:1rem;">
            <button id="demo-step4-back-btn" type="button" class="c-btn c-btn-outline c-btn-sm" style="font-weight:600;">
              ${t.btnBack}
            </button>
          </div>

        </div>

      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// STEP 5: AI SMART LOGISTICS BOOKING
// -------------------------------------------------------------
function renderStep5SmartLogistics(product, logistics, t) {
  return `
    <div>
      <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:flex-end; margin-bottom:1.75rem; gap:1rem; border-bottom:1px solid #eef3f2; padding-bottom:1.25rem;">
        <div>
          <div style="display:inline-flex; align-items:center; gap:6px; color:#00665e; background:#eaf5f3; padding:4px 12px; border-radius:999px; font-size:0.8rem; font-weight:700; margin-bottom:0.5rem;">
            <span>${t.step5Tag}</span>
          </div>
          <h2 style="font-size:1.85rem; font-weight:800; color:#1a2e2b; margin:0;">
            ${t.step5Heading}
          </h2>
          <p style="font-size:0.95rem; color:#5c6c69; margin:0.3rem 0 0;">
            ${t.step5Subheading}
          </p>
        </div>
        <div style="background:#e0f2fe; border:1px solid #bae6fd; border-radius:8px; padding:0.4rem 0.85rem; font-size:0.8rem; color:#0369a1; font-weight:700; display:flex; align-items:center; gap:6px;">
          <span>${IconTruck(16)}</span>
          <span>${t.badgeColdCorridor}</span>
        </div>
      </div>

      <!-- Core Intelligence Cards: Vehicle Match & Route Optimization -->
      <div style="display:grid; grid-template-columns:1.2fr 1fr; gap:1.75rem; margin-bottom:2rem;">
        
        <!-- Vehicle Capacity & Pairing Card -->
        <div style="background:#ffffff; border:2px solid #00665e; border-radius:18px; padding:1.75rem; box-shadow:0 8px 24px rgba(0,102,94,0.06); position:relative;">
          <div style="position:absolute; top:14px; right:14px; background:#00665e; color:#ffffff; font-size:0.7rem; font-weight:800; padding:3px 10px; border-radius:999px;">
            ${t.badgeAiOptimal}
          </div>
          
          <div style="display:flex; align-items:center; gap:12px; margin-bottom:1.25rem;">
            <div style="width:48px; height:48px; border-radius:12px; background:#eaf5f3; color:#00665e; display:flex; align-items:center; justify-content:center;">
              ${IconTruck(26)}
            </div>
            <div>
              <h3 style="font-size:1.2rem; font-weight:800; color:#1a2e2b; margin:0;">
                ${logistics.vehicleType}
              </h3>
              <div style="font-size:0.8rem; color:#718280;">
                ${t.vehicleSubtitle}
              </div>
            </div>
          </div>

          <!-- Load Factor Gauge -->
          <div style="background:#f8faf9; border:1px solid #e2ecea; border-radius:14px; padding:1.25rem; margin-bottom:1.25rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
              <span style="font-size:0.85rem; font-weight:700; color:#1a2e2b;">${t.payloadLabel}</span>
              <span style="font-size:1.1rem; font-weight:800; color:#00665e;">${t.payloadUtilized}</span>
            </div>

            <div style="height:16px; background:#e2ecea; border-radius:999px; overflow:hidden; position:relative; margin-bottom:0.75rem;">
              <div style="height:100%; width:${logistics.loadFactorPercent}%; background:linear-gradient(90deg, #004c46, #00665e); border-radius:999px;"></div>
            </div>

            <div style="display:flex; justify-content:space-between; font-size:0.78rem; color:#718280;">
              <span>${t.payloadDetailYourCrop}</span>
              <span>${t.payloadDetailCapacity}</span>
            </div>
          </div>

          <div style="font-size:0.82rem; color:#4a5a57; line-height:1.45;">
            ${t.whyMatchExplanation}
          </div>
        </div>

        <!-- Optimized Corridor Route Card -->
        <div style="background:#fcfdfd; border:1px solid #e2ecea; border-radius:18px; padding:1.75rem;">
          <h3 style="font-size:1.05rem; font-weight:800; color:#1a2e2b; margin-bottom:1.25rem; display:flex; align-items:center; gap:8px;">
            <span style="color:#00665e;">${IconNavigation(18)}</span>
            <span>${t.routeCardTitle}</span>
          </h3>

          <div style="display:flex; flex-direction:column; gap:1rem; position:relative; padding-left:1.5rem; margin-bottom:1.25rem;">
            <div style="position:absolute; left:6px; top:12px; bottom:12px; width:2px; background:#00665e;"></div>

            <div style="position:relative;">
              <div style="position:absolute; left:-1.5rem; top:2px; width:14px; height:14px; border-radius:50%; background:#00665e; border:3px solid #ffffff;"></div>
              <div style="font-size:0.75rem; color:#718280; font-weight:700; text-transform:uppercase;">${t.pickupPoint}</div>
              <div style="font-size:0.9rem; font-weight:800; color:#1a2e2b;">${logistics.routeFrom}</div>
            </div>

            <div style="position:relative;">
              <div style="position:absolute; left:-1.5rem; top:2px; width:14px; height:14px; border-radius:50%; background:#9ce9df; border:3px solid #ffffff;"></div>
              <div style="font-size:0.75rem; color:#00665e; font-weight:700; text-transform:uppercase;">${t.greenCorridor}</div>
              <div style="font-size:0.85rem; font-weight:700; color:#2c3e3b;">Samruddhi Expressway Corridor</div>
            </div>

            <div style="position:relative;">
              <div style="position:absolute; left:-1.5rem; top:2px; width:14px; height:14px; border-radius:50%; background:#e11d48; border:3px solid #ffffff;"></div>
              <div style="font-size:0.75rem; color:#718280; font-weight:700; text-transform:uppercase;">${t.deliveryTerminal}</div>
              <div style="font-size:0.9rem; font-weight:800; color:#1a2e2b;">${logistics.routeTo}</div>
            </div>
          </div>

          <div style="display:flex; justify-content:space-between; background:#ffffff; border:1px solid #dbeae8; border-radius:10px; padding:0.75rem 1rem; font-size:0.82rem;">
            <div>
              <div style="color:#718280;">Distance</div>
              <strong style="color:#1a2e2b; font-size:0.95rem;">${t.distKm}</strong>
            </div>
            <div>
              <div style="color:#718280;">Travel Time</div>
              <strong style="color:#1a2e2b; font-size:0.95rem;">${t.travelTime}</strong>
            </div>
            <div>
              <div style="color:#718280;">Delays Saved</div>
              <strong style="color:#00665e; font-size:0.95rem;">${t.delaysSaved}</strong>
            </div>
          </div>
        </div>

      </div>

      <!-- Side-by-Side Logistics Cost Comparison Table -->
      <div style="background:#ffffff; border:1px solid #e2ecea; border-radius:18px; padding:1.75rem; margin-bottom:2rem; box-shadow:0 4px 16px rgba(0,0,0,0.03);">
        <h3 style="font-size:1.15rem; font-weight:800; color:#1a2e2b; margin-bottom:0.4rem;">
          ${t.pricingCompTitle}
        </h3>
        <p style="font-size:0.85rem; color:#5c6c69; margin-bottom:1.25rem;">
          ${t.pricingCompDesc}
        </p>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem;">
          
          <!-- Kisan Connect Smart Logistics -->
          <div style="background:#f4faf8; border:2px solid #00665e; border-radius:14px; padding:1.25rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
              <span style="font-size:0.85rem; font-weight:800; color:#00665e; text-transform:uppercase; letter-spacing:0.5px;">
                ${t.kcLogisticsTitle}
              </span>
              <span style="background:#00665e; color:#ffffff; font-size:0.68rem; font-weight:800; padding:2px 7px; border-radius:4px;">
                ${t.badgeCheapestPrice}
              </span>
            </div>
            <div style="display:flex; align-items:baseline; gap:6px; margin-bottom:0.5rem;">
              <span style="font-size:2rem; font-weight:900; color:#00665e;">₹${logistics.kcPartnerCost.toLocaleString('en-IN')}</span>
              <span style="font-size:0.85rem; color:#004c46; font-weight:700;">(${t.kcLogisticsPerKg})</span>
            </div>
            <ul style="list-style:none; padding:0; margin:0; font-size:0.8rem; color:#2c3e3b; display:flex; flex-direction:column; gap:6px;">
              <li style="display:flex; align-items:center; gap:6px;">
                <span style="color:#00665e;">${IconCheck(14)}</span> Dedicated farm-gate to buyer hub direct
              </li>
              <li style="display:flex; align-items:center; gap:6px;">
                <span style="color:#00665e;">${IconCheck(14)}</span> Zero intermediate unloading damage
              </li>
              <li style="display:flex; align-items:center; gap:6px;">
                <span style="color:#00665e;">${IconCheck(14)}</span> Live GPS driver tracking + e-Way Bill
              </li>
            </ul>
          </div>

          <!-- Traditional Mandi Middleman Logistics -->
          <div style="background:#fff9fa; border:1px solid #fed7aa; border-radius:14px; padding:1.25rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
              <span style="font-size:0.85rem; font-weight:700; color:#991b1b; text-transform:uppercase; letter-spacing:0.5px;">
                ${t.mandiLogisticsTitle}
              </span>
              <span style="background:#fee2e2; color:#991b1b; font-size:0.68rem; font-weight:700; padding:2px 7px; border-radius:4px;">
                ${t.badgeCartelPricing}
              </span>
            </div>
            <div style="display:flex; align-items:baseline; gap:6px; margin-bottom:0.5rem;">
              <span style="font-size:2rem; font-weight:900; color:#e11d48; text-decoration:line-through;">₹${logistics.traditionalMandiTruckCost.toLocaleString('en-IN')}</span>
              <span style="font-size:0.85rem; color:#991b1b; font-weight:700;">(${t.mandiLogisticsPerKg})</span>
            </div>
            <ul style="list-style:none; padding:0; margin:0; font-size:0.8rem; color:#64748b; display:flex; flex-direction:column; gap:6px;">
              <li>&times; 2 Intermediate loading yards with fruit handling delays</li>
              <li>&times; Added broker cuts + unreceipted gate tips</li>
              <li>&times; 8% to 12% produce damage due to improper stacking</li>
            </ul>
          </div>

        </div>

        <div style="margin-top:1.25rem; background:#eaf5f3; border-radius:10px; padding:0.85rem 1.25rem; display:flex; justify-content:space-between; align-items:center;">
          <div style="font-size:0.9rem; color:#1a2e2b;">
            ${t.transportSavingsLabel}
          </div>
          <strong style="font-size:1.15rem; color:#00665e;">
            ${t.transportSavingsVal}
          </strong>
        </div>
      </div>

      <!-- Action Footer -->
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <button id="demo-step5-back-btn" type="button" class="c-btn c-btn-outline" style="font-weight:600;">
          ${t.btnBack}
        </button>
        <button id="demo-book-logistics-btn" type="button" class="c-btn c-btn-primary c-btn-lg" style="font-weight:800; padding:0.85rem 2rem; border-radius:10px; box-shadow:0 4px 14px rgba(0,102,94,0.25);">
          ${t.btnBookLogistics}
        </button>
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// STEP 6: TOTAL PROFIT REALIZATION & DISINTERMEDIATION IMPACT
// -------------------------------------------------------------
function renderStep6ProfitImpact(negotiation, logistics, t) {
  const traditionalGross = 24 * 500; // 12,000
  const arhatiyaFee = Math.round(traditionalGross * 0.08); // 960
  const mandiCess = 400;
  const traditionalTransport = 3600;
  const damageWeightCut = 1200; // 10%
  const traditionalNet = traditionalGross - (arhatiyaFee + mandiCess + traditionalTransport + damageWeightCut); // 5,840

  const kcGross = negotiation.totalAgreedAmount; // 21,500
  const kcTransport = logistics.kcPartnerCost; // 1,850
  const kcEscrowInsurance = 300;
  const kcNet = kcGross - (kcTransport + kcEscrowInsurance); // 19,350

  const farmerGain = kcNet - traditionalNet; // 13,510
  const profitPercentageGain = Math.round((farmerGain / traditionalNet) * 100); // +231%

  return `
    <div>
      <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:flex-end; margin-bottom:1.75rem; gap:1rem; border-bottom:1px solid #eef3f2; padding-bottom:1.25rem;">
        <div>
          <div style="display:inline-flex; align-items:center; gap:6px; color:#00665e; background:#eaf5f3; padding:4px 12px; border-radius:999px; font-size:0.8rem; font-weight:700; margin-bottom:0.5rem;">
            <span>${t.step6Tag}</span>
          </div>
          <h2 style="font-size:1.85rem; font-weight:800; color:#1a2e2b; margin:0;">
            ${t.step6Heading}
          </h2>
          <p style="font-size:0.95rem; color:#5c6c69; margin:0.3rem 0 0;">
            ${t.step6Subheading}
          </p>
        </div>
        <div style="background:#dcfce7; border:1px solid #86efac; border-radius:8px; padding:0.4rem 0.85rem; font-size:0.85rem; color:#166534; font-weight:800;">
          ${t.extraCashBadge}
        </div>
      </div>

      <!-- Mega Profit Comparison Grid -->
      <div style="display:grid; grid-template-columns:1fr 1.15fr; gap:2rem; margin-bottom:2rem; align-items:stretch;">
        
        <!-- Exploitative APMC Mandi System -->
        <div style="background:#fff9fa; border:1px solid #fecdd3; border-radius:18px; padding:1.75rem; display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <div style="display:inline-block; background:#ffe4e6; color:#9f1239; font-size:0.75rem; font-weight:800; padding:3px 10px; border-radius:999px; margin-bottom:0.75rem; text-transform:uppercase;">
              ${t.statusQuoTitle}
            </div>
            <h3 style="font-size:1.25rem; font-weight:800; color:#9f1239; margin-bottom:0.25rem;">
              ${t.statusQuoSubtitle}
            </h3>
            <p style="font-size:0.82rem; color:#64748b; margin-bottom:1.25rem;">
              ${t.statusQuoDesc}
            </p>

            <div style="display:flex; flex-direction:column; gap:0.65rem; font-size:0.85rem; margin-bottom:1.5rem;">
              <div style="display:flex; justify-content:space-between; color:#475569;">
                <span>${t.mandiGross}</span>
                <strong style="color:#1e293b;">₹${traditionalGross.toLocaleString('en-IN')}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; color:#e11d48;">
                <span>${t.mandiArhatiya}</span>
                <strong>-₹${arhatiyaFee.toLocaleString('en-IN')}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; color:#e11d48;">
                <span>${t.mandiCess}</span>
                <strong>-₹${mandiCess.toLocaleString('en-IN')}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; color:#e11d48;">
                <span>${t.mandiFreight}</span>
                <strong>-₹${traditionalTransport.toLocaleString('en-IN')}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; color:#e11d48;">
                <span>${t.mandiDamage}</span>
                <strong>-₹${damageWeightCut.toLocaleString('en-IN')}</strong>
              </div>
            </div>
          </div>

          <div style="background:#ffffff; border:1px solid #fecdd3; border-radius:12px; padding:1.25rem; text-align:center;">
            <div style="font-size:0.75rem; color:#64748b; font-weight:700; text-transform:uppercase;">
              ${t.traditionalTakeHome}
            </div>
            <div style="font-size:2.25rem; font-weight:900; color:#e11d48; line-height:1.1; margin:0.25rem 0;">
              ${t.traditionalNetVal}
            </div>
            <div style="font-size:0.8rem; color:#64748b; font-weight:600;">
              ${t.traditionalPerKg}
            </div>
          </div>
        </div>

        <!-- Transformative Kisan Connect Direct Platform -->
        <div style="background:#f4faf8; border:2px solid #00665e; border-radius:18px; padding:1.75rem; display:flex; flex-direction:column; justify-content:space-between; box-shadow:0 8px 24px rgba(0,102,94,0.1);">
          <div>
            <div style="display:inline-block; background:#00665e; color:#ffffff; font-size:0.75rem; font-weight:800; padding:3px 10px; border-radius:999px; margin-bottom:0.75rem; text-transform:uppercase;">
              ${t.kcImpactTitle}
            </div>
            <h3 style="font-size:1.25rem; font-weight:800; color:#004c46; margin-bottom:0.25rem;">
              ${t.kcImpactSubtitle}
            </h3>
            <p style="font-size:0.82rem; color:#4a5a57; margin-bottom:1.25rem;">
              ${t.kcImpactDesc}
            </p>

            <div style="display:flex; flex-direction:column; gap:0.65rem; font-size:0.85rem; margin-bottom:1.5rem;">
              <div style="display:flex; justify-content:space-between; color:#1a2e2b;">
                <span>${t.kcGross}</span>
                <strong style="color:#00665e; font-size:1rem;">₹${kcGross.toLocaleString('en-IN')}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; color:#00665e; font-weight:700;">
                <span>${t.kcZeroComm}</span>
              </div>
              <div style="display:flex; justify-content:space-between; color:#4a5a57;">
                <span>${t.kcFreight}</span>
                <strong>-₹${kcTransport.toLocaleString('en-IN')}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; color:#4a5a57;">
                <span>${t.kcEscrowFee}</span>
                <strong>-₹${kcEscrowInsurance.toLocaleString('en-IN')}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; color:#00665e; font-weight:700;">
                <span>${t.kcZeroLoss}</span>
              </div>
            </div>
          </div>

          <div style="background:#ffffff; border:2px solid #00665e; border-radius:12px; padding:1.25rem; text-align:center;">
            <div style="font-size:0.75rem; color:#00665e; font-weight:800; text-transform:uppercase; letter-spacing:0.5px;">
              ${t.kcNetTitle}
            </div>
            <div style="font-size:2.35rem; font-weight:900; color:#00665e; line-height:1.1; margin:0.25rem 0;">
              ${t.kcNetVal}
            </div>
            <div style="font-size:0.82rem; color:#004c46; font-weight:700;">
              ${t.kcPerKg}
            </div>
          </div>
        </div>

      </div>

      <!-- Impact Summary for Judges -->
      <div style="background:linear-gradient(135deg, #00332e, #00665e); color:#ffffff; border-radius:16px; padding:1.5rem 1.75rem; margin-bottom:2rem; display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:1.25rem;">
        <div>
          <div style="font-size:0.75rem; font-weight:700; color:#9ce9df; text-transform:uppercase; margin-bottom:0.25rem;">
            ${t.juryTakeawayTitle}
          </div>
          <div style="font-size:1.05rem; font-weight:800; white-space:pre-line; line-height:1.5;">
            ${t.juryTakeawayText}
          </div>
        </div>
      </div>

      <!-- Action Footer -->
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <button id="demo-step6-back-btn" type="button" class="c-btn c-btn-outline" style="font-weight:600;">
          ${t.btnBack}
        </button>
        <button id="demo-proceed-to-tracking-btn" type="button" class="c-btn c-btn-primary c-btn-lg" style="font-weight:800; padding:0.85rem 2rem; border-radius:10px; box-shadow:0 4px 14px rgba(0,102,94,0.3);">
          ${t.btnGoToTracking}
        </button>
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// STEP 7: AMAZON-STYLE REAL-TIME STATUS TRACKER
// -------------------------------------------------------------
function renderStep7LiveTracking(product, logistics, currentStage, t, langCode) {
  const stages = [
    {
      id: 1,
      title: t.milestone1Title,
      desc: t.milestone1Desc,
      time: 'Today, 08:30 AM',
      location: 'Digital Platform Escrow Vault',
      icon: IconCheckCircle
    },
    {
      id: 2,
      title: t.milestone2Title,
      desc: t.milestone2Desc,
      time: 'Today, 09:15 AM',
      location: 'Nashik Logistics Hub',
      icon: IconTruck
    },
    {
      id: 3,
      title: t.milestone3Title,
      desc: t.milestone3Desc,
      time: 'Today, 10:45 AM',
      location: 'Pimpalgaon Baswant Farm Gate',
      icon: IconLeaf
    },
    {
      id: 4,
      title: t.milestone4Title,
      desc: t.milestone4Desc,
      time: 'Today, 11:30 AM',
      location: 'Kisan Connect Nashik Sorting Hub',
      icon: IconShield
    },
    {
      id: 5,
      title: t.milestone5Title,
      desc: t.milestone5Desc,
      time: 'Today, 01:20 PM',
      location: 'Igatpuri Expressway Corridor (110 km to destination)',
      icon: IconNavigation
    },
    {
      id: 6,
      title: t.milestone6Title,
      desc: t.milestone6Desc,
      time: 'Today, 02:45 PM',
      location: 'Mumbai APMC Agricultural Terminal Gate',
      icon: IconBuilding
    },
    {
      id: 7,
      title: t.milestone7Title,
      desc: t.milestone7Desc,
      time: 'Today, 03:15 PM',
      location: 'Subhash Central Kitchen Hub, Vashi',
      icon: IconCheck
    },
    {
      id: 8,
      title: t.milestone8Title,
      desc: t.milestone8Desc,
      time: 'Today, 03:16 PM',
      location: 'State Bank of India (Direct Farmer A/C)',
      icon: IconCoins
    }
  ];

  const currentMilestone = stages[currentStage - 1] || stages[0];

  return `
    <div>
      <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:flex-end; margin-bottom:1.75rem; gap:1rem; border-bottom:1px solid #eef3f2; padding-bottom:1.25rem;">
        <div>
          <div style="display:inline-flex; align-items:center; gap:6px; color:#00665e; background:#eaf5f3; padding:4px 12px; border-radius:999px; font-size:0.8rem; font-weight:700; margin-bottom:0.5rem;">
            <span>${t.step7Tag}</span>
          </div>
          <h2 style="font-size:1.85rem; font-weight:800; color:#1a2e2b; margin:0;">
            ${t.step7Heading}
          </h2>
        </div>

        <!-- Live Real-Time Auto-Advancing Pulse Indicator & Replay -->
        <div style="display:flex; gap:0.6rem; align-items:center;">
          <div style="background:${currentStage === 8 ? '#dcfce7' : '#eaf5f3'}; border:1px solid ${currentStage === 8 ? '#bbf7d0' : '#9ce9df'}; color:${currentStage === 8 ? '#15803d' : '#00665e'}; font-size:0.8rem; font-weight:800; padding:6px 14px; border-radius:999px; display:inline-flex; align-items:center; gap:8px;">
            <span style="width:8px; height:8px; border-radius:50%; background:${currentStage === 8 ? '#16a34a' : '#00665e'}; display:inline-block; ${currentStage < 8 ? 'animation:pulse 1.5s infinite;' : ''}"></span>
            <span>${currentStage === 8 ? 'Consignment Delivered & Paid (8/8)' : `Live Auto-Advancing (Stage ${currentStage}/8) · 3s`}</span>
          </div>
          <button id="demo-reset-stage-btn" type="button" class="c-btn c-btn-outline c-btn-sm" style="font-weight:600; padding:0.55rem 0.85rem; border-radius:8px;" title="Replay tracking from Stage 1">
            ${IconRotateCcw(13)}
          </button>
        </div>
      </div>

      <!-- Order Overview Meta Card -->
      <div style="background:#ffffff; border:1px solid #e2ecea; border-radius:14px; padding:1.25rem 1.5rem; margin-bottom:2rem; display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:1rem; box-shadow:0 2px 10px rgba(0,0,0,0.02);">
        <div>
          <div style="font-size:0.75rem; color:#718280; font-weight:700;">CONSIGNMENT ID</div>
          <strong style="color:#1a2e2b; font-size:0.95rem;">KC-NSK-2026-8894</strong>
        </div>
        <div>
          <div style="font-size:0.75rem; color:#718280; font-weight:700;">COMMODITY</div>
          <strong style="color:#1a2e2b; font-size:0.95rem;">500kg Desi Hybrid Tomatoes</strong>
        </div>
        <div>
          <div style="font-size:0.75rem; color:#718280; font-weight:700;">VEHICLE & DRIVER</div>
          <strong style="color:#00665e; font-size:0.95rem;">Tata Ace (MH-15-EG-4920)</strong>
        </div>
        <div>
          <div style="font-size:0.75rem; color:#718280; font-weight:700;">NET FARMER DBT PAYOUT</div>
          <strong style="color:#00665e; font-size:1.1rem;">₹19,350 In-Hand</strong>
        </div>
      </div>

      <!-- The Amazon-Style Timeline Tracker -->
      <div class="amazon-tracker-container" style="background:#ffffff; border:1px solid #e2ecea; border-radius:18px; padding:2rem; margin-bottom:2rem; box-shadow:0 4px 16px rgba(0,0,0,0.03);">
        
        <div style="font-size:0.85rem; font-weight:800; color:#1a2e2b; margin-bottom:1.5rem; display:flex; justify-content:space-between; align-items:center;">
          <span>Live Consignment Progress (Milestone ${currentStage} of 8)</span>
          <span style="background:${currentStage === 8 ? '#dcfce7' : '#e0f2fe'}; color:${currentStage === 8 ? '#15803d' : '#0369a1'}; font-size:0.75rem; font-weight:800; padding:3px 10px; border-radius:999px;">
            ${currentStage === 8 ? 'DISPATCH COMPLETE & PAID' : 'CONSIGNMENT IN ACTIVE TRANSIT'}
          </span>
        </div>

        <div class="amazon-timeline" style="display:flex; flex-direction:column; gap:0; position:relative;">
          
          ${stages.map((st, idx) => {
            const isCompleted = st.id <= currentStage;
            const isCurrent = st.id === currentStage;
            const isLast = idx === stages.length - 1;

            return `
              <div class="timeline-row" style="display:flex; gap:1.5rem; position:relative; padding-bottom:${isLast ? '0' : '2rem'};">
                
                <!-- Vertical connecting line -->
                ${!isLast ? `
                  <div style="position:absolute; left:19px; top:36px; bottom:0; width:3px; background:${isCompleted && currentStage > st.id ? '#00665e' : '#e2ecea'}; z-index:1;"></div>
                ` : ''}

                <!-- Status Node Icon -->
                <div class="${isCurrent ? 'timeline-node-active' : ''}" style="width:40px; height:40px; border-radius:50%; background:${isCompleted ? '#00665e' : '#f1f5f4'}; color:${isCompleted ? '#ffffff' : '#94a3a1'}; border:3px solid ${isCurrent ? '#9ce9df' : '#ffffff'}; box-shadow:${isCurrent ? '0 0 0 3px #00665e' : '0 2px 6px rgba(0,0,0,0.1)'}; display:flex; align-items:center; justify-content:center; flex-shrink:0; position:relative; z-index:2; transition:all 0.3s;">
                  ${st.icon(18)}
                </div>

                <!-- Status Text & Details -->
                <div style="flex:1; padding-top:2px;">
                  <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:baseline; gap:8px; margin-bottom:0.25rem;">
                    <h4 style="font-size:1rem; font-weight:800; color:${isCompleted ? '#1a2e2b' : '#8c9c99'}; margin:0;">
                      ${st.title}
                      ${isCurrent ? `<span style="background:#00665e; color:#ffffff; font-size:0.65rem; font-weight:700; padding:2px 7px; border-radius:4px; margin-left:8px; vertical-align:middle;">${t.activeMilestone}</span>` : ''}
                    </h4>
                    <span style="font-size:0.75rem; color:${isCompleted ? '#00665e' : '#94a3a1'}; font-weight:700;">
                      ${st.time}
                    </span>
                  </div>

                  <p style="font-size:0.85rem; color:${isCompleted ? '#4a5a57' : '#94a3a1'}; margin:0 0 0.4rem; line-height:1.45;">
                    ${st.desc}
                  </p>

                  <div style="font-size:0.75rem; color:${isCompleted ? '#00665e' : '#a0aea9'}; display:inline-flex; align-items:center; gap:4px; font-weight:600;">
                    ${IconNavigation(12)}
                    <span>${st.location}</span>
                  </div>
                </div>

              </div>
            `;
          }).join('')}

        </div>

      </div>

      <!-- Pitch Wrap-Up / Restart Bar -->
      <div style="background:#f4faf8; border:2px solid #00665e; border-radius:18px; padding:1.75rem; display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:1.25rem;">
        <div>
          <h3 style="font-size:1.25rem; font-weight:800; color:#004c46; margin:0 0 0.3rem;">
            ${t.workflowCompleteTitle}
          </h3>
          <p style="font-size:0.9rem; color:#4a5a57; margin:0;">
            ${t.workflowCompleteDesc}
          </p>
        </div>

        <div style="display:flex; gap:0.75rem;">
          <button id="demo-restart-entire-btn" type="button" class="c-btn c-btn-primary" style="font-weight:700; padding:0.75rem 1.5rem; border-radius:10px;">
            ${t.btnRestartDemo}
          </button>
          <a href="#/direct-from-farmer" class="c-btn c-btn-outline" style="font-weight:600; padding:0.75rem 1.25rem; border-radius:10px; text-decoration:none;">
            ${t.btnExploreMarket}
          </a>
        </div>
      </div>

    </div>
  `;
}

// Tracking Interval ID for 3-second auto-advancing simulator
let trackingIntervalId = null;

export function stopTrackingAutoAdvance() {
  if (trackingIntervalId) {
    clearInterval(trackingIntervalId);
    trackingIntervalId = null;
  }
}

// -------------------------------------------------------------
// EVENT LISTENERS FOR INTERACTIVE DEMO WORKFLOW
// -------------------------------------------------------------
export function attachDemoWorkflowListeners() {
  // Always stop previous tracking timer before re-attaching listeners
  stopTrackingAutoAdvance();

  const state = store.getState();

  // If currently on Step 7, automatically advance stage every 3 seconds until Stage 8
  if (state.demoStep === 7 && state.demoTrackingStage < 8) {
    trackingIntervalId = setInterval(() => {
      const curr = store.getState();
      if (curr.demoStep === 7 && curr.demoTrackingStage < 8) {
        const next = curr.demoTrackingStage + 1;
        store.setDemoTrackingStage(next);
        if (next === 8) {
          stopTrackingAutoAdvance();
          store.showToast('Consignment Complete! Instant Direct DBT Payout Credited.', 'success');
        }
      } else {
        stopTrackingAutoAdvance();
      }
    }, 3000);
  }

  // Step Jump Buttons
  document.querySelectorAll('.demo-step-jump-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const stepTarget = parseInt(btn.dataset.step, 10);
      if (stepTarget) {
        if (stepTarget === 7) {
          store.setDemoTrackingStage(1);
        } else {
          stopTrackingAutoAdvance();
        }
        store.setDemoStep(stepTarget);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  // Voice Guidance Audio Speech Synthesis for Rural & Illiterate Farmers
  document.getElementById('demo-voice-advice-btn')?.addEventListener('click', () => {
    const state = store.getState();
    const lang = state.language || 'en';
    const t = getTranslation(lang);
    const textToSpeak = t.aiAdviceText || 'Nashik arrivals dropping next week. Best time to sell.';

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      
      const langMap = {
        mr: 'mr-IN',
        hi: 'hi-IN',
        pa: 'pa-IN',
        en: 'en-IN'
      };
      utterance.lang = langMap[lang] || 'hi-IN';
      utterance.rate = 0.9; // clear, comfortable listening speed for farmers

      const btnText = document.getElementById('demo-voice-btn-text');
      if (btnText) {
        btnText.textContent = lang === 'mr' ? 'आवाज सुरू आहे...' : lang === 'hi' ? 'आवाज चल रहा है...' : 'Speaking Audio...';
      }

      utterance.onend = () => {
        if (btnText) {
          btnText.textContent = t.btnListenVoice;
        }
      };

      utterance.onerror = () => {
        if (btnText) {
          btnText.textContent = t.btnListenVoice;
        }
      };

      window.speechSynthesis.speak(utterance);
      store.showToast(`Audio Guidance playing in ${lang.toUpperCase()} for farmer accessibility!`, 'info');
    } else {
      store.showToast('Voice Audio guidance simulated: ' + textToSpeak.substring(0, 60) + '...', 'info');
    }
  });

  // Voice Guidance for Delivery Status (Step 7)
  document.getElementById('demo-voice-status-btn')?.addEventListener('click', () => {
    const state = store.getState();
    const lang = state.language || 'en';
    const t = getTranslation(lang);
    const stage = state.demoTrackingStage || 1;
    const stageTexts = [
      t.milestone1Title,
      t.milestone2Title,
      t.milestone3Title,
      t.milestone4Title,
      t.milestone5Title,
      t.milestone6Title,
      t.milestone7Title,
      t.milestone8Title
    ];
    const text = stageTexts[stage - 1] || 'Order in transit';

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      const langMap = { mr: 'mr-IN', hi: 'hi-IN', pa: 'pa-IN', en: 'en-IN' };
      utterance.lang = langMap[lang] || 'hi-IN';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
      store.showToast(`Status read aloud: ${text}`, 'info');
    } else {
      store.showToast(`Status: ${text}`, 'info');
    }
  });

  // STEP 1: Role Selection Listeners
  const selectFarmer = () => {
    store.setDemoRole('farmer');
    store.setDemoStep(2);
    store.showToast('Role selected: Farmer / FPO Producer', 'info');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectBuyer = () => {
    store.setDemoRole('buyer');
    store.setDemoStep(2);
    store.showToast('Role selected: Commercial / Retail Buyer', 'info');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  document.getElementById('role-select-farmer')?.addEventListener('click', selectFarmer);
  document.getElementById('btn-continue-farmer')?.addEventListener('click', selectFarmer);

  document.getElementById('role-select-buyer')?.addEventListener('click', selectBuyer);
  document.getElementById('btn-continue-buyer')?.addEventListener('click', selectBuyer);

  // STEP 2: Farmer Profile Form
  document.getElementById('demo-fill-farmer-btn')?.addEventListener('click', () => {
    const nameEl = document.getElementById('demo-farmer-name');
    const phoneEl = document.getElementById('demo-farmer-phone');
    const locEl = document.getElementById('demo-farmer-location');
    const fpoEl = document.getElementById('demo-farmer-fpo');
    const cropsEl = document.getElementById('demo-farmer-crops');

    if (nameEl) nameEl.value = 'Rajesh Patil';
    if (phoneEl) phoneEl.value = '+91 98230 45120';
    if (locEl) locEl.value = 'Pimpalgaon Baswant, Nashik, Maharashtra';
    if (fpoEl) fpoEl.value = 'Nashik Kisan Samruddhi Farmer Producer Co.';
    if (cropsEl) cropsEl.value = 'Hybrid Tomatoes, Lasalgaon Onions, Table Grapes';

    store.showToast('Farmer profile auto-filled with verified test credentials', 'info');
  });

  document.getElementById('demo-farmer-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('demo-farmer-name')?.value || 'Rajesh Patil';
    const phone = document.getElementById('demo-farmer-phone')?.value || '+91 98230 45120';
    const location = document.getElementById('demo-farmer-location')?.value || 'Pimpalgaon Baswant, Nashik, Maharashtra';
    const fpoName = document.getElementById('demo-farmer-fpo')?.value || 'Nashik Kisan Samruddhi FPO';
    const crops = document.getElementById('demo-farmer-crops')?.value || 'Hybrid Tomatoes';

    store.updateDemoFarmer({ name, phone, location, fpoName, crops });
    store.showToast(`Farmer ${name} registered! Enter your produce details next.`, 'success');
    store.setDemoStep(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.getElementById('demo-step2-back-btn')?.addEventListener('click', () => {
    store.setDemoStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // STEP 3: Produce Upload & AI Price Forecast
  document.getElementById('demo-fill-produce-btn')?.addEventListener('click', () => {
    const titleEl = document.getElementById('demo-prod-title');
    const volEl = document.getElementById('demo-prod-volume');
    const priceEl = document.getElementById('demo-prod-price');
    const descEl = document.getElementById('demo-prod-desc');

    if (titleEl) titleEl.value = 'Farm-Fresh Desi Hybrid Tomatoes (Grade-A Firm & Juicy)';
    if (volEl) volEl.value = '500';
    if (priceEl) priceEl.value = '45';
    if (descEl) descEl.value = 'Naturally vine-ripened Grade-A tomatoes packed on demand at Pimpalgaon packhouse. Zero artificial carbide gas, pesticide residue tested.';

    store.showToast('Produce specifications filled: 500kg Tomatoes @ ₹45/kg', 'info');
  });

  document.getElementById('demo-prod-image-select')?.addEventListener('change', (e) => {
    const previewImg = document.getElementById('demo-prod-preview-img');
    if (previewImg) {
      previewImg.src = e.target.value;
    }
  });

  document.getElementById('demo-produce-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('demo-prod-title')?.value || 'Farm-Fresh Desi Hybrid Tomatoes';
    const volume = parseInt(document.getElementById('demo-prod-volume')?.value, 10) || 500;
    const askingPrice = parseInt(document.getElementById('demo-prod-price')?.value, 10) || 45;
    const image = document.getElementById('demo-prod-image-select')?.value || 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&auto=format&fit=crop&q=80';
    const description = document.getElementById('demo-prod-desc')?.value || '';

    store.updateDemoProduct({ title, volume, askingPrice, image, description });
    
    // Add to custom products so it also appears in the main marketplace catalog
    store.addCustomProduct({
      title,
      slug: 'fresh-desi-hybrid-tomatoes-nashik',
      category: 'vegetables',
      subCategory: 'Tomatoes',
      farmer: store.getState().demoFarmer.name,
      location: store.getState().demoFarmer.location,
      price: askingPrice,
      unit: 'kg',
      isBulk: true,
      minBulkOrder: '100 kg',
      bulkPrice: askingPrice - 2,
      image,
      description
    });

    // Reset negotiation state to 'initial' for fresh interaction in step 4
    store.updateDemoNegotiation({
      status: 'initial',
      farmerAskingPrice: askingPrice,
      buyerOfferPrice: 41,
      farmerCounterPrice: 43,
      agreedPrice: 43,
      totalAgreedAmount: volume * 43
    });

    store.showToast('Produce published live to Kisan Connect Marketplace!', 'success');
    store.setDemoStep(4);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.getElementById('demo-step3-back-btn')?.addEventListener('click', () => {
    store.setDemoStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // STEP 4: Marketplace Negotiation Listeners
  // 1. Farmer Action: Accept ₹41/kg directly
  document.getElementById('demo-action-accept-btn')?.addEventListener('click', () => {
    const vol = store.getState().demoProduct?.volume || 500;
    store.updateDemoNegotiation({
      agreedPrice: 41,
      totalAgreedAmount: vol * 41,
      status: 'agreed'
    });
    store.showToast('Accepted initial offer of ₹41/kg from buyer!', 'success');
  });

  // 2. Farmer Action: Reject offer
  document.getElementById('demo-action-reject-btn')?.addEventListener('click', () => {
    store.updateDemoNegotiation({
      status: 'rejected'
    });
    store.showToast('Offer rejected. You can enter a counter-offer below.', 'warning');
  });

  // 3. Farmer Action: Counter Offer
  document.getElementById('demo-action-counter-btn')?.addEventListener('click', () => {
    store.updateDemoNegotiation({
      status: 'countering'
    });
  });

  // 4. Cancel Counter: Return to initial 3 options
  document.getElementById('demo-cancel-counter-btn')?.addEventListener('click', () => {
    store.updateDemoNegotiation({
      status: 'initial'
    });
  });

  // 5. Live Counter Price Input Updates
  const counterInput = document.getElementById('demo-counter-price-input');
  counterInput?.addEventListener('input', (e) => {
    const val = parseInt(e.target.value, 10) || 43;
    const vol = store.getState().demoProduct?.volume || 500;
    const previewEl = document.getElementById('demo-counter-preview-val');
    if (previewEl) {
      previewEl.textContent = `Total: ₹${(vol * val).toLocaleString('en-IN')}`;
    }
  });

  // Allow pressing Enter in counter input to submit
  counterInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      document.getElementById('demo-submit-counter-btn')?.click();
    }
  });

  // 6. Submit Counter-Offer (e.g. ₹43/kg) -> Buyer accepts
  document.getElementById('demo-submit-counter-btn')?.addEventListener('click', () => {
    const inputEl = document.getElementById('demo-counter-price-input');
    const inputVal = inputEl ? parseInt(inputEl.value, 10) : 43;
    const val = (!isNaN(inputVal) && inputVal > 0) ? inputVal : 43;
    const vol = store.getState().demoProduct?.volume || 500;
    store.updateDemoNegotiation({
      farmerCounterPrice: val,
      agreedPrice: val,
      totalAgreedAmount: vol * val,
      status: 'agreed'
    });
    store.showToast(`Buyer accepted counter-offer of ₹${val}/kg! Total: ₹${(vol * val).toLocaleString('en-IN')}`, 'success');
  });

  // 7. Renegotiate (Reset to initial interactive buttons)
  document.getElementById('demo-renegotiate-btn')?.addEventListener('click', () => {
    store.updateDemoNegotiation({
      status: 'initial'
    });
    store.showToast('Negotiation reset. Choose Accept, Reject, or Counter.', 'info');
  });

  // 8. Proceed to Logistics
  document.getElementById('demo-proceed-to-logistics-btn')?.addEventListener('click', () => {
    store.setDemoStep(5);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.getElementById('demo-step4-back-btn')?.addEventListener('click', () => {
    store.setDemoStep(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // STEP 5: AI Logistics Booking
  document.getElementById('demo-book-logistics-btn')?.addEventListener('click', () => {
    store.bookDemoLogistics({});
    store.setDemoStep(6);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.getElementById('demo-step5-back-btn')?.addEventListener('click', () => {
    store.setDemoStep(4);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // STEP 6: Total Profit Realization
  document.getElementById('demo-proceed-to-tracking-btn')?.addEventListener('click', () => {
    store.setDemoTrackingStage(1);
    store.setDemoStep(7);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.getElementById('demo-step6-back-btn')?.addEventListener('click', () => {
    stopTrackingAutoAdvance();
    store.setDemoStep(5);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // STEP 7: Real-Time Auto-Advancing Tracking Simulator
  document.getElementById('demo-reset-stage-btn')?.addEventListener('click', () => {
    stopTrackingAutoAdvance();
    store.setDemoTrackingStage(1);
    store.showToast('Tracking reset to Stage 1: Replaying live tracking...', 'info');
  });

  document.getElementById('demo-restart-entire-btn')?.addEventListener('click', () => {
    stopTrackingAutoAdvance();
    store.resetDemoWorkflow();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
