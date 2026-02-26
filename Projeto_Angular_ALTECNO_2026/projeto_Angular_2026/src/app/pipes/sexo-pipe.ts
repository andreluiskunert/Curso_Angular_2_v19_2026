import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexo',
  standalone: true
})
export class SexoPipe implements PipeTransform {
  transform(valor: string): string {
    if (!valor) return '';
    const v = valor.toLowerCase();

    if (v === 'm' || v === 'masculino') return 'Masculino';
    if (v === 'f' || v === 'feminino') return 'Feminino';

    return valor; // fallback
  }
}