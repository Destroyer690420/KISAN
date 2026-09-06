export const products = [
  {
    id: 'devgad-alphonso-mango',
    title: 'GI-Tagged Devgad Alphonso Mangoes',
    slug: 'devgad-alphonso-mangoes',
    category: 'fruits',
    subCategory: 'tropical-fruits',
    fpoId: 'fpo-sahyadri',
    fpoName: 'Sahyadri Farmers Producer Co. Ltd.',
    fpoMembersCount: 8400,
    leadFarmer: 'Eknath Shinde & 120 Ratnagiri Family Orchards',
    farmName: 'Devgad Hapus Baug & Sahyadri Collective',
    location: 'Devgad, Sindhudurg, Maharashtra',
    state: 'Maharashtra',
    stateCode: 'MH',
    stateCode: 'MH',
    rating: 4.96,
    reviewsCount: 2480,
    
    // Retail Pricing
    price: 899,
    retailUnit: '1 Dozen Box (12 pcs · 3.2 kg)',
    retailPricePerKg: 280,
    defaultWeight: '12 Mangoes (1 Dozen)',
    
    // Bulk / B2B Wholesale Pricing
    bulkPrice: 165,
    bulkUnit: 'per kg',
    bulkMOQ: 50, // 50 kg MOQ
    bulkPackaging: '20 kg ventilated food-grade export crates with paddy straw',
    bulkTiers: [
      { minQty: 50, maxQty: 200, pricePerKg: 175, label: '50 - 200 kg (Retailers & Cafes)' },
      { minQty: 200, maxQty: 1000, pricePerKg: 160, label: '200 - 1,000 kg (Hotels & Caterers)' },
      { minQty: 1000, maxQty: 5000, pricePerKg: 145, label: '1 MT+ (Processors & Exporters)' }
    ],

    // Fair Price Index vs Mandi Middlemen
    mandiPriceComp: {
      mandiFarmerRate: 85,
      kisanConnectFarmerPayout: 145,
      supermarketRetailRate: 350,
      kisanConnectRetailPrice: 280,
      kisanConnectBulkPrice: 165,
      farmerGainPercent: 70,
      buyerSavingsPercent: 20,
      bulkBuyerSavingsPercent: 45
    },

    earliestDelivery: '10/04/2026',
    harvestSeason: 'April - June (Peak Chaitra)',
    cultivation: 'NPOP India Organic & Jaivik Bharat',
    badges: ['GI Tagged', 'India Organic', 'Zero Carbide', 'FPO Direct'],
    images: [
      'https://common.crowdfarming.com/uploaded-images/1768511919635-7be21903-7eb1-4887-84a8-5fee869413f7.jpg?Imwidth=800',
      'https://common.crowdfarming.com/uploaded-images/1785489058860-177462ef-2d92-44b4-b6f5-e19ec0082de6.jpg?Imwidth=800',
      'https://common.crowdfarming.com/uploaded-images/1786706086732-b693fe57-5f05-415b-bf28-83756731b965.jpg?Imwidth=800'
    ],
    description: 'Authentic Geographical Indication (GI) tagged Devgad Alphonso (Hapus) mangoes from the coastal laterite soils of Konkan. Naturally tree-ripened in paddy straw (Gawat), zero calcium carbide or ethylene gas rooms. Harvested on-demand for households and bulk commercial buyers.',
    farmerStory: 'Grown by 120 family orchards affiliated with Sahyadri FPC overlooking the Arabian Sea. By aggregating their harvest, member kisans bypass Vashi APMC cartels and supply direct to consumers and bulk buyers with complete traceability.',
    boxes: [
      { size: '1 Dozen Standard (12 pcs · 3.2 kg)', price: 899, pricePerKg: 280, servings: '12 premium table fruits' },
      { size: '2 Dozen Family Box (24 pcs · 6.5 kg)', price: 1699, pricePerKg: 261, servings: '24 table fruits' },
      { size: 'Commercial Crate (20 kg Bulk Box)', price: 3499, pricePerKg: 175, servings: 'Approx. 75-80 mangoes for bulk users' }
    ],
    nutrition: {
      energy: '65 kcal / 100g',
      fats: '0.3 g',
      carbohydrates: '17.0 g natural fruit sugars',
      fiber: '1.8 g',
      vitaminA: 'Beta-carotene rich (natural golden color)'
    }
  },
  {
    id: 'gir-kesar-mango',
    title: 'Saurashtra Gir Kesar Mangoes',
    slug: 'gir-kesar-mangoes-junagadh',
    category: 'fruits',
    subCategory: 'tropical-fruits',
    fpoId: 'fpo-talala-gir',
    fpoName: 'Talala Gir Kesar Farmers Cooperative FPO',
    fpoMembersCount: 1650,
    leadFarmer: 'Ramesh Patel & Talala Gir Kisan Cooperative',
    farmName: 'Gir Somnath Agro Collective',
    location: 'Talala Gir, Junagadh, Gujarat',
    state: 'Gujarat',
    stateCode: 'GJ',
    stateCode: 'GJ',
    rating: 4.93,
    reviewsCount: 1840,
    
    // Retail Pricing
    price: 799,
    retailUnit: '3 kg Direct Box (approx 9-11 mangoes)',
    retailPricePerKg: 266,
    defaultWeight: '3 kg Box',

    // Bulk / B2B Wholesale Pricing
    bulkPrice: 125,
    bulkUnit: 'per kg',
    bulkMOQ: 50,
    bulkPackaging: '25 kg plastic crates with ventilated moisture-barrier sheets',
    bulkTiers: [
      { minQty: 50, maxQty: 250, pricePerKg: 135, label: '50 - 250 kg (Sweet Shops & Cafes)' },
      { minQty: 250, maxQty: 1000, pricePerKg: 125, label: '250 - 1,000 kg (Aamras Processors)' },
      { minQty: 1000, maxQty: 10000, pricePerKg: 110, label: '1 MT+ (Industrial Procurement)' }
    ],

    mandiPriceComp: {
      mandiFarmerRate: 60,
      kisanConnectFarmerPayout: 115,
      supermarketRetailRate: 320,
      kisanConnectRetailPrice: 266,
      kisanConnectBulkPrice: 125,
      farmerGainPercent: 91,
      buyerSavingsPercent: 17,
      bulkBuyerSavingsPercent: 48
    },

    earliestDelivery: '25/04/2026',
    harvestSeason: 'May - July (Summer Harvest)',
    cultivation: 'Subhash Palekar Natural Farming (ZBNF)',
    badges: ['GI Tagged', 'ZBNF Natural', 'Zero Carbide', 'Direct from FPO'],
    images: [
      'https://common.crowdfarming.com/uploaded-images/1785489058860-177462ef-2d92-44b4-b6f5-e19ec0082de6.jpg?Imwidth=800',
      'https://common.crowdfarming.com/uploaded-images/1768511919635-7be21903-7eb1-4887-84a8-5fee869413f7.jpg?Imwidth=800'
    ],
    description: 'The "Queen of Mangoes" grown in the mineral-rich soils bordering the Gir Asiatic Lion Sanctuary. Celebrated for its bright saffron pulp, intense aroma, and supreme natural sweetness for daily consumption, dessert making, and commercial Aamras.',
    farmerStory: 'Ramesh Patel chairs a 1,650-farmer cooperative in Talala Gir. By eliminating four tiers of mandi agents, the cooperative ensures that 68% of the buyer\'s rupee reaches rural Gujarat families, funding micro-irrigation and soil revitalization.',
    boxes: [
      { size: '3 kg Box (approx 9-11 mangoes)', price: 799, pricePerKg: 266, servings: 'Ideal for small families' },
      { size: '6 kg Double Box (18-22 mangoes)', price: 1499, pricePerKg: 249, servings: 'Family favorite' },
      { size: '25 kg Commercial Crate', price: 3375, pricePerKg: 135, servings: 'Wholesale aamras pack' }
    ],
    nutrition: {
      energy: '60 kcal / 100g',
      fats: '0.2 g',
      carbohydrates: '15.5 g natural sugars',
      fiber: '1.6 g',
      vitaminC: '36 mg (immune booster)'
    }
  },
  {
    id: 'desi-gir-cow-a2-bilona-ghee',
    title: 'Desi Gir Cow Vedic A2 Bilona Ghee',
    slug: 'desi-gir-cow-vedic-a2-bilona-ghee',
    category: 'dairy-eggs',
    subCategory: 'artisan-dairy',
    fpoId: 'fpo-talala-gir',
    fpoName: 'Gir Krishi Vrund Gaushala FPO',
    fpoMembersCount: 820,
    leadFarmer: 'Hardik Bhai & Saurashtra Maldhari Herders',
    farmName: 'Gir Vedic Gaushala & Dairy Collective',
    location: 'Bhavnagar & Junagadh, Gujarat',
    state: 'Gujarat',
    stateCode: 'GJ',
    stateCode: 'GJ',
    rating: 4.98,
    reviewsCount: 3120,

    // Retail Pricing
    price: 1750,
    retailUnit: '1 Litre Glass Jar',
    retailPricePerKg: 1750,
    defaultWeight: '1 Litre Glass Jar',

    // Bulk / B2B Wholesale Pricing
    bulkPrice: 1250,
    bulkUnit: 'per Litre',
    bulkMOQ: 15,
    bulkPackaging: '15 Litre food-grade stainless steel canisters / sealed drums',
    bulkTiers: [
      { minQty: 15, maxQty: 60, pricePerKg: 1350, label: '15 - 60 Litres (Ayurvedic Clinics & Sweet Makers)' },
      { minQty: 60, maxQty: 300, pricePerKg: 1250, label: '60 - 300 Litres (Hospitality & HoReCa)' },
      { minQty: 300, maxQty: 2000, pricePerKg: 1150, label: '300L+ (Institutional & Wellness Brands)' }
    ],

    mandiPriceComp: {
      mandiFarmerRate: 650,
      kisanConnectFarmerPayout: 1100,
      supermarketRetailRate: 2400,
      kisanConnectRetailPrice: 1750,
      kisanConnectBulkPrice: 1250,
      farmerGainPercent: 69,
      buyerSavingsPercent: 27,
      bulkBuyerSavingsPercent: 48
    },

    earliestDelivery: 'Ready to Dispatch (48h Express)',
    harvestSeason: 'Year-round Fresh Churning',
    cultivation: '100% Free-Grazing Desi Gir Cows (Ahimsak)',
    badges: ['Vedic Bilona', 'A2 Certified', 'Lab Tested Purity', 'FPO Direct'],
    images: [
      'https://common.crowdfarming.com/uploaded-images/1773235038786-8b07d805-c2d8-4c1c-9675-2a3c420f38a0.png?Imwidth=800',
      'https://common.crowdfarming.com/uploaded-images/1773235250825-7457ce9d-077c-46b4-9578-3c14e28e5bdb.png?Imwidth=800'
    ],
    description: 'Prepared strictly following the ancient Ayurvedic Bilona method: Grass-fed Desi Gir cow whole milk is boiled over cow dung cakes, cultured into curd overnight, and two-way hand-churned (Bilona) to extract Makkhan, which is simmered gently into golden granular A2 ghee.',
    farmerStory: 'Maldhari pastoralist families manage herds of free-grazing Gir cows in the grasslands of Saurashtra. Calves are given their full share of mother\'s milk first. Selling directly on KISAN provides these indigenous herders with sustainable livable income to preserve native Indian cattle breeds.',
    boxes: [
      { size: '500 ml Glass Jar', price: 950, pricePerKg: 1900, servings: 'Trial / 1-month kitchen pack' },
      { size: '1 Litre Glass Jar', price: 1750, pricePerKg: 1750, servings: 'Standard household jar' },
      { size: '2 Litre Family Tin', price: 3200, pricePerKg: 1600, servings: 'Best value for homes' },
      { size: '15 Litre Bulk Commercial Canister', price: 20250, pricePerKg: 1350, servings: 'Ayurvedic & culinary wholesale' }
    ],
    nutrition: {
      energy: '897 kcal / 100g',
      fats: '99.7 g (High Butyric acid & Omega-3)',
      carbohydrates: '0 g (Lactose & Casein free)',
      proteins: '0 g',
      smokePoint: '250°C (Highest natural cooking stability)'
    }
  },
  {
    id: 'kinnaur-royal-apple',
    title: 'Kinnaur High-Altitude Royal Delicious Apples',
    slug: 'kinnaur-royal-delicious-apples',
    category: 'fruits',
    subCategory: 'mountain-fruits',
    fpoId: 'fpo-himalayan-apple',
    fpoName: 'Kinnaur Tribal Apple & Dry Fruit Producer Co.',
    fpoMembersCount: 920,
    leadFarmer: 'Tenzin & Sunil Negi & Kinnaur Valley Growers',
    farmName: 'Snowline Orchards Collective',
    location: 'Kalpa, Kinnaur Valley, Himachal Pradesh',
    state: 'Himachal Pradesh',
    stateCode: 'HP',
    stateCode: 'HP',
    rating: 4.95,
    reviewsCount: 1650,

    // Retail Pricing
    price: 1399,
    retailUnit: '5 kg Eco-Honeycomb Box (approx 22-26 apples)',
    retailPricePerKg: 280,
    defaultWeight: '5 kg Box',

    // Bulk / B2B Wholesale Pricing
    bulkPrice: 110,
    bulkUnit: 'per kg',
    bulkMOQ: 100,
    bulkPackaging: '20 kg telescoping heavy corrugated cartons with molded pulp trays',
    bulkTiers: [
      { minQty: 100, maxQty: 500, pricePerKg: 125, label: '100 - 500 kg (Retailers & Juiceries)' },
      { minQty: 500, maxQty: 2000, pricePerKg: 110, label: '500 - 2,000 kg (Supermarkets & Institutions)' },
      { minQty: 2000, maxQty: 20000, pricePerKg: 95, label: '2 MT+ (Cold Storage Wholesalers)' }
    ],

    mandiPriceComp: {
      mandiFarmerRate: 55,
      kisanConnectFarmerPayout: 100,
      supermarketRetailRate: 360,
      kisanConnectRetailPrice: 280,
      kisanConnectBulkPrice: 110,
      farmerGainPercent: 82,
      buyerSavingsPercent: 22,
      bulkBuyerSavingsPercent: 52
    },

    earliestDelivery: '15/08/2026',
    harvestSeason: 'August - November (Autumn Snow Harvest)',
    cultivation: 'Glacier-Fed High Altitude Natural (Zero Wax)',
    badges: ['High Altitude 9,200ft', 'Zero Wax Coating', 'FPO Direct', 'Snow Fed'],
    images: [
      'https://common.crowdfarming.com/uploaded-images/1714990611226-844a71c0-a83a-4d2a-b9a2-a32050d95227.jpg?Imwidth=800'
    ],
    description: 'Grown at 9,200 feet above sea level in the crisp, unpolluted atmosphere of the Himalayas. Kinnaur apples are world-famous for their deep dark carmine color, unmatched crisp crunch, high juice content, and zero artificial petroleum wax polish.',
    farmerStory: 'The Kinnaur Apple FPO connects 920 tribal mountain families. Traditional mandi middlemen in Parwanoo and Delhi took 45% in commissions and transport cuts. Through KISAN, apples travel directly from mountain collection centers to metro doorsteps and commercial fruit merchants.',
    boxes: [
      { size: '5 kg Eco Box (approx 22-26 apples)', price: 1399, pricePerKg: 280, servings: 'Crisp daily table fruit' },
      { size: '10 kg Double Box (approx 48-52 apples)', price: 2599, pricePerKg: 260, servings: 'Great value for families' },
      { size: '20 kg Commercial Wholesale Crate', price: 2500, pricePerKg: 125, servings: 'Bulk crate with molded trays' }
    ],
    nutrition: {
      energy: '52 kcal / 100g',
      fats: '0.2 g',
      carbohydrates: '13.8 g natural fructose',
      fiber: '2.4 g dietary pectin',
      antioxidants: 'Rich in Quercetin and Anthocyanins'
    }
  },
  {
    id: 'chikmagalur-arabica-coffee',
    title: 'Single-Estate Chikmagalur Arabica Coffee',
    slug: 'chikmagalur-arabica-coffee-beans',
    category: 'beverages',
    subCategory: 'shade-grown-coffee',
    fpoId: 'fpo-wayanad-spices',
    fpoName: 'Western Ghats Shade-Grown Coffee Collective',
    fpoMembersCount: 680,
    leadFarmer: 'Anandita & Harish Gowda',
    farmName: 'Bababudangiri Estate & Coffee Collective',
    location: 'Chikmagalur, Karnataka',
    state: 'Karnataka',
    stateCode: 'KA',
    stateCode: 'KA',
    rating: 4.94,
    reviewsCount: 1190,

    // Retail Pricing
    price: 1150,
    retailUnit: '1 kg Valve Pack (Whole Beans / Custom Grind)',
    retailPricePerKg: 1150,
    defaultWeight: '1 kg Valve Pack',

    // Bulk / B2B Wholesale Pricing
    bulkPrice: 620,
    bulkUnit: 'per kg (Green or Roasted)',
    bulkMOQ: 25,
    bulkPackaging: '25 kg GrainPro hermetic oxygen-barrier bags / 50 kg jute sacks',
    bulkTiers: [
      { minQty: 25, maxQty: 100, pricePerKg: 680, label: '25 - 100 kg (Specialty Cafes & Roasters)' },
      { minQty: 100, maxQty: 500, pricePerKg: 620, label: '100 - 500 kg (Chain Cafes & HoReCa)' },
      { minQty: 500, maxQty: 5000, pricePerKg: 560, label: '500 kg+ (Commercial Roasteries)' }
    ],

    mandiPriceComp: {
      mandiFarmerRate: 320,
      kisanConnectFarmerPayout: 540,
      supermarketRetailRate: 1600,
      kisanConnectRetailPrice: 1150,
      kisanConnectBulkPrice: 620,
      farmerGainPercent: 69,
      buyerSavingsPercent: 28,
      bulkBuyerSavingsPercent: 54
    },

    earliestDelivery: 'Freshly Roasted on Order (3 Days)',
    harvestSeason: 'December - February (Winter Pick)',
    cultivation: 'Rainforest Shade-Grown with Cardamom & Orange Trees',
    badges: ['Shade Grown', 'Single Estate', 'Direct Trade', 'FPO Direct'],
    images: [
      'https://common.crowdfarming.com/uploaded-images/1773234923184-7947f67a-67b1-4cab-9976-c27962f83c1d.jpg?Imwidth=800',
      'https://common.crowdfarming.com/uploaded-images/1773235297389-52e8d5a1-5e3e-4a17-ab23-d9da069a2b39.jpg?Imwidth=800'
    ],
    description: 'Shade-grown at 4,200 feet in the birthplace of Indian coffee — Bababudangiri. Cultivated under natural canopy of silver oak and jackfruit trees. Roasted fresh in small batches with tasting notes of dark chocolate, toasted hazelnut, and jaggery sweetness.',
    farmerStory: 'Harish Gowda and 680 fellow small growers formed this collective to bypass export brokers and multinational middlemen who took 60% of coffee profits. KISAN connects them directly with urban coffee lovers and artisan cafes across India.',
    boxes: [
      { size: '500g Fresh Roast Pack', price: 625, pricePerKg: 1250, servings: 'Approx 35 cups espresso/filter' },
      { size: '1 kg Barista Bag', price: 1150, pricePerKg: 1150, servings: 'Approx 70 cups' },
      { size: '5 kg Cafe Dispenser Pack', price: 4250, pricePerKg: 850, servings: 'Ideal for offices and cafes' },
      { size: '25 kg Micro-Roaster Sack', price: 17000, pricePerKg: 680, servings: 'Green or roasted wholesale' }
    ],
    nutrition: {
      energy: '2 kcal / 100ml black',
      caffeine: '1.2% naturally occurring',
      chlorogenicAcid: 'Rich natural polyphenol antioxidant',
      acidity: 'Smooth, low-acidity clean finish'
    }
  },
  {
    id: 'pampore-mongra-saffron',
    title: 'GI-Tagged Pampore Kashmiri Mongra Saffron',
    slug: 'pampore-mongra-saffron-kashmir',
    category: 'pantry-essentials',
    subCategory: 'heritage-spices',
    fpoId: 'fpo-wayanad-spices',
    fpoName: 'Kashmir Valley Saffron & Dry Fruit Cooperative',
    fpoMembersCount: 450,
    leadFarmer: 'Bashir Ahmad Mir & Pampore Saffron Growers',
    farmName: 'Pampore Karewa Saffron Cooperative',
    location: 'Pampore, Pulwama, Jammu & Kashmir',
    state: 'Jammu & Kashmir',
    stateCode: 'JK',
    stateCode: 'JK',
    rating: 4.99,
    reviewsCount: 890,

    // Retail Pricing
    price: 1499,
    retailUnit: '2g Sealed Glass Vial + 1 kg Snow Kaghzi Walnuts',
    retailPricePerKg: 1499,
    defaultWeight: '2g Saffron + 1 kg Walnuts Combo',

    // Bulk / B2B Wholesale Pricing
    bulkPrice: 210, // per gram in bulk
    bulkUnit: 'per gram (50g+ pack)',
    bulkMOQ: 50,
    bulkPackaging: '50g / 250g vacuum-sealed nitrogen-flushed food grade tins with lab certification',
    bulkTiers: [
      { minQty: 50, maxQty: 250, pricePerKg: 230, label: '50 - 250 grams (Mithai Makers & Ayurvedic Pharmacies)' },
      { minQty: 250, maxQty: 1000, pricePerKg: 210, label: '250 - 1,000 grams (Hotel Chains & Temple Trusts)' },
      { minQty: 1000, maxQty: 10000, pricePerKg: 190, label: '1 kg+ (Commercial Food Processors)' }
    ],

    mandiPriceComp: {
      mandiFarmerRate: 130,
      kisanConnectFarmerPayout: 210,
      supermarketRetailRate: 350,
      kisanConnectRetailPrice: 275,
      kisanConnectBulkPrice: 210,
      farmerGainPercent: 62,
      buyerSavingsPercent: 21,
      bulkBuyerSavingsPercent: 40
    },

    earliestDelivery: 'Express Pan-India (48h)',
    harvestSeason: 'October - November (Karewa Saffron Bloom)',
    cultivation: 'Kashmir Karewa Natural Soil (Grade-A1)',
    badges: ['Kashmir GI Tag', 'Grade A1 Mongra', '100% Pure Stigma', 'FPO Direct'],
    images: [
      'https://common.crowdfarming.com/uploaded-images/1788542682182-bb853ea3-da9c-4289-9287-9abf7e0ae98f.jpg?Imwidth=800',
      'https://common.crowdfarming.com/uploaded-images/1788542706835-1f67f5df-88fe-4560-92c3-26dc4ab9cb41.jpg?Imwidth=800'
    ],
    description: 'The world\'s most prized spice, grown in the unique lacustrine Karewa soils of Pampore, Kashmir. Highest natural Crocin coloring strength (>240) and deep Safranal aroma. Unadulterated dark crimson stigmas without yellow style threads.',
    farmerStory: 'Bashir Ahmad Mir and 450 saffron farming families harvest delicate purple crocus flowers at dawn during autumn. Traditionally exploited by tourist showroom brokers, this FPO guarantees authenticated purity tests and fair livable compensation.',
    boxes: [
      { size: '2g Pure Mongra Saffron', price: 699, pricePerKg: 349, servings: 'Approx 90-100 culinary servings' },
      { size: '2g Saffron + 1 kg Kaghzi Walnuts', price: 1499, pricePerKg: 750, servings: 'Festive culinary combo' },
      { size: '10g Festive Saffron Pack', price: 2999, pricePerKg: 300, servings: 'Grand wedding / celebratory pack' },
      { size: '50g Commercial Master Pack', price: 11500, pricePerKg: 230, servings: 'Wholesale sweet makers & temples' }
    ],
    nutrition: {
      crocinStrength: '> 240 (Grade A1 Mongra)',
      safranal: 'Deep herbal floral volatile aroma',
      picrocrocin: 'Natural therapeutic bitter-sweet taste',
      purityTest: 'ISO 3632 Chemical-Free Certified'
    }
  },
  {
    id: 'wood-pressed-mustard-oil',
    title: 'Wood-Pressed Kacchi Ghani Mustard Oil',
    slug: 'wood-pressed-kacchi-ghani-mustard-oil',
    category: 'oils-sauces-spices',
    subCategory: 'cold-pressed-oils',
    fpoId: 'fpo-rajasthan-mustard',
    fpoName: 'Mewat Mustard & Oilseed Kisan Producer Co.',
    fpoMembersCount: 2200,
    leadFarmer: 'Chhotelal Yadav & Alwar Mustard Growers',
    farmName: 'Mewat Oilseed Kisan Collective',
    location: 'Alwar & Bharatpur, Rajasthan',
    state: 'Rajasthan',
    stateCode: 'RJ',
    stateCode: 'RJ',
    rating: 4.96,
    reviewsCount: 1430,

    // Retail Pricing
    price: 649,
    retailUnit: '2 Litre Canister',
    retailPricePerKg: 324,
    defaultWeight: '2 Litres',

    // Bulk / B2B Wholesale Pricing
    bulkPrice: 165,
    bulkUnit: 'per Litre',
    bulkMOQ: 30,
    bulkPackaging: '15 Litre food-grade steel tins / 200 Litre food-grade barrels',
    bulkTiers: [
      { minQty: 30, maxQty: 150, pricePerKg: 185, label: '30 - 150 Litres (Restaurants & Halwais)' },
      { minQty: 150, maxQty: 1000, pricePerKg: 165, label: '150 - 1,000 Litres (Caterers & Canteens)' },
      { minQty: 1000, maxQty: 10000, pricePerKg: 145, label: '1,000L+ (Pickle & Food Industries)' }
    ],

    mandiPriceComp: {
      mandiFarmerRate: 80,
      kisanConnectFarmerPayout: 140,
      supermarketRetailRate: 420,
      kisanConnectRetailPrice: 324,
      kisanConnectBulkPrice: 165,
      farmerGainPercent: 75,
      buyerSavingsPercent: 23,
      bulkBuyerSavingsPercent: 55
    },

    earliestDelivery: 'Dispatches within 24 hours',
    harvestSeason: 'February - April (Spring Mustard Bloom)',
    cultivation: 'Cold Kolhu Wood-Pressed below 40°C (Unrefined)',
    badges: ['Wood Pressed', 'Zero Hexane', 'AGMARK Grade-1', 'FPO Direct'],
    images: [
      'https://common.crowdfarming.com/uploaded-images/1773234687158-4e96b35e-fc79-423d-929d-f78addb682e8.jpg?Imwidth=800',
      'https://common.crowdfarming.com/uploaded-images/1773235250825-7457ce9d-077c-46b4-9578-3c14e28e5bdb.png?Imwidth=800'
    ],
    description: 'Extracted from native black mustard seeds in traditional wooden Kolhu expellers without high heat, chemical solvents, or toxic petroleum hexane. Retains the authentic pungent bite (Allyl isothiocyanate) and golden amber glow prized across North Indian kitchens.',
    farmerStory: '2,200 dryland farmers in Alwar formed their own processing FPO with collective solar-powered wooden mills. By crushing their own seeds rather than selling raw seeds to commercial solvent extraction mills, farmers earn ₹800 more per quintal.',
    boxes: [
      { size: '1 Litre Bottle', price: 349, pricePerKg: 349, servings: 'Daily cooking bottle' },
      { size: '2 Litre Canister', price: 649, pricePerKg: 324, servings: 'Popular household pack' },
      { size: '5 Litre Family Jar', price: 1499, pricePerKg: 300, servings: 'Best family economy' },
      { size: '15 Litre Commercial Tin', price: 2775, pricePerKg: 185, servings: 'Bulk kitchen / restaurant tin' }
    ],
    nutrition: {
      energy: '884 kcal / 100ml',
      monounsaturated: '65g Oleic & Erucic natural fatty acids',
      polyunsaturated: '21g Omega-3 & Omega-6 balance',
      processingMethod: 'Cold Kolhu Wood-Pressed < 40°C',
      preservatives: 'Zero Chemical Additives / Zero Bleaching'
    }
  },
  {
    id: 'wayanad-malabar-spices',
    title: 'Wayanad Tellicherry Bold Pepper & Cardamom',
    slug: 'wayanad-malabar-pepper-cardamom',
    category: 'oils-sauces-spices',
    subCategory: 'heritage-spices',
    fpoId: 'fpo-wayanad-spices',
    fpoName: 'Wayanad Malabar Organic Spice Collective',
    fpoMembersCount: 1100,
    leadFarmer: 'Joseph & Mary Kurien & Tribal Spice Collective',
    farmName: 'Meppadi Biodiversity Reserve & Spice Hub',
    location: 'Meppadi, Wayanad, Kerala',
    state: 'Kerala',
    stateCode: 'KL',
    stateCode: 'KL',
    rating: 4.97,
    reviewsCount: 1280,

    // Retail Pricing
    price: 899,
    retailUnit: '500g TGSEB Bold Pepper + 250g Green Cardamom',
    retailPricePerKg: 1198,
    defaultWeight: '750g Spice Combo',

    // Bulk / B2B Wholesale Pricing
    bulkPrice: 680,
    bulkUnit: 'per kg (Pepper) / ₹1,850/kg (Cardamom)',
    bulkMOQ: 20,
    bulkPackaging: '25 kg vacuum-sealed bags in heavy-duty shipping cartons',
    bulkTiers: [
      { minQty: 20, maxQty: 100, pricePerKg: 750, label: '20 - 100 kg (Spice Packagers & Restaurants)' },
      { minQty: 100, maxQty: 500, pricePerKg: 680, label: '100 - 500 kg (Food Manufacturers)' },
      { minQty: 500, maxQty: 5000, pricePerKg: 610, label: '500 kg+ (Exporters & Masala Brands)' }
    ],

    mandiPriceComp: {
      mandiFarmerRate: 380,
      kisanConnectFarmerPayout: 620,
      supermarketRetailRate: 1450,
      kisanConnectRetailPrice: 1198,
      kisanConnectBulkPrice: 680,
      farmerGainPercent: 63,
      buyerSavingsPercent: 17,
      bulkBuyerSavingsPercent: 48
    },

    earliestDelivery: 'Express 48h Pan-India',
    harvestSeason: 'January - March (Winter Spice Sun-Drying)',
    cultivation: 'Multi-Tier Organic Agroforestry (Spices Board India)',
    badges: ['TGSEB Grade', '8mm Bold Cardamom', 'Sun Dried', 'FPO Direct'],
    images: [
      'https://common.crowdfarming.com/uploaded-images/1778573428453-4c16fc72-7ce3-4bf7-9490-c239d10f0413.jpg?Imwidth=800',
      'https://common.crowdfarming.com/uploaded-images/1788542730770-aa4894f1-e140-4f79-b741-755252ff12f1.jpg?Imwidth=800'
    ],
    description: 'Direct from the birthplace of black pepper in the Malabar hills. TGSEB (Tellicherry Garbled Special Extra Bold) berries are left on the vine to mature until golden-red before sun-drying on bamboo mats. Paired with 8mm extra-bold green cardamom bursting with essential camphor-sweet oils.',
    farmerStory: 'Joseph Kurien leads 1,100 indigenous and tribal spice growers in Wayanad. By establishing collective solar drying and vacuum packing at the village hub, the collective eliminates town commission agents who used to take 40% margin.',
    boxes: [
      { size: '500g TGSEB Bold Black Pepper', price: 499, pricePerKg: 998, servings: 'Full year household supply' },
      { size: '250g 8mm Extra Bold Green Cardamom', price: 549, pricePerKg: 2196, servings: 'Aromatic chai and biryani pod' },
      { size: '500g Pepper + 250g Cardamom Combo', price: 899, pricePerKg: 1198, servings: 'Popular spice connoisseur pack' },
      { size: '20 kg Bulk Wholesale Pepper Sack', price: 15000, pricePerKg: 750, servings: 'Commercial kitchen bulk' }
    ],
    nutrition: {
      piperineContent: '> 5.8% (Maximum natural pungency)',
      essentialOils: 'High terpene aromatic density',
      dryingProcess: '100% Sun-Dried on pristine bamboo beds',
      certifications: 'Spices Board India Grade Certificate'
    }
  }
,
{
  "id": "sehore-sharbati-wheat",
  "title": "MP Sehore Sharbati Golden Wheat Grains",
  "slug": "sehore-sharbati-wheat-grains",
  "category": "grains-staples",
  "subCategory": "wheat-grains",
  "fpoId": "fpo-sehore-wheat",
  "fpoName": "Sehore Malwa Kisan Producer Co.",
  "fpoMembersCount": 3400,
  "leadFarmer": "Maheshwar Patidar & Malwa Wheat Growers",
  "farmName": "Golden Soil Narmada Basin Farms",
  "location": "Sehore, Malwa Plateau, Madhya Pradesh",
  "state": "Madhya Pradesh",
  "stateCode": "MP",
  "rating": 4.95,
  "reviewsCount": 1820,
  "price": 549,
  "retailUnit": "10 kg Eco-Jute Bag (Unpolished Golden Grain)",
  "retailPricePerKg": 55,
  "defaultWeight": "10 kg Jute Bag",
  "bulkPrice": 32,
  "bulkUnit": "per kg (₹3,200/quintal)",
  "bulkMOQ": 100,
  "bulkPackaging": "50 kg breathable HDPE bags with food-grade inner liners",
  "bulkTiers": [
    {
      "minQty": 100,
      "maxQty": 500,
      "pricePerKg": 35,
      "label": "100 - 500 kg (Chakki Mills & Bakeries)"
    },
    {
      "minQty": 500,
      "maxQty": 2000,
      "pricePerKg": 32,
      "label": "500 - 2,000 kg (Flour Brands & Caterers)"
    },
    {
      "minQty": 2000,
      "maxQty": 20000,
      "pricePerKg": 29,
      "label": "2 MT+ (Industrial Procurement & Exporters)"
    }
  ],
  "mandiPriceComp": {
    "mandiFarmerRate": 22,
    "kisanConnectFarmerPayout": 32,
    "supermarketRetailRate": 68,
    "kisanConnectRetailPrice": 55,
    "kisanConnectBulkPrice": 32,
    "farmerGainPercent": 45,
    "buyerSavingsPercent": 19,
    "bulkBuyerSavingsPercent": 53
  },
  "earliestDelivery": "Dispatched within 24h",
  "harvestSeason": "March - May (Rabi Harvest)",
  "cultivation": "Rainfed Black Soil Natural Farming (Zero Chemical Buffing)",
  "badges": [
    "GI Sharbati Wheat",
    "100% Unpolished",
    "Rotis Stay Soft 12h",
    "FPO Direct"
  ],
  "images": [
    "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&auto=format&fit=crop&q=80"
  ],
  "description": "Celebrated as the King of Wheat in India, Sehore Sharbati grains have a distinct golden sheen, heavy grain weight, and natural sweet undertone. Grown in the rainfed black alluvial soil of Sehore without artificial irrigation, resulting in maximum protein density and rotis that stay pillow-soft for 12 hours.",
  "farmerStory": "Maheshwar Patidar leads 3,400 wheat farmers across Sehore and Vidisha. Traditional grain mandi brokers used to grade down their grain with biased moisture dockages. By cleaning, sorting, and packaging at their FPO depot, farmers earn 45% above APMC MSP.",
  "boxes": [
    {
      "size": "10 kg Eco-Jute Bag",
      "price": 549,
      "pricePerKg": 55,
      "servings": "Monthly staple for family of 4"
    },
    {
      "size": "25 kg Family Master Sack",
      "price": 1299,
      "pricePerKg": 52,
      "servings": "Quarterly household wheat reserve"
    },
    {
      "size": "50 kg Wholesale Bag",
      "price": 1750,
      "pricePerKg": 35,
      "servings": "Chakki and bakery bulk lot"
    }
  ],
  "nutrition": {
    "protein": "14.2 g / 100g (High Gluten Strength)",
    "dietaryFiber": "11.8 g (Digestive Health)",
    "carbohydrates": "71 g complex carbs",
    "purity": "99.8% Sortex Cleaned Machine Sorted"
  }
},
{
  "id": "organic-khapli-wheat",
  "title": "Ancient Khapli (Emmer) Low-GI Wheat Grains",
  "slug": "organic-khapli-emmer-wheat",
  "category": "grains-staples",
  "subCategory": "wheat-grains",
  "fpoId": "fpo-sahyadri",
  "fpoName": "Satara Desi Beej Farmer Collective",
  "fpoMembersCount": 1250,
  "leadFarmer": "Santosh Patil & Krishna Valley Seed Keepers",
  "farmName": "Satara Heirloom Grain Sanctuaries",
  "location": "Karad, Satara, Maharashtra",
  "state": "Maharashtra",
  "stateCode": "MH",
  "rating": 4.93,
  "reviewsCount": 940,
  "price": 449,
  "retailUnit": "5 kg Cotton Cloth Bag (Unpolished Emmer)",
  "retailPricePerKg": 90,
  "defaultWeight": "5 kg Cotton Bag",
  "bulkPrice": 58,
  "bulkUnit": "per kg (₹5,800/quintal)",
  "bulkMOQ": 50,
  "bulkPackaging": "40 kg jute bags with internal grain barrier",
  "bulkTiers": [
    {
      "minQty": 50,
      "maxQty": 200,
      "pricePerKg": 65,
      "label": "50 - 200 kg (Diabetic Bakeries & Organic Stores)"
    },
    {
      "minQty": 200,
      "maxQty": 1000,
      "pricePerKg": 58,
      "label": "200 - 1,000 kg (Health Food Brands)"
    },
    {
      "minQty": 1000,
      "maxQty": 10000,
      "pricePerKg": 52,
      "label": "1 MT+ (Nutraceutical Exporters)"
    }
  ],
  "mandiPriceComp": {
    "mandiFarmerRate": 36,
    "kisanConnectFarmerPayout": 58,
    "supermarketRetailRate": 135,
    "kisanConnectRetailPrice": 90,
    "kisanConnectBulkPrice": 58,
    "farmerGainPercent": 61,
    "buyerSavingsPercent": 33,
    "bulkBuyerSavingsPercent": 57
  },
  "earliestDelivery": "Dispatched within 24h",
  "harvestSeason": "February - April (Early Summer)",
  "cultivation": "Vedic Desi Seed Propagation (Zero Hybridization)",
  "badges": [
    "Ancient Grain",
    "Low Glycemic Index",
    "Diabetic Friendly",
    "Non-GMO Heirloom"
  ],
  "images": [
    "https://images.unsplash.com/photo-1543257580-7269da773bf5?w=800&auto=format&fit=crop&q=80"
  ],
  "description": "Indigenous heirloom Emmer wheat (Khapli) cultivated across the Deccan plateau since Vedic times. Naturally lower in gluten proteins and low on the Glycemic Index (GI), making it exceptionally easily digestible and favored for diabetic dietary wellness and gut healing.",
  "farmerStory": "The Krishna Valley seed collective preserves centuries-old pure Khapli seeds. By directly contracting with health-conscious families and clean bakeries, growers receive stable prices protected from commodity speculator dumps.",
  "boxes": [
    {
      "size": "5 kg Cotton Cloth Bag",
      "price": 449,
      "pricePerKg": 90,
      "servings": "Healthy staple grain"
    },
    {
      "size": "10 kg Family Duo Pack",
      "price": 849,
      "pricePerKg": 85,
      "servings": "Full month supply"
    },
    {
      "size": "50 kg Wholesale Bag",
      "price": 2900,
      "pricePerKg": 58,
      "servings": "Artisan bakery lot"
    }
  ],
  "nutrition": {
    "glycemicIndex": "< 45 (Low GI vs 70 in hybrid wheat)",
    "dietaryFiber": "14.5 g / 100g",
    "iron": "4.2 mg (Natural Energy)",
    "glutenType": "Easily digestible Alpha-gliadin free structure"
  }
},
{
  "id": "traditional-basmati-rice",
  "title": "Dehraduni Traditional Aged Basmati Rice (1121 Grain)",
  "slug": "dehraduni-traditional-basmati-rice",
  "category": "grains-staples",
  "subCategory": "rice-grains",
  "fpoId": "fpo-doon-rice",
  "fpoName": "Doon Valley Himalayan Rice FPC",
  "fpoMembersCount": 1450,
  "leadFarmer": "Devendra Singh Rawat & Shivalik Terraced Paddy Growers",
  "farmName": "Doon Valley Terai Basmati Fields",
  "location": "Dehradun, Shivalik Foothills, Uttarakhand",
  "state": "Uttarakhand",
  "stateCode": "UK",
  "rating": 4.97,
  "reviewsCount": 2100,
  "price": 699,
  "retailUnit": "5 kg Heritage Cotton Bag (Aged 24 Months)",
  "retailPricePerKg": 140,
  "defaultWeight": "5 kg Cloth Bag",
  "bulkPrice": 95,
  "bulkUnit": "per kg (₹9,500/quintal)",
  "bulkMOQ": 100,
  "bulkPackaging": "50 kg airtight woven sacks with aroma barrier",
  "bulkTiers": [
    {
      "minQty": 100,
      "maxQty": 500,
      "pricePerKg": 105,
      "label": "100 - 500 kg (Hotels, Biryani Chains & Caterers)"
    },
    {
      "minQty": 500,
      "maxQty": 2000,
      "pricePerKg": 95,
      "label": "500 - 2,000 kg (Supermarkets & Exporters)"
    },
    {
      "minQty": 2000,
      "maxQty": 25000,
      "pricePerKg": 86,
      "label": "2 MT+ (Container Load Export)"
    }
  ],
  "mandiPriceComp": {
    "mandiFarmerRate": 58,
    "kisanConnectFarmerPayout": 95,
    "supermarketRetailRate": 195,
    "kisanConnectRetailPrice": 140,
    "kisanConnectBulkPrice": 95,
    "farmerGainPercent": 64,
    "buyerSavingsPercent": 28,
    "bulkBuyerSavingsPercent": 51
  },
  "earliestDelivery": "Dispatched within 24h",
  "harvestSeason": "October - December (Autumn Paddy Harvest)",
  "cultivation": "Glacier-Fed Mountain Terai Soil (Naturally Aged 2 Years)",
  "badges": [
    "Aged 2 Years",
    "Extra-Long Grain 8.4mm",
    "Royal Aroma",
    "Zero Chemical Polish"
  ],
  "images": [
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&auto=format&fit=crop&q=80"
  ],
  "description": "Authentic long-grain Basmati rice grown in the microclimate of the Doon Valley, fed by Himalayan spring waters. Naturally aged for 24 months in temperature-regulated wooden silos so the moisture drops, allowing the grains to cook into non-sticky, separate, fragrant plumes extending up to 24mm on boiling.",
  "farmerStory": "Devendra Rawat and 1,450 family paddy growers preserve Uttarakhand's indigenous Basmati lineage. Traditional millers blended authentic Doon grain with cheap non-basmati hybrids. Direct KISAN sales guarantee 100% purity and double farmer net income.",
  "boxes": [
    {
      "size": "5 kg Cotton Cloth Bag",
      "price": 699,
      "pricePerKg": 140,
      "servings": "Gourmet biryani & pulao pack"
    },
    {
      "size": "10 kg Double Bag",
      "price": 1349,
      "pricePerKg": 135,
      "servings": "Monthly feast pack"
    },
    {
      "size": "50 kg Commercial Sack",
      "price": 4750,
      "pricePerKg": 95,
      "servings": "Restaurant & catering bulk lot"
    }
  ],
  "nutrition": {
    "grainLength": "8.4 mm uncooked (Elongates to 22-24mm)",
    "aging": "24 Months Natural Aging",
    "aromaCompound": "High natural 2-acetyl-1-pyrroline density",
    "purity": "100% Sortex Grade-1 Single Variety"
  }
},
{
  "id": "nellore-sona-masoori-rice",
  "title": "Andhra Nellore Sona Masoori Raw Rice (Aged 12M)",
  "slug": "nellore-sona-masoori-rice",
  "category": "grains-staples",
  "subCategory": "rice-grains",
  "fpoId": "fpo-godavari-rice",
  "fpoName": "Godavari Delta Rice Producer Co.",
  "fpoMembersCount": 2600,
  "leadFarmer": "K. Venkatasubbaiah & Delta Paddy Farmers",
  "farmName": "Pennar & Godavari River Basin Fields",
  "location": "Nellore, Andhra Pradesh",
  "state": "Andhra Pradesh",
  "stateCode": "AP",
  "rating": 4.94,
  "reviewsCount": 1420,
  "price": 680,
  "retailUnit": "10 kg Bag (Aged Daily Staple Rice)",
  "retailPricePerKg": 68,
  "defaultWeight": "10 kg Bag",
  "bulkPrice": 48,
  "bulkUnit": "per kg (₹4,800/quintal)",
  "bulkMOQ": 100,
  "bulkPackaging": "25 kg and 50 kg branded woven bags",
  "bulkTiers": [
    {
      "minQty": 100,
      "maxQty": 500,
      "pricePerKg": 52,
      "label": "100 - 500 kg (Restaurants & Hostel Canteens)"
    },
    {
      "minQty": 500,
      "maxQty": 2000,
      "pricePerKg": 48,
      "label": "500 - 2,000 kg (Retail Grocery Outlets)"
    },
    {
      "minQty": 2000,
      "maxQty": 20000,
      "pricePerKg": 43,
      "label": "2 MT+ (Institutional Canteens & Wholesale)"
    }
  ],
  "mandiPriceComp": {
    "mandiFarmerRate": 31,
    "kisanConnectFarmerPayout": 48,
    "supermarketRetailRate": 85,
    "kisanConnectRetailPrice": 68,
    "kisanConnectBulkPrice": 48,
    "farmerGainPercent": 55,
    "buyerSavingsPercent": 20,
    "bulkBuyerSavingsPercent": 44
  },
  "earliestDelivery": "Dispatched within 24h",
  "harvestSeason": "November - January (Kharif Harvest)",
  "cultivation": "Canal-Irrigated Alluvial Silt Soil (Zero Talc Polish)",
  "badges": [
    "Aged 12 Months",
    "Low Starch",
    "Light & Easy Digest",
    "Daily Staple"
  ],
  "images": [
    "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=800&auto=format&fit=crop&q=80"
  ],
  "description": "The quintessential South Indian daily staple rice from Nellore. Lightweight, aromatic, low in heavy starches, and naturally aged for 12 months. Fluffs up into soft, individual, non-sticky grains that are light on the stomach, ideal for daily dal-chawal, sambar rice, rasam, and curd rice.",
  "farmerStory": "Grown along the fertile deltas of Andhra Pradesh by 2,600 smallholder family farmers. Instead of selling moist paddy at distress rates to local brokers, the FPO operates its own modern dehusking plant and passes 70% of end consumer rupees back to farmers.",
  "boxes": [
    {
      "size": "10 kg Bag",
      "price": 680,
      "pricePerKg": 68,
      "servings": "Daily staple for 3-4 weeks"
    },
    {
      "size": "25 kg Master Bag",
      "price": 1625,
      "pricePerKg": 65,
      "servings": "Full month family pack"
    },
    {
      "size": "50 kg Wholesale Sack",
      "price": 2400,
      "pricePerKg": 48,
      "servings": "Canteen & hotel lot"
    }
  ],
  "nutrition": {
    "digestibility": "High (Low amylose formulation)",
    "carbohydrates": "78 g / 100g",
    "purity": "Zero Talcum Powder, Zero Paraffin Oil Glaze",
    "brokenGrains": "< 2% (Sortex Grade-1 Quality)"
  }
},
{
  "id": "nashik-farm-fresh-tomatoes",
  "title": "Farm-Fresh Desi Hybrid Tomatoes (Grade-A Firm & Juicy)",
  "slug": "farm-fresh-desi-tomatoes",
  "category": "vegetables",
  "subCategory": "daily-vegetables",
  "fpoId": "fpo-nashik-veggies",
  "fpoName": "Kolar & Nashik Vegetable Kisan Producer Co.",
  "fpoMembersCount": 4100,
  "leadFarmer": "Sunil Gite & Trellis Tomato Growers",
  "farmName": "Sahyadri Foothill Trellis Gardens",
  "location": "Dindori, Nashik, Maharashtra",
  "state": "Maharashtra",
  "stateCode": "MH",
  "rating": 4.91,
  "reviewsCount": 1670,
  "price": 149,
  "retailUnit": "5 kg Ventilated Eco-Crate (Approx 38-44 Tomatoes)",
  "retailPricePerKg": 30,
  "defaultWeight": "5 kg Eco-Crate",
  "bulkPrice": 18,
  "bulkUnit": "per kg (25 kg Mandi Crate)",
  "bulkMOQ": 50,
  "bulkPackaging": "25 kg stackable ventilated food-grade crates",
  "bulkTiers": [
    {
      "minQty": 50,
      "maxQty": 250,
      "pricePerKg": 22,
      "label": "50 - 250 kg (Restaurants, Dhabas & Cafes)"
    },
    {
      "minQty": 250,
      "maxQty": 1000,
      "pricePerKg": 18,
      "label": "250 - 1,000 kg (Puree & Sauce Processors)"
    },
    {
      "minQty": 1000,
      "maxQty": 10000,
      "pricePerKg": 15,
      "label": "1 MT+ (Wholesale Mandi Bypasses)"
    }
  ],
  "mandiPriceComp": {
    "mandiFarmerRate": 7,
    "kisanConnectFarmerPayout": 16,
    "supermarketRetailRate": 42,
    "kisanConnectRetailPrice": 30,
    "kisanConnectBulkPrice": 18,
    "farmerGainPercent": 128,
    "buyerSavingsPercent": 28,
    "bulkBuyerSavingsPercent": 57
  },
  "earliestDelivery": "Same-Day / Next Morning Express",
  "harvestSeason": "Year-Round (Harvested at 5 AM Daily)",
  "cultivation": "Trellis-Supported IPM Farming (Zero Chemical Dye)",
  "badges": [
    "Harvested at 5 AM",
    "High Lycopene",
    "Firm & Tangy",
    "No Mandi Distress"
  ],
  "images": [
    "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&auto=format&fit=crop&q=80"
  ],
  "description": "Vine-ripened, glossy, firm red tomatoes harvested daily at dawn from trellis-supported vines in Nashik and Kolar. Optically sorted to ensure thick pulp, bright red skin, high natural lycopene content, and the perfect balance of juicy sweetness and desi tanginess for curries, salads, and gravies.",
  "farmerStory": "In wholesale APMC mandis, tomato farmers are notoriously forced to dump crates for as low as ₹3/kg during seasonal gluts while consumers in cities pay ₹45/kg. KISAN's cold chain aggregation ensures farmers always receive at least ₹16/kg.",
  "boxes": [
    {
      "size": "5 kg Eco-Crate (38-44 pcs)",
      "price": 149,
      "pricePerKg": 30,
      "servings": "Household weekly fresh box"
    },
    {
      "size": "10 kg Double Crate",
      "price": 279,
      "pricePerKg": 28,
      "servings": "Joint family kitchen box"
    },
    {
      "size": "25 kg Commercial Crate",
      "price": 450,
      "pricePerKg": 18,
      "servings": "Restaurant & catering crate"
    }
  ],
  "nutrition": {
    "lycopene": "Natural antioxidant for heart health",
    "vitaminC": "28% Daily Value per 100g",
    "firmness": "High shelf life (Stays firm 7-9 days)",
    "waterContent": "94% natural plant hydration"
  }
},
{
  "id": "lasalgaon-red-onions",
  "title": "Nashik Lasalgaon Pungent Red Onions (Export Grade)",
  "slug": "nashik-lasalgaon-red-onions",
  "category": "vegetables",
  "subCategory": "daily-vegetables",
  "fpoId": "fpo-lasalgaon-onion",
  "fpoName": "Lasalgaon Onion Growers Cooperative",
  "fpoMembersCount": 5200,
  "leadFarmer": "Dattatray Pawar & Lasalgaon Kisan Sangathan",
  "farmName": "Lasalgaon Chawl Stored Onion Belts",
  "location": "Lasalgaon, Nashik, Maharashtra",
  "state": "Maharashtra",
  "stateCode": "MH",
  "rating": 4.96,
  "reviewsCount": 2340,
  "price": 175,
  "retailUnit": "5 kg Breathable Mesh Bag (Medium-Large Bulbs)",
  "retailPricePerKg": 35,
  "defaultWeight": "5 kg Mesh Bag",
  "bulkPrice": 22,
  "bulkUnit": "per kg (50 kg Jute Bag)",
  "bulkMOQ": 100,
  "bulkPackaging": "50 kg ventilated red leno mesh sacks",
  "bulkTiers": [
    {
      "minQty": 100,
      "maxQty": 500,
      "pricePerKg": 26,
      "label": "100 - 500 kg (Restaurants, Hotels & Hostels)"
    },
    {
      "minQty": 500,
      "maxQty": 2000,
      "pricePerKg": 22,
      "label": "500 - 2,000 kg (Retail Vegetable Chains)"
    },
    {
      "minQty": 2000,
      "maxQty": 30000,
      "pricePerKg": 19,
      "label": "2 MT+ (Export & Wholesale Lots)"
    }
  ],
  "mandiPriceComp": {
    "mandiFarmerRate": 12,
    "kisanConnectFarmerPayout": 22,
    "supermarketRetailRate": 48,
    "kisanConnectRetailPrice": 35,
    "kisanConnectBulkPrice": 22,
    "farmerGainPercent": 83,
    "buyerSavingsPercent": 27,
    "bulkBuyerSavingsPercent": 54
  },
  "earliestDelivery": "Dispatched within 24h",
  "harvestSeason": "November - May (Kharif & Late Rabi)",
  "cultivation": "Naturally Sun-Cured Chawl Storage (Zero Sprout Chemicals)",
  "badges": [
    "Lasalgaon Benchmark",
    "High Pungency",
    "3-Month Kitchen Shelf Life",
    "Grade-A 55mm+"
  ],
  "images": [
    "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=800&auto=format&fit=crop&q=80"
  ],
  "description": "Grown in Lasalgaon, the onion capital of Asia. Celebrated worldwide for its deep purple-red papery skin, crisp dense rings, and intense tear-inducing culinary pungency. Cured naturally in ventilated bamboo chawls for 3 weeks so they retain moisture without rotting or premature sprouting for up to 90 days in home kitchens.",
  "farmerStory": "Dattatray Pawar represents 5,200 small onion farmers. Middlemen cartels often trigger artificial price crashes at Lasalgaon Mandi auctions. By setting up direct online distribution, the cooperative locks in guaranteed returns for farmers and reasonable prices for homes.",
  "boxes": [
    {
      "size": "5 kg Breathable Mesh Bag",
      "price": 175,
      "pricePerKg": 35,
      "servings": "Family monthly cooking pack"
    },
    {
      "size": "10 kg Master Mesh Sack",
      "price": 329,
      "pricePerKg": 33,
      "servings": "2-month long-life pack"
    },
    {
      "size": "50 kg Wholesale Sack",
      "price": 1100,
      "pricePerKg": 22,
      "servings": "Bulk restaurant sack"
    }
  ],
  "nutrition": {
    "allicinPrecursors": "High sulfur pungent compounds",
    "quercetin": "Potent natural flavonoid antioxidant",
    "bulbCaliber": "50mm - 65mm Export Standard",
    "shelfLife": "Up to 90 days in dry ventilated spaces"
  }
},
{
  "id": "agra-kufri-potatoes",
  "title": "Agra Kufri Jyoti Table Potatoes (Thin Skin & Creamy)",
  "slug": "agra-kufri-table-potatoes",
  "category": "vegetables",
  "subCategory": "daily-vegetables",
  "fpoId": "fpo-yamuna-potato",
  "fpoName": "Yamuna Valley Potato Kisan Collective",
  "fpoMembersCount": 3100,
  "leadFarmer": "Raghuvir Singh & Agra Potato Farmers",
  "farmName": "Yamuna Alluvial Plains Potato Farms",
  "location": "Khandauli, Agra, Uttar Pradesh",
  "state": "Uttar Pradesh",
  "stateCode": "UP",
  "rating": 4.92,
  "reviewsCount": 1180,
  "price": 139,
  "retailUnit": "5 kg Natural Jute Sack (Medium Oval Tubers)",
  "retailPricePerKg": 28,
  "defaultWeight": "5 kg Jute Sack",
  "bulkPrice": 16,
  "bulkUnit": "per kg (50 kg Hessian Sack)",
  "bulkMOQ": 100,
  "bulkPackaging": "50 kg breathable heavy hessian bags",
  "bulkTiers": [
    {
      "minQty": 100,
      "maxQty": 500,
      "pricePerKg": 19,
      "label": "100 - 500 kg (Restaurants, Halwais & Canteens)"
    },
    {
      "minQty": 500,
      "maxQty": 2500,
      "pricePerKg": 16,
      "label": "500 - 2,500 kg (Snack & Samosa Processors)"
    },
    {
      "minQty": 2500,
      "maxQty": 35000,
      "pricePerKg": 13.5,
      "label": "2.5 MT+ (Cold Store Truckloads)"
    }
  ],
  "mandiPriceComp": {
    "mandiFarmerRate": 8,
    "kisanConnectFarmerPayout": 16,
    "supermarketRetailRate": 38,
    "kisanConnectRetailPrice": 28,
    "kisanConnectBulkPrice": 16,
    "farmerGainPercent": 100,
    "buyerSavingsPercent": 26,
    "bulkBuyerSavingsPercent": 58
  },
  "earliestDelivery": "Dispatched within 24h",
  "harvestSeason": "January - March (Winter Harvest)",
  "cultivation": "Loamy Alluvial Soil (Zero Sweetening Cold Storage)",
  "badges": [
    "Thin Skin",
    "Non-Sweet Natural Taste",
    "Creamy Boiling",
    "Direct Farm Gate"
  ],
  "images": [
    "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&auto=format&fit=crop&q=80"
  ],
  "description": "Grown in the fertile Yamuna basin soils of western Uttar Pradesh. Kufri Jyoti is India's most beloved table potato variety with clean, thin, cream-white skin and firm golden-white flesh. Unlike chemically treated cold-storage potatoes that turn unpleasantly sweet, these are naturally cured in dry pits for authentic savory taste.",
  "farmerStory": "Agra potato farmers often face devastating losses when local cold-storage owners confiscate harvest over unpaid rental fees. The Yamuna Valley Collective pools 3,100 farmers to bypass local middlemen and supply directly to consumers and bulk chip/samosa makers.",
  "boxes": [
    {
      "size": "5 kg Jute Sack",
      "price": 139,
      "pricePerKg": 28,
      "servings": "Household staple pack"
    },
    {
      "size": "10 kg Double Sack",
      "price": 259,
      "pricePerKg": 26,
      "servings": "Monthly kitchen reserve"
    },
    {
      "size": "50 kg Wholesale Hessian Sack",
      "price": 800,
      "pricePerKg": 16,
      "servings": "Bulk kitchen sack"
    }
  ],
  "nutrition": {
    "sugarContent": "Low (< 0.1% reducing sugars, no sweet aftertaste)",
    "potassium": "420 mg / 100g (Blood pressure balance)",
    "vitaminB6": "Essential energy cofactor",
    "cookingQuality": "High dry matter, never becomes soggy"
  }
},
{
  "id": "tender-green-bhindi",
  "title": "Tender Farm-Fresh Green Bhindi (Okra / Ladyfinger)",
  "slug": "tender-green-bhindi-okra",
  "category": "vegetables",
  "subCategory": "daily-vegetables",
  "fpoId": "fpo-nashik-veggies",
  "fpoName": "Anand Green Vegetable Kisan FPO",
  "fpoMembersCount": 1850,
  "leadFarmer": "Kishorbhai Patel & Anand Vegetable Growers",
  "farmName": "Charotar Alluvial Vegetable Orchards",
  "location": "Anand, Gujarat",
  "state": "Gujarat",
  "stateCode": "GJ",
  "rating": 4.91,
  "reviewsCount": 820,
  "price": 98,
  "retailUnit": "2 kg Aerated Basket (Tender & Slender)",
  "retailPricePerKg": 49,
  "defaultWeight": "2 kg Aerated Basket",
  "bulkPrice": 32,
  "bulkUnit": "per kg (20 kg Crates)",
  "bulkMOQ": 20,
  "bulkPackaging": "20 kg ventilated plastic harvest crates",
  "bulkTiers": [
    {
      "minQty": 20,
      "maxQty": 100,
      "pricePerKg": 36,
      "label": "20 - 100 kg (Restaurants & Cloud Kitchens)"
    },
    {
      "minQty": 100,
      "maxQty": 500,
      "pricePerKg": 32,
      "label": "100 - 500 kg (Supermarket Supply)"
    },
    {
      "minQty": 500,
      "maxQty": 5000,
      "pricePerKg": 27,
      "label": "500 kg+ (Commercial Catering)"
    }
  ],
  "mandiPriceComp": {
    "mandiFarmerRate": 16,
    "kisanConnectFarmerPayout": 32,
    "supermarketRetailRate": 65,
    "kisanConnectRetailPrice": 49,
    "kisanConnectBulkPrice": 32,
    "farmerGainPercent": 100,
    "buyerSavingsPercent": 25,
    "bulkBuyerSavingsPercent": 51
  },
  "earliestDelivery": "Harvested Dawn · Same-Day Dispatch",
  "harvestSeason": "Year-Round (Daily Morning Picking)",
  "cultivation": "Biological Pest Control (Neem & Trichoderma)",
  "badges": [
    "Zero Fiber Tip Snap",
    "Washed in Ozonated Water",
    "Pesticide Residue Free"
  ],
  "images": [
    "https://images.unsplash.com/photo-1425543103986-22abb7d7e8d2?w=800&auto=format&fit=crop&q=80"
  ],
  "description": "Small, slender, tender bright-green bhindi harvested daily at dawn. Each pod snaps cleanly at the tip with zero wooden fibers or woody seed cores. Ozonated-water washed to remove surface dirt and shipped express in perforated aerated baskets to prevent moisture heat.",
  "farmerStory": "1,850 vegetable farmers in the Charotar tract of Gujarat harvest tender pods before sunrise. By avoiding the APMC commission middleman, they ensure produce reaches city homes and restaurants within 24 hours of cutting.",
  "boxes": [
    {
      "size": "2 kg Aerated Basket",
      "price": 98,
      "pricePerKg": 49,
      "servings": "Weekly family subzi portion"
    },
    {
      "size": "5 kg Kitchen Box",
      "price": 225,
      "pricePerKg": 45,
      "servings": "Large family pack"
    },
    {
      "size": "20 kg Harvest Crate",
      "price": 640,
      "pricePerKg": 32,
      "servings": "Restaurant bulk lot"
    }
  ],
  "nutrition": {
    "mucilageFiber": "Soluble dietary fiber for gut health",
    "folate": "Crucial for cell regeneration",
    "freshness": "100% Crisp snap guarantee"
  }
},
{
  "id": "snow-white-cauliflower",
  "title": "Snow-White Farm Cauliflower (Phool Gobhi - 3 Heads)",
  "slug": "snow-white-fresh-cauliflower",
  "category": "vegetables",
  "subCategory": "daily-vegetables",
  "fpoId": "fpo-nashik-veggies",
  "fpoName": "Malwa Agri Fresh Producers Collective",
  "fpoMembersCount": 1600,
  "leadFarmer": "Gurpreet Singh & Malwa Green Growers",
  "farmName": "Sutlej-Malwa Green Belt Fields",
  "location": "Ludhiana & Sangrur, Punjab",
  "state": "Punjab",
  "stateCode": "PB",
  "rating": 4.9,
  "reviewsCount": 610,
  "price": 119,
  "retailUnit": "Pack of 3 Large Tight Heads (~3.5 kg total)",
  "retailPricePerKg": 34,
  "defaultWeight": "3 Large Heads Pack",
  "bulkPrice": 24,
  "bulkUnit": "per kg (30 kg Crates)",
  "bulkMOQ": 30,
  "bulkPackaging": "30 kg ventilated wooden & plastic harvest crates",
  "bulkTiers": [
    {
      "minQty": 30,
      "maxQty": 150,
      "pricePerKg": 27,
      "label": "30 - 150 kg (Caterers & Halwais)"
    },
    {
      "minQty": 150,
      "maxQty": 600,
      "pricePerKg": 24,
      "label": "150 - 600 kg (Vegetable Retail Hubs)"
    },
    {
      "minQty": 600,
      "maxQty": 6000,
      "pricePerKg": 20,
      "label": "600 kg+ (Institutional Sourcing)"
    }
  ],
  "mandiPriceComp": {
    "mandiFarmerRate": 11,
    "kisanConnectFarmerPayout": 24,
    "supermarketRetailRate": 52,
    "kisanConnectRetailPrice": 34,
    "kisanConnectBulkPrice": 24,
    "farmerGainPercent": 118,
    "buyerSavingsPercent": 35,
    "bulkBuyerSavingsPercent": 54
  },
  "earliestDelivery": "Express Morning Dispatch",
  "harvestSeason": "October - March (Winter Crop)",
  "cultivation": "Natural Compost & Biopesticide Regimen",
  "badges": [
    "Dense Tight Curd",
    "Foliage Shielded",
    "Zero Synthetic Bleach"
  ],
  "images": [
    "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=800&auto=format&fit=crop&q=80"
  ],
  "description": "Dense, crisp, milk-white cauliflower curds protected by lush green wrapper leaves. Cut fresh with outer jacket leaves intact to preserve natural crispness and prevent yellowing during transit. Unbleached, clean, and delicious for Gobhi Aloo, parathas, and roasting.",
  "farmerStory": "Gurpreet Singh organizes 1,600 farmers across Punjab. Instead of loading open tractor-trolleys for middlemen in local mandis who deduct 30% for 'grading defects', harvest is packed in standardized crates for direct buyer fulfillment.",
  "boxes": [
    {
      "size": "3 Large Heads (~3.5 kg)",
      "price": 119,
      "pricePerKg": 34,
      "servings": "Weekly family pack"
    },
    {
      "size": "6 Large Heads Box (~7 kg)",
      "price": 219,
      "pricePerKg": 31,
      "servings": "Joint family pack"
    },
    {
      "size": "30 kg Bulk Crate",
      "price": 720,
      "pricePerKg": 24,
      "servings": "Catering bulk lot"
    }
  ],
  "nutrition": {
    "glucosinolates": "Powerful sulfur phytonutrients",
    "choline": "Brain & metabolic support",
    "fiber": "3 g per 100g curd"
  }
},
{
  "id": "desi-round-baingan",
  "title": "Desi Purple Bhartaa Baingan (Round Eggplant)",
  "slug": "desi-purple-bhartaa-baingan",
  "category": "vegetables",
  "subCategory": "daily-vegetables",
  "fpoId": "fpo-nashik-veggies",
  "fpoName": "Dharwad Organic Kisan FPC",
  "fpoMembersCount": 1350,
  "leadFarmer": "Basavaraj Patil & Karnataka Vegetable Growers",
  "farmName": "Dharwad Black Soil Vegetable Sanctuaries",
  "location": "Dharwad & Belagavi, Karnataka",
  "state": "Karnataka",
  "stateCode": "KA",
  "rating": 4.93,
  "reviewsCount": 540,
  "price": 129,
  "retailUnit": "3 kg Box (5-7 Large Round Baingan)",
  "retailPricePerKg": 43,
  "defaultWeight": "3 kg Box",
  "bulkPrice": 26,
  "bulkUnit": "per kg (25 kg Crates)",
  "bulkMOQ": 25,
  "bulkPackaging": "25 kg ventilated stackable crates",
  "bulkTiers": [
    {
      "minQty": 25,
      "maxQty": 100,
      "pricePerKg": 30,
      "label": "25 - 100 kg (Dhabas & Restaurants)"
    },
    {
      "minQty": 100,
      "maxQty": 500,
      "pricePerKg": 26,
      "label": "100 - 500 kg (Retail Outlets)"
    },
    {
      "minQty": 500,
      "maxQty": 5000,
      "pricePerKg": 22,
      "label": "500 kg+ (Wholesale)"
    }
  ],
  "mandiPriceComp": {
    "mandiFarmerRate": 12,
    "kisanConnectFarmerPayout": 26,
    "supermarketRetailRate": 60,
    "kisanConnectRetailPrice": 43,
    "kisanConnectBulkPrice": 26,
    "farmerGainPercent": 116,
    "buyerSavingsPercent": 28,
    "bulkBuyerSavingsPercent": 56
  },
  "earliestDelivery": "Express Morning Dispatch",
  "harvestSeason": "Year-Round (Weekly Picking)",
  "cultivation": "Chemical-Free Agroecological Management",
  "badges": [
    "Heirloom Seed",
    "Few Seeds High Pulp",
    "Smoky Roasting Flavor"
  ],
  "images": [
    "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=800&auto=format&fit=crop&q=80"
  ],
  "description": "Large, glossy, round deep-purple heirloom brinjals cultivated in the rich black soils of Karnataka. Harvested young so the seeds remain soft and translucent with dense, succulent, non-bitter white pulp. Celebrated for traditional smoked Baingan Bharta, Vangi Bhaat, and stuffed Ennegayi.",
  "farmerStory": "1,350 farmers in North Karnataka conserve indigenous open-pollinated brinjal landraces that resist pests naturally without heavy pesticide sprays. Direct farm dispatch delivers spotless, tender baingan directly to city kitchens.",
  "boxes": [
    {
      "size": "3 kg Box (5-7 large pcs)",
      "price": 129,
      "pricePerKg": 43,
      "servings": "Ideal for 3-4 bharta meals"
    },
    {
      "size": "6 kg Double Box",
      "price": 239,
      "pricePerKg": 40,
      "servings": "Family vegetable reserve"
    },
    {
      "size": "25 kg Commercial Crate",
      "price": 650,
      "pricePerKg": 26,
      "servings": "Restaurant & dhaba lot"
    }
  ],
  "nutrition": {
    "nasuninAntioxidant": "Potent anthocyanin in deep purple skin",
    "dietaryFiber": "High water-soluble pectin",
    "pulpRatio": "92% tender edible pulp"
  }
},
{
  "id": "guntur-chillies-ginger-combo",
  "title": "Guntur Fresh Green Chillies & Wayanad Ginger Pack",
  "slug": "guntur-green-chillies-fresh-ginger",
  "category": "vegetables",
  "subCategory": "daily-vegetables",
  "fpoId": "fpo-wayanad-spices",
  "fpoName": "Andhra-Kerala Spice & Vegetable Alliance",
  "fpoMembersCount": 1900,
  "leadFarmer": "K. Srinivas Rao & P. Varghese",
  "farmName": "Guntur-Wayanad Fresh Harvest Hub",
  "location": "Guntur (AP) & Wayanad (KL)",
  "state": "Andhra Pradesh",
  "stateCode": "AP",
  "rating": 4.95,
  "reviewsCount": 1130,
  "price": 189,
  "retailUnit": "1.5 kg Fresh Pouch (1 kg Ginger + 500g Chillies)",
  "retailPricePerKg": 126,
  "defaultWeight": "1.5 kg Dual Fresh Pack",
  "bulkPrice": 75,
  "bulkUnit": "per kg (20 kg Crates)",
  "bulkMOQ": 20,
  "bulkPackaging": "20 kg perforated fresh shipping cartons",
  "bulkTiers": [
    {
      "minQty": 20,
      "maxQty": 100,
      "pricePerKg": 85,
      "label": "20 - 100 kg (Restaurants & Cloud Kitchens)"
    },
    {
      "minQty": 100,
      "maxQty": 500,
      "pricePerKg": 75,
      "label": "100 - 500 kg (Spice & Veg Distributors)"
    },
    {
      "minQty": 500,
      "maxQty": 5000,
      "pricePerKg": 68,
      "label": "500 kg+ (Commercial Kitchens)"
    }
  ],
  "mandiPriceComp": {
    "mandiFarmerRate": 40,
    "kisanConnectFarmerPayout": 75,
    "supermarketRetailRate": 160,
    "kisanConnectRetailPrice": 126,
    "kisanConnectBulkPrice": 75,
    "farmerGainPercent": 88,
    "buyerSavingsPercent": 21,
    "bulkBuyerSavingsPercent": 53
  },
  "earliestDelivery": "Dispatched within 24h",
  "harvestSeason": "Year-Round (Weekly Fresh Digging)",
  "cultivation": "Agroforestry Shade Soil & Solar Drying",
  "badges": [
    "Spicy Teja Chilli",
    "Juicy Fiberless Ginger",
    "Essential Indian Tadka Pair"
  ],
  "images": [
    "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=800&auto=format&fit=crop&q=80"
  ],
  "description": "The indispensable soul of Indian cooking. Contains 1 kg of juicy, fiber-free fresh organic ginger rhizomes from the hill soils of Wayanad, paired with 500g of crisp, fiery Guntur green chillies bursting with spicy capsaicin. Shipped in micro-perforated humidity-controlled pouches.",
  "farmerStory": "An inter-state cooperative alliance between Andhra chilli farmers and Kerala ginger growers. By combining their logistics, farmers eliminate town mandi dalals and get fresh kitchen essentials directly to metro kitchens.",
  "boxes": [
    {
      "size": "1.5 kg Combo Pack (1kg Ginger + 500g Chilli)",
      "price": 189,
      "pricePerKg": 126,
      "servings": "Full month tadka pantry"
    },
    {
      "size": "3 kg Duo Pack (2kg Ginger + 1kg Chilli)",
      "price": 349,
      "pricePerKg": 116,
      "servings": "Family supply"
    },
    {
      "size": "20 kg Commercial Crate",
      "price": 1500,
      "pricePerKg": 75,
      "servings": "Commercial restaurant lot"
    }
  ],
  "nutrition": {
    "gingerolContent": "High active anti-inflammatory gingerols",
    "capsaicinHeat": "Guntur medium-high pungent heat level",
    "purity": "Zero synthetic color glaze"
  }
},
{
  "id": "mandsaur-desi-garlic",
  "title": "Mandsaur Desi White Pearl Garlic (High Allicin)",
  "slug": "mandsaur-desi-pearl-garlic",
  "category": "vegetables",
  "subCategory": "daily-vegetables",
  "fpoId": "fpo-sehore-wheat",
  "fpoName": "Malwa Garlic Producers Company",
  "fpoMembersCount": 1750,
  "leadFarmer": "Kailash Patidar & Mandsaur Garlic Kisans",
  "farmName": "Mandsaur Malwa Garlic Fields",
  "location": "Mandsaur, Madhya Pradesh",
  "state": "Madhya Pradesh",
  "stateCode": "MP",
  "rating": 4.96,
  "reviewsCount": 980,
  "price": 299,
  "retailUnit": "2 kg Ventilated Net Bag (Sun-Cured Dried Bulbs)",
  "retailPricePerKg": 150,
  "defaultWeight": "2 kg Net Bag",
  "bulkPrice": 110,
  "bulkUnit": "per kg (40 kg Jute Bag)",
  "bulkMOQ": 40,
  "bulkPackaging": "40 kg traditional breathable jute sacks",
  "bulkTiers": [
    {
      "minQty": 40,
      "maxQty": 200,
      "pricePerKg": 125,
      "label": "40 - 200 kg (Restaurants & Pickle Brands)"
    },
    {
      "minQty": 200,
      "maxQty": 1000,
      "pricePerKg": 110,
      "label": "200 - 1,000 kg (Garlic Paste Processors)"
    },
    {
      "minQty": 1000,
      "maxQty": 15000,
      "pricePerKg": 95,
      "label": "1 MT+ (Wholesale Spices Mandi)"
    }
  ],
  "mandiPriceComp": {
    "mandiFarmerRate": 65,
    "kisanConnectFarmerPayout": 110,
    "supermarketRetailRate": 220,
    "kisanConnectRetailPrice": 150,
    "kisanConnectBulkPrice": 110,
    "farmerGainPercent": 69,
    "buyerSavingsPercent": 32,
    "bulkBuyerSavingsPercent": 50
  },
  "earliestDelivery": "Dispatched within 24h",
  "harvestSeason": "February - April (Spring Harvest)",
  "cultivation": "Naturally Sun-Cured (Zero Chemical Chlorine Bleach)",
  "badges": [
    "High Allicin Medical Grade",
    "Sun Dried 20 Days",
    "Pungent Desi Flavor",
    "6-Month Shelf Life"
  ],
  "images": [
    "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?w=800&auto=format&fit=crop&q=80"
  ],
  "description": "Grown in Mandsaur, India's garlic capital. Unlike Chinese hybrid garlic which is flavorless and artificially chlorine-bleached white, Mandsaur Desi garlic has compact tight cloves, natural ivory-pinkish hue, and up to 300% higher allicin content. Delivers intense aromatic warmth and medicinal cardiovascular benefits.",
  "farmerStory": "1,750 garlic farmers in Mandsaur sun-dry bulbs on raised mesh beds for 20 days so they never spoil or rot in transit. Direct sales bypass town cartels that hoard garlic in cold stores to manipulate market prices.",
  "boxes": [
    {
      "size": "2 kg Ventilated Net Bag",
      "price": 299,
      "pricePerKg": 150,
      "servings": "Household 2-month reserve"
    },
    {
      "size": "5 kg Storage Sack",
      "price": 675,
      "pricePerKg": 135,
      "servings": "Long-term pantry garlic"
    },
    {
      "size": "40 kg Wholesale Sack",
      "price": 4400,
      "pricePerKg": 110,
      "servings": "Restaurant & paste processing sack"
    }
  ],
  "nutrition": {
    "allicinBioactivity": "Maximum natural sulfur concentration",
    "dryingLevel": "Fully cured (< 60% residual moisture)",
    "shelfLife": "6+ months in dry room temperature"
  }
},
{
  "id": "latur-unpolished-toor-dal",
  "title": "Latur Unpolished Desi Toor (Arhar) Dal",
  "slug": "latur-unpolished-toor-dal",
  "category": "pulses-dals",
  "subCategory": "pulses",
  "fpoId": "fpo-marathwada-pulses",
  "fpoName": "Marathwada Pulses & Grain Producers FPC",
  "fpoMembersCount": 2800,
  "leadFarmer": "Balasaheb Kadam & Latur Pulse Farmers",
  "farmName": "Marathwada Dryland Pulse Collective",
  "location": "Latur, Maharashtra",
  "state": "Maharashtra",
  "stateCode": "MH",
  "rating": 4.97,
  "reviewsCount": 2210,
  "price": 480,
  "retailUnit": "3 kg Cotton Bag (Zero Polish Arhar Dal)",
  "retailPricePerKg": 160,
  "defaultWeight": "3 kg Cotton Bag",
  "bulkPrice": 115,
  "bulkUnit": "per kg (50 kg Bag)",
  "bulkMOQ": 50,
  "bulkPackaging": "50 kg woven polypropylene bags with inner liner",
  "bulkTiers": [
    {
      "minQty": 50,
      "maxQty": 200,
      "pricePerKg": 128,
      "label": "50 - 200 kg (Restaurants, Hostels & Dhabas)"
    },
    {
      "minQty": 200,
      "maxQty": 1000,
      "pricePerKg": 115,
      "label": "200 - 1,000 kg (Retail Grocery Outlets)"
    },
    {
      "minQty": 1000,
      "maxQty": 20000,
      "pricePerKg": 105,
      "label": "1 MT+ (Institutional Canteen Contracts)"
    }
  ],
  "mandiPriceComp": {
    "mandiFarmerRate": 72,
    "kisanConnectFarmerPayout": 115,
    "supermarketRetailRate": 195,
    "kisanConnectRetailPrice": 160,
    "kisanConnectBulkPrice": 115,
    "farmerGainPercent": 60,
    "buyerSavingsPercent": 18,
    "bulkBuyerSavingsPercent": 41
  },
  "earliestDelivery": "Dispatched within 24h",
  "harvestSeason": "December - February (Winter Pulse Harvest)",
  "cultivation": "Rainfed Inter-Cropping (Zero Artificial Dye or Polish)",
  "badges": [
    "100% Unpolished",
    "Water-Milled",
    "Rich Earthen Aroma",
    "No Yellow Dye"
  ],
  "images": [
    "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80"
  ],
  "description": "Authentic desi pigeon pea (Toor / Arhar) dal from Latur, the pulse capital of India. Cleaned and split in local mini-dal mills using traditional water-milling without leather buffing, artificial oils, or chemical synthetic yellow dyes (Metanil yellow). Cooks quickly into a thick, fragrant, soulful dal tadka or sambhar.",
  "farmerStory": "2,800 rainfed pulse growers in Marathwada face volatile mandi broker syndicates. By processing toor directly in their farmer-owned milling cluster, members capture the value addition margin and supply pure unpolished dal directly to buyers.",
  "boxes": [
    {
      "size": "3 kg Cotton Bag",
      "price": 480,
      "pricePerKg": 160,
      "servings": "Monthly household dal supply"
    },
    {
      "size": "6 kg Double Pack",
      "price": 930,
      "pricePerKg": 155,
      "servings": "2-month family pantry"
    },
    {
      "size": "50 kg Wholesale Bag",
      "price": 5750,
      "pricePerKg": 115,
      "servings": "Canteen & hotel sack"
    }
  ],
  "nutrition": {
    "protein": "22.3 g / 100g (High Plant Protein)",
    "iron": "5.1 mg (Natural Blood Health)",
    "polish": "Zero Oil Glaze, Zero Marble Powder, Zero Dye",
    "cookingTime": "Cooks soft in 3 whistle pressure boils"
  }
},
{
  "id": "bikaner-whole-green-moong",
  "title": "Bikaner Desi Whole Green Moong Dal (High Sprouting)",
  "slug": "bikaner-whole-green-moong-dal",
  "category": "pulses-dals",
  "subCategory": "pulses",
  "fpoId": "fpo-rajasthan-mustard",
  "fpoName": "Thar Agro Cooperative Collective",
  "fpoMembersCount": 1700,
  "leadFarmer": "Ramkaran Saran & Thar Pulse Collective",
  "farmName": "Thar Desert Rainfed Pulse Fields",
  "location": "Bikaner & Nagaur, Rajasthan",
  "state": "Rajasthan",
  "stateCode": "RJ",
  "rating": 4.95,
  "reviewsCount": 780,
  "price": 360,
  "retailUnit": "3 kg Pack (Unpolished High-Sprouting Grain)",
  "retailPricePerKg": 120,
  "defaultWeight": "3 kg Pack",
  "bulkPrice": 92,
  "bulkUnit": "per kg (50 kg Bag)",
  "bulkMOQ": 50,
  "bulkPackaging": "50 kg heavy-duty woven bags",
  "bulkTiers": [
    {
      "minQty": 50,
      "maxQty": 200,
      "pricePerKg": 99,
      "label": "50 - 200 kg (Salad Brands & Gym Cafes)"
    },
    {
      "minQty": 200,
      "maxQty": 1000,
      "pricePerKg": 92,
      "label": "200 - 1,000 kg (Retail Outlets)"
    },
    {
      "minQty": 1000,
      "maxQty": 15000,
      "pricePerKg": 84,
      "label": "1 MT+ (Wholesale)"
    }
  ],
  "mandiPriceComp": {
    "mandiFarmerRate": 58,
    "kisanConnectFarmerPayout": 92,
    "supermarketRetailRate": 155,
    "kisanConnectRetailPrice": 120,
    "kisanConnectBulkPrice": 92,
    "farmerGainPercent": 59,
    "buyerSavingsPercent": 23,
    "bulkBuyerSavingsPercent": 41
  },
  "earliestDelivery": "Dispatched within 24h",
  "harvestSeason": "September - November (Kharif Harvest)",
  "cultivation": "Desert Rainfed Farming (Zero Radiation/Heat Treatment)",
  "badges": [
    "98% Sprout Vitality",
    "100% Unpolished",
    "High Plant Protein",
    "Light on Stomach"
  ],
  "images": [
    "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=800&auto=format&fit=crop&q=80"
  ],
  "description": "Cultivated in the arid mineral soils of Bikaner. Because these whole green grains are sun-cured naturally and never subjected to chemical fumigants or high-heat polishing, they retain 98% germination vitality—sprouting into crisp, nutrient-dense green shoots within 18 hours. Delicious for sprouted salads, curries, and moong cheela.",
  "farmerStory": "1,700 Thar desert farmers rely on short monsoon showers to grow protein-rich moong. Direct collective grading ensures that farmers receive top dollar for export-grade green pulses rather than selling at distress rates during harvest peaks.",
  "boxes": [
    {
      "size": "3 kg Pack",
      "price": 360,
      "pricePerKg": 120,
      "servings": "Daily sprout & dal pack"
    },
    {
      "size": "6 kg Double Pack",
      "price": 690,
      "pricePerKg": 115,
      "servings": "Family pantry pack"
    },
    {
      "size": "50 kg Wholesale Bag",
      "price": 4600,
      "pricePerKg": 92,
      "servings": "Bulk health food lot"
    }
  ],
  "nutrition": {
    "protein": "24 g / 100g",
    "sproutingRate": "98% within 18 hours at room temp",
    "dietaryFiber": "16 g (Prebiotic gut food)"
  }
},
{
  "id": "bundelkhand-desi-chana",
  "title": "Bundelkhand Desi Brown Chana (Bengal Gram)",
  "slug": "bundelkhand-desi-brown-chana",
  "category": "pulses-dals",
  "subCategory": "pulses",
  "fpoId": "fpo-sehore-wheat",
  "fpoName": "Bundelkhand Dryland Kisan FPO",
  "fpoMembersCount": 2150,
  "leadFarmer": "Hariom Tiwari & Bundelkhand Kisans",
  "farmName": "Bundelkhand Rainfed Legume Fields",
  "location": "Jhansi & Tikamgarh, Bundelkhand",
  "state": "Madhya Pradesh",
  "stateCode": "MP",
  "rating": 4.94,
  "reviewsCount": 890,
  "price": 420,
  "retailUnit": "5 kg Bag (Sun-Dried Whole Kala Chana)",
  "retailPricePerKg": 84,
  "defaultWeight": "5 kg Bag",
  "bulkPrice": 68,
  "bulkUnit": "per kg (50 kg Bag)",
  "bulkMOQ": 50,
  "bulkPackaging": "50 kg heavy-duty jute bags",
  "bulkTiers": [
    {
      "minQty": 50,
      "maxQty": 200,
      "pricePerKg": 74,
      "label": "50 - 200 kg (Caterers & Sattu Makers)"
    },
    {
      "minQty": 200,
      "maxQty": 1000,
      "pricePerKg": 68,
      "label": "200 - 1,000 kg (Retail Packaging)"
    },
    {
      "minQty": 1000,
      "maxQty": 25000,
      "pricePerKg": 62,
      "label": "1 MT+ (Wholesale Procurement)"
    }
  ],
  "mandiPriceComp": {
    "mandiFarmerRate": 44,
    "kisanConnectFarmerPayout": 68,
    "supermarketRetailRate": 115,
    "kisanConnectRetailPrice": 84,
    "kisanConnectBulkPrice": 68,
    "farmerGainPercent": 55,
    "buyerSavingsPercent": 27,
    "bulkBuyerSavingsPercent": 41
  },
  "earliestDelivery": "Dispatched within 24h",
  "harvestSeason": "March - April (Rabi Legume Harvest)",
  "cultivation": "Dryland Soil Ecology (Nitrogen-Fixing Crop)",
  "badges": [
    "Heirloom Kala Chana",
    "High Dietary Fiber",
    "Nutty Rich Taste",
    "Low Glycemic"
  ],
  "images": [
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80"
  ],
  "description": "Small, wrinkled, nutrient-dense brown desi chickpeas (Kala Chana) from the drought-hardy soils of Bundelkhand. Naturally rich in iron, zinc, and dietary fiber with a rich nutty flavor. Does not disintegrate when boiled, making it the gold standard for traditional dry chana masala, sattu flour, and prasad.",
  "farmerStory": "2,150 smallholder farmers in drought-prone Bundelkhand cultivate desi chana which enriches soil nitrogen naturally. KISAN direct sourcing guarantees fair prices that protect family farms during dry spells.",
  "boxes": [
    {
      "size": "5 kg Bag",
      "price": 420,
      "pricePerKg": 84,
      "servings": "Monthly breakfast sprout & curry pack"
    },
    {
      "size": "10 kg Master Bag",
      "price": 810,
      "pricePerKg": 81,
      "servings": "Joint family pack"
    },
    {
      "size": "50 kg Wholesale Bag",
      "price": 3400,
      "pricePerKg": 68,
      "servings": "Bulk kitchen & sattu lot"
    }
  ],
  "nutrition": {
    "iron": "4.3 mg / 100g",
    "dietaryFiber": "17 g (Exceptional satiety & blood sugar stability)",
    "protein": "20 g pure plant protein"
  }
},
{
  "id": "kolhapur-organic-jaggery",
  "title": "Kolhapur Natural Sugarcane Jaggery Blocks (Desi Gur)",
  "slug": "kolhapur-organic-sugarcane-jaggery",
  "category": "pantry-essentials",
  "subCategory": "traditional-sweeteners",
  "fpoId": "fpo-sahyadri",
  "fpoName": "Panchganga Sugarcane Kisan Collective",
  "fpoMembersCount": 1500,
  "leadFarmer": "Anand Chavan & Kolhapur Gur Makers",
  "farmName": "Panchganga River Basin Cane Farms",
  "location": "Karveer, Kolhapur, Maharashtra",
  "state": "Maharashtra",
  "stateCode": "MH",
  "rating": 4.96,
  "reviewsCount": 1540,
  "price": 299,
  "retailUnit": "4 kg Solid Block Box (100% Chemical-Free)",
  "retailPricePerKg": 75,
  "defaultWeight": "4 kg Block Box",
  "bulkPrice": 52,
  "bulkUnit": "per kg (25 kg Carton)",
  "bulkMOQ": 25,
  "bulkPackaging": "25 kg moisture-barrier heavy corrugated export boxes",
  "bulkTiers": [
    {
      "minQty": 25,
      "maxQty": 100,
      "pricePerKg": 58,
      "label": "25 - 100 kg (Sweet Shops, Bakeries & Cafes)"
    },
    {
      "minQty": 100,
      "maxQty": 500,
      "pricePerKg": 52,
      "label": "100 - 500 kg (Health Food & Confectionery)"
    },
    {
      "minQty": 500,
      "maxQty": 10000,
      "pricePerKg": 46,
      "label": "500 kg+ (Ayurvedic & Export)"
    }
  ],
  "mandiPriceComp": {
    "mandiFarmerRate": 32,
    "kisanConnectFarmerPayout": 52,
    "supermarketRetailRate": 110,
    "kisanConnectRetailPrice": 75,
    "kisanConnectBulkPrice": 52,
    "farmerGainPercent": 63,
    "buyerSavingsPercent": 32,
    "bulkBuyerSavingsPercent": 53
  },
  "earliestDelivery": "Dispatched within 24h",
  "harvestSeason": "November - March (Winter Cane Crushing)",
  "cultivation": "River-Irrigated Cane (Clarified with Wild Bhindi Mucilage)",
  "badges": [
    "Zero Sodium Hydrosulphite",
    "GI Kolhapur Gur",
    "Rich in Natural Iron",
    "100% Raw Cane Juice"
  ],
  "images": [
    "https://images.unsplash.com/photo-1607672632458-9eb56696346b?w=800&auto=format&fit=crop&q=80"
  ],
  "description": "World-renowned GI-tagged Kolhapur Jaggery (Desi Gur). Boiled in shallow open copper pans and clarified naturally using organic wild Bhindi (okra) extract—never bleached with toxic sodium hydrosulphite or artificial yellow food coloring. Retains its deep authentic golden-brown caramel hue, natural cane minerals, iron, and potassium.",
  "farmerStory": "Anand Chavan coordinates 1,500 traditional sugarcane farmers along the Panchganga river. Instead of handing cane to sugar mills that delay farmer payments by over 14 months, the collective produces pure artisanal jaggery with immediate cash payouts.",
  "boxes": [
    {
      "size": "4 kg Block Box (4x 1kg blocks)",
      "price": 299,
      "pricePerKg": 75,
      "servings": "Full household chai & dessert supply"
    },
    {
      "size": "8 kg Double Box",
      "price": 569,
      "pricePerKg": 71,
      "servings": "Pantry sweet reserve"
    },
    {
      "size": "25 kg Commercial Carton",
      "price": 1300,
      "pricePerKg": 52,
      "servings": "Bakery & sweet shop bulk"
    }
  ],
  "nutrition": {
    "iron": "11 mg / 100g (Prevents anemia naturally)",
    "magnesium": "Natural muscle and nerve relaxation",
    "purity": "Zero artificial bleach chemicals (Hydros-Free Lab Tested)"
  }
}
];
