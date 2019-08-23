import {Component, Input} from '@angular/core';

@Component({
  template: `
    <mat-card class="employee-card">
      <mat-card-header>
        <div mat-card-avatar class="employee-header-image"
             [ngStyle]="{'background-image': 'url(assets/'  + imgUrl + ')'}"></div>
        <mat-card-title>{{name}}</mat-card-title>
        <mat-card-subtitle>🏅 Employee of the Month! 🏅</mat-card-subtitle>
      </mat-card-header>
    </mat-card>
  `,
  styleUrls: ['./eotm.component.css']
})

export class EotmComponent {
  @Input()
  name: string;

  @Input()
  imgUrl: string;
}
