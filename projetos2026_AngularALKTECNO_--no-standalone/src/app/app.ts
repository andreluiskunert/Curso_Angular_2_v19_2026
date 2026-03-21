import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit, OnChanges, DoCheck, OnDestroy,
  AfterContentInit, AfterViewInit, AfterViewChecked {

  title = 'Bem vindo ao Treinamento Web com Angular_2026';
  frase = '';
  imgUrl = 'https://miro.medium.com/v2/resize:fit:1400/1*m4iKxbr4ecKNiIZ9zl37Ag@2x.jpeg';
  work!: '';

  constructor() {
    console.log('Componente no construtor...');
  }

  ngAfterViewInit(): void {
    console.log('Component AfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('Component AfterViewChecked');
  }

  ngAfterContentInit(): void {
    console.log('Component AfterContentInit');
  }

  ngOnDestroy(): void {
    console.log('Componente destruído...');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck executado...');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges executado...', changes);
  }

  ngOnInit(): void {
    console.log('Componente iniciado...');
  }

  mudarTexto() {
    this.title += ' 6';
  }
  clientes =[
    {
      nome: 'André Luis ',
      Idade: 43,
      Sexo: 'Masculino',
      Profissao: 'Desenvoledor Full Stack Java+AI ',
      Salario: 175000
    },
       {
      nome: 'Luis Carlos ',
      Idade: 43,
      Sexo: 'Masculino',
      Profissao: 'Analista de Q.A ',
       Salario: 145000
    },
       {
      nome: 'Antônio Marcos' ,
      Idade: 40,
      Sexo: 'Masculino',
      Profissao: 'Desenvoledor Full Stack Python ',
       Salario: 158000
    },
       {
      nome: 'Adriana Luisa ',
      Idade: 43,
      Sexo: 'Feminina',
      Profissao: 'Desenvoledor Full Stack JavaScript ',
       Salario: 159000
    },
  ]
}