import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [],
  exports: [MatButtonModule, MatIconModule, MatCardModule],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class SharedMaterialModule {}
