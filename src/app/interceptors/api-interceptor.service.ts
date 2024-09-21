import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreService } from 'utility-services/core.service';
import { DomainService } from 'utility-services/domain.service';
import { ensureTailingSlash } from 'app-utils/string.utils';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiInterceptorService implements HttpInterceptor {
  private counter: number = 0;
  constructor(private coreService: CoreService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.search(/^.*(.svg)$/) >= 0) {
      return next.handle(req);
    }

    let targetEndpoint =
      ensureTailingSlash(DomainService.domains.apiHost) +
      req.url.replace(/^\/+/g, '');
    let request = req.clone({
      url: targetEndpoint,
    });

    return next.handle(request);
  }
}
