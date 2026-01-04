/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      // CalmSpaceAI - ios
      {
        source: '/calmspaceai',
        destination: 'https://akaash-nigam.github.io/iOS_CalmSpaceAI/',
      },
      {
        source: '/calmspaceai/:path*',
        destination: 'https://akaash-nigam.github.io/iOS_CalmSpaceAI/:path*',
      },
      // ExpenseAI - ios
      {
        source: '/expenseai',
        destination: 'https://akaash-nigam.github.io/iOS_ExpenseAI/',
      },
      {
        source: '/expenseai/:path*',
        destination: 'https://akaash-nigam.github.io/iOS_ExpenseAI/:path*',
      },
      // FitCoachAI - ios
      {
        source: '/fitcoachai',
        destination: 'https://akaash-nigam.github.io/iOS_FitCoachAI/',
      },
      {
        source: '/fitcoachai/:path*',
        destination: 'https://akaash-nigam.github.io/iOS_FitCoachAI/:path*',
      },
      // FluentAI - ios
      {
        source: '/fluentai',
        destination: 'https://akaash-nigam.github.io/iOS_FluentAI/',
      },
      {
        source: '/fluentai/:path*',
        destination: 'https://akaash-nigam.github.io/iOS_FluentAI/:path*',
      },
      // Letters - ios
      {
        source: '/letters',
        destination: 'https://akaash-nigam.github.io/iOS_Letters/',
      },
      {
        source: '/letters/:path*',
        destination: 'https://akaash-nigam.github.io/iOS_Letters/:path*',
      },
      // MealMindAI - ios
      {
        source: '/mealmindai',
        destination: 'https://akaash-nigam.github.io/iOS_MealMindAI/',
      },
      {
        source: '/mealmindai/:path*',
        destination: 'https://akaash-nigam.github.io/iOS_MealMindAI/:path*',
      },
      // PhotoProAI - ios
      {
        source: '/photoproai',
        destination: 'https://akaash-nigam.github.io/iOS_PhotoProAI/',
      },
      {
        source: '/photoproai/:path*',
        destination: 'https://akaash-nigam.github.io/iOS_PhotoProAI/:path*',
      },
      // ReadTrackAI - ios
      {
        source: '/readtrackai',
        destination: 'https://akaash-nigam.github.io/iOS_ReadTrackAI/',
      },
      {
        source: '/readtrackai/:path*',
        destination: 'https://akaash-nigam.github.io/iOS_ReadTrackAI/:path*',
      },
      // SleepWiseAI - ios
      {
        source: '/sleepwiseai',
        destination: 'https://akaash-nigam.github.io/iOS_SleepWiseAI/',
      },
      {
        source: '/sleepwiseai/:path*',
        destination: 'https://akaash-nigam.github.io/iOS_SleepWiseAI/:path*',
      },
      // TaskMasterAI - ios
      {
        source: '/taskmasterai',
        destination: 'https://akaash-nigam.github.io/iOS_TaskMasterAI/',
      },
      {
        source: '/taskmasterai/:path*',
        destination: 'https://akaash-nigam.github.io/iOS_TaskMasterAI/:path*',
      },
      // TaxWiseAI - ios
      {
        source: '/taxwiseai',
        destination: 'https://akaash-nigam.github.io/iOS_TaxWiseAI/',
      },
      {
        source: '/taxwiseai/:path*',
        destination: 'https://akaash-nigam.github.io/iOS_TaxWiseAI/:path*',
      },
      // TherapySpaceAI - ios
      {
        source: '/therapyspaceai',
        destination: 'https://akaash-nigam.github.io/iOS_TherapySpaceAI/',
      },
      {
        source: '/therapyspaceai/:path*',
        destination: 'https://akaash-nigam.github.io/iOS_TherapySpaceAI/:path*',
      },
      // TripGeniusAI - ios
      {
        source: '/tripgeniusai',
        destination: 'https://akaash-nigam.github.io/iOS_TripGeniusAI/',
      },
      {
        source: '/tripgeniusai/:path*',
        destination: 'https://akaash-nigam.github.io/iOS_TripGeniusAI/:path*',
      },
      // GlowAI - android
      {
        source: '/glowai',
        destination: 'https://akaash-nigam.github.io/android_GlowAI/',
      },
      {
        source: '/glowai/:path*',
        destination: 'https://akaash-nigam.github.io/android_GlowAI/:path*',
      },
      // SafeCalc - android
      {
        source: '/safecalc',
        destination: 'https://akaash-nigam.github.io/android_SafeCalc/',
      },
      {
        source: '/safecalc/:path*',
        destination: 'https://akaash-nigam.github.io/android_SafeCalc/:path*',
      },
      // BoloCare - android
      {
        source: '/bolocare',
        destination: 'https://akaash-nigam.github.io/android_BoloCare/',
      },
      {
        source: '/bolocare/:path*',
        destination: 'https://akaash-nigam.github.io/android_BoloCare/:path*',
      },
      // TrainSathi - android
      {
        source: '/trainsathi',
        destination: 'https://akaash-nigam.github.io/android_TrainSathi/',
      },
      {
        source: '/trainsathi/:path*',
        destination: 'https://akaash-nigam.github.io/android_TrainSathi/:path*',
      },
      // Ayushman Card Manager - android
      {
        source: '/ayushman',
        destination: 'https://akaash-nigam.github.io/android_ayushman-card-manager/',
      },
      {
        source: '/ayushman/:path*',
        destination: 'https://akaash-nigam.github.io/android_ayushman-card-manager/:path*',
      },
      // Bachat Sahayak - android
      {
        source: '/bachat',
        destination: 'https://akaash-nigam.github.io/android_bachat-sahayak/',
      },
      {
        source: '/bachat/:path*',
        destination: 'https://akaash-nigam.github.io/android_bachat-sahayak/:path*',
      },
      // Beti Bachao - android
      {
        source: '/betibachao',
        destination: 'https://akaash-nigam.github.io/android_beti-bachao/',
      },
      {
        source: '/betibachao/:path*',
        destination: 'https://akaash-nigam.github.io/android_beti-bachao/:path*',
      },
      // Bhasha Buddy - android
      {
        source: '/bhashabuddy',
        destination: 'https://akaash-nigam.github.io/android_bhasha-buddy/',
      },
      {
        source: '/bhashabuddy/:path*',
        destination: 'https://akaash-nigam.github.io/android_bhasha-buddy/:path*',
      },
      // Dukaan Sahayak - android
      {
        source: '/dukaan',
        destination: 'https://akaash-nigam.github.io/android_dukaan-sahayak/',
      },
      {
        source: '/dukaan/:path*',
        destination: 'https://akaash-nigam.github.io/android_dukaan-sahayak/:path*',
      },
      // Fasal Rakshak - android
      {
        source: '/fasal',
        destination: 'https://akaash-nigam.github.io/android_fasal-rakshak/',
      },
      {
        source: '/fasal/:path*',
        destination: 'https://akaash-nigam.github.io/android_fasal-rakshak/:path*',
      },
      // Gaon Gateway - android
      {
        source: '/gaon',
        destination: 'https://akaash-nigam.github.io/android_gaon-gateway/',
      },
      {
        source: '/gaon/:path*',
        destination: 'https://akaash-nigam.github.io/android_gaon-gateway/:path*',
      },
      // Karz Mukti - android
      {
        source: '/karz',
        destination: 'https://akaash-nigam.github.io/android_karz-mukti/',
      },
      {
        source: '/karz/:path*',
        destination: 'https://akaash-nigam.github.io/android_karz-mukti/:path*',
      },
      // Kisan Sahayak - android
      {
        source: '/kisan',
        destination: 'https://akaash-nigam.github.io/android_kisan-sahayak/',
      },
      {
        source: '/kisan/:path*',
        destination: 'https://akaash-nigam.github.io/android_kisan-sahayak/:path*',
      },
      // Krishi Mitra - android
      {
        source: '/krishi',
        destination: 'https://akaash-nigam.github.io/android_krishi-mitra/',
      },
      {
        source: '/krishi/:path*',
        destination: 'https://akaash-nigam.github.io/android_krishi-mitra/:path*',
      },
      // Majdoor Mitra - android
      {
        source: '/majdoor',
        destination: 'https://akaash-nigam.github.io/android_majdoor-mitra/',
      },
      {
        source: '/majdoor/:path*',
        destination: 'https://akaash-nigam.github.io/android_majdoor-mitra/:path*',
      },
      // Pani Rakshak - android
      {
        source: '/pani',
        destination: 'https://akaash-nigam.github.io/android_pani-rakshak/',
      },
      {
        source: '/pani/:path*',
        destination: 'https://akaash-nigam.github.io/android_pani-rakshak/:path*',
      },
      // Poshan Tracker - android
      {
        source: '/poshan',
        destination: 'https://akaash-nigam.github.io/android_poshan-tracker/',
      },
      {
        source: '/poshan/:path*',
        destination: 'https://akaash-nigam.github.io/android_poshan-tracker/:path*',
      },
      // Safar Saathi - android
      {
        source: '/safar',
        destination: 'https://akaash-nigam.github.io/android_safar-saathi/',
      },
      {
        source: '/safar/:path*',
        destination: 'https://akaash-nigam.github.io/android_safar-saathi/:path*',
      },
      // Sarkar Seva - android
      {
        source: '/sarkar',
        destination: 'https://akaash-nigam.github.io/android_sarkar-seva/',
      },
      {
        source: '/sarkar/:path*',
        destination: 'https://akaash-nigam.github.io/android_sarkar-seva/:path*',
      },
      // Seekho Kamao - android
      {
        source: '/seekhokamao',
        destination: 'https://akaash-nigam.github.io/android_seekho-kamao/',
      },
      {
        source: '/seekhokamao/:path*',
        destination: 'https://akaash-nigam.github.io/android_seekho-kamao/:path*',
      },
      // Svachh Sahayak - android
      {
        source: '/svachh',
        destination: 'https://akaash-nigam.github.io/android_svachh-sahayak/',
      },
      {
        source: '/svachh/:path*',
        destination: 'https://akaash-nigam.github.io/android_svachh-sahayak/:path*',
      },
      // Swasthya Sahayak - android
      {
        source: '/swasthya',
        destination: 'https://akaash-nigam.github.io/android_swasthya-sahayak/',
      },
      {
        source: '/swasthya/:path*',
        destination: 'https://akaash-nigam.github.io/android_swasthya-sahayak/:path*',
      },
      // Vidyarthi Sahayak - android
      {
        source: '/vidyarthi',
        destination: 'https://akaash-nigam.github.io/android_vidyarthi-sahayak/',
      },
      {
        source: '/vidyarthi/:path*',
        destination: 'https://akaash-nigam.github.io/android_vidyarthi-sahayak/:path*',
      },
      // Village Job Board - android
      {
        source: '/villagejobs',
        destination: 'https://akaash-nigam.github.io/android_village-job-board/',
      },
      {
        source: '/villagejobs/:path*',
        destination: 'https://akaash-nigam.github.io/android_village-job-board/:path*',
      },
      // BimaShield - android
      {
        source: '/bimashield',
        destination: 'https://akaash-nigam.github.io/android_BimaShield/',
      },
      {
        source: '/bimashield/:path*',
        destination: 'https://akaash-nigam.github.io/android_BimaShield/:path*',
      },
      // Apex LifeStyle - android
      {
        source: '/apex',
        destination: 'https://akaash-nigam.github.io/Android_ApexLifeStyle/',
      },
      {
        source: '/apex/:path*',
        destination: 'https://akaash-nigam.github.io/Android_ApexLifeStyle/:path*',
      },
      // Aurum - android
      {
        source: '/aurum',
        destination: 'https://akaash-nigam.github.io/Android_Aurum/',
      },
      {
        source: '/aurum/:path*',
        destination: 'https://akaash-nigam.github.io/Android_Aurum/:path*',
      },
      // Bachat Sahayak - android
      {
        source: '/bachatsahayak',
        destination: 'https://akaash-nigam.github.io/Android_BachatSahayak/',
      },
      {
        source: '/bachatsahayak/:path*',
        destination: 'https://akaash-nigam.github.io/Android_BachatSahayak/:path*',
      },
      // Daily Needs Delivery - android
      {
        source: '/dailyneeds',
        destination: 'https://akaash-nigam.github.io/Android_DailyNeedsDelivery/',
      },
      {
        source: '/dailyneeds/:path*',
        destination: 'https://akaash-nigam.github.io/Android_DailyNeedsDelivery/:path*',
      },
      // Elder Care Connect - android
      {
        source: '/eldercare',
        destination: 'https://akaash-nigam.github.io/Android_ElderCareConnect/',
      },
      {
        source: '/eldercare/:path*',
        destination: 'https://akaash-nigam.github.io/Android_ElderCareConnect/:path*',
      },
      // Family Hub - android
      {
        source: '/familyhub',
        destination: 'https://akaash-nigam.github.io/Android_FamilyHub/',
      },
      {
        source: '/familyhub/:path*',
        destination: 'https://akaash-nigam.github.io/Android_FamilyHub/:path*',
      },
      // Healthy Family - android
      {
        source: '/healthyfamily',
        destination: 'https://akaash-nigam.github.io/Android_HealthyFamily/',
      },
      {
        source: '/healthyfamily/:path*',
        destination: 'https://akaash-nigam.github.io/Android_HealthyFamily/:path*',
      },
      // Pinnacle - android
      {
        source: '/pinnacle',
        destination: 'https://akaash-nigam.github.io/Android_Pinnacle/',
      },
      {
        source: '/pinnacle/:path*',
        destination: 'https://akaash-nigam.github.io/Android_Pinnacle/:path*',
      },
      // CreatorSuite - macos
      {
        source: '/creatorsuite',
        destination: 'https://akaash-nigam.github.io/mac_CreatorSuite/',
      },
      {
        source: '/creatorsuite/:path*',
        destination: 'https://akaash-nigam.github.io/mac_CreatorSuite/:path*',
      },
      // HealthCompanion - macos
      {
        source: '/healthcompanion',
        destination: 'https://akaash-nigam.github.io/mac_HealthCompanion/',
      },
      {
        source: '/healthcompanion/:path*',
        destination: 'https://akaash-nigam.github.io/mac_HealthCompanion/:path*',
      },
      // LearnFlow - macos
      {
        source: '/learnflow',
        destination: 'https://akaash-nigam.github.io/mac_LearnFlow/',
      },
      {
        source: '/learnflow/:path*',
        destination: 'https://akaash-nigam.github.io/mac_LearnFlow/:path*',
      },
      // LifeLens - macos
      {
        source: '/lifelens',
        destination: 'https://akaash-nigam.github.io/mac_LifeLens/',
      },
      {
        source: '/lifelens/:path*',
        destination: 'https://akaash-nigam.github.io/mac_LifeLens/:path*',
      },
      // LifeOS - macos
      {
        source: '/lifeos',
        destination: 'https://akaash-nigam.github.io/mac_LifeOS/',
      },
      {
        source: '/lifeos/:path*',
        destination: 'https://akaash-nigam.github.io/mac_LifeOS/:path*',
      },
      // MemoryVault - macos
      {
        source: '/memoryvault',
        destination: 'https://akaash-nigam.github.io/mac_MemoryVault/',
      },
      {
        source: '/memoryvault/:path*',
        destination: 'https://akaash-nigam.github.io/mac_MemoryVault/:path*',
      },
      // AI Agent Coordinator - visionos
      {
        source: '/aiagent',
        destination: 'https://akaash-nigam.github.io/visionOS_ai-agent-coordinator/',
      },
      {
        source: '/aiagent/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_ai-agent-coordinator/:path*',
      },
      // Energy Grid Visualizer - visionos
      {
        source: '/energygrid',
        destination: 'https://akaash-nigam.github.io/visionOS_energy-grid-visualizer/',
      },
      {
        source: '/energygrid/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_energy-grid-visualizer/:path*',
      },
      // Construction Site Manager - visionos
      {
        source: '/construction',
        destination: 'https://akaash-nigam.github.io/visionOS_construction-site-manager/',
      },
      {
        source: '/construction/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_construction-site-manager/:path*',
      },
      // Digital Twin Orchestrator - visionos
      {
        source: '/digitaltwin',
        destination: 'https://akaash-nigam.github.io/visionOS_digital-twin-orchestrator/',
      },
      {
        source: '/digitaltwin/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_digital-twin-orchestrator/:path*',
      },
      // Healthcare Ecosystem - visionos
      {
        source: '/healthcare',
        destination: 'https://akaash-nigam.github.io/visionOS_healthcare-ecosystem-orchestrator/',
      },
      {
        source: '/healthcare/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_healthcare-ecosystem-orchestrator/:path*',
      },
      // Industrial CAD/CAM Suite - visionos
      {
        source: '/industrialcad',
        destination: 'https://akaash-nigam.github.io/visionOS_industrial-cad-cam-suite/',
      },
      {
        source: '/industrialcad/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_industrial-cad-cam-suite/:path*',
      },
      // Legal Discovery Universe - visionos
      {
        source: '/legaldiscovery',
        destination: 'https://akaash-nigam.github.io/visionOS_legal-discovery-universe/',
      },
      {
        source: '/legaldiscovery/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_legal-discovery-universe/:path*',
      },
      // Retail Space Optimizer - visionos
      {
        source: '/retailspace',
        destination: 'https://akaash-nigam.github.io/visionOS_retail-space-optimizer/',
      },
      {
        source: '/retailspace/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_retail-space-optimizer/:path*',
      },
      // Spatial ERP - visionos
      {
        source: '/spatialerp',
        destination: 'https://akaash-nigam.github.io/visionOS_spatial-erp/',
      },
      {
        source: '/spatialerp/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_spatial-erp/:path*',
      },
      // Spatial Meeting Platform - visionos
      {
        source: '/spatialmeeting',
        destination: 'https://akaash-nigam.github.io/visionOS_spatial-meeting-platform/',
      },
      {
        source: '/spatialmeeting/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_spatial-meeting-platform/:path*',
      },
      // Spatial Wellness Platform - visionos
      {
        source: '/spatialwellness',
        destination: 'https://akaash-nigam.github.io/visionOS_spatial-wellness-platform/',
      },
      {
        source: '/spatialwellness/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_spatial-wellness-platform/:path*',
      },
      // Supply Chain Control Tower - visionos
      {
        source: '/supplychain',
        destination: 'https://akaash-nigam.github.io/visionOS_supply-chain-control-tower/',
      },
      {
        source: '/supplychain/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_supply-chain-control-tower/:path*',
      },
      // Arena Esports - visionos
      {
        source: '/arenaesports',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_arena-esports/',
      },
      {
        source: '/arenaesports/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_arena-esports/:path*',
      },
      // City Builder Tabletop - visionos
      {
        source: '/citybuilder',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_city-builder-tabletop/',
      },
      {
        source: '/citybuilder/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_city-builder-tabletop/:path*',
      },
      // Escape Room Network - visionos
      {
        source: '/escaperoom',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_escape-room-network/',
      },
      {
        source: '/escaperoom/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_escape-room-network/:path*',
      },
      // Hide and Seek Evolved - visionos
      {
        source: '/hideandseek',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_hide-and-seek-evolved/',
      },
      {
        source: '/hideandseek/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_hide-and-seek-evolved/:path*',
      },
      // Holographic Board Games - visionos
      {
        source: '/boardgames',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_holographic-board-games/',
      },
      {
        source: '/boardgames/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_holographic-board-games/:path*',
      },
      // Home Defense Strategy - visionos
      {
        source: '/homedefense',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_home-defense-strategy/',
      },
      {
        source: '/homedefense/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_home-defense-strategy/:path*',
      },
      // Interactive Theater - visionos
      {
        source: '/theater',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_interactive-theater/',
      },
      {
        source: '/theater/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_interactive-theater/:path*',
      },
      // My Spatial Life - visionos
      {
        source: '/myspatiallife',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_myspatial-life/',
      },
      {
        source: '/myspatiallife/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_myspatial-life/:path*',
      },
      // Mystery Investigation - visionos
      {
        source: '/mystery',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_mystery-investigation/',
      },
      {
        source: '/mystery/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_mystery-investigation/:path*',
      },
      // Parkour Pathways - visionos
      {
        source: '/parkour',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_parkour-pathways/',
      },
      {
        source: '/parkour/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_parkour-pathways/:path*',
      },
      // Reality Realms RPG - visionos
      {
        source: '/realityrealms',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_reality-realms-rpg/',
      },
      {
        source: '/realityrealms/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_reality-realms-rpg/:path*',
      },
      // Spatial Music Studio - visionos
      {
        source: '/musicstudio',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_spatial-music-studio/',
      },
      {
        source: '/musicstudio/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_spatial-music-studio/:path*',
      },
      // Virtual Pet Ecosystem - visionos
      {
        source: '/virtualpet',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_virtual-pet-ecosystem/',
      },
      {
        source: '/virtualpet/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_virtual-pet-ecosystem/:path*',
      },
      // Living Building System - visionos
      {
        source: '/livingbuilding',
        destination: 'https://akaash-nigam.github.io/visionOS_Living-Building-System/',
      },
      {
        source: '/livingbuilding/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Living-Building-System/:path*',
      },
      // Research Web Crawler - visionos
      {
        source: '/researchcrawler',
        destination: 'https://akaash-nigam.github.io/visionOS_Research-Web-Crawler/',
      },
      {
        source: '/researchcrawler/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Research-Web-Crawler/:path*',
      },
      // Spatial Code Reviewer - visionos
      {
        source: '/codereview',
        destination: 'https://akaash-nigam.github.io/visionOS_Spatial-Code-Reviewer/',
      },
      {
        source: '/codereview/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Spatial-Code-Reviewer/:path*',
      },
      // Architecture Time Machine - visionos
      {
        source: '/archtime',
        destination: 'https://akaash-nigam.github.io/visionOS_Architecture-Time-Machine/',
      },
      {
        source: '/archtime/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Architecture-Time-Machine/:path*',
      },
      // Architectural Visualization Studio - visionos
      {
        source: '/archviz',
        destination: 'https://akaash-nigam.github.io/visionOS_architectural-visualization-studio/',
      },
      {
        source: '/archviz/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_architectural-visualization-studio/:path*',
      },
      // Board Meeting Dimension - visionos
      {
        source: '/boardmeeting',
        destination: 'https://akaash-nigam.github.io/visionOS_board-meeting-dimension/',
      },
      {
        source: '/boardmeeting/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_board-meeting-dimension/:path*',
      },
      // Business Intelligence Suite - visionos
      {
        source: '/bisuite',
        destination: 'https://akaash-nigam.github.io/visionOS_business-intelligence-suite/',
      },
      {
        source: '/bisuite/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_business-intelligence-suite/:path*',
      },
      // Cybersecurity Command Center - visionos
      {
        source: '/cybersecurity',
        destination: 'https://akaash-nigam.github.io/visionOS_cybersecurity-command-center/',
      },
      {
        source: '/cybersecurity/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_cybersecurity-command-center/:path*',
      },
      // Executive Briefing - visionos
      {
        source: '/execbriefing',
        destination: 'https://akaash-nigam.github.io/visionOS_executive-briefing/',
      },
      {
        source: '/execbriefing/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_executive-briefing/:path*',
      },
      // Field Service AR - visionos
      {
        source: '/fieldservice',
        destination: 'https://akaash-nigam.github.io/visionOS_field-service-ar/',
      },
      {
        source: '/fieldservice/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_field-service-ar/:path*',
      },
      // Financial Operations Platform - visionos
      {
        source: '/finops',
        destination: 'https://akaash-nigam.github.io/visionOS_financial-operations-platform/',
      },
      {
        source: '/finops/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_financial-operations-platform/:path*',
      },
      // Financial Trading Cockpit - visionos
      {
        source: '/trading',
        destination: 'https://akaash-nigam.github.io/visionOS_Financial-Trading-Cockpit/',
      },
      {
        source: '/trading/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Financial-Trading-Cockpit/:path*',
      },
      // Financial Trading Dimension - visionos
      {
        source: '/tradingdim',
        destination: 'https://akaash-nigam.github.io/visionOS_financial-trading-dimension/',
      },
      {
        source: '/tradingdim/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_financial-trading-dimension/:path*',
      },
      // Industrial Safety Simulator - visionos
      {
        source: '/safetysim',
        destination: 'https://akaash-nigam.github.io/visionOS_industrial-safety-simulator/',
      },
      {
        source: '/safetysim/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_industrial-safety-simulator/:path*',
      },
      // Innovation Laboratory - visionos
      {
        source: '/innovationlab',
        destination: 'https://akaash-nigam.github.io/visionOS_innovation-laboratory/',
      },
      {
        source: '/innovationlab/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_innovation-laboratory/:path*',
      },
      // Institutional Memory Vault - visionos
      {
        source: '/memoryvault',
        destination: 'https://akaash-nigam.github.io/visionOS_institutional-memory-vault/',
      },
      {
        source: '/memoryvault/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_institutional-memory-vault/:path*',
      },
      // Insurance Risk Assessor - visionos
      {
        source: '/riskassessor',
        destination: 'https://akaash-nigam.github.io/visionOS_insurance-risk-assessor/',
      },
      {
        source: '/riskassessor/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_insurance-risk-assessor/:path*',
      },
      // Language Immersion Rooms - visionos
      {
        source: '/language',
        destination: 'https://akaash-nigam.github.io/visionOS_Language-Immersion-Rooms/',
      },
      {
        source: '/language/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Language-Immersion-Rooms/:path*',
      },
      // Medical Imaging Suite - visionos
      {
        source: '/medimaging',
        destination: 'https://akaash-nigam.github.io/visionOS_Medical-Imaging-Suite/',
      },
      {
        source: '/medimaging/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Medical-Imaging-Suite/:path*',
      },
      // Molecular Design Platform - visionos
      {
        source: '/molecular',
        destination: 'https://akaash-nigam.github.io/visionOS_molecular-design-platform/',
      },
      {
        source: '/molecular/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_molecular-design-platform/:path*',
      },
      // Personal Finance Navigator - visionos
      {
        source: '/finnav',
        destination: 'https://akaash-nigam.github.io/visionOS_Personal-Finance-Navigator/',
      },
      {
        source: '/finnav/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Personal-Finance-Navigator/:path*',
      },
      // Physical Digital Twins - visionos
      {
        source: '/physicaltwins',
        destination: 'https://akaash-nigam.github.io/visionOS_Physical-Digital-Twins/',
      },
      {
        source: '/physicaltwins/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Physical-Digital-Twins/:path*',
      },
      // Reality Annotation Platform - visionos
      {
        source: '/annotation',
        destination: 'https://akaash-nigam.github.io/visionOS_Reality-Annotation-Platform/',
      },
      {
        source: '/annotation/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Reality-Annotation-Platform/:path*',
      },
      // Real Estate Spatial - visionos
      {
        source: '/realestate',
        destination: 'https://akaash-nigam.github.io/visionOS_real-estate-spatial/',
      },
      {
        source: '/realestate/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_real-estate-spatial/:path*',
      },
      // Regulatory Navigation Space - visionos
      {
        source: '/regulatory',
        destination: 'https://akaash-nigam.github.io/visionOS_regulatory-navigation-space/',
      },
      {
        source: '/regulatory/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_regulatory-navigation-space/:path*',
      },
      // Smart Agriculture - visionos
      {
        source: '/smartag',
        destination: 'https://akaash-nigam.github.io/visionOS_smart-agriculture/',
      },
      {
        source: '/smartag/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_smart-agriculture/:path*',
      },
      // Smart City Command Platform - visionos
      {
        source: '/smartcity',
        destination: 'https://akaash-nigam.github.io/visionOS_smart-city-command-platform/',
      },
      {
        source: '/smartcity/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_smart-city-command-platform/:path*',
      },
      // Spatial HCM - visionos
      {
        source: '/spatialhcm',
        destination: 'https://akaash-nigam.github.io/visionOS_spatial-hcm/',
      },
      {
        source: '/spatialhcm/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_spatial-hcm/:path*',
      },
      // Spatial Screenplay Workshop - visionos
      {
        source: '/screenplay',
        destination: 'https://akaash-nigam.github.io/visionOS_Spatial-Screenplay-Workshop/',
      },
      {
        source: '/screenplay/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Spatial-Screenplay-Workshop/:path*',
      },
      // Surgical Training Universe - visionos
      {
        source: '/surgical',
        destination: 'https://akaash-nigam.github.io/visionOS_surgical-training-universe/',
      },
      {
        source: '/surgical/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_surgical-training-universe/:path*',
      },
      // Sustainability Command - visionos
      {
        source: '/sustainability',
        destination: 'https://akaash-nigam.github.io/visionOS_sustainability-command/',
      },
      {
        source: '/sustainability/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_sustainability-command/:path*',
      },
      // Virtual Collaboration Arena - visionos
      {
        source: '/collaboration',
        destination: 'https://akaash-nigam.github.io/visionOS_virtual-collaboration-arena/',
      },
      {
        source: '/collaboration/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_virtual-collaboration-arena/:path*',
      },
      // Wardrobe Consultant - visionos
      {
        source: '/wardrobe',
        destination: 'https://akaash-nigam.github.io/visionOS_Wardrobe-Consultant/',
      },
      {
        source: '/wardrobe/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Wardrobe-Consultant/:path*',
      },
      // Mindfulness Meditation Realms - visionos
      {
        source: '/mindfulness',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_mindfulness-meditation-realms/',
      },
      {
        source: '/mindfulness/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_mindfulness-meditation-realms/:path*',
      },
      // Narrative Story Worlds - visionos
      {
        source: '/narrative',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_narrative-story-worlds/',
      },
      {
        source: '/narrative/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_narrative-story-worlds/:path*',
      },
      // Reality Minecraft - visionos
      {
        source: '/realitymine',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_reality-minecraft/',
      },
      {
        source: '/realitymine/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_reality-minecraft/:path*',
      },
      // Rhythm Flow - visionos
      {
        source: '/rhythm',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_rhythm-flow/',
      },
      {
        source: '/rhythm/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_rhythm-flow/:path*',
      },
      // Spatial Arena Championship - visionos
      {
        source: '/spatialarena',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_spatial-arena-championship/',
      },
      {
        source: '/spatialarena/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_spatial-arena-championship/:path*',
      },
      // Spatial Pictionary - visionos
      {
        source: '/pictionary',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_spatial-pictionary/',
      },
      {
        source: '/pictionary/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_spatial-pictionary/:path*',
      },
      // Time Machine Adventures - visionos
      {
        source: '/timemachine',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_time-machine-adventures/',
      },
      {
        source: '/timemachine/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_time-machine-adventures/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
