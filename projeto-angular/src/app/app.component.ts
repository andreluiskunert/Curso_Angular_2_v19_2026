import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnChanges {
  title = 'projeto-angular';
  constructor(){
    console.log('Componente construtor')
  }
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.')
    console.log('Component Onchanges')
  }
  ngOnInit(): void {
    console.log('Component OnInit')
  }
}
