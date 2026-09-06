import { products as initialProducts } from '../data/products.js';

export const CURRENCIES = {
  INR: { symbol: '₹', rate: 1.0, name: 'Indian Rupee (₹)' }
};

export const INDIAN_REGIONS = [
  { code: 'MH', name: 'Maharashtra', city: 'Mumbai', pincode: '400001' },
  { code: 'KA', name: 'Karnataka', city: 'Bengaluru', pincode: '560001' },
  { code: 'DL', name: 'Delhi NCR', city: 'New Delhi', pincode: '110001' },
  { code: 'TN', name: 'Tamil Nadu', city: 'Chennai', pincode: '600001' },
  { code: 'TS', name: 'Telangana', city: 'Hyderabad', pincode: '500001' },
  { code: 'GJ', name: 'Gujarat', city: 'Ahmedabad', pincode: '380001' },
  { code: 'WB', name: 'West Bengal', city: 'Kolkata', pincode: '700001' },
  { code: 'KL', name: 'Kerala', city: 'Kochi', pincode: '682001' },
  { code: 'PB', name: 'Punjab & Haryana', city: 'Chandigarh', pincode: '160001' },
  { code: 'RJ', name: 'Rajasthan', city: 'Jaipur', pincode: '302001' },
  { code: 'UK', name: 'Uttarakhand', city: 'Dehradun', pincode: '248001' },
  { code: 'HP', name: 'Himachal Pradesh', city: 'Shimla', pincode: '171001' },
  { code: 'MP', name: 'Madhya Pradesh', city: 'Bhopal / Indore', pincode: '462001' },
  { code: 'AP', name: 'Andhra Pradesh', city: 'Visakhapatnam', pincode: '530001' },
  { code: 'UP', name: 'Uttar Pradesh', city: 'Lucknow / Agra', pincode: '226001' }
];

class Store {
  constructor() {
    this.state = {
      cart: this.loadStorage('kc_cart', this.loadStorage('cf_in_cart', [])),
      currency: 'INR',
      buyerMode: this.loadStorage('kc_buyer_mode', 'retail'), // 'retail' or 'bulk'
      selectedRegion: this.loadStorage('kc_region', this.loadStorage('cf_in_region', INDIAN_REGIONS[0])),
      pincode: this.loadStorage('kc_pincode', this.loadStorage('cf_in_pincode', '400001')),
      searchQuery: '',
      isCartOpen: false,
      isSearchOpen: false,
      isLocationModalOpen: false,
      isAuthModalOpen: false,
      authMode: 'signin',
      user: this.loadStorage('kc_user', this.loadStorage('cf_in_user', null)),
      isRfqModalOpen: false,
      rfqProduct: null,
      toasts: [],
      membershipSelectedPlan: 'annual',

      // Interactive Judge Demo Workflow State
      demoStep: this.loadStorage('kc_demo_step', 1), // 1: Role, 2: Farmer Profile, 3: Produce & Forecast, 4: Negotiation, 5: Logistics, 6: Profits, 7: Tracking
      demoRole: this.loadStorage('kc_demo_role', 'farmer'),
      demoFarmer: this.loadStorage('kc_demo_farmer', {
        name: 'Rajesh Patil',
        phone: '+91 98230 45120',
        location: 'Pimpalgaon Baswant, Nashik, Maharashtra',
        fpoName: 'Nashik Kisan Samruddhi Farmer Producer Co.',
        crops: 'Hybrid Tomatoes, Lasalgaon Onions, Table Grapes'
      }),
      demoProduct: this.loadStorage('kc_demo_product', {
        id: 'demo-fresh-tomatoes',
        title: 'Farm-Fresh Desi Hybrid Tomatoes (Grade-A Firm & Juicy)',
        slug: 'demo-fresh-tomatoes',
        category: 'vegetables',
        volume: 500, // kg
        unit: 'kg',
        askingPrice: 45, // Rs/kg
        finalPrice: 43,
        image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&auto=format&fit=crop&q=80',
        description: 'Naturally vine-ripened Grade-A tomatoes packed on demand at Pimpalgaon packhouse. Zero artificial carbide gas, pesticide residue tested.',
        mandiRateToday: 24,
        forecast7Days: 52,
        forecast14Days: 58,
        forecastAdvice: 'Nashik arrivals dropping 35% next week due to southern rains. High festival demand expected in Mumbai. Stagger dispatch across 6-8 days for +₹7/kg higher realization.'
      }),
      demoNegotiation: this.loadStorage('kc_demo_negotiation', {
        farmerAskingPrice: 45,
        buyerName: 'Subhash Commercial Wholesale Kitchens (Mumbai Vashi)',
        buyerInitialOffer: 41,
        farmerCounterPrice: 43,
        agreedPrice: 43,
        totalAgreedAmount: 21500, // 500 * 43
        status: 'agreed' // 'initial' | 'countered' | 'agreed'
      }),
      demoLogistics: this.loadStorage('kc_demo_logistics', {
        crop: 'Farm-Fresh Tomatoes',
        volumeKg: 500,
        cratesCount: 25,
        vehicleType: 'Tata Ace Gold CNG (Ventilated Agri-Crate Model)',
        vehicleCapacityKg: 650,
        loadFactorPercent: 77,
        routeFrom: 'Nashik Farm Gate Packhouse (Pimpalgaon)',
        routeTo: 'Mumbai Vashi Agricultural Terminal Hub',
        distanceKm: 168,
        transitTimeHours: 3.2,
        kcPartnerCost: 1850,
        kcPerKgCost: 3.70,
        traditionalMandiTruckCost: 3600,
        traditionalPerKgCost: 7.20,
        savingsAmount: 1750,
        savingsPercent: 48.6,
        isBooked: true
      }),
      demoTrackingStage: this.loadStorage('kc_demo_tracking_stage', 4), // 1 to 8
      customProducts: this.loadStorage('kc_custom_products', [])
    };
    this.listeners = new Set();
  }

