import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  logo = 'ng-bo';
  showComponent = false;

  toggle() {
    this.showComponent = !this.showComponent;
    this.setLog();
  }

  private setLog() {
    console.log(this.showComponent);

    if (!this.showComponent) {
      this.logo = 'ng-bo';
    } else {
      this.logo = 'hdevs-logo';
    }
  }
}
