// Script to generate routing configuration for all 120 apps
const fs = require('fs');
const path = require('path');

// All 120 apps organized by platform
const apps = {
  ios: [
    { name: 'CalmSpaceAI', repo: 'iOS_CalmSpaceAI', slug: 'calmspaceai', description: 'AI-powered meditation and mindfulness' },
    { name: 'ExpenseAI', repo: 'iOS_ExpenseAI', slug: 'expenseai', description: 'Smart expense tracking with AI' },
    { name: 'FitCoachAI', repo: 'iOS_FitCoachAI', slug: 'fitcoachai', description: 'Personal AI fitness coach' },
    { name: 'FluentAI', repo: 'iOS_FluentAI', slug: 'fluentai', description: 'AI language learning assistant' },
    { name: 'Letters', repo: 'iOS_Letters', slug: 'letters', description: 'Beautiful letter writing app' },
    { name: 'MealMindAI', repo: 'iOS_MealMindAI', slug: 'mealmindai', description: 'AI meal planning and nutrition' },
    { name: 'PhotoProAI', repo: 'iOS_PhotoProAI', slug: 'photoproai', description: 'Professional AI photo editing' },
    { name: 'ReadTrackAI', repo: 'iOS_ReadTrackAI', slug: 'readtrackai', description: 'AI-powered reading tracker' },
    { name: 'SleepWiseAI', repo: 'iOS_SleepWiseAI', slug: 'sleepwiseai', description: 'Smart sleep improvement coach' },
    { name: 'TaskMasterAI', repo: 'iOS_TaskMasterAI', slug: 'taskmasterai', description: 'AI task and project management' },
    { name: 'TaxWiseAI', repo: 'iOS_TaxWiseAI', slug: 'taxwiseai', description: 'Smart tax planning assistant' },
    { name: 'TherapySpaceAI', repo: 'iOS_TherapySpaceAI', slug: 'therapyspaceai', description: 'Mental wellness and therapy support' },
    { name: 'TripGeniusAI', repo: 'iOS_TripGeniusAI', slug: 'tripgeniusai', description: 'AI travel planning assistant' },
  ],
  android: [
    { name: 'GlowAI', repo: 'android_GlowAI', slug: 'glowai', description: 'AI beauty and skincare advisor' },
    { name: 'SafeCalc', repo: 'android_SafeCalc', slug: 'safecalc', description: 'Privacy-focused calculator' },
    { name: 'BoloCare', repo: 'android_BoloCare', slug: 'bolocare', description: 'Voice-based healthcare assistant' },
    { name: 'TrainSathi', repo: 'android_TrainSathi', slug: 'trainsathi', description: 'Indian Railways companion' },
    { name: 'Ayushman Card Manager', repo: 'android_ayushman-card-manager', slug: 'ayushman', description: 'Health insurance card management' },
    { name: 'Bachat Sahayak', repo: 'android_bachat-sahayak', slug: 'bachat', description: 'Savings and budget tracker' },
    { name: 'Beti Bachao', repo: 'android_beti-bachao', slug: 'betibachao', description: 'Girl child welfare schemes' },
    { name: 'Bhasha Buddy', repo: 'android_bhasha-buddy', slug: 'bhashabuddy', description: 'Indian language learning' },
    { name: 'Dukaan Sahayak', repo: 'android_dukaan-sahayak', slug: 'dukaan', description: 'Shop management assistant' },
    { name: 'Fasal Rakshak', repo: 'android_fasal-rakshak', slug: 'fasal', description: 'Crop protection guide' },
    { name: 'Gaon Gateway', repo: 'android_gaon-gateway', slug: 'gaon', description: 'Village connectivity hub' },
    { name: 'Karz Mukti', repo: 'android_karz-mukti', slug: 'karz', description: 'Debt freedom planner' },
    { name: 'Kisan Sahayak', repo: 'android_kisan-sahayak', slug: 'kisan', description: 'Farmer assistance app' },
    { name: 'Krishi Mitra', repo: 'android_krishi-mitra', slug: 'krishi', description: 'Agriculture companion' },
    { name: 'Majdoor Mitra', repo: 'android_majdoor-mitra', slug: 'majdoor', description: 'Labor rights and jobs' },
    { name: 'Pani Rakshak', repo: 'android_pani-rakshak', slug: 'pani', description: 'Water conservation tracker' },
    { name: 'Poshan Tracker', repo: 'android_poshan-tracker', slug: 'poshan', description: 'Nutrition monitoring' },
    { name: 'Safar Saathi', repo: 'android_safar-saathi', slug: 'safar', description: 'Travel companion' },
    { name: 'Sarkar Seva', repo: 'android_sarkar-seva', slug: 'sarkar', description: 'Government services portal' },
    { name: 'Seekho Kamao', repo: 'android_seekho-kamao', slug: 'seekhokamao', description: 'Skill development platform' },
    { name: 'Svachh Sahayak', repo: 'android_svachh-sahayak', slug: 'svachh', description: 'Cleanliness campaign support' },
    { name: 'Swasthya Sahayak', repo: 'android_swasthya-sahayak', slug: 'swasthya', description: 'Health services guide' },
    { name: 'Vidyarthi Sahayak', repo: 'android_vidyarthi-sahayak', slug: 'vidyarthi', description: 'Student assistance app' },
    { name: 'Village Job Board', repo: 'android_village-job-board', slug: 'villagejobs', description: 'Rural employment platform' },
    { name: 'BimaShield', repo: 'android_BimaShield', slug: 'bimashield', description: 'Insurance advisor' },
    { name: 'Apex LifeStyle', repo: 'Android_ApexLifeStyle', slug: 'apex', description: 'Luxury lifestyle management' },
    { name: 'Aurum', repo: 'Android_Aurum', slug: 'aurum', description: 'Premium concierge services' },
    { name: 'Bachat Sahayak', repo: 'Android_BachatSahayak', slug: 'bachatsahayak', description: 'Financial planning' },
    { name: 'Daily Needs Delivery', repo: 'Android_DailyNeedsDelivery', slug: 'dailyneeds', description: 'Essential goods delivery' },
    { name: 'Elder Care Connect', repo: 'Android_ElderCareConnect', slug: 'eldercare', description: 'Senior citizen care' },
    { name: 'Family Hub', repo: 'Android_FamilyHub', slug: 'familyhub', description: 'Family coordination app' },
    { name: 'Healthy Family', repo: 'Android_HealthyFamily', slug: 'healthyfamily', description: 'Family health tracker' },
    { name: 'Pinnacle', repo: 'Android_Pinnacle', slug: 'pinnacle', description: 'Achievement tracking' },
  ],
  macos: [
    { name: 'CreatorSuite', repo: 'mac_CreatorSuite', slug: 'creatorsuite', description: 'AI content creation studio' },
    { name: 'HealthCompanion', repo: 'mac_HealthCompanion', slug: 'healthcompanion', description: 'Comprehensive health management' },
    { name: 'LearnFlow', repo: 'mac_LearnFlow', slug: 'learnflow', description: 'Advanced learning platform' },
    { name: 'LifeLens', repo: 'mac_LifeLens', slug: 'lifelens', description: 'Life analytics and insights' },
    { name: 'LifeOS', repo: 'mac_LifeOS', slug: 'lifeos', description: 'Complete life management system' },
    { name: 'MemoryVault', repo: 'mac_MemoryVault', slug: 'memoryvault', description: 'Secure memory preservation' },
  ],
  visionos: [
    { name: 'AI Agent Coordinator', repo: 'visionOS_ai-agent-coordinator', slug: 'aiagent', description: 'Multi-agent AI orchestration' },
    { name: 'Energy Grid Visualizer', repo: 'visionOS_energy-grid-visualizer', slug: 'energygrid', description: 'Power grid management visualization' },
    { name: 'Construction Site Manager', repo: 'visionOS_construction-site-manager', slug: 'construction', description: 'Spatial construction management' },
    { name: 'Digital Twin Orchestrator', repo: 'visionOS_digital-twin-orchestrator', slug: 'digitaltwin', description: 'Real-time digital twin platform' },
    { name: 'Healthcare Ecosystem', repo: 'visionOS_healthcare-ecosystem-orchestrator', slug: 'healthcare', description: 'Medical facility coordination' },
    { name: 'Industrial CAD/CAM Suite', repo: 'visionOS_industrial-cad-cam-suite', slug: 'industrialcad', description: 'Professional design tools' },
    { name: 'Legal Discovery Universe', repo: 'visionOS_legal-discovery-universe', slug: 'legaldiscovery', description: 'Legal document analysis' },
    { name: 'Retail Space Optimizer', repo: 'visionOS_retail-space-optimizer', slug: 'retailspace', description: 'Store layout optimization' },
    { name: 'Spatial ERP', repo: 'visionOS_spatial-erp', slug: 'spatialerp', description: 'Enterprise resource planning' },
    { name: 'Spatial Meeting Platform', repo: 'visionOS_spatial-meeting-platform', slug: 'spatialmeeting', description: 'Immersive collaboration' },
    { name: 'Spatial Wellness Platform', repo: 'visionOS_spatial-wellness-platform', slug: 'spatialwellness', description: 'Holistic wellness in 3D' },
    { name: 'Supply Chain Control Tower', repo: 'visionOS_supply-chain-control-tower', slug: 'supplychain', description: 'Logistics visualization' },
    // Gaming apps (13 total)
    { name: 'Arena Esports', repo: 'visionOS_Gaming_arena-esports', slug: 'arenaesports', description: 'Competitive gaming arena' },
    { name: 'City Builder Tabletop', repo: 'visionOS_Gaming_city-builder-tabletop', slug: 'citybuilder', description: 'Tabletop city building' },
    { name: 'Escape Room Network', repo: 'visionOS_Gaming_escape-room-network', slug: 'escaperoom', description: 'Virtual escape rooms' },
    { name: 'Hide and Seek Evolved', repo: 'visionOS_Gaming_hide-and-seek-evolved', slug: 'hideandseek', description: 'Spatial hide and seek' },
    { name: 'Holographic Board Games', repo: 'visionOS_Gaming_holographic-board-games', slug: 'boardgames', description: '3D board game collection' },
    { name: 'Home Defense Strategy', repo: 'visionOS_Gaming_home-defense-strategy', slug: 'homedefense', description: 'Strategic defense game' },
    { name: 'Interactive Theater', repo: 'visionOS_Gaming_interactive-theater', slug: 'theater', description: 'Immersive storytelling' },
    { name: 'My Spatial Life', repo: 'visionOS_Gaming_myspatial-life', slug: 'myspatiallife', description: 'Life simulation in 3D' },
    { name: 'Mystery Investigation', repo: 'visionOS_Gaming_mystery-investigation', slug: 'mystery', description: 'Detective adventure game' },
    { name: 'Parkour Pathways', repo: 'visionOS_Gaming_parkour-pathways', slug: 'parkour', description: 'Spatial parkour challenge' },
    { name: 'Reality Realms RPG', repo: 'visionOS_Gaming_reality-realms-rpg', slug: 'realityrealms', description: 'Mixed reality RPG' },
    { name: 'Spatial Music Studio', repo: 'visionOS_Gaming_spatial-music-studio', slug: 'musicstudio', description: '3D music creation' },
    { name: 'Virtual Pet Ecosystem', repo: 'visionOS_Gaming_virtual-pet-ecosystem', slug: 'virtualpet', description: 'Virtual pet world' },
  ]
};

