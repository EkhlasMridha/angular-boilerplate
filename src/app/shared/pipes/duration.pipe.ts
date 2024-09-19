import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true,
})
export class DurationPipe implements PipeTransform {
  transform(durationInMonth: number): unknown {
    let formattedValue = durationInMonth;
    let carryPart = 0;
    let carrySuffix = '';
    let suffixText = 'month';
    if (durationInMonth >= 12) {
      formattedValue = Math.floor(formattedValue / 12);
      carryPart = durationInMonth % 12;
      suffixText = 'year';
    }

    let prepareText = [
      formattedValue,
      formattedValue === 1 ? suffixText : suffixText + 's',
    ];
    if (formattedValue === 1) {
      prepareText.shift();
    }

    if (carryPart > 0) {
      carrySuffix = carryPart > 1 ? 'months' : 'month';
      prepareText = prepareText.concat([carryPart, carrySuffix].join(' '));
    }

    return prepareText.join(' ');
  }
}
