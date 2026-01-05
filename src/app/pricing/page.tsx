"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Check, X, HelpCircle } from "lucide-react";

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
    question: "What's included in the introductory pricing?",
    answer: "As one of our first corporate customers, you'll receive our special introductory rates of $10-$20/employee/month—40-70% below typical industry rates. This pricing is locked in for the duration of your contract.",
  },
  {
    question: "Is there a minimum contract length?",
    answer: "We require a 12-month minimum commitment for corporate wellness programs. This allows enough time to see meaningful health outcomes and ROI. After the first year, you can cancel with 30 days notice.",
  },
  {
    question: "How quickly can we get started?",
    answer: "Most companies are fully deployed within 2 weeks. This includes technical setup, employee onboarding, and launch coordination. We'll assign a dedicated success manager to guide you through the process.",
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
    answer: "Absolutely! We tailor content libraries, challenges, and coaching for your specific industry—whether that's desk-friendly workouts for office workers, injury prevention for construction, or shift-based scheduling for manufacturing.",
  },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="py-24">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Introductory rates for our first corporate customers—40-70% below industry average.
            No hidden fees, no surprises.
          </p>
        </div>

        {/* Toggle */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <span className={`text-sm font-medium ${!isAnnual ? "text-gray-900" : "text-gray-500"}`}>
            Monthly
          </span>
          <Switch
            checked={isAnnual}
            onCheckedChange={setIsAnnual}
            aria-label="Toggle annual billing"
          />
          <span className={`text-sm font-medium ${isAnnual ? "text-gray-900" : "text-gray-500"}`}>
            Annual
            <span className="ml-1.5 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
              Save 20%
            </span>
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                tier.popular
                  ? "bg-orange-600 text-white ring-2 ring-orange-600"
                  : "bg-white ring-1 ring-gray-200"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-700">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className={`text-lg font-semibold ${tier.popular ? "text-white" : "text-gray-900"}`}>
                {tier.name}
              </h3>
              <p className={`mt-2 text-sm ${tier.popular ? "text-orange-100" : "text-gray-500"}`}>
                {tier.description}
              </p>

              <div className="mt-6">
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-bold ${tier.popular ? "text-white" : "text-gray-900"}`}>
                    ${isAnnual ? Math.round(tier.annualPrice / 12) : tier.monthlyPrice}
                  </span>
                  <span className={`text-sm ${tier.popular ? "text-orange-200" : "text-gray-500"}`}>
                    /employee/month
                  </span>
                </div>
                {isAnnual && (
                  <p className={`mt-1 text-sm ${tier.popular ? "text-orange-200" : "text-gray-500"}`}>
                    ${tier.annualPrice}/employee billed annually
                  </p>
                )}
              </div>

              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature.name} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className={`h-5 w-5 ${tier.popular ? "text-orange-200" : "text-orange-600"}`} />
                    ) : (
                      <X className={`h-5 w-5 ${tier.popular ? "text-orange-300/50" : "text-gray-300"}`} />
                    )}
                    <span
                      className={`text-sm ${
                        feature.included
                          ? tier.popular
                            ? "text-white"
                            : "text-gray-700"
                          : tier.popular
                          ? "text-orange-300/70"
                          : "text-gray-400"
                      }`}
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`mt-8 w-full ${
                  tier.popular
                    ? "bg-white text-orange-600 hover:bg-gray-100"
                    : "bg-orange-600 text-white hover:bg-orange-700"
                }`}
                size="lg"
              >
                <Link href="/contact">{tier.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Volume Discounts */}
      <div className="mx-auto mt-24 max-w-4xl px-6 lg:px-8">
        <div className="rounded-2xl bg-gray-50 p-8">
          <h2 className="text-center text-2xl font-bold text-gray-900">Volume Discounts</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Larger teams get better rates. Discounts applied automatically.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-5">
            {volumeDiscounts.map((tier) => (
              <div key={tier.employees} className="rounded-lg bg-white p-4 text-center shadow-sm">
                <div className="text-lg font-bold text-orange-600">{tier.discount}</div>
                <div className="mt-1 text-xs text-gray-500">{tier.employees} employees</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Comparison */}
      <div className="mx-auto mt-24 max-w-4xl px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-gray-900">How We Compare</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Industry-leading value at a fraction of the cost
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Provider</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Standard Tier</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">vs BodyF1RST</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-6 py-4 text-sm text-gray-700">Virgin Pulse</td>
                <td className="px-6 py-4 text-center text-sm text-gray-500">$240/yr</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-green-600">Save 25%</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-700">Wellable</td>
                <td className="px-6 py-4 text-center text-sm text-gray-500">$180/yr</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-green-600">Same price, more features</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-700">Limeade</td>
                <td className="px-6 py-4 text-center text-sm text-gray-500">$200/yr</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-green-600">Save 10%</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-700">Industry Average</td>
                <td className="px-6 py-4 text-center text-sm text-gray-500">$275/yr</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-green-600">Save 35%</td>
              </tr>
              <tr className="bg-orange-50">
                <td className="px-6 py-4 text-sm font-bold text-orange-700">BodyF1RST Standard</td>
                <td className="px-6 py-4 text-center text-lg font-bold text-orange-600">$180/yr</td>
                <td className="px-6 py-4 text-center text-sm font-semibold text-orange-600">Best Value</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQs */}
      <div className="mx-auto mt-24 max-w-4xl px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>

        <div className="mt-8 divide-y divide-gray-200">
          {faqs.map((faq) => (
            <div key={faq.question} className="py-6">
              <h3 className="flex items-center gap-2 text-base font-semibold text-gray-900">
                <HelpCircle className="h-5 w-5 text-orange-600" />
                {faq.question}
              </h3>
              <p className="mt-2 text-sm text-gray-600 pl-7">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto mt-24 max-w-4xl px-6 text-center lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900">Ready to Get Started?</h2>
        <p className="mt-2 text-gray-600">
          Get a personalized quote for your organization in 24 hours.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg">
            <Link href="/contact">Request a Quote</Link>
          </Button>
          <Button variant="outline" size="lg">
            <Link href="/roi-calculator">Calculate Your ROI</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
