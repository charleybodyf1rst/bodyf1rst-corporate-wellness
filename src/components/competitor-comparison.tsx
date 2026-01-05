"use client";

import { useState } from "react";
import { Check, X, Minus, ChevronDown, ChevronUp } from "lucide-react";

interface Competitor {
  name: string;
  description: string;
  pricing: {
    basic: string;
    standard: string;
    premium: string;
  };
  features: {
    mobileApp: boolean | "limited";
    aiCoaching: boolean | "limited";
    liveCoaches: boolean | "limited";
    nutritionTracking: boolean | "limited";
    mentalHealth: boolean | "limited";
    teamChallenges: boolean | "limited";
    hrDashboard: boolean | "limited";
    wearableSync: boolean | "limited";
    customContent: boolean | "limited";
  };
  minEmployees: string;
  setupFee: string;
  limitations: string[];
}

const competitors: Competitor[] = [
  {
    name: "Virgin Pulse",
    description: "Enterprise wellness platform acquired by Personify Health",
    pricing: { basic: "$72/yr", standard: "$240/yr", premium: "$600/yr" },
    features: {
      mobileApp: true,
      aiCoaching: false,
      liveCoaches: "limited",
      nutritionTracking: "limited",
      mentalHealth: "limited",
      teamChallenges: true,
      hrDashboard: true,
      wearableSync: true,
      customContent: "limited",
    },
    minEmployees: "1,000+",
    setupFee: "$5,000+",
    limitations: [
      "No transparent pricing",
      "High minimums ($10K+)",
      "Requires custom quotes",
      "No AI-powered personalization",
    ],
  },
  {
    name: "Wellable",
    description: "Self-service corporate wellness platform",
    pricing: { basic: "$36/yr", standard: "$48/yr", premium: "Custom" },
    features: {
      mobileApp: "limited",
      aiCoaching: false,
      liveCoaches: false,
      nutritionTracking: "limited",
      mentalHealth: false,
      teamChallenges: true,
      hrDashboard: true,
      wearableSync: true,
      customContent: false,
    },
    minEmployees: "25+",
    setupFee: "$0",
    limitations: [
      "25+ employee minimum (self-directed)",
      "500+ for full-service",
      "Extra charges for features",
      "Basic mobile experience",
    ],
  },
  {
    name: "Limeade",
    description: "Well-being platform by WebMD",
    pricing: { basic: "$72/yr", standard: "$200/yr", premium: "$500/yr" },
    features: {
      mobileApp: true,
      aiCoaching: false,
      liveCoaches: false,
      nutritionTracking: false,
      mentalHealth: true,
      teamChallenges: true,
      hrDashboard: true,
      wearableSync: "limited",
      customContent: "limited",
    },
    minEmployees: "Quote",
    setupFee: "$500-$1K",
    limitations: [
      "Quote-based pricing only",
      "No free trial",
      "$500-$1K setup fees",
      "Complex implementation",
    ],
  },
  {
    name: "Wellhub",
    description: "Formerly Gympass - gym network access",
    pricing: { basic: "Free", standard: "$144/yr", premium: "$780/yr" },
    features: {
      mobileApp: true,
      aiCoaching: false,
      liveCoaches: "limited",
      nutritionTracking: false,
      mentalHealth: "limited",
      teamChallenges: false,
      hrDashboard: true,
      wearableSync: true,
      customContent: false,
    },
    minEmployees: "Any",
    setupFee: "$0",
    limitations: [
      "Fitness-focused only",
      "No holistic wellness",
      "Employee-paid tiers",
      "Variable employer costs",
    ],
  },
  {
    name: "Headspace",
    description: "Mental health and meditation platform",
    pricing: { basic: "$90/yr", standard: "$156/yr", premium: "Custom" },
    features: {
      mobileApp: true,
      aiCoaching: false,
      liveCoaches: "limited",
      nutritionTracking: false,
      mentalHealth: true,
      teamChallenges: false,
      hrDashboard: true,
      wearableSync: false,
      customContent: false,
    },
    minEmployees: "Any",
    setupFee: "$0",
    limitations: [
      "Mental health only",
      "No fitness or nutrition",
      "Highest PEPM rate",
      "Enterprise requires quotes",
    ],
  },
];

