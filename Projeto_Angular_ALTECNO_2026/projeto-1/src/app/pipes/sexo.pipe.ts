import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexo',
  standalone: true
})
export class SexoPipe implements PipeTransform {

  transform(valor: string | null | undefined): string {

    if (!valor) {
      return 'Não informado';
    }

    const sexo = valor.trim().toLowerCase(); // 👈 AQUI está a correção

    if (sexo === 'm') {
      return 'Masculino';
    }

    if (sexo === 'f') {
      return 'Feminino';
    }

    return 'Não informado';
  }
}
