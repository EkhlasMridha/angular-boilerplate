import { Injectable, Inject, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DomainService {
  public static domains: typeof window.ServerConst;
  constructor(@Inject(PLATFORM_ID) platformId: string) {
    if (platformId == 'browser') {
      DomainService.domains = window.ServerConst;
    }
  }
}
