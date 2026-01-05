"use client";

import { PrintDocument } from "@/components/print-document";

export default function MSAPage() {
  return (
    <PrintDocument
      title="MASTER SERVICE AGREEMENT"
      subtitle="Corporate Wellness Platform Services"
      lastUpdated="January 2026"
    >
      {/* Parties */}
      <section className="mb-8">
        <p className="text-white/70 mb-4">
          <strong className="text-white">Between:</strong>
        </p>
        <p className="text-white/70 mb-2">
          <strong className="text-white">BodyF1RST, Inc.</strong>
          <br />A Delaware Corporation
          <br />(&ldquo;Provider&rdquo; or &ldquo;BodyF1RST&rdquo;)
        </p>
        <p className="text-white/70 mb-4">
          <strong className="text-white">And:</strong>
        </p>
        <p className="text-white/70 mb-2">
          <strong className="text-white">[CUSTOMER NAME]</strong>
          <br />[Customer Address]
          <br />(&ldquo;Customer&rdquo; or &ldquo;Client&rdquo;)
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
          WHEREAS, BodyF1RST provides corporate wellness platform services including fitness
          coaching, nutrition tracking, mental health resources, and employee engagement tools; and
        </p>
        <p className="text-white/70 mb-4">
          WHEREAS, Customer desires to engage BodyF1RST to provide such services for Customer&apos;s
          employees;
        </p>
        <p className="text-white/70">
          NOW, THEREFORE, in consideration of the mutual covenants and agreements hereinafter set
          forth, the parties agree as follows:
        </p>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 1 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">1. DEFINITIONS</h2>
        <p className="text-white/70 mb-3">
          <strong className="text-white">1.1 &ldquo;Services&rdquo;</strong> means the corporate
          wellness platform, mobile applications, AI coaching, content library, analytics dashboard,
          and related services as described in the applicable Order Form.
        </p>
        <p className="text-white/70 mb-3">
          <strong className="text-white">1.2 &ldquo;Users&rdquo;</strong> means Customer&apos;s
          employees, contractors, and other individuals authorized by Customer to access the
          Services.
        </p>
        <p className="text-white/70 mb-3">
          <strong className="text-white">1.3 &ldquo;User Data&rdquo;</strong> means all data
          submitted to the Services by or on behalf of Users, including health, fitness, and
          wellness information.
        </p>
        <p className="text-white/70 mb-3">
          <strong className="text-white">1.4 &ldquo;Order Form&rdquo;</strong> means the ordering
          document specifying the Services, pricing, and terms for Customer&apos;s subscription.
        </p>
        <p className="text-white/70">
          <strong className="text-white">1.5 &ldquo;Documentation&rdquo;</strong> means the user
          guides, help materials, and technical documentation provided by BodyF1RST.
        </p>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 2 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">2. SERVICES</h2>

        <h3 className="text-xl font-semibold text-white mb-3">2.1 Provision of Services</h3>
        <p className="text-white/70 mb-6">
          BodyF1RST shall provide Customer with access to the Services as specified in the Order
          Form.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">2.2 Service Tiers</h3>
        <p className="text-white/70 mb-4">The following service tiers are available:</p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-white/10">
            <thead>
              <tr className="bg-white/5">
                <th className="text-left py-3 px-4 text-white border-b border-white/10">Tier</th>
                <th className="text-left py-3 px-4 text-white border-b border-white/10">
                  Price (Per Employee/Month)
                </th>
                <th className="text-left py-3 px-4 text-white border-b border-white/10">Features</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Basic</td>
                <td className="py-3 px-4">$10</td>
                <td className="py-3 px-4">
                  Mobile app, activity tracking, team challenges, basic analytics
                </td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Standard</td>
                <td className="py-3 px-4">$15</td>
                <td className="py-3 px-4">
                  All Basic features plus AI coaching, nutrition tracking, mental health resources,
                  advanced analytics
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4">Premium</td>
                <td className="py-3 px-4">$20</td>
                <td className="py-3 px-4">
                  All Standard features plus 1:1 live coaching, custom programs, API access,
                  dedicated account manager
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-white mb-3">2.3 Volume Discounts</h3>
        <p className="text-white/70 mb-4">The following volume discounts apply:</p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-white/10">
            <thead>
              <tr className="bg-white/5">
                <th className="text-left py-3 px-4 text-white border-b border-white/10">
                  Employee Count
                </th>
                <th className="text-left py-3 px-4 text-white border-b border-white/10">Discount</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">1-99</td>
                <td className="py-3 px-4">0%</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">100-249</td>
                <td className="py-3 px-4">5%</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">250-499</td>
                <td className="py-3 px-4">10%</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">500-999</td>
                <td className="py-3 px-4">15%</td>
              </tr>
              <tr>
                <td className="py-3 px-4">1,000+</td>
                <td className="py-3 px-4">20%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-white mb-3">2.4 Implementation</h3>
        <p className="text-white/70 mb-3">
          BodyF1RST shall provide implementation support including:
        </p>
        <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
          <li>Platform configuration and customization</li>
          <li>SSO/HRIS integration (if applicable)</li>
          <li>Administrator training</li>
          <li>Employee onboarding materials</li>
          <li>Launch coordination</li>
        </ul>
        <p className="text-white/70">
          Standard implementation is completed within 2 weeks of Order Form execution.
        </p>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 3 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">3. CUSTOMER OBLIGATIONS</h2>

        <h3 className="text-xl font-semibold text-white mb-3">3.1 User Access</h3>
        <p className="text-white/70 mb-2">Customer shall:</p>
        <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
          <li>Provide accurate employee information for account provisioning</li>
          <li>Ensure Users comply with the Terms of Service and Acceptable Use Policy</li>
          <li>Promptly notify BodyF1RST of any unauthorized access</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">3.2 Use Restrictions</h3>
        <p className="text-white/70 mb-2">Customer shall not:</p>
        <ul className="list-disc list-inside text-white/70 space-y-1">
          <li>Sublicense or resell the Services</li>
          <li>Use the Services for competitive analysis</li>
          <li>Attempt to reverse engineer the Services</li>
          <li>Share credentials between Users</li>
        </ul>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 4 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">4. FEES AND PAYMENT</h2>

        <h3 className="text-xl font-semibold text-white mb-3">4.1 Fees</h3>
        <p className="text-white/70 mb-4">
          Customer shall pay the fees specified in the Order Form.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">4.2 Payment Terms</h3>
        <p className="text-white/70 mb-2">Unless otherwise specified:</p>
        <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
          <li>Annual subscriptions are invoiced annually in advance</li>
          <li>Monthly subscriptions are invoiced monthly in advance</li>
          <li>Payment is due within thirty (30) days of invoice date</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">4.3 Taxes</h3>
        <p className="text-white/70 mb-4">
          Fees do not include applicable taxes. Customer is responsible for all taxes except
          BodyF1RST&apos;s income taxes.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">4.4 Late Payment</h3>
        <p className="text-white/70">
          Overdue amounts accrue interest at 1.5% per month or the maximum legal rate, whichever is
          less.
        </p>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 5 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">5. TERM AND TERMINATION</h2>

        <h3 className="text-xl font-semibold text-white mb-3">5.1 Initial Term</h3>
        <p className="text-white/70 mb-4">
          The initial term is twelve (12) months from the Effective Date, unless otherwise specified
          in the Order Form.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">5.2 Renewal</h3>
        <p className="text-white/70 mb-4">
          The Agreement automatically renews for successive one-year periods unless either party
          provides written notice of non-renewal at least thirty (30) days before the renewal date.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">5.3 Termination for Cause</h3>
        <p className="text-white/70 mb-2">
          Either party may terminate this Agreement immediately upon written notice if the other
          party:
        </p>
        <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
          <li>Materially breaches and fails to cure within thirty (30) days of notice</li>
          <li>Becomes insolvent or files for bankruptcy</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">5.4 Effect of Termination</h3>
        <p className="text-white/70 mb-2">Upon termination:</p>
        <ul className="list-disc list-inside text-white/70 space-y-1">
          <li>Customer&apos;s access to the Services shall cease</li>
          <li>BodyF1RST shall delete Customer&apos;s User Data within ninety (90) days</li>
          <li>Customer shall pay all outstanding fees</li>
          <li>Sections 6, 7, 8, and 10 survive termination</li>
        </ul>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 6 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">6. DATA PROTECTION</h2>

        <h3 className="text-xl font-semibold text-white mb-3">6.1 Data Processing</h3>
        <p className="text-white/70 mb-4">
          BodyF1RST shall process User Data only as necessary to provide the Services and in
          accordance with the Privacy Policy.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">6.2 Data Security</h3>
        <p className="text-white/70 mb-2">
          BodyF1RST maintains industry-standard security measures including:
        </p>
        <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
          <li>AES-256 encryption at rest</li>
          <li>TLS 1.3 encryption in transit</li>
          <li>SOC 2 Type II certification</li>
          <li>Regular security assessments</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">6.3 HIPAA</h3>
        <p className="text-white/70 mb-4">
          If Customer is a Covered Entity or Business Associate under HIPAA, the parties shall
          execute a Business Associate Agreement (BAA) prior to processing any PHI.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">6.4 GDPR</h3>
        <p className="text-white/70">
          If User Data includes personal data of EU/UK residents, the parties shall execute a Data
          Processing Agreement (DPA).
        </p>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 7 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">7. CONFIDENTIALITY</h2>

        <h3 className="text-xl font-semibold text-white mb-3">7.1 Confidential Information</h3>
        <p className="text-white/70 mb-4">
          Each party agrees to protect the other&apos;s Confidential Information using at least the
          same degree of care it uses for its own confidential information.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">7.2 Exceptions</h3>
        <p className="text-white/70 mb-2">Confidential Information does not include information that:</p>
        <ul className="list-disc list-inside text-white/70 space-y-1">
          <li>Is or becomes publicly available without breach</li>
          <li>Was rightfully known prior to disclosure</li>
          <li>Is independently developed without use of Confidential Information</li>
          <li>Is required to be disclosed by law</li>
        </ul>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 8 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">8. INTELLECTUAL PROPERTY</h2>

        <h3 className="text-xl font-semibold text-white mb-3">8.1 BodyF1RST IP</h3>
        <p className="text-white/70 mb-4">
          BodyF1RST retains all rights in the Services, including all software, content, and
          documentation. No rights are granted except as expressly set forth herein.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">8.2 Customer Data</h3>
        <p className="text-white/70 mb-4">
          Customer retains all rights in User Data. Customer grants BodyF1RST a license to use User
          Data solely to provide the Services.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">8.3 Aggregated Data</h3>
        <p className="text-white/70">
          BodyF1RST may use anonymized, aggregated data for product improvement, research, and
          benchmarking, provided such data does not identify Customer or any User.
        </p>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 9 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">9. WARRANTIES AND DISCLAIMERS</h2>

        <h3 className="text-xl font-semibold text-white mb-3">9.1 BodyF1RST Warranties</h3>
        <p className="text-white/70 mb-2">BodyF1RST warrants that:</p>
        <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
          <li>The Services will perform materially as described in the Documentation</li>
          <li>The Services will comply with applicable laws</li>
          <li>BodyF1RST has the right to provide the Services</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">9.2 Disclaimer</h3>
        <p className="text-white/70 mb-4 uppercase text-sm">
          EXCEPT AS EXPRESSLY SET FORTH HEREIN, THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo;
          WITHOUT WARRANTIES OF ANY KIND. BODYF1RST DISCLAIMS ALL IMPLIED WARRANTIES INCLUDING
          MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">9.3 Not Medical Advice</h3>
        <p className="text-white/70">
          The Services are for general wellness purposes only and do not constitute medical advice,
          diagnosis, or treatment.
        </p>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 10 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">10. LIMITATION OF LIABILITY</h2>

        <h3 className="text-xl font-semibold text-white mb-3">10.1 Exclusion of Damages</h3>
        <p className="text-white/70 mb-4 uppercase text-sm">
          NEITHER PARTY SHALL BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
          PUNITIVE DAMAGES.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">10.2 Liability Cap</h3>
        <p className="text-white/70 mb-4 uppercase text-sm">
          BODYF1RST&apos;S TOTAL LIABILITY SHALL NOT EXCEED THE FEES PAID BY CUSTOMER IN THE TWELVE
          (12) MONTHS PRECEDING THE CLAIM.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">10.3 Exceptions</h3>
        <p className="text-white/70 mb-2">
          The limitations in this Section do not apply to:
        </p>
        <ul className="list-disc list-inside text-white/70 space-y-1">
          <li>Breaches of confidentiality obligations</li>
          <li>Infringement of intellectual property rights</li>
          <li>Gross negligence or willful misconduct</li>
        </ul>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 11 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">11. INDEMNIFICATION</h2>

        <h3 className="text-xl font-semibold text-white mb-3">11.1 By BodyF1RST</h3>
        <p className="text-white/70 mb-4">
          BodyF1RST shall indemnify Customer against third-party claims alleging that the Services
          infringe intellectual property rights.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">11.2 By Customer</h3>
        <p className="text-white/70 mb-2">
          Customer shall indemnify BodyF1RST against third-party claims arising from:
        </p>
        <ul className="list-disc list-inside text-white/70 space-y-1">
          <li>Customer&apos;s breach of this Agreement</li>
          <li>User Data that violates third-party rights</li>
          <li>Customer&apos;s violation of applicable law</li>
        </ul>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 12 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">12. GENERAL PROVISIONS</h2>

        <h3 className="text-xl font-semibold text-white mb-3">12.1 Governing Law</h3>
        <p className="text-white/70 mb-4">
          This Agreement is governed by the laws of the State of Texas, without regard to conflict
          of law principles.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">12.2 Dispute Resolution</h3>
        <p className="text-white/70 mb-4">
          Disputes shall be resolved through binding arbitration administered by the American
          Arbitration Association in Austin, Texas.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">12.3 Entire Agreement</h3>
        <p className="text-white/70 mb-4">
          This Agreement, including all Order Forms, constitutes the entire agreement between the
          parties.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">12.4 Amendment</h3>
        <p className="text-white/70 mb-4">
          This Agreement may only be amended in writing signed by both parties.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">12.5 Assignment</h3>
        <p className="text-white/70 mb-4">
          Neither party may assign this Agreement without the other&apos;s consent, except in
          connection with a merger or acquisition.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">12.6 Notices</h3>
        <p className="text-white/70 mb-4">
          Notices shall be sent to the addresses specified in the Order Form.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">12.7 Force Majeure</h3>
        <p className="text-white/70">
          Neither party is liable for delays caused by circumstances beyond reasonable control.
        </p>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Signatures */}
      <section className="signature-section avoid-break">
        <h2 className="text-2xl font-bold text-white mb-8">SIGNATURES</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-white font-semibold">BodyF1RST, Inc.</p>
            <div className="space-y-3">
              <p className="text-white/70">
                Signature: <span className="signature-line inline-block w-48 border-b border-white/30" />
              </p>
              <p className="text-white/70">
                Name: <span className="signature-line inline-block w-48 border-b border-white/30" />
              </p>
              <p className="text-white/70">
                Title: <span className="signature-line inline-block w-48 border-b border-white/30" />
              </p>
              <p className="text-white/70">
                Date: <span className="signature-line inline-block w-48 border-b border-white/30" />
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-white font-semibold">[CUSTOMER NAME]</p>
            <div className="space-y-3">
              <p className="text-white/70">
                Signature: <span className="signature-line inline-block w-48 border-b border-white/30" />
              </p>
              <p className="text-white/70">
                Name: <span className="signature-line inline-block w-48 border-b border-white/30" />
              </p>
              <p className="text-white/70">
                Title: <span className="signature-line inline-block w-48 border-b border-white/30" />
              </p>
              <p className="text-white/70">
                Date: <span className="signature-line inline-block w-48 border-b border-white/30" />
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-white/10 my-8 page-break" />

      {/* Order Form */}
      <section className="avoid-break">
        <h2 className="text-2xl font-bold text-white mb-6">ORDER FORM</h2>

        <div className="space-y-4 text-white/70">
          <p>
            <strong className="text-white">Order Form #:</strong> [NUMBER]
          </p>
          <p>
            <strong className="text-white">Customer:</strong> [CUSTOMER NAME]
          </p>
          <p>
            <strong className="text-white">Service Tier:</strong> [ ] Basic &nbsp; [ ] Standard
            &nbsp; [ ] Premium
          </p>
          <p>
            <strong className="text-white">Number of Employees:</strong> [NUMBER]
          </p>
          <p>
            <strong className="text-white">Volume Discount:</strong> [PERCENTAGE]
          </p>
          <p>
            <strong className="text-white">Monthly Fee:</strong> $[AMOUNT]
          </p>
          <p>
            <strong className="text-white">Annual Fee:</strong> $[AMOUNT]
          </p>
          <p>
            <strong className="text-white">Contract Start Date:</strong> [DATE]
          </p>
          <p>
            <strong className="text-white">Contract End Date:</strong> [DATE]
          </p>
          <p>
            <strong className="text-white">Special Terms:</strong> [IF ANY]
          </p>
        </div>
      </section>

      <hr className="border-white/10 my-8" />

      <p className="text-white/50 text-sm text-center italic">
        This document template is for informational purposes. Please contact sales@bodyf1rst.com for
        a customized agreement.
      </p>
    </PrintDocument>
  );
}
