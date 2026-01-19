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
      sexo: 'Masculino',
      idade: '43 anos',
      profissao: 'Dev Full Stack JavaScript'
    },
    {
      nome: 'Luis André',
      sexo: 'Masculino',
      idade: '44 anos',
      profissao: 'Dev Full Stack Python'
    },
    {
      nome: 'Luis Carlos',
      sexo: 'Masculino',
      idade: '45 anos',
      profissao: 'Q.A'
    },
    {
      nome: 'Luis Antônio',
      sexo: 'Masculino',
      idade: '42 anos',
      profissao: 'Dev Full Stack PHP'
    },
  ];

  constructor() {}

  // chamarFuncao() {
  //   alert('Continue estudando Angular!');
  // }
}
