// Reusable sleek vector SVG icons for KISAN
// Standardized Lucide/Feather stroke styling (zero emojis)

export const svgIcon = (paths, size = 18, className = '', extraAttrs = '') => `
  <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="feather-icon ${className}" ${extraAttrs} style="display:inline-block; vertical-align:middle; flex-shrink:0;">
    ${paths}
  </svg>
`;

export const IconShoppingBag = (s = 18, cls = '') => svgIcon(`
  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
  <line x1="3" y1="6" x2="21" y2="6"></line>
  <path d="M16 10a4 4 0 0 1-8 0"></path>
`, s, cls);

export const IconShoppingCart = (s = 18, cls = '') => svgIcon(`
  <circle cx="9" cy="21" r="1"></circle>
  <circle cx="20" cy="21" r="1"></circle>
  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
`, s, cls);

export const IconBuilding = (s = 18, cls = '') => svgIcon(`
  <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
  <line x1="9" y1="22" x2="9" y2="22.01"></line>
  <line x1="15" y1="22" x2="15" y2="22.01"></line>
  <line x1="9" y1="6" x2="9.01" y2="6"></line>
  <line x1="15" y1="6" x2="15.01" y2="6"></line>
  <line x1="9" y1="10" x2="9.01" y2="10"></line>
  <line x1="15" y1="10" x2="15.01" y2="10"></line>
  <line x1="9" y1="14" x2="9.01" y2="14"></line>
  <line x1="15" y1="14" x2="15.01" y2="14"></line>
  <line x1="9" y1="18" x2="9.01" y2="18"></line>
  <line x1="15" y1="18" x2="15.01" y2="18"></line>
`, s, cls);

export const IconSearch = (s = 18, cls = '') => svgIcon(`
  <circle cx="11" cy="11" r="8"></circle>
  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
`, s, cls);

export const IconUser = (s = 18, cls = '') => svgIcon(`
  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
  <circle cx="12" cy="7" r="4"></circle>
`, s, cls);

export const IconMapPin = (s = 18, cls = '') => svgIcon(`
  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
  <circle cx="12" cy="10" r="3"></circle>
`, s, cls);

export const IconChevronDown = (s = 16, cls = '') => svgIcon(`
  <polyline points="6 9 12 15 18 9"></polyline>
`, s, cls);

export const IconCheck = (s = 16, cls = '') => svgIcon(`
  <polyline points="20 6 9 17 4 12"></polyline>
`, s, cls);

export const IconCheckCircle = (s = 18, cls = '') => svgIcon(`
  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
  <polyline points="22 4 12 14.01 9 11.01"></polyline>
`, s, cls);

export const IconX = (s = 16, cls = '') => svgIcon(`
  <line x1="18" y1="6" x2="6" y2="18"></line>
  <line x1="6" y1="6" x2="18" y2="18"></line>
`, s, cls);

export const IconXCircle = (s = 18, cls = '') => svgIcon(`
  <circle cx="12" cy="12" r="10"></circle>
  <line x1="15" y1="9" x2="9" y2="15"></line>
  <line x1="9" y1="9" x2="15" y2="15"></line>
`, s, cls);

export const IconStar = (s = 16, cls = '') => svgIcon(`
  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" stroke="none"></polygon>
`, s, cls);

export const IconTruck = (s = 18, cls = '') => svgIcon(`
  <rect x="1" y="3" width="15" height="13"></rect>
  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
  <circle cx="5.5" cy="18.5" r="2.5"></circle>
  <circle cx="18.5" cy="18.5" r="2.5"></circle>
`, s, cls);

export const IconShield = (s = 18, cls = '') => svgIcon(`
  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
`, s, cls);

export const IconLeaf = (s = 18, cls = '') => svgIcon(`
  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
`, s, cls);

export const IconWheat = (s = 18, cls = '') => svgIcon(`
  <path d="M2 22 16 8"></path>
  <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path>
  <path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path>
  <path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path>
  <path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"></path>
  <path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"></path>
  <path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"></path>
  <path d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"></path>
`, s, cls);

export const IconBox = (s = 18, cls = '') => svgIcon(`
  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
  <line x1="12" y1="22.08" x2="12" y2="12"></line>
`, s, cls);

export const IconTrendingUp = (s = 18, cls = '') => svgIcon(`
  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
  <polyline points="17 6 23 6 23 12"></polyline>
`, s, cls);

export const IconCoffee = (s = 18, cls = '') => svgIcon(`
  <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
  <line x1="6" y1="1" x2="6" y2="4"></line>
  <line x1="10" y1="1" x2="10" y2="4"></line>
  <line x1="14" y1="1" x2="14" y2="4"></line>
`, s, cls);

export const IconApple = (s = 18, cls = '') => svgIcon(`
  <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
  <path d="M10 2c1 .5 2 2 2 5"></path>
`, s, cls);

export const IconMilk = (s = 18, cls = '') => svgIcon(`
  <path d="M8 2h8"></path>
  <path d="M9 2v3h6V2"></path>
  <path d="M6 7l1-2h10l1 2v13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7Z"></path>
  <path d="M6 13h12"></path>
`, s, cls);

export const IconSpice = (s = 18, cls = '') => svgIcon(`
  <path d="M12 2a5 5 0 0 1 5 5v13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7a5 5 0 0 1 5-5Z"></path>
  <path d="M7 11h10"></path>
  <circle cx="12" cy="16" r="1"></circle>
`, s, cls);

