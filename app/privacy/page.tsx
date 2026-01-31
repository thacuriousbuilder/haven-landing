// app/privacy/page.tsx
"use client";

import { useState } from "react";
import Header from "@/components/client/Header";
import FooterSection from "@/components/client/FooterSection";

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState("definitions");

  const sections = [
    { id: "definitions", title: "Definitions" },
    { id: "data-collection", title: "Data Collection" },
    { id: "data-usage", title: "How We Use Data" },
    { id: "data-sharing", title: "Data Sharing" },
    { id: "your-rights", title: "Your Rights" },
    { id: "security", title: "Security" },
    { id: "contact", title: "Contact Us" },
  ];

  return (
    <main className="min-h-screen bg-haven-cream">
      <Header />
      
      {/* Hero Section */}
      <div className=" pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-haven-graphite">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-haven-graphite/90 mb-4">
              Your privacy matters to us. Here&apos;s how we protect your data.
            </p>
            <p className="text-haven-graphite/70">Last Updated: January 16, 2026</p>
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
                  This Privacy Policy describes how HAVEN, Inc. collects, uses, processes, shares, and protects your information when you use the HAVEN mobile application, website, and related services. By using our service, you agree to the collection and use of information in accordance with this policy.
                </p>
              </div>

              {/* Definitions Section */}
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
                  <div className="border-l-4 border-haven-teal pl-4">
                    <p className="font-bold text-haven-graphite">Application</p>
                    <p className="text-haven-steel">The mobile application titled &quot;HAVEN – Weekly Calorie Tracker&quot;</p>
                  </div>
                  <div className="border-l-4 border-haven-teal pl-4">
                    <p className="font-bold text-haven-graphite">Personal Data</p>
                    <p className="text-haven-steel">Information that identifies or can reasonably be linked to an individual</p>
                  </div>
                  <div className="border-l-4 border-haven-teal pl-4">
                    <p className="font-bold text-haven-graphite">Health Data</p>
                    <p className="text-haven-steel">Information relating to your physical characteristics, health, nutrition, goals including weight, height, food logs, and progress photos</p>
                  </div>
                  <div className="border-l-4 border-haven-teal pl-4">
                    <p className="font-bold text-haven-graphite">User Content</p>
                    <p className="text-haven-steel">Photos, images, text, food entries, or other inputs you upload through the service</p>
                  </div>
                </div>
              </section>

              {/* Data Collection Section */}
              <section id="data-collection" className="bg-white rounded-2xl p-8 shadow-lg scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-haven-orange/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-haven-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-haven-teal">Data We Collect</h2>
                </div>

                <div className="space-y-6">
                  <div className="bg-haven-cream rounded-xl p-6">
                    <h3 className="text-xl font-bold text-haven-graphite mb-3">Personal Information</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-haven-teal mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-haven-graphite">First and last name</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-haven-teal mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-haven-graphite">Email address</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-haven-teal mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-haven-graphite">Optional profile details</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-haven-cream rounded-xl p-6">
                    <h3 className="text-xl font-bold text-haven-graphite mb-3">Health & Nutrition Data</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-haven-teal mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-haven-graphite">Weight and height</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-haven-teal mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-haven-graphite">Food logs and photos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-haven-teal mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-haven-graphite">Weekly calorie budgets and patterns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-haven-teal mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-haven-graphite">Baseline week data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-haven-teal mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-haven-graphite">Progress photos</span>
                      </li>
                    </ul>
                    <div className="mt-4 bg-white border-l-4 border-haven-orange p-4 rounded">
                      <p className="text-sm text-haven-graphite">
                        <strong>Note:</strong> We may use anonymized food images to improve our AI models. 
                      </p>
                    </div>
                  </div>

                  <div className="bg-haven-cream rounded-xl p-6">
                    <h3 className="text-xl font-bold text-haven-graphite mb-3">Usage Data</h3>
                    <p className="text-haven-steel mb-3">We automatically collect device and usage information:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-haven-teal mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-haven-graphite">Device type and operating system</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-haven-teal mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-haven-graphite">App version and performance data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-haven-teal mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-haven-graphite">Feature usage analytics</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Data Usage Section */}
              <section id="data-usage" className="bg-white rounded-2xl p-8 shadow-lg scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-haven-teal">How We Use Your Data</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-haven-cream rounded-xl p-6">
                    <h3 className="font-bold text-haven-graphite mb-3">Service Delivery</h3>
                    <ul className="space-y-2 text-sm text-haven-steel">
                      <li>• Food identification & calorie estimation</li>
                      <li>• Weekly calorie budget tracking</li>
                      <li>• Baseline week analysis</li>
                      <li>• Personalized recommendations</li>
                    </ul>
                  </div>

                  <div className="bg-haven-cream rounded-xl p-6">
                    <h3 className="font-bold text-haven-graphite mb-3">Product Improvement</h3>
                    <ul className="space-y-2 text-sm text-haven-steel">
                      <li>• AI model training (anonymized)</li>
                      <li>• Service optimization</li>
                      <li>• Bug fixes and debugging</li>
                      <li>• Feature development</li>
                    </ul>
                  </div>

                  <div className="bg-haven-cream rounded-xl p-6">
                    <h3 className="font-bold text-haven-graphite mb-3">Communications</h3>
                    <ul className="space-y-2 text-sm text-haven-steel">
                      <li>• Service updates</li>
                      <li>• Customer support</li>
                      <li>• Optional marketing (you can opt out)</li>
                    </ul>
                  </div>

                  <div className="bg-haven-cream rounded-xl p-6">
                    <h3 className="font-bold text-haven-graphite mb-3">Legal & Security</h3>
                    <ul className="space-y-2 text-sm text-haven-steel">
                      <li>• Fraud prevention</li>
                      <li>• Legal compliance</li>
                      <li>• Rights protection</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Data Sharing Section */}
              <section id="data-sharing" className="bg-white rounded-2xl p-8 shadow-lg scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-haven-teal">How We Share Data</h2>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-bold text-green-900 mb-2">We do not sell your personal data</p>
                      <p className="text-green-800 text-sm">Your privacy is not for sale. We only share data as described below.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border-l-4 border-haven-teal pl-6">
                    <h3 className="font-bold text-haven-graphite mb-2">Service Providers</h3>
                    <p className="text-haven-steel text-sm">Cloud hosting, analytics, and customer support vendors who help us operate the service</p>
                  </div>
                  <div className="border-l-4 border-haven-teal pl-6">
                    <h3 className="font-bold text-haven-graphite mb-2">Legal Requirements</h3>
                    <p className="text-haven-steel text-sm">When required by law or to protect our rights</p>
                  </div>
                  <div className="border-l-4 border-haven-teal pl-6">
                    <h3 className="font-bold text-haven-graphite mb-2">Business Transfers</h3>
                    <p className="text-haven-steel text-sm">In connection with mergers or acquisitions</p>
                  </div>
                  <div className="border-l-4 border-haven-teal pl-6">
                    <h3 className="font-bold text-haven-graphite mb-2">Anonymized Data</h3>
                    <p className="text-haven-steel text-sm">Aggregated, non-identifiable data for research and analytics</p>
                  </div>
                </div>
              </section>

              {/* Your Rights Section */}
              <section id="your-rights" className="bg-white rounded-2xl p-8 shadow-lg scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-haven-teal">Your Privacy Rights</h2>
                </div>

                <p className="text-haven-steel mb-6">Depending on your jurisdiction, you have the following rights:</p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Access", desc: "Request a copy of your personal data" },
                    { title: "Correct", desc: "Fix inaccurate information" },
                    { title: "Delete", desc: "Request deletion of your data" },
                    { title: "Export", desc: "Download your data" },
                    { title: "Withdraw Consent", desc: "Opt out of data processing" },
                    { title: "Object", desc: "Object to certain processing" },
                  ].map((right, idx) => (
                    <div key={idx} className="bg-haven-cream rounded-xl p-4 flex items-start gap-3">
                      <svg className="w-5 h-5 text-haven-teal mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <p className="font-bold text-haven-graphite text-sm">{right.title}</p>
                        <p className="text-haven-steel text-xs">{right.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-haven-teal/10 border border-haven-teal/20 rounded-xl p-6">
                  <p className="text-haven-graphite">
                    <strong>To exercise your rights:</strong> Use in-app settings or contact us at{" "}
                    <a href="mailto:support@tryhaven.co" className="text-haven-teal font-semibold hover:underline">
                     tryhaven1@gmail.com
                    </a>
                  </p>
                </div>
              </section>

              {/* Security Section */}
              <section id="security" className="bg-white rounded-2xl p-8 shadow-lg scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-haven-teal">Security & Data Protection</h2>
                </div>

                <div className="space-y-6">
                  <p className="text-haven-graphite leading-relaxed">
                    We implement administrative, technical, and physical safeguards to protect your data. However, no online system is completely secure.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-haven-cream rounded-xl p-6 text-center">
                      <div className="w-12 h-12 bg-haven-teal rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <p className="font-bold text-haven-graphite">Encryption</p>
                      <p className="text-sm text-haven-steel mt-2">Data encrypted in transit and at rest</p>
                    </div>

                    <div className="bg-haven-cream rounded-xl p-6 text-center">
                      <div className="w-12 h-12 bg-haven-teal rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <p className="font-bold text-haven-graphite">Access Controls</p>
                      <p className="text-sm text-haven-steel mt-2">Strict internal access policies</p>
                    </div>

                    <div className="bg-haven-cream rounded-xl p-6 text-center">
                      <div className="w-12 h-12 bg-haven-teal rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <p className="font-bold text-haven-graphite">Monitoring</p>
                      <p className="text-sm text-haven-steel mt-2">24/7 security monitoring</p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                    <p className="text-sm text-yellow-900">
                      <strong>Children&apos;s Privacy:</strong> HAVEN is not intended for children under 13. We do not knowingly collect information from children.
                    </p>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="bg-gradient-to-br from-haven-teal to-haven-teal-dark rounded-2xl p-8 shadow-lg text-white scroll-mt-24">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-haven-white mb-4">Questions About Privacy?</h2>
                  <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                    We&apos;re here to help. If you have questions or requests about your data, reach out to us.
                  </p>
                  <a 
                    href="mailto:support@tryhaven.co"
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