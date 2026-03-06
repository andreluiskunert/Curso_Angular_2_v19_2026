import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexo',
})
export class SexoPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    // return 'Masculino';
    let sexo =  'm'; // M-> Masculino
    if(value === 'f') {
      sexo = 'f' // F-> Feminino
    }
    return sexo;
  }
}
