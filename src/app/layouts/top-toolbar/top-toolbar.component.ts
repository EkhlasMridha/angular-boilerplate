import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '@core/services/token.service';
import { AuthService } from 'http-services/auth.service';

@Component({
  selector: 'top-toolbar-layout',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.scss'],
})
export class TopToolbarComponent {
  constructor(private tokenService: TokenService, private router: Router) {}
  onLogout() {
    this.tokenService.removeToken();
    this.router.navigate(['/signin']);
  }
}
