import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Toobar } from './componentes/toobar/toobar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, Toobar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'angular_2026';
  frase = 'Bora Codar Angular';
  imgUrl = 'https://miro.medium.com/v2/resize:fit:1400/1*WWRm1tIQ5MinLE0rUTo62w.png';
  MaisFrase = '';
  fraseIF = 'Bora Estudar Estruturas em Angular';

  chamarFuncao() {
    console.log('Este é um click');
  }
}