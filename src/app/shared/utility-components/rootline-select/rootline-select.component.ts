import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import {
  MatSelectModule,
  type MatSelectChange,
} from '@angular/material/select';
import type { SelectOptionType } from 'types/common.types';

@Component({
  selector: 'rootline-select',
  standalone: true,
  imports: [MatSelectModule],
  templateUrl: './rootline-select.component.html',
  styleUrl: './rootline-select.component.scss',
  host: {
    class: 'rootline-select-container',
  },
  encapsulation: ViewEncapsulation.None,
})
export class RootlineSelectComponent {
  @Input('options') optionList: SelectOptionType<any>[] = [];
  @Output('change') onChange = new EventEmitter<MatSelectChange>();
  @Input('placeholder') placeHolder = '';
  @Input() value: any;
  @Input() disabled = false;

  constructor() {}

  onChangeVal(event: MatSelectChange) {
    this.onChange.emit(event);
  }
}
