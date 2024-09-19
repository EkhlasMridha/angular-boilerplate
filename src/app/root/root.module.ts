import { APP_INITIALIZER, NgModule, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainService } from '@core/services/domain.service';
import { InterceptorProvider } from 'interceptors/interceptor.provider';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { EmptyModule, VerticalNavLayoutModule } from 'layouts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@core/core.module';
import { ProgressBarComponent } from '@shared/utility-components/progress-bar/progress-bar.component';
import { RootComponent } from './root.component';
import { ConfimationModalModule } from '@shared/confimation-modal/confimation-modal.module';
import { RootlineRouterModule } from 'routings/rootline-router.module';

export function initializer(domainService: DomainService) {
  return () => {
    new Promise((resolve, reject) => {
      if (DomainService.domains) {
        resolve(domainService);
      }
    });
  };
}

@NgModule({
  declarations: [RootComponent],
  bootstrap: [RootComponent],
  imports: [
    CommonModule,
    VerticalNavLayoutModule,
    EmptyModule,
    BrowserAnimationsModule,
    EmptyModule,
    CoreModule,
    VerticalNavLayoutModule,
    ProgressBarComponent,
    ConfimationModalModule.forChild(),
    RootlineRouterModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [PLATFORM_ID, DomainService],
      multi: true,
    },
    InterceptorProvider,
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class RootModule {}
