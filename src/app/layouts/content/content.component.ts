import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [RouterModule],
  standalone: true,
})
export class ContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
