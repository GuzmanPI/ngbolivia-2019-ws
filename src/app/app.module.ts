import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material';

import { EotmComponent } from './eotm.component';

import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    EotmComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatCardModule
  ],
  providers: [],
  entryComponents: [EotmComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(EotmComponent, { injector });
    customElements.define('eotm-el', el);
  }

  ngDoBootstrap() {}
}
