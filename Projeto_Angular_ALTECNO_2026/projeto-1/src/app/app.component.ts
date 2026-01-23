// import { AfterContentInit, Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   title = 'Bem ao treinamento de Angular';
//   imgUrl= "https://img-c.udemycdn.com/course/750x422/6269961_7859_8.jpg";
//   constructor(){
 
//   }
//   chamarFuncao(){
//     console.log("esse é um click...")
//   }
//  // 4 tipos de data Bindin:
//   // inpterpolação
//   // Property bind <img [src]="imgUrl">
//   //  Event bind <button (click)="chamarFuncao"></button>
//   //  Two-way databinding [(ngModel)]="title"



// }
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
  templateUrl: './app.component.html'
})
export class AppComponent {

  title: string = 'Projeto Angular ALTECNO 2026';
  nome: string = '';
  imgUrl: string = 'https://via.placeholder.com/300';

  chamarFuncao() {
    console.log('Função chamada!');
  }
}