// Add remaining visionOS apps (55 more to reach 68 total)
const remainingVisionOS = [
  { name: 'Living Building System', repo: 'visionOS_Living-Building-System', slug: 'livingbuilding', description: 'Smart building management' },
  { name: 'Research Web Crawler', repo: 'visionOS_Research-Web-Crawler', slug: 'researchcrawler', description: 'Academic research tool' },
  { name: 'Spatial Code Reviewer', repo: 'visionOS_Spatial-Code-Reviewer', slug: 'codereview', description: 'Immersive code review' },
  { name: 'Architecture Time Machine', repo: 'visionOS_Architecture-Time-Machine', slug: 'archtime', description: 'Historical architecture explorer' },
  { name: 'Architectural Visualization Studio', repo: 'visionOS_architectural-visualization-studio', slug: 'archviz', description: 'Professional visualization' },
  { name: 'Board Meeting Dimension', repo: 'visionOS_board-meeting-dimension', slug: 'boardmeeting', description: 'Executive meeting space' },
  { name: 'Business Intelligence Suite', repo: 'visionOS_business-intelligence-suite', slug: 'bisuite', description: 'Data analytics platform' },
  { name: 'Cybersecurity Command Center', repo: 'visionOS_cybersecurity-command-center', slug: 'cybersecurity', description: 'Security operations center' },
  { name: 'Executive Briefing', repo: 'visionOS_executive-briefing', slug: 'execbriefing', description: 'Executive dashboard' },
  { name: 'Field Service AR', repo: 'visionOS_field-service-ar', slug: 'fieldservice', description: 'Field technician assistant' },
  { name: 'Financial Operations Platform', repo: 'visionOS_financial-operations-platform', slug: 'finops', description: 'Financial management suite' },
  { name: 'Financial Trading Cockpit', repo: 'visionOS_Financial-Trading-Cockpit', slug: 'trading', description: 'Professional trading platform' },
  { name: 'Financial Trading Dimension', repo: 'visionOS_financial-trading-dimension', slug: 'tradingdim', description: 'Market visualization' },
  { name: 'Industrial Safety Simulator', repo: 'visionOS_industrial-safety-simulator', slug: 'safetysim', description: 'Safety training platform' },
  { name: 'Innovation Laboratory', repo: 'visionOS_innovation-laboratory', slug: 'innovationlab', description: 'R&D collaboration space' },
  { name: 'Institutional Memory Vault', repo: 'visionOS_institutional-memory-vault', slug: 'memoryvault', description: 'Knowledge preservation' },
  { name: 'Insurance Risk Assessor', repo: 'visionOS_insurance-risk-assessor', slug: 'riskassessor', description: 'Insurance risk analysis' },
  { name: 'Language Immersion Rooms', repo: 'visionOS_Language-Immersion-Rooms', slug: 'language', description: 'Language learning environment' },
  { name: 'Medical Imaging Suite', repo: 'visionOS_Medical-Imaging-Suite', slug: 'medimaging', description: 'Medical visualization tools' },
  { name: 'Molecular Design Platform', repo: 'visionOS_molecular-design-platform', slug: 'molecular', description: 'Chemical design tool' },
  { name: 'Personal Finance Navigator', repo: 'visionOS_Personal-Finance-Navigator', slug: 'finnav', description: 'Personal finance management' },
  { name: 'Physical Digital Twins', repo: 'visionOS_Physical-Digital-Twins', slug: 'physicaltwins', description: 'Physical asset mirroring' },
  { name: 'Reality Annotation Platform', repo: 'visionOS_Reality-Annotation-Platform', slug: 'annotation', description: 'Spatial annotation tool' },
  { name: 'Real Estate Spatial', repo: 'visionOS_real-estate-spatial', slug: 'realestate', description: 'Property visualization' },
  { name: 'Regulatory Navigation Space', repo: 'visionOS_regulatory-navigation-space', slug: 'regulatory', description: 'Compliance navigator' },
  { name: 'Smart Agriculture', repo: 'visionOS_smart-agriculture', slug: 'smartag', description: 'Precision farming platform' },
  { name: 'Smart City Command Platform', repo: 'visionOS_smart-city-command-platform', slug: 'smartcity', description: 'Urban management system' },
  { name: 'Spatial HCM', repo: 'visionOS_spatial-hcm', slug: 'spatialhcm', description: 'Human capital management' },
  { name: 'Spatial Screenplay Workshop', repo: 'visionOS_Spatial-Screenplay-Workshop', slug: 'screenplay', description: 'Screenwriting studio' },
  { name: 'Surgical Training Universe', repo: 'visionOS_surgical-training-universe', slug: 'surgical', description: 'Medical training simulator' },
  { name: 'Sustainability Command', repo: 'visionOS_sustainability-command', slug: 'sustainability', description: 'Environmental monitoring' },
  { name: 'Virtual Collaboration Arena', repo: 'visionOS_virtual-collaboration-arena', slug: 'collaboration', description: 'Team workspace' },
  { name: 'Wardrobe Consultant', repo: 'visionOS_Wardrobe-Consultant', slug: 'wardrobe', description: 'Fashion styling assistant' },
  // Additional gaming apps
  { name: 'Mindfulness Meditation Realms', repo: 'visionOS_Gaming_mindfulness-meditation-realms', slug: 'mindfulness', description: 'Meditative experiences' },
  { name: 'Narrative Story Worlds', repo: 'visionOS_Gaming_narrative-story-worlds', slug: 'narrative', description: 'Interactive narratives' },
  { name: 'Reality Minecraft', repo: 'visionOS_Gaming_reality-minecraft', slug: 'realitymine', description: 'Spatial building game' },
  { name: 'Rhythm Flow', repo: 'visionOS_Gaming_rhythm-flow', slug: 'rhythm', description: 'Musical rhythm game' },
  { name: 'Spatial Arena Championship', repo: 'visionOS_Gaming_spatial-arena-championship', slug: 'spatialarena', description: 'Competitive arena battles' },
  { name: 'Spatial Pictionary', repo: 'visionOS_Gaming_spatial-pictionary', slug: 'pictionary', description: '3D drawing game' },
  { name: 'Time Machine Adventures', repo: 'visionOS_Gaming_time-machine-adventures', slug: 'timemachine', description: 'Historical adventure game' },
];

