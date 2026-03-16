import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit, AfterViewInit, AfterViewChecked {
  title = 'Angular_2026';

  constructor() {
    console.log('componente no construtor...');
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
    console.log('Component AfterViewInit')
  }
  ngAfterViewChecked(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterContentInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
    console.log('Estou...')
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