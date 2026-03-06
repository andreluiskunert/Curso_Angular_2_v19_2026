import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SexoPipe } from './pipes/sexo-pipe';
import { Toobar } from './componentes/toobar/toobar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, SexoPipe, Toobar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'angular_2026';
  frase = 'Bora Codar Angular';
  imgUrl = 'https://miro.medium.com/v2/resize:fit:1400/1*WWRm1tIQ5MinLE0rUTo62w.png';
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
    console.log('Este é um click');
  }
}