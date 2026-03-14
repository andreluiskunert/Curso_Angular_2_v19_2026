import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit, OnChanges {
  title = 'Angular_2026';

  constructor() {
    console.log('componentes de construtor...');
  } 
  // Fazer de noite
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
    console.log('bora ')
  }

  ngOnInit(): void {
    console.log('componente iniciado...');
  }
}