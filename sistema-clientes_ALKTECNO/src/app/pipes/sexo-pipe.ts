import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexo',
  standalone: true
})
export class SexoPipe implements PipeTransform {

  transform(valor: string): string {

    if (valor?.toLowerCase() === 'm') {
      return 'Masculino';
    }

    if (valor?.toLowerCase() === 'f') {
      return 'Feminino';
    }

    return valor;
  }

}