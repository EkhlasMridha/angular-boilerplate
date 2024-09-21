import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IconService } from 'utility-services/icon.service';

@Component({
  selector: 'nodata',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './nodata.component.html',
  styleUrl: './nodata.component.scss',
})
export class NodataComponent {
  @Input() nodataText: string = 'No data';
  constructor(private iconService: IconService) {
    this.iconService.loadIcons(['nodata']);
  }
}
