"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { UserCheck, ArrowRight, X, AlertTriangle } from "lucide-react";
import { SectionBackground } from "@/components/layered-background";

export default function AcceptableUsePolicyPage() {
  const lastUpdated = "January 5, 2026";

  return (
    <div className="min-h-screen">
      <SectionBackground variant="default" className="py-24 pt-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <UserCheck className="w-8 h-8 text-orange-500" />
              <h1 className="text-4xl font-bold text-white">Acceptable Use Policy</h1>
            </div>
            <p className="text-white/60">Last Updated: {lastUpdated}</p>
          </motion.div>
        </div>
      </SectionBackground>

      <SectionBackground variant="darker" className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-invert prose-orange max-w-none">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-white/70 leading-relaxed">
                This Acceptable Use Policy (&ldquo;AUP&rdquo;) governs your use of BodyF1RST&apos;s corporate wellness platform, mobile applications, and related services (the &ldquo;Services&rdquo;). This AUP is incorporated into and forms part of our Terms of Service.
              </p>
              <p className="text-white/70 leading-relaxed mt-4">
                By using the Services, you agree to comply with this AUP. Violation of this policy may result in suspension or termination of your access.
              </p>
            </section>

            {/* Prohibited Activities */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">2. Prohibited Activities</h2>
              <p className="text-white/70 leading-relaxed mb-6">
                You agree not to use the Services to engage in any of the following prohibited activities:
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-4">2.1 Illegal Activities</h3>
              <ul className="space-y-2">
                {[
                  "Violate any applicable laws, regulations, or legal obligations",
                  "Engage in fraud, money laundering, or other financial crimes",
                  "Infringe on intellectual property rights of others",
                  "Distribute or promote illegal substances or activities",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-4">2.2 Harmful Content</h3>
              <ul className="space-y-2">
                {[
                  "Post or transmit content that is defamatory, obscene, or offensive",
                  "Harass, threaten, or intimidate other users",
                  "Share content promoting violence, hate speech, or discrimination",
                  "Post misinformation about health or medical topics",
                  "Share content that could endanger physical or mental health",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-4">2.3 Security Violations</h3>
              <ul className="space-y-2">
                {[
                  "Attempt to gain unauthorized access to the Services or other users' accounts",
                  "Probe, scan, or test the vulnerability of our systems",
                  "Bypass or circumvent security measures",
                  "Introduce malware, viruses, or other malicious code",
                  "Conduct denial of service attacks",
                  "Intercept or monitor data without authorization",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-4">2.4 Data Misuse</h3>
              <ul className="space-y-2">
                {[
                  "Collect, harvest, or scrape user data without authorization",
                  "Share other users' personal or health information",
                  "Use data for purposes other than legitimate wellness activities",
                  "Sell, rent, or transfer user data to third parties",
                  "Attempt to re-identify anonymized data",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-4">2.5 Platform Abuse</h3>
              <ul className="space-y-2">
                {[
                  "Create multiple accounts to evade restrictions",
                  "Impersonate other users, employees, or entities",
                  "Manipulate challenges, leaderboards, or reward systems",
                  "Use automated tools, bots, or scripts without authorization",
                  "Interfere with other users' experience",
                  "Spam or send unsolicited communications",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-4">2.6 Commercial Misuse</h3>
              <ul className="space-y-2">
                {[
                  "Use the Services for competitive intelligence",
                  "Resell or redistribute our Services without authorization",
                  "Use the Services to develop competing products",
                  "Advertise or promote third-party products without permission",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Health Data Protection */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">3. Health Data Protection</h2>
              <div className="glass-card p-6 border-orange-500/30">
                <p className="text-white/70 leading-relaxed">
                  Given the sensitive nature of health and wellness data, you must:
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Keep your account credentials secure and confidential",
                    "Only share your own health data, not others'",
                    "Report any unauthorized access to your account immediately",
                    "Not use others' health data for any purpose",
                    "Not attempt to access other users' health information",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70">
                      <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Enforcement */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">4. Enforcement</h2>
              <p className="text-white/70 leading-relaxed">
                We may take the following actions in response to violations of this AUP:
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Issue warnings for minor or first-time violations",
                  "Temporarily suspend access to the Services",
                  "Permanently terminate your account",
                  "Remove content that violates this policy",
                  "Report illegal activity to law enforcement",
                  "Pursue legal remedies for damages",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <span className="text-orange-500">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-white/70 leading-relaxed mt-4">
                We reserve the right to take action without prior notice in cases of serious violations.
              </p>
            </section>

            {/* Reporting */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">5. Reporting Violations</h2>
              <p className="text-white/70 leading-relaxed">
                If you become aware of any violations of this AUP, please report them to us:
              </p>
              <div className="mt-4 glass-card p-6">
                <p className="text-white font-semibold">Report Abuse</p>
                <p className="text-white/70">Email: abuse@bodyf1rst.com</p>
                <p className="text-white/70 mt-4 text-sm">
                  Please include as much detail as possible, including usernames, dates, and descriptions of the violation.
                </p>
              </div>
            </section>

            {/* Changes */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">6. Changes to This Policy</h2>
              <p className="text-white/70 leading-relaxed">
                We may update this Acceptable Use Policy from time to time. We will notify you of material changes via email or in-app notification. Your continued use of the Services after changes become effective constitutes acceptance of the updated policy.
              </p>
            </section>
          </div>

          {/* Related Links */}
          <div className="mt-16 glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Related Policies</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/terms" className="text-orange-400 hover:text-orange-300 flex items-center gap-1">
                Terms of Service <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/privacy" className="text-orange-400 hover:text-orange-300 flex items-center gap-1">
                Privacy Policy <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/security" className="text-orange-400 hover:text-orange-300 flex items-center gap-1">
                Security Practices <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </SectionBackground>
    </div>
  );
}
