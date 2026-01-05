"use client";

import { PrintDocument } from "@/components/print-document";

export default function BAAPage() {
  return (
    <PrintDocument
      title="BUSINESS ASSOCIATE AGREEMENT"
      subtitle="HIPAA Compliance for Protected Health Information"
      lastUpdated="January 2026"
    >
      {/* Parties */}
      <section className="mb-8">
        <p className="text-white/70 mb-4">
          <strong className="text-white">Between:</strong>
        </p>
        <p className="text-white/70 mb-2">
          <strong className="text-white">BodyF1RST, Inc.</strong>
          <br />(&ldquo;Business Associate&rdquo;)
        </p>
        <p className="text-white/70 mb-4">
          <strong className="text-white">And:</strong>
        </p>
        <p className="text-white/70 mb-2">
          <strong className="text-white">[COVERED ENTITY NAME]</strong>
          <br />(&ldquo;Covered Entity&rdquo;)
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
          WHEREAS, Business Associate provides corporate wellness services that may involve the
          creation, receipt, maintenance, or transmission of Protected Health Information (PHI) on
          behalf of Covered Entity;
        </p>
        <p className="text-white/70 mb-4">
          WHEREAS, Covered Entity and Business Associate desire to comply with the requirements of
          the Health Insurance Portability and Accountability Act of 1996 (HIPAA), as amended by the
          Health Information Technology for Economic and Clinical Health Act (HITECH);
        </p>
        <p className="text-white/70">NOW, THEREFORE, the parties agree as follows:</p>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 1 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">1. DEFINITIONS</h2>
        <p className="text-white/70 mb-4">
          Terms used in this Agreement have the same meaning as those terms in 45 C.F.R. Parts 160,
          162, and 164.
        </p>
        <p className="text-white/70 mb-3">
          <strong className="text-white">
            1.1 &ldquo;Protected Health Information&rdquo; or &ldquo;PHI&rdquo;
          </strong>{" "}
          means individually identifiable health information as defined in 45 C.F.R. &sect; 160.103.
        </p>
        <p className="text-white/70 mb-3">
          <strong className="text-white">
            1.2 &ldquo;Electronic Protected Health Information&rdquo; or &ldquo;ePHI&rdquo;
          </strong>{" "}
          means PHI transmitted or maintained in electronic media.
        </p>
        <p className="text-white/70 mb-3">
          <strong className="text-white">1.3 &ldquo;Security Incident&rdquo;</strong> means the
          attempted or successful unauthorized access, use, disclosure, modification, or destruction
          of information or interference with system operations.
        </p>
        <p className="text-white/70">
          <strong className="text-white">1.4 &ldquo;Breach&rdquo;</strong> means the acquisition,
          access, use, or disclosure of PHI in a manner not permitted under the Privacy Rule which
          compromises the security or privacy of the PHI as defined in 45 C.F.R. &sect; 164.402.
        </p>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 2 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">2. PERMITTED USES AND DISCLOSURES</h2>

        <h3 className="text-xl font-semibold text-white mb-3">2.1 Service Performance</h3>
        <p className="text-white/70 mb-4">
          Business Associate may use or disclose PHI only as necessary to perform the services
          specified in the Master Service Agreement.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">2.2 Management and Administration</h3>
        <p className="text-white/70 mb-2">
          Business Associate may use PHI for its proper management and administration, and may
          disclose PHI for such purposes if:
        </p>
        <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
          <li>The disclosure is required by law; or</li>
          <li>
            Business Associate obtains reasonable assurances from the recipient that the PHI will be
            held confidentially
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">2.3 Data Aggregation</h3>
        <p className="text-white/70 mb-4">
          Business Associate may use PHI to provide Data Aggregation services relating to the health
          care operations of Covered Entity, provided such data is de-identified in accordance with
          45 C.F.R. &sect; 164.514.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">2.4 De-Identification</h3>
        <p className="text-white/70">
          Business Associate may de-identify PHI in accordance with 45 C.F.R. &sect; 164.514.
        </p>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 3 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">3. OBLIGATIONS OF BUSINESS ASSOCIATE</h2>

        <h3 className="text-xl font-semibold text-white mb-3">3.1 Limit Uses and Disclosures</h3>
        <p className="text-white/70 mb-4">
          Business Associate shall not use or disclose PHI other than as permitted or required by
          this Agreement or as required by law.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">3.2 Safeguards</h3>
        <p className="text-white/70 mb-4">
          Business Associate shall implement administrative, physical, and technical safeguards that
          reasonably and appropriately protect the confidentiality, integrity, and availability of
          ePHI.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">3.3 Minimum Necessary</h3>
        <p className="text-white/70 mb-4">
          Business Associate shall limit PHI use, disclosure, or request to the minimum necessary to
          accomplish the intended purpose.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">3.4 Reporting</h3>
        <p className="text-white/70 mb-2">Business Associate shall report to Covered Entity:</p>
        <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
          <li>
            Any use or disclosure of PHI not provided for by this Agreement of which it becomes
            aware
          </li>
          <li>Any Security Incident of which it becomes aware</li>
          <li>Any Breach of Unsecured PHI</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">3.5 Breach Notification Timeline</h3>
        <p className="text-white/70 mb-4">
          Business Associate shall notify Covered Entity of any Breach of Unsecured PHI within{" "}
          <strong className="text-white">twenty-four (24) hours</strong> of discovery.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">3.6 Subcontractors</h3>
        <p className="text-white/70 mb-4">
          Business Associate shall ensure that any subcontractors that create, receive, maintain, or
          transmit PHI on behalf of Business Associate agree to the same restrictions and conditions
          as this Agreement.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">3.7 Access</h3>
        <p className="text-white/70 mb-4">
          Business Associate shall make PHI available to Covered Entity as necessary for Covered
          Entity to respond to individual access requests.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">3.8 Amendment</h3>
        <p className="text-white/70 mb-4">
          Business Associate shall incorporate any amendments to PHI as directed by Covered Entity.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">3.9 Accounting</h3>
        <p className="text-white/70 mb-4">
          Business Associate shall maintain an accounting of disclosures and make such information
          available to Covered Entity.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">3.10 Compliance</h3>
        <p className="text-white/70 mb-4">
          Business Associate shall comply with applicable requirements of the HIPAA Security Rule.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">3.11 HHS Access</h3>
        <p className="text-white/70">
          Business Associate shall make its internal practices, books, and records relating to PHI
          available to the Secretary of HHS for purposes of determining compliance.
        </p>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 4 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">4. SECURITY SAFEGUARDS</h2>

        <h3 className="text-xl font-semibold text-white mb-3">4.1 Administrative Safeguards</h3>
        <p className="text-white/70 mb-2">Business Associate implements:</p>
        <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
          <li>Designated Security Officer and Privacy Officer</li>
          <li>Workforce security training</li>
          <li>Access management policies</li>
          <li>Incident response procedures</li>
          <li>Risk assessments</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">4.2 Physical Safeguards</h3>
        <p className="text-white/70 mb-2">Business Associate implements:</p>
        <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
          <li>Facility access controls via SOC 2 certified data centers</li>
          <li>Workstation security policies</li>
          <li>Device and media controls</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">4.3 Technical Safeguards</h3>
        <p className="text-white/70 mb-2">Business Associate implements:</p>
        <ul className="list-disc list-inside text-white/70 space-y-1">
          <li>AES-256 encryption for data at rest</li>
          <li>TLS 1.3 encryption for data in transit</li>
          <li>Unique user identification</li>
          <li>Automatic logoff</li>
          <li>Audit controls</li>
          <li>Integrity controls</li>
          <li>Multi-factor authentication</li>
        </ul>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 5 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">5. SUBCONTRACTORS</h2>

        <h3 className="text-xl font-semibold text-white mb-3">5.1 Current Subcontractors</h3>
        <p className="text-white/70 mb-4">
          Business Associate currently uses the following subcontractors that may have access to
          PHI:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-white/10">
            <thead>
              <tr className="bg-white/5">
                <th className="text-left py-3 px-4 text-white border-b border-white/10">
                  Subcontractor
                </th>
                <th className="text-left py-3 px-4 text-white border-b border-white/10">Service</th>
                <th className="text-left py-3 px-4 text-white border-b border-white/10">
                  Compliance
                </th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Google Cloud Platform</td>
                <td className="py-3 px-4">Hosting &amp; Storage</td>
                <td className="py-3 px-4">HIPAA BAA executed</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Stripe</td>
                <td className="py-3 px-4">Payment Processing</td>
                <td className="py-3 px-4">HIPAA BAA executed</td>
              </tr>
              <tr>
                <td className="py-3 px-4">SendGrid</td>
                <td className="py-3 px-4">Email Communications</td>
                <td className="py-3 px-4">HIPAA BAA executed</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-white mb-3">5.2 New Subcontractors</h3>
        <p className="text-white/70">
          Business Associate shall notify Covered Entity of any new subcontractors with access to
          PHI and shall ensure appropriate BAAs are in place.
        </p>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 6 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">6. OBLIGATIONS OF COVERED ENTITY</h2>

        <h3 className="text-xl font-semibold text-white mb-3">6.1 Notices</h3>
        <p className="text-white/70 mb-2">
          Covered Entity shall notify Business Associate of:
        </p>
        <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
          <li>
            Any limitations in its Notice of Privacy Practices that affect Business Associate&apos;s
            use of PHI
          </li>
          <li>Any restrictions on use or disclosure agreed to with individuals</li>
          <li>Any changes to or revocation of authorization to use or disclose PHI</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">6.2 Permissions</h3>
        <p className="text-white/70">
          Covered Entity shall not request Business Associate to use or disclose PHI in any manner
          that would violate HIPAA.
        </p>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 7 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">7. TERM AND TERMINATION</h2>

        <h3 className="text-xl font-semibold text-white mb-3">7.1 Term</h3>
        <p className="text-white/70 mb-4">
          This Agreement is effective upon the Effective Date and continues until the Master Service
          Agreement terminates or this Agreement is terminated as provided herein.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">7.2 Termination for Cause</h3>
        <p className="text-white/70 mb-4">
          Either party may terminate this Agreement if the other party has materially breached and
          fails to cure within thirty (30) days of notice.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">7.3 Return or Destruction of PHI</h3>
        <p className="text-white/70 mb-2">Upon termination, Business Associate shall:</p>
        <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
          <li>Return or destroy all PHI received from or created for Covered Entity</li>
          <li>Retain no copies of PHI except as necessary for legal or regulatory purposes</li>
          <li>If return or destruction is not feasible, extend protections of this Agreement</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">7.4 Survival</h3>
        <p className="text-white/70">
          Obligations regarding PHI shall survive termination.
        </p>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 8 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">8. GENERAL PROVISIONS</h2>

        <h3 className="text-xl font-semibold text-white mb-3">8.1 Amendment</h3>
        <p className="text-white/70 mb-4">
          This Agreement may be amended only in writing signed by both parties. The parties shall
          amend this Agreement as necessary to comply with changes in HIPAA regulations.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">8.2 Interpretation</h3>
        <p className="text-white/70 mb-4">
          This Agreement shall be interpreted in a manner consistent with HIPAA regulations.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">8.3 No Third-Party Beneficiaries</h3>
        <p className="text-white/70 mb-4">
          Nothing in this Agreement creates rights in any third parties.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">8.4 Governing Law</h3>
        <p className="text-white/70">
          This Agreement is governed by federal law (HIPAA) and, to the extent not preempted, the
          laws of the State of Texas.
        </p>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Signatures */}
      <section className="signature-section avoid-break">
        <h2 className="text-2xl font-bold text-white mb-8">SIGNATURES</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-white font-semibold">BodyF1RST, Inc. (Business Associate)</p>
            <div className="space-y-3">
              <p className="text-white/70">
                Signature:{" "}
                <span className="signature-line inline-block w-48 border-b border-white/30" />
              </p>
              <p className="text-white/70">
                Name:{" "}
                <span className="signature-line inline-block w-48 border-b border-white/30" />
              </p>
              <p className="text-white/70">Title: Privacy Officer</p>
              <p className="text-white/70">
                Date:{" "}
                <span className="signature-line inline-block w-48 border-b border-white/30" />
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-white font-semibold">[COVERED ENTITY NAME]</p>
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
        This Business Associate Agreement template is compliant with 45 CFR 164.504(e). Please
        contact privacy@bodyf1rst.com for execution.
      </p>
    </PrintDocument>
  );
}
