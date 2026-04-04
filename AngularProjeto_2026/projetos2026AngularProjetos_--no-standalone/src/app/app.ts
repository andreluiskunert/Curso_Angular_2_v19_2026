import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, signal, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentChecked, AfterContentInit, AfterViewInit {

  title = 'Projeto01';
  frase = "Bora Lá Codar";
  imgUrl ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXp1flh-OGNg9PE2jrCKDgz4MylF8BZ5TmXA&s";
  constructor(){
    console.log('componente construtor')
  }
  ngAfterViewInit(): void {
    console.log('Aqui tem componente AfterViewInit');
  }
  ngAfterContentInit(): void {
    console.log('Aqui tem componente AfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('Aqui tem componente AfterContentChecked');
  }
  ngOnDestroy(): void {
    console.log('Componente destruído');
  }
  ngDoCheck(): void {
    console.log('Aqui tem componente DoCheck');
  }
   mudartexto(){
    this.title += '1';
   }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Aqui tem componente OnChanges', changes);
    this.title = 'Novo Titulo';
  }
  ngOnInit(): void {
    console.log('Aqui tem componente OnInit');
  }
  // 4 Tipos de data binding:
  //  1ª Interpolação {{frase}};
  //  2ª Property Bind <img [src=]"imgUrl">
}
