"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Heart,
  TrendingUp,
  Users,
  Smartphone,
  Award,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Building2,
  Factory,
  HardHat,
} from "lucide-react";

const stats = [
  { label: "Avg. Cost Savings", value: "40-70%", description: "vs industry rates" },
  { label: "Employee Engagement", value: "85%+", description: "active users" },
  { label: "Healthcare ROI", value: "$1.50", description: "return per $1 invested" },
  { label: "Implementation", value: "2 weeks", description: "to full deployment" },
];

const features = [
  {
    icon: Smartphone,
    title: "AI-Powered Mobile App",
    description: "Personalized workouts, nutrition tracking, and AI coaching available 24/7 on any device.",
  },
  {
    icon: Users,
    title: "Team Challenges",
    description: "Gamified wellness challenges that build camaraderie and boost engagement across departments.",
  },
  {
    icon: TrendingUp,
    title: "Analytics Dashboard",
    description: "Real-time insights into program adoption, engagement metrics, and health outcomes for HR.",
  },
  {
    icon: Heart,
    title: "Holistic Wellness",
    description: "Complete wellness covering fitness, nutrition, mental health, and stress management.",
  },
  {
    icon: Award,
    title: "Certified Coaches",
    description: "Access to certified fitness and nutrition coaches for personalized guidance.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Simple per-employee pricing with no hidden fees. Cancel anytime after the first year.",
  },
];

const industries = [
  {
    icon: Building2,
    name: "Entertainment & Media",
    description: "Desk ergonomics, creative burnout prevention, and flexible scheduling for content creators.",
    companies: ["CatFace", "YouTube Studios", "Media Agencies"],
  },
  {
    icon: Factory,
    name: "Manufacturing & Engineering",
    description: "Safety-integrated wellness, hearing protection awareness, and precision work stress management.",
    companies: ["ETS-Lindgren", "Tech Manufacturing", "R&D Labs"],
  },
  {
    icon: HardHat,
    name: "Construction",
    description: "Injury prevention, jobsite-friendly workouts, and mental health support for field workers.",
    companies: ["Joeris General Contractors", "Commercial Builders"],
  },
];

const competitors = [
  { name: "Virgin Pulse", basic: "$72", standard: "$240", premium: "$600" },
  { name: "Wellable", basic: "$48", standard: "$180", premium: "$480" },
  { name: "Limeade", basic: "$60", standard: "$200", premium: "$500" },
  { name: "Industry Avg", basic: "$60", standard: "$225", premium: "$600" },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-orange-200 to-orange-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-4xl py-24 sm:py-32 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Introductory pricing for first customers.{" "}
                <Link href="/pricing" className="font-semibold text-orange-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  See pricing <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Corporate Wellness That{" "}
              <span className="text-orange-600">Actually Works</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Transform your workforce with AI-powered fitness coaching, personalized
              nutrition plans, and measurable health outcomes—at{" "}
              <span className="font-semibold text-orange-600">40-70% below</span> industry
              rates.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg">
                <Link href="/contact" className="flex items-center">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/roi-calculator">Calculate Your ROI</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-orange-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-sm font-medium text-orange-100">{stat.label}</div>
                <div className="text-xs text-orange-200">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Compare and Save
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              See how BodyF1RST stacks up against industry leaders
            </p>
          </div>

          <div className="mt-16 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-6 text-left text-sm font-semibold text-gray-900">Provider</th>
                  <th className="py-4 px-6 text-center text-sm font-semibold text-gray-900">Basic<br/><span className="font-normal text-gray-500">/employee/year</span></th>
                  <th className="py-4 px-6 text-center text-sm font-semibold text-gray-900">Standard<br/><span className="font-normal text-gray-500">/employee/year</span></th>
                  <th className="py-4 px-6 text-center text-sm font-semibold text-gray-900">Premium<br/><span className="font-normal text-gray-500">/employee/year</span></th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((competitor) => (
                  <tr key={competitor.name} className="border-b border-gray-100">
                    <td className="py-4 px-6 text-sm text-gray-700">{competitor.name}</td>
                    <td className="py-4 px-6 text-center text-sm text-gray-500">{competitor.basic}</td>
                    <td className="py-4 px-6 text-center text-sm text-gray-500">{competitor.standard}</td>
                    <td className="py-4 px-6 text-center text-sm text-gray-500">{competitor.premium}</td>
                  </tr>
                ))}
                <tr className="bg-orange-50 border-2 border-orange-200">
                  <td className="py-4 px-6 text-sm font-bold text-orange-700 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                    BodyF1RST
                  </td>
                  <td className="py-4 px-6 text-center text-lg font-bold text-orange-600">$120<br/><span className="text-xs font-normal">($10/mo)</span></td>
                  <td className="py-4 px-6 text-center text-lg font-bold text-orange-600">$180<br/><span className="text-xs font-normal">($15/mo)</span></td>
                  <td className="py-4 px-6 text-center text-lg font-bold text-orange-600">$240<br/><span className="text-xs font-normal">($20/mo)</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              * Introductory pricing for first customers. Volume discounts available for 500+ employees.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything You Need for Employee Wellness
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A complete platform designed for modern workplaces
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-2xl border border-gray-200 p-8 hover:border-orange-200 hover:shadow-lg transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100">
                  <feature.icon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Tailored for Your Industry
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Wellness programs customized for your workforce&apos;s unique needs
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl bg-gray-800 p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-600">
                  <industry.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{industry.name}</h3>
                <p className="mt-2 text-sm text-gray-400">{industry.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {industry.companies.map((company) => (
                    <span
                      key={company}
                      className="inline-flex items-center rounded-full bg-gray-700 px-3 py-1 text-xs text-gray-300"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900">
              <Link href="/industries">View All Industries</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-orange-600">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Transform Your Workplace?
          </h2>
          <p className="mt-4 text-lg text-orange-100">
            Join forward-thinking companies investing in their greatest asset—their people.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              <Link href="/contact">Schedule a Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-orange-700">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-orange-200">
            No commitment required. Get a personalized proposal in 24 hours.
          </p>
        </div>
      </section>
    </div>
  );
}
