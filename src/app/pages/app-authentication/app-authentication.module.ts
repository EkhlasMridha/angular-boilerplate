import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiginComponent } from './components/sigin/sigin.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthpageWrapperComponent } from './components/authpage-wrapper/authpage-wrapper.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsMaterialModule } from 'shared/forms-material.module';
import { SharedMaterialModule } from 'shared/shared-material.module';
import { MatRadioModule } from '@angular/material/radio';
import { noAuthGuard } from 'routings/route-guard.guard';
import { AppLogoComponent } from '@shared/app-logo/app-logo.component';

const routes: AppRoutes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'signin',
  },
  {
    path: 'signin',
    component: SiginComponent,
    data: {
      pageName: 'LogIn',
    },
    canActivate: [noAuthGuard],
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: {
      pageName: 'SignUp',
    },
    canActivate: [noAuthGuard],
  },
];

@NgModule({
  declarations: [SiginComponent, SignupComponent, AuthpageWrapperComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatProgressSpinnerModule,
    FormsMaterialModule,
    SharedMaterialModule,
    AppLogoComponent,
    MatRadioModule,
  ],
})
export class AppAuthenticationModule {}
