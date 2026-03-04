import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
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
      sexo: 'Masculino',
      idade: 43,
      profissao: 'Dev Full Stack'
    },
       {
      nome: 'Luis Carlos',
      sexo: 'Masculino',
      idade: 43,
      profissao: 'Q.A'
    },
       {
      nome: 'Antônio Luis',
      sexo: 'Masculino',
      idade: 43,
      profissao: 'Dev Full Stack Python'
    },
       {
      nome: 'Ana Luisa',
      sexo: 'Feminino',
      idade: 35,
      profissao: 'Dev Full Stack Java'
    },

  ]

  chamarFuncao() {
    console.log('Este é um click');
  }

}