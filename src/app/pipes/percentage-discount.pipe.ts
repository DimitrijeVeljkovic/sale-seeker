import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentageDiscount'
})
export class PercentageDiscountPipe implements PipeTransform {

  transform(value: number): string {
    return `-${value}%`;
  }

}
