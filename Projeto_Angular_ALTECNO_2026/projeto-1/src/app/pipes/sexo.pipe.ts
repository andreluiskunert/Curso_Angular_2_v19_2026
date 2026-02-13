import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexo',
  standalone: true
})
export class SexoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let sexo = 'Masculino';
    if (value === 'F') {
      sexo = 'Feminino';
    }
    return sexo;  
  }

}
