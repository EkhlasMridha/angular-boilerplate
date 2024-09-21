import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from 'root/app.config';
import { environment } from './environments/environment';
import { RootModule } from 'root/root.module';
import { addBootstrapToModule } from '@angular/cdk/schematics';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

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

platformBrowserDynamic()
  .bootstrapModule(RootModule)
  .catch((err) => console.error(err));
