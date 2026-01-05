"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  Shield,
  Scale,
  Clock,
  Heart,
  Lock,
  Cookie,
  AlertTriangle,
  ExternalLink,
  Printer,
  Download,
  ArrowRight,
} from "lucide-react";
import { SectionBackground } from "@/components/layered-background";

const pdfDownloads = [
  {
    title: "Master Service Agreement (MSA)",
    description: "Complete enterprise contract template",
    icon: FileText,
    pdfUrl: "/docs/BodyF1RST-MSA-Template.pdf",
    badge: "Contract",
    badgeColor: "bg-blue-500/20 text-blue-400",
  },
  {
    title: "Business Associate Agreement (BAA)",
    description: "HIPAA-compliant PHI handling agreement",
    icon: Heart,
    pdfUrl: "/docs/BodyF1RST-BAA-Template.pdf",
    badge: "HIPAA",
    badgeColor: "bg-red-500/20 text-red-400",
  },
  {
    title: "Data Processing Agreement (DPA)",
    description: "GDPR Article 28 compliant with SCCs",
    icon: Shield,
    pdfUrl: "/docs/BodyF1RST-DPA-Template.pdf",
    badge: "GDPR",
    badgeColor: "bg-purple-500/20 text-purple-400",
  },
  {
    title: "Service Level Agreement (SLA)",
    description: "Uptime guarantees and support tiers",
    icon: Clock,
    pdfUrl: "/docs/BodyF1RST-SLA-Template.pdf",
    badge: "Service",
    badgeColor: "bg-green-500/20 text-green-400",
  },
];

const contractDocuments = [
  {
    title: "Master Service Agreement (MSA)",
    description:
      "Enterprise contract covering services, pricing, terms, and conditions for corporate wellness programs.",
    icon: FileText,
    href: "/documents/msa",
    badge: "Contract",
    badgeColor: "bg-blue-500/20 text-blue-400",
    sections: [
      "Service tiers and pricing",
      "Volume discounts",
      "Payment terms",
      "IP and liability",
    ],
  },
  {
    title: "Business Associate Agreement (BAA)",
    description:
      "HIPAA-compliant agreement for handling Protected Health Information (PHI) in healthcare contexts.",
    icon: Heart,
    href: "/documents/baa",
    badge: "HIPAA",
    badgeColor: "bg-red-500/20 text-red-400",
    sections: [
      "PHI handling requirements",
      "24-hour breach notification",
      "Security safeguards",
      "Subcontractor compliance",
    ],
  },
  {
    title: "Data Processing Agreement (DPA)",
    description:
      "GDPR Article 28 compliant agreement with Standard Contractual Clauses for EU/UK data transfers.",
    icon: Shield,
    href: "/documents/dpa",
    badge: "GDPR",
    badgeColor: "bg-purple-500/20 text-purple-400",
    sections: [
      "Standard Contractual Clauses",
      "Data subject rights",
      "Sub-processor management",
      "International transfers",
    ],
  },
  {
    title: "Service Level Agreement (SLA)",
    description:
      "Uptime guarantees, response times, service credits, and support commitments by tier.",
    icon: Clock,
    href: "/documents/sla",
    badge: "Service",
    badgeColor: "bg-green-500/20 text-green-400",
    sections: [
      "99.5%-99.95% uptime SLAs",
      "15min-24hr response times",
      "Service credits up to 100%",
      "24/7 Premium support",
    ],
  },
];

const policyPages = [
  {
    title: "Privacy Policy",
    description: "Multi-jurisdiction privacy practices for US, EU, UK, and California residents.",
    icon: Lock,
    href: "/privacy",
    badge: "Policy",
  },
  {
    title: "Terms of Service",
    description: "User agreement covering account usage, intellectual property, and legal terms.",
    icon: Scale,
    href: "/terms",
    badge: "Policy",
  },
  {
    title: "HIPAA Compliance",
    description: "Overview of our HIPAA compliance program and healthcare data protections.",
    icon: Heart,
    href: "/hipaa",
    badge: "Compliance",
  },
  {
    title: "Security Practices",
    description: "Technical and organizational security measures protecting your data.",
    icon: Shield,
    href: "/security",
    badge: "Security",
  },
  {
    title: "Acceptable Use Policy",
    description: "Rules and guidelines for using the BodyF1RST platform and services.",
    icon: AlertTriangle,
    href: "/legal/aup",
    badge: "Policy",
  },
  {
    title: "Cookie Policy",
    description: "Information about cookies, tracking technologies, and your choices.",
    icon: Cookie,
    href: "/legal/cookies",
    badge: "Policy",
  },
];

