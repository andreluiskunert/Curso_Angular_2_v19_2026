// import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, signal, SimpleChanges } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App // implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit , AfterViewInit, AfterContentInit, AfterContentChecked
// {
//  title = 'angular_2026';
//  frase  = 'Bora Codar Angula';
//  imgUrl= "https://miro.medium.com/v2/resize:fit:1400/1*WWRm1tIQ5MinLE0rUTo62w.png"
//  MaisFrase = ''
//  constructor(){
//    console.log('compomente construtor')
//  }
//   // ngAfterContentChecked(): void {
//   //   throw new Error('Method not implemented.');
//   // }
//   // ngAfterViewInit(): void {
//   //   throw new Error('Method not implemented.');
//   //   console.log('Afternewninit')
//   // }
//   // ngAfterContentInit(): void {
//   //   throw new Error('Method not implemented.');
//   // }
//   // ngOnDestroy(): void {
//   //   throw new Error('Method not implemented.');
//   // }
//   // ngDoCheck(): void {
//   //   throw new Error('Method not implemented.');
//   // }
//   // ngOnChanges(changes: SimpleChanges): void {
//   //   throw new Error('Method not implemented.');
//   // }
//   // ngOnInit(): void {
//   //   throw new Error('Method not implemented.');
//   // }
//   // mudarTexto(){
//   //   this.title += 'A';
//   // ---///
//   //  4 tipos de data binging:
//   //  1ª interpolação -> {{title}}
//     chamarFuncao(){
//       console.log('Este é um click')
//     }
//   }

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'angular_2026';
  frase = 'Bora Codar Angular';
  imgUrl =
    'https://miro.medium.com/v2/resize:fit:1400/1*WWRm1tIQ5MinLE0rUTo62w.png';

  MaisFrase = '';

  constructor() {
    console.log('componente construtor');
  }

  chamarFuncao() {
    console.log('Este é um click');
  }
}
