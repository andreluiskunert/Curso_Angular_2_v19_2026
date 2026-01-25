

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

  title: string = 'ola-angular';
  nome: string = '';
  imgUrl: string = 'https://img-c.udemycdn.com/course/750x422/6269961_7859_8.jpg';

  // chamarFuncao() {
  //   console.log('Função chamada!');
  // }
  constructor() {}
  //  sábado 24/012026_ de noite
  // ngIf...> usando complemento else, usamos pra exibir ou ocultar elementos tomada por decisões logicas
  // fazer de noite hoje
  // ngScwicht...> usado para tomar decisões mais complexas, com várias condições



}  