import { NavigationList } from 'types/common.types';

export const RoutePaths = {
  empty: '',
  signIn: 'signin',
  signUp: 'signup',
  dashboard: 'dashboard',
  manage: 'manage',
};

export const APP_NAVIGATIONS: NavigationList[] = [
  {
    name: 'Dashboard',
    matIcon: 'dashboard',
    route: RoutePaths.dashboard,
  },
];
