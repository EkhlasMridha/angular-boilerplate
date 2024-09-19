import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopToolbarComponent } from './top-toolbar.component';
import { AppLogoComponent } from '@materials/app-logo/app-logo.component';
import { ContentComponent } from 'layouts/content/content.component';

@NgModule({
  declarations: [TopToolbarComponent],
  imports: [CommonModule, AppLogoComponent, ContentComponent],
  exports: [TopToolbarComponent],
})
export class TopToolbarModule {}
