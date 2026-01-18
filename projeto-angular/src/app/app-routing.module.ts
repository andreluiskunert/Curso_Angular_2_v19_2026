import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NgIf } from "../../node_modules/@angular/common/index";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Bem Vindo ao treinamento de Angulars';
}
