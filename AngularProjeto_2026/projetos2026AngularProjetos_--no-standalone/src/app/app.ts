import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, signal, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentChecked, AfterContentInit, AfterViewInit {

  title = 'Projeto01';
  frase = 'Bora Lá Codar';
  frase01 ='';
  frase02= 'codando...';
  imgUrl ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXp1flh-OGNg9PE2jrCKDgz4MylF8BZ5TmXA&s";
  chamarFuncao(){
    console.log("Esse é um click...")
  }
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
    this.title += '1';
   }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Aqui tem componente OnChanges', changes);
    this.title = 'Novo Titulo';
  }
  ngOnInit(): void {
    console.log('Aqui tem componente OnInit');
  }
  // 4 Tipos de data binding:
  //  1ª Interpolação {{frase}};
  //  2ª Property Bind <img [src=]"imgUrl">
  // obs.: Sabado,04/04/2026_De tarde
  // 3ª Event binding : "<button (click)="chamarFuncao()">Chamar Evento</button>"
  // 4ª Two-way databinding : "<input [(ngModel)]="frase"> "
//  -------++-------
//  Diretivas de decisão *ngIf *ngSwitch: Sabádo,04/04/2026_De noite 
// 1ª ngIf: utilizado pra complemento else,utilizamos pra exibir ou esconder elementos tomando decisões lógicas...
// 2ª ngSwitch: Comparação lógica na variavies 
// ---+---+-----
//  terça-feira,07/04/2026
//  Diretivas Estruturais:
//  ngFor

}
