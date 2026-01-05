"use client";

import { PrintDocument } from "@/components/print-document";

export default function SLAPage() {
  return (
    <PrintDocument
      title="SERVICE LEVEL AGREEMENT"
      subtitle="Uptime, Support, and Performance Commitments"
      lastUpdated="January 2026"
    >
      {/* Parties */}
      <section className="mb-8">
        <p className="text-white/70 mb-4">
          <strong className="text-white">Between:</strong>
        </p>
        <p className="text-white/70 mb-2">
          <strong className="text-white">BodyF1RST, Inc.</strong>
          <br />(&ldquo;Provider&rdquo;)
        </p>
        <p className="text-white/70 mb-4">
          <strong className="text-white">And:</strong>
        </p>
        <p className="text-white/70 mb-2">
          <strong className="text-white">[CUSTOMER NAME]</strong>
          <br />(&ldquo;Customer&rdquo;)
        </p>
        <p className="text-white/70">
          <strong className="text-white">Effective Date:</strong> [DATE]
        </p>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 1 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">1. OVERVIEW</h2>
        <p className="text-white/70">
          This Service Level Agreement (&ldquo;SLA&rdquo;) is part of the Master Service Agreement
          between BodyF1RST and Customer. This SLA applies to the corporate wellness platform
          services (&ldquo;Services&rdquo;) provided by BodyF1RST.
        </p>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 2 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">2. SERVICE AVAILABILITY</h2>

        <h3 className="text-xl font-semibold text-white mb-3">2.1 Uptime Commitment</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-white/10">
            <thead>
              <tr className="bg-white/5">
                <th className="text-left py-3 px-4 text-white border-b border-white/10">
                  Service Tier
                </th>
                <th className="text-left py-3 px-4 text-white border-b border-white/10">
                  Monthly Uptime SLA
                </th>
                <th className="text-left py-3 px-4 text-white border-b border-white/10">
                  Annual Uptime
                </th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Basic</td>
                <td className="py-3 px-4">99.5%</td>
                <td className="py-3 px-4">99.5%</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Standard</td>
                <td className="py-3 px-4">99.9%</td>
                <td className="py-3 px-4">99.9%</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Premium</td>
                <td className="py-3 px-4">99.95%</td>
                <td className="py-3 px-4">99.95%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-white mb-3">2.2 Uptime Calculation</h3>
        <p className="text-white/70 mb-4">
          <strong className="text-white">Uptime Percentage</strong> = ((Total Minutes - Downtime
          Minutes) / Total Minutes) &times; 100
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">2.3 Exclusions</h3>
        <p className="text-white/70 mb-2">
          The following are excluded from Downtime calculations:
        </p>
        <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
          <li>Scheduled maintenance (with 48 hours&apos; notice)</li>
          <li>Emergency maintenance (security patches, critical fixes)</li>
          <li>Downtime caused by Customer or third parties</li>
          <li>Force majeure events</li>
          <li>Features in beta or preview</li>
          <li>Issues with Customer&apos;s equipment, network, or integrations</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">2.4 Scheduled Maintenance Windows</h3>
        <ul className="list-disc list-inside text-white/70 space-y-1">
          <li>
            <strong className="text-white">Regular Maintenance:</strong> Sundays, 2:00 AM - 6:00 AM
            Central Time
          </li>
          <li>
            <strong className="text-white">Notice:</strong> 48 hours minimum for scheduled
            maintenance
          </li>
          <li>
            <strong className="text-white">Duration:</strong> Maximum 4 hours per maintenance window
          </li>
        </ul>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 3 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">3. SERVICE CREDITS</h2>

        <h3 className="text-xl font-semibold text-white mb-3">3.1 Credit Schedule</h3>
        <p className="text-white/70 mb-4">
          If BodyF1RST fails to meet the Uptime SLA, Customer is eligible for service credits:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-white/10">
            <thead>
              <tr className="bg-white/5">
                <th className="text-left py-3 px-4 text-white border-b border-white/10">
                  Monthly Uptime
                </th>
                <th className="text-left py-3 px-4 text-white border-b border-white/10">
                  Service Credit
                </th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">99.0% - 99.5%</td>
                <td className="py-3 px-4">10% of monthly fee</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">98.0% - 99.0%</td>
                <td className="py-3 px-4">25% of monthly fee</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">95.0% - 98.0%</td>
                <td className="py-3 px-4">50% of monthly fee</td>
              </tr>
              <tr>
                <td className="py-3 px-4">&lt; 95.0%</td>
                <td className="py-3 px-4">100% of monthly fee</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-white mb-3">3.2 Credit Request Process</h3>
        <ol className="list-decimal list-inside text-white/70 space-y-1 mb-4">
          <li>Customer must request credits within 30 days of the incident</li>
          <li>Request must include dates, times, and description of the outage</li>
          <li>BodyF1RST will validate the claim within 10 business days</li>
          <li>Approved credits applied to next invoice</li>
        </ol>

        <h3 className="text-xl font-semibold text-white mb-3">3.3 Credit Limitations</h3>
        <ul className="list-disc list-inside text-white/70 space-y-1">
          <li>Maximum credit per month: 100% of monthly fee</li>
          <li>Credits are not refundable as cash</li>
          <li>Credits expire if not used within 12 months</li>
          <li>Credits do not apply to unpaid invoices</li>
        </ul>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 4 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">4. INCIDENT MANAGEMENT</h2>

        <h3 className="text-xl font-semibold text-white mb-3">4.1 Incident Priority Levels</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-white/10">
            <thead>
              <tr className="bg-white/5">
                <th className="text-left py-3 px-4 text-white border-b border-white/10">Priority</th>
                <th className="text-left py-3 px-4 text-white border-b border-white/10">
                  Definition
                </th>
                <th className="text-left py-3 px-4 text-white border-b border-white/10">Examples</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 font-semibold">P1 - Critical</td>
                <td className="py-3 px-4">Complete service outage affecting all users</td>
                <td className="py-3 px-4">Platform completely unavailable</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 font-semibold">P2 - High</td>
                <td className="py-3 px-4">Major feature unavailable or significant degradation</td>
                <td className="py-3 px-4">AI coaching not working, login issues</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 font-semibold">P3 - Medium</td>
                <td className="py-3 px-4">Feature partially impaired</td>
                <td className="py-3 px-4">Slow performance, intermittent errors</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold">P4 - Low</td>
                <td className="py-3 px-4">Minor issue, workaround available</td>
                <td className="py-3 px-4">Cosmetic bugs, non-critical features</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-white mb-3">4.2 Response Times</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-white/10">
            <thead>
              <tr className="bg-white/5">
                <th className="text-left py-3 px-4 text-white border-b border-white/10">Priority</th>
                <th className="text-left py-3 px-4 text-white border-b border-white/10">
                  Initial Response
                </th>
                <th className="text-left py-3 px-4 text-white border-b border-white/10">
                  Status Updates
                </th>
                <th className="text-left py-3 px-4 text-white border-b border-white/10">
                  Target Resolution
                </th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">P1 - Critical</td>
                <td className="py-3 px-4 font-semibold text-orange-400">15 minutes</td>
                <td className="py-3 px-4">Every 30 minutes</td>
                <td className="py-3 px-4">4 hours</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">P2 - High</td>
                <td className="py-3 px-4 font-semibold text-orange-400">1 hour</td>
                <td className="py-3 px-4">Every 2 hours</td>
                <td className="py-3 px-4">8 hours</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">P3 - Medium</td>
                <td className="py-3 px-4">4 hours</td>
                <td className="py-3 px-4">Daily</td>
                <td className="py-3 px-4">5 business days</td>
              </tr>
              <tr>
                <td className="py-3 px-4">P4 - Low</td>
                <td className="py-3 px-4">24 hours</td>
                <td className="py-3 px-4">Weekly</td>
                <td className="py-3 px-4">30 business days</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-white mb-3">4.3 Escalation Path</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-white/10">
            <thead>
              <tr className="bg-white/5">
                <th className="text-left py-3 px-4 text-white border-b border-white/10">
                  Escalation Level
                </th>
                <th className="text-left py-3 px-4 text-white border-b border-white/10">
                  Timeframe
                </th>
                <th className="text-left py-3 px-4 text-white border-b border-white/10">Contact</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Level 1</td>
                <td className="py-3 px-4">Immediate</td>
                <td className="py-3 px-4">Support Team</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Level 2</td>
                <td className="py-3 px-4">After 2 hours (P1) / 4 hours (P2)</td>
                <td className="py-3 px-4">Engineering Manager</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Level 3</td>
                <td className="py-3 px-4">After 4 hours (P1) / 8 hours (P2)</td>
                <td className="py-3 px-4">VP Engineering</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Level 4</td>
                <td className="py-3 px-4">After 8 hours (P1) / 24 hours (P2)</td>
                <td className="py-3 px-4">CEO</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 5 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">5. SUPPORT SERVICES</h2>

        <h3 className="text-xl font-semibold text-white mb-3">5.1 Support Channels</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-white/10">
            <thead>
              <tr className="bg-white/5">
                <th className="text-left py-3 px-4 text-white border-b border-white/10">Tier</th>
                <th className="text-left py-3 px-4 text-white border-b border-white/10">Channels</th>
                <th className="text-left py-3 px-4 text-white border-b border-white/10">
                  Availability
                </th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Basic</td>
                <td className="py-3 px-4">Email, Help Center</td>
                <td className="py-3 px-4">Business hours (9 AM - 5 PM CT)</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Standard</td>
                <td className="py-3 px-4">Email, Chat, Help Center</td>
                <td className="py-3 px-4">Extended hours (7 AM - 9 PM CT)</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Premium</td>
                <td className="py-3 px-4">Email, Chat, Phone, Dedicated Slack</td>
                <td className="py-3 px-4 font-semibold text-orange-400">24/7</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-white mb-3">5.2 Support Hours</h3>
        <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
          <li>
            <strong className="text-white">Business Hours:</strong> Monday - Friday, 9:00 AM - 5:00
            PM Central Time
          </li>
          <li>
            <strong className="text-white">Extended Hours:</strong> Monday - Friday, 7:00 AM - 9:00
            PM Central Time
          </li>
          <li>
            <strong className="text-white">24/7:</strong> Available for Premium tier customers
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">5.3 Support Contact</h3>
        <ul className="list-disc list-inside text-white/70 space-y-1">
          <li>
            <strong className="text-white">Email:</strong> support@bodyf1rst.com
          </li>
          <li>
            <strong className="text-white">Phone (Premium):</strong> [Provided upon contract
            signing]
          </li>
          <li>
            <strong className="text-white">Help Center:</strong> help.bodyf1rst.com
          </li>
        </ul>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 6 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">6. CUSTOMER SUCCESS</h2>

        <h3 className="text-xl font-semibold text-white mb-3">6.1 Account Management</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-white/10">
            <thead>
              <tr className="bg-white/5">
                <th className="text-left py-3 px-4 text-white border-b border-white/10">Tier</th>
                <th className="text-left py-3 px-4 text-white border-b border-white/10">
                  Account Management
                </th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Basic</td>
                <td className="py-3 px-4">Self-service with email support</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Standard</td>
                <td className="py-3 px-4">Shared Success Manager</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Premium</td>
                <td className="py-3 px-4 font-semibold text-orange-400">
                  Dedicated Account Manager
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-white mb-3">6.2 Premium Account Benefits</h3>
        <ul className="list-disc list-inside text-white/70 space-y-1">
          <li>Dedicated Account Manager</li>
          <li>Quarterly Business Reviews</li>
          <li>Custom training sessions</li>
          <li>Priority feature requests</li>
          <li>Early access to new features</li>
          <li>Direct engineering escalation path</li>
        </ul>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 7 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">7. PERFORMANCE BENCHMARKS</h2>

        <h3 className="text-xl font-semibold text-white mb-3">7.1 Application Performance</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-white/10">
            <thead>
              <tr className="bg-white/5">
                <th className="text-left py-3 px-4 text-white border-b border-white/10">Metric</th>
                <th className="text-left py-3 px-4 text-white border-b border-white/10">Target</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">API Response Time (p95)</td>
                <td className="py-3 px-4">&lt; 200ms</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Page Load Time</td>
                <td className="py-3 px-4">&lt; 3 seconds</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Mobile App Launch</td>
                <td className="py-3 px-4">&lt; 2 seconds</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Search Response</td>
                <td className="py-3 px-4">&lt; 500ms</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-white mb-3">7.2 Capacity</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-white/10">
            <thead>
              <tr className="bg-white/5">
                <th className="text-left py-3 px-4 text-white border-b border-white/10">Metric</th>
                <th className="text-left py-3 px-4 text-white border-b border-white/10">
                  Commitment
                </th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Concurrent Users</td>
                <td className="py-3 px-4">Unlimited (within license)</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Data Storage</td>
                <td className="py-3 px-4">Per agreement</td>
              </tr>
              <tr>
                <td className="py-3 px-4">API Rate Limits</td>
                <td className="py-3 px-4">1,000 requests/minute per user</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 8 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">8. DATA BACKUP AND RECOVERY</h2>

        <h3 className="text-xl font-semibold text-white mb-3">8.1 Backup Schedule</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-white/10">
            <thead>
              <tr className="bg-white/5">
                <th className="text-left py-3 px-4 text-white border-b border-white/10">
                  Backup Type
                </th>
                <th className="text-left py-3 px-4 text-white border-b border-white/10">
                  Frequency
                </th>
                <th className="text-left py-3 px-4 text-white border-b border-white/10">
                  Retention
                </th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Continuous</td>
                <td className="py-3 px-4">Real-time</td>
                <td className="py-3 px-4">24 hours</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Daily</td>
                <td className="py-3 px-4">Every 24 hours</td>
                <td className="py-3 px-4">30 days</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Weekly</td>
                <td className="py-3 px-4">Every 7 days</td>
                <td className="py-3 px-4">90 days</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Monthly</td>
                <td className="py-3 px-4">First of month</td>
                <td className="py-3 px-4">1 year</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-white mb-3">8.2 Recovery Objectives</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-white/10">
            <thead>
              <tr className="bg-white/5">
                <th className="text-left py-3 px-4 text-white border-b border-white/10">Metric</th>
                <th className="text-left py-3 px-4 text-white border-b border-white/10">Standard</th>
                <th className="text-left py-3 px-4 text-white border-b border-white/10">Premium</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Recovery Time Objective (RTO)</td>
                <td className="py-3 px-4">4 hours</td>
                <td className="py-3 px-4 font-semibold text-orange-400">1 hour</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Recovery Point Objective (RPO)</td>
                <td className="py-3 px-4">24 hours</td>
                <td className="py-3 px-4 font-semibold text-orange-400">1 hour</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-white mb-3">8.3 Disaster Recovery</h3>
        <ul className="list-disc list-inside text-white/70 space-y-1">
          <li>Multi-region deployment with automatic failover</li>
          <li>Annual disaster recovery testing</li>
          <li>Documented recovery procedures</li>
          <li>Customer notification within 1 hour of DR activation</li>
        </ul>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 9 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">9. SECURITY COMMITMENTS</h2>

        <h3 className="text-xl font-semibold text-white mb-3">9.1 Security Standards</h3>
        <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
          <li>SOC 2 Type II certified</li>
          <li>HIPAA compliant (with BAA)</li>
          <li>GDPR compliant</li>
          <li>Annual penetration testing</li>
          <li>Continuous vulnerability scanning</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">9.2 Security Incident Response</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-white/10">
            <thead>
              <tr className="bg-white/5">
                <th className="text-left py-3 px-4 text-white border-b border-white/10">Severity</th>
                <th className="text-left py-3 px-4 text-white border-b border-white/10">
                  Notification
                </th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Critical (data breach)</td>
                <td className="py-3 px-4 font-semibold text-red-400">Within 24 hours</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">High (potential exposure)</td>
                <td className="py-3 px-4">Within 48 hours</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Medium (vulnerability)</td>
                <td className="py-3 px-4">Within 72 hours</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Low (informational)</td>
                <td className="py-3 px-4">Monthly report</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 10 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">10. REPORTING</h2>

        <h3 className="text-xl font-semibold text-white mb-3">10.1 Standard Reports</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-white/10">
            <thead>
              <tr className="bg-white/5">
                <th className="text-left py-3 px-4 text-white border-b border-white/10">Report</th>
                <th className="text-left py-3 px-4 text-white border-b border-white/10">
                  Frequency
                </th>
                <th className="text-left py-3 px-4 text-white border-b border-white/10">Delivery</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Uptime Report</td>
                <td className="py-3 px-4">Monthly</td>
                <td className="py-3 px-4">Dashboard + Email</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Incident Summary</td>
                <td className="py-3 px-4">Monthly</td>
                <td className="py-3 px-4">Dashboard + Email</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4">Usage Analytics</td>
                <td className="py-3 px-4">Real-time</td>
                <td className="py-3 px-4">Dashboard</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Security Summary</td>
                <td className="py-3 px-4">Quarterly</td>
                <td className="py-3 px-4">Email</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-white mb-3">10.2 Premium Reports</h3>
        <ul className="list-disc list-inside text-white/70 space-y-1">
          <li>Custom analytics dashboards</li>
          <li>API access to metrics</li>
          <li>Real-time alerting</li>
          <li>Executive summary reports</li>
        </ul>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 11 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">11. SLA REVIEW</h2>

        <h3 className="text-xl font-semibold text-white mb-3">11.1 Review Process</h3>
        <ul className="list-disc list-inside text-white/70 space-y-1 mb-4">
          <li>This SLA is reviewed annually</li>
          <li>Changes communicated 30 days in advance</li>
          <li>Customer feedback incorporated</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-3">11.2 Continuous Improvement</h3>
        <p className="text-white/70 mb-2">BodyF1RST commits to:</p>
        <ul className="list-disc list-inside text-white/70 space-y-1">
          <li>Quarterly service quality reviews</li>
          <li>Root cause analysis for P1/P2 incidents</li>
          <li>Preventive measures implementation</li>
          <li>Transparency in incident post-mortems</li>
        </ul>
      </section>

      <hr className="border-white/10 my-8" />

      {/* Section 12 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">12. CONTACT INFORMATION</h2>

        <div className="space-y-3 text-white/70">
          <p>
            <strong className="text-white">Technical Support:</strong>
            <br />
            Email: support@bodyf1rst.com
            <br />
            Phone (Premium): [Provided upon signing]
            <br />
            Help Center: help.bodyf1rst.com
          </p>
          <p>
            <strong className="text-white">Billing Inquiries:</strong>
            <br />
            Email: billing@bodyf1rst.com
          </p>
          <p>
            <strong className="text-white">Security Concerns:</strong>
            <br />
            Email: security@bodyf1rst.com
          </p>
          <p>
            <strong className="text-white">Account Management:</strong>
            <br />
            Email: success@bodyf1rst.com
          </p>
        </div>
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

          <div className="space-y-4">
            <p className="text-white font-semibold">[CUSTOMER NAME]</p>
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
        This SLA is part of the Master Service Agreement. For questions, contact
        support@bodyf1rst.com.
      </p>
    </PrintDocument>
  );
}
