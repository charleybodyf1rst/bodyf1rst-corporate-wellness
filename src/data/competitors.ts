// Comprehensive Competitor Data for BodyF1RST Corporate Wellness
// Last updated: January 2026

export interface CompetitorFeature {
  available: boolean | "limited" | "addon";
  notes?: string;
}

export interface CompetitorPricing {
  basic: { monthly: number; annual: number; label: string };
  standard: { monthly: number; annual: number; label: string };
  premium: { monthly: number; annual: number; label: string };
  enterprise?: { label: string; notes: string };
}

export interface Competitor {
  id: string;
  name: string;
  fullName: string;
  description: string;
  tagline: string;
  founded: number;
  headquarters: string;
  employees: string;
  funding: string;
  parentCompany?: string;
  website: string;

  // Target Market
  targetMarket: {
    minEmployees: number | "any";
    maxEmployees: number | "unlimited";
    industries: string[];
    idealCustomer: string;
  };

  // Pricing
  pricing: CompetitorPricing;
  setupFee: { amount: number | "custom"; notes: string };
  contractTerms: {
    minimumMonths: number;
    autoRenewal: boolean;
    cancellationNotice: string;
  };

  // Features (35+ categories)
  features: {
    // Core Platform
    mobileAppIOS: CompetitorFeature;
    mobileAppAndroid: CompetitorFeature;
    webApp: CompetitorFeature;
    offlineMode: CompetitorFeature;
    ssoIntegration: CompetitorFeature;
    hipaaCompliant: CompetitorFeature;
    soc2Certified: CompetitorFeature;
    whiteLabeling: CompetitorFeature;

    // Fitness
    workoutLibrary: CompetitorFeature;
    customWorkouts: CompetitorFeature;
    liveClasses: CompetitorFeature;
    activityTracking: CompetitorFeature;
    wearableSync: CompetitorFeature;
    gymAccess: CompetitorFeature;

    // Nutrition
    nutritionTracking: CompetitorFeature;
    mealPlanning: CompetitorFeature;
    recipeLibrary: CompetitorFeature;
    macroTracking: CompetitorFeature;

    // Mental Health
    meditationContent: CompetitorFeature;
    therapyAccess: CompetitorFeature;
    stressManagement: CompetitorFeature;
    sleepTracking: CompetitorFeature;
    aiMentalSupport: CompetitorFeature;

    // Coaching
    aiCoaching: CompetitorFeature;
    liveCoaches: CompetitorFeature;
    nutritionCoaching: CompetitorFeature;
    fitnessCoaching: CompetitorFeature;

    // Engagement
    teamChallenges: CompetitorFeature;
    leaderboards: CompetitorFeature;
    rewards: CompetitorFeature;
    gamification: CompetitorFeature;
    socialFeatures: CompetitorFeature;
    contentLibrary: CompetitorFeature;

    // Analytics & Integration
    hrDashboard: CompetitorFeature;
    roiReporting: CompetitorFeature;
    hrisIntegration: CompetitorFeature;
    apiAccess: CompetitorFeature;
    customReports: CompetitorFeature;
    anonymizedData: CompetitorFeature;
  };

  // SWOT Analysis
  swot: {
    strengths: string[];
    weaknesses: string[];
    opportunities: string[];
    threats: string[];
  };

  // Sales Intelligence
  salesIntel: {
    typicalDealSize: string;
    salesCycle: string;
    decisionMakers: string[];
    commonObjections: string[];
    competitiveAdvantages: string[];
    killerQuestions: string[];
    proofPoints: string[];
  };

  // Customer Reviews
  reviews: {
    g2Rating: number;
    g2Reviews: number;
    gartnerRating?: number;
    commonPraise: string[];
    commonComplaints: string[];
  };

  // Key Limitations
  limitations: string[];

  // How BodyF1RST Wins
  bodyf1rstWins: string[];
}

