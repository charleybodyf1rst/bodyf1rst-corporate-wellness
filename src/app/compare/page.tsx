"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Download, TrendingDown, Zap } from "lucide-react";
import { SectionBackground } from "@/components/layered-background";
import { FeatureMatrix, PricingComparison } from "@/components/feature-matrix";
import { competitors, bodyf1rst } from "@/data/competitors";

const competitorCards = competitors.map((c) => ({
  id: c.id,
  name: c.name,
  description: c.description,
  pricing: `$${c.pricing.basic.annual}-$${c.pricing.premium.annual}/yr`,
  keyWeakness: c.limitations[0],
  bodyf1rstWin: c.bodyf1rstWins[0],
}));

export default function ComparePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <SectionBackground variant="default" className="py-24 pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Compare <span className="text-gradient">BodyF1RST</span> to Competitors
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/60">
              See how we stack up against industry leaders. Spoiler: we offer more
              features at 40-70% lower cost.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingDown,
                stat: "40-70%",
                label: "Lower Cost",
                description: "vs industry rates",
              },
              {
                icon: Zap,
                stat: "2 Weeks",
                label: "Implementation",
                description: "vs 3-6 months",
              },
              {
                icon: Building2,
                stat: "Any Size",
                label: "No Minimums",
                description: "vs 500-1000+ required",
              },
              {
                icon: Download,
                stat: "$0",
                label: "Setup Fee",
                description: "vs $5K-$25K",
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <item.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gradient">{item.stat}</div>
                <div className="text-sm font-medium text-white">{item.label}</div>
                <div className="text-xs text-white/40">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionBackground>

      {/* Competitor Cards */}
      <SectionBackground variant="darker" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Select a Competitor to Compare
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitorCards.map((competitor, index) => (
              <motion.div
                key={competitor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/compare/${competitor.id}`}>
                  <div className="glass-card p-6 h-full hover:border-orange-500/50 transition-all group cursor-pointer">
                    <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors">
                      {competitor.name}
                    </h3>
                    <p className="text-sm text-white/50 mt-1">
                      {competitor.description}
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="text-sm">
                        <span className="text-white/40">Pricing: </span>
                        <span className="text-white/70">{competitor.pricing}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-red-400/80">Weakness: </span>
                        <span className="text-white/60">{competitor.keyWeakness}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-green-400/80">BodyF1RST Win: </span>
                        <span className="text-white/60">{competitor.bodyf1rstWin}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-orange-400 text-sm font-medium group-hover:gap-2 transition-all">
                      View Full Comparison
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionBackground>

      {/* Pricing Comparison */}
      <SectionBackground variant="default" className="py-24">
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
            <p className="mt-4 text-white/60">
              See how our transparent pricing compares to the competition
            </p>
          </motion.div>

          <div className="glass-card p-6">
            <PricingComparison />
          </div>
        </div>
      </SectionBackground>

      {/* Feature Matrix */}
      <SectionBackground variant="darker" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">
              Complete Feature <span className="text-gradient">Matrix</span>
            </h2>
            <p className="mt-4 text-white/60">
              35+ features compared across all competitors
            </p>
          </motion.div>

          <div className="glass-card p-6">
            <FeatureMatrix />
          </div>
        </div>
      </SectionBackground>

      {/* Why BodyF1RST */}
      <SectionBackground variant="default" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="glass-card p-8 border-orange-500/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Why Companies Choose <span className="text-gradient">BodyF1RST</span>
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              {bodyf1rst.keyDifferentiators.slice(0, 4).map((diff, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg font-semibold text-white mb-2">{diff}</div>
                </div>
              ))}
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
              Ready to Switch?
            </h2>
            <p className="mt-2 text-orange-100">
              Get a personalized comparison and ROI analysis for your organization.
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
                Calculate Your ROI
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
