"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    employees: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    console.log("Form submitted:", formState);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Thank You!</h1>
          <p className="mt-4 text-lg text-gray-600">
            We&apos;ve received your request and will get back to you within 24 hours with a
            personalized proposal for your organization.
          </p>
          <p className="mt-6 text-sm text-gray-500">
            In the meantime, feel free to explore our{" "}
            <a href="/pricing" className="text-orange-600 hover:underline">pricing</a> or{" "}
            <a href="/roi-calculator" className="text-orange-600 hover:underline">calculate your ROI</a>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Let&apos;s Talk Wellness
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get a personalized proposal for your organization. We&apos;ll respond within 24 hours.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Email</div>
                    <a href="mailto:corporate@bodyf1rst.com" className="text-sm text-orange-600 hover:underline">
                      corporate@bodyf1rst.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Phone</div>
                    <a href="tel:+15125551234" className="text-sm text-orange-600 hover:underline">
                      (512) 555-1234
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Location</div>
                    <div className="text-sm text-gray-600">
                      Austin, TX<br />
                      Serving companies nationwide
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Response Time</div>
                    <div className="text-sm text-gray-600">
                      Within 24 hours<br />
                      Mon-Fri, 9am-6pm CT
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">What happens next?</h3>
                <ol className="space-y-3 text-sm text-gray-600">
                  <li className="flex gap-3">
                    <span className="font-bold text-orange-600">1.</span>
                    We&apos;ll review your needs and company profile
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-orange-600">2.</span>
                    You&apos;ll receive a customized proposal within 24 hours
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-orange-600">3.</span>
                    We&apos;ll schedule a demo call to walk through the platform
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-orange-600">4.</span>
                    You decide—no pressure, no obligations
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Request a Proposal</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-orange-500 focus:ring-orange-500"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-orange-500 focus:ring-orange-500"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-orange-500 focus:ring-orange-500"
                    placeholder="Acme Corp"
                  />
                </div>

                <div>
                  <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Employees *
                  </label>
                  <select
                    id="employees"
                    required
                    value={formState.employees}
                    onChange={(e) => setFormState({ ...formState, employees: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-orange-500 focus:ring-orange-500"
                  >
                    <option value="">Select range</option>
                    <option value="50-99">50-99</option>
                    <option value="100-249">100-249</option>
                    <option value="250-499">250-499</option>
                    <option value="500-999">500-999</option>
                    <option value="1000+">1000+</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-orange-500 focus:ring-orange-500"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your wellness goals
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-orange-500 focus:ring-orange-500"
                    placeholder="What are your main goals for a corporate wellness program? Any specific challenges you're trying to address?"
                  />
                </div>
              </div>

              <div className="mt-8">
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Request Proposal
                </Button>
                <p className="mt-4 text-xs text-gray-500">
                  By submitting this form, you agree to receive communications from BodyF1RST.
                  We respect your privacy and will never share your information.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
