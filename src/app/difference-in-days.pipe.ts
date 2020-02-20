import { Pipe, PipeTransform } from '@angular/core';
import { format, differenceInDays, parse, parseISO } from 'date-fns';

@Pipe({
  name: 'differenceInDays'
})
export class DifferenceInDaysPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const today = format(
      new Date(),
      'mm/dd/yyyy'
    );
    const dif = differenceInDays(parse(today, 'mm/dd/yyyy', new Date()), parse(format(parseISO(value), 'mm/dd/yyyy'), 'mm/dd/yyyy', new Date()));
    if (dif > 1) {
      return dif + ' days ago';
    } else if (dif === 1) {
      return dif + ' day ago';
    } else {
      return 'today';
    }
  }

}
