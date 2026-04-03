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
