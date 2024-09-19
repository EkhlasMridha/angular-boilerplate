import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { EmptyModule, VerticalNavLayoutModule } from 'layouts';
import { filter, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VerticalNavLayoutModule, EmptyModule],
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss',
})
export class RootComponent {
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  currentLayout: AppLayoutType = 'empty';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.onNavigationEndListener();
  }

  private onNavigationEndListener() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this._unsubscribeAll)
      )
      .subscribe((res) => {
        this.setCurrentLayout();
      });
  }

  private setCurrentLayout() {
    let route = this.activatedRoute;

    while (route.firstChild) {
      route = route.firstChild;
    }

    let paths = route?.pathFromRoot;

    paths.forEach((item) => {
      if ((item?.routeConfig?.data?.['layout'] ?? '') !== '') {
        if (this.currentLayout !== item?.routeConfig?.data?.['layout']) {
          this.currentLayout = item?.routeConfig?.data?.['layout'] ?? 'empty';
        }
      }
    });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}
