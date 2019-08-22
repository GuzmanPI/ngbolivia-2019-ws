import {Component} from '@angular/core';

@Component({
  template: `
    <div style="text-align: center">

      <img width="300" alt="Logo" src="../assets/hdevs-logo.png">
      <h1>{{title}}</h1>
    </div>
  `
})

export class HdevLogoComponent {
  title = 'Hero Devs';
}
