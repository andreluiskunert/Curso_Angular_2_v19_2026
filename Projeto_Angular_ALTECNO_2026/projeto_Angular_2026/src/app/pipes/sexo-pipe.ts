import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexo',
  standalone: false,
})
export class SexoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value === 'm') {
      return 'Masculino';
    } else if (value === 'f') {
      return 'Feminino';
    }
    return value;
  }

}
