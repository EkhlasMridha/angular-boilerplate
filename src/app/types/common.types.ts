import type { Data, Route } from '@angular/router';

declare global {
  interface EventType<T extends EventTarget> extends Event {
    target: T;
  }

  type AppLayoutType = 'empty' | 'side_nav';
  type RouteDataType = {
    pageName?: string;
    layout?: AppLayoutType;
  } & Data;

  interface AppRoute extends Omit<Route, 'data'> {
    data?: RouteDataType;
  }
  type AppRoutes = AppRoute[];
}

export interface TokenDataType {
  accessToken: string;
}

export interface NavigationList {
  name: string;
  route: string;
  matIcon?: string;
  svgIcon?: string;
}

export interface SelectOptionType<V> {
  label: string;
  value: V;
}

export interface JwtDataPayload {
  uId: string;
  nbf: number;
  exp: number;
  iat: number;
}

export interface PaginatedData<T> {
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  data: T[];
}

export interface ActionType<DT> {
  label: string;
  icon?: string;
  color?: 'warn' | 'primary' | 'accent';
  onAction: (param?: DT) => void;
}
