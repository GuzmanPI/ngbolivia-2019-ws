import {Component, Input} from '@angular/core';

@Component({
  template: `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <div class="card">
      <img src="../assets/{{imgUrl}}" alt="John" style="width:100%">
      <h1>{{name}}</h1>
      <p class="title">COO & Co-founder</p>
      <p>Hero Devs</p>
      <a href="https://twitter.com/israelgp4"><i class="fa fa-twitter"></i></a>
    </div>
  `,
  styleUrls: ['./eotm.component.css']
})

export class EotmComponent {
  @Input()
  name: string;

  @Input()
  imgUrl: string;
}
