import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email = '';
  re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  getLeftPart() {
    return this.email.split('@')[0] || 'Nothing to show';
  }
  getRightPart() {
    return this.email.split('@')[1] || 'Nothing to show';
  }

  getHref() {
    return `mailto:${this.email}?subject=That was an easy task, Systaro!` || 'Nothing to show';
  }

  isValidEmail() {
    return this.re.test(String(this.email).toLowerCase());
  }
}
