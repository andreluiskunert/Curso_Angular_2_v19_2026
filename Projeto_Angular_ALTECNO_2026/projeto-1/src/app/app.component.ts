

 import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet
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
    nome:  'Andre Luis ',
    sexo:  'Masculino',
    idade:45,
    profissao:'Dev Full Stack',
    salario: '150000'
  },
   {
    nome:  'Luis Carlos',
    sexo:  'Masculino',
    idade:43,
    profissao:'Impressor',
     salario: '50000'
  },
   {
    nome:  'Antonio Luis ',
    sexo:  'Masculino',
    idade:45,
    profissao:'Q.A',
     salario: '10000'
  },
   {
    nome:  'Aderson Carlos',
    sexo:  'Masculino',
    idade:45,
    profissao:'Suporte',
     salario: '1500'
  },

  ]
  chamarFuncao() {
    console.log('Função chamada!');
  }
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
     throw new Error('Method not implemented.');
     console.log('Component OnChanges')
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.log('aqui tem OnInit')
    this.title = 'bem-vindos ao treinamento de desenvolvimento Angular'
  }
  //  sábado 24/012026_ de noite
  // ngIf...> usando complemento else, usamos pra exibir ou ocultar elementos tomada por decisões logicas
  // fazer de noite hoje
  // ngScwicht...> usado para tomar decisões mais complexas, com várias condições
  //---///---
//  Sábado, 31/01/2026_De tarde_Pipes



}  