// import { Component } from "@angular/core";
// import { RouterOutlet } from "@angular/router";

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
// })
// export class AppComponent {
//   title = 'Bem Vindo ao treinamento de Angulars';
//   imgUrl = "https://www.altoros.com/blog/wp-content/uploads/2013/08/evaluation-of-angularjs-featured-image.png"
//   constructor(){

//   }
//   chamarFuncao(){
//     console.log("Esse é click...")
//   }
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

  title = 'Bem Vindo ao treinamento de Angulars';

  imgUrl = 'https://angular.io/assets/images/logos/angular/angular.png';

  chamarFuncao() {
    alert('Evento de clique funcionando!');
  }

}
