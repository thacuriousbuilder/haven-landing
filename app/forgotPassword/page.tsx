
'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type ViewState = 'checking' | 'invalid' | 'form' | 'success';

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#206E6B] flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">HAVEN</h1>
          <p className="text-lg text-white/80">Enjoy Food. Hit Your Goals</p>
        </div>

        <div className="bg-white/10 rounded-2xl p-8">{children}</div>

        <p className="text-center text-white/60 text-sm mt-6">
          Having trouble? Contact support at{' '}
          <a href="mailto:support@tryhaven.co" className="text-white underline">
           tryhaven1@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default function ResetPassword() {
  const [view, setView] = useState<ViewState>('checking');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const init = async () => {
      const hash = window.location.hash.startsWith('#')
        ? window.location.hash.slice(1)
        : window.location.hash;

      const hashParams = new URLSearchParams(hash);
      const accessToken = hashParams.get('access_token');
      const refreshToken = hashParams.get('refresh_token');
      const type = hashParams.get('type');

      if (!accessToken || type !== 'recovery') {
        setView('invalid');
        return;
      }

      const { error } = await supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken || '',
      });

      if (error) {
        setView('invalid');
        return;
      }

      setView('form');
    };

    init();
  }, []);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) return setError('Passwords do not match');
    if (password.length < 8) return setError('Password must be at least 8 characters');

    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);

    if (error) setError(error.message);
    else setView('success');
  };

  if (view === 'checking') {
    return (
      <Shell>
        <h2 className="text-2xl font-bold text-white mb-2">Checking link…</h2>
        <p className="text-white/80 text-sm">Please wait a moment.</p>
      </Shell>
    );
  }

  if (view === 'invalid') {
    return (
      <Shell>
        <h2 className="text-2xl font-bold text-white mb-4">Invalid Link</h2>
        <p className="text-white/80">
          This password reset link is invalid or has expired. Please request a new one from the HAVEN app.
        </p>
      </Shell>
    );
  }

  if (view === 'success') {
    return (
      <Shell>
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4 text-center">Password Updated!</h2>
        <p className="text-white/80 mb-6 text-center">
          Your password has been successfully reset. Return to the HAVEN app to log in with your new password.
        </p>
        <div className="text-sm text-white/60 text-center">You can close this page now.</div>
      </Shell>
    );
  }

  // view === 'form'
  return (
    <Shell>
      <div className="mb-6">
        <p className="text-sm font-semibold text-[#EF7828] mb-2 text-center uppercase tracking-wide">
          Account Recovery
        </p>
        <h2 className="text-2xl font-bold text-white mb-2">Reset Your Password</h2>
        <p className="text-white/80 text-sm">Enter your new password below.</p>
      </div>

      <form onSubmit={handleResetPassword}>
        {error && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
            <p className="text-red-200 text-sm">{error}</p>
          </div>
        )}

        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2">New Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-white/15 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
            placeholder="Enter new password"
            required
            minLength={8}
          />
        </div>

        <div className="mb-6">
          <label className="block text-white text-sm font-semibold mb-2">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-3 bg-white/15 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
            placeholder="Confirm new password"
            required
            minLength={8}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-white text-[#206E6B] font-semibold py-3 px-6 rounded-full hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Updating...' : 'Update Password'}
        </button>
      </form>
    </Shell>
  );
}
