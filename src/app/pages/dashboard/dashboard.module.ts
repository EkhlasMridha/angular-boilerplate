import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { SharedMaterialModule } from '@shared/shared-material.module';
import { HomeComponent } from './components/home/home.component';

const routes: AppRoutes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      pageName: 'Dashboard',
    },
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    SharedMaterialModule,
    MatTableModule,
    RouterModule.forChild(routes),
  ],
})
export class DashboardModule {}
