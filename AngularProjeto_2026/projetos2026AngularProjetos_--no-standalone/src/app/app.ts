import { Component, DoCheck, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, OnChanges, DoCheck  {

  title = 'Projeto01';
  constructor(){
    console.log('componente construtor')
  }
  ngDoCheck(): void {
    console.log('Aqui tem componente DoCheck');
  }
   mudartexto(){
    this.title += 'Estudar Angular';
   }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Aqui tem componente OnChanges', changes);
    this.title = 'Novo Titulo';
  }
  ngOnInit(): void {
    console.log('Aqui tem componente OnInit');
  }

}
