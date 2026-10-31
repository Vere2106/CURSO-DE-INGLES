import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EnrollmentService, Modality, PreferredSchedule } from '../services/enrollment.service';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';
type FormField = 'fullName' | 'email' | 'phone' | 'modality' | 'preferredSchedule';

@Component({
  selector: 'app-enrollment-form',
  imports: [ReactiveFormsModule],
  templateUrl: './enrollment-form.html',
})
export class EnrollmentForm {
  private readonly fb = inject(FormBuilder);
  private readonly enrollmentService = inject(EnrollmentService);

  readonly status = signal<SubmitStatus>('idle');

  readonly modalityOptions: { value: Modality; label: string; hint: string }[] = [
    { value: 'presencial', label: 'Presencial', hint: 'Clases en persona' },
    { value: 'online', label: 'Online', hint: 'Desde donde estés' },
  ];

  readonly scheduleOptions: { value: PreferredSchedule; label: string }[] = [
    { value: 'manana', label: 'Mañana' },
    { value: 'tarde', label: 'Tarde' },
    { value: 'noche', label: 'Noche' },
    { value: 'fin_de_semana', label: 'Fin de semana' },
  ];

  readonly form = this.fb.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(120)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(254)]],
    phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9\s-]{6,30}$/)]],
    modality: ['' as Modality | '', [Validators.required]],
    preferredSchedule: ['' as PreferredSchedule | '', [Validators.required]],
  });

  hasError(field: FormField): boolean {
    const control = this.form.controls[field];
    return control.touched && control.invalid;
  }

  async onSubmit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { fullName, email, phone, modality, preferredSchedule } = this.form.getRawValue();

    this.status.set('submitting');
    try {
      await this.enrollmentService.submit({
        full_name: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        modality: modality as Modality,
        preferred_schedule: preferredSchedule as PreferredSchedule,
      });
      this.form.reset();
      this.status.set('success');
    } catch {
      this.status.set('error');
    }
  }

  startNewEnrollment(): void {
    this.status.set('idle');
  }
}
