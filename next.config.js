/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      // =====================
      // iOS Apps
      // =====================
      // AIPersonalTrainer - ios
      {
        source: '/aipersonaltrainer',
        destination: 'https://akaash-nigam.github.io/iOS_AIPersonalTrainer/',
      },
      {
        source: '/aipersonaltrainer/:path*',
        destination: 'https://akaash-nigam.github.io/iOS_AIPersonalTrainer/:path*',
      },
      // AmericaBizPro - ios
      {
        source: '/americabizpro',
        destination: 'https://akaash-nigam.github.io/iOS_AmericaBizPro/',
      },
      {
        source: '/americabizpro/:path*',
        destination: 'https://akaash-nigam.github.io/iOS_AmericaBizPro/:path*',
      },
      // BharatBusiness - ios
      {
        source: '/bharatbusiness',
        destination: 'https://akaash-nigam.github.io/iOS_BharatBusiness/',
      },
      {
        source: '/bharatbusiness/:path*',
        destination: 'https://akaash-nigam.github.io/iOS_BharatBusiness/:path*',
      },
      // BilingualCivicAssistant - ios
      {
        source: '/bilingualcivic',
        destination: 'https://akaash-nigam.github.io/iOS_BilingualCivicAssistant/',
      },
      {
        source: '/bilingualcivic/:path*',
        destination: 'https://akaash-nigam.github.io/iOS_BilingualCivicAssistant/:path*',
      },
      // BorderBuddy - ios
      {
        source: '/borderbuddy',
        destination: 'https://akaash-nigam.github.io/iOS_BorderBuddy/',
      },
      {
        source: '/borderbuddy/:path*',
        destination: 'https://akaash-nigam.github.io/iOS_BorderBuddy/:path*',
      },
      // CalmSpaceAI - ios
      {
        source: '/calmspaceai',
        destination: 'https://akaash-nigam.github.io/iOS_CalmSpaceAI/',
      },
      {
        source: '/calmspaceai/:path*',
        destination: 'https://akaash-nigam.github.io/iOS_CalmSpaceAI/:path*',
      },
      // CanadaBizPro - ios
      {
        source: '/canadabizpro',
        destination: 'https://akaash-nigam.github.io/iOS_CanadaBizPro/',
      },
      {
        source: '/canadabizpro/:path*',
        destination: 'https://akaash-nigam.github.io/iOS_CanadaBizPro/:path*',
      },
      // CrossBorderCompanion - ios
      {
        source: '/crossbordercompanion',
        destination: 'https://akaash-nigam.github.io/iOS_CrossBorderCompanion/',
      },
      {
        source: '/crossbordercompanion/:path*',
        destination: 'https://akaash-nigam.github.io/iOS_CrossBorderCompanion/:path*',
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
      // IndigenousLanguagesLand - ios
      {
        source: '/indigenouslanguages',
        destination: 'https://akaash-nigam.github.io/iOS_IndigenousLanguagesLand/',
      },
      {
        source: '/indigenouslanguages/:path*',
        destination: 'https://akaash-nigam.github.io/iOS_IndigenousLanguagesLand/:path*',
      },
      // LocaleConnect - ios
      {
        source: '/localeconnect',
        destination: 'https://akaash-nigam.github.io/iOS_LocaleConnect/',
      },
      {
        source: '/localeconnect/:path*',
        destination: 'https://akaash-nigam.github.io/iOS_LocaleConnect/:path*',
      },
      // MapleFinance - ios
      {
        source: '/maplefinance',
        destination: 'https://akaash-nigam.github.io/iOS_MapleFinance/',
      },
      {
        source: '/maplefinance/:path*',
        destination: 'https://akaash-nigam.github.io/iOS_MapleFinance/:path*',
      },
      // MapleFresh - ios
      {
        source: '/maplefresh',
        destination: 'https://akaash-nigam.github.io/iOS_MapleFresh/',
      },
      {
        source: '/maplefresh/:path*',
        destination: 'https://akaash-nigam.github.io/iOS_MapleFresh/:path*',
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
      // MediQueue - ios
      {
        source: '/mediqueue',
        destination: 'https://akaash-nigam.github.io/iOS_MediQueue/',
      },
      {
        source: '/mediqueue/:path*',
        destination: 'https://akaash-nigam.github.io/iOS_MediQueue/:path*',
      },
      // NewcomerLaunchpad - ios
      {
        source: '/newcomerlaunchpad',
        destination: 'https://akaash-nigam.github.io/iOS_NewcomerLaunchpad/',
      },
      {
        source: '/newcomerlaunchpad/:path*',
        destination: 'https://akaash-nigam.github.io/iOS_NewcomerLaunchpad/:path*',
      },
      // NorthernEssentials - ios
      {
        source: '/northernessentials',
        destination: 'https://akaash-nigam.github.io/iOS_NorthernEssentials/',
      },
      {
        source: '/northernessentials/:path*',
        destination: 'https://akaash-nigam.github.io/iOS_NorthernEssentials/:path*',
      },
      // ParksWildfirePlanner - ios
      {
        source: '/parkswildfire',
        destination: 'https://akaash-nigam.github.io/iOS_ParksWildfirePlanner/',
      },
      {
        source: '/parkswildfire/:path*',
        destination: 'https://akaash-nigam.github.io/iOS_ParksWildfirePlanner/:path*',
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
      // SMEExportWizard - ios
      {
        source: '/smeexportwizard',
        destination: 'https://akaash-nigam.github.io/iOS_SMEExportWizard/',
      },
      {
        source: '/smeexportwizard/:path*',
        destination: 'https://akaash-nigam.github.io/iOS_SMEExportWizard/:path*',
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
      // WealthTrackAI - ios
      {
        source: '/wealthtrackai',
        destination: 'https://akaash-nigam.github.io/ios_wealthtrack-ai/',
      },
      {
        source: '/wealthtrackai/:path*',
        destination: 'https://akaash-nigam.github.io/ios_wealthtrack-ai/:path*',
      },
      // WinterWell - ios
      {
        source: '/winterwell',
        destination: 'https://akaash-nigam.github.io/iOS_WinterWell/',
      },
      {
        source: '/winterwell/:path*',
        destination: 'https://akaash-nigam.github.io/iOS_WinterWell/:path*',
      },

      // =====================
      // Android Apps
      // =====================
      // ApexLifeStyle - android
      {
        source: '/apexlifestyle',
        destination: 'https://akaash-nigam.github.io/Android_ApexLifeStyle/',
      },
      {
        source: '/apexlifestyle/:path*',
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
        source: '/bachatsahayak',
        destination: 'https://akaash-nigam.github.io/android_bachat-sahayak/',
      },
      {
        source: '/bachatsahayak/:path*',
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
      // BimaShield - android
      {
        source: '/bimashield',
        destination: 'https://akaash-nigam.github.io/android_BimaShield/',
      },
      {
        source: '/bimashield/:path*',
        destination: 'https://akaash-nigam.github.io/android_BimaShield/:path*',
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
      // DailyNeedsDelivery - android
      {
        source: '/dailyneedsdelivery',
        destination: 'https://akaash-nigam.github.io/Android_DailyNeedsDelivery/',
      },
      {
        source: '/dailyneedsdelivery/:path*',
        destination: 'https://akaash-nigam.github.io/Android_DailyNeedsDelivery/:path*',
      },
      // Dukaan Sahayak - android
      {
        source: '/dukaansahayak',
        destination: 'https://akaash-nigam.github.io/android_dukaan-sahayak/',
      },
      {
        source: '/dukaansahayak/:path*',
        destination: 'https://akaash-nigam.github.io/android_dukaan-sahayak/:path*',
      },
      // ElderCareConnect - android
      {
        source: '/eldercareconnect',
        destination: 'https://akaash-nigam.github.io/Android_ElderCareConnect/',
      },
      {
        source: '/eldercareconnect/:path*',
        destination: 'https://akaash-nigam.github.io/Android_ElderCareConnect/:path*',
      },
      // FamilyHub - android
      {
        source: '/familyhub',
        destination: 'https://akaash-nigam.github.io/Android_FamilyHub/',
      },
      {
        source: '/familyhub/:path*',
        destination: 'https://akaash-nigam.github.io/Android_FamilyHub/:path*',
      },
      // Fasal Rakshak - android
      {
        source: '/fasalrakshak',
        destination: 'https://akaash-nigam.github.io/android_fasal-rakshak/',
      },
      {
        source: '/fasalrakshak/:path*',
        destination: 'https://akaash-nigam.github.io/android_fasal-rakshak/:path*',
      },
      // Gaon Gateway - android
      {
        source: '/gaongateway',
        destination: 'https://akaash-nigam.github.io/android_gaon-gateway/',
      },
      {
        source: '/gaongateway/:path*',
        destination: 'https://akaash-nigam.github.io/android_gaon-gateway/:path*',
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
      // HealthyFamily - android
      {
        source: '/healthyfamily',
        destination: 'https://akaash-nigam.github.io/Android_HealthyFamily/',
      },
      {
        source: '/healthyfamily/:path*',
        destination: 'https://akaash-nigam.github.io/Android_HealthyFamily/:path*',
      },
      // Karz Mukti - android
      {
        source: '/karzmukti',
        destination: 'https://akaash-nigam.github.io/android_karz-mukti/',
      },
      {
        source: '/karzmukti/:path*',
        destination: 'https://akaash-nigam.github.io/android_karz-mukti/:path*',
      },
      // Kisan Sahayak - android
      {
        source: '/kisansahayak',
        destination: 'https://akaash-nigam.github.io/android_kisan-sahayak/',
      },
      {
        source: '/kisansahayak/:path*',
        destination: 'https://akaash-nigam.github.io/android_kisan-sahayak/:path*',
      },
      // Krishi Mitra - android
      {
        source: '/krishimitra',
        destination: 'https://akaash-nigam.github.io/android_krishi-mitra/',
      },
      {
        source: '/krishimitra/:path*',
        destination: 'https://akaash-nigam.github.io/android_krishi-mitra/:path*',
      },
      // Majdoor Mitra - android
      {
        source: '/majdoormitra',
        destination: 'https://akaash-nigam.github.io/android_majdoor-mitra/',
      },
      {
        source: '/majdoormitra/:path*',
        destination: 'https://akaash-nigam.github.io/android_majdoor-mitra/:path*',
      },
      // Pani Rakshak - android
      {
        source: '/panirakshak',
        destination: 'https://akaash-nigam.github.io/android_pani-rakshak/',
      },
      {
        source: '/panirakshak/:path*',
        destination: 'https://akaash-nigam.github.io/android_pani-rakshak/:path*',
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
      // Poshan Tracker - android
      {
        source: '/poshantracker',
        destination: 'https://akaash-nigam.github.io/android_poshan-tracker/',
      },
      {
        source: '/poshantracker/:path*',
        destination: 'https://akaash-nigam.github.io/android_poshan-tracker/:path*',
      },
      // RasodaManager - android
      {
        source: '/rasodamanager',
        destination: 'https://akaash-nigam.github.io/Android_RasodaManager/',
      },
      {
        source: '/rasodamanager/:path*',
        destination: 'https://akaash-nigam.github.io/Android_RasodaManager/:path*',
      },
      // RentSmart - android
      {
        source: '/rentsmart',
        destination: 'https://akaash-nigam.github.io/Android_RentSmart/',
      },
      {
        source: '/rentsmart/:path*',
        destination: 'https://akaash-nigam.github.io/Android_RentSmart/:path*',
      },
      // Safar Saathi - android
      {
        source: '/safarsaathi',
        destination: 'https://akaash-nigam.github.io/android_safar-saathi/',
      },
      {
        source: '/safarsaathi/:path*',
        destination: 'https://akaash-nigam.github.io/android_safar-saathi/:path*',
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
      // Sarkar Seva - android
      {
        source: '/sarkarseva',
        destination: 'https://akaash-nigam.github.io/android_sarkar-seva/',
      },
      {
        source: '/sarkarseva/:path*',
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
        source: '/svachchsahayak',
        destination: 'https://akaash-nigam.github.io/android_svachh-sahayak/',
      },
      {
        source: '/svachchsahayak/:path*',
        destination: 'https://akaash-nigam.github.io/android_svachh-sahayak/:path*',
      },
      // Swasthya Sahayak - android
      {
        source: '/swasthyasahayak',
        destination: 'https://akaash-nigam.github.io/android_swasthya-sahayak/',
      },
      {
        source: '/swasthyasahayak/:path*',
        destination: 'https://akaash-nigam.github.io/android_swasthya-sahayak/:path*',
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
      // VahanTracker - android
      {
        source: '/vahantracker',
        destination: 'https://akaash-nigam.github.io/Android_VahanTracker/',
      },
      {
        source: '/vahantracker/:path*',
        destination: 'https://akaash-nigam.github.io/Android_VahanTracker/:path*',
      },
      // Vidyarthi Sahayak - android
      {
        source: '/vidyarthisahayak',
        destination: 'https://akaash-nigam.github.io/android_vidyarthi-sahayak/',
      },
      {
        source: '/vidyarthisahayak/:path*',
        destination: 'https://akaash-nigam.github.io/android_vidyarthi-sahayak/:path*',
      },
      // Village Job Board - android
      {
        source: '/villagejobboard',
        destination: 'https://akaash-nigam.github.io/android_village-job-board/',
      },
      {
        source: '/villagejobboard/:path*',
        destination: 'https://akaash-nigam.github.io/android_village-job-board/:path*',
      },
      // WealthWise - android
      {
        source: '/wealthwise',
        destination: 'https://akaash-nigam.github.io/Android_WealthWise/',
      },
      {
        source: '/wealthwise/:path*',
        destination: 'https://akaash-nigam.github.io/Android_WealthWise/:path*',
      },

      // =====================
      // macOS Apps
      // =====================
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
        source: '/macmemoryvault',
        destination: 'https://akaash-nigam.github.io/mac_MemoryVault/',
      },
      {
        source: '/macmemoryvault/:path*',
        destination: 'https://akaash-nigam.github.io/mac_MemoryVault/:path*',
      },

      // =====================
      // visionOS Apps - Enterprise
      // =====================
      // AI Agent Coordinator - visionos
      {
        source: '/aiagentcoordinator',
        destination: 'https://akaash-nigam.github.io/visionOS_ai-agent-coordinator/',
      },
      {
        source: '/aiagentcoordinator/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_ai-agent-coordinator/:path*',
      },
      // Architectural Visualization Studio - visionos
      {
        source: '/archvizstudio',
        destination: 'https://akaash-nigam.github.io/visionOS_architectural-visualization-studio/',
      },
      {
        source: '/archvizstudio/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_architectural-visualization-studio/:path*',
      },
      // Architecture Time Machine - visionos
      {
        source: '/architecturetimemachine',
        destination: 'https://akaash-nigam.github.io/visionOS_Architecture-Time-Machine/',
      },
      {
        source: '/architecturetimemachine/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Architecture-Time-Machine/:path*',
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
      // Business Operating System - visionos
      {
        source: '/businessos',
        destination: 'https://akaash-nigam.github.io/visionOS_business-operating-system/',
      },
      {
        source: '/businessos/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_business-operating-system/:path*',
      },
      // Construction Site Manager - visionos
      {
        source: '/constructionsite',
        destination: 'https://akaash-nigam.github.io/visionOS_construction-site-manager/',
      },
      {
        source: '/constructionsite/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_construction-site-manager/:path*',
      },
      // Corporate University Platform - visionos
      {
        source: '/corporateuniversity',
        destination: 'https://akaash-nigam.github.io/visionOS_corporate-university-platform/',
      },
      {
        source: '/corporateuniversity/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_corporate-university-platform/:path*',
      },
      // Culture Architecture System - visionos
      {
        source: '/culturearchitecture',
        destination: 'https://akaash-nigam.github.io/visionOS_culture-architecture-system/',
      },
      {
        source: '/culturearchitecture/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_culture-architecture-system/:path*',
      },
      // Cybersecurity Command Center - visionos
      {
        source: '/cybersecuritycommand',
        destination: 'https://akaash-nigam.github.io/visionOS_cybersecurity-command-center/',
      },
      {
        source: '/cybersecuritycommand/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_cybersecurity-command-center/:path*',
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
      // Energy Grid Visualizer - visionos
      {
        source: '/energygrid',
        destination: 'https://akaash-nigam.github.io/visionOS_energy-grid-visualizer/',
      },
      {
        source: '/energygrid/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_energy-grid-visualizer/:path*',
      },
      // Enterprise Apps - visionos
      {
        source: '/enterpriseapps',
        destination: 'https://akaash-nigam.github.io/visionOS_enterprise-apps/',
      },
      {
        source: '/enterpriseapps/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_enterprise-apps/:path*',
      },
      // Executive Briefing - visionos
      {
        source: '/executivebriefing',
        destination: 'https://akaash-nigam.github.io/visionOS_executive-briefing/',
      },
      {
        source: '/executivebriefing/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_executive-briefing/:path*',
      },
      // Field Service AR - visionos
      {
        source: '/fieldservicear',
        destination: 'https://akaash-nigam.github.io/visionOS_field-service-ar/',
      },
      {
        source: '/fieldservicear/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_field-service-ar/:path*',
      },
      // Financial Operations Platform - visionos
      {
        source: '/financialoperations',
        destination: 'https://akaash-nigam.github.io/visionOS_financial-operations-platform/',
      },
      {
        source: '/financialoperations/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_financial-operations-platform/:path*',
      },
      // Financial Trading Cockpit - visionos
      {
        source: '/financialtradingcockpit',
        destination: 'https://akaash-nigam.github.io/visionOS_Financial-Trading-Cockpit/',
      },
      {
        source: '/financialtradingcockpit/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Financial-Trading-Cockpit/:path*',
      },
      // Financial Trading Dimension - visionos
      {
        source: '/financialtrading',
        destination: 'https://akaash-nigam.github.io/visionOS_financial-trading-dimension/',
      },
      {
        source: '/financialtrading/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_financial-trading-dimension/:path*',
      },
      // Global War Room - visionos
      {
        source: '/globalwarroom',
        destination: 'https://akaash-nigam.github.io/visionOS_global-war-room/',
      },
      {
        source: '/globalwarroom/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_global-war-room/:path*',
      },
      // Healthcare Ecosystem Orchestrator - visionos
      {
        source: '/healthcareorchestrator',
        destination: 'https://akaash-nigam.github.io/visionOS_healthcare-ecosystem-orchestrator/',
      },
      {
        source: '/healthcareorchestrator/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_healthcare-ecosystem-orchestrator/:path*',
      },
      // Home Maintenance Oracle - visionos
      {
        source: '/homemaintenance',
        destination: 'https://akaash-nigam.github.io/visionOS_Home-Maintenance-Oracle/',
      },
      {
        source: '/homemaintenance/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Home-Maintenance-Oracle/:path*',
      },
      // Industrial CAD/CAM Suite - visionos
      {
        source: '/industrialcadcam',
        destination: 'https://akaash-nigam.github.io/visionOS_industrial-cad-cam-suite/',
      },
      {
        source: '/industrialcadcam/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_industrial-cad-cam-suite/:path*',
      },
      // Industrial Safety Simulator - visionos
      {
        source: '/industrialsafety',
        destination: 'https://akaash-nigam.github.io/visionOS_industrial-safety-simulator/',
      },
      {
        source: '/industrialsafety/:path*',
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
        source: '/institutionalmemory',
        destination: 'https://akaash-nigam.github.io/visionOS_institutional-memory-vault/',
      },
      {
        source: '/institutionalmemory/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_institutional-memory-vault/:path*',
      },
      // Insurance Risk Assessor - visionos
      {
        source: '/insurancerisk',
        destination: 'https://akaash-nigam.github.io/visionOS_insurance-risk-assessor/',
      },
      {
        source: '/insurancerisk/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_insurance-risk-assessor/:path*',
      },
      // Language Immersion Rooms - visionos
      {
        source: '/languageimmersion',
        destination: 'https://akaash-nigam.github.io/visionOS_Language-Immersion-Rooms/',
      },
      {
        source: '/languageimmersion/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Language-Immersion-Rooms/:path*',
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
      // Living Building System - visionos
      {
        source: '/livingbuilding',
        destination: 'https://akaash-nigam.github.io/visionOS_Living-Building-System/',
      },
      {
        source: '/livingbuilding/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Living-Building-System/:path*',
      },
      // Medical Imaging Suite - visionos
      {
        source: '/medicalimaging',
        destination: 'https://akaash-nigam.github.io/visionOS_Medical-Imaging-Suite/',
      },
      {
        source: '/medicalimaging/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Medical-Imaging-Suite/:path*',
      },
      // Military Defense Training - visionos
      {
        source: '/militarytraining',
        destination: 'https://akaash-nigam.github.io/visionOS_military-defense-training/',
      },
      {
        source: '/militarytraining/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_military-defense-training/:path*',
      },
      // Molecular Design Platform - visionos
      {
        source: '/moleculardesign',
        destination: 'https://akaash-nigam.github.io/visionOS_molecular-design-platform/',
      },
      {
        source: '/moleculardesign/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_molecular-design-platform/:path*',
      },
      // Personal Finance Navigator - visionos
      {
        source: '/personalfinancenav',
        destination: 'https://akaash-nigam.github.io/visionOS_Personal-Finance-Navigator/',
      },
      {
        source: '/personalfinancenav/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Personal-Finance-Navigator/:path*',
      },
      // Physical Digital Twins - visionos
      {
        source: '/physicaldigitaltwins',
        destination: 'https://akaash-nigam.github.io/visionOS_Physical-Digital-Twins/',
      },
      {
        source: '/physicaldigitaltwins/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Physical-Digital-Twins/:path*',
      },
      // Real Estate Spatial - visionos
      {
        source: '/realestatespatial',
        destination: 'https://akaash-nigam.github.io/visionOS_real-estate-spatial/',
      },
      {
        source: '/realestatespatial/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_real-estate-spatial/:path*',
      },
      // Reality Annotation Platform - visionos
      {
        source: '/realityannotation',
        destination: 'https://akaash-nigam.github.io/visionOS_Reality-Annotation-Platform/',
      },
      {
        source: '/realityannotation/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Reality-Annotation-Platform/:path*',
      },
      // Regulatory Navigation Space - visionos
      {
        source: '/regulatorynavigation',
        destination: 'https://akaash-nigam.github.io/visionOS_regulatory-navigation-space/',
      },
      {
        source: '/regulatorynavigation/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_regulatory-navigation-space/:path*',
      },
      // Research Collaboration Space - visionos
      {
        source: '/researchcollab',
        destination: 'https://akaash-nigam.github.io/visionOS_research-collaboration-space/',
      },
      {
        source: '/researchcollab/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_research-collaboration-space/:path*',
      },
      // Research Web Crawler - visionos
      {
        source: '/researchwebcrawler',
        destination: 'https://akaash-nigam.github.io/visionOS_Research-Web-Crawler/',
      },
      {
        source: '/researchwebcrawler/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Research-Web-Crawler/:path*',
      },
      // Retail Space Optimizer - visionos
      {
        source: '/retailoptimizer',
        destination: 'https://akaash-nigam.github.io/visionOS_retail-space-optimizer/',
      },
      {
        source: '/retailoptimizer/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_retail-space-optimizer/:path*',
      },
      // Smart Agriculture - visionos
      {
        source: '/smartagriculture',
        destination: 'https://akaash-nigam.github.io/visionOS_smart-agriculture/',
      },
      {
        source: '/smartagriculture/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_smart-agriculture/:path*',
      },
      // Smart City Command Platform - visionos
      {
        source: '/smartcitycommand',
        destination: 'https://akaash-nigam.github.io/visionOS_smart-city-command-platform/',
      },
      {
        source: '/smartcitycommand/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_smart-city-command-platform/:path*',
      },
      // Spatial Code Reviewer - visionos
      {
        source: '/spatialcodereviewer',
        destination: 'https://akaash-nigam.github.io/visionOS_Spatial-Code-Reviewer/',
      },
      {
        source: '/spatialcodereviewer/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Spatial-Code-Reviewer/:path*',
      },
      // Spatial CRM - visionos
      {
        source: '/spatialcrm',
        destination: 'https://akaash-nigam.github.io/visionOS_spatial-crm/',
      },
      {
        source: '/spatialcrm/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_spatial-crm/:path*',
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
      // Spatial HCM - visionos
      {
        source: '/spatialhcm',
        destination: 'https://akaash-nigam.github.io/visionOS_spatial-hcm/',
      },
      {
        source: '/spatialhcm/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_spatial-hcm/:path*',
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
      // Spatial Screenplay Workshop - visionos
      {
        source: '/spatialscreenplay',
        destination: 'https://akaash-nigam.github.io/visionOS_Spatial-Screenplay-Workshop/',
      },
      {
        source: '/spatialscreenplay/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Spatial-Screenplay-Workshop/:path*',
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
        source: '/supplychaincontrol',
        destination: 'https://akaash-nigam.github.io/visionOS_supply-chain-control-tower/',
      },
      {
        source: '/supplychaincontrol/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_supply-chain-control-tower/:path*',
      },
      // Surgical Training Universe - visionos
      {
        source: '/surgicaltraining',
        destination: 'https://akaash-nigam.github.io/visionOS_surgical-training-universe/',
      },
      {
        source: '/surgicaltraining/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_surgical-training-universe/:path*',
      },
      // Sustainability Command - visionos
      {
        source: '/sustainabilitycommand',
        destination: 'https://akaash-nigam.github.io/visionOS_sustainability-command/',
      },
      {
        source: '/sustainabilitycommand/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_sustainability-command/:path*',
      },
      // Virtual Collaboration Arena - visionos
      {
        source: '/virtualcollaboration',
        destination: 'https://akaash-nigam.github.io/visionOS_virtual-collaboration-arena/',
      },
      {
        source: '/virtualcollaboration/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_virtual-collaboration-arena/:path*',
      },
      // Wardrobe Consultant - visionos
      {
        source: '/wardrobeconsultant',
        destination: 'https://akaash-nigam.github.io/visionOS_Wardrobe-Consultant/',
      },
      {
        source: '/wardrobeconsultant/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Wardrobe-Consultant/:path*',
      },

      // =====================
      // visionOS Apps - Gaming
      // =====================
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
        source: '/holographicboardgames',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_holographic-board-games/',
      },
      {
        source: '/holographicboardgames/:path*',
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
        source: '/interactivetheater',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_interactive-theater/',
      },
      {
        source: '/interactivetheater/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_interactive-theater/:path*',
      },
      // Mindfulness Meditation Realms - visionos
      {
        source: '/mindfulnessrealms',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_mindfulness-meditation-realms/',
      },
      {
        source: '/mindfulnessrealms/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_mindfulness-meditation-realms/:path*',
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
        source: '/mysteryinvestigation',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_mystery-investigation/',
      },
      {
        source: '/mysteryinvestigation/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_mystery-investigation/:path*',
      },
      // Narrative Story Worlds - visionos
      {
        source: '/narrativeworlds',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_narrative-story-worlds/',
      },
      {
        source: '/narrativeworlds/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_narrative-story-worlds/:path*',
      },
      // Parkour Pathways - visionos
      {
        source: '/parkourpathways',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_parkour-pathways/',
      },
      {
        source: '/parkourpathways/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_parkour-pathways/:path*',
      },
      // Reality Minecraft - visionos
      {
        source: '/realityminecraft',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_reality-minecraft/',
      },
      {
        source: '/realityminecraft/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_reality-minecraft/:path*',
      },
      // Reality MMO Layer - visionos
      {
        source: '/realitymmo',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_reality-mmo-layer/',
      },
      {
        source: '/realitymmo/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_reality-mmo-layer/:path*',
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
      // Rhythm Flow - visionos
      {
        source: '/rhythmflow',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_rhythm-flow/',
      },
      {
        source: '/rhythmflow/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_rhythm-flow/:path*',
      },
      // Science Lab Sandbox - visionos
      {
        source: '/sciencelabsandbox',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_science-lab-sandbox/',
      },
      {
        source: '/sciencelabsandbox/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_science-lab-sandbox/:path*',
      },
      // Shadow Boxing Champions - visionos
      {
        source: '/shadowboxing',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_shadow-boxing-champions/',
      },
      {
        source: '/shadowboxing/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_shadow-boxing-champions/:path*',
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
      // Spatial Music Studio - visionos
      {
        source: '/spatialmusicstudio',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_spatial-music-studio/',
      },
      {
        source: '/spatialmusicstudio/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_spatial-music-studio/:path*',
      },
      // Spatial Pictionary - visionos
      {
        source: '/spatialpictionary',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_spatial-pictionary/',
      },
      {
        source: '/spatialpictionary/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_spatial-pictionary/:path*',
      },
      // Tactical Team Shooters - visionos
      {
        source: '/tacticalshooters',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_tactical-team-shooters/',
      },
      {
        source: '/tacticalshooters/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_tactical-team-shooters/:path*',
      },
      // Time Machine Adventures - visionos
      {
        source: '/timemachineadventures',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_time-machine-adventures/',
      },
      {
        source: '/timemachineadventures/:path*',
        destination: 'https://akaash-nigam.github.io/visionOS_Gaming_time-machine-adventures/:path*',
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
    ];
  },
};

module.exports = nextConfig;
