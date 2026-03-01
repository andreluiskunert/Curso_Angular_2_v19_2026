import { Component, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnChanges{
 title = 'angular_2026';
 constructor(){
   console.log('compomente construtor')
 }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  mudarTexto(){
    this.title += 'A';
  }
}

