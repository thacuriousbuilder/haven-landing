
import { supabase } from '@/lib/supabase'

interface WaitlistSignupData {
  firstName: string
  lastName: string
  email: string
  goal: string
  updates: boolean
}

export async function submitWaitlistSignup(data: WaitlistSignupData) {
  try {
    console.log('📝 Submitting waitlist signup:', data.email);
    
    const { data: result, error } = await supabase.functions.invoke('signupWaitlist', {
      body: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        goal: data.goal,
        updates: data.updates,
      },
    });

    if (error) {
      console.error('Edge Function error:', error);
      throw error;
    }

    if (!result?.success) {
      throw new Error(result?.error || 'Failed to join waitlist');
    }

    console.log('✅ Successfully joined waitlist');
    return result;
  } catch (error) {
    console.error('Error submitting waitlist signup:', error);
    throw error;
  }
}