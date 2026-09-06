import { store } from '../state/store.js';
import { products } from '../data/products.js';

function getFilteredProducts(query) {
  const q = (query || '').toLowerCase().trim();
  if (!q) return products.slice(0, 4);

  return products.filter(p =>
    p.title.toLowerCase().includes(q) ||
    (p.leadFarmer || '').toLowerCase().includes(q) ||
    (p.fpoName || '').toLowerCase().includes(q) ||
    (p.farmName || '').toLowerCase().includes(q) ||
    (p.state || '').toLowerCase().includes(q) ||
    (p.category || '').toLowerCase().includes(q) ||
    (p.description || '').toLowerCase().includes(q)
  );
}

function renderResultsHTML(filtered, query) {
  if (filtered.length === 0) {
    return `
      <div style="text-align:center; padding:2rem; color:#7d8483;">
        No produce found matching "${query}". Try searching for Alphonso, Ghee, Kesar, Sahyadri, or FPO names.
      </div>
    `;
  }

  return filtered.map(item => `
    <a href="#/product/${item.slug}" class="search-result-item" style="display:flex; align-items:center; gap:1rem; padding:0.75rem; border-radius:0.75rem; border:1px solid #eef2f2; text-decoration:none; color:inherit; transition:background-color 0.2s;">
      <img src="${item.images[0]}" alt="${item.title}" style="width:54px; height:54px; border-radius:0.5rem; object-fit:cover;">
      <div style="flex:1;">
        <div style="font-weight:700; font-size:0.95rem; color:#1a1c1c;">${item.title}</div>
        <div style="font-size:0.8rem; color:#00665e;">${item.fpoName} · ${item.state}</div>
      </div>
      <div style="text-align:right;">
        <div style="font-weight:700; color:#00665e;">${store.formatPrice(item.price)}</div>
        <span class="badge badge-adoption" style="font-size:0.65rem;">
          Bulk: ₹${item.bulkPrice}/${item.bulkUnit.split(' ')[0]}
        </span>
      </div>
    </a>
  `).join('');
}

export function renderSearchModal() {
  const state = store.getState();
  const isOpen = state.isSearchOpen;
  const initialQuery = state.searchQuery || '';
  const filtered = getFilteredProducts(initialQuery);

  return `
    <div id="search-modal-backdrop" class="modal-backdrop ${isOpen ? 'open' : ''}">
      <div class="modal-dialog" style="max-width:680px; padding:2rem;">
        <button id="close-search-modal" class="modal-close-btn" aria-label="Close search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>

        <div style="margin-bottom:1.5rem;">
          <h3 style="font-size:1.35rem; font-weight:700; color:#1a1c1c; margin-bottom:1rem;">Search Indian harvests, kisans & adoptions</h3>
          <div style="position:relative;">
            <input
              id="live-search-input"
              type="text"
              dir="ltr"
              placeholder="e.g. Sharbati Wheat, Basmati Rice, Fresh Tomatoes, Onions, Toor Dal, Alphonso..."
              value="${initialQuery}"
              class="c-input search-input-field"
              style="padding-left:2.75rem; padding-right:2.5rem; font-size:1.05rem; border-radius:999px; text-align:left !important; direction:ltr !important; unicode-bidi:normal !important; writing-mode:horizontal-tb !important;"
              autocomplete="off"
              spellcheck="false"
            >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#676d6c" stroke-width="2.2" style="position:absolute; left:1rem; top:50%; transform:translateY(-50%); pointer-events:none;">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
            <button
              id="clear-search-btn"
              type="button"
              aria-label="Clear search"
              style="position:absolute; right:1rem; top:50%; transform:translateY(-50%); background:#eef2f2; border:none; border-radius:50%; width:24px; height:24px; display:${initialQuery ? 'flex' : 'none'}; align-items:center; justify-content:center; cursor:pointer; color:#535858; line-height:1; transition:background 0.2s;"
            ><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
          </div>
        </div>

        <!-- Quick Indian Categories -->
        <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap; margin-bottom:1.5rem;">
          <span style="font-size:0.8rem; font-weight:700; color:#7d8483;">Popular:</span>
          <button class="search-tag-btn" data-query="wheat">Sharbati Wheat</button>
          <button class="search-tag-btn" data-query="rice">Basmati Rice</button>
          <button class="search-tag-btn" data-query="tomato">Fresh Tomatoes</button>
          <button class="search-tag-btn" data-query="onion">Red Onions</button>
          <button class="search-tag-btn" data-query="dal">Toor Dal</button>
          <button class="search-tag-btn" data-query="potato">Agra Potatoes</button>
          <button class="search-tag-btn" data-query="alphonso">Alphonso</button>
          <button class="search-tag-btn" data-query="ghee">A2 Ghee</button>
        </div>

        <!-- Results list -->
        <div>
          <div id="search-results-header" style="font-size:0.85rem; font-weight:700; color:#535858; margin-bottom:0.75rem;">
            ${initialQuery ? `Matching Indian Harvests (${filtered.length})` : 'Popular Seasonal Picks'}
          </div>

          <div id="search-results-container" style="display:flex; flex-direction:column; gap:0.75rem; max-height:360px; overflow-y:auto;">
            ${renderResultsHTML(filtered, initialQuery)}
          </div>
        </div>
      </div>
    </div>
  `;
}

export function attachSearchListeners() {
  const backdrop = document.getElementById('search-modal-backdrop');
  const closeBtn = document.getElementById('close-search-modal');
  const input = document.getElementById('live-search-input');
  const clearBtn = document.getElementById('clear-search-btn');
  const resultsContainer = document.getElementById('search-results-container');
  const resultsHeader = document.getElementById('search-results-header');

  const close = () => store.setSearchOpen(false);

  closeBtn?.addEventListener('click', close);
  backdrop?.addEventListener('click', (e) => {
    if (e.target === backdrop) close();
  });

  const performSearch = (q) => {
    store.state.searchQuery = q;
    const filtered = getFilteredProducts(q);
    if (resultsHeader) {
      resultsHeader.textContent = q.trim()
        ? `Matching Indian Harvests (${filtered.length})`
        : 'Popular Seasonal Picks';
    }
    if (resultsContainer) {
      resultsContainer.innerHTML = renderResultsHTML(filtered, q);
    }
    if (clearBtn) {
      clearBtn.style.display = q ? 'flex' : 'none';
    }
    // Bind click listeners on new result links
    resultsContainer?.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', close);
    });
  };

  // Typeahead without re-rendering the whole page (prevents resetting caret to position 0)
  input?.addEventListener('input', (e) => {
    performSearch(e.target.value);
  });

  input?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const firstItem = resultsContainer?.querySelector('.search-result-item');
      if (firstItem) {
        firstItem.click();
      }
    }
  });

  clearBtn?.addEventListener('click', () => {
    if (input) {
      input.value = '';
      input.focus();
    }
    performSearch('');
  });

  document.querySelectorAll('.search-tag-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const q = e.target.getAttribute('data-query');
      if (input) {
        input.value = q;
        input.focus();
        input.setSelectionRange(q.length, q.length);
      }
      performSearch(q);
    });
  });

  resultsContainer?.querySelectorAll('.search-result-item').forEach(item => {
    item.addEventListener('click', close);
  });

  // Focus input at the end of text when modal opens
  if (store.getState().isSearchOpen && input) {
    setTimeout(() => {
      input.focus();
      const val = input.value;
      input.setSelectionRange(val.length, val.length);
    }, 50);
  }
}
