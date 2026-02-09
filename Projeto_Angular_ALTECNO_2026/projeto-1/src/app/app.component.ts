import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
// import { SexoPipe } from './pipes/sexo.pipe';
// import { ToolbarComponent } from "./componentes/toolbar/toolbar.component"; // 👈 IMPORT DO PIPE

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    // ToolbarComponent
],
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {

  title: string = 'ben-vindos ao treinamento de desenvolvimento Angular';
  nome: string = 'desenvolvedor André Luis Kunert';
  imgUrl: string = 'https://img-c.udemycdn.com/course/750x422/6269961_7859_8.jpg';
  frase: string = 'Angular é o melhor framework de desenvolvimento front-end do mercado';

 

  constructor() {}

  chamarFuncao() {
    console.log('Função chamada!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Component OnChanges', changes);
  }

  ngOnInit(): void {
    console.log('Processando daods....');
    this.title = 'bem-vindos ao treinamento de desenvolvimento Angular';
  }
}
