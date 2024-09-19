import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IconService } from '@core/services/icon.service';
import { NavTracerService } from '@core/services/nav-tracer.service';
import { Observable, map, shareReplay } from 'rxjs';
import { NavigationList } from 'types/common.types';

@Component({
  selector: 'verticle-layout',
  templateUrl: './side-drawer.component.html',
  styleUrls: ['./side-drawer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SideDrawerComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  activatedRoute: string = '';

  navigations: NavigationList[] = [];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private navTracer: NavTracerService,
    private iconService: IconService
  ) {
    const svgIconList = (this.navigations ?? [])
      .map((item) => item.svgIcon!)
      .filter((item) => !!item);
    this.iconService.loadIcons(svgIconList);
  }

  ngOnInit(): void {
    this.navTracer.routeReceiver.subscribe((res) => {
      this.activatedRoute = res;
    });
  }

  openDrawer(drawer: MatDrawer) {
    drawer.toggle();
  }
}
