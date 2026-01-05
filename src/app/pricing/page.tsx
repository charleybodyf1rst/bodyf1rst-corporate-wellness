"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, X, HelpCircle, ArrowRight } from "lucide-react";
import { SectionBackground } from "@/components/layered-background";
import { CompetitorComparison } from "@/components/competitor-comparison";

const tiers = [
  {
    name: "Basic",
    id: "basic",
    description: "Essential wellness tools for small teams getting started.",
    monthlyPrice: 10,
    annualPrice: 120,
    features: [
      { name: "Mobile app access", included: true },
      { name: "Basic workout library", included: true },
      { name: "Step & activity tracking", included: true },
      { name: "Team challenges", included: true },
      { name: "Basic analytics dashboard", included: true },
      { name: "AI coaching", included: false },
      { name: "Nutrition tracking", included: false },
      { name: "1:1 coaching sessions", included: false },
      { name: "Custom programs", included: false },
      { name: "HRIS integration", included: false },
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Standard",
    id: "standard",
    description: "Complete wellness solution with AI-powered coaching.",
    monthlyPrice: 15,
    annualPrice: 180,
    features: [
      { name: "Mobile app access", included: true },
      { name: "Full workout library", included: true },
      { name: "Step & activity tracking", included: true },
      { name: "Team challenges", included: true },
      { name: "Advanced analytics dashboard", included: true },
      { name: "AI coaching", included: true },
      { name: "Nutrition tracking", included: true },
      { name: "1:1 coaching sessions", included: false },
      { name: "Custom programs", included: false },
      { name: "HRIS integration", included: false },
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Premium",
    id: "premium",
    description: "Full-service wellness with dedicated coaching and custom programs.",
    monthlyPrice: 20,
    annualPrice: 240,
    features: [
      { name: "Mobile app access", included: true },
      { name: "Full workout library", included: true },
      { name: "Step & activity tracking", included: true },
      { name: "Team challenges", included: true },
      { name: "Advanced analytics dashboard", included: true },
      { name: "AI coaching", included: true },
      { name: "Nutrition tracking", included: true },
      { name: "1:1 coaching sessions", included: true },
      { name: "Custom programs", included: true },
      { name: "HRIS integration", included: true },
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const volumeDiscounts = [
  { employees: "1-99", discount: "0%" },
  { employees: "100-249", discount: "5%" },
  { employees: "250-499", discount: "10%" },
  { employees: "500-999", discount: "15%" },
  { employees: "1000+", discount: "20%" },
];

const faqs = [
  {
    question: "What is included in the introductory pricing?",
    answer: "As one of our first corporate customers, you will receive our special introductory rates of $10-$20/employee/month - 40-70% below typical industry rates. This pricing is locked in for the duration of your contract.",
  },
  {
    question: "Is there a minimum contract length?",
    answer: "We require a 12-month minimum commitment for corporate wellness programs. This allows enough time to see meaningful health outcomes and ROI. After the first year, you can cancel with 30 days notice.",
  },
  {
    question: "How quickly can we get started?",
    answer: "Most companies are fully deployed within 2 weeks. This includes technical setup, employee onboarding, and launch coordination. We will assign a dedicated success manager to guide you through the process.",
  },
  {
    question: "Do you offer a pilot program?",
    answer: "Yes! We offer 30-60 day pilot programs for companies wanting to test the platform. Pilots are available for a subset of employees and convert to full contracts based on results.",
  },
  {
    question: "What about HIPAA compliance?",
    answer: "BodyF1RST is fully HIPAA compliant. We sign Business Associate Agreements (BAAs) with all corporate clients and follow strict data privacy and security protocols.",
  },
  {
    question: "Can we customize the program for our industry?",
    answer: "Absolutely! We tailor content libraries, challenges, and coaching for your specific industry - whether that is desk-friendly workouts for office workers, injury prevention for construction, or shift-based scheduling for manufacturing.",
  },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="min-h-screen">
      <SectionBackground variant="default" className="py-24 pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Simple, <span className="text-gradient">Transparent</span> Pricing
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/60">
              Introductory rates for our first corporate customers - 40-70% below industry average.
              No hidden fees, no surprises.
            </p>
          </div>

          <div className="mt-12 flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isAnnual ? "text-white" : "text-white/50"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isAnnual ? "bg-orange-500" : "bg-white/20"}`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isAnnual ? "translate-x-6" : "translate-x-1"}`} />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? "text-white" : "text-white/50"}`}>
              Annual
              <span className="ml-1.5 inline-flex items-center rounded-full bg-green-500/20 px-2 py-0.5 text-xs font-medium text-green-400">
                Save 20%
              </span>
            </span>
          </div>
        </div>
      </SectionBackground>

      <SectionBackground variant="darker" className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative glass-card p-8 ${tier.popular ? "border-orange-500/50 scale-105" : ""}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-orange-500 to-amber-600 px-4 py-1 text-sm font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
                <p className="mt-2 text-sm text-white/50">{tier.description}</p>

                <div className="mt-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gradient">
                      ${isAnnual ? Math.round(tier.annualPrice / 12) : tier.monthlyPrice}
                    </span>
                    <span className="text-sm text-white/50">/employee/month</span>
                  </div>
                  {isAnnual && (
                    <p className="mt-1 text-sm text-white/40">
                      ${tier.annualPrice}/employee billed annually
                    </p>
                  )}
                </div>

                <ul className="mt-8 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature.name} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-orange-500" />
                      ) : (
                        <X className="h-5 w-5 text-white/20" />
                      )}
                      <span className={`text-sm ${feature.included ? "text-white/80" : "text-white/30"}`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`mt-8 w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-all ${tier.popular ? "btn-premium" : "bg-white/10 text-white hover:bg-white/20"}`}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionBackground>

      <SectionBackground variant="default" className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="glass-card p-8">
            <h2 className="text-center text-2xl font-bold text-white">Volume Discounts</h2>
            <p className="mt-2 text-center text-sm text-white/60">
              Larger teams get better rates. Discounts applied automatically.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-5">
              {volumeDiscounts.map((tier) => (
                <div key={tier.employees} className="rounded-lg bg-white/5 border border-white/10 p-4 text-center">
                  <div className="text-lg font-bold text-gradient">{tier.discount}</div>
                  <div className="mt-1 text-xs text-white/50">{tier.employees} employees</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionBackground>

      <SectionBackground variant="darker" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              How We <span className="text-gradient">Compare</span>
            </h2>
            <p className="mt-4 text-lg text-white/60">
              Industry-leading value at a fraction of the cost
            </p>
          </motion.div>

          <CompetitorComparison />
        </div>
      </SectionBackground>

      <SectionBackground variant="default" className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-white mb-12">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="glass-card p-6">
                <h3 className="flex items-center gap-2 text-base font-semibold text-white">
                  <HelpCircle className="h-5 w-5 text-orange-500" />
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm text-white/60 pl-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionBackground>

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
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to Get Started?</h2>
            <p className="mt-2 text-orange-100">
              Get a personalized quote for your organization in 24 hours.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-white text-orange-600 font-bold text-lg shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all hover:-translate-y-0.5 flex items-center gap-2 group"
              >
                Request a Quote
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
