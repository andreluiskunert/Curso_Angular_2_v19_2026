import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NgIf, NgForOf } from "../../node_modules/@angular/common/index";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgForOf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Bem Vindo ao treinamento de Angulars';
}
