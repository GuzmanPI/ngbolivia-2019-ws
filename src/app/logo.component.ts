import {Component, Input} from '@angular/core';

@Component({
  template: `
    <div style="text-align: center">
      <img width="300" alt="Logo" src="../assets/{{imgUrl}}.png">
      <h1>{{title}}</h1>
    </div>
  `
})

export class HdevLogoComponent {
  @Input()
  title: string;

  @Input()
  imgUrl: string;
}
