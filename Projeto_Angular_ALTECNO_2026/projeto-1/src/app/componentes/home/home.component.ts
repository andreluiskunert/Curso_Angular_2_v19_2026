import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SexoPipe } from '../../shared/pipes/sexo.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SexoPipe
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  clientes = [
    {
      Nome: 'André Luis',
      Sexo: 'M',
      Idade: 45,
      Profissao: 'Dev Full Stack',
      salario: 15000,
    },
    {
      Nome: 'Maria Silva',
      Sexo: 'F',
      Idade: 30,
      Profissao: 'Analista de Sistemas',
      salario: 8000,
    },
    {
      Nome: 'João Santos',
      Sexo: 'M',
      Idade: 28,
      Profissao: 'Desenvolvedor Front-end',
      salario: 6000,
    }
  ];
}
