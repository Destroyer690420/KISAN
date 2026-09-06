import { store } from '../state/store.js';
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
  IconShoppingBag
} from '../components/icons.js';

export function renderDemoWorkflowPage() {
  const state = store.getState();
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
            
            ${renderStepItem(1, 'Role', 'Farmer / Buyer', step)}
            ${renderStepDivider(1, step)}
            ${renderStepItem(2, 'Profile', 'Name & Mobile', step)}
            ${renderStepDivider(2, step)}
            ${renderStepItem(3, 'Produce', 'AI Price Forecast', step)}
            ${renderStepDivider(3, step)}
            ${renderStepItem(4, 'Market', 'Buyer Negotiation', step)}
            ${renderStepDivider(4, step)}
            ${renderStepItem(5, 'Logistics', 'AI Smart Matching', step)}
            ${renderStepDivider(5, step)}
            ${renderStepItem(6, 'Profits', '+231% Earnings', step)}
            ${renderStepDivider(6, step)}
            ${renderStepItem(7, 'Tracking', 'Amazon Live Status', step)}

          </div>
        </div>

        <!-- Dynamic Step Content Area -->
        <div class="demo-step-content-box" style="background:#ffffff; border:1px solid #e2ecea; border-radius:20px; padding:2rem 2.25rem; box-shadow:0 8px 24px rgba(0,0,0,0.04);">
          ${renderCurrentStepContent(step, role, farmer, product, negotiation, logistics, trackingStage)}
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
    <button class="demo-step-jump-btn" data-step="${stepNum}" style="background:none; border:none; cursor:pointer; padding:4px 8px; text-align:left; display:flex; align-items:center; gap:10px; border-radius:10px; transition:all 0.2s;">
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

function renderCurrentStepContent(step, role, farmer, product, negotiation, logistics, trackingStage) {
  switch (step) {
    case 1:
      return renderStep1RoleSelection(role);
    case 2:
      return renderStep2FarmerProfile(farmer);
    case 3:
      return renderStep3ProduceAndForecast(product);
    case 4:
      return renderStep4MarketNegotiation(product, negotiation);
    case 5:
      return renderStep5SmartLogistics(product, logistics);
    case 6:
      return renderStep6ProfitImpact(negotiation, logistics);
    case 7:
      return renderStep7LiveTracking(product, logistics, trackingStage);
    default:
      return renderStep1RoleSelection(role);
  }
}

// -------------------------------------------------------------
// STEP 1: ROLE SELECTION
// -------------------------------------------------------------
function renderStep1RoleSelection(role) {
  return `
    <div style="max-width:820px; margin:0 auto; text-align:center;">
      <div style="display:inline-flex; align-items:center; gap:6px; color:#00665e; background:#eaf5f3; padding:4px 12px; border-radius:999px; font-size:0.8rem; font-weight:700; margin-bottom:0.75rem;">
        <span>Step 1 of 7</span> &bull; <span>Role Onboarding</span>
      </div>
      <h2 style="font-size:2rem; font-weight:800; color:#1a2e2b; margin-bottom:0.5rem;">
        Are you a Farmer or a Buyer?
      </h2>
      <p style="font-size:1rem; color:#5c6c69; margin-bottom:2.25rem;">
        KISAN provides custom intelligence for both sides of the agricultural food chain. 
        Select your persona to start the interactive demo.
      </p>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1.5rem; text-align:left; margin-bottom:2rem;">
        
        <!-- Farmer Card -->
        <div id="role-select-farmer" class="demo-role-card ${role === 'farmer' ? 'active-role' : ''}" style="border:2px solid ${role === 'farmer' ? '#00665e' : '#e2ecea'}; background:${role === 'farmer' ? '#f4faf8' : '#ffffff'}; border-radius:16px; padding:1.75rem; cursor:pointer; position:relative; transition:all 0.2s; box-shadow:${role === 'farmer' ? '0 8px 24px rgba(0,102,94,0.12)' : 'none'};">
          <div style="display:inline-block; background:#00665e; color:#ffffff; font-size:0.7rem; font-weight:800; padding:3px 10px; border-radius:999px; margin-bottom:1rem; text-transform:uppercase; letter-spacing:0.5px;">
            Recommended for Judges Demo
          </div>
          <div style="display:flex; align-items:center; gap:12px; margin-bottom:1rem;">
            <div style="width:48px; height:48px; border-radius:12px; background:#00665e; color:#ffffff; display:flex; align-items:center; justify-content:center;">
              ${IconTractor(24)}
            </div>
            <div>
              <h3 style="font-size:1.25rem; font-weight:800; color:#1a2e2b; margin:0;">I am a Farmer / FPO</h3>
              <div style="font-size:0.8rem; color:#00665e; font-weight:700;">Direct Producer Seller</div>
            </div>
          </div>
          <p style="font-size:0.9rem; color:#5c6c69; line-height:1.5; margin-bottom:1.25rem;">
            Upload your harvest at zero commission, receive AI Mandi price predictions for peak profits, negotiate directly with bulk buyers, and get guaranteed instant bank transfers.
          </p>
          <ul style="list-style:none; padding:0; margin:0 0 1.5rem; font-size:0.85rem; color:#2c3e3b; display:flex; flex-direction:column; gap:8px;">
            <li style="display:flex; align-items:center; gap:8px;">
              <span style="color:#00665e;">${IconCheckCircle(16)}</span> Zero middlemen commission agents
            </li>
            <li style="display:flex; align-items:center; gap:8px;">
              <span style="color:#00665e;">${IconCheckCircle(16)}</span> AI Mandi rate forecasting for best selling time
            </li>
            <li style="display:flex; align-items:center; gap:8px;">
              <span style="color:#00665e;">${IconCheckCircle(16)}</span> AI Smart Logistics with 48% cheaper freight
            </li>
          </ul>
          <button id="btn-continue-farmer" type="button" class="c-btn c-btn-primary c-btn-block" style="font-weight:700; padding:0.75rem; border-radius:10px;">
            Continue as Farmer &rarr;
          </button>
        </div>

        <!-- Buyer Card -->
        <div id="role-select-buyer" class="demo-role-card ${role === 'buyer' ? 'active-role' : ''}" style="border:2px solid ${role === 'buyer' ? '#00665e' : '#e2ecea'}; background:${role === 'buyer' ? '#f4faf8' : '#ffffff'}; border-radius:16px; padding:1.75rem; cursor:pointer; position:relative; transition:all 0.2s; box-shadow:${role === 'buyer' ? '0 8px 24px rgba(0,102,94,0.12)' : 'none'};">
          <div style="display:inline-block; background:#64748b; color:#ffffff; font-size:0.7rem; font-weight:800; padding:3px 10px; border-radius:999px; margin-bottom:1rem; text-transform:uppercase; letter-spacing:0.5px;">
            Commercial & Retail Buyers
          </div>
          <div style="display:flex; align-items:center; gap:12px; margin-bottom:1rem;">
            <div style="width:48px; height:48px; border-radius:12px; background:#eaf5f3; color:#00665e; display:flex; align-items:center; justify-content:center;">
              ${IconBuilding(24)}
            </div>
            <div>
              <h3 style="font-size:1.25rem; font-weight:800; color:#1a2e2b; margin:0;">I am a Buyer</h3>
              <div style="font-size:0.8rem; color:#64748b; font-weight:700;">Wholesale, HoReCa & Households</div>
            </div>
          </div>
          <p style="font-size:0.9rem; color:#5c6c69; line-height:1.5; margin-bottom:1.25rem;">
            Procure farm-fresh crops directly from verified FPOs. Place live price offers, verify optical quality grades, and track consolidated cold-chain delivery to your doorstep.
          </p>
          <ul style="list-style:none; padding:0; margin:0 0 1.5rem; font-size:0.85rem; color:#2c3e3b; display:flex; flex-direction:column; gap:8px;">
            <li style="display:flex; align-items:center; gap:8px;">
              <span style="color:#00665e;">${IconCheckCircle(16)}</span> 100% farm-traceable origin & harvest date
            </li>
            <li style="display:flex; align-items:center; gap:8px;">
              <span style="color:#00665e;">${IconCheckCircle(16)}</span> Direct transparent price counter-offers
            </li>
            <li style="display:flex; align-items:center; gap:8px;">
              <span style="color:#00665e;">${IconCheckCircle(16)}</span> Digital escrow with automated release on POD
            </li>
          </ul>
          <button id="btn-continue-buyer" type="button" class="c-btn c-btn-outline c-btn-block" style="font-weight:700; padding:0.75rem; border-radius:10px;">
            Select Buyer & Continue
          </button>
        </div>

      </div>

      <div style="font-size:0.85rem; color:#718280;">
        Choosing <strong>Farmer</strong> takes you through produce upload, price forecasting, and the complete deal-to-logistics cycle.
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// STEP 2: FARMER IDENTITY & MOBILE ONBOARDING
// -------------------------------------------------------------
function renderStep2FarmerProfile(farmer) {
  return `
    <div style="max-width:720px; margin:0 auto;">
      <div style="text-align:center; margin-bottom:2rem;">
        <div style="display:inline-flex; align-items:center; gap:6px; color:#00665e; background:#eaf5f3; padding:4px 12px; border-radius:999px; font-size:0.8rem; font-weight:700; margin-bottom:0.75rem;">
          <span>Step 2 of 7</span> &bull; <span>Farmer Onboarding</span>
        </div>
        <h2 style="font-size:1.85rem; font-weight:800; color:#1a2e2b; margin-bottom:0.4rem;">
          Enter Your Name & Mobile Number
        </h2>
        <p style="font-size:0.95rem; color:#5c6c69; margin:0;">
          Instant verified digital identity for Kisan partners with zero paperwork.
        </p>
      </div>

      <div style="background:#eaf5f3; border:1px solid #c2e2dd; border-radius:12px; padding:0.85rem 1.25rem; margin-bottom:1.75rem; display:flex; align-items:center; justify-content:space-between; gap:12px;">
        <div style="display:flex; align-items:center; gap:10px;">
          <span style="color:#00665e;">${IconShield(20)}</span>
          <div style="font-size:0.85rem; color:#1a2e2b;">
            <strong>Aadhaar & Kisan Credit Card (KCC) Ready</strong> &bull; Direct Benefit Transfer (DBT) enabled
          </div>
        </div>
        <button id="demo-fill-farmer-btn" class="c-btn c-btn-sm" style="background:#00665e; color:#ffffff; font-size:0.75rem; padding:0.35rem 0.85rem; border-radius:999px; font-weight:700; white-space:nowrap; border:none; cursor:pointer;">
          Auto-Fill Rajesh Patil
        </button>
      </div>

      <form id="demo-farmer-form" style="display:flex; flex-direction:column; gap:1.25rem;">
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.25rem;">
          <div>
            <label class="label-sm-default" style="display:block; margin-bottom:0.4rem; font-weight:700; color:#1a2e2b;">
              Farmer Full Name *
            </label>
            <input type="text" id="demo-farmer-name" required value="${farmer.name}" class="c-input" placeholder="e.g. Rajesh Patil" style="width:100%;">
          </div>
          <div>
            <label class="label-sm-default" style="display:block; margin-bottom:0.4rem; font-weight:700; color:#1a2e2b;">
              Mobile Number (Aadhaar / WhatsApp OTP) *
            </label>
            <div style="position:relative;">
              <input type="tel" id="demo-farmer-phone" required value="${farmer.phone}" class="c-input" placeholder="+91 98230 45120" style="width:100%; padding-right:85px;">
              <span style="position:absolute; right:10px; top:50%; transform:translateY(-50%); background:#00665e; color:#ffffff; font-size:0.68rem; font-weight:700; padding:2px 7px; border-radius:4px;">
                VERIFIED
              </span>
            </div>
          </div>
        </div>

        <div>
          <label class="label-sm-default" style="display:block; margin-bottom:0.4rem; font-weight:700; color:#1a2e2b;">
            Village & District Location *
          </label>
          <div style="position:relative;">
            <input type="text" id="demo-farmer-location" required value="${farmer.location}" class="c-input" placeholder="Village, Taluka, District, State" style="width:100%;">
          </div>
          <div style="font-size:0.75rem; color:#718280; margin-top:0.25rem;">
            Used by AI Smart Logistics engine to map optimal transport routes to nearest cities.
          </div>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.25rem;">
          <div>
            <label class="label-sm-default" style="display:block; margin-bottom:0.4rem; font-weight:700; color:#1a2e2b;">
              Registered FPO / Cooperative (Optional)
            </label>
            <input type="text" id="demo-farmer-fpo" value="${farmer.fpoName}" class="c-input" placeholder="e.g. Nashik Kisan Samruddhi FPO" style="width:100%;">
          </div>
          <div>
            <label class="label-sm-default" style="display:block; margin-bottom:0.4rem; font-weight:700; color:#1a2e2b;">
              Main Harvested Crops
            </label>
            <input type="text" id="demo-farmer-crops" value="${farmer.crops}" class="c-input" placeholder="e.g. Tomatoes, Onions" style="width:100%;">
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:1.5rem; pt:1rem; border-top:1px solid #f0f4f4;">
          <button type="button" id="demo-step2-back-btn" class="c-btn c-btn-outline" style="font-weight:600;">
            &larr; Back to Role Selection
          </button>
          <button id="demo-step2-submit-btn" type="submit" class="c-btn c-btn-primary" style="font-weight:700; padding:0.75rem 1.75rem;">
            Save & Enter Produce Details &rarr;
          </button>
        </div>
      </form>
    </div>
  `;
}

// -------------------------------------------------------------
// STEP 3: ENTER PRODUCTION / UPLOAD PRODUCE & AI PRICE FORECAST
// -------------------------------------------------------------
function renderStep3ProduceAndForecast(product) {
  return `
    <div>
      <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:flex-end; margin-bottom:1.75rem; gap:1rem; border-bottom:1px solid #eef3f2; padding-bottom:1.25rem;">
        <div>
          <div style="display:inline-flex; align-items:center; gap:6px; color:#00665e; background:#eaf5f3; padding:4px 12px; border-radius:999px; font-size:0.8rem; font-weight:700; margin-bottom:0.5rem;">
            <span>Step 3 of 7</span> &bull; <span>Produce Upload & AI Forecasting</span>
          </div>
          <h2 style="font-size:1.85rem; font-weight:800; color:#1a2e2b; margin:0;">
            Upload Your Production & AI Mandi Forecast
          </h2>
          <p style="font-size:0.95rem; color:#5c6c69; margin:0.3rem 0 0;">
            Specify your harvest details and let our AI engine predict the optimal time to sell.
          </p>
        </div>
        <button id="demo-fill-produce-btn" class="c-btn c-btn-sm" style="background:#004c46; color:#ffffff; font-weight:700; font-size:0.8rem; border-radius:8px; border:none; padding:0.5rem 1rem; display:inline-flex; align-items:center; gap:6px; cursor:pointer;">
          ${IconSparkles(14)}
          <span>1-Click Load 500kg Tomatoes Preset</span>
        </button>
      </div>

      <div style="display:grid; grid-template-columns:1.1fr 1fr; gap:2rem; align-items:start;">
        
        <!-- Left Column: Produce Upload Form -->
        <div style="background:#fcfdfd; border:1px solid #e2ecea; border-radius:16px; padding:1.75rem;">
          <h3 style="font-size:1.15rem; font-weight:800; color:#1a2e2b; margin-bottom:1.25rem; display:flex; align-items:center; gap:8px;">
            <span style="color:#00665e;">${IconLeaf(18)}</span>
            <span>Produce & Harvest Specification</span>
          </h3>

          <form id="demo-produce-form" style="display:flex; flex-direction:column; gap:1.1rem;">
            <div>
              <label class="label-sm-default" style="display:block; margin-bottom:0.35rem; font-weight:700; color:#1a2e2b;">
                Produce Name & Variety *
              </label>
              <input type="text" id="demo-prod-title" required value="${product.title}" class="c-input" style="width:100%;">
            </div>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
              <div>
                <label class="label-sm-default" style="display:block; margin-bottom:0.35rem; font-weight:700; color:#1a2e2b;">
                  Available Harvest Volume (kg) *
                </label>
                <div style="position:relative;">
                  <input type="number" id="demo-prod-volume" required value="${product.volume}" min="50" step="50" class="c-input" style="width:100%; font-weight:700;">
                  <span style="position:absolute; right:12px; top:50%; transform:translateY(-50%); font-size:0.8rem; color:#718280; font-weight:700;">
                    KG
                  </span>
                </div>
                <div style="font-size:0.72rem; color:#718280; margin-top:0.2rem;">
                  = 25 standard 20kg agri-crates
                </div>
              </div>

              <div>
                <label class="label-sm-default" style="display:block; margin-bottom:0.35rem; font-weight:700; color:#1a2e2b;">
                  Farmer Asking Price (₹/kg) *
                </label>
                <div style="position:relative;">
                  <input type="number" id="demo-prod-price" required value="${product.askingPrice}" min="5" step="1" class="c-input" style="width:100%; font-weight:700; color:#00665e;">
                  <span style="position:absolute; right:12px; top:50%; transform:translateY(-50%); font-size:0.8rem; color:#00665e; font-weight:700;">
                    ₹ / KG
                  </span>
                </div>
                <div style="font-size:0.72rem; color:#00665e; font-weight:600; margin-top:0.2rem;">
                  Total Lot Value: ₹${(product.volume * product.askingPrice).toLocaleString('en-IN')}
                </div>
              </div>
            </div>

            <div>
              <label class="label-sm-default" style="display:block; margin-bottom:0.35rem; font-weight:700; color:#1a2e2b;">
                Crop Image (Actual Farm Produce Photo)
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
                    Optical quality AI detects ripeness and crate grade automatically.
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label class="label-sm-default" style="display:block; margin-bottom:0.35rem; font-weight:700; color:#1a2e2b;">
                Batch Description & Grading Note
              </label>
              <textarea id="demo-prod-desc" rows="3" class="c-input" style="width:100%; font-size:0.85rem; line-height:1.4;">${product.description}</textarea>
            </div>

            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.5rem;">
              <button type="button" id="demo-step3-back-btn" class="c-btn c-btn-outline c-btn-sm" style="font-weight:600;">
                &larr; Back
              </button>
              <button id="demo-step3-submit-btn" type="submit" class="c-btn c-btn-primary" style="font-weight:700; padding:0.7rem 1.5rem;">
                Publish Produce to Marketplace &rarr;
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
                <h3 style="font-size:1.05rem; font-weight:800; color:#1a2e2b; margin:0;">AI Mandi Price Intelligence</h3>
                <div style="font-size:0.72rem; color:#00665e; font-weight:700;">Trained on Agmarknet & 12 APMC Mandis</div>
              </div>
            </div>
            <span style="background:#00665e; color:#9ce9df; font-size:0.68rem; font-weight:800; padding:2px 8px; border-radius:6px; letter-spacing:0.5px;">
              ACTIVE MODEL
            </span>
          </div>

          <p style="font-size:0.85rem; color:#4a5a57; line-height:1.45; margin-bottom:1.25rem;">
            Our machine learning model analyzes mandi arrivals, rainfall patterns in supply belts, and festival demand to recommend the optimal selling window:
          </p>

          <!-- Price Bar Comparison Chart -->
          <div style="background:#ffffff; border:1px solid #dbeae8; border-radius:12px; padding:1.25rem; margin-bottom:1.25rem;">
            <div style="font-size:0.75rem; font-weight:700; color:#718280; text-transform:uppercase; margin-bottom:1rem; letter-spacing:0.5px;">
              Mandi Benchmark vs. Future Rate Forecast (₹/kg)
            </div>

            <!-- APMC Today -->
            <div style="margin-bottom:0.85rem;">
              <div style="display:flex; justify-content:space-between; font-size:0.8rem; margin-bottom:0.25rem;">
                <span style="color:#64748b; font-weight:600;">Traditional APMC Mandi Today (Middlemen)</span>
                <span style="color:#e11d48; font-weight:800;">₹${product.mandiRateToday} / kg</span>
              </div>
              <div style="height:12px; background:#f1f5f9; border-radius:999px; overflow:hidden;">
                <div style="height:100%; width:${(product.mandiRateToday / 65) * 100}%; background:#f43f5e; border-radius:999px;"></div>
              </div>
            </div>

            <!-- KISAN Direct Today -->
            <div style="margin-bottom:0.85rem;">
              <div style="display:flex; justify-content:space-between; font-size:0.8rem; margin-bottom:0.25rem;">
                <span style="color:#004c46; font-weight:700;">KISAN Direct Today (Fair Price)</span>
                <span style="color:#00665e; font-weight:800;">₹${product.askingPrice} / kg (+87.5%)</span>
              </div>
              <div style="height:12px; background:#eaf5f3; border-radius:999px; overflow:hidden;">
                <div style="height:100%; width:${(product.askingPrice / 65) * 100}%; background:#00665e; border-radius:999px;"></div>
              </div>
            </div>

            <!-- 7-Day Forecast -->
            <div style="margin-bottom:0.85rem;">
              <div style="display:flex; justify-content:space-between; font-size:0.8rem; margin-bottom:0.25rem;">
                <span style="color:#0369a1; font-weight:700;">AI Forecast: Next 7 Days (Supply Dip)</span>
                <span style="color:#0284c7; font-weight:800;">₹${product.forecast7Days} / kg (+15.5%)</span>
              </div>
              <div style="height:12px; background:#e0f2fe; border-radius:999px; overflow:hidden;">
                <div style="height:100%; width:${(product.forecast7Days / 65) * 100}%; background:#0284c7; border-radius:999px;"></div>
              </div>
            </div>

            <!-- 14-Day Forecast -->
            <div>
              <div style="display:flex; justify-content:space-between; font-size:0.8rem; margin-bottom:0.25rem;">
                <span style="color:#15803d; font-weight:700;">AI Forecast: 14 Days (Peak Festival Rate)</span>
                <span style="color:#16a34a; font-weight:800;">₹${product.forecast14Days} / kg (+28.8%)</span>
              </div>
              <div style="height:12px; background:#dcfce7; border-radius:999px; overflow:hidden;">
                <div style="height:100%; width:${(product.forecast14Days / 65) * 100}%; background:#16a34a; border-radius:999px;"></div>
              </div>
            </div>

          </div>

          <!-- AI Recommendation Alert Box -->
          <div style="background:#ffffff; border:1px solid #9ce9df; border-left:4px solid #00665e; border-radius:10px; padding:1rem; margin-bottom:1rem;">
            <div style="display:flex; align-items:center; gap:6px; font-weight:800; font-size:0.85rem; color:#004c46; margin-bottom:0.35rem;">
              ${IconSparkles(15)}
              <span>AI Recommendation: Stagger Dispatch for Peak Profit</span>
            </div>
            <p style="font-size:0.82rem; color:#2c3e3b; margin:0; line-height:1.45;">
              ${product.forecastAdvice}
            </p>
          </div>

          <div style="background:#eaf5f3; border-radius:8px; padding:0.65rem 0.85rem; font-size:0.78rem; color:#004c46; display:flex; align-items:center; justify-content:space-between;">
            <span>Projected Extra Profit on 500kg Lot:</span>
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
function renderStep4MarketNegotiation(product, negotiation) {
  const isAgreed = negotiation.status === 'agreed';
  const isCountered = negotiation.status === 'countered';

  return `
    <div>
      <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:flex-end; margin-bottom:1.75rem; gap:1rem; border-bottom:1px solid #eef3f2; padding-bottom:1.25rem;">
        <div>
          <div style="display:inline-flex; align-items:center; gap:6px; color:#00665e; background:#eaf5f3; padding:4px 12px; border-radius:999px; font-size:0.8rem; font-weight:700; margin-bottom:0.5rem;">
            <span>Step 4 of 7</span> &bull; <span>Marketplace Live & Negotiation</span>
          </div>
          <h2 style="font-size:1.85rem; font-weight:800; color:#1a2e2b; margin:0;">
            Produce Listed & Live Buyer Price Negotiation
          </h2>
          <p style="font-size:0.95rem; color:#5c6c69; margin:0.3rem 0 0;">
            Your produce is published live on KISAN. Buyers submit direct bids; farmers hold the pricing power.
          </p>
        </div>
        <div style="background:#eaf5f3; border:1px solid #9ce9df; border-radius:8px; padding:0.4rem 0.85rem; font-size:0.8rem; color:#004c46; font-weight:700; display:flex; align-items:center; gap:6px;">
          <span style="display:flex; align-items:center; color:#00665e;">${IconCheckCircle(16)}</span>
          <span>Live in Mumbai Wholesale & Consumer Catalog</span>
        </div>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1.15fr; gap:2rem; align-items:start;">
        
        <!-- Left: How the Buyer Views the Listing on KISAN -->
        <div style="background:#ffffff; border:1px solid #e2ecea; border-radius:16px; overflow:hidden; box-shadow:0 4px 16px rgba(0,0,0,0.04);">
          <div style="position:relative;">
            <img src="${product.image}" alt="${product.title}" style="width:100%; height:200px; object-fit:cover;">
            <div style="position:absolute; top:12px; left:12px; background:rgba(0,51,46,0.9); color:#ffffff; font-size:0.75rem; font-weight:700; padding:4px 10px; border-radius:6px;">
              500 KG LOT &bull; GRADE-A
            </div>
            <div style="position:absolute; bottom:12px; right:12px; background:#ffffff; color:#00665e; font-size:0.85rem; font-weight:800; padding:4px 10px; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.15);">
              ₹${product.askingPrice} / kg Asking
            </div>
          </div>

          <div style="padding:1.25rem;">
            <div style="font-size:0.75rem; font-weight:700; color:#00665e; text-transform:uppercase; margin-bottom:0.25rem;">
              Direct from Farmer Rajesh Patil &bull; Pimpalgaon Nashik
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
                <div style="color:#718280;">Mandi APMC Rate</div>
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
                Verified Institutional Commercial Buyer
              </div>
              <h3 style="font-size:1.15rem; font-weight:800; color:#1a2e2b; margin:0.15rem 0 0;">
                ${negotiation.buyerName}
              </h3>
            </div>
            <span style="background:#eaf5f3; color:#00665e; font-size:0.72rem; font-weight:700; padding:3px 8px; border-radius:999px;">
              GST & FSSAI Verified
            </span>
          </div>

          <!-- Negotiation Message Thread -->
          <div style="display:flex; flex-direction:column; gap:0.85rem; margin-bottom:1.5rem;">
            
            <!-- Farmer Initial Asking Price -->
            <div style="align-self:flex-end; max-width:85%; background:#00665e; color:#ffffff; padding:0.85rem 1rem; border-radius:14px 14px 2px 14px; font-size:0.85rem; box-shadow:0 2px 8px rgba(0,102,94,0.2);">
              <div style="font-size:0.7rem; color:#9ce9df; font-weight:700; margin-bottom:2px;">You (Farmer Rajesh Patil)</div>
              <div>Listed 500kg Grade-A Tomatoes at <strong>₹${negotiation.farmerAskingPrice}/kg</strong> (Total: ₹${(product.volume * negotiation.farmerAskingPrice).toLocaleString('en-IN')}).</div>
            </div>

            <!-- Buyer Initial Offer -->
            <div style="align-self:flex-start; max-width:85%; background:#f1f5f9; color:#1e293b; padding:0.85rem 1rem; border-radius:14px 14px 14px 2px; font-size:0.85rem; border:1px solid #e2e8f0;">
              <div style="font-size:0.7rem; color:#64748b; font-weight:700; margin-bottom:2px;">Subhash Commercial Kitchens (Buyer)</div>
              <div>"We need 500kg daily for central catering kitchens in Mumbai Vashi. Can offer <strong>₹${negotiation.buyerInitialOffer}/kg</strong> for instant dispatch tonight."</div>
              <div style="margin-top:4px; font-size:0.75rem; color:#0284c7; font-weight:700;">
                Buyer Initial Bid: ₹${(product.volume * negotiation.buyerInitialOffer).toLocaleString('en-IN')} (₹${negotiation.buyerInitialOffer}/kg)
              </div>
            </div>

            <!-- Counter-Offer Thread if Countered or Agreed -->
            ${isCountered || isAgreed ? `
              <div style="align-self:flex-end; max-width:85%; background:#004c46; color:#ffffff; padding:0.85rem 1rem; border-radius:14px 14px 2px 14px; font-size:0.85rem;">
                <div style="font-size:0.7rem; color:#9ce9df; font-weight:700; margin-bottom:2px;">You (Farmer Rajesh Patil)</div>
                <div>"These are Grade-A vine-ripened tomatoes, no storage rot. My counter is <strong>₹${negotiation.farmerCounterPrice}/kg</strong>. Deal?"</div>
              </div>

              <div style="align-self:flex-start; max-width:85%; background:#dcfce7; color:#166534; padding:0.85rem 1rem; border-radius:14px 14px 14px 2px; font-size:0.85rem; border:1px solid #bbf7d0;">
                <div style="font-size:0.7rem; color:#15803d; font-weight:700; margin-bottom:2px;">Subhash Commercial Kitchens (Buyer)</div>
                <div>"Agreed! <strong>₹${negotiation.agreedPrice}/kg</strong> for 500kg is fair. We have locked ₹${negotiation.totalAgreedAmount.toLocaleString('en-IN')} in KISAN Escrow."</div>
              </div>
            ` : ''}

          </div>

          <!-- Negotiation Action Box -->
          <div style="background:#ffffff; border:1px solid #d5e4e2; border-radius:14px; padding:1.25rem;">
            
            ${!isAgreed ? `
              <div style="margin-bottom:1rem;">
                <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:0.5rem;">
                  <span style="font-weight:700; color:#1a2e2b;">Your Counter-Offer Price:</span>
                  <span style="font-weight:800; color:#00665e;" id="demo-counter-preview-val">₹${negotiation.farmerCounterPrice} / kg (₹${(product.volume * negotiation.farmerCounterPrice).toLocaleString('en-IN')})</span>
                </div>
                <div style="display:flex; gap:8px;">
                  <input type="number" id="demo-counter-price-input" value="${negotiation.farmerCounterPrice}" min="35" max="50" class="c-input" style="width:110px; font-weight:800; font-size:1rem; color:#00665e;">
                  <button id="demo-submit-counter-btn" class="c-btn c-btn-primary" style="flex:1; font-weight:700;">
                    Send Counter-Offer (₹${negotiation.farmerCounterPrice}/kg)
                  </button>
                  <button id="demo-accept-initial-btn" class="c-btn c-btn-outline" style="font-weight:600; font-size:0.82rem;">
                    Accept ₹${negotiation.buyerInitialOffer}/kg
                  </button>
                </div>
              </div>
            ` : `
              <!-- Finalized Deal Success Badge -->
              <div style="background:#eaf5f3; border:2px solid #00665e; border-radius:12px; padding:1rem; margin-bottom:1.25rem; text-align:center;">
                <div style="display:inline-flex; align-items:center; gap:6px; color:#00665e; font-weight:800; font-size:1rem; margin-bottom:0.25rem;">
                  ${IconCheckCircle(20)}
                  <span>Deal Agreed & Confirmed at ₹${negotiation.agreedPrice}/kg!</span>
                </div>
                <div style="font-size:0.9rem; color:#2c3e3b;">
                  Total Transaction Value: <strong>₹${negotiation.totalAgreedAmount.toLocaleString('en-IN')}</strong> (500kg &times; ₹${negotiation.agreedPrice}/kg)
                </div>
                <div style="font-size:0.75rem; color:#00665e; font-weight:600; margin-top:0.25rem;">
                  Funds deposited into KISAN Digital Escrow &bull; Ready for Logistics
                </div>
              </div>

              <button id="demo-proceed-to-logistics-btn" class="c-btn c-btn-primary c-btn-block c-btn-lg" style="font-weight:800; font-size:1.05rem; padding:0.9rem; border-radius:10px; box-shadow:0 4px 14px rgba(0,102,94,0.3); display:flex; align-items:center; justify-content:center; gap:8px;">
                <span>Click Sell & Book Smart Logistics</span>
                ${IconArrowRight(18)}
              </button>
            `}

          </div>

          <div style="display:flex; justify-content:flex-start; margin-top:1rem;">
            <button id="demo-step4-back-btn" class="c-btn c-btn-outline c-btn-sm" style="font-weight:600;">
              &larr; Back to Produce Details
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
function renderStep5SmartLogistics(product, logistics) {
  return `
    <div>
      <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:flex-end; margin-bottom:1.75rem; gap:1rem; border-bottom:1px solid #eef3f2; padding-bottom:1.25rem;">
        <div>
          <div style="display:inline-flex; align-items:center; gap:6px; color:#00665e; background:#eaf5f3; padding:4px 12px; border-radius:999px; font-size:0.8rem; font-weight:700; margin-bottom:0.5rem;">
            <span>Step 5 of 7</span> &bull; <span>AI Smart Logistics</span>
          </div>
          <h2 style="font-size:1.85rem; font-weight:800; color:#1a2e2b; margin:0;">
            AI Intelligent Logistics & Vehicle Pairing
          </h2>
          <p style="font-size:0.95rem; color:#5c6c69; margin:0.3rem 0 0;">
            Our AI matches your 500kg cargo with the optimal vehicle, optimizes route efficiency, and cuts transport costs by 48.6%.
          </p>
        </div>
        <div style="background:#e0f2fe; border:1px solid #bae6fd; border-radius:8px; padding:0.4rem 0.85rem; font-size:0.8rem; color:#0369a1; font-weight:700; display:flex; align-items:center; gap:6px;">
          <span>${IconTruck(16)}</span>
          <span>Zero Transshipment Cold-Airflow Corridors</span>
        </div>
      </div>

      <!-- Core Intelligence Cards: Vehicle Match & Route Optimization -->
      <div style="display:grid; grid-template-columns:1.2fr 1fr; gap:1.75rem; margin-bottom:2rem;">
        
        <!-- Vehicle Capacity & Pairing Card -->
        <div style="background:#ffffff; border:2px solid #00665e; border-radius:18px; padding:1.75rem; box-shadow:0 8px 24px rgba(0,102,94,0.06); position:relative;">
          <div style="position:absolute; top:14px; right:14px; background:#00665e; color:#ffffff; font-size:0.7rem; font-weight:800; padding:3px 10px; border-radius:999px;">
            AI OPTIMAL MATCH
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
                Agri-Ventilated Mini-Truck &bull; GPS & IoT Cold Monitoring
              </div>
            </div>
          </div>

          <!-- Load Factor Gauge -->
          <div style="background:#f8faf9; border:1px solid #e2ecea; border-radius:14px; padding:1.25rem; margin-bottom:1.25rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
              <span style="font-size:0.85rem; font-weight:700; color:#1a2e2b;">Vehicle Payload Utilization:</span>
              <span style="font-size:1.1rem; font-weight:800; color:#00665e;">${logistics.loadFactorPercent}% Utilized</span>
            </div>

            <div style="height:16px; background:#e2ecea; border-radius:999px; overflow:hidden; position:relative; margin-bottom:0.75rem;">
              <div style="height:100%; width:${logistics.loadFactorPercent}%; background:linear-gradient(90deg, #004c46, #00665e); border-radius:999px;"></div>
            </div>

            <div style="display:flex; justify-content:space-between; font-size:0.78rem; color:#718280;">
              <span>Your Produce: <strong>${logistics.volumeKg} kg</strong> (25 crates)</span>
              <span>Truck Max Capacity: <strong>${logistics.vehicleCapacityKg} kg</strong></span>
            </div>
          </div>

          <div style="font-size:0.82rem; color:#4a5a57; line-height:1.45;">
            <strong>Why this match?</strong> A 500kg tomato load in an oversized 2-tonne truck causes crate bouncing and 12% bruising loss. The 650kg Tata Ace mini-truck perfectly holds 25 crates without stacking pressure, preventing transit spoilage.
          </div>
        </div>

        <!-- Optimized Corridor Route Card -->
        <div style="background:#fcfdfd; border:1px solid #e2ecea; border-radius:18px; padding:1.75rem;">
          <h3 style="font-size:1.05rem; font-weight:800; color:#1a2e2b; margin-bottom:1.25rem; display:flex; align-items:center; gap:8px;">
            <span style="color:#00665e;">${IconNavigation(18)}</span>
            <span>Optimized Express Transit Corridor</span>
          </h3>

          <div style="display:flex; flex-direction:column; gap:1rem; position:relative; padding-left:1.5rem; margin-bottom:1.25rem;">
            <!-- Vertical Line -->
            <div style="position:absolute; left:6px; top:12px; bottom:12px; width:2px; background:#00665e;"></div>

            <!-- Origin -->
            <div style="position:relative;">
              <div style="position:absolute; left:-1.5rem; top:2px; width:14px; height:14px; border-radius:50%; background:#00665e; border:3px solid #ffffff;"></div>
              <div style="font-size:0.75rem; color:#718280; font-weight:700; text-transform:uppercase;">Pickup Point</div>
              <div style="font-size:0.9rem; font-weight:800; color:#1a2e2b;">${logistics.routeFrom}</div>
            </div>

            <!-- Samruddhi Expressway Hub -->
            <div style="position:relative;">
              <div style="position:absolute; left:-1.5rem; top:2px; width:14px; height:14px; border-radius:50%; background:#9ce9df; border:3px solid #ffffff;"></div>
              <div style="font-size:0.75rem; color:#00665e; font-weight:700; text-transform:uppercase;">Green Corridor</div>
              <div style="font-size:0.85rem; font-weight:700; color:#2c3e3b;">Samruddhi Mahamarg Highway (Zero Traffic Jams)</div>
            </div>

            <!-- Destination -->
            <div style="position:relative;">
              <div style="position:absolute; left:-1.5rem; top:2px; width:14px; height:14px; border-radius:50%; background:#e11d48; border:3px solid #ffffff;"></div>
              <div style="font-size:0.75rem; color:#718280; font-weight:700; text-transform:uppercase;">Delivery Terminal</div>
              <div style="font-size:0.9rem; font-weight:800; color:#1a2e2b;">${logistics.routeTo}</div>
            </div>
          </div>

          <div style="display:flex; justify-content:space-between; background:#ffffff; border:1px solid #dbeae8; border-radius:10px; padding:0.75rem 1rem; font-size:0.82rem;">
            <div>
              <div style="color:#718280;">Distance</div>
              <strong style="color:#1a2e2b; font-size:0.95rem;">${logistics.distanceKm} km</strong>
            </div>
            <div>
              <div style="color:#718280;">Est. Travel Time</div>
              <strong style="color:#1a2e2b; font-size:0.95rem;">${logistics.transitTimeHours} hours</strong>
            </div>
            <div>
              <div style="color:#718280;">Mandi Delays Saved</div>
              <strong style="color:#00665e; font-size:0.95rem;">-4.5 hours</strong>
            </div>
          </div>
        </div>

      </div>

      <!-- Side-by-Side Logistics Cost Comparison Table -->
      <div style="background:#ffffff; border:1px solid #e2ecea; border-radius:18px; padding:1.75rem; margin-bottom:2rem; box-shadow:0 4px 16px rgba(0,0,0,0.03);">
        <h3 style="font-size:1.15rem; font-weight:800; color:#1a2e2b; margin-bottom:0.4rem;">
          Logistics Pricing Intelligence: KISAN vs. Traditional Middlemen
        </h3>
        <p style="font-size:0.85rem; color:#5c6c69; margin-bottom:1.25rem;">
          Direct aggregate fleet contracts eliminate local trucking cartels and brokerage surcharges.
        </p>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem;">
          
          <!-- KISAN Smart Logistics -->
          <div style="background:#f4faf8; border:2px solid #00665e; border-radius:14px; padding:1.25rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
              <span style="font-size:0.85rem; font-weight:800; color:#00665e; text-transform:uppercase; letter-spacing:0.5px;">
                KISAN AI Logistics
              </span>
              <span style="background:#00665e; color:#ffffff; font-size:0.68rem; font-weight:800; padding:2px 7px; border-radius:4px;">
                CHEAPEST PRICE
              </span>
            </div>
            <div style="display:flex; align-items:baseline; gap:6px; margin-bottom:0.5rem;">
              <span style="font-size:2rem; font-weight:900; color:#00665e;">₹${logistics.kcPartnerCost.toLocaleString('en-IN')}</span>
              <span style="font-size:0.85rem; color:#004c46; font-weight:700;">(Only ₹${logistics.kcPerKgCost}/kg)</span>
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
                Traditional Mandi Truckers
              </span>
              <span style="background:#fee2e2; color:#991b1b; font-size:0.68rem; font-weight:700; padding:2px 7px; border-radius:4px;">
                CARTEL PRICING
              </span>
            </div>
            <div style="display:flex; align-items:baseline; gap:6px; margin-bottom:0.5rem;">
              <span style="font-size:2rem; font-weight:900; color:#e11d48; text-decoration:line-through;">₹${logistics.traditionalMandiTruckCost.toLocaleString('en-IN')}</span>
              <span style="font-size:0.85rem; color:#991b1b; font-weight:700;">(₹${logistics.traditionalPerKgCost}/kg)</span>
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
            Farmer Transport Savings on This Single 500kg Dispatch:
          </div>
          <strong style="font-size:1.15rem; color:#00665e;">
            Save ₹${logistics.savingsAmount.toLocaleString('en-IN')} (${logistics.savingsPercent}% Cheaper!)
          </strong>
        </div>
      </div>

      <!-- Action Footer -->
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <button id="demo-step5-back-btn" class="c-btn c-btn-outline" style="font-weight:600;">
          &larr; Back to Negotiation
        </button>
        <button id="demo-book-logistics-btn" class="c-btn c-btn-primary c-btn-lg" style="font-weight:800; padding:0.85rem 2rem; border-radius:10px; box-shadow:0 4px 14px rgba(0,102,94,0.25);">
          Confirm & Book AI Smart Logistics &rarr;
        </button>
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// STEP 6: TOTAL PROFIT REALIZATION & DISINTERMEDIATION IMPACT
// -------------------------------------------------------------
function renderStep6ProfitImpact(negotiation, logistics) {
  // Traditional APMC economics on 500kg
  const traditionalGross = 24 * 500; // 12,000
  const arhatiyaFee = Math.round(traditionalGross * 0.08); // 960
  const mandiCess = 400;
  const traditionalTransport = 3600;
  const damageWeightCut = 1200; // 10% weight cuts & damage
  const traditionalNet = traditionalGross - (arhatiyaFee + mandiCess + traditionalTransport + damageWeightCut); // 5,840 (Rs 11.68/kg)

  // KISAN economics on 500kg
  const kcGross = negotiation.totalAgreedAmount; // 21,500 (43 * 500)
  const kcCommission = 0; // ZERO COMMISSION!
  const kcTransport = logistics.kcPartnerCost; // 1,850
  const kcEscrowInsurance = 300;
  const kcNet = kcGross - (kcTransport + kcEscrowInsurance); // 19,350 (Rs 38.70/kg)

  const farmerGain = kcNet - traditionalNet; // 13,510
  const profitPercentageGain = Math.round((farmerGain / traditionalNet) * 100); // +231%

  return `
    <div>
      <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:flex-end; margin-bottom:1.75rem; gap:1rem; border-bottom:1px solid #eef3f2; padding-bottom:1.25rem;">
        <div>
          <div style="display:inline-flex; align-items:center; gap:6px; color:#00665e; background:#eaf5f3; padding:4px 12px; border-radius:999px; font-size:0.8rem; font-weight:700; margin-bottom:0.5rem;">
            <span>Step 6 of 7</span> &bull; <span>Farmer Profit Realization</span>
          </div>
          <h2 style="font-size:1.85rem; font-weight:800; color:#1a2e2b; margin:0;">
            Total Profits Realized: +${profitPercentageGain}% Over Traditional Mandis
          </h2>
          <p style="font-size:0.95rem; color:#5c6c69; margin:0.3rem 0 0;">
            See the definitive financial breakdown comparing traditional middleman exploitation vs. KISAN direct trade.
          </p>
        </div>
        <div style="background:#dcfce7; border:1px solid #86efac; border-radius:8px; padding:0.4rem 0.85rem; font-size:0.85rem; color:#166534; font-weight:800;">
          +₹${farmerGain.toLocaleString('en-IN')} Extra in Farmer Bank Account
        </div>
      </div>

      <!-- Mega Profit Comparison Grid -->
      <div style="display:grid; grid-template-columns:1fr 1.15fr; gap:2rem; margin-bottom:2rem; align-items:stretch;">
        
        <!-- Exploitative APMC Mandi System -->
        <div style="background:#fff9fa; border:1px solid #fecdd3; border-radius:18px; padding:1.75rem; display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <div style="display:inline-block; background:#ffe4e6; color:#9f1239; font-size:0.75rem; font-weight:800; padding:3px 10px; border-radius:999px; margin-bottom:0.75rem; text-transform:uppercase;">
              Status Quo (APMC Mandis)
            </div>
            <h3 style="font-size:1.25rem; font-weight:800; color:#9f1239; margin-bottom:0.25rem;">
              Middleman Commission Channel
            </h3>
            <p style="font-size:0.82rem; color:#64748b; margin-bottom:1.25rem;">
              500kg tomatoes sold at local Nashik APMC yard through Arhatiya commission agents:
            </p>

            <div style="display:flex; flex-direction:column; gap:0.65rem; font-size:0.85rem; margin-bottom:1.5rem;">
              <div style="display:flex; justify-content:space-between; color:#475569;">
                <span>Gross Mandi Price (₹24/kg &times; 500kg):</span>
                <strong style="color:#1e293b;">₹${traditionalGross.toLocaleString('en-IN')}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; color:#e11d48;">
                <span>Arhatiya Commission (8% cut):</span>
                <strong>-₹${arhatiyaFee.toLocaleString('en-IN')}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; color:#e11d48;">
                <span>Hamali, Weighment & Mandi Cess:</span>
                <strong>-₹${mandiCess.toLocaleString('en-IN')}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; color:#e11d48;">
                <span>Middleman Truck Freight:</span>
                <strong>-₹${traditionalTransport.toLocaleString('en-IN')}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; color:#e11d48;">
                <span>Unloading Damage & Weight Cut (10%):</span>
                <strong>-₹${damageWeightCut.toLocaleString('en-IN')}</strong>
              </div>
            </div>
          </div>

          <div style="background:#ffffff; border:1px solid #fecdd3; border-radius:12px; padding:1.25rem; text-align:center;">
            <div style="font-size:0.75rem; color:#64748b; font-weight:700; text-transform:uppercase;">
              Traditional Farmer Take-Home Cash
            </div>
            <div style="font-size:2.25rem; font-weight:900; color:#e11d48; line-height:1.1; margin:0.25rem 0;">
              ₹${traditionalNet.toLocaleString('en-IN')}
            </div>
            <div style="font-size:0.8rem; color:#64748b; font-weight:600;">
              Effective Realization: only <strong>₹${(traditionalNet / 500).toFixed(2)} / kg</strong>
            </div>
          </div>
        </div>

        <!-- Transformative KISAN Direct Platform -->
        <div style="background:#f4faf8; border:2px solid #00665e; border-radius:18px; padding:1.75rem; display:flex; flex-direction:column; justify-content:space-between; box-shadow:0 8px 24px rgba(0,102,94,0.1);">
          <div>
            <div style="display:inline-block; background:#00665e; color:#ffffff; font-size:0.75rem; font-weight:800; padding:3px 10px; border-radius:999px; margin-bottom:0.75rem; text-transform:uppercase;">
              KISAN Impact
            </div>
            <h3 style="font-size:1.25rem; font-weight:800; color:#004c46; margin-bottom:0.25rem;">
              Direct Trade + AI Logistics Channel
            </h3>
            <p style="font-size:0.82rem; color:#4a5a57; margin-bottom:1.25rem;">
              500kg tomatoes sold directly to Subhash Commercial Kitchens at negotiated price:
            </p>

            <div style="display:flex; flex-direction:column; gap:0.65rem; font-size:0.85rem; margin-bottom:1.5rem;">
              <div style="display:flex; justify-content:space-between; color:#1a2e2b;">
                <span>Negotiated Final Price (₹${negotiation.agreedPrice}/kg &times; 500kg):</span>
                <strong style="color:#00665e; font-size:1rem;">₹${kcGross.toLocaleString('en-IN')}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; color:#00665e; font-weight:700;">
                <span>Middleman Commission Agents:</span>
                <span>₹0 (ZERO COMMISSION!)</span>
              </div>
              <div style="display:flex; justify-content:space-between; color:#4a5a57;">
                <span>AI Smart Logistics (Tata Ace Mini-Truck):</span>
                <strong>-₹${kcTransport.toLocaleString('en-IN')}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; color:#4a5a57;">
                <span>Digital Escrow & Optical Quality Audit:</span>
                <strong>-₹${kcEscrowInsurance.toLocaleString('en-IN')}</strong>
              </div>
              <div style="display:flex; justify-content:space-between; color:#00665e; font-weight:700;">
                <span>Transit Produce Loss / Spoilage:</span>
                <span>0% (Crate Protection)</span>
              </div>
            </div>
          </div>

          <div style="background:#ffffff; border:2px solid #00665e; border-radius:12px; padding:1.25rem; text-align:center;">
            <div style="font-size:0.75rem; color:#00665e; font-weight:800; text-transform:uppercase; letter-spacing:0.5px;">
              Net Direct Bank Payout to Farmer Rajesh Patil
            </div>
            <div style="font-size:2.35rem; font-weight:900; color:#00665e; line-height:1.1; margin:0.25rem 0;">
              ₹${kcNet.toLocaleString('en-IN')}
            </div>
            <div style="font-size:0.82rem; color:#004c46; font-weight:700;">
              Effective Realization: <strong>₹${(kcNet / 500).toFixed(2)} / kg</strong> &bull; (+231% Increase)
            </div>
          </div>
        </div>

      </div>

      <!-- Impact Summary for Judges -->
      <div style="background:linear-gradient(135deg, #00332e, #00665e); color:#ffffff; border-radius:16px; padding:1.5rem 1.75rem; margin-bottom:2rem; display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:1.25rem;">
        <div>
          <div style="font-size:0.75rem; font-weight:700; color:#9ce9df; text-transform:uppercase; margin-bottom:0.25rem;">
            Key Financial Advantage (The KISAN Economic Revolution):
          </div>
          <div style="font-size:1.1rem; font-weight:800;">
            1. Farmer earned <span style="color:#9ce9df;">+₹${farmerGain.toLocaleString('en-IN')} more</span> on just 1 mini-truck dispatch.<br>
            2. Buyer paid ₹43/kg vs Mumbai city wholesale mandi rate of ₹55/kg (Buyer saved ₹6,000).<br>
            3. Pure disintermediation where money flows to the producer, not rent-seeking cartels.
          </div>
        </div>
      </div>

      <!-- Action Footer -->
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <button id="demo-step6-back-btn" class="c-btn c-btn-outline" style="font-weight:600;">
          &larr; Back to Logistics
        </button>
        <button id="demo-proceed-to-tracking-btn" class="c-btn c-btn-primary c-btn-lg" style="font-weight:800; padding:0.85rem 2rem; border-radius:10px; box-shadow:0 4px 14px rgba(0,102,94,0.3);">
          View Amazon-Style Real-time Delivery Status &rarr;
        </button>
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// STEP 7: AMAZON-STYLE REAL-TIME STATUS TRACKER
// -------------------------------------------------------------
function renderStep7LiveTracking(product, logistics, currentStage) {
  const stages = [
    {
      id: 1,
      title: 'Order Confirmed & Escrow Funded',
      desc: 'Buyer deposited ₹21,500 into KISAN RBI-compliant digital escrow account.',
      time: 'Today, 08:30 AM',
      location: 'Digital Platform Escrow Vault',
      icon: IconCheckCircle
    },
    {
      id: 2,
      title: 'Tata Ace Mini-Truck Dispatched to Farm Gate',
      desc: 'Vehicle MH-15-EG-4920 assigned. Driver Sachin Gaikwad dispatched to Pimpalgaon packhouse.',
      time: 'Today, 09:15 AM',
      location: 'Nashik Logistics Hub',
      icon: IconTruck
    },
    {
      id: 3,
      title: 'Produce Picked Up & Digital Weighment Done',
      desc: '25 crates (500kg) loaded. Digital tare weighment signed via mobile app by Farmer Rajesh Patil.',
      time: 'Today, 10:45 AM',
      location: 'Pimpalgaon Baswant Farm Gate',
      icon: IconLeaf
    },
    {
      id: 4,
      title: 'Arrived at Village Aggregation & Quality Centre',
      desc: 'Automated optical grading passed: Grade-A firm, Brix 4.8 sweetness, zero surface bruising.',
      time: 'Today, 11:30 AM',
      location: 'KISAN Nashik Sorting Hub',
      icon: IconShield
    },
    {
      id: 5,
      title: 'Highway Express Transit via Samruddhi Corridor',
      desc: 'Truck en route to Mumbai at 64 km/h. Cargo compartment temperature IoT steady at 16°C.',
      time: 'Today, 01:20 PM',
      location: 'Igatpuri Expressway Stretch (110 km to destination)',
      icon: IconNavigation
    },
    {
      id: 6,
      title: 'Arrived at Mumbai Vashi Wholesale Terminal Hub',
      desc: 'Vehicle safely docked at Bay 4. Security seal intact. Gate entry scan verified.',
      time: 'Today, 02:45 PM',
      location: 'Mumbai APMC Agricultural Terminal Gate',
      icon: IconBuilding
    },
    {
      id: 7,
      title: 'Delivered to Buyer & Digital POD Signed',
      desc: 'Subhash Commercial Kitchens manager inspected produce crates and OTP confirmed delivery.',
      time: 'Today, 03:15 PM',
      location: 'Subhash Central Kitchen Hub, Vashi',
      icon: IconCheck
    },
    {
      id: 8,
      title: 'Instant Direct DBT / UPI Bank Payout Credited',
      desc: '₹19,350 net earnings instantly transferred to Farmer Rajesh Patil SBI Account (ending 8812) via NPCI DBT!',
      time: 'Today, 03:16 PM',
      location: 'State Bank of India (Direct Farmer A/C)',
      icon: IconCoins
    }
  ];

  return `
    <div>
      <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:flex-end; margin-bottom:1.75rem; gap:1rem; border-bottom:1px solid #eef3f2; padding-bottom:1.25rem;">
        <div>
          <div style="display:inline-flex; align-items:center; gap:6px; color:#00665e; background:#eaf5f3; padding:4px 12px; border-radius:999px; font-size:0.8rem; font-weight:700; margin-bottom:0.5rem;">
            <span>Step 7 of 7</span> &bull; <span>Live Delivery & Payment Tracking</span>
          </div>
          <h2 style="font-size:1.85rem; font-weight:800; color:#1a2e2b; margin:0;">
            Amazon-Style Real-time Order & Payout Tracker
          </h2>
          <p style="font-size:0.95rem; color:#5c6c69; margin:0.3rem 0 0;">
            Transparent tracking from farm-gate pickup through the highway green corridor to instant direct bank transfer.
          </p>
        </div>

        <!-- Interactive Simulation Buttons -->
        <div style="display:flex; gap:0.5rem; align-items:center;">
          <button id="demo-advance-stage-btn" class="c-btn c-btn-primary c-btn-sm" style="font-weight:700; padding:0.55rem 1rem; border-radius:8px; display:inline-flex; align-items:center; gap:6px;">
            ${IconPlay(14)}
            <span>Simulate Next Stage (${currentStage}/8)</span>
          </button>
          <button id="demo-reset-stage-btn" class="c-btn c-btn-outline c-btn-sm" style="font-weight:600; padding:0.55rem 0.85rem; border-radius:8px;" title="Reset tracking to Stage 1">
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
                <div style="width:40px; height:40px; border-radius:50%; background:${isCompleted ? '#00665e' : '#f1f5f4'}; color:${isCompleted ? '#ffffff' : '#94a3a1'}; border:3px solid ${isCurrent ? '#9ce9df' : '#ffffff'}; box-shadow:${isCurrent ? '0 0 0 3px #00665e' : '0 2px 6px rgba(0,0,0,0.1)'}; display:flex; align-items:center; justify-content:center; flex-shrink:0; position:relative; z-index:2; transition:all 0.3s;">
                  ${st.icon(18)}
                </div>

                <!-- Status Text & Details -->
                <div style="flex:1; padding-top:2px;">
                  <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:baseline; gap:8px; margin-bottom:0.25rem;">
                    <h4 style="font-size:1rem; font-weight:800; color:${isCompleted ? '#1a2e2b' : '#8c9c99'}; margin:0;">
                      ${st.title}
                      ${isCurrent ? '<span style="background:#00665e; color:#ffffff; font-size:0.65rem; font-weight:700; padding:2px 7px; border-radius:4px; margin-left:8px; vertical-align:middle;">ACTIVE NOW</span>' : ''}
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
            End-to-End Workflow Demonstration Complete
          </h3>
          <p style="font-size:0.9rem; color:#4a5a57; margin:0;">
            KISAN bridges the entire journey: from farm-gate listing and AI price timing, to buyer deal closure, smart logistics, and instant direct bank settlement.
          </p>
        </div>

        <div style="display:flex; gap:0.75rem;">
          <button id="demo-restart-entire-btn" class="c-btn c-btn-primary" style="font-weight:700; padding:0.75rem 1.5rem; border-radius:10px;">
            Restart Demo from Step 1 &rarr;
          </button>
          <a href="#/direct-from-farmer" class="c-btn c-btn-outline" style="font-weight:600; padding:0.75rem 1.25rem; border-radius:10px; text-decoration:none;">
            Explore Public Marketplace
          </a>
        </div>
      </div>

    </div>
  `;
}

// -------------------------------------------------------------
// EVENT LISTENERS FOR INTERACTIVE DEMO WORKFLOW
// -------------------------------------------------------------
export function attachDemoWorkflowListeners() {
  // Step Jump Buttons
  document.querySelectorAll('.demo-step-jump-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const stepTarget = parseInt(btn.dataset.step, 10);
      if (stepTarget) {
        store.setDemoStep(stepTarget);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
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

    store.showToast('Produce published live to KISAN Marketplace!', 'success');
    store.setDemoStep(4);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.getElementById('demo-step3-back-btn')?.addEventListener('click', () => {
    store.setDemoStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // STEP 4: Marketplace Negotiation Listeners
  const counterInput = document.getElementById('demo-counter-price-input');
  counterInput?.addEventListener('input', (e) => {
    const val = parseInt(e.target.value, 10) || 43;
    const previewEl = document.getElementById('demo-counter-preview-val');
    if (previewEl) {
      previewEl.textContent = `₹${val} / kg (₹${(500 * val).toLocaleString('en-IN')})`;
    }
  });

  document.getElementById('demo-submit-counter-btn')?.addEventListener('click', () => {
    const val = parseInt(document.getElementById('demo-counter-price-input')?.value, 10) || 43;
    store.updateDemoNegotiation({
      farmerCounterPrice: val,
      agreedPrice: val,
      totalAgreedAmount: 500 * val,
      status: 'agreed'
    });
    store.showToast(`Buyer accepted counter-offer of ₹${val}/kg! Total: ₹${(500 * val).toLocaleString('en-IN')}`, 'success');
  });

  document.getElementById('demo-accept-initial-btn')?.addEventListener('click', () => {
    store.updateDemoNegotiation({
      agreedPrice: 41,
      totalAgreedAmount: 500 * 41,
      status: 'agreed'
    });
    store.showToast('Accepted initial offer of ₹41/kg from buyer', 'info');
  });

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
    store.setDemoStep(7);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.getElementById('demo-step6-back-btn')?.addEventListener('click', () => {
    store.setDemoStep(5);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // STEP 7: Amazon-Style Tracking Simulator
  document.getElementById('demo-advance-stage-btn')?.addEventListener('click', () => {
    store.advanceDemoTrackingStage();
  });

  document.getElementById('demo-reset-stage-btn')?.addEventListener('click', () => {
    store.setDemoTrackingStage(1);
    store.showToast('Tracking reset to Stage 1: Order Confirmed', 'info');
  });

  document.getElementById('demo-restart-entire-btn')?.addEventListener('click', () => {
    store.resetDemoWorkflow();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
