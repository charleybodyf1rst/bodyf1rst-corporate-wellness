"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Check, Download } from "lucide-react";
import { SectionBackground } from "@/components/layered-background";

export default function HIPAAPage() {
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
              <ShieldCheck className="w-8 h-8 text-orange-500" />
              <h1 className="text-4xl font-bold text-white">HIPAA Compliance</h1>
            </div>
            <p className="text-white/60 text-lg">
              BodyF1RST is fully HIPAA compliant. We protect your health information with enterprise-grade security and strict privacy controls.
            </p>
          </motion.div>
        </div>
      </SectionBackground>

      <SectionBackground variant="darker" className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Overview */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Our HIPAA Commitment</h2>
            <p className="text-white/70 leading-relaxed">
              The Health Insurance Portability and Accountability Act (HIPAA) sets the standard for protecting sensitive patient health information. As a corporate wellness platform that handles Protected Health Information (PHI), BodyF1RST maintains full HIPAA compliance.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-gradient mb-2">BAA</div>
                <p className="text-white/60 text-sm">Business Associate Agreements with all enterprise clients</p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-gradient mb-2">24hr</div>
                <p className="text-white/60 text-sm">Breach notification within 24 hours of discovery</p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-gradient mb-2">AES-256</div>
                <p className="text-white/60 text-sm">Encryption for all data at rest and in transit</p>
              </div>
            </div>
          </section>

          {/* PHI Handling */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Protected Health Information (PHI)</h2>
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-white mb-4">What PHI We Handle</h3>
              <ul className="space-y-3">
                {[
                  "Fitness and exercise data (workouts, activity levels, performance metrics)",
                  "Nutrition and dietary information (meal logs, calorie intake, macros)",
                  "Health metrics from wearable devices (heart rate, sleep, steps)",
                  "Mental health check-ins and wellness assessments",
                  "Communications with health coaches",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6 mt-6">
              <h3 className="text-lg font-semibold text-white mb-4">How We Protect PHI</h3>
              <ul className="space-y-3">
                {[
                  "All PHI is encrypted using AES-256 encryption at rest",
                  "TLS 1.3 encryption for all data in transit",
                  "Role-based access controls limit who can view PHI",
                  "Comprehensive audit logging of all PHI access",
                  "Automatic session timeouts and multi-factor authentication",
                  "Regular security assessments and penetration testing",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Administrative Safeguards */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">HIPAA Safeguards</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-orange-400 mb-4">Administrative</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>Designated Privacy Officer</li>
                  <li>Designated Security Officer</li>
                  <li>Workforce security training</li>
                  <li>Access management policies</li>
                  <li>Incident response procedures</li>
                  <li>Contingency planning</li>
                </ul>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-orange-400 mb-4">Physical</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>SOC 2 certified data centers</li>
                  <li>Facility access controls</li>
                  <li>Workstation security</li>
                  <li>Device and media controls</li>
                  <li>Environmental safeguards</li>
                  <li>Visitor management</li>
                </ul>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-orange-400 mb-4">Technical</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>Unique user identification</li>
                  <li>Emergency access procedures</li>
                  <li>Automatic logoff</li>
                  <li>Encryption/decryption</li>
                  <li>Audit controls</li>
                  <li>Integrity controls</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Business Associate Agreement */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Business Associate Agreement (BAA)</h2>
            <div className="glass-card p-6 border-orange-500/30">
              <p className="text-white/70 leading-relaxed">
                BodyF1RST executes a Business Associate Agreement (BAA) with all corporate clients who require HIPAA compliance. Our BAA is compliant with 45 CFR 164.504(e) and includes:
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Permitted and required uses of PHI",
                  "Obligations to safeguard PHI",
                  "Breach notification requirements (24-hour notification)",
                  "Subcontractor requirements",
                  "Return or destruction of PHI upon termination",
                  "Compliance with the HIPAA Security Rule",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <Check className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  href="/docs/BodyF1RST-BAA-Template.pdf"
                  className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300"
                >
                  <Download className="w-4 h-4" />
                  Download BAA Template
                </Link>
              </div>
            </div>
          </section>

          {/* Subcontractors */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Subcontractors</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              We require all subcontractors who may access PHI to enter into BAAs with us. Our current subcontractors include:
            </p>
            <div className="glass-card p-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 text-white/60 font-medium">Vendor</th>
                    <th className="text-left py-3 text-white/60 font-medium">Service</th>
                    <th className="text-left py-3 text-white/60 font-medium">Compliance</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { vendor: "Google Cloud Platform", service: "Hosting & Storage", compliance: "HIPAA BAA, SOC 2" },
                    { vendor: "Stripe", service: "Payment Processing", compliance: "HIPAA BAA, PCI-DSS" },
                    { vendor: "SendGrid", service: "Email Communications", compliance: "HIPAA BAA, SOC 2" },
                    { vendor: "OneSignal", service: "Push Notifications", compliance: "SOC 2" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5">
                      <td className="py-3 text-white">{row.vendor}</td>
                      <td className="py-3 text-white/70">{row.service}</td>
                      <td className="py-3 text-green-400">{row.compliance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Breach Notification */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Breach Notification</h2>
            <div className="glass-card p-6 border-red-500/30">
              <p className="text-white/70 leading-relaxed">
                In the unlikely event of a security breach involving PHI, BodyF1RST will:
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Notify affected covered entities within 24 hours of discovery",
                  "Provide a detailed incident report",
                  "Identify affected individuals and the nature of the breach",
                  "Take immediate steps to mitigate harm",
                  "Cooperate with any required notifications to individuals or HHS",
                  "Implement corrective actions to prevent future breaches",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <Check className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Your HIPAA Rights</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              As an individual whose PHI we process, you have the following rights under HIPAA:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Access", description: "Right to access and obtain a copy of your PHI" },
                { title: "Amendment", description: "Right to request corrections to your PHI" },
                { title: "Accounting", description: "Right to an accounting of disclosures of your PHI" },
                { title: "Restriction", description: "Right to request restrictions on certain uses" },
                { title: "Confidential Communications", description: "Right to receive communications through alternative means" },
                { title: "Complaint", description: "Right to file a complaint with HHS if you believe your rights have been violated" },
              ].map((right, i) => (
                <div key={i} className="glass-card p-4">
                  <h4 className="font-semibold text-white mb-2">{right.title}</h4>
                  <p className="text-white/60 text-sm">{right.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Our Privacy Officer</h2>
            <div className="glass-card p-6">
              <p className="text-white font-semibold">BodyF1RST Privacy Officer</p>
              <p className="text-white/70">Email: privacy@bodyf1rst.com</p>
              <p className="text-white/70">Phone: Available upon request</p>
              <p className="text-white/70 mt-4">
                To exercise your HIPAA rights or report a concern, please contact our Privacy Officer.
              </p>
            </div>
          </section>

          {/* Related Links */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Related Resources</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/privacy" className="text-orange-400 hover:text-orange-300 flex items-center gap-1">
                Privacy Policy <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/security" className="text-orange-400 hover:text-orange-300 flex items-center gap-1">
                Security Practices <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/docs/BodyF1RST-BAA-Template.pdf" className="text-orange-400 hover:text-orange-300 flex items-center gap-1">
                Download BAA Template <Download className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </SectionBackground>
    </div>
  );
}
