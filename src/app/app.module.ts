import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { HdevLogoComponent } from './logo.component';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    HdevLogoComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  entryComponents: [HdevLogoComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(HdevLogoComponent, { injector });
    customElements.define('hdev-logo-el', el);
  }

  // ngDoBootstrap() {}
}
