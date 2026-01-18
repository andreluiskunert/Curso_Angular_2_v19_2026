
//   //  4 tipos de data binding:
//   //  1ª Interpolação {{title}}
//   //  2ª Property bind <img [src]="imgUrl">
//   // 3ª Event bnding <button (click)="chamarFuncao()">
//   // 4ª Two-way databinding <input [(ngModel)]="title">

// }
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule   // ✅ necessário para ngModel
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'Bem Vindo ao treinamento de Angular';

  imgUrl = 'https://img-c.udemycdn.com/course/750x422/6269961_7859_8.jpg';
  
  constructor(){

  }

  // chamarFuncao() { 
  //   alert('Continue estudando  Angular!');
  // }
  //  Sabado, 17/01/2026_de noite
  // if/else/switch/case
  // 1ª ngIF-> usamos pra exibir ou ocultar elementos;
  // 2ª ngSwitch -> 
  


}
