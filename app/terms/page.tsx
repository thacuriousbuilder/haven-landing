// app/terms/page.tsx
"use client";

import { useState } from "react";
import Header from "@/components/client/Header";
import FooterSection from "@/components/client/FooterSection";

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState("definitions");

  const sections = [
    { id: "definitions", title: "Definitions" },
    { id: "agreement", title: "Agreement to Terms" },
    { id: "eligibility", title: "Eligibility" },
    { id: "health-disclaimer", title: "Health Disclaimer" },
    { id: "user-content", title: "User Content" },
    { id: "prohibited", title: "Prohibited Uses" },
    { id: "subscriptions", title: "Subscriptions & Billing" },
    { id: "intellectual-property", title: "Intellectual Property" },
    { id: "liability", title: "Limitation of Liability" },
    { id: "changes", title: "Changes to Terms" },
    { id: "contact", title: "Contact Us" },
  ];

  return (
    <main className="min-h-screen bg-haven-cream">
      <Header logoSrc="/images/HAVEN.svg" />

      {/* Hero Section */}
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-haven-graphite">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Terms of Use
            </h1>
            <p className="text-xl text-haven-graphite/90 mb-4">
              Please read these terms carefully before using HAVEN.
            </p>
            <p className="text-haven-graphite/70">Last Updated: February 25, 2026</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">

            {/* Sidebar Navigation */}
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
                <h3 className="text-sm font-bold text-haven-steel uppercase mb-4">
                  Quick Navigation
                </h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={() => setActiveSection(section.id)}
                      className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeSection === section.id
                          ? "bg-haven-teal text-white"
                          : "text-haven-graphite hover:bg-haven-cream"
                      }`}
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">

              {/* Introduction Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <p className="text-lg text-haven-graphite leading-relaxed">
                  These Terms of Use govern your access to and use of the HAVEN mobile application, website, and related services. By using HAVEN, you agree to be bound by these terms. If you do not agree, please discontinue use of the service.
                </p>
              </div>

              {/* Definitions */}
              <section id="definitions" className="bg-white rounded-2xl p-8 shadow-lg scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-haven-teal/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-haven-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-haven-teal">Definitions</h2>
                </div>
                <div className="space-y-4">
                  {[
                    { term: "Application", def: 'The mobile application titled "HAVEN – Weekly Calorie Tracker," including all related features and updates.' },
                    { term: "Company / We / Us", def: "HAVEN, and its operators." },
                    { term: "Service", def: "The Application, website, AI-powered tools, and all related services offered by HAVEN." },
                    { term: "User Content", def: "Photos, food entries, text, or other content you upload or submit through the Service." },
                    { term: "You", def: "The individual using the Service or the legal entity on whose behalf the individual uses the Service." },
                  ].map((item, i) => (
                    <div key={i} className="border-l-4 border-haven-teal pl-4">
                      <p className="font-bold text-haven-graphite">{item.term}</p>
                      <p className="text-haven-steel">{item.def}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Agreement */}
              <section id="agreement" className="bg-white rounded-2xl p-8 shadow-lg scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-haven-orange/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-haven-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-haven-teal">Agreement to Terms</h2>
                </div>
                <p className="text-haven-graphite leading-relaxed">
                  Your access to and use of the Service is conditioned upon your acceptance of these Terms and the HAVEN Privacy Policy. By accessing or using the Service, you acknowledge that you have read, understood, and agreed to be bound by these Terms. If you do not agree, you must discontinue use of the Service immediately.
                </p>
              </section>

              {/* Eligibility */}
              <section id="eligibility" className="bg-white rounded-2xl p-8 shadow-lg scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-haven-teal">Eligibility & Age Requirements</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-haven-graphite leading-relaxed">
                    You must be at least 13 years old to use HAVEN.
                  </p>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                    <p className="text-sm text-yellow-900">
                      <strong>Users ages 13–17:</strong> You may only use the Service with the consent and supervision of a parent or legal guardian, who agrees to be fully responsible for all activities conducted using the Service.
                    </p>
                  </div>
                </div>
              </section>

              {/* Health Disclaimer */}
              <section id="health-disclaimer" className="bg-white rounded-2xl p-8 shadow-lg scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-haven-teal">Health & Nutrition Disclaimer</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-haven-graphite leading-relaxed">
                    HAVEN does not provide medical advice, nutritional counseling, or professional health services. All calorie estimates, nutritional insights, and food identifications are automated approximations and may be incomplete or inaccurate.
                  </p>
                  <div className="bg-haven-cream rounded-xl p-6 space-y-3">
                    {[
                      "Calorie and nutrition estimates are approximations only.",
                      "The Service is not intended to diagnose, treat, cure, or prevent any disease.",
                      "Consult a licensed professional for dietary or medical guidance.",
                      "We are not liable for inaccuracies in calorie counts or food identification.",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-haven-teal mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-haven-graphite text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* User Content */}
              <section id="user-content" className="bg-white rounded-2xl p-8 shadow-lg scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-haven-teal">User Content & License</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-haven-graphite leading-relaxed">
                    By submitting User Content, you represent that you own it or have the rights to share it. You grant HAVEN a worldwide, royalty-free, transferable license to use, reproduce, analyze, and process your content to operate and improve the Service, including training AI models on anonymized data.
                  </p>
                  <div className="bg-haven-cream rounded-xl p-5">
                    <p className="text-sm text-haven-graphite">
                      You agree not to upload unlawful, harmful, offensive, or infringing content through the Service.
                    </p>
                  </div>
                </div>
              </section>

              {/* Prohibited Uses */}
              <section id="prohibited" className="bg-white rounded-2xl p-8 shadow-lg scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-haven-teal">Prohibited Uses</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Uploading violent, explicit, or unlawful content",
                    "Reverse engineering or competitive analysis of the Service",
                    "Circumventing security protections or unauthorized access",
                    "Uploading images of individuals without lawful consent",
                    "Interfering with the Service's normal operation",
                    "Using the Service for any illegal or unauthorized purpose",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-haven-cream rounded-xl p-4">
                      <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-haven-graphite text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Subscriptions */}
              <section id="subscriptions" className="bg-white rounded-2xl p-8 shadow-lg scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-haven-teal">Subscriptions & Billing</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-haven-graphite leading-relaxed">
                    Purchases and subscriptions are processed through third-party platforms including the Apple App Store and Google Play Store. Their respective terms govern payment processing, renewals, and refunds.
                  </p>
                  <div className="bg-haven-cream rounded-xl p-5 space-y-3">
                    <div className="border-l-4 border-haven-teal pl-4">
                      <p className="font-bold text-haven-graphite text-sm">Auto-Renewal</p>
                      <p className="text-haven-steel text-sm">Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current billing period.</p>
                    </div>
                    <div className="border-l-4 border-haven-teal pl-4">
                      <p className="font-bold text-haven-graphite text-sm">Cancellation</p>
                      <p className="text-haven-steel text-sm">You can manage or cancel your subscription at any time through your App Store or Google Play account settings.</p>
                    </div>
                    <div className="border-l-4 border-haven-teal pl-4">
                      <p className="font-bold text-haven-graphite text-sm">Lifetime Purchase</p>
                      <p className="text-haven-steel text-sm">Lifetime access is a one-time purchase that grants access for as long as the Service operates.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Intellectual Property */}
              <section id="intellectual-property" className="bg-white rounded-2xl p-8 shadow-lg scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-haven-teal/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-haven-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-haven-teal">Intellectual Property</h2>
                </div>
                <p className="text-haven-graphite leading-relaxed">
                  All rights in the Service — including the app, branding, design, and technology — are owned exclusively by HAVEN or its licensors. You may not copy, modify, distribute, sell, or reverse engineer any part of the Service. Your User Content remains yours, subject to the license granted above.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section id="liability" className="bg-white rounded-2xl p-8 shadow-lg scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-haven-teal">Limitation of Liability</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-haven-graphite leading-relaxed">
                    The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, or accuracy.
                  </p>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                    <p className="text-sm text-yellow-900">
                      To the maximum extent permitted by law, HAVEN&apos;s total liability shall not exceed the greater of the amount you paid in the preceding 12 months or one hundred dollars (USD $100). We are not liable for indirect, incidental, or consequential damages, including loss of data or profits.
                    </p>
                  </div>
                  <p className="text-haven-graphite leading-relaxed">
                    We may suspend or terminate your access at any time if you violate these Terms. Upon termination, all rights granted to you immediately cease.
                  </p>
                </div>
              </section>

              {/* Changes to Terms */}
              <section id="changes" className="bg-white rounded-2xl p-8 shadow-lg scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-haven-teal">Changes to These Terms</h2>
                </div>
                <p className="text-haven-graphite leading-relaxed">
                  We may update these Terms at any time. Material changes will be communicated through the app or via email. Continued use of the Service after updates constitutes your acceptance of the revised Terms. If you do not agree to the updated Terms, you must stop using the Service.
                </p>
              </section>

              {/* Contact */}
              <section id="contact" className="bg-gradient-to-br from-haven-teal to-haven-teal-dark rounded-2xl p-8 shadow-lg text-white scroll-mt-24">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white mb-4">Questions About These Terms?</h2>
                  <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                    If you have any questions about these Terms of Use, please reach out to us.
                  </p>
                  <a
                    href="mailto:tryhaven1@gmail.com"
                    className="inline-flex items-center gap-2 bg-haven-orange text-white px-8 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all shadow-lg"
                  >
                    Contact Us at tryhaven1@gmail.com
                  </a>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}