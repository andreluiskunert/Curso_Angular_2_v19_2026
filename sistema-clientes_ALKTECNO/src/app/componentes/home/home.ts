import { Component } from '@angular/core';
import {
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgFor,
  UpperCasePipe,
  CurrencyPipe,
  JsonPipe
} from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgFor,
    UpperCasePipe,
    CurrencyPipe,
    JsonPipe,
    FormsModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  frase = 'Bora Codar Angular';
  imgUrl = 'https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif';
  MaisFrase = '';
  fraseIF = 'Bora Estudar Estruturas em Angular';

  clientes = [
    {
      nome: 'André Luis',
      sexo: 'm',
      idade: 43,
      profissao: 'Dev Full Stack',
      salario: 150000,
    },
    {
      nome: 'Luis Carlos',
      sexo: 'm',
      idade: 43,
      profissao: 'Q.A',
      salario: 140000,
    },
    {
      nome: 'Antônio Luis',
      sexo: 'm',
      idade: 43,
      profissao: 'Dev Full Stack Python',
      salario: 155000,
    },
    {
      nome: 'Ana Luisa',
      sexo: 'F',
      idade: 35,
      profissao: 'Dev Full Stack Java',
      salario: 150000,
    },
  ];

  chamarFuncao() {
    alert('Evento chamado com sucesso!');
  }
}