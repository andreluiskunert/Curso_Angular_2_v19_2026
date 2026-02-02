import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SexoPipe } from '../../pipes/sexo.pipe'; // ajuste o caminho se necessário

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SexoPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  title: string = 'Página Home';

  clientes = [
    {
      nome: 'Andre Luis',
      sexo: 'm',
      idade: 45,
      profissao: 'Dev Full Stack',
      salario: 150000
    },
    {
      nome: 'Luis Carlos',
      sexo: 'm',
      idade: 43,
      profissao: 'Impressor',
      salario: 50000
    },
    {
      nome: 'Antonio Luis',
      sexo: 'm',
      idade: 45,
      profissao: 'Q.A',
      salario: 10000
    },
    {
      nome: 'Aderson Carlos',
      sexo: 'm',
      idade: 45,
      profissao: 'Suporte',
      salario: 1500
    },
    {
      nome: 'Ana Carlos',
      sexo: 'f',
      idade: 45,
      profissao: 'ADM',
      salario: 3500
    }
  ];

}
