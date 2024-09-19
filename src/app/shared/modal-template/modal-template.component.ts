import { Component, Input } from '@angular/core';

@Component({
  selector: 'modal-template',
  standalone: true,
  imports: [],
  templateUrl: './modal-template.component.html',
  styleUrl: './modal-template.component.scss',
})
export class ModalTemplateComponent {
  @Input() background: string = 'primary-background';
  @Input() footerAlign: 'center' | 'end' | 'start' | false = 'end';

  classMap = new Map([
    ['center', 'justify-center'],
    ['end', 'justify-end'],
    ['start', 'justify-start'],
    ['default', ''],
  ]);

  currentAlignment = this.classMap.get(this.footerAlign || 'default');
  constructor() {}
}
