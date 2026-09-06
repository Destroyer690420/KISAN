import { store } from '../state/store.js';

export function renderAuthModal() {
  const state = store.getState();
  const isOpen = state.isAuthModalOpen;
  const isSignIn = state.authMode === 'signin';

  return `
    <div id="auth-modal-backdrop" class="modal-backdrop ${isOpen ? 'open' : ''}">
      <div class="modal-dialog" style="max-width:460px;">
        <button id="close-auth-modal" class="modal-close-btn" aria-label="Close auth dialog">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>

        <!-- Brand logo header -->
        <div style="text-align:center; margin-bottom:1.25rem;">
          <div style="display:flex; justify-content:center; margin-bottom:0.4rem;">
            <img src="/logo.png" alt="KISAN" style="height:44px; object-fit:contain;" />
          </div>
          <p class="body-sm">Direct, fair food chain from organic farmers</p>
        </div>

        <!-- Judge Workflow Quick Access Callout -->
        <div style="background:#eaf4f2; border:1px solid #c2e2dd; border-radius:12px; padding:0.85rem 1rem; margin-bottom:1.25rem; display:flex; align-items:center; justify-content:space-between; gap:12px;">
          <div>
            <div style="font-size:0.75rem; font-weight:700; color:#00665e; text-transform:uppercase; letter-spacing:0.5px;">Platform Demo Workflow</div>
            <div style="font-size:0.8rem; color:#2c3e3b; font-weight:600;">Full Farmer &rarr; Logistics &rarr; Payout Flow</div>
          </div>
          <a href="#/demo" id="auth-launch-demo-btn" class="c-btn c-btn-primary c-btn-sm" style="font-size:0.75rem; padding:0.4rem 0.85rem; border-radius:999px; text-decoration:none; white-space:nowrap;">
            Launch Demo &rarr;
          </a>
        </div>

        <!-- Mode switcher tabs -->
        <div style="display:flex; background-color:#f3f6f6; border-radius:999px; padding:0.3rem; margin-bottom:1.75rem;">
          <button id="auth-tab-signin" class="order-mode-tab ${isSignIn ? 'active' : ''}" style="flex:1;">Sign In</button>
          <button id="auth-tab-signup" class="order-mode-tab ${!isSignIn ? 'active' : ''}" style="flex:1;">Create Account</button>
        </div>

        <!-- Form -->
        <form id="auth-form" style="display:flex; flex-direction:column; gap:1rem;">
          ${!isSignIn ? `
            <div>
              <label class="label-sm-default" style="display:block; margin-bottom:0.35rem; font-weight:700;">Your Name</label>
              <input type="text" id="auth-name" required placeholder="Aarav Sharma" class="c-input">
            </div>
          ` : ''}

          <div>
            <label class="label-sm-default" style="display:block; margin-bottom:0.35rem; font-weight:700;">Email address</label>
            <input type="email" id="auth-email" required placeholder="aarav@example.com" class="c-input">
          </div>

          <div>
            <div style="display:flex; justify-content:space-between; margin-bottom:0.35rem;">
              <label class="label-sm-default" style="font-weight:700;">Password</label>
              ${isSignIn ? '<a href="#/contact" style="font-size:0.75rem; color:#00665e;">Forgot password?</a>' : ''}
            </div>
            <input type="password" id="auth-password" required placeholder="••••••••" class="c-input">
          </div>

          <button type="submit" class="c-btn c-btn-primary c-btn-block c-btn-lg" style="margin-top:0.5rem;">
            ${isSignIn ? 'Sign In to KISAN' : 'Create Free Account'}
          </button>
        </form>

        <div style="display:flex; align-items:center; gap:0.5rem; margin:1.5rem 0; color:#929a99; font-size:0.8rem;">
          <div style="flex:1; height:1px; background:#eef2f2;"></div>
          <span>OR</span>
          <div style="flex:1; height:1px; background:#eef2f2;"></div>
        </div>

        <!-- Social button -->
        <button id="auth-google-btn" class="c-btn c-btn-outline c-btn-block" style="border-color:#d6e0df; color:#1a1c1c; font-weight:600;">
          <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>
          Continue with Google
        </button>

        <div style="text-align:center; margin-top:1.5rem; font-size:0.8rem; color:#7d8483;">
          Are you an Indian Kisan? <a href="#/demo" id="auth-kisan-portal-link" style="color:#00665e; font-weight:700;">Kisan Partner Portal</a>
        </div>
      </div>
    </div>
  `;
}

export function attachAuthListeners() {
  const backdrop = document.getElementById('auth-modal-backdrop');
  const closeBtn = document.getElementById('close-auth-modal');
  const form = document.getElementById('auth-form');
  const tabSignIn = document.getElementById('auth-tab-signin');
  const tabSignUp = document.getElementById('auth-tab-signup');
  const googleBtn = document.getElementById('auth-google-btn');
  const launchDemoBtn = document.getElementById('auth-launch-demo-btn');
  const kisanPortalLink = document.getElementById('auth-kisan-portal-link');

  const close = () => store.setAuthModalOpen(false);

  closeBtn?.addEventListener('click', close);
  launchDemoBtn?.addEventListener('click', close);
  kisanPortalLink?.addEventListener('click', close);
  backdrop?.addEventListener('click', (e) => {
    if (e.target === backdrop) close();
  });

  tabSignIn?.addEventListener('click', () => {
    store.setAuthModalOpen(true, 'signin');
  });

  tabSignUp?.addEventListener('click', () => {
    store.setAuthModalOpen(true, 'signup');
  });

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('auth-email').value;
    const name = document.getElementById('auth-name')?.value || email.split('@')[0];
    store.setUser({ email, name });
    store.showToast(`Welcome back, ${name}!`, 'success');
    close();
  });

  googleBtn?.addEventListener('click', () => {
    store.setUser({ email: 'aarav.sharma@gmail.com', name: 'Aarav Sharma' });
    store.showToast('Signed in with Google!', 'success');
    close();
  });
}