export const competitors: Competitor[] = [
  {
    id: "virgin-pulse",
    name: "Virgin Pulse",
    fullName: "Virgin Pulse (Personify Health)",
    description: "Enterprise wellness platform acquired by Personify Health in 2024",
    tagline: "Part of the world's first personalized health platform company",
    founded: 2004,
    headquarters: "Providence, RI",
    employees: "2,000+",
    funding: "Private (HealthEdge acquisition)",
    parentCompany: "Personify Health (HealthEdge)",
    website: "virginpulse.com",

    targetMarket: {
      minEmployees: 1000,
      maxEmployees: "unlimited",
      industries: ["Fortune 500", "Healthcare", "Financial Services", "Government"],
      idealCustomer: "Large enterprises with 5,000+ employees seeking comprehensive wellness",
    },

    pricing: {
      basic: { monthly: 6, annual: 72, label: "Engage" },
      standard: { monthly: 20, annual: 240, label: "Transform" },
      premium: { monthly: 50, annual: 600, label: "Thrive" },
      enterprise: { label: "Custom", notes: "Typically $10K+ annual minimum" },
    },
    setupFee: { amount: 5000, notes: "Implementation fee, can exceed $25K for large deployments" },
    contractTerms: {
      minimumMonths: 24,
      autoRenewal: true,
      cancellationNotice: "90 days",
    },

    features: {
      // Core Platform
      mobileAppIOS: { available: true },
      mobileAppAndroid: { available: true },
      webApp: { available: true },
      offlineMode: { available: "limited", notes: "Basic functionality only" },
      ssoIntegration: { available: true },
      hipaaCompliant: { available: true },
      soc2Certified: { available: true },
      whiteLabeling: { available: "addon", notes: "Enterprise tier only" },

      // Fitness
      workoutLibrary: { available: true },
      customWorkouts: { available: "limited" },
      liveClasses: { available: "addon", notes: "Partner integrations" },
      activityTracking: { available: true },
      wearableSync: { available: true },
      gymAccess: { available: false },

      // Nutrition
      nutritionTracking: { available: "limited", notes: "Basic logging only" },
      mealPlanning: { available: false },
      recipeLibrary: { available: "limited" },
      macroTracking: { available: false },

      // Mental Health
      meditationContent: { available: "limited", notes: "Via partnerships" },
      therapyAccess: { available: "addon", notes: "EAP integration" },
      stressManagement: { available: true },
      sleepTracking: { available: true },
      aiMentalSupport: { available: false },

      // Coaching
      aiCoaching: { available: false },
      liveCoaches: { available: "addon", notes: "Premium tier only" },
      nutritionCoaching: { available: "addon" },
      fitnessCoaching: { available: "addon" },

      // Engagement
      teamChallenges: { available: true },
      leaderboards: { available: true },
      rewards: { available: true, notes: "Points marketplace" },
      gamification: { available: true },
      socialFeatures: { available: true },
      contentLibrary: { available: true },

      // Analytics & Integration
      hrDashboard: { available: true },
      roiReporting: { available: true },
      hrisIntegration: { available: true },
      apiAccess: { available: "addon" },
      customReports: { available: "addon" },
      anonymizedData: { available: true },
    },

    swot: {
      strengths: [
        "Strong brand recognition (Virgin brand)",
        "Comprehensive enterprise features",
        "Established customer base (Fortune 500)",
        "Robust HRIS integrations",
        "Strong rewards marketplace",
      ],
      weaknesses: [
        "High cost barrier for SMBs",
        "Complex implementation (3-6 months)",
        "No AI-powered personalization",
        "Acquisition uncertainty (Personify transition)",
        "Legacy technology stack",
      ],
      opportunities: [
        "Digital health market growth",
        "Mental health expansion",
        "AI integration gaps",
      ],
      threats: [
        "Agile startups with modern tech",
        "Price pressure from competitors",
        "Integration complexity complaints",
      ],
    },

    salesIntel: {
      typicalDealSize: "$50,000 - $500,000 annual",
      salesCycle: "6-12 months",
      decisionMakers: ["CHRO", "VP Benefits", "VP Total Rewards", "CFO"],
      commonObjections: [
        "We need a proven enterprise vendor",
        "We're already integrated with Virgin Pulse",
        "Our employees know the Virgin brand",
      ],
      competitiveAdvantages: [
        "BodyF1RST offers AI coaching they lack",
        "10x faster implementation (2 weeks vs 3-6 months)",
        "No minimum employee requirements",
        "$0 setup fee vs their $5K-$25K",
        "40-70% lower cost with more features",
      ],
      killerQuestions: [
        "How is Personify acquisition affecting your roadmap?",
        "What's the implementation timeline for new features?",
        "How does their AI coaching compare? (They don't have it)",
        "What's your actual all-in cost including setup and add-ons?",
      ],
      proofPoints: [
        "85%+ engagement rate vs industry 20-30%",
        "2-week implementation vs 6-month average",
        "$0 setup fee saved customers average $15K",
      ],
    },

    reviews: {
      g2Rating: 4.1,
      g2Reviews: 450,
      gartnerRating: 4.2,
      commonPraise: [
        "Comprehensive platform",
        "Good rewards system",
        "Strong enterprise features",
      ],
      commonComplaints: [
        "Difficult to implement",
        "Expensive for what you get",
        "Outdated user interface",
        "Poor mobile experience",
      ],
    },

    limitations: [
      "1,000+ employee minimum requirement",
      "$5,000+ setup fee required",
      "No transparent pricing (quote-based only)",
      "No AI-powered personalization",
      "6-month average implementation",
      "24-month minimum contract",
    ],

    bodyf1rstWins: [
      "No minimums - works for any company size",
      "$0 setup fee vs their $5K+",
      "AI coaching included at every tier",
      "2-week implementation vs 6 months",
      "Transparent pricing - no hidden fees",
      "Month-to-month available after year 1",
    ],
  },

  {
    id: "wellable",
    name: "Wellable",
    fullName: "Wellable",
    description: "Self-service corporate wellness platform with challenge focus",
    tagline: "All-in-One Corporate Wellness Platform",
    founded: 2015,
    headquarters: "Boston, MA",
    employees: "50-100",
    funding: "Bootstrapped",
    website: "wellable.co",

    targetMarket: {
      minEmployees: 25,
      maxEmployees: "unlimited",
      industries: ["Technology", "Professional Services", "Manufacturing", "Education"],
      idealCustomer: "Mid-market companies (100-1,000 employees) seeking DIY wellness",
    },

    pricing: {
      basic: { monthly: 3, annual: 36, label: "Self-Directed" },
      standard: { monthly: 4, annual: 48, label: "Full-Service Lite" },
      premium: { monthly: 40, annual: 480, label: "Full-Service" },
      enterprise: { label: "Custom", notes: "500+ employees for full-service" },
    },
    setupFee: { amount: 0, notes: "Free for self-directed, varies for full-service" },
    contractTerms: {
      minimumMonths: 12,
      autoRenewal: true,
      cancellationNotice: "30 days",
    },

    features: {
      // Core Platform
      mobileAppIOS: { available: "limited", notes: "Basic functionality" },
      mobileAppAndroid: { available: "limited", notes: "Basic functionality" },
      webApp: { available: true },
      offlineMode: { available: false },
      ssoIntegration: { available: "addon" },
      hipaaCompliant: { available: true },
      soc2Certified: { available: true },
      whiteLabeling: { available: "addon", notes: "Premium only" },

      // Fitness
      workoutLibrary: { available: "limited", notes: "On-demand classes" },
      customWorkouts: { available: false },
      liveClasses: { available: "limited", notes: "Via partnerships" },
      activityTracking: { available: true },
      wearableSync: { available: true },
      gymAccess: { available: false },

      // Nutrition
      nutritionTracking: { available: "limited", notes: "Basic only" },
      mealPlanning: { available: false },
      recipeLibrary: { available: false },
      macroTracking: { available: false },

      // Mental Health
      meditationContent: { available: false },
      therapyAccess: { available: false },
      stressManagement: { available: "limited" },
      sleepTracking: { available: true },
      aiMentalSupport: { available: false },

      // Coaching
      aiCoaching: { available: false },
      liveCoaches: { available: false },
      nutritionCoaching: { available: false },
      fitnessCoaching: { available: false },

      // Engagement
      teamChallenges: { available: true, notes: "Core strength" },
      leaderboards: { available: true },
      rewards: { available: true },
      gamification: { available: true },
      socialFeatures: { available: true },
      contentLibrary: { available: "limited" },

      // Analytics & Integration
      hrDashboard: { available: true },
      roiReporting: { available: "limited" },
      hrisIntegration: { available: "addon" },
      apiAccess: { available: "addon" },
      customReports: { available: "addon" },
      anonymizedData: { available: true },
    },

    swot: {
      strengths: [
        "Low entry price point",
        "Strong challenge features",
        "Easy self-service setup",
        "Good for budget-conscious buyers",
      ],
      weaknesses: [
        "Basic mobile experience",
        "No coaching capabilities",
        "Limited wellness scope",
        "Feature add-on pricing adds up",
      ],
      opportunities: [
        "SMB market growth",
        "Remote work wellness demand",
      ],
      threats: [
        "Full-service competitors at similar price",
        "Feature commoditization",
      ],
    },

    salesIntel: {
      typicalDealSize: "$5,000 - $50,000 annual",
      salesCycle: "1-3 months",
      decisionMakers: ["HR Director", "Benefits Manager", "Office Manager"],
      commonObjections: [
        "We like the low price",
        "We just need challenges",
        "We can manage it ourselves",
      ],
      competitiveAdvantages: [
        "BodyF1RST includes AI coaching at Basic tier",
        "Full mobile app vs their basic app",
        "Holistic wellness vs challenge-only",
        "No hidden add-on fees",
        "Live coaching available at Premium",
      ],
      killerQuestions: [
        "What's your total cost after adding SSO, HRIS, and coaching?",
        "How do employees get personalized guidance?",
        "What happens when challenges aren't enough?",
      ],
      proofPoints: [
        "Our Basic tier includes everything Wellable charges extra for",
        "AI coaching drives 3x better outcomes than challenges alone",
      ],
    },

    reviews: {
      g2Rating: 4.5,
      g2Reviews: 180,
      commonPraise: [
        "Easy to set up",
        "Good challenge features",
        "Affordable base price",
      ],
      commonComplaints: [
        "Basic mobile app",
        "Limited features without add-ons",
        "No coaching options",
        "Analytics are basic",
      ],
    },

    limitations: [
      "25+ employees for self-directed",
      "500+ employees for full-service",
      "Basic mobile app experience",
      "No AI or live coaching",
      "Features require add-on purchases",
      "Limited nutrition and mental health",
    ],

    bodyf1rstWins: [
      "AI coaching included at every tier",
      "Premium mobile app experience",
      "No employee minimums",
      "All features included - no add-ons",
      "Holistic wellness (fitness + nutrition + mental)",
      "Live coaching available",
    ],
  },

  {
    id: "limeade",
    name: "Limeade",
    fullName: "Limeade (WebMD Health Services)",
    description: "Well-being platform focused on employee care and engagement",
    tagline: "The employee experience platform that improves well-being",
    founded: 2006,
    headquarters: "Bellevue, WA",
    employees: "500+",
    funding: "Acquired by WebMD (2021)",
    parentCompany: "WebMD Health Services",
    website: "limeade.com",

    targetMarket: {
      minEmployees: 500,
      maxEmployees: "unlimited",
      industries: ["Healthcare", "Retail", "Financial Services", "Government"],
      idealCustomer: "Enterprise companies prioritizing employee well-being culture",
    },

    pricing: {
      basic: { monthly: 6, annual: 72, label: "Listen" },
      standard: { monthly: 17, annual: 200, label: "Care" },
      premium: { monthly: 42, annual: 500, label: "Well-Being" },
      enterprise: { label: "Custom", notes: "Full platform with all modules" },
    },
    setupFee: { amount: "custom", notes: "$500-$1,000 typical, higher for enterprise" },
    contractTerms: {
      minimumMonths: 12,
      autoRenewal: true,
      cancellationNotice: "60 days",
    },

    features: {
      // Core Platform
      mobileAppIOS: { available: true },
      mobileAppAndroid: { available: true },
      webApp: { available: true },
      offlineMode: { available: false },
      ssoIntegration: { available: true },
      hipaaCompliant: { available: true },
      soc2Certified: { available: true },
      whiteLabeling: { available: "addon" },

      // Fitness
      workoutLibrary: { available: "limited" },
      customWorkouts: { available: false },
      liveClasses: { available: false },
      activityTracking: { available: true },
      wearableSync: { available: "limited", notes: "Select devices" },
      gymAccess: { available: false },

      // Nutrition
      nutritionTracking: { available: false },
      mealPlanning: { available: false },
      recipeLibrary: { available: false },
      macroTracking: { available: false },

      // Mental Health
      meditationContent: { available: "limited" },
      therapyAccess: { available: "addon" },
      stressManagement: { available: true },
      sleepTracking: { available: "limited" },
      aiMentalSupport: { available: false },

      // Coaching
      aiCoaching: { available: false },
      liveCoaches: { available: false },
      nutritionCoaching: { available: false },
      fitnessCoaching: { available: false },

      // Engagement
      teamChallenges: { available: true },
      leaderboards: { available: true },
      rewards: { available: true },
      gamification: { available: true },
      socialFeatures: { available: true },
      contentLibrary: { available: true, notes: "WebMD content" },

      // Analytics & Integration
      hrDashboard: { available: true },
      roiReporting: { available: true },
      hrisIntegration: { available: true },
      apiAccess: { available: "addon" },
      customReports: { available: true },
      anonymizedData: { available: true },
    },

    swot: {
      strengths: [
        "WebMD content library",
        "Strong employee engagement focus",
        "Good survey/listening tools",
        "Enterprise credibility",
      ],
      weaknesses: [
        "No transparent pricing",
        "Complex implementation",
        "No fitness or nutrition depth",
        "No AI capabilities",
      ],
      opportunities: [
        "WebMD health content integration",
        "Mental health market expansion",
      ],
      threats: [
        "Competitors with more comprehensive offerings",
        "Price sensitivity in market",
      ],
    },

    salesIntel: {
      typicalDealSize: "$50,000 - $200,000 annual",
      salesCycle: "3-6 months",
      decisionMakers: ["CHRO", "VP Employee Experience", "Benefits Director"],
      commonObjections: [
        "We value the WebMD connection",
        "We're focused on culture, not fitness",
        "We like their listening tools",
      ],
      competitiveAdvantages: [
        "BodyF1RST combines engagement + fitness + nutrition + AI",
        "Transparent pricing vs quote-only",
        "$0 setup fee vs their $500-$1K",
        "2-week implementation vs months",
        "No employee minimums",
      ],
      killerQuestions: [
        "How do employees get personalized fitness guidance?",
        "What nutrition tracking does Limeade offer?",
        "What's the all-in cost including setup?",
        "How long is typical implementation?",
      ],
      proofPoints: [
        "Employees want holistic wellness, not just surveys",
        "AI coaching drives outcomes surveys can't",
        "85%+ engagement with our gamified approach",
      ],
    },

    reviews: {
      g2Rating: 4.3,
      g2Reviews: 120,
      commonPraise: [
        "Good engagement tools",
        "Nice content library",
        "Solid enterprise features",
      ],
      commonComplaints: [
        "No transparent pricing",
        "Limited fitness features",
        "Complex to implement",
        "No free trial available",
      ],
    },

    limitations: [
      "Quote-based pricing only",
      "$500-$1K+ setup fees",
      "No free trial",
      "Complex implementation process",
      "No AI coaching",
      "Limited fitness and nutrition features",
    ],

    bodyf1rstWins: [
      "Transparent pricing - no quotes needed",
      "$0 setup fee",
      "AI coaching for personalized guidance",
      "Complete fitness and nutrition platform",
      "2-week implementation",
      "30-day pilot programs available",
    ],
  },

  {
    id: "wellhub",
    name: "Wellhub",
    fullName: "Wellhub (formerly Gympass)",
    description: "Gym network access and fitness subscription aggregator",
    tagline: "One subscription. Thousands of ways to feel good.",
    founded: 2012,
    headquarters: "New York, NY",
    employees: "2,000+",
    funding: "$530M+ raised",
    website: "wellhub.com",

    targetMarket: {
      minEmployees: "any",
      maxEmployees: "unlimited",
      industries: ["Technology", "Professional Services", "Finance", "Any"],
      idealCustomer: "Companies wanting gym access as a benefit",
    },

    pricing: {
      basic: { monthly: 0, annual: 0, label: "Starter (Free)" },
      standard: { monthly: 12, annual: 144, label: "Basic" },
      premium: { monthly: 65, annual: 780, label: "Gold" },
      enterprise: { label: "Diamond/Platinum", notes: "$100+/month" },
    },
    setupFee: { amount: 0, notes: "No setup fee" },
    contractTerms: {
      minimumMonths: 12,
      autoRenewal: true,
      cancellationNotice: "30 days",
    },

    features: {
      // Core Platform
      mobileAppIOS: { available: true },
      mobileAppAndroid: { available: true },
      webApp: { available: true },
      offlineMode: { available: false },
      ssoIntegration: { available: "addon" },
      hipaaCompliant: { available: "limited" },
      soc2Certified: { available: true },
      whiteLabeling: { available: false },

      // Fitness
      workoutLibrary: { available: "limited", notes: "Via partners" },
      customWorkouts: { available: false },
      liveClasses: { available: true, notes: "Gym partner classes" },
      activityTracking: { available: true },
      wearableSync: { available: true },
      gymAccess: { available: true, notes: "Core offering - 50K+ gyms" },

      // Nutrition
      nutritionTracking: { available: false },
      mealPlanning: { available: false },
      recipeLibrary: { available: false },
      macroTracking: { available: false },

      // Mental Health
      meditationContent: { available: "limited", notes: "Headspace partnership" },
      therapyAccess: { available: "limited", notes: "Select plans" },
      stressManagement: { available: "limited" },
      sleepTracking: { available: false },
      aiMentalSupport: { available: false },

      // Coaching
      aiCoaching: { available: false },
      liveCoaches: { available: "limited", notes: "Gym trainers only" },
      nutritionCoaching: { available: false },
      fitnessCoaching: { available: "limited" },

      // Engagement
      teamChallenges: { available: false },
      leaderboards: { available: false },
      rewards: { available: "limited" },
      gamification: { available: false },
      socialFeatures: { available: "limited" },
      contentLibrary: { available: "limited" },

      // Analytics & Integration
      hrDashboard: { available: true },
      roiReporting: { available: "limited" },
      hrisIntegration: { available: "addon" },
      apiAccess: { available: "addon" },
      customReports: { available: "limited" },
      anonymizedData: { available: true },
    },

    swot: {
      strengths: [
        "Massive gym network (50K+ locations)",
        "Flexible employee-paid model",
        "Strong fitness focus",
        "No employer cost option",
      ],
      weaknesses: [
        "Fitness-only focus",
        "No holistic wellness",
        "No team engagement features",
        "No AI or coaching",
        "Variable employer costs",
      ],
      opportunities: [
        "Return-to-gym trends",
        "Hybrid work fitness needs",
      ],
      threats: [
        "Digital-first wellness platforms",
        "Home fitness trends",
        "Complete wellness solutions",
      ],
    },

    salesIntel: {
      typicalDealSize: "$0 - $100,000 (highly variable)",
      salesCycle: "1-2 months",
      decisionMakers: ["HR Director", "Benefits Manager", "CFO"],
      commonObjections: [
        "We want gym access as a benefit",
        "Employees love having gym options",
        "It's free for the company",
      ],
      competitiveAdvantages: [
        "BodyF1RST is holistic wellness, not just gym access",
        "AI coaching for those who can't/won't go to gyms",
        "Team challenges build company culture",
        "Nutrition and mental health included",
        "Predictable employer costs vs variable",
      ],
      killerQuestions: [
        "What about employees who don't use gyms?",
        "How do you track wellness outcomes?",
        "What team engagement features exist?",
        "How do remote workers participate?",
      ],
      proofPoints: [
        "Only 15-20% of employees use gym benefits",
        "Digital wellness reaches 85%+ of workforce",
        "Holistic approach shows better health outcomes",
      ],
    },

    reviews: {
      g2Rating: 4.4,
      g2Reviews: 250,
      commonPraise: [
        "Great gym network",
        "Flexible pricing tiers",
        "Good for fitness enthusiasts",
      ],
      commonComplaints: [
        "Only useful for gym-goers",
        "No holistic wellness",
        "Variable costs confuse budgeting",
        "Poor for remote teams",
      ],
    },

    limitations: [
      "Fitness-focused only - no holistic wellness",
      "No team challenges or engagement",
      "No AI coaching or personalization",
      "No nutrition tracking",
      "Limited mental health features",
      "Excludes non-gym-goers (80%+ of workforce)",
    ],

    bodyf1rstWins: [
      "Holistic wellness vs gym-only",
      "Reaches 85%+ workforce vs 15-20%",
      "AI coaching for personalization",
      "Team challenges build culture",
      "Predictable employer costs",
      "Works for remote teams",
    ],
  },

  {
    id: "headspace",
    name: "Headspace",
    fullName: "Headspace for Work",
    description: "Mental health and meditation platform for enterprises",
    tagline: "Meditation made simple for work",
    founded: 2010,
    headquarters: "Santa Monica, CA",
    employees: "800+",
    funding: "$300M+ raised",
    website: "headspace.com/work",

    targetMarket: {
      minEmployees: "any",
      maxEmployees: "unlimited",
      industries: ["Technology", "Media", "Professional Services", "Finance"],
      idealCustomer: "Companies prioritizing mental health and mindfulness",
    },

    pricing: {
      basic: { monthly: 7.5, annual: 90, label: "Teams" },
      standard: { monthly: 13, annual: 156, label: "Enterprise" },
      premium: { monthly: 50, annual: 600, label: "Enterprise Plus" },
      enterprise: { label: "Custom", notes: "Includes EAP integration" },
    },
    setupFee: { amount: 0, notes: "No setup fee for standard plans" },
    contractTerms: {
      minimumMonths: 12,
      autoRenewal: true,
      cancellationNotice: "30 days",
    },

    features: {
      // Core Platform
      mobileAppIOS: { available: true },
      mobileAppAndroid: { available: true },
      webApp: { available: true },
      offlineMode: { available: true },
      ssoIntegration: { available: true },
      hipaaCompliant: { available: "limited" },
      soc2Certified: { available: true },
      whiteLabeling: { available: false },

      // Fitness
      workoutLibrary: { available: false },
      customWorkouts: { available: false },
      liveClasses: { available: false },
      activityTracking: { available: false },
      wearableSync: { available: false },
      gymAccess: { available: false },

      // Nutrition
      nutritionTracking: { available: false },
      mealPlanning: { available: false },
      recipeLibrary: { available: false },
      macroTracking: { available: false },

      // Mental Health
      meditationContent: { available: true, notes: "Core offering - 1000+ sessions" },
      therapyAccess: { available: "addon", notes: "Ginger integration" },
      stressManagement: { available: true },
      sleepTracking: { available: "limited" },
      aiMentalSupport: { available: false },

      // Coaching
      aiCoaching: { available: false },
      liveCoaches: { available: "addon", notes: "Premium tier only" },
      nutritionCoaching: { available: false },
      fitnessCoaching: { available: false },

      // Engagement
      teamChallenges: { available: false },
      leaderboards: { available: false },
      rewards: { available: false },
      gamification: { available: "limited" },
      socialFeatures: { available: "limited" },
      contentLibrary: { available: true, notes: "Meditation focused" },

      // Analytics & Integration
      hrDashboard: { available: true },
      roiReporting: { available: "limited" },
      hrisIntegration: { available: "addon" },
      apiAccess: { available: "addon" },
      customReports: { available: "addon" },
      anonymizedData: { available: true },
    },

    swot: {
      strengths: [
        "Strong brand recognition",
        "Premium meditation content",
        "Celebrity backing (Andy Puddicombe)",
        "Clean user experience",
        "Good offline support",
      ],
      weaknesses: [
        "Mental health only",
        "No fitness or nutrition",
        "Limited engagement features",
        "Highest PEPM in category",
        "No team challenges",
      ],
      opportunities: [
        "Mental health awareness growth",
        "Corporate wellness expansion",
      ],
      threats: [
        "Holistic wellness platforms",
        "Free meditation apps",
        "Bundled solutions",
      ],
    },

    salesIntel: {
      typicalDealSize: "$10,000 - $100,000 annual",
      salesCycle: "1-3 months",
      decisionMakers: ["HR Director", "Benefits Manager", "Wellness Lead"],
      commonObjections: [
        "Our employees love Headspace",
        "Mental health is our priority",
        "We want the brand recognition",
      ],
      competitiveAdvantages: [
        "BodyF1RST includes mental health PLUS fitness + nutrition",
        "Team challenges missing from Headspace",
        "AI coaching provides personalized support",
        "Lower cost for more features",
        "Holistic approach = better outcomes",
      ],
      killerQuestions: [
        "What about employees who need fitness support?",
        "How do teams engage together?",
        "What nutrition guidance do employees get?",
        "Why pay more for just mental health?",
      ],
      proofPoints: [
        "Mental health improves more with exercise included",
        "Holistic wellness drives better engagement",
        "BodyF1RST Standard = $15 vs Headspace Teams = $7.50 (but includes 10x more)",
      ],
    },

    reviews: {
      g2Rating: 4.6,
      g2Reviews: 320,
      commonPraise: [
        "Beautiful content",
        "Great for meditation",
        "Strong brand",
      ],
      commonComplaints: [
        "Only mental health",
        "No fitness integration",
        "Limited workplace features",
        "Expensive for single-purpose",
      ],
    },

    limitations: [
      "Mental health only - no fitness or nutrition",
      "No team challenges or engagement",
      "No AI coaching or personalization",
      "Highest per-employee cost in category",
      "Enterprise pricing requires quotes",
      "No holistic wellness approach",
    ],

    bodyf1rstWins: [
      "Complete platform vs single-purpose",
      "Mental health + fitness + nutrition",
      "AI coaching for personalization",
      "Team challenges for engagement",
      "Better value per dollar spent",
      "Holistic approach = better outcomes",
    ],
  },
];