const bodyf1rst = {
  name: "BodyF1RST",
  pricing: { basic: "$120/yr", standard: "$180/yr", premium: "$240/yr" },
  features: {
    mobileApp: true,
    aiCoaching: true,
    liveCoaches: true,
    nutritionTracking: true,
    mentalHealth: true,
    teamChallenges: true,
    hrDashboard: true,
    wearableSync: true,
    customContent: true,
  },
  minEmployees: "Any",
  setupFee: "$0",
};

const featureLabels: Record<string, string> = {
  mobileApp: "Mobile App",
  aiCoaching: "AI Coaching",
  liveCoaches: "Live Coaches",
  nutritionTracking: "Nutrition Tracking",
  mentalHealth: "Mental Health",
  teamChallenges: "Team Challenges",
  hrDashboard: "HR Dashboard",
  wearableSync: "Wearable Sync",
  customContent: "Custom Content",
};

function FeatureIcon({ value }: { value: boolean | "limited" }) {
  if (value === true) {
    return <Check className="w-5 h-5 text-green-500" />;
  }
  if (value === "limited") {
    return <Minus className="w-5 h-5 text-yellow-500" />;
  }
  return <X className="w-5 h-5 text-red-500/60" />;
}

export function CompetitorComparison() {
  const [expandedCompetitor, setExpandedCompetitor] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      {/* Pricing Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-4 px-4 text-white/60 font-medium">Provider</th>
              <th className="text-center py-4 px-4 text-white/60 font-medium">Basic</th>
              <th className="text-center py-4 px-4 text-white/60 font-medium">Standard</th>
              <th className="text-center py-4 px-4 text-white/60 font-medium">Premium</th>
              <th className="text-center py-4 px-4 text-white/60 font-medium">Min. Employees</th>
              <th className="text-center py-4 px-4 text-white/60 font-medium">Setup Fee</th>
            </tr>
          </thead>
          <tbody>
            {competitors.map((competitor) => (
              <tr
                key={competitor.name}
                className="border-b border-white/5 hover:bg-white/5 transition-colors"
              >
                <td className="py-4 px-4">
                  <button
                    onClick={() =>
                      setExpandedCompetitor(
                        expandedCompetitor === competitor.name ? null : competitor.name
                      )
                    }
                    className="flex items-center gap-2 text-white hover:text-orange-400 transition-colors"
                  >
                    {competitor.name}
                    {expandedCompetitor === competitor.name ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  <p className="text-xs text-white/40 mt-1">{competitor.description}</p>
                </td>
                <td className="text-center py-4 px-4 text-white/70">{competitor.pricing.basic}</td>
                <td className="text-center py-4 px-4 text-white/70">{competitor.pricing.standard}</td>
                <td className="text-center py-4 px-4 text-white/70">{competitor.pricing.premium}</td>
                <td className="text-center py-4 px-4 text-white/70">{competitor.minEmployees}</td>
                <td className="text-center py-4 px-4 text-white/70">{competitor.setupFee}</td>
              </tr>
            ))}
            {/* BodyF1RST Row - Highlighted */}
            <tr className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 border-2 border-orange-500/30">
              <td className="py-4 px-4">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-md bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">B1</span>
                  </div>
                  <span className="text-white font-semibold">BodyF1RST</span>
                  <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-full">
                    Best Value
                  </span>
                </div>
              </td>
              <td className="text-center py-4 px-4 text-orange-400 font-semibold">
                {bodyf1rst.pricing.basic}
              </td>
              <td className="text-center py-4 px-4 text-orange-400 font-semibold">
                {bodyf1rst.pricing.standard}
              </td>
              <td className="text-center py-4 px-4 text-orange-400 font-semibold">
                {bodyf1rst.pricing.premium}
              </td>
              <td className="text-center py-4 px-4 text-orange-400 font-semibold">
                {bodyf1rst.minEmployees}
              </td>
              <td className="text-center py-4 px-4 text-orange-400 font-semibold">
                {bodyf1rst.setupFee}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Expanded Competitor Details */}
      {expandedCompetitor && (
        <div className="glass-card p-6 animate-in slide-in-from-top-2">
          <h4 className="text-lg font-semibold text-white mb-4">
            {expandedCompetitor} Limitations
          </h4>
          <ul className="space-y-2">
            {competitors
              .find((c) => c.name === expandedCompetitor)
              ?.limitations.map((limitation, i) => (
                <li key={i} className="flex items-start gap-2 text-white/60">
                  <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  {limitation}
                </li>
              ))}
          </ul>
        </div>
      )}

      {/* Feature Matrix */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-white mb-6">Feature Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-4 text-white/60 font-medium">Feature</th>
                {competitors.map((c) => (
                  <th key={c.name} className="text-center py-4 px-2 text-white/60 font-medium text-sm">
                    {c.name}
                  </th>
                ))}
                <th className="text-center py-4 px-2 text-orange-400 font-semibold">BodyF1RST</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(featureLabels).map((featureKey) => (
                <tr key={featureKey} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-3 px-4 text-white">{featureLabels[featureKey]}</td>
                  {competitors.map((c) => (
                    <td key={c.name} className="text-center py-3 px-2">
                      <div className="flex justify-center">
                        <FeatureIcon value={c.features[featureKey as keyof typeof c.features]} />
                      </div>
                    </td>
                  ))}
                  <td className="text-center py-3 px-2 bg-orange-500/5">
                    <div className="flex justify-center">
                      <FeatureIcon value={bodyf1rst.features[featureKey as keyof typeof bodyf1rst.features]} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 text-sm text-white/60 mt-6">
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-green-500" />
          <span>Included</span>
        </div>
        <div className="flex items-center gap-2">
          <Minus className="w-4 h-4 text-yellow-500" />
          <span>Limited / Extra Cost</span>
        </div>
        <div className="flex items-center gap-2">
          <X className="w-4 h-4 text-red-500/60" />
          <span>Not Available</span>
        </div>
      </div>

      {/* Why BodyF1RST Callout */}
      <div className="mt-12 glass-card p-8 border-orange-500/20">
        <h3 className="text-2xl font-bold text-white mb-4">Why Choose BodyF1RST?</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-3xl font-bold text-gradient mb-2">40-70%</div>
            <p className="text-white/60">Below industry rates with our introductory pricing</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-gradient mb-2">AI-Powered</div>
            <p className="text-white/60">Personalized coaching that adapts to each employee</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-gradient mb-2">No Minimums</div>
            <p className="text-white/60">Perfect for companies of any size with zero setup fees</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Simple pricing cards for the pricing page
export function PricingCards() {
  const tiers = [
    {
      name: "Basic",
      price: "$10",
      period: "/employee/month",
      annual: "$120/year",
      features: [
        "Mobile app access",
        "Activity & fitness tracking",
        "Team challenges",
        "Basic reporting",
        "Wearable sync",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Standard",
      price: "$15",
      period: "/employee/month",
      annual: "$180/year",
      features: [
        "Everything in Basic",
        "AI coaching assistant",
        "Nutrition tracking",
        "Mental health resources",
        "HR analytics dashboard",
        "Custom challenges",
      ],
      cta: "Most Popular",
      popular: true,
    },
    {
      name: "Premium",
      price: "$20",
      period: "/employee/month",
      annual: "$240/year",
      features: [
        "Everything in Standard",
        "1:1 live coaching sessions",
        "Custom workout programs",
        "Dedicated account manager",
        "API integrations",
        "White-label options",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {tiers.map((tier) => (
        <div
          key={tier.name}
          className={`glass-card p-8 relative ${
            tier.popular ? "border-orange-500/50 scale-105" : ""
          }`}
        >
          {tier.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
              Most Popular
            </div>
          )}
          <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
          <div className="mb-6">
            <span className="text-4xl font-bold text-gradient">{tier.price}</span>
            <span className="text-white/60">{tier.period}</span>
            <p className="text-sm text-white/40 mt-1">{tier.annual} billed annually</p>
          </div>
          <ul className="space-y-3 mb-8">
            {tier.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-white/70">
                <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                {feature}
              </li>
            ))}
          </ul>
          <button
            className={`w-full py-3 rounded-lg font-semibold transition-all ${
              tier.popular
                ? "btn-premium"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {tier.cta}
          </button>
        </div>
      ))}
    </div>
  );
}
