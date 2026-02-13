import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexo',
  standalone: true
})
export class SexoPipe implements PipeTransform {

  transform(valor: string): string {

    if (!valor) return '';

    switch(valor) {
      case 'M':
        return 'Masculino';

      case 'F':
        return 'Feminino';

      default:
        return valor;
    }
  }
}
