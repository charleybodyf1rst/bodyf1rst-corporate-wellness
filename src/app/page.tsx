"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  TrendingUp,
  Users,
  Smartphone,
  Award,
  DollarSign,
  ArrowRight,
  Building2,
  Factory,
  HardHat,
  Sparkles,
} from "lucide-react";
import { LayeredBackground, SectionBackground } from "@/components/layered-background";
import { CompetitorComparison } from "@/components/competitor-comparison";

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

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section with Layered Background */}
      <LayeredBackground
        variant="hero"
        imageUrl="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070"
        imagePosition="center"
        className="min-h-screen"
      >
        <section className="relative px-6 pt-20 lg:px-8">
          <div className="mx-auto max-w-4xl py-24 sm:py-32 lg:py-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="mb-8 flex justify-center">
                <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-white/70 ring-1 ring-white/20 hover:ring-white/40 transition-all backdrop-blur-sm bg-white/5">
                  <Sparkles className="inline-block w-4 h-4 mr-2 text-orange-400" />
                  Introductory pricing for first customers.{" "}
                  <Link href="/pricing" className="font-semibold text-orange-400 hover:text-orange-300">
                    See pricing <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Corporate Wellness That{" "}
                <span className="text-gradient">Actually Works</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-white/70 max-w-2xl mx-auto">
                Transform your workforce with AI-powered fitness coaching, personalized
                nutrition plans, and measurable health outcomes—at{" "}
                <span className="font-semibold text-orange-400">40-70% below</span> industry
                rates.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-premium flex items-center gap-2 group">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/roi-calculator" className="btn-secondary">
                  Calculate Your ROI
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </LayeredBackground>

      {/* Stats Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-amber-600 py-16">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-sm font-medium text-orange-100">{stat.label}</div>
                <div className="text-xs text-orange-200/70">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison Section */}
      <SectionBackground variant="default" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Compare and <span className="text-gradient">Save</span>
            </h2>
            <p className="mt-4 text-lg text-white/60">
              See how BodyF1RST stacks up against industry leaders—then see what they&apos;re missing
            </p>
          </motion.div>

          <CompetitorComparison />

          <div className="mt-12 text-center">
            <p className="text-sm text-white/40">
              * Introductory pricing for first customers. Volume discounts available for 500+ employees.
            </p>
          </div>
        </div>
      </SectionBackground>

      {/* Features Section */}
      <SectionBackground variant="darker" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything You Need for <span className="text-gradient">Employee Wellness</span>
            </h2>
            <p className="mt-4 text-lg text-white/60">
              A complete platform designed for modern workplaces
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 hover:border-orange-500/30 transition-all group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-shadow">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm text-white/60">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionBackground>

      {/* Industries Section */}
      <LayeredBackground
        variant="section"
        imageUrl="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070"
        imagePosition="right"
        className="py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Tailored for <span className="text-gradient">Your Industry</span>
            </h2>
            <p className="mt-4 text-lg text-white/60">
              Wellness programs customized for your workforce&apos;s unique needs
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 shadow-lg shadow-orange-500/20">
                  <industry.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{industry.name}</h3>
                <p className="mt-2 text-sm text-white/60">{industry.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {industry.companies.map((company) => (
                    <span
                      key={company}
                      className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs text-white/70 border border-white/10"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/industries" className="btn-secondary inline-flex items-center gap-2 group">
              View All Industries
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </LayeredBackground>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-[100px]" />

        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Transform Your Workplace?
            </h2>
            <p className="mt-4 text-lg text-orange-100">
              Join forward-thinking companies investing in their greatest asset—their people.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-white text-orange-600 font-bold text-lg shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all hover:-translate-y-0.5 flex items-center gap-2 group"
              >
                Schedule a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-4 rounded-xl border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-all"
              >
                View Pricing
              </Link>
            </div>
            <p className="mt-6 text-sm text-orange-200">
              No commitment required. Get a personalized proposal in 24 hours.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
