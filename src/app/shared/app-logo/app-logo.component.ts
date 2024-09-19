import { Component } from '@angular/core';
import { DomainService } from '@core/services/domain.service';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './app-logo.component.html',
  styleUrl: './app-logo.component.scss',
})
export class AppLogoComponent {
  appLogo = DomainService.domains.appName;
}
