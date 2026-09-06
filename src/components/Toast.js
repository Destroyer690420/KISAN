import { store } from '../state/store.js';

export function renderToasts() {
  const { toasts } = store.getState();
  if (!toasts || toasts.length === 0) return '<div class="toast-container"></div>';

  return `
    <div class="toast-container">
      ${toasts.map(t => `
        <div class="toast toast-${t.type}">
          ${t.type === 'success' ? `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7fcbc2" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          ` : `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64aad0" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          `}
          <span>${t.message}</span>
        </div>
      `).join('')}
    </div>
  `;
}
