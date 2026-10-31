import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

export type Modality = 'presencial' | 'online';
export type PreferredSchedule = 'manana' | 'tarde' | 'noche' | 'fin_de_semana';

export interface EnrollmentInput {
  full_name: string;
  email: string;
  phone: string;
  modality: Modality;
  preferred_schedule: PreferredSchedule;
}

@Injectable({ providedIn: 'root' })
export class EnrollmentService {
  private readonly supabase: SupabaseClient = createClient(
    environment.supabaseUrl,
    environment.supabaseAnonKey,
  );

  async submit(enrollment: EnrollmentInput): Promise<void> {
    const { error } = await this.supabase.from('course_enrollments').insert(enrollment);
    if (error) {
      throw error;
    }
  }
}
