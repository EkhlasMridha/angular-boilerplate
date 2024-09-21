import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { TokenService } from 'utility-services/token.service';
import { Router } from '@angular/router';
import { TokenDataType } from 'types/common.types';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService, private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.tokenService.getToken()) {
      request = this.addToken(request, this.tokenService.getToken());
    }
    return next.handle(request).pipe(
      catchError((res: HttpErrorResponse) => {
        if (
          res instanceof HttpErrorResponse &&
          res.status === 401 &&
          this.tokenService.hasToken()
        ) {
          this.tokenService.removeToken();
          this.router.navigate(['/signin']);
        }
        if (res instanceof ErrorEvent) {
          return throwError(() => new Error(JSON.stringify(res)));
        }
        const errorData = res.error;

        return throwError(() => new Error(JSON.stringify(errorData)));
      })
    );
  }

  private addToken(
    request: HttpRequest<any>,
    token: TokenDataType
  ): HttpRequest<any> {
    if (!request.url.endsWith('refresh')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      });
    }

    return request;
  }
}
