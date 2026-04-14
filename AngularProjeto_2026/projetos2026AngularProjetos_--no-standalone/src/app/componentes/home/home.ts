import { Component } from '@angular/core';
import { CurrencyPipe, JsonPipe, UpperCasePipe, NgFor } from '@angular/common';
import { SexoPipe } from './pipes/sexo-pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    UpperCasePipe,
    JsonPipe,
    CurrencyPipe,
    SexoPipe,
    NgFor
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  clientes = [
    {
      nome: 'Andrerson Luis',
      idade: 48,
      profissao: 'Engenheiro de Software',
      sexo: 'm',
      salario: 256000,
    },
    {
      nome: 'Ana Luisa',
      idade: 46,
      profissao: 'Analista de Sistemas',
      sexo: 'f',
      salario: 215000,
    },
    {
      nome: 'Luana Marques',
      idade: 46,
      profissao: 'Web Designer',
      sexo: 'f',
      salario: 125000,
    },
    {
      nome: 'André Luis',
      idade: 46,
      profissao: 'Dev Full Stack Java',
      sexo: 'm',
      salario: 156000,
    },
  ];
}