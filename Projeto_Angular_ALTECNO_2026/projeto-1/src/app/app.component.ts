import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SexoPipe } from './pipes/sexo.pipe'; // 👈 IMPORT DO PIPE

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    SexoPipe // 👈 PIPE REGISTRADO AQUI
  ],
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {

  title: string = '';
  nome: string = '';
  imgUrl: string = 'https://img-c.udemycdn.com/course/750x422/6269961_7859_8.jpg';

  clientes = [
    {
      nome: 'Andre Luis',
      sexo: 'm',
      idade: 45,
      profissao: 'Dev Full Stack',
      salario: '150000'
    },
    {
      nome: 'Luis Carlos',
      sexo: 'm',
      idade: 43,
      profissao: 'Impressor',
      salario: '50000'
    },
    {
      nome: 'Antonio Luis',
      sexo: 'm',
      idade: 45,
      profissao: 'Q.A',
      salario: '10000'
    },
    {
      nome: 'Aderson Carlos',
      sexo: 'm',
      idade: 45,
      profissao: 'Suporte',
      salario: '1500'
    },
    {
      nome: 'Ana Carlos',
      sexo: 'f',
      idade: 45,
      profissao: 'adm',
      salario: '3500'
    }
  ];

  constructor() {}

  chamarFuncao() {
    console.log('Função chamada!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Component OnChanges', changes);
  }

  ngOnInit(): void {
    console.log('aqui tem OnInit');
    this.title = 'bem-vindos ao treinamento de desenvolvimento Angular';
  }
}
