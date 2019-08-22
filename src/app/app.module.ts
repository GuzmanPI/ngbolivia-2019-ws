import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import { createCustomElement } from '@angular/elements';

import { HdevLogoComponent } from './logo.component';

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
  entryComponents: [HdevLogoComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(HdevLogoComponent, { injector });
    customElements.define('hdev-logo-el', el);
  }

  ngDoBootstrap() {}
}
