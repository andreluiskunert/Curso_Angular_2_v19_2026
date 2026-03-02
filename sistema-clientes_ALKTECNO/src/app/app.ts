import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, signal, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit , AfterViewInit, AfterContentInit, AfterContentChecked{
 title = 'angular_2026';
 constructor(){
   console.log('compomente construtor')
 }
  ngAfterContentChecked(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
    console.log('Afternewninit')
  }
  ngAfterContentInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngDoCheck(): void {
    throw new Error('Method not implemented.');
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

