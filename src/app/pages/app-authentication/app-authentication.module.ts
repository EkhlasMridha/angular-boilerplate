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
import { noAuthGuard } from 'route-guards/auth-guard.guard';
import { AppLogoComponent } from '@materials/app-logo/app-logo.component';
import { AppRoutes } from 'types/common.types';
import { MatRadioModule } from '@angular/material/radio';
import { DurationPipe } from '@materials/pipes/duration.pipe';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';

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
    DurationPipe,
    NgxMatIntlTelInputComponent,
  ],
})
export class AppAuthenticationModule {}
