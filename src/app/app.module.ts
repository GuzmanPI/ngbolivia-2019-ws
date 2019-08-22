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
  entryComponents: [HdevLogoComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(HdevLogoComponent, { injector });
    customElements.define('hdev-logo-el', el);
  }

  ngDoBootstrap() {}
}