apps.visionos.push(...remainingVisionOS);

console.log(`Total apps: ${apps.ios.length + apps.android.length + apps.macos.length + apps.visionos.length}`);

// Generate rewrites for next.config.js
function generateRewrites() {
  const rewrites = [];

  Object.entries(apps).forEach(([platform, platformApps]) => {
    platformApps.forEach(app => {
      rewrites.push({
        source: `/${app.slug}`,
        destination: `https://akaash-nigam.github.io/${app.repo}/`,
        comment: `${app.name} - ${platform}`
      });
      // Also handle trailing slash
      rewrites.push({
        source: `/${app.slug}/:path*`,
        destination: `https://akaash-nigam.github.io/${app.repo}/:path*`,
        comment: `${app.name} assets - ${platform}`
      });
    });
  });

  return rewrites;
}

// Generate app list for homepage
function generateAppList() {
  const allApps = [];

  Object.entries(apps).forEach(([platform, platformApps]) => {
    platformApps.forEach(app => {
      allApps.push({
        name: app.name,
        platform: platform,
        url: `/${app.slug}`,
        description: app.description,
        githubUrl: `https://akaash-nigam.github.io/${app.repo}/`
      });
    });
  });

  return allApps;
}

// Generate next.config.js content
function generateNextConfig() {
  const rewrites = generateRewrites();

  const rewritesCode = rewrites
    .filter((r, i) => i % 2 === 0) // Only take the base paths, not the :path* versions
    .map(r => `      // ${r.comment}
      {
        source: '/${r.source.substring(1)}',
        destination: '${r.destination}',
      },
      {
        source: '/${r.source.substring(1)}/:path*',
        destination: '${r.destination.replace(/\/$/, '')}/:path*',
      },`)
    .join('\n');

  return `/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
${rewritesCode}
    ];
  },
};

module.exports = nextConfig;
`;
}

// Write files
const nextConfigContent = generateNextConfig();
const appList = generateAppList();

fs.writeFileSync(
  path.join(__dirname, '..', 'next.config.js'),
  nextConfigContent
);

fs.writeFileSync(
  path.join(__dirname, '..', 'app-data.json'),
  JSON.stringify(appList, null, 2)
);

console.log('✅ Generated next.config.js with', appList.length, 'apps');
console.log('✅ Generated app-data.json with app listings');
