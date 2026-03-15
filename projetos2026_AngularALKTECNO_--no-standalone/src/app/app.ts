import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit, OnChanges, DoCheck {
  title = 'Angular_2026';

  constructor() {
    console.log('componente no construtor...');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck executado...');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges executado...', changes);
  }

  ngOnInit(): void {
    console.log('componente iniciado...');
  }

  mudarTexto() {
    this.title += '6';
  }
}