"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";
import { SectionBackground } from "@/components/layered-background";

export default function TermsOfServicePage() {
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
              <FileText className="w-8 h-8 text-orange-500" />
              <h1 className="text-4xl font-bold text-white">Terms of Service</h1>
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
            {/* Important Notice */}
            <div className="glass-card p-6 border-yellow-500/30 mb-12">
              <h3 className="text-lg font-bold text-yellow-400 mb-2">Important Notice</h3>
              <p className="text-white/70 text-sm">
                These Terms include a binding arbitration agreement and class action waiver in Section 14. Please read these terms carefully before using our Services.
              </p>
            </div>

            {/* Acceptance */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-white/70 leading-relaxed">
                By accessing or using BodyF1RST&apos;s corporate wellness platform, mobile applications, and related services (the &ldquo;Services&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, do not use the Services.
              </p>
              <p className="text-white/70 leading-relaxed mt-4">
                These Terms constitute a legally binding agreement between you and BodyF1RST, Inc., a Delaware corporation (&ldquo;BodyF1RST,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
              </p>
            </section>

            {/* Eligibility */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">2. Eligibility</h2>
              <p className="text-white/70 leading-relaxed">
                You must be at least 16 years old to use the Services. If you are accessing the Services through your employer&apos;s corporate wellness program, your access is also governed by the agreement between BodyF1RST and your employer.
              </p>
            </section>

            {/* Account Registration */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">3. Account Registration</h2>
              <ul className="list-disc list-inside text-white/70 space-y-2">
                <li>You must provide accurate and complete information when creating an account</li>
                <li>You are responsible for maintaining the confidentiality of your login credentials</li>
                <li>You are responsible for all activities that occur under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>We reserve the right to suspend or terminate accounts that violate these Terms</li>
              </ul>
            </section>

            {/* Medical Disclaimer */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">4. Medical Disclaimer</h2>
              <div className="glass-card p-6 border-red-500/30">
                <p className="text-white/70 leading-relaxed">
                  <strong className="text-red-400">IMPORTANT:</strong> The Services are for general wellness and informational purposes only. They are <strong className="text-white">NOT intended as medical advice, diagnosis, or treatment</strong>.
                </p>
                <ul className="list-disc list-inside text-white/70 mt-4 space-y-2">
                  <li>Consult a physician before starting any exercise or nutrition program</li>
                  <li>Stop exercising immediately if you experience pain, dizziness, or discomfort</li>
                  <li>AI coaching and recommendations are not substitutes for professional medical advice</li>
                  <li>We do not provide emergency services - call 911 for medical emergencies</li>
                </ul>
              </div>
            </section>

            {/* Use of Services */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">5. Permitted Use</h2>
              <p className="text-white/70 leading-relaxed">
                You may use the Services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc list-inside text-white/70 mt-4 space-y-2">
                <li>Use the Services for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to any part of the Services</li>
                <li>Interfere with or disrupt the Services or servers</li>
                <li>Upload malicious code or content</li>
                <li>Impersonate any person or entity</li>
                <li>Collect or harvest user data without authorization</li>
                <li>Use the Services to compete with BodyF1RST</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property</h2>
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">6.1 Our Content</h3>
              <p className="text-white/70 leading-relaxed">
                The Services and all content, features, and functionality (including software, text, images, graphics, videos, and design) are owned by BodyF1RST or our licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">6.2 Your Content</h3>
              <p className="text-white/70 leading-relaxed">
                You retain ownership of content you submit to the Services. By submitting content, you grant BodyF1RST a non-exclusive, worldwide, royalty-free license to use, copy, modify, and display that content in connection with providing the Services.
              </p>
            </section>

            {/* Subscription and Fees */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">7. Subscription and Fees</h2>
              <p className="text-white/70 leading-relaxed">
                If you access the Services through your employer&apos;s corporate wellness program, your employer is responsible for subscription fees. If you subscribe individually:
              </p>
              <ul className="list-disc list-inside text-white/70 mt-4 space-y-2">
                <li>Fees are charged according to your selected plan</li>
                <li>Subscriptions renew automatically unless cancelled</li>
                <li>Cancel before renewal to avoid charges</li>
                <li>No refunds for partial months</li>
                <li>We may change prices with 30 days&apos; notice</li>
              </ul>
            </section>

            {/* Privacy */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">8. Privacy</h2>
              <p className="text-white/70 leading-relaxed">
                Your privacy is important to us. Our collection and use of personal information is governed by our{" "}
                <Link href="/privacy" className="text-orange-400 hover:text-orange-300">
                  Privacy Policy
                </Link>
                , which is incorporated into these Terms by reference.
              </p>
            </section>

            {/* Disclaimers */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">9. Disclaimers</h2>
              <p className="text-white/70 leading-relaxed uppercase">
                THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="text-white/70 leading-relaxed mt-4">
                We do not warrant that the Services will be uninterrupted, error-free, or secure. Results from using the Services may vary and are not guaranteed.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">10. Limitation of Liability</h2>
              <p className="text-white/70 leading-relaxed uppercase">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, BODYF1RST SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM YOUR USE OF THE SERVICES.
              </p>
              <p className="text-white/70 leading-relaxed mt-4 uppercase">
                OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE GREATER OF (A) $100 OR (B) THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.
              </p>
            </section>

            {/* Indemnification */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">11. Indemnification</h2>
              <p className="text-white/70 leading-relaxed">
                You agree to indemnify and hold harmless BodyF1RST, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorneys&apos; fees) arising from:
              </p>
              <ul className="list-disc list-inside text-white/70 mt-4 space-y-2">
                <li>Your use of the Services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Content you submit to the Services</li>
              </ul>
            </section>

            {/* Term and Termination */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">12. Term and Termination</h2>
              <p className="text-white/70 leading-relaxed">
                These Terms remain in effect until terminated. We may suspend or terminate your access to the Services at any time for any reason, including violation of these Terms. Upon termination:
              </p>
              <ul className="list-disc list-inside text-white/70 mt-4 space-y-2">
                <li>Your right to use the Services immediately ceases</li>
                <li>You must delete any downloaded content</li>
                <li>Sections 6, 9, 10, 11, 14, and 15 survive termination</li>
              </ul>
            </section>

            {/* Changes */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">13. Changes to Terms</h2>
              <p className="text-white/70 leading-relaxed">
                We may modify these Terms at any time. We will notify you of material changes via email or in-app notification at least 30 days before the changes take effect. Your continued use of the Services after changes become effective constitutes acceptance of the modified Terms.
              </p>
            </section>

            {/* Arbitration */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">14. Dispute Resolution and Arbitration</h2>
              <div className="glass-card p-6 border-yellow-500/30">
                <h3 className="text-lg font-bold text-yellow-400 mb-4">Binding Arbitration Agreement</h3>
                <p className="text-white/70 leading-relaxed">
                  You and BodyF1RST agree to resolve any disputes through binding arbitration rather than in court, except for claims that may be brought in small claims court.
                </p>

                <h4 className="text-white font-semibold mt-4 mb-2">Arbitration Rules</h4>
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li>Arbitration will be conducted by the American Arbitration Association (AAA)</li>
                  <li>Arbitration will take place in Austin, Texas or via video conference</li>
                  <li>The arbitrator&apos;s decision will be final and binding</li>
                </ul>

                <h4 className="text-white font-semibold mt-4 mb-2">Class Action Waiver</h4>
                <p className="text-white/70 leading-relaxed">
                  <strong className="text-white">You and BodyF1RST agree that any arbitration will be conducted on an individual basis only, not as a class action or other representative proceeding.</strong> You waive any right to participate in a class action lawsuit or class-wide arbitration.
                </p>

                <h4 className="text-white font-semibold mt-4 mb-2">Opt-Out</h4>
                <p className="text-white/70 leading-relaxed">
                  You may opt out of this arbitration agreement by sending written notice to legal@bodyf1rst.com within 30 days of first accepting these Terms. Your notice must include your name, address, and a clear statement that you wish to opt out.
                </p>
              </div>
            </section>

            {/* General */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">15. General Provisions</h2>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">15.1 Governing Law</h3>
              <p className="text-white/70 leading-relaxed">
                These Terms are governed by the laws of the State of Texas, without regard to conflict of law principles.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">15.2 Entire Agreement</h3>
              <p className="text-white/70 leading-relaxed">
                These Terms, together with our Privacy Policy and any other agreements expressly incorporated by reference, constitute the entire agreement between you and BodyF1RST regarding the Services.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">15.3 Severability</h3>
              <p className="text-white/70 leading-relaxed">
                If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">15.4 Waiver</h3>
              <p className="text-white/70 leading-relaxed">
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">15.5 Assignment</h3>
              <p className="text-white/70 leading-relaxed">
                You may not assign or transfer these Terms without our prior written consent. We may assign our rights and obligations without restriction.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">16. Contact Information</h2>
              <p className="text-white/70 leading-relaxed">
                For questions about these Terms:
              </p>
              <div className="mt-4 glass-card p-6">
                <p className="text-white font-semibold">BodyF1RST, Inc.</p>
                <p className="text-white/70">Attn: Legal Department</p>
                <p className="text-white/70">Email: legal@bodyf1rst.com</p>
                <p className="text-white/70">Address: Austin, Texas, USA</p>
              </div>
            </section>
          </div>

          {/* Related Links */}
          <div className="mt-16 glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Related Policies</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/privacy" className="text-orange-400 hover:text-orange-300 flex items-center gap-1">
                Privacy Policy <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/legal/aup" className="text-orange-400 hover:text-orange-300 flex items-center gap-1">
                Acceptable Use Policy <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/hipaa" className="text-orange-400 hover:text-orange-300 flex items-center gap-1">
                HIPAA Compliance <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </SectionBackground>
    </div>
  );
}
