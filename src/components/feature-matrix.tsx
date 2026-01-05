"use client";

import { useState } from "react";
import { Check, X, Minus, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  competitors,
  bodyf1rst,
  featureCategories,
  featureLabels,
  type CompetitorFeature,
} from "@/data/competitors";

function FeatureIcon({ value }: { value: CompetitorFeature | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-5 h-5 text-green-500" />
    ) : (
      <X className="w-5 h-5 text-red-500/60" />
    );
  }

  if (value.available === true) {
    return (
      <div className="group relative">
        <Check className="w-5 h-5 text-green-500" />
        {value.notes && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
            {value.notes}
          </div>
        )}
      </div>
    );
  }

  if (value.available === "limited" || value.available === "addon") {
    return (
      <div className="group relative">
        <Minus className="w-5 h-5 text-yellow-500" />
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
          {value.available === "addon" ? "Add-on cost" : "Limited"}
          {value.notes && `: ${value.notes}`}
        </div>
      </div>
    );
  }

  return <X className="w-5 h-5 text-red-500/60" />;
}

interface FeatureMatrixProps {
  showCompetitors?: string[];
  compact?: boolean;
}

export function FeatureMatrix({
  showCompetitors,
  compact = false,
}: FeatureMatrixProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(
    compact ? [] : Object.keys(featureCategories)
  );

  const displayedCompetitors = showCompetitors
    ? competitors.filter((c) => showCompetitors.includes(c.id))
    : competitors;

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left py-4 px-4 text-white/60 font-medium sticky left-0 bg-[#0a0a0a] z-10 min-w-[200px]">
              Feature
            </th>
            {displayedCompetitors.map((c) => (
              <th
                key={c.id}
                className="text-center py-4 px-3 text-white/60 font-medium text-sm min-w-[100px]"
              >
                <div className="flex flex-col items-center">
                  <span>{c.name}</span>
                </div>
              </th>
            ))}
            <th className="text-center py-4 px-3 text-orange-400 font-semibold min-w-[100px] bg-orange-500/5">
              <div className="flex flex-col items-center">
                <div className="h-6 w-6 rounded-md bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center mb-1">
                  <span className="text-white font-bold text-xs">B1</span>
                </div>
                <span>BodyF1RST</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(featureCategories).map(([categoryKey, category]) => (
            <>
              {/* Category Header */}
              <tr
                key={categoryKey}
                className="bg-white/5 cursor-pointer hover:bg-white/10 transition-colors"
                onClick={() => toggleCategory(categoryKey)}
              >
                <td
                  colSpan={displayedCompetitors.length + 2}
                  className="py-3 px-4"
                >
                  <div className="flex items-center gap-2">
                    <ChevronDown
                      className={`w-4 h-4 text-white/60 transition-transform ${
                        expandedCategories.includes(categoryKey)
                          ? ""
                          : "-rotate-90"
                      }`}
                    />
                    <span className="font-semibold text-white">
                      {category.label}
                    </span>
                    <span className="text-xs text-white/40">
                      ({category.features.length} features)
                    </span>
                  </div>
                </td>
              </tr>

              {/* Category Features */}
              <AnimatePresence>
                {expandedCategories.includes(categoryKey) &&
                  category.features.map((featureKey) => (
                    <motion.tr
                      key={featureKey}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="py-3 px-4 pl-10 text-white/80 sticky left-0 bg-[#0a0a0a] z-10">
                        {featureLabels[featureKey] || featureKey}
                      </td>
                      {displayedCompetitors.map((c) => (
                        <td key={c.id} className="text-center py-3 px-3">
                          <div className="flex justify-center">
                            <FeatureIcon
                              value={
                                c.features[
                                  featureKey as keyof typeof c.features
                                ]
                              }
                            />
                          </div>
                        </td>
                      ))}
                      <td className="text-center py-3 px-3 bg-orange-500/5">
                        <div className="flex justify-center">
                          <FeatureIcon
                            value={
                              bodyf1rst.features[
                                featureKey as keyof typeof bodyf1rst.features
                              ]
                            }
                          />
                        </div>
                      </td>
                    </motion.tr>
                  ))}
              </AnimatePresence>
            </>
          ))}
        </tbody>
      </table>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 text-sm text-white/60 mt-6">
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-green-500" />
          <span>Included</span>
        </div>
        <div className="flex items-center gap-2">
          <Minus className="w-4 h-4 text-yellow-500" />
          <span>Limited / Add-on</span>
        </div>
        <div className="flex items-center gap-2">
          <X className="w-4 h-4 text-red-500/60" />
          <span>Not Available</span>
        </div>
      </div>
    </div>
  );
}

