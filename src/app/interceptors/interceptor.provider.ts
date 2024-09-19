import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptorService } from './api-interceptor.service';
import { TokenInterceptor } from './token.interceptor';

interface Providers {
  provide: any;
  useClass: any;
  multi: boolean;
}

export const InterceptorProvider: Providers[] = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptorService,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
  },
];
