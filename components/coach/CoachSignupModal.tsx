
"use client";

import { useState } from "react";
import { submitCoachWaitlistSignup } from "@/lib/api/coachWaitlist";

interface CoachSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CoachSignupModal({ isOpen, onClose }: CoachSignupModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    clientCount: "",
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
      await submitCoachWaitlistSignup({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        role: formData.role,
        clientCount: formData.clientCount,
        updates: formData.updates,
      });
      
      setSuccess(true);
      
     
      setTimeout(() => {
        onClose();
        setSuccess(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          role: "",
          clientCount: "",
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
      
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

     
      <div className="relative bg-white rounded-3xl p-6 lg:p-8 max-w-md w-full shadow-2xl max-h-[90vh] overflow-y-auto">
      
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
            <p className="text-haven-steel">We&apos;ll reach out soon to get you started.</p>
          </div>
        ) : (
          <>
            
            <div className="mb-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-haven-teal mb-2">
               Get early access
              </h3>
              <p className="text-haven-steel">
                Join coaches who are already using HAVEN to change their clients lives.
              </p>
            </div>

            
            {error && (
              <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                {error}
              </div>
            )}

          
            <form onSubmit={handleSubmit} className="space-y-4">
             
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

              
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-haven-graphite mb-2">
                  What&apos;s your role?
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-haven-cream border border-haven-border text-haven-graphite focus:outline-none focus:ring-2 focus:ring-haven-orange focus:border-transparent appearance-none cursor-pointer"
                >
                  <option value="">Select your role...</option>
                  <option value="trainer">Personal Trainer</option>
                  <option value="nutritionist">Nutritionist</option>
                  <option value="both">Both</option>
                </select>
              </div>

             
              <div>
                <label htmlFor="clientCount" className="block text-sm font-medium text-haven-graphite mb-2">
                  How many clients do you work with?
                </label>
                <select
                  id="clientCount"
                  name="clientCount"
                  value={formData.clientCount}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-haven-cream border border-haven-border text-haven-graphite focus:outline-none focus:ring-2 focus:ring-haven-orange focus:border-transparent appearance-none cursor-pointer"
                >
                  <option value="">Select range...</option>
                  <option value="1-5">1-5 clients</option>
                  <option value="6-10">6-10 clients</option>
                  <option value="15-20">15-20 clients</option>
                  <option value="20+">20+ clients</option>
                </select>
              </div>

              
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
                  Keep me updated on HAVEN&apos;s launch, new features, and exclusive early-access perks for coaches
                </label>
              </div>

             
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-haven-orange text-white px-8 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "See you soon..." : "Get early access"}
              </button>
            </form>

          </>
        )}
      </div>
    </div>
  );
}