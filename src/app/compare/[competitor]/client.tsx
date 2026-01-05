"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  X,
  AlertTriangle,
  TrendingUp,
  Star,
} from "lucide-react";
import { SectionBackground } from "@/components/layered-background";
import { CompactFeatureComparison, PricingComparison } from "@/components/feature-matrix";
import { bodyf1rst, getCompetitor } from "@/data/competitors";

export default function CompetitorCompareClient({ competitorId }: { competitorId: string }) {
  const competitor = getCompetitor(competitorId);

  if (!competitor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            Competitor Not Found
          </h1>
          <Link href="/compare" className="text-orange-400 hover:text-orange-300">
            Back to Comparisons
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <SectionBackground variant="default" className="py-24 pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/compare"
            className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Comparisons
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              <span className="text-gradient">BodyF1RST</span> vs {competitor.name}
            </h1>
            <p className="mt-4 text-lg text-white/60 max-w-2xl">
              {competitor.description}
            </p>
          </motion.div>

          {/* Quick Comparison Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <ComparisonStat
              label="Annual Cost (Basic)"
              competitorValue={`$${competitor.pricing.basic.annual}`}
              bodyf1rstValue={`$${bodyf1rst.pricing.basic.annual}`}
              winner="bodyf1rst"
            />
            <ComparisonStat
              label="Setup Fee"
              competitorValue={
                typeof competitor.setupFee.amount === "number"
                  ? competitor.setupFee.amount === 0
                    ? "$0"
                    : `$${competitor.setupFee.amount.toLocaleString()}+`
                  : "Custom"
              }
              bodyf1rstValue="$0"
              winner={competitor.setupFee.amount === 0 ? "tie" : "bodyf1rst"}
            />
            <ComparisonStat
              label="Min. Employees"
              competitorValue={
                competitor.targetMarket.minEmployees === "any"
                  ? "Any"
                  : `${competitor.targetMarket.minEmployees}+`
              }
              bodyf1rstValue="Any"
              winner={
                competitor.targetMarket.minEmployees === "any"
                  ? "tie"
                  : "bodyf1rst"
              }
            />
            <ComparisonStat
              label="AI Coaching"
              competitorValue={competitor.features.aiCoaching.available ? "Yes" : "No"}
              bodyf1rstValue="Yes"
              winner={competitor.features.aiCoaching.available ? "tie" : "bodyf1rst"}
            />
          </div>
        </div>
      </SectionBackground>

      {/* Key Differences */}
      <SectionBackground variant="darker" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Why Choose BodyF1RST */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 border-green-500/20"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Check className="w-6 h-6 text-green-500" />
                Why Choose BodyF1RST
              </h3>
              <ul className="space-y-4">
                {competitor.bodyf1rstWins.map((win, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">{win}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Competitor Limitations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 border-red-500/20"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                {competitor.name} Limitations
              </h3>
              <ul className="space-y-4">
                {competitor.limitations.map((limitation, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">{limitation}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </SectionBackground>

      {/* Feature Comparison */}
      <SectionBackground variant="default" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">
              Feature <span className="text-gradient">Comparison</span>
            </h2>
          </motion.div>

          <CompactFeatureComparison competitorId={competitorId} />
        </div>
      </SectionBackground>

      {/* Pricing Comparison */}
      <SectionBackground variant="darker" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">
              Pricing <span className="text-gradient">Comparison</span>
            </h2>
          </motion.div>

          <div className="glass-card p-6">
            <PricingComparison competitorId={competitorId} />
          </div>
        </div>
      </SectionBackground>

      {/* SWOT Analysis */}
      <SectionBackground variant="default" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">
              {competitor.name} <span className="text-gradient">SWOT Analysis</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6 border-green-500/20">
              <h4 className="font-semibold text-green-400 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Strengths
              </h4>
              <ul className="space-y-2">
                {competitor.swot.strengths.map((item, i) => (
                  <li key={i} className="text-white/70 text-sm flex items-start gap-2">
                    <span className="text-green-500">+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6 border-red-500/20">
              <h4 className="font-semibold text-red-400 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Weaknesses
              </h4>
              <ul className="space-y-2">
                {competitor.swot.weaknesses.map((item, i) => (
                  <li key={i} className="text-white/70 text-sm flex items-start gap-2">
                    <span className="text-red-500">-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6 border-blue-500/20">
              <h4 className="font-semibold text-blue-400 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5" />
                Opportunities
              </h4>
              <ul className="space-y-2">
                {competitor.swot.opportunities.map((item, i) => (
                  <li key={i} className="text-white/70 text-sm flex items-start gap-2">
                    <span className="text-blue-500">*</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6 border-yellow-500/20">
              <h4 className="font-semibold text-yellow-400 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Threats
              </h4>
              <ul className="space-y-2">
                {competitor.swot.threats.map((item, i) => (
                  <li key={i} className="text-white/70 text-sm flex items-start gap-2">
                    <span className="text-yellow-500">!</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* Customer Reviews */}
      <SectionBackground variant="darker" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">
              What Customers Say About{" "}
              <span className="text-gradient">{competitor.name}</span>
            </h2>
            <div className="mt-4 flex items-center justify-center gap-4">
              <div className="text-white/60">
                G2 Rating:{" "}
                <span className="text-white font-semibold">
                  {competitor.reviews.g2Rating}/5
                </span>{" "}
                ({competitor.reviews.g2Reviews} reviews)
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-6 border-green-500/20">
              <h4 className="font-semibold text-green-400 mb-4">Common Praise</h4>
              <ul className="space-y-2">
                {competitor.reviews.commonPraise.map((item, i) => (
                  <li key={i} className="text-white/70 text-sm flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6 border-red-500/20">
              <h4 className="font-semibold text-red-400 mb-4">Common Complaints</h4>
              <ul className="space-y-2">
                {competitor.reviews.commonComplaints.map((item, i) => (
                  <li key={i} className="text-white/70 text-sm flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-[100px]" />

        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to Switch from {competitor.name}?
            </h2>
            <p className="mt-2 text-orange-100">
              Get a personalized migration plan and ROI analysis.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-white text-orange-600 font-bold text-lg shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all hover:-translate-y-0.5 flex items-center gap-2 group"
              >
                Request a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/roi-calculator"
                className="px-8 py-4 rounded-xl border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-all"
              >
                Calculate Your Savings
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ComparisonStat({
  label,
  competitorValue,
  bodyf1rstValue,
  winner,
}: {
  label: string;
  competitorValue: string;
  bodyf1rstValue: string;
  winner: "competitor" | "bodyf1rst" | "tie";
}) {
  return (
    <div className="glass-card p-4 text-center">
      <div className="text-xs text-white/40 mb-3">{label}</div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div
            className={`text-lg font-bold ${
              winner === "competitor" ? "text-green-400" : "text-white/60"
            }`}
          >
            {competitorValue}
          </div>
          <div className="text-xs text-white/40">Competitor</div>
        </div>
        <div>
          <div
            className={`text-lg font-bold ${
              winner === "bodyf1rst" ? "text-green-400" : "text-orange-400"
            }`}
          >
            {bodyf1rstValue}
          </div>
          <div className="text-xs text-orange-400/60">BodyF1RST</div>
        </div>
      </div>
    </div>
  );
}
