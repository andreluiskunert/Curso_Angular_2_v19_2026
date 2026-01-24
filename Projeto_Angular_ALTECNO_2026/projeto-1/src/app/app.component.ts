

 import { Component } from '@angular/core';
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


export class AppComponent {

  title: string = 'Projeto Angular ALTECNO 2026';
  nome: string = '';
  imgUrl: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN2US6o96hwPPpRSKcuTs9eVzH2nV1eM5IHg&s';

  chamarFuncao() {
    console.log('Função chamada!');
  }
}
