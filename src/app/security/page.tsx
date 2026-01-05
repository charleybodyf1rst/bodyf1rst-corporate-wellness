"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Lock, ArrowRight, Check, Shield, Server, Eye, Key, AlertTriangle, Download } from "lucide-react";
import { SectionBackground } from "@/components/layered-background";

export default function SecurityPage() {
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
              <Lock className="w-8 h-8 text-orange-500" />
              <h1 className="text-4xl font-bold text-white">Security Practices</h1>
            </div>
            <p className="text-white/60 text-lg">
              Enterprise-grade security protecting your organization&apos;s most sensitive health and wellness data.
            </p>
          </motion.div>
        </div>
      </SectionBackground>

      <SectionBackground variant="darker" className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Certifications */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Certifications & Compliance</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: "SOC 2 Type II", description: "Independently audited security controls", icon: Shield },
                { title: "HIPAA", description: "Healthcare data protection", icon: Lock },
                { title: "GDPR", description: "EU data privacy compliance", icon: Eye },
                { title: "CCPA", description: "California privacy rights", icon: Key },
              ].map((cert, i) => (
                <div key={i} className="glass-card p-6 text-center">
                  <cert.icon className="w-10 h-10 text-orange-500 mx-auto mb-3" />
                  <h3 className="font-bold text-white">{cert.title}</h3>
                  <p className="text-white/60 text-sm mt-1">{cert.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Infrastructure */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Infrastructure Security</h2>
            <div className="glass-card p-6">
              <div className="flex items-start gap-4 mb-6">
                <Server className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Google Cloud Platform</h3>
                  <p className="text-white/70 mt-2">
                    Our infrastructure runs on Google Cloud Platform, which maintains the highest levels of security certifications including SOC 1/2/3, ISO 27001, FedRAMP, and HIPAA compliance.
                  </p>
                </div>
              </div>

              <ul className="space-y-3 mt-6">
                {[
                  "Multi-region deployment with automatic failover",
                  "99.9% uptime SLA with real-time monitoring",
                  "DDoS protection and Web Application Firewall (WAF)",
                  "Virtual private cloud with network segmentation",
                  "Immutable infrastructure with automated deployments",
                  "24/7 infrastructure monitoring and alerting",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Encryption */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Data Encryption</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Data at Rest</h3>
                <ul className="space-y-3">
                  {[
                    "AES-256 encryption for all stored data",
                    "Customer-managed encryption keys (CMEK) available",
                    "Encrypted database backups",
                    "Secure key management via Cloud KMS",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Data in Transit</h3>
                <ul className="space-y-3">
                  {[
                    "TLS 1.3 for all communications",
                    "Perfect forward secrecy (PFS)",
                    "HSTS (HTTP Strict Transport Security)",
                    "Certificate pinning in mobile apps",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Access Control */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Access Control</h2>
            <div className="glass-card p-6">
              <ul className="space-y-3">
                {[
                  "Role-based access control (RBAC) for all systems",
                  "Multi-factor authentication (MFA) required for all employees",
                  "Single sign-on (SSO) integration for enterprise clients",
                  "Just-in-time access provisioning",
                  "Quarterly access reviews and certification",
                  "Privileged access management (PAM) for sensitive systems",
                  "Automatic session timeouts",
                  "Comprehensive audit logging of all access",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Application Security */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Application Security</h2>
            <div className="glass-card p-6">
              <ul className="space-y-3">
                {[
                  "Secure software development lifecycle (SSDLC)",
                  "Regular code reviews and static analysis (SAST)",
                  "Dynamic application security testing (DAST)",
                  "Dependency scanning for vulnerable packages",
                  "Container image scanning",
                  "Bug bounty program (coming soon)",
                  "Annual penetration testing by third parties",
                  "OWASP Top 10 vulnerability protection",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Incident Response */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Incident Response</h2>
            <div className="glass-card p-6 border-yellow-500/30">
              <div className="flex items-start gap-4 mb-6">
                <AlertTriangle className="w-8 h-8 text-yellow-500 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white">24/7 Security Operations</h3>
                  <p className="text-white/70 mt-2">
                    Our security team monitors for threats around the clock with automated alerting and rapid response capabilities.
                  </p>
                </div>
              </div>

              <h4 className="font-semibold text-white mb-3">Incident Response Process</h4>
              <ol className="space-y-3">
                {[
                  "Detection: Automated monitoring and alerting systems",
                  "Triage: Immediate assessment and severity classification",
                  "Containment: Isolate affected systems to prevent spread",
                  "Eradication: Remove threat and patch vulnerabilities",
                  "Recovery: Restore services and verify integrity",
                  "Post-incident: Root cause analysis and lessons learned",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <span className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Employee Security */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Employee Security</h2>
            <div className="glass-card p-6">
              <ul className="space-y-3">
                {[
                  "Background checks for all employees",
                  "Security awareness training at onboarding and annually",
                  "Phishing simulation exercises",
                  "Clean desk and screen-lock policies",
                  "Endpoint protection on all devices",
                  "Mobile device management (MDM)",
                  "Secure remote work policies",
                  "Confidentiality agreements",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Vendor Security */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Vendor Security</h2>
            <div className="glass-card p-6">
              <p className="text-white/70 mb-6">
                All vendors with access to customer data undergo security assessment:
              </p>
              <ul className="space-y-3">
                {[
                  "Security questionnaire and due diligence review",
                  "SOC 2 or equivalent certification required",
                  "Data processing agreements in place",
                  "Annual re-assessment of critical vendors",
                  "Immediate notification of vendor security incidents",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Report a Vulnerability */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Report a Vulnerability</h2>
            <div className="glass-card p-6 border-orange-500/30">
              <p className="text-white/70 mb-4">
                We value the security research community. If you discover a security vulnerability, please report it responsibly:
              </p>
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-white font-semibold">security@bodyf1rst.com</p>
                <p className="text-white/60 text-sm mt-2">
                  Please include a detailed description of the vulnerability and steps to reproduce. We will respond within 48 hours.
                </p>
              </div>
            </div>
          </section>

          {/* Downloads */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Security Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/docs/BodyF1RST-Security-Whitepaper.pdf" className="glass-card p-6 hover:border-orange-500/50 transition-colors group">
                <div className="flex items-center gap-4">
                  <Download className="w-8 h-8 text-orange-500" />
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors">Security Whitepaper</h3>
                    <p className="text-white/60 text-sm">Detailed security architecture overview</p>
                  </div>
                </div>
              </Link>
              <Link href="/docs/BodyF1RST-SOC2-Report.pdf" className="glass-card p-6 hover:border-orange-500/50 transition-colors group">
                <div className="flex items-center gap-4">
                  <Download className="w-8 h-8 text-orange-500" />
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors">SOC 2 Report</h3>
                    <p className="text-white/60 text-sm">Available under NDA</p>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* Related Links */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Related Resources</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/hipaa" className="text-orange-400 hover:text-orange-300 flex items-center gap-1">
                HIPAA Compliance <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/privacy" className="text-orange-400 hover:text-orange-300 flex items-center gap-1">
                Privacy Policy <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/legal/aup" className="text-orange-400 hover:text-orange-300 flex items-center gap-1">
                Acceptable Use Policy <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </SectionBackground>
    </div>
  );
}
