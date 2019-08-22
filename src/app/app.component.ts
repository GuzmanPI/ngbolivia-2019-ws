import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Angular Elements de Zero a Héroe';
  imgUrl = 'ng-bo';
  showComponent = false;

  ngOnInit(): void {
    this.setData();
  }

  toggle() {
    this.showComponent = !this.showComponent;
    this.setData();
  }

  private setData() {
    if (!this.showComponent) {
      this.title = 'Angular Elements de Zero a Héroe';
      this.imgUrl = 'ng-bo';
    } else {
      this.title = 'RxJs Live';
      this.imgUrl = 'rxjs-live-logo';
    }
  }
}