// BodyF1RST data for comparisons
export const bodyf1rst = {
  id: "bodyf1rst",
  name: "BodyF1RST",
  tagline: "Corporate Wellness That Actually Works",

  pricing: {
    basic: { monthly: 10, annual: 120, label: "Basic" },
    standard: { monthly: 15, annual: 180, label: "Standard" },
    premium: { monthly: 20, annual: 240, label: "Premium" },
  },
  setupFee: 0,
  minimumEmployees: "any",

  features: {
    // All features are true/included
    mobileAppIOS: { available: true },
    mobileAppAndroid: { available: true },
    webApp: { available: true },
    offlineMode: { available: true },
    ssoIntegration: { available: true },
    hipaaCompliant: { available: true },
    soc2Certified: { available: true },
    whiteLabeling: { available: true, notes: "Premium tier" },

    workoutLibrary: { available: true },
    customWorkouts: { available: true },
    liveClasses: { available: true },
    activityTracking: { available: true },
    wearableSync: { available: true },
    gymAccess: { available: false, notes: "Digital-first" },

    nutritionTracking: { available: true },
    mealPlanning: { available: true },
    recipeLibrary: { available: true },
    macroTracking: { available: true },

    meditationContent: { available: true },
    therapyAccess: { available: true, notes: "EAP partnership" },
    stressManagement: { available: true },
    sleepTracking: { available: true },
    aiMentalSupport: { available: true },

    aiCoaching: { available: true },
    liveCoaches: { available: true, notes: "Premium tier" },
    nutritionCoaching: { available: true },
    fitnessCoaching: { available: true },

    teamChallenges: { available: true },
    leaderboards: { available: true },
    rewards: { available: true },
    gamification: { available: true },
    socialFeatures: { available: true },
    contentLibrary: { available: true },

    hrDashboard: { available: true },
    roiReporting: { available: true },
    hrisIntegration: { available: true },
    apiAccess: { available: true, notes: "Premium tier" },
    customReports: { available: true },
    anonymizedData: { available: true },
  },

  keyDifferentiators: [
    "AI coaching included at every tier",
    "No minimum employee requirements",
    "$0 setup fee",
    "2-week implementation",
    "Transparent pricing",
    "Holistic wellness (fitness + nutrition + mental)",
    "40-70% below industry rates",
    "85%+ engagement rate",
  ],
};

