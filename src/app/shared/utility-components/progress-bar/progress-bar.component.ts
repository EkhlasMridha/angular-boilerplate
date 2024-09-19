import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoaderService } from '@core/services/loader.service';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  standalone: true,
  imports: [MatProgressBarModule, CommonModule],
})
export class ProgressBarComponent {
  constructor(private loaderService: LoaderService) {}

  get loading() {
    return this.loaderService.loading;
  }
}
