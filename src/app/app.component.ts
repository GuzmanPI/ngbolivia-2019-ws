import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <h1>Angular Elements de Zero a Héroe</h1>
      
      <img width="300" alt="NG Bolivia Logo" src="../assets/ng-bo.png">

      <h2>Israel Guzman</h2>
      <a target="_blank"
         href="https://twitter.com/israelgp4"
         color="primary"
         mat-mini-fab aria-label="Example icon-button with a heart icon">
        <mat-icon svgIcon="twitter"></mat-icon>
      </a>
      <h2>@israelgp4</h2>
    </div>
  `
})
export class AppComponent {
}
