import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';

declare global {
  interface Window {
    ServerConst: typeof environment;
  }
  type HTMLElementEvent<T extends HTMLElement> = MouseEvent & {
    target: T;
  };
}

window.ServerConst = window.ServerConst || {};

if (environment.production) {
  enableProdMode();
}

if (window) {
  window.ServerConst = environment;
}

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
