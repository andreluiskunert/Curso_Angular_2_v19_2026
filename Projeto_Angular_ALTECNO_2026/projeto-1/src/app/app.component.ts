import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SexoPipe } from "./pipes/sexo.pipe";
// import { SexoPipe } from './pipes/sexo.pipe';
// import { ToolbarComponent } from "./componentes/toolbar/toolbar.component"; // 👈 IMPORT DO PIPE

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    SexoPipe
],
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {

  title: string = 'ben-vindos ao treinamento de desenvolvimento Angular';
  nome: string = 'desenvolvedor André Luis Kunert';
  imgUrl: string = 'https://img-c.udemycdn.com/course/750x422/6269961_7859_8.jpg';
  frase: string = '';
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
},
 ]


 

  constructor() {}

  chamarFuncao() {
    console.log('Função chamada!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Component OnChanges', changes);
  }

  ngOnInit(): void {
    console.log('Processando dados....');
    this.title = 'bem-vindos ao treinamento de desenvolvimento Angular';
  }
  // ngIF = "false" -> não renderiza o elemento
  // ngIF = "true" -> renderiza o elemento
  // <h1 *ngIf="frase"> {{frase }} </h1>

}
