import { Component } from '@angular/core';
import { DomainService } from 'utility-services/domain.service';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './app-logo.component.html',
  styleUrl: './app-logo.component.scss',
})
export class AppLogoComponent {
  appLogoName = DomainService.domains.appName;
}
