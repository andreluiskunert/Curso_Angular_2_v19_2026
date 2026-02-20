import { AfterContentInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App //implements OnInit, OnChanges, DoCheck, OnDestroy , AfterContentInit//
{
   frase: string = '';
   title = signal('projeto_Angular_2026');

  // ngAfterContentInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  // ngOnDestroy(): void {
  //   throw new Error('Method not implemented.');
  // }

  // protected readonly title = signal('projeto_Angular_2026');

  // ngOnInit(): void {
  //   console.log('App iniciado com sucesso!');
  // }

  // ngOnChanges(_changes: SimpleChanges): void {
  //   console.log('OnChanges chamado');
  //   this.title.update(v => v + 'a');
  // }

  // ngDoCheck(): void {
  //   console.log('DoCheck chamado');
  // }

  // mudarTexto() {
  //   this.title.update(v => v + 'a');
  // }
  //  Quarta-feira, 19 de junho de 2024 - 19:52:00 h+|-
  //  Interpolação: {{ frase() }}
  // property binding: [innerText]="frase()"
  imgUrl:string = 'https://img-c.udemycdn.com/course/240x135/6269961_7859_8.jpg';
  // Two-way data binding: <input [(ngModel)]="frase">
// ---//
// quinta-feira,19/02/2026 _de noite
// ngIf: *ngIf="frase"
// -//
clientes =[
  {
    nome: 'Andre Luis',
    sexo: 'Masculino',
    idade: 43,  
    profissao: 'Desenvolvedor Full Stack'
  }, 
   {
    nome: 'Antonio Carlos',
    sexo: 'Masculino',
    idade: 35,  
    profissao: 'Desenvolvedor Full Stack'
  }, 
   {
    nome: 'Alison Silva',
    sexo: 'Masculino',
    idade: 25,  
    profissao: 'Desenvolvedor Front-end'
  }, 
   {
    nome: 'Andre Luis',
    sexo: 'Masculino',
    idade: 30,  
    profissao: 'Desenvolvedor Full Stack'
  }, 
]
}