// Feature categories for display
export const featureCategories = {
  corePlatform: {
    label: "Core Platform",
    features: [
      "mobileAppIOS",
      "mobileAppAndroid",
      "webApp",
      "offlineMode",
      "ssoIntegration",
      "hipaaCompliant",
      "soc2Certified",
      "whiteLabeling",
    ],
  },
  fitness: {
    label: "Fitness",
    features: [
      "workoutLibrary",
      "customWorkouts",
      "liveClasses",
      "activityTracking",
      "wearableSync",
      "gymAccess",
    ],
  },
  nutrition: {
    label: "Nutrition",
    features: [
      "nutritionTracking",
      "mealPlanning",
      "recipeLibrary",
      "macroTracking",
    ],
  },
  mentalHealth: {
    label: "Mental Health",
    features: [
      "meditationContent",
      "therapyAccess",
      "stressManagement",
      "sleepTracking",
      "aiMentalSupport",
    ],
  },
  coaching: {
    label: "Coaching",
    features: [
      "aiCoaching",
      "liveCoaches",
      "nutritionCoaching",
      "fitnessCoaching",
    ],
  },
  engagement: {
    label: "Engagement",
    features: [
      "teamChallenges",
      "leaderboards",
      "rewards",
      "gamification",
      "socialFeatures",
      "contentLibrary",
    ],
  },
  analytics: {
    label: "Analytics & Integration",
    features: [
      "hrDashboard",
      "roiReporting",
      "hrisIntegration",
      "apiAccess",
      "customReports",
      "anonymizedData",
    ],
  },
};

