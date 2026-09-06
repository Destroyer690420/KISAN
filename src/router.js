import { renderHomePage, attachHomeListeners } from './pages/HomePage.js';
import { renderMarketPage, attachMarketListeners } from './pages/MarketPage.js';
import { renderBulkPage, attachBulkListeners } from './pages/BulkPage.js';
import { renderFpoNetworkPage } from './pages/FpoNetworkPage.js';
import { renderFairPricingPage } from './pages/FairPricingPage.js';
import { renderFarmerRegisterPage, attachFarmerRegisterListeners } from './pages/FarmerRegisterPage.js';
import { renderProductDetailPage, attachProductDetailListeners } from './pages/ProductDetailPage.js';
import { renderSubscriptionPage, attachSubscriptionListeners } from './pages/SubscriptionPage.js';
import { renderRegenerativePage } from './pages/RegenerativePage.js';
import { renderMembershipPage, attachMembershipListeners } from './pages/MembershipPage.js';
import { renderGiftCardPage, attachGiftCardListeners } from './pages/GiftCardPage.js';
import { renderSupportPage } from './pages/SupportPage.js';
import { renderTermsPage } from './pages/TermsPage.js';
import { renderDemoWorkflowPage, attachDemoWorkflowListeners, stopTrackingAutoAdvance } from './pages/DemoWorkflowPage.js';
import { store } from './state/store.js';

export function resolveRoute() {
  const hash = window.location.hash || '#/';
  const pathWithoutHash = hash.replace(/^#\/?/, '/');
  const [pathname, queryString] = pathWithoutHash.split('?');

  if (pathname === '/demo' || pathname === '/judge-demo' || pathname === '/workflow' || pathname === '/login') {
    const params = new URLSearchParams(queryString || '');
    const stepParam = parseInt(params.get('step'), 10);
    if (stepParam && stepParam >= 1 && stepParam <= 7) {
      if (stepParam === 7 && store.state.demoStep !== 7) {
        store.state.demoTrackingStage = 1;
      }
      store.state.demoStep = stepParam;
    }
    return {
      name: 'demo-workflow',
      render: renderDemoWorkflowPage,
      attach: attachDemoWorkflowListeners
    };
  }

  // Not on demo workflow route: cancel any tracking interval
  stopTrackingAutoAdvance();

  if (pathname === '/' || pathname === '') {
    return {
      name: 'home',
      render: renderHomePage,
      attach: attachHomeListeners
    };
  }

  if (pathname.startsWith('/product/')) {
    const slug = pathname.replace('/product/', '');
    return {
      name: 'product-detail',
      render: () => renderProductDetailPage(slug),
      attach: attachProductDetailListeners
    };
  }

  if (pathname === '/direct-from-farmer' || pathname === '/marketplace') {
    return {
      name: 'market',
      render: renderMarketPage,
      attach: attachMarketListeners
    };
  }

  if (pathname === '/bulk' || pathname === '/b2b') {
    return {
      name: 'bulk',
      render: renderBulkPage,
      attach: attachBulkListeners
    };
  }

  if (pathname === '/fpos' || pathname === '/fpo-network') {
    return {
      name: 'fpos',
      render: renderFpoNetworkPage,
      attach: () => {}
    };
  }

  if (pathname === '/fair-pricing' || pathname === '/price-index') {
    return {
      name: 'fair-pricing',
      render: renderFairPricingPage,
      attach: () => {}
    };
  }

  if (pathname === '/sell' || pathname === '/farmer-registration') {
    return {
      name: 'sell',
      render: renderFarmerRegisterPage,
      attach: attachFarmerRegisterListeners
    };
  }

  if (pathname === '/subscription-box') {
    return {
      name: 'subscription',
      render: renderSubscriptionPage,
      attach: attachSubscriptionListeners
    };
  }

  if (pathname === '/regenerative') {
    return {
      name: 'regenerative',
      render: renderRegenerativePage,
      attach: () => {}
    };
  }

  if (pathname === '/membership') {
    return {
      name: 'membership',
      render: renderMembershipPage,
      attach: attachMembershipListeners
    };
  }

  if (pathname === '/gift-card') {
    return {
      name: 'gift-card',
      render: renderGiftCardPage,
      attach: attachGiftCardListeners
    };
  }

  if (pathname === '/contact' || pathname === '/open-incident') {
    return {
      name: 'support',
      render: renderSupportPage,
      attach: () => {}
    };
  }

  if (pathname === '/tos') {
    return {
      name: 'terms',
      render: renderTermsPage,
      attach: () => {}
    };
  }

  // Fallback
  return {
    name: 'home',
    render: renderHomePage,
    attach: attachHomeListeners
  };
}
