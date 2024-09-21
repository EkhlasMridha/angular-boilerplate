import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutePaths } from 'app-utils/routes.const';
import { RootComponent } from 'root/root.component';
import { authGuard, noAuthGuard } from './route-guard.guard';
import { RouterModule } from '@angular/router';

const routes: AppRoutes = [
  {
    path: RoutePaths.empty,
    data: {
      layout: 'side_nav',
    },
    canActivateChild: [authGuard],
    canActivate: [authGuard],
    children: [
      {
        path: RoutePaths.empty,
        pathMatch: 'full',
        redirectTo: '/' + RoutePaths.dashboard,
      },
      {
        path: RoutePaths.dashboard,
        loadChildren: () =>
          import('pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
    ],
  },
  {
    path: RoutePaths.empty,
    canActivate: [noAuthGuard],
    data: {
      layout: 'empty',
    },
    loadChildren: () =>
      import('pages/app-authentication/app-authentication.module').then(
        (m) => m.AppAuthenticationModule
      ),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RootlineRouterModule {}
