import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from '../content/content.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SideDrawerComponent } from './components/side-drawer/side-drawer.component';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { AppLogoComponent } from '@shared/app-logo/app-logo.component';

@NgModule({
  declarations: [ToolbarComponent, SideDrawerComponent],
  exports: [SideDrawerComponent],
  imports: [
    CommonModule,
    ContentComponent,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    MatRippleModule,
    MatMenuModule,
    AppLogoComponent,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class VerticalNavLayoutModule {}
