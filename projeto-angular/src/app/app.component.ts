import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,   // ✅ OBRIGATÓRIO para *ngFor, *ngIf
    RouterOutlet,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  imgUrl = 'https://img-c.udemycdn.com/course/750x422/6269961_7859_8.jpg';

  title: string = ''; // ⚠️ melhor tipar

  clientes = [
    {
      nome: 'André Luis',
      sexo: 'M',
      idade: 43,
      profissao: 'Dev Full Stack JavaScript',
      salario: '140000'
    },
    {
      nome: 'Luis André',
      sexo: 'M',
      idade: '44 anos',
      profissao: 'Dev Full Stack Python',
      salario:'125000'
    },
    {
      nome: 'Luis Carlos',
      sexo: 'M',
      idade: 45 ,
      profissao: 'Q.A',
      salario: '110000'
    },
    {
      nome: 'Luis Antônio',
      sexo: 'M',
      idade: 42,
      profissao: 'Dev Full Stack PHP',
      salario: '10000'
    },
  ];

  constructor() {}

  // chamarFuncao() {
  //   alert('Continue estudando Angular!');
  // }
}
