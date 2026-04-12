import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexo',
  standalone: true
})
export class SexoPipe implements PipeTransform {
  transform(valor: string): string {
    if (!valor) return 'Não informado';

    switch (valor.toLowerCase()) {
      case 'm':
      case 'masculino':
        return 'Masculino';
      case 'f':
      case 'feminino':
        return 'Feminino';
      default:
        return valor;
    }
  }
}