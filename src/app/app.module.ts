import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';

import { HdevLogoComponent } from './logo.component';

import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    HdevLogoComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  entryComponents: []
})
export class AppModule {
  ngDoBootstrap() {}
}
