import { Component } from '@angular/core';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.html',
})
export class SiteFooter {
  readonly year = new Date().getFullYear();
}
