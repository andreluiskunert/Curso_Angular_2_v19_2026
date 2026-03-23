import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SexoPipe } from '../../pipes/sexo-pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SexoPipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  clientes = [
    {
      nome: 'André Luis',
      idade: 43,
      sexo: 'm',
      profissao: 'Desenvolvedor Full Stack Java+AI',
      salario: 175000
    },
    {
      nome: 'Luis Carlos',
      idade: 43,
      sexo: 'm',
      profissao: 'Analista de Q.A',
      salario: 145000
    },
    {
      nome: 'Antônio Marcos',
      idade: 40,
      sexo: 'm',
      profissao: 'Desenvolvedor Full Stack Python',
      salario: 158000
    },
    {
      nome: 'Adriana Luisa',
      idade: 43,
      sexo: 'f',
      profissao: 'Desenvolvedor Full Stack JavaScript',
      salario: 159000
    }
  ];
}