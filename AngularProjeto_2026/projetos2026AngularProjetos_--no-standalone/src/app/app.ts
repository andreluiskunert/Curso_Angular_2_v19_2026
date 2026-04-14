import {
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgForOf,
  UpperCasePipe,
  LowerCasePipe,
  JsonPipe,
  CurrencyPipe
} from '@angular/common';

import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SexoPipe } from './pipes/sexo-pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgForOf,
    UpperCasePipe,
    // LowerCasePipe,
    JsonPipe,
    CurrencyPipe,
    SexoPipe
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentChecked, AfterContentInit, AfterViewInit {

  title = 'Projeto01';
  frase = 'Bora Lá Codar';
  frase01 = '';
  frase02 = 'codando...';
  imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXp1flh-OGNg9PE2jrCKDgz4MylF8BZ5TmXA&s";

  
  chamarFuncao() {
    console.log("Esse é um click...");
  }

  constructor() {
    console.log('componente construtor');
  }

  mudartexto() {
    this.title += '1';
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Aqui tem componente OnChanges', changes);
  }

  ngOnInit(): void {
    console.log('Aqui tem componente OnInit');
  }

  ngDoCheck(): void {
    console.log('Aqui tem componente DoCheck');
  }

  ngOnDestroy(): void {
    console.log('Componente destruído');
  }

  ngAfterContentChecked(): void {
    console.log('Aqui tem componente AfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('Aqui tem componente AfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log('Aqui tem componente AfterViewInit');
  }
}