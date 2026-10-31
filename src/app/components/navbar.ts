import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
})
export class Navbar {
  readonly menuOpen = signal(false);
}
