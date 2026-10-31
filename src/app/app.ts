import { Component } from '@angular/core';
import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import { CourseDetails } from './components/course-details';
import { EnrollmentForm } from './components/enrollment-form';
import { SiteFooter } from './components/site-footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, CourseDetails, EnrollmentForm, SiteFooter],
  templateUrl: './app.html',
})
export class App {}
