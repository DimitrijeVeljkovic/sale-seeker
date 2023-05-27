import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceRsd'
})
export class PriceRsdPipe implements PipeTransform {

  transform(value: number): string {
    return `${value.toFixed(2)} RSD`;
  }

}
