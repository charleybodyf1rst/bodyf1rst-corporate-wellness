"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";
import { SectionBackground } from "@/components/layered-background";

export default function PrivacyPolicyPage() {
  const lastUpdated = "January 5, 2026";
  const effectiveDate = "January 5, 2026";

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
              <Shield className="w-8 h-8 text-orange-500" />
              <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
            </div>
            <p className="text-white/60">
              Last Updated: {lastUpdated} | Effective Date: {effectiveDate}
            </p>
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
                BodyF1RST, Inc. (&ldquo;BodyF1RST,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our corporate wellness platform, mobile applications, and related services (collectively, the &ldquo;Services&rdquo;).
              </p>
              <p className="text-white/70 leading-relaxed mt-4">
                This policy applies to users in the United States, European Economic Area (EEA), United Kingdom (UK), Canada, and other jurisdictions where we operate. We comply with applicable data protection laws including:
              </p>
              <ul className="list-disc list-inside text-white/70 mt-4 space-y-2">
                <li>HIPAA (Health Insurance Portability and Accountability Act) - United States</li>
                <li>CCPA/CPRA (California Consumer Privacy Act / California Privacy Rights Act)</li>
                <li>GDPR (General Data Protection Regulation) - European Union</li>
                <li>UK GDPR - United Kingdom</li>
                <li>PIPEDA (Personal Information Protection and Electronic Documents Act) - Canada</li>
              </ul>
            </section>

            {/* Information We Collect */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.1 Information You Provide</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2">
                <li><strong className="text-white">Account Information:</strong> Name, email address, employer, job title</li>
                <li><strong className="text-white">Profile Information:</strong> Age, gender, height, weight, fitness level</li>
                <li><strong className="text-white">Health Information:</strong> Workout logs, nutrition data, sleep patterns, mental health check-ins</li>
                <li><strong className="text-white">Device Information:</strong> Data from connected wearables and fitness devices</li>
                <li><strong className="text-white">Communication:</strong> Messages with coaches, support requests, feedback</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.2 Information Collected Automatically</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2">
                <li>Device identifiers and operating system information</li>
                <li>IP address and general location (city/region level)</li>
                <li>App usage patterns and feature interactions</li>
                <li>Performance data and error logs</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.3 Special Category Data (Health Data)</h3>
              <p className="text-white/70 leading-relaxed">
                Health and fitness data is considered &ldquo;special category data&rdquo; under GDPR and &ldquo;Protected Health Information&rdquo; under HIPAA. We process this data only with your explicit consent and in accordance with applicable health privacy laws.
              </p>
            </section>

            {/* How We Use Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside text-white/70 space-y-2">
                <li>Provide and personalize our wellness Services</li>
                <li>Power AI coaching recommendations and workout suggestions</li>
                <li>Track progress and generate wellness insights</li>
                <li>Enable team challenges and social features</li>
                <li>Communicate with you about your account and Services</li>
                <li>Provide aggregated, anonymized analytics to your employer</li>
                <li>Improve our Services through research and development</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            {/* Legal Basis for Processing (GDPR) */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">4. Legal Basis for Processing (GDPR)</h2>
              <p className="text-white/70 leading-relaxed">
                For users in the EEA and UK, we process personal data under the following legal bases:
              </p>
              <ul className="list-disc list-inside text-white/70 mt-4 space-y-2">
                <li><strong className="text-white">Consent:</strong> For health data and optional features</li>
                <li><strong className="text-white">Contract:</strong> To provide Services under your employer&apos;s agreement</li>
                <li><strong className="text-white">Legitimate Interests:</strong> For security, fraud prevention, and service improvement</li>
                <li><strong className="text-white">Legal Obligation:</strong> To comply with applicable laws</li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">5. How We Share Your Information</h2>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.1 With Your Employer</h3>
              <p className="text-white/70 leading-relaxed">
                We share <strong className="text-white">aggregated, anonymized data only</strong> with your employer. Individual health data is never shared. Employers receive:
              </p>
              <ul className="list-disc list-inside text-white/70 mt-2 space-y-2">
                <li>Overall program participation rates</li>
                <li>Aggregate engagement metrics</li>
                <li>Anonymous wellness trends</li>
                <li>ROI and outcomes data (anonymized)</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.2 Service Providers</h3>
              <p className="text-white/70 leading-relaxed">
                We work with trusted service providers who process data on our behalf:
              </p>
              <ul className="list-disc list-inside text-white/70 mt-2 space-y-2">
                <li>Google Cloud Platform (hosting, storage)</li>
                <li>Stripe (payment processing)</li>
                <li>SendGrid (email communications)</li>
                <li>OneSignal (push notifications)</li>
              </ul>
              <p className="text-white/70 mt-2">
                All service providers are bound by data processing agreements and maintain appropriate security certifications.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.3 Legal Requirements</h3>
              <p className="text-white/70 leading-relaxed">
                We may disclose information when required by law, court order, or to protect our rights and safety.
              </p>
            </section>

            {/* Data Retention */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
              <ul className="list-disc list-inside text-white/70 space-y-2">
                <li><strong className="text-white">Active accounts:</strong> Data retained while your account is active</li>
                <li><strong className="text-white">Post-termination:</strong> Data deleted within 90 days of account closure</li>
                <li><strong className="text-white">Legal holds:</strong> Data may be retained longer if required by law</li>
                <li><strong className="text-white">Anonymized data:</strong> May be retained indefinitely for research</li>
              </ul>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights</h2>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">7.1 All Users</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Delete your account and data</li>
                <li>Export your data in a portable format</li>
                <li>Withdraw consent for optional processing</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">7.2 GDPR Rights (EEA/UK)</h3>
              <p className="text-white/70">
                Under Articles 15-22 of the GDPR, you have the right to:
              </p>
              <ul className="list-disc list-inside text-white/70 mt-2 space-y-2">
                <li>Access (Art. 15)</li>
                <li>Rectification (Art. 16)</li>
                <li>Erasure / &ldquo;Right to be Forgotten&rdquo; (Art. 17)</li>
                <li>Restriction of Processing (Art. 18)</li>
                <li>Data Portability (Art. 20)</li>
                <li>Object to Processing (Art. 21)</li>
                <li>Not be subject to automated decision-making (Art. 22)</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">7.3 CCPA/CPRA Rights (California)</h3>
              <p className="text-white/70">
                California residents have the right to:
              </p>
              <ul className="list-disc list-inside text-white/70 mt-2 space-y-2">
                <li>Know what personal information is collected</li>
                <li>Delete personal information</li>
                <li>Opt-out of sale/sharing of personal information</li>
                <li>Non-discrimination for exercising rights</li>
                <li>Correct inaccurate personal information</li>
                <li>Limit use of sensitive personal information</li>
              </ul>
              <p className="text-white/70 mt-4">
                <strong className="text-white">We do not sell personal information.</strong> To exercise your rights, contact us at privacy@bodyf1rst.com.
              </p>
            </section>

            {/* International Transfers */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">8. International Data Transfers</h2>
              <p className="text-white/70 leading-relaxed">
                Data may be transferred to and processed in the United States. For transfers from the EEA/UK, we rely on:
              </p>
              <ul className="list-disc list-inside text-white/70 mt-4 space-y-2">
                <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                <li>UK International Data Transfer Agreement (IDTA)</li>
                <li>Binding Corporate Rules where applicable</li>
              </ul>
            </section>

            {/* Security */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">9. Data Security</h2>
              <p className="text-white/70 leading-relaxed">
                We implement industry-standard security measures including:
              </p>
              <ul className="list-disc list-inside text-white/70 mt-4 space-y-2">
                <li>AES-256 encryption for data at rest</li>
                <li>TLS 1.3 encryption for data in transit</li>
                <li>SOC 2 Type II certified infrastructure</li>
                <li>Regular security audits and penetration testing</li>
                <li>Access controls and audit logging</li>
                <li>Employee security training</li>
              </ul>
            </section>

            {/* Children */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">10. Children&apos;s Privacy</h2>
              <p className="text-white/70 leading-relaxed">
                Our Services are not intended for children under 16. We do not knowingly collect personal information from children. If we learn we have collected information from a child, we will delete it promptly.
              </p>
            </section>

            {/* Changes */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">11. Changes to This Policy</h2>
              <p className="text-white/70 leading-relaxed">
                We may update this Privacy Policy periodically. We will notify you of material changes via email or in-app notification at least 30 days before the changes take effect.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">12. Contact Us</h2>
              <p className="text-white/70 leading-relaxed">
                For privacy inquiries or to exercise your rights:
              </p>
              <div className="mt-4 glass-card p-6">
                <p className="text-white font-semibold">BodyF1RST, Inc.</p>
                <p className="text-white/70">Attn: Privacy Officer</p>
                <p className="text-white/70">Email: privacy@bodyf1rst.com</p>
                <p className="text-white/70">Address: Austin, Texas, USA</p>
              </div>
              <p className="text-white/70 mt-4">
                <strong className="text-white">EU/UK Representative:</strong> For GDPR inquiries, contact our EU representative at eu-privacy@bodyf1rst.com.
              </p>
              <p className="text-white/70 mt-4">
                <strong className="text-white">Data Protection Authority:</strong> You have the right to lodge a complaint with your local data protection authority.
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
              <Link href="/hipaa" className="text-orange-400 hover:text-orange-300 flex items-center gap-1">
                HIPAA Compliance <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/security" className="text-orange-400 hover:text-orange-300 flex items-center gap-1">
                Security Practices <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/legal/cookies" className="text-orange-400 hover:text-orange-300 flex items-center gap-1">
                Cookie Policy <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </SectionBackground>
    </div>
  );
}