  loadStorage(key, fallback) {
    try {
      if (typeof localStorage !== 'undefined') {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : fallback;
      }
      return fallback;
    } catch {
      return fallback;
    }
  }

  saveStorage(key, val) {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(val));
      }
    } catch (e) {
      console.error(e);
    }
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach(fn => fn(this.state));
  }

  getState() {
    return this.state;
  }

  formatPrice(amountInInr) {
    const num = Math.round(Number(amountInInr) || 0);
    return `₹${num.toLocaleString('en-IN')}`;
  }

  setBuyerMode(mode) {
    this.state.buyerMode = mode;
    this.saveStorage('kc_buyer_mode', mode);
    this.showToast(
      mode === 'bulk'
        ? 'Switched to Bulk B2B Wholesale Mode (FPO Crates & Quintals)'
        : 'Switched to Household Retail Mode',
      'info'
    );
    this.notify();
  }

  addToCart(item) {
    const existingIndex = this.state.cart.findIndex(
      ci => ci.id === item.id && ci.size === item.size && ci.isBulk === item.isBulk
    );

    let newCart = [...this.state.cart];
    if (existingIndex > -1) {
      newCart[existingIndex].quantity += (item.quantity || 1);
    } else {
      newCart.push({
        ...item,
        quantity: item.quantity || 1
      });
    }

    this.state.cart = newCart;
    this.saveStorage('kc_cart', newCart);
    this.state.isCartOpen = true;
    this.showToast(`Added "${item.title}" to your harvest basket!`, 'success');
    this.notify();
  }

  updateCartQuantity(index, quantity) {
    let newCart = [...this.state.cart];
    if (quantity <= 0) {
      newCart.splice(index, 1);
      this.showToast('Item removed from basket', 'info');
    } else {
      newCart[index].quantity = quantity;
    }
    this.state.cart = newCart;
    this.saveStorage('kc_cart', newCart);
    this.notify();
  }

  clearCart() {
    this.state.cart = [];
    this.saveStorage('kc_cart', []);
    this.notify();
  }

  getCartCount() {
    return this.state.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  getCartSubtotal() {
    return this.state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  getCartFarmerDirectPayout() {
    // Calculates total money that goes directly to the kisan / FPO (approx 65% retail, 80% bulk)
    return this.state.cart.reduce((sum, item) => {
      const rate = item.isBulk ? 0.82 : 0.65;
      return sum + Math.round(item.price * item.quantity * rate);
    }, 0);
  }

  getCartEstimatedBuyerSavings() {
    // Calculates buyer savings vs traditional supermarkets / city wholesale markups (approx 22% retail, 45% bulk)
    return this.state.cart.reduce((sum, item) => {
      const savingRate = item.isBulk ? 0.45 : 0.22;
      return sum + Math.round(item.price * item.quantity * savingRate);
    }, 0);
  }

  setRegion(regionCode, pincode = '') {
    const found = INDIAN_REGIONS.find(r => r.code === regionCode);
    if (found) {
      this.state.selectedRegion = found;
      this.state.pincode = pincode || found.pincode;
      this.saveStorage('kc_region', found);
      this.saveStorage('kc_pincode', this.state.pincode);
      this.notify();
    }
  }

  setSearchOpen(isOpen) {
    this.state.isSearchOpen = isOpen;
    this.notify();
  }

  setCartOpen(isOpen) {
    this.state.isCartOpen = isOpen;
    this.notify();
  }

  setLocationModalOpen(isOpen) {
    this.state.isLocationModalOpen = isOpen;
    this.notify();
  }

  setAuthModalOpen(isOpen, mode = 'signin') {
    this.state.isAuthModalOpen = isOpen;
    this.state.authMode = mode;
    this.notify();
  }

  setRfqModalOpen(isOpen, product = null) {
    this.state.isRfqModalOpen = isOpen;
    this.state.rfqProduct = product;
    this.notify();
  }

  setUser(user) {
    this.state.user = user;
    this.saveStorage('kc_user', user);
    this.notify();
  }

  logout() {
    this.state.user = null;
    this.saveStorage('kc_user', null);
    this.showToast('You have been signed out', 'info');
    this.notify();
  }

  showToast(message, type = 'info') {
    const id = Date.now() + Math.random();
    const toast = { id, message, type };
    this.state.toasts = [...this.state.toasts, toast];
    this.notify();

    setTimeout(() => {
      this.state.toasts = this.state.toasts.filter(t => t.id !== id);
      this.notify();
    }, 3500);
  }

  // Dynamic product catalogue retrieval
  getProducts() {
    return [...this.state.customProducts, ...initialProducts];
  }

  addCustomProduct(product) {
    const exists = this.state.customProducts.some(p => p.id === product.id);
    let updated;
    if (exists) {
      updated = this.state.customProducts.map(p => p.id === product.id ? product : p);
    } else {
      updated = [product, ...this.state.customProducts];
    }
    this.state.customProducts = updated;
    this.saveStorage('kc_custom_products', updated);
    this.showToast(`Batch "${product.title}" published live to KISAN!`, 'success');
    this.notify();
  }

  // Judge Demo Workflow Handlers
  setDemoStep(step) {
    this.state.demoStep = step;
    this.saveStorage('kc_demo_step', step);
    this.notify();
  }

  setDemoRole(role) {
    this.state.demoRole = role;
    this.saveStorage('kc_demo_role', role);
    this.notify();
  }

  updateDemoFarmer(farmerData) {
    this.state.demoFarmer = { ...this.state.demoFarmer, ...farmerData };
    this.saveStorage('kc_demo_farmer', this.state.demoFarmer);
    this.notify();
  }

  updateDemoProduct(productData) {
    this.state.demoProduct = { ...this.state.demoProduct, ...productData };
    this.saveStorage('kc_demo_product', this.state.demoProduct);
    this.notify();
  }

  updateDemoNegotiation(negotiationData) {
    this.state.demoNegotiation = { ...this.state.demoNegotiation, ...negotiationData };
    this.saveStorage('kc_demo_negotiation', this.state.demoNegotiation);
    this.notify();
  }

  bookDemoLogistics(logisticsData) {
    this.state.demoLogistics = { ...this.state.demoLogistics, ...logisticsData, isBooked: true };
    this.saveStorage('kc_demo_logistics', this.state.demoLogistics);
    this.showToast('AI Smart Logistics Confirmed: Tata Ace Mini-Truck Assigned!', 'success');
    this.notify();
  }

  setDemoTrackingStage(stage) {
    this.state.demoTrackingStage = Math.max(1, Math.min(8, stage));
    this.saveStorage('kc_demo_tracking_stage', this.state.demoTrackingStage);
    this.notify();
  }

  advanceDemoTrackingStage() {
    const next = (this.state.demoTrackingStage % 8) + 1;
    this.setDemoTrackingStage(next);
    const stageNames = [
      'Batch Confirmed & Quality Audit Passed',
      'Tata Ace Mini-Truck Dispatched to Farm Gate',
      'Produce Picked Up from Pimpalgaon Packhouse',
      'Arrived at Village Aggregation / Sorting Hub',
      'Express Highway Transit via Samruddhi Corridor',
      'Arrived at Mumbai Vashi Wholesale Hub',
      'Delivered & Digitally Signed POD by Buyer',
      'Instant Direct DBT / UPI Payout Credited'
    ];
    this.showToast(`Tracking Updated: Stage ${next}/8 · ${stageNames[next - 1]}`, 'info');
  }

  resetDemoWorkflow() {
    this.state.demoStep = 1;
    this.state.demoRole = 'farmer';
    this.state.demoTrackingStage = 1;
    this.saveStorage('kc_demo_step', 1);
    this.saveStorage('kc_demo_role', 'farmer');
    this.saveStorage('kc_demo_tracking_stage', 1);
    this.showToast('Judge Demo Workflow reset to beginning', 'info');
    this.notify();
  }
}

export const store = new Store();