// Compact feature comparison for competitor-specific pages
export function CompactFeatureComparison({
  competitorId,
}: {
  competitorId: string;
}) {
  const competitor = competitors.find((c) => c.id === competitorId);

  if (!competitor) return null;

  // Key features to highlight
  const keyFeatures = [
    "aiCoaching",
    "liveCoaches",
    "nutritionTracking",
    "meditationContent",
    "teamChallenges",
    "hrDashboard",
    "wearableSync",
    "customContent",
  ];

  return (
    <div className="glass-card p-6">
      <h3 className="text-xl font-bold text-white mb-4">
        Feature Comparison: {competitor.name} vs BodyF1RST
      </h3>
      <div className="grid gap-2">
        {keyFeatures.map((featureKey) => {
          const competitorValue =
            competitor.features[featureKey as keyof typeof competitor.features];
          const bodyf1rstValue =
            bodyf1rst.features[featureKey as keyof typeof bodyf1rst.features];

          return (
            <div
              key={featureKey}
              className="flex items-center justify-between py-2 border-b border-white/5"
            >
              <span className="text-white/80">
                {featureLabels[featureKey] || featureKey}
              </span>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2 min-w-[100px] justify-center">
                  <span className="text-white/40 text-sm">
                    {competitor.name}
                  </span>
                  <FeatureIcon value={competitorValue} />
                </div>
                <div className="flex items-center gap-2 min-w-[100px] justify-center">
                  <span className="text-orange-400 text-sm">BodyF1RST</span>
                  <FeatureIcon value={bodyf1rstValue} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Pricing comparison component
export function PricingComparison({ competitorId }: { competitorId?: string }) {
  const displayedCompetitors = competitorId
    ? competitors.filter((c) => c.id === competitorId)
    : competitors;

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left py-4 px-4 text-white/60 font-medium">
              Provider
            </th>
            <th className="text-center py-4 px-4 text-white/60 font-medium">
              Basic
            </th>
            <th className="text-center py-4 px-4 text-white/60 font-medium">
              Standard
            </th>
            <th className="text-center py-4 px-4 text-white/60 font-medium">
              Premium
            </th>
            <th className="text-center py-4 px-4 text-white/60 font-medium">
              Setup Fee
            </th>
            <th className="text-center py-4 px-4 text-white/60 font-medium">
              Min. Employees
            </th>
          </tr>
        </thead>
        <tbody>
          {displayedCompetitors.map((c) => (
            <tr
              key={c.id}
              className="border-b border-white/5 hover:bg-white/5 transition-colors"
            >
              <td className="py-4 px-4">
                <div className="text-white font-medium">{c.name}</div>
                <div className="text-xs text-white/40 mt-1">{c.description}</div>
              </td>
              <td className="text-center py-4 px-4 text-white/70">
                ${c.pricing.basic.annual}/yr
              </td>
              <td className="text-center py-4 px-4 text-white/70">
                ${c.pricing.standard.annual}/yr
              </td>
              <td className="text-center py-4 px-4 text-white/70">
                {typeof c.pricing.premium.annual === "number"
                  ? `$${c.pricing.premium.annual}/yr`
                  : "Custom"}
              </td>
              <td className="text-center py-4 px-4 text-white/70">
                {typeof c.setupFee.amount === "number"
                  ? c.setupFee.amount === 0
                    ? "$0"
                    : `$${c.setupFee.amount.toLocaleString()}+`
                  : "Custom"}
              </td>
              <td className="text-center py-4 px-4 text-white/70">
                {c.targetMarket.minEmployees === "any"
                  ? "Any"
                  : `${c.targetMarket.minEmployees}+`}
              </td>
            </tr>
          ))}
          {/* BodyF1RST Row */}
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
              ${bodyf1rst.pricing.basic.annual}/yr
            </td>
            <td className="text-center py-4 px-4 text-orange-400 font-semibold">
              ${bodyf1rst.pricing.standard.annual}/yr
            </td>
            <td className="text-center py-4 px-4 text-orange-400 font-semibold">
              ${bodyf1rst.pricing.premium.annual}/yr
            </td>
            <td className="text-center py-4 px-4 text-orange-400 font-semibold">
              $0
            </td>
            <td className="text-center py-4 px-4 text-orange-400 font-semibold">
              Any
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
