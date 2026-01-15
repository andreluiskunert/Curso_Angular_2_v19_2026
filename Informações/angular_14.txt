import { AfterContentInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit {
  title = 'projeto-angular';
  constructor(){
    console.log('Componente construtor')
  }
  ngOnDestroy(): void {
    throw new Error('Method not implement.')
  }
  ngAfterContentInit(): void {
    console
  }
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.')
    console.log('Component Onchanges')
  }
  ngOnInit(): void {
    console.log('Component OnInit')
    // Quarta-feira,14/01/2026
    this.title = 'Bora La Codar ';
  }
  ngDoCheck(): void {
    console.log('Component DoCheck')
  }
  mudarTexto(){
    this.title +=', Angular'
  }
}
