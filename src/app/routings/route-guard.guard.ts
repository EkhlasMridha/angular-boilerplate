import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '@core/services/token.service';
import { RoutePaths } from 'app-utils/routes.const';

export const authGuard = () => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  if (tokenService.hasToken()) {
    return true;
  }

  router.navigate([RoutePaths.signIn]);
  return false;
};

export const noAuthGuard = () => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  if (tokenService.hasToken()) {
    router.navigate([RoutePaths.empty]);
    return true;
  }

  return true;
};
