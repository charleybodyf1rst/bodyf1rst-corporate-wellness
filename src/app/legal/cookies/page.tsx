"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Cookie, ArrowRight } from "lucide-react";
import { SectionBackground } from "@/components/layered-background";

export default function CookiePolicyPage() {
  const lastUpdated = "January 5, 2026";

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
              <Cookie className="w-8 h-8 text-orange-500" />
              <h1 className="text-4xl font-bold text-white">Cookie Policy</h1>
            </div>
            <p className="text-white/60">Last Updated: {lastUpdated}</p>
          </motion.div>
        </div>
      </SectionBackground>

      <SectionBackground variant="darker" className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-invert prose-orange max-w-none">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">1. What Are Cookies?</h2>
              <p className="text-white/70 leading-relaxed">
                Cookies are small text files that are stored on your device when you visit a website. They help websites remember your preferences, login status, and provide a better user experience.
              </p>
              <p className="text-white/70 leading-relaxed mt-4">
                We also use similar technologies such as pixels, local storage, and session storage, collectively referred to as &ldquo;cookies&rdquo; in this policy.
              </p>
            </section>

            {/* How We Use Cookies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Cookies</h2>
              <p className="text-white/70 leading-relaxed mb-6">
                We use cookies for the following purposes:
              </p>

              <div className="space-y-6">
                <div className="glass-card p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Essential Cookies</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Required for the Services to function. Cannot be disabled.
                  </p>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 text-white/60">Cookie</th>
                        <th className="text-left py-2 text-white/60">Purpose</th>
                        <th className="text-left py-2 text-white/60">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/70">
                      <tr className="border-b border-white/5">
                        <td className="py-2">session_id</td>
                        <td className="py-2">Maintains login session</td>
                        <td className="py-2">Session</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-2">csrf_token</td>
                        <td className="py-2">Security protection</td>
                        <td className="py-2">Session</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-2">auth_token</td>
                        <td className="py-2">Authentication</td>
                        <td className="py-2">30 days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Functional Cookies</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Remember your preferences and settings.
                  </p>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 text-white/60">Cookie</th>
                        <th className="text-left py-2 text-white/60">Purpose</th>
                        <th className="text-left py-2 text-white/60">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/70">
                      <tr className="border-b border-white/5">
                        <td className="py-2">user_preferences</td>
                        <td className="py-2">Display settings</td>
                        <td className="py-2">1 year</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-2">language</td>
                        <td className="py-2">Language preference</td>
                        <td className="py-2">1 year</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-2">timezone</td>
                        <td className="py-2">Time zone setting</td>
                        <td className="py-2">1 year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Analytics Cookies</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Help us understand how you use the Services.
                  </p>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 text-white/60">Cookie</th>
                        <th className="text-left py-2 text-white/60">Purpose</th>
                        <th className="text-left py-2 text-white/60">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/70">
                      <tr className="border-b border-white/5">
                        <td className="py-2">_ga</td>
                        <td className="py-2">Google Analytics</td>
                        <td className="py-2">2 years</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-2">_gid</td>
                        <td className="py-2">Google Analytics (daily)</td>
                        <td className="py-2">24 hours</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-2">amplitude_id</td>
                        <td className="py-2">Product analytics</td>
                        <td className="py-2">1 year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Marketing Cookies</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Used for marketing campaigns and measuring ad effectiveness. Only on marketing pages.
                  </p>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 text-white/60">Cookie</th>
                        <th className="text-left py-2 text-white/60">Purpose</th>
                        <th className="text-left py-2 text-white/60">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/70">
                      <tr className="border-b border-white/5">
                        <td className="py-2">_fbp</td>
                        <td className="py-2">Facebook Pixel</td>
                        <td className="py-2">90 days</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-2">_gcl_au</td>
                        <td className="py-2">Google Ads conversion</td>
                        <td className="py-2">90 days</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-2">li_sugr</td>
                        <td className="py-2">LinkedIn Insight</td>
                        <td className="py-2">90 days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Third-Party Cookies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">3. Third-Party Cookies</h2>
              <p className="text-white/70 leading-relaxed">
                Some cookies are placed by third-party services that appear on our pages. We do not control these cookies. Third parties include:
              </p>
              <ul className="mt-4 space-y-2 text-white/70">
                <li>• Google Analytics (analytics)</li>
                <li>• Amplitude (product analytics)</li>
                <li>• Intercom (customer support chat)</li>
                <li>• Stripe (payment processing)</li>
              </ul>
            </section>

            {/* Managing Cookies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">4. Managing Cookies</h2>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Browser Settings</h3>
              <p className="text-white/70 leading-relaxed">
                Most browsers allow you to manage cookies through their settings. You can:
              </p>
              <ul className="mt-4 space-y-2 text-white/70">
                <li>• View and delete cookies</li>
                <li>• Block all cookies</li>
                <li>• Block third-party cookies only</li>
                <li>• Clear cookies when you close your browser</li>
              </ul>
              <p className="text-white/70 leading-relaxed mt-4">
                <strong className="text-white">Note:</strong> Blocking essential cookies will prevent the Services from functioning properly.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Cookie Preferences</h3>
              <p className="text-white/70 leading-relaxed">
                You can adjust your cookie preferences at any time through our cookie consent banner or by contacting us.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Opt-Out Links</h3>
              <ul className="mt-4 space-y-2 text-white/70">
                <li>
                  • Google Analytics:{" "}
                  <a href="https://tools.google.com/dlpage/gaoptout" className="text-orange-400 hover:text-orange-300" target="_blank" rel="noopener noreferrer">
                    https://tools.google.com/dlpage/gaoptout
                  </a>
                </li>
                <li>
                  • Facebook:{" "}
                  <a href="https://www.facebook.com/policies/cookies/" className="text-orange-400 hover:text-orange-300" target="_blank" rel="noopener noreferrer">
                    https://www.facebook.com/policies/cookies/
                  </a>
                </li>
                <li>
                  • LinkedIn:{" "}
                  <a href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out" className="text-orange-400 hover:text-orange-300" target="_blank" rel="noopener noreferrer">
                    https://www.linkedin.com/psettings/guest-controls
                  </a>
                </li>
              </ul>
            </section>

            {/* Do Not Track */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">5. Do Not Track</h2>
              <p className="text-white/70 leading-relaxed">
                Some browsers have a &ldquo;Do Not Track&rdquo; (DNT) feature. We currently do not respond to DNT signals because there is no industry-standard interpretation. We honor the Global Privacy Control (GPC) signal for California residents.
              </p>
            </section>

            {/* Updates */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">6. Updates to This Policy</h2>
              <p className="text-white/70 leading-relaxed">
                We may update this Cookie Policy from time to time. We will notify you of material changes by updating the &ldquo;Last Updated&rdquo; date and, where appropriate, through the cookie consent banner.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
              <p className="text-white/70 leading-relaxed">
                For questions about our use of cookies:
              </p>
              <div className="mt-4 glass-card p-6">
                <p className="text-white font-semibold">BodyF1RST, Inc.</p>
                <p className="text-white/70">Email: privacy@bodyf1rst.com</p>
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
              <Link href="/terms" className="text-orange-400 hover:text-orange-300 flex items-center gap-1">
                Terms of Service <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/legal" className="text-orange-400 hover:text-orange-300 flex items-center gap-1">
                Legal Center <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </SectionBackground>
    </div>
  );
}