export const IconFlower = (s = 18, cls = '') => svgIcon(`
  <path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V12m4.5 0a4.5 4.5 0 1 1-4.5 4.5M16.5 12H12m-4.5 0a4.5 4.5 0 1 0 4.5 4.5M7.5 12H12m0 4.5V22"></path>
  <circle cx="12" cy="12" r="2"></circle>
`, s, cls);

export const IconSparkles = (s = 18, cls = '') => svgIcon(`
  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
`, s, cls);

export const IconUsers = (s = 18, cls = '') => svgIcon(`
  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
  <circle cx="9" cy="7" r="4"></circle>
  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
`, s, cls);

export const IconTag = (s = 18, cls = '') => svgIcon(`
  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
  <line x1="7" y1="7" x2="7.01" y2="7"></line>
`, s, cls);

export const IconAward = (s = 18, cls = '') => svgIcon(`
  <circle cx="12" cy="8" r="7"></circle>
  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
`, s, cls);

export const IconFileText = (s = 18, cls = '') => svgIcon(`
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
  <polyline points="14 2 14 8 20 8"></polyline>
  <line x1="16" y1="13" x2="8" y2="13"></line>
  <line x1="16" y1="17" x2="8" y2="17"></line>
  <polyline points="10 9 9 9 8 9"></polyline>
`, s, cls);

export const IconHotel = (s = 18, cls = '') => svgIcon(`
  <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"></path>
  <path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16"></path>
  <path d="M8 7h.01"></path>
  <path d="M16 7h.01"></path>
  <path d="M12 7h.01"></path>
  <path d="M12 11h.01"></path>
  <path d="M16 11h.01"></path>
  <path d="M8 11h.01"></path>
  <path d="M10 22v-4h4v4"></path>
`, s, cls);

export const IconStore = (s = 18, cls = '') => svgIcon(`
  <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path>
  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
  <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path>
  <path d="M2 7h20"></path>
`, s, cls);

export const IconFactory = (s = 18, cls = '') => svgIcon(`
  <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4L2 20Z"></path>
  <path d="M17 18h1"></path>
  <path d="M12 18h1"></path>
  <path d="M7 18h1"></path>
`, s, cls);

export const IconTractor = (s = 18, cls = '') => svgIcon(`
  <path d="m14 11 1-5h4l2 5"></path>
  <path d="M4 15h11a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H7"></path>
  <circle cx="6" cy="17" r="4"></circle>
  <circle cx="18" cy="18" r="2"></circle>
  <path d="M10 17h6"></path>
`, s, cls);

export const IconCoins = (s = 18, cls = '') => svgIcon(`
  <circle cx="8" cy="8" r="6"></circle>
  <path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
  <path d="M7 6h1v4"></path>
  <path d="m16.71 13.88.7.71-2.82 2.82"></path>
`, s, cls);

export const IconZap = (s = 18, cls = '') => svgIcon(`
  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
`, s, cls);

export const IconLock = (s = 18, cls = '') => svgIcon(`
  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
`, s, cls);

export const IconGift = (s = 18, cls = '') => svgIcon(`
  <polyline points="20 12 20 22 4 22 4 12"></polyline>
  <rect x="2" y="7" width="20" height="5"></rect>
  <line x1="12" y1="22" x2="12" y2="7"></line>
  <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
  <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
`, s, cls);

export const IconArrowRight = (s = 16, cls = '') => svgIcon(`
  <line x1="5" y1="12" x2="19" y2="12"></line>
  <polyline points="12 5 19 12 12 19"></polyline>
`, s, cls);

export const IconGrid = (s = 18, cls = '') => svgIcon(`
  <rect x="3" y="3" width="7" height="7"></rect>
  <rect x="14" y="3" width="7" height="7"></rect>
  <rect x="14" y="14" width="7" height="7"></rect>
  <rect x="3" y="14" width="7" height="7"></rect>
`, s, cls);

export const IconHelpCircle = (s = 18, cls = '') => svgIcon(`
  <circle cx="12" cy="12" r="10"></circle>
  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
  <line x1="12" y1="17" x2="12.01" y2="17"></line>
`, s, cls);

export const IconClock = (s = 18, cls = '') => svgIcon(`
  <circle cx="12" cy="12" r="10"></circle>
  <polyline points="12 6 12 12 16 14"></polyline>
`, s, cls);

export const IconPhone = (s = 18, cls = '') => svgIcon(`
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
`, s, cls);

export const IconCreditCard = (s = 18, cls = '') => svgIcon(`
  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
  <line x1="1" y1="10" x2="23" y2="10"></line>
`, s, cls);

export const IconScale = (s = 18, cls = '') => svgIcon(`
  <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
  <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
  <path d="M7 21h10"></path>
  <path d="M12 3v18"></path>
  <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
`, s, cls);

export const IconRotateCcw = (s = 18, cls = '') => svgIcon(`
  <polyline points="1 4 1 10 7 10"></polyline>
  <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
`, s, cls);

export const IconPlay = (s = 18, cls = '') => svgIcon(`
  <polygon points="5 3 19 12 5 21 5 3"></polygon>
`, s, cls);

export const IconChevronRight = (s = 16, cls = '') => svgIcon(`
  <polyline points="9 18 15 12 9 6"></polyline>
`, s, cls);

export const IconNavigation = (s = 18, cls = '') => svgIcon(`
  <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
`, s, cls);

export const IconLayers = (s = 18, cls = '') => svgIcon(`
  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
  <polyline points="2 17 12 22 22 17"></polyline>
  <polyline points="2 12 12 17 22 12"></polyline>
`, s, cls);
