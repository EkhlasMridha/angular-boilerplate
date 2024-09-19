import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'timeonly',
  standalone: true,
})
export class TimeonlyPipe implements PipeTransform {
  transform(date: Date | string): unknown {
    if (!date) return '';
    return formatDate(
      date,
      'hh:mm aa',
      new Intl.NumberFormat().resolvedOptions().locale
    );
  }
}