// Feature labels for display
export const featureLabels: Record<string, string> = {
  mobileAppIOS: "iOS Mobile App",
  mobileAppAndroid: "Android Mobile App",
  webApp: "Web Application",
  offlineMode: "Offline Mode",
  ssoIntegration: "SSO Integration",
  hipaaCompliant: "HIPAA Compliant",
  soc2Certified: "SOC 2 Certified",
  whiteLabeling: "White Labeling",

  workoutLibrary: "Workout Library",
  customWorkouts: "Custom Workouts",
  liveClasses: "Live Classes",
  activityTracking: "Activity Tracking",
  wearableSync: "Wearable Sync",
  gymAccess: "Gym Network Access",

  nutritionTracking: "Nutrition Tracking",
  mealPlanning: "Meal Planning",
  recipeLibrary: "Recipe Library",
  macroTracking: "Macro Tracking",

  meditationContent: "Meditation Content",
  therapyAccess: "Therapy Access",
  stressManagement: "Stress Management",
  sleepTracking: "Sleep Tracking",
  aiMentalSupport: "AI Mental Support",

  aiCoaching: "AI Coaching",
  liveCoaches: "Live Coaches",
  nutritionCoaching: "Nutrition Coaching",
  fitnessCoaching: "Fitness Coaching",

  teamChallenges: "Team Challenges",
  leaderboards: "Leaderboards",
  rewards: "Rewards Program",
  gamification: "Gamification",
  socialFeatures: "Social Features",
  contentLibrary: "Content Library",

  hrDashboard: "HR Dashboard",
  roiReporting: "ROI Reporting",
  hrisIntegration: "HRIS Integration",
  apiAccess: "API Access",
  customReports: "Custom Reports",
  anonymizedData: "Anonymized Data",
};

export function getCompetitor(id: string): Competitor | undefined {
  return competitors.find(c => c.id === id);
}

export function getCompetitorByName(name: string): Competitor | undefined {
  return competitors.find(c =>
    c.name.toLowerCase() === name.toLowerCase() ||
    c.fullName.toLowerCase().includes(name.toLowerCase())
  );
}
