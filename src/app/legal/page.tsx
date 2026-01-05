"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Scale,
  Shield,
  FileText,
  Lock,
  Cookie,
  UserCheck,
  Download,
  ArrowRight,
  Building2,
  Globe,
} from "lucide-react";
import { SectionBackground } from "@/components/layered-background";

const legalDocuments = [
  {
    title: "Privacy Policy",
    description: "How we collect, use, and protect your personal information",
    icon: Shield,
    href: "/privacy",
    type: "website",
  },
  {
    title: "Terms of Service",
    description: "Terms governing your use of our Services",
    icon: FileText,
    href: "/terms",
    type: "website",
  },
  {
    title: "Acceptable Use Policy",
    description: "Rules for appropriate use of our platform",
    icon: UserCheck,
    href: "/legal/aup",
    type: "website",
  },
  {
    title: "Cookie Policy",
    description: "Information about cookies and tracking technologies",
    icon: Cookie,
    href: "/legal/cookies",
    type: "website",
  },
  {
    title: "HIPAA Compliance",
    description: "Our healthcare data protection practices",
    icon: Lock,
    href: "/hipaa",
    type: "website",
  },
  {
    title: "Security Practices",
    description: "Enterprise security measures and certifications",
    icon: Lock,
    href: "/security",
    type: "website",
  },
];

const contractTemplates = [
  {
    title: "Master Service Agreement (MSA)",
    description: "Standard contract for corporate wellness services",
    icon: Building2,
    href: "/docs/BodyF1RST-MSA-Template.pdf",
    type: "pdf",
  },
  {
    title: "Business Associate Agreement (BAA)",
    description: "HIPAA compliance agreement for healthcare data",
    icon: Shield,
    href: "/docs/BodyF1RST-BAA-Template.pdf",
    type: "pdf",
  },
  {
    title: "Data Processing Agreement (DPA)",
    description: "GDPR-compliant data processing terms",
    icon: Globe,
    href: "/docs/BodyF1RST-DPA-Template.pdf",
    type: "pdf",
  },
  {
    title: "Service Level Agreement (SLA)",
    description: "Uptime guarantees and support commitments",
    icon: Scale,
    href: "/docs/BodyF1RST-SLA-Template.pdf",
    type: "pdf",
  },
];

export default function LegalHubPage() {
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
              <Scale className="w-8 h-8 text-orange-500" />
              <h1 className="text-4xl font-bold text-white">Legal Center</h1>
            </div>
            <p className="text-white/60 text-lg">
              Access all of BodyF1RST&apos;s legal documents, policies, and contract templates.
            </p>
          </motion.div>
        </div>
      </SectionBackground>

      <SectionBackground variant="darker" className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Policies */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Policies & Agreements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {legalDocuments.map((doc, index) => (
                <motion.div
                  key={doc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={doc.href}>
                    <div className="glass-card p-6 h-full hover:border-orange-500/50 transition-colors group cursor-pointer">
                      <div className="flex items-start gap-4">
                        <doc.icon className="w-8 h-8 text-orange-500 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors">
                            {doc.title}
                          </h3>
                          <p className="text-white/60 text-sm mt-1">{doc.description}</p>
                          <div className="mt-3 flex items-center text-orange-400 text-sm">
                            View Policy <ArrowRight className="w-4 h-4 ml-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Contract Templates */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Enterprise Contract Templates</h2>
            <p className="text-white/60 mb-6">
              Download contract templates for enterprise deployments. Contact our sales team to initiate the contracting process.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {contractTemplates.map((doc, index) => (
                <motion.div
                  key={doc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={doc.href}>
                    <div className="glass-card p-6 h-full hover:border-orange-500/50 transition-colors group cursor-pointer">
                      <div className="flex items-start gap-4">
                        <doc.icon className="w-8 h-8 text-orange-500 flex-shrink-0" />
                        <div className="flex-1">
                          <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors">
                            {doc.title}
                          </h3>
                          <p className="text-white/60 text-sm mt-1">{doc.description}</p>
                          <div className="mt-3 flex items-center text-orange-400 text-sm">
                            <Download className="w-4 h-4 mr-1" />
                            Download PDF
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Compliance */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Compliance Overview</h2>
            <div className="glass-card p-6">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-gradient mb-2">HIPAA</div>
                  <p className="text-white/60 text-sm">Healthcare data protection</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gradient mb-2">SOC 2</div>
                  <p className="text-white/60 text-sm">Type II certified</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gradient mb-2">GDPR</div>
                  <p className="text-white/60 text-sm">EU privacy compliance</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gradient mb-2">CCPA</div>
                  <p className="text-white/60 text-sm">California privacy rights</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Legal Inquiries</h2>
            <div className="glass-card p-6">
              <p className="text-white/70 mb-4">
                For legal questions, contract negotiations, or compliance inquiries:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">General Legal</h4>
                  <p className="text-orange-400">legal@bodyf1rst.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Privacy & Data Protection</h4>
                  <p className="text-orange-400">privacy@bodyf1rst.com</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </SectionBackground>
    </div>
  );
}
