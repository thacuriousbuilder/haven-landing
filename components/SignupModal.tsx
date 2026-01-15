
"use client";

import { useState } from "react";
import { submitWaitlistSignup } from "@/lib/api/waitlist";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    goal: "",
    updates: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await submitWaitlistSignup(formData);
      
      setSuccess(true);
      
      // Close modal after 2 seconds
      setTimeout(() => {
        onClose();
        setSuccess(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          goal: "",
          updates: false,
        });
      }, 2000);

    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Something went wrong. Please try again.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-3xl p-6 lg:p-8 max-w-md w-full shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-haven-steel hover:text-haven-graphite transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Success State */}
        {success ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-haven-teal mb-2">You&apos;re on the list!</h3>
            <p className="text-haven-steel">We&apos;ll notify you when HAVEN launches.</p>
          </div>
        ) : (
          <>
            {/* Modal Header */}
            <div className="mb-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-haven-teal mb-2">
                Join the Waitlist
              </h3>
              <p className="text-haven-steel">
                Be the first to experience weekly calorie tracking that actually works.
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Name & Last Name Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-haven-graphite mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-haven-cream border border-haven-border text-haven-graphite placeholder-haven-steel focus:outline-none focus:ring-2 focus:ring-haven-orange focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-haven-graphite mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-haven-cream border border-haven-border text-haven-graphite placeholder-haven-steel focus:outline-none focus:ring-2 focus:ring-haven-orange focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-haven-graphite mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-haven-cream border border-haven-border text-haven-graphite placeholder-haven-steel focus:outline-none focus:ring-2 focus:ring-haven-orange focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              {/* Goal */}
              <div>
                <label htmlFor="goal" className="block text-sm font-medium text-haven-graphite mb-2">
                  What&apos;s your primary goal?
                </label>
                <select
                  id="goal"
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-haven-cream border border-haven-border text-haven-graphite focus:outline-none focus:ring-2 focus:ring-haven-orange focus:border-transparent appearance-none cursor-pointer"
                >
                  <option value="">Select a goal...</option>
                  <option value="lose-weight">Lose weight</option>
                  <option value="maintain-weight">Maintain weight</option>
                  <option value="gain-muscle">Gain muscle</option>
                  <option value="eat-healthier">Eat healthier</option>
                  <option value="track-nutrition">Track nutrition</option>
                </select>
              </div>

              {/* Keep me updated checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="updates"
                  name="updates"
                  checked={formData.updates}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 rounded border-haven-border bg-haven-cream text-haven-orange focus:ring-2 focus:ring-haven-orange focus:ring-offset-0"
                />
                <label htmlFor="updates" className="text-sm text-haven-steel leading-relaxed">
                  Keep me updated on HAVEN&apos;s launch, new features, and exclusive early-access perks
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-haven-orange text-white px-8 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Joining..." : "Join the Waitlist"}
              </button>
            </form>

            {/* Privacy note */}
            <p className="text-xs text-haven-steel text-center mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </div>
  );
}