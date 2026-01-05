"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, DollarSign, Users, Heart } from "lucide-react";

export default function ROICalculatorPage() {
  const [employees, setEmployees] = useState(200);
  const [avgSalary, setAvgSalary] = useState(65000);
  const [tier, setTier] = useState<"basic" | "standard" | "premium">("standard");
  const [currentAbsenteeism, setCurrentAbsenteeism] = useState(4.5);
  const [currentTurnover, setCurrentTurnover] = useState(15);

  const tierPricing = {
    basic: 120,
    standard: 180,
    premium: 240,
  };

  const calculations = useMemo(() => {
    const annualCost = employees * tierPricing[tier];

    // Industry benchmarks for wellness ROI
    const absenteeismReduction = 0.25; // 25% reduction
    const turnoverReduction = 0.15; // 15% reduction
    const productivityGain = 0.05; // 5% productivity improvement
    const healthcareSavings = 0.03; // 3% healthcare cost reduction

    // Calculate savings
    const avgDailyWage = avgSalary / 260; // ~260 working days
    const absenteeismDays = currentAbsenteeism;
    const savedAbsenteeismDays = absenteeismDays * absenteeismReduction;
    const absenteeismSavings = employees * savedAbsenteeismDays * avgDailyWage;

    const avgTurnoverCost = avgSalary * 0.5; // 50% of salary to replace
    const currentTurnoverEmployees = employees * (currentTurnover / 100);
    const reducedTurnover = currentTurnoverEmployees * turnoverReduction;
    const turnoverSavings = reducedTurnover * avgTurnoverCost;

    const productivitySavings = employees * avgSalary * productivityGain;

    const avgHealthcareCostPerEmployee = 7500; // Industry average
    const healthcareSavingsTotal = employees * avgHealthcareCostPerEmployee * healthcareSavings;

    const totalSavings = absenteeismSavings + turnoverSavings + productivitySavings + healthcareSavingsTotal;
    const netROI = totalSavings - annualCost;
    const roiPercentage = ((totalSavings / annualCost) - 1) * 100;
    const roiRatio = totalSavings / annualCost;

    return {
      annualCost,
      absenteeismSavings,
      turnoverSavings,
      productivitySavings,
      healthcareSavingsTotal,
      totalSavings,
      netROI,
      roiPercentage,
      roiRatio,
    };
  }, [employees, avgSalary, tier, currentAbsenteeism, currentTurnover]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2 text-orange-600 mb-4">
            <Calculator className="h-6 w-6" />
            <span className="text-sm font-semibold uppercase tracking-wide">ROI Calculator</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Calculate Your Wellness ROI
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See how much your organization can save with a corporate wellness program.
            Based on industry research and real client outcomes.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Your Organization</h2>

            <div className="space-y-6">
              {/* Number of Employees */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Employees
                </label>
                <input
                  type="range"
                  min="50"
                  max="2000"
                  step="10"
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-gray-500">50</span>
                  <span className="text-lg font-bold text-orange-600">{employees}</span>
                  <span className="text-xs text-gray-500">2000+</span>
                </div>
              </div>

              {/* Average Salary */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Average Employee Salary
                </label>
                <input
                  type="range"
                  min="35000"
                  max="150000"
                  step="5000"
                  value={avgSalary}
                  onChange={(e) => setAvgSalary(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-gray-500">$35k</span>
                  <span className="text-lg font-bold text-orange-600">{formatCurrency(avgSalary)}</span>
                  <span className="text-xs text-gray-500">$150k</span>
                </div>
              </div>

              {/* Plan Tier */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Plan Tier
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(["basic", "standard", "premium"] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTier(t)}
                      className={`py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                        tier === t
                          ? "bg-orange-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {t.charAt(0).toUpperCase() + t.slice(1)}
                      <span className="block text-xs opacity-75">${tierPricing[t]}/yr</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Current Absenteeism */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Avg. Sick Days per Employee/Year
                </label>
                <input
                  type="range"
                  min="2"
                  max="10"
                  step="0.5"
                  value={currentAbsenteeism}
                  onChange={(e) => setCurrentAbsenteeism(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-gray-500">2 days</span>
                  <span className="text-lg font-bold text-orange-600">{currentAbsenteeism} days</span>
                  <span className="text-xs text-gray-500">10 days</span>
                </div>
              </div>

              {/* Current Turnover */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Annual Turnover Rate
                </label>
                <input
                  type="range"
                  min="5"
                  max="40"
                  step="1"
                  value={currentTurnover}
                  onChange={(e) => setCurrentTurnover(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-gray-500">5%</span>
                  <span className="text-lg font-bold text-orange-600">{currentTurnover}%</span>
                  <span className="text-xs text-gray-500">40%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div>
            <motion.div
              key={`${employees}-${avgSalary}-${tier}`}
              initial={{ opacity: 0.8, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl p-8 text-white"
            >
              <h2 className="text-xl font-semibold mb-6">Your Projected ROI</h2>

              <div className="text-center py-6 border-b border-orange-500/30">
                <div className="text-6xl font-bold">{calculations.roiRatio.toFixed(1)}x</div>
                <div className="text-orange-200 mt-2">Return on Investment</div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold">{formatCurrency(calculations.annualCost)}</div>
                  <div className="text-sm text-orange-200">Annual Program Cost</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold">{formatCurrency(calculations.totalSavings)}</div>
                  <div className="text-sm text-orange-200">Estimated Annual Savings</div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white/10 rounded-xl">
                <div className="text-3xl font-bold text-green-300">
                  +{formatCurrency(calculations.netROI)}
                </div>
                <div className="text-sm text-orange-200">Net Annual Benefit</div>
              </div>
            </motion.div>

            {/* Savings Breakdown */}
            <div className="mt-6 bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Savings Breakdown</h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Reduced Absenteeism</div>
                      <div className="text-xs text-gray-500">25% fewer sick days</div>
                    </div>
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    {formatCurrency(calculations.absenteeismSavings)}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Lower Turnover</div>
                      <div className="text-xs text-gray-500">15% reduction in turnover</div>
                    </div>
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    {formatCurrency(calculations.turnoverSavings)}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center">
                      <DollarSign className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Productivity Gains</div>
                      <div className="text-xs text-gray-500">5% productivity improvement</div>
                    </div>
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    {formatCurrency(calculations.productivitySavings)}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-red-100 flex items-center justify-center">
                      <Heart className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Healthcare Savings</div>
                      <div className="text-xs text-gray-500">3% reduction in costs</div>
                    </div>
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    {formatCurrency(calculations.healthcareSavingsTotal)}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1">
                <Link href="/contact">Get a Custom Quote</Link>
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Methodology Note */}
        <div className="mt-16 mx-auto max-w-3xl text-center">
          <p className="text-sm text-gray-500">
            * ROI calculations are based on industry research from RAND Corporation, Harvard Business Review,
            and Health Affairs. Actual results may vary based on program implementation, employee engagement,
            and organizational factors. Contact us for a customized analysis.
          </p>
        </div>
      </div>
    </div>
  );
}
