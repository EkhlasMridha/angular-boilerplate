import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CoreService } from '@core/services/core.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Input() drawerOpen!: boolean;
  @Output() menuButton: EventEmitter<MouseEvent> = new EventEmitter();

  constructor(private router: Router, private coreService: CoreService) {
    this.coreService.loadIcons(['signout', 'menu-toggle', 'profile']);
  }

  openDrawer(event: MouseEvent) {
    this.menuButton.emit(event);
  }

  onSignOut() {
    this.coreService.tokenService.removeToken();
    this.router.navigate(['/signin']);
  }

  async onChangePassword() {}
}
