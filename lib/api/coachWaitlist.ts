
import { supabase } from '@/lib/supabase'

interface CoachWaitlistSignupData {
  firstName: string
  lastName: string
  email: string
  role: string
  clientCount: string
  updates: boolean
}

export async function submitCoachWaitlistSignup(data: CoachWaitlistSignupData) {
  if (!supabase) {
    throw new Error('Supabase is not configured')
  }

  try {
    console.log('📝 Submitting trainer waitlist signup:', data.email);
    
    const { data: result, error } = await supabase.functions.invoke('coachSignupWaitlist', {
      body: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        role: data.role,
        clientCount: data.clientCount,
        updates: data.updates,
      },
    });

    if (error) {
      console.error('Edge Function error:', error);
      throw error;
    }

    if (!result?.success) {
      throw new Error(result?.error || 'Failed to join coach waitlist');
    }

    console.log('✅ Successfully joined coach waitlist');
    return result;
  } catch (error) {
    console.error('Error submitting coach waitlist signup:', error);
    throw error;
  }
}