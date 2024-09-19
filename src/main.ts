import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from 'root/app.config';
import { RootComponent } from 'root/root.component';
import { environment } from './environments/environment';

declare global {
  interface Window {
    ServerConst: typeof environment;
  }
}

window.ServerConst = window.ServerConst || {};

if (environment.production) {
  enableProdMode();
}

if (window) {
  window.ServerConst = environment;
}

bootstrapApplication(RootComponent, appConfig).catch((err) =>
  console.error(err)
);
