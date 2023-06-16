import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringConverter'
})
export class StringConverterPipe implements PipeTransform {

  transform(value: string): string {
    const words: string[] = value.split('_');
    return words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

}
