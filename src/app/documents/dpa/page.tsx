"use client";

import { PrintDocument } from "@/components/print-document";

export default function DPAPage() {
  return (
    <PrintDocument
      title="DATA PROCESSING AGREEMENT"
      subtitle="GDPR Article 28 Compliant with Standard Contractual Clauses"
      lastUpdated="January 2026"
    >
      {/* Parties */}
      <section className="mb-8">
        <p className="text-white/70 mb-4">
          <strong className="text-white">Between:</strong>
        </p>
        <p className="text-white/70 mb-2">
          <strong className="text-white">BodyF1RST, Inc.</strong>
          <br />(&ldquo;Processor&rdquo; or &ldquo;Data Importer&rdquo;)
        </p>
        <p className="text-white/70 mb-4">
          <strong className="text-white">And:</strong>
        </p>
        <p className="text-white/70 mb-2">
          <strong className="text-white">[CUSTOMER NAME]</strong>
          <br />(&ldquo;Controller&rdquo; or &ldquo;Data Exporter&rdquo;)
        </p>
        <p className="text-white/70">
          <strong className="text-white">Effective Date:</strong> [DATE]
        </p>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Recitals */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">RECITALS</h2>
        <p className="text-white/70 mb-4">
          This Data Processing Agreement (&ldquo;DPA&rdquo;) forms part of the Master Service
          Agreement (&ldquo;Agreement&rdquo;) between BodyF1RST, Inc. and Customer.
        </p>
        <p className="text-white/70">
          This DPA applies when Personal Data of Data Subjects located in the European Economic Area
          (EEA), United Kingdom (UK), or Switzerland is processed by BodyF1RST as a Processor on
          behalf of Customer as a Controller.
        </p>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 1 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">1. DEFINITIONS</h2>
        <p className="text-white/70 mb-3">
          <strong className="text-white">1.1 &ldquo;GDPR&rdquo;</strong> means Regulation (EU)
          2016/679 (General Data Protection Regulation).
        </p>
        <p className="text-white/70 mb-3">
          <strong className="text-white">1.2 &ldquo;UK GDPR&rdquo;</strong> means the GDPR as
          incorporated into UK law by the Data Protection Act 2018.
        </p>
        <p className="text-white/70 mb-3">
          <strong className="text-white">1.3 &ldquo;Personal Data&rdquo;</strong> means any
          information relating to an identified or identifiable natural person.
        </p>
        <p className="text-white/70 mb-3">
          <strong className="text-white">1.4 &ldquo;Special Category Data&rdquo;</strong> means
          Personal Data revealing racial or ethnic origin, political opinions, religious beliefs,
          trade union membership, genetic data, biometric data, health data, sex life, or sexual
          orientation.
        </p>
        <p className="text-white/70 mb-3">
          <strong className="text-white">1.5 &ldquo;Data Subject&rdquo;</strong> means the
          identified or identifiable natural person to whom Personal Data relates.
        </p>
        <p className="text-white/70 mb-3">
          <strong className="text-white">1.6 &ldquo;Processing&rdquo;</strong> means any operation
          performed on Personal Data, including collection, storage, use, disclosure, or deletion.
        </p>
        <p className="text-white/70 mb-3">
          <strong className="text-white">1.7 &ldquo;Sub-processor&rdquo;</strong> means any third
          party engaged by Processor to process Personal Data.
        </p>
        <p className="text-white/70">
          <strong className="text-white">
            1.8 &ldquo;Standard Contractual Clauses&rdquo; or &ldquo;SCCs&rdquo;
          </strong>{" "}
          means the standard contractual clauses approved by European Commission Decision 2021/914.
        </p>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 2 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">2. SCOPE OF PROCESSING</h2>

        <h3 className="text-xl font-semibold text-white mb-3">2.1 Subject Matter</h3>
        <p className="text-white/70 mb-4">
          Processor processes Personal Data to provide the corporate wellness services described in
          the Agreement.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">2.2 Nature and Purpose</h3>
        <p className="text-white/70 mb-2">The processing includes:</p>
        <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
          <li>Account management and authentication</li>
          <li>Providing personalized wellness content and coaching</li>
          <li>Activity, nutrition, and health data tracking</li>
          <li>Team challenges and social features</li>
          <li>Analytics and reporting</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">2.3 Duration</h3>
        <p className="text-white/70 mb-4">
          Processing continues for the duration of the Agreement plus the data retention period
          specified in the Privacy Policy.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">2.4 Categories of Data Subjects</h3>
        <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
          <li>Customer&apos;s employees</li>
          <li>Customer&apos;s contractors</li>
          <li>Other individuals authorized to use the Services</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">2.5 Categories of Personal Data</h3>
        <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
          <li>Identification data (name, email, employee ID)</li>
          <li>Account data (username, preferences)</li>
          <li>Health and fitness data (workouts, nutrition, biometrics)</li>
          <li>Device and usage data</li>
          <li>Communications with coaches</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">2.6 Special Category Data</h3>
        <p className="text-white/70 mb-2">
          Health and fitness data constitutes Special Category Data under GDPR Article 9. Processor
          processes such data based on:
        </p>
        <ul className="list-disc list-inside text-white/70 space-y-1">
          <li>Explicit consent of the Data Subject (Article 9(2)(a)); or</li>
          <li>Processing necessary for preventive or occupational medicine (Article 9(2)(h))</li>
        </ul>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 3 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">3. PROCESSOR OBLIGATIONS</h2>

        <h3 className="text-xl font-semibold text-white mb-3">3.1 Lawful Processing</h3>
        <p className="text-white/70 mb-2">Processor shall process Personal Data only:</p>
        <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
          <li>On documented instructions from Controller</li>
          <li>As required by applicable law</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">3.2 Confidentiality</h3>
        <p className="text-white/70 mb-4">
          Processor shall ensure that persons authorized to process Personal Data are bound by
          confidentiality obligations.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">3.3 Security</h3>
        <p className="text-white/70 mb-2">
          Processor shall implement appropriate technical and organizational measures as described
          in Annex II, including:
        </p>
        <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
          <li>Pseudonymization and encryption</li>
          <li>Ongoing confidentiality, integrity, availability, and resilience</li>
          <li>Ability to restore availability and access in a timely manner</li>
          <li>Regular testing and evaluation of security measures</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">3.4 Sub-processors</h3>
        <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
          <li>
            Processor shall not engage Sub-processors without Controller&apos;s prior authorization
          </li>
          <li>Controller authorizes the Sub-processors listed in Annex III</li>
          <li>
            Processor shall notify Controller of changes to Sub-processors with at least 30
            days&apos; notice
          </li>
          <li>
            Processor shall impose data protection obligations on Sub-processors equivalent to this
            DPA
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">3.5 Data Subject Rights</h3>
        <p className="text-white/70 mb-2">
          Processor shall assist Controller in responding to Data Subject requests including:
        </p>
        <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
          <li>Right of access (Article 15)</li>
          <li>Right to rectification (Article 16)</li>
          <li>Right to erasure (Article 17)</li>
          <li>Right to restriction (Article 18)</li>
          <li>Right to data portability (Article 20)</li>
          <li>Right to object (Article 21)</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">
          3.6 Security and Breach Notification
        </h3>
        <p className="text-white/70 mb-2">Processor shall:</p>
        <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
          <li>
            Notify Controller without undue delay after becoming aware of a Personal Data Breach
          </li>
          <li>Provide sufficient information for Controller to meet notification obligations</li>
          <li>Cooperate with Controller&apos;s investigation and remediation</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">
          3.7 Data Protection Impact Assessments
        </h3>
        <p className="text-white/70 mb-4">
          Processor shall provide reasonable assistance for DPIAs when required.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">3.8 Audit Rights</h3>
        <p className="text-white/70 mb-2">Processor shall:</p>
        <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
          <li>Make available information necessary to demonstrate compliance</li>
          <li>
            Allow for and contribute to audits, including inspections, by Controller or an auditor
          </li>
          <li>Provide SOC 2 Type II reports as evidence of compliance</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">3.9 Return or Deletion</h3>
        <p className="text-white/70 mb-2">Upon termination, Processor shall:</p>
        <ul className="list-disc list-inside text-white/70 space-y-1">
          <li>Return or delete Personal Data as directed by Controller</li>
          <li>Delete existing copies unless legally required to retain</li>
          <li>Provide certification of deletion upon request</li>
        </ul>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 4 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">4. CONTROLLER OBLIGATIONS</h2>

        <h3 className="text-xl font-semibold text-white mb-3">4.1 Instructions</h3>
        <p className="text-white/70 mb-4">
          Controller shall provide lawful and complete instructions for Processing.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">4.2 Legal Basis</h3>
        <p className="text-white/70 mb-4">
          Controller is responsible for ensuring a valid legal basis for Processing.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">4.3 Data Subject Consent</h3>
        <p className="text-white/70 mb-4">
          For Special Category Data, Controller shall ensure valid explicit consent is obtained.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">4.4 Accuracy</h3>
        <p className="text-white/70">
          Controller shall ensure Personal Data provided to Processor is accurate and up to date.
        </p>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 5 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">5. INTERNATIONAL TRANSFERS</h2>

        <h3 className="text-xl font-semibold text-white mb-3">5.1 Transfer Mechanism</h3>
        <p className="text-white/70 mb-4">
          Personal Data may be transferred from the EEA/UK to the United States. Such transfers are
          governed by the Standard Contractual Clauses (Module 2: Controller to Processor)
          incorporated as Annex I.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">5.2 UK Transfers</h3>
        <p className="text-white/70 mb-4">
          For transfers from the UK, the International Data Transfer Addendum to the EU SCCs is
          incorporated.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">5.3 Additional Safeguards</h3>
        <p className="text-white/70 mb-2">Processor implements additional safeguards including:</p>
        <ul className="list-disc list-inside text-white/70 space-y-1">
          <li>End-to-end encryption</li>
          <li>Strict access controls</li>
          <li>Data minimization practices</li>
          <li>Regular security assessments</li>
        </ul>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 6 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">6. GENERAL PROVISIONS</h2>

        <h3 className="text-xl font-semibold text-white mb-3">6.1 Governing Law</h3>
        <p className="text-white/70 mb-4">
          This DPA is governed by the laws of [Controller&apos;s jurisdiction for EEA matters / UK
          for UK matters].
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">6.2 Conflict</h3>
        <p className="text-white/70 mb-4">
          In case of conflict between this DPA and the Agreement, this DPA prevails for data
          protection matters.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">6.3 Amendments</h3>
        <p className="text-white/70 mb-4">
          Amendments must be in writing and signed by both parties.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">6.4 Liability</h3>
        <p className="text-white/70">
          Liability is governed by the Agreement, subject to GDPR Article 82.
        </p>
      </section>

      <hr className="border-white/10 my-8 page-break" />

      {/* Annex I */}
      <section className="mb-8 avoid-break">
        <h2 className="text-2xl font-bold text-white mb-4">ANNEX I - STANDARD CONTRACTUAL CLAUSES</h2>
        <p className="text-white/70 mb-4">
          The Standard Contractual Clauses (Module 2: Controller to Processor) approved by European
          Commission Decision 2021/914 are incorporated by reference.
        </p>

        <div className="space-y-3 text-white/70">
          <p>
            <strong className="text-white">Clause 7: Docking Clause</strong> &ndash; Not applicable
          </p>
          <p>
            <strong className="text-white">Clause 9(a): Option 2</strong> &ndash; General written
            authorization for Sub-processors with 30 days&apos; notice
          </p>
          <p>
            <strong className="text-white">Clause 11: Redress</strong> &ndash; Optional clause
            included
          </p>
          <p>
            <strong className="text-white">Clause 17: Option 1</strong> &ndash; Governing Law:
            Ireland
          </p>
          <p>
            <strong className="text-white">Clause 18(b)</strong> &ndash; Forum: Courts of Ireland
          </p>
        </div>

        <h3 className="text-xl font-semibold text-white mt-6 mb-3">Annex I.A: List of Parties</h3>
        <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
          <li>Data Exporter: [Customer Name and details]</li>
          <li>Data Importer: BodyF1RST, Inc., Austin, Texas, USA</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">Annex I.B: Description of Transfer</h3>
        <p className="text-white/70 mb-4">As specified in Section 2 of this DPA</p>

        <h3 className="text-xl font-semibold text-white mb-3">
          Annex I.C: Competent Supervisory Authority
        </h3>
        <p className="text-white/70">
          [Relevant DPA, e.g., Data Protection Commission of Ireland]
        </p>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Annex II */}
      <section className="mb-8 avoid-break">
        <h2 className="text-2xl font-bold text-white mb-4">
          ANNEX II - TECHNICAL AND ORGANIZATIONAL MEASURES
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Encryption</h3>
            <ul className="list-disc list-inside text-white/70 space-y-1">
              <li>AES-256 encryption for data at rest</li>
              <li>TLS 1.3 for data in transit</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Access Control</h3>
            <ul className="list-disc list-inside text-white/70 space-y-1">
              <li>Role-based access control (RBAC)</li>
              <li>Multi-factor authentication</li>
              <li>Quarterly access reviews</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Infrastructure</h3>
            <ul className="list-disc list-inside text-white/70 space-y-1">
              <li>SOC 2 Type II certified data centers (Google Cloud)</li>
              <li>Multi-region deployment</li>
              <li>Automatic failover</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Monitoring</h3>
            <ul className="list-disc list-inside text-white/70 space-y-1">
              <li>24/7 security monitoring</li>
              <li>Intrusion detection systems</li>
              <li>Comprehensive audit logging</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Incident Response</h3>
            <ul className="list-disc list-inside text-white/70 space-y-1">
              <li>Documented incident response procedures</li>
              <li>24-hour breach notification capability</li>
              <li>Regular incident response testing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Data Minimization</h3>
            <ul className="list-disc list-inside text-white/70 space-y-1">
              <li>Collection limited to necessary data</li>
              <li>Retention periods enforced</li>
              <li>Automated data deletion</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Annex III */}
      <section className="mb-8 avoid-break">
        <h2 className="text-2xl font-bold text-white mb-4">ANNEX III - AUTHORIZED SUB-PROCESSORS</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-white/10">
            <thead>
              <tr className="bg-white/5">
                <th className="text-left py-3 px-4 text-white border-b border-white/10">
                  Sub-processor
                </th>
                <th className="text-left py-3 px-4 text-white border-b border-white/10">Location</th>
                <th className="text-left py-3 px-4 text-white border-b border-white/10">Service</th>
                <th className="text-left py-3 px-4 text-white border-b border-white/10">
                  Safeguards
                </th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Google Cloud Platform</td>
                <td className="py-3 px-4">USA</td>
                <td className="py-3 px-4">Hosting, Storage</td>
                <td className="py-3 px-4">SCCs, SOC 2, ISO 27001</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Stripe</td>
                <td className="py-3 px-4">USA</td>
                <td className="py-3 px-4">Payment Processing</td>
                <td className="py-3 px-4">SCCs, PCI-DSS</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">SendGrid (Twilio)</td>
                <td className="py-3 px-4">USA</td>
                <td className="py-3 px-4">Email</td>
                <td className="py-3 px-4">SCCs, SOC 2</td>
              </tr>
              <tr>
                <td className="py-3 px-4">OneSignal</td>
                <td className="py-3 px-4">USA</td>
                <td className="py-3 px-4">Push Notifications</td>
                <td className="py-3 px-4">SCCs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Signatures */}
      <section className="signature-section avoid-break">
        <h2 className="text-2xl font-bold text-white mb-8">SIGNATURES</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-white font-semibold">BodyF1RST, Inc. (Processor)</p>
            <div className="space-y-3">
              <p className="text-white/70">
                Signature:{" "}
                <span className="signature-line inline-block w-48 border-b border-white/30" />
              </p>
              <p className="text-white/70">
                Name:{" "}
                <span className="signature-line inline-block w-48 border-b border-white/30" />
              </p>
              <p className="text-white/70">Title: Data Protection Officer</p>
              <p className="text-white/70">
                Date:{" "}
                <span className="signature-line inline-block w-48 border-b border-white/30" />
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-white font-semibold">[CUSTOMER NAME] (Controller)</p>
            <div className="space-y-3">
              <p className="text-white/70">
                Signature:{" "}
                <span className="signature-line inline-block w-48 border-b border-white/30" />
              </p>
              <p className="text-white/70">
                Name:{" "}
                <span className="signature-line inline-block w-48 border-b border-white/30" />
              </p>
              <p className="text-white/70">
                Title:{" "}
                <span className="signature-line inline-block w-48 border-b border-white/30" />
              </p>
              <p className="text-white/70">
                Date:{" "}
                <span className="signature-line inline-block w-48 border-b border-white/30" />
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-white/10 my-8" />

      <p className="text-white/50 text-sm text-center italic">
        This DPA is compliant with GDPR Article 28. For questions, contact privacy@bodyf1rst.com.
      </p>
    </PrintDocument>
  );
}
