import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rootline-input',
  standalone: true,
  imports: [],
  templateUrl: './rootline-input.component.html',
  styleUrl: './rootline-input.component.scss',
  host: {
    class: 'rootline-input-container',
  },
  encapsulation: ViewEncapsulation.None,
})
export class RootlineInputComponent {}