export default function DocumentsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <SectionBackground variant="default" className="py-24 pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full text-orange-400 text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              Document Center
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Enterprise Documentation
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              All legal documents, contracts, and compliance materials in one place.
              Print-optimized for professional PDF generation.
            </p>
          </motion.div>
        </div>
      </SectionBackground>

      {/* PDF Downloads Section */}
      <SectionBackground variant="darker" className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <Download className="w-6 h-6 text-orange-400" />
              <h2 className="text-2xl font-bold text-white">Download PDF Templates</h2>
            </div>
            <p className="text-white/60 mb-8">
              Professional contract templates ready for immediate download
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {pdfDownloads.map((doc, index) => (
                <motion.div
                  key={doc.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                >
                  <a
                    href={doc.pdfUrl}
                    download
                    className="block group"
                  >
                    <div className="glass-card p-5 h-full hover:border-orange-500/30 transition-all duration-300 text-center">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 inline-block mb-3">
                        <doc.icon className="w-8 h-8 text-orange-400" />
                      </div>
                      <span
                        className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${doc.badgeColor} mb-2`}
                      >
                        {doc.badge}
                      </span>
                      <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-orange-400 transition-colors">
                        {doc.title}
                      </h3>
                      <p className="text-white/50 text-xs mb-3">{doc.description}</p>
                      <div className="flex items-center justify-center gap-2 text-orange-400 text-sm font-medium">
                        <Download className="w-4 h-4" />
                        Download PDF
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionBackground>

      {/* Contract Documents Section */}
      <SectionBackground variant="default" className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h2 className="text-2xl font-bold text-white mb-2">View Online Versions</h2>
            <p className="text-white/60 mb-8">
              Print-optimized web versions for review and browser printing
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {contractDocuments.map((doc, index) => (
                <motion.div
                  key={doc.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                >
                  <Link href={doc.href} className="block group">
                    <div className="glass-card p-6 h-full hover:border-orange-500/30 transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20">
                            <doc.icon className="w-6 h-6 text-orange-400" />
                          </div>
                          <div>
                            <span
                              className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${doc.badgeColor}`}
                            >
                              {doc.badge}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-white/40 group-hover:text-orange-400 transition-colors">
                          <Printer className="w-4 h-4" />
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                        {doc.title}
                      </h3>
                      <p className="text-white/60 text-sm mb-4">{doc.description}</p>

                      <ul className="space-y-1">
                        {doc.sections.map((section) => (
                          <li key={section} className="text-white/50 text-xs flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-orange-500" />
                            {section}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionBackground>

      {/* Policy Pages Section */}
      <SectionBackground variant="default" className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-white mb-2">Policies & Compliance</h2>
            <p className="text-white/60 mb-8">
              Legal policies and compliance information available on the website
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {policyPages.map((policy, index) => (
                <motion.div
                  key={policy.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.03 }}
                >
                  <Link href={policy.href} className="block group">
                    <div className="glass-card p-5 hover:border-orange-500/30 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <policy.icon className="w-5 h-5 text-orange-400" />
                        <span className="text-xs font-medium px-2 py-1 bg-white/5 rounded-full text-white/60">
                          {policy.badge}
                        </span>
                      </div>
                      <h3 className="text-white font-medium mb-1 group-hover:text-orange-400 transition-colors">
                        {policy.title}
                      </h3>
                      <p className="text-white/50 text-sm">{policy.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionBackground>

      {/* How to Use Section */}
      <SectionBackground variant="darker" className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">How to Save Documents as PDF</h2>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold">
                      1
                    </span>
                    <div>
                      <p className="text-white font-medium">Open a document</p>
                      <p className="text-white/60 text-sm">
                        Click on any contract template above to view it
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold">
                      2
                    </span>
                    <div>
                      <p className="text-white font-medium">Click Print / Save as PDF</p>
                      <p className="text-white/60 text-sm">
                        Use the button at the top of the document page
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold">
                      3
                    </span>
                    <div>
                      <p className="text-white font-medium">Select &ldquo;Save as PDF&rdquo;</p>
                      <p className="text-white/60 text-sm">
                        In the print dialog, choose PDF as the destination
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="glass-card p-6 bg-white/[0.02]">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Download className="w-5 h-5 text-orange-400" />
                  Document Features
                </h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">&#x2713;</span>
                    <span>Professional letterhead with BodyF1RST branding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">&#x2713;</span>
                    <span>Optimized for A4 and Letter paper sizes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">&#x2713;</span>
                    <span>Proper page breaks for tables and sections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">&#x2713;</span>
                    <span>Signature blocks ready for execution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">&#x2713;</span>
                    <span>Works best in Chrome or Edge browser</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionBackground>

      {/* Contact Section */}
      <SectionBackground variant="default" className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Need a Customized Agreement?</h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-8">
              Our enterprise sales team can prepare customized agreements tailored to your
              organization&apos;s specific requirements and compliance needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-medium rounded-lg hover:from-orange-600 hover:to-amber-700 transition-all shadow-lg shadow-orange-500/20"
              >
                Contact Sales
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:legal@bodyf1rst.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-all"
              >
                legal@bodyf1rst.com
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </SectionBackground>
    </div>
  );
}
