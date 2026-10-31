import { Component } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.html',
})
export class CourseDetails {
  readonly benefits = [
    {
      title: '40 sesiones',
      description: 'Un programa completo y ordenado para avanzar con constancia.',
      icon: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5',
    },
    {
      title: '1 hora por sesión',
      description: 'Clases cortas y enfocadas que caben en tu rutina diaria.',
      icon: 'M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
    },
    {
      title: 'Horarios flexibles',
      description: 'Elige el turno que mejor se adapte a tus estudios o tu trabajo.',
      icon: 'M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM21 12c0 4.556-4.03 8.25-9 8.25a9.77 9.77 0 0 1-4.27-.97L3 20.25l1.2-3.6A7.7 7.7 0 0 1 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z',
    },
  ];

  readonly modalities = [
    {
      title: 'Presencial',
      description: 'Clases en persona con un grupo que te acompaña en cada sesión.',
    },
    {
      title: 'Online',
      description: 'Estudia desde donde estés, con el mismo programa y el mismo horario flexible.',
    },
  ];

  readonly schedules = ['Mañana', 'Tarde', 'Noche', 'Fin de semana'];
}
