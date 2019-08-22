import {Component} from '@angular/core';

@Component({
  selector: 'hdev-logo',
  template: `
    <img width="300" alt="Logo" src="../assets/hdevs-logo.png">
    <h1>{{title}}</h1>
  `
})

export class HdevLogoComponent {
  title = 'Hero Devs';
}
