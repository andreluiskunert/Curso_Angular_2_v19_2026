import { AfterContentInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit, OnChanges, DoCheck, OnDestroy , AfterContentInit{
   frase: string = 'Curso Angular 2 v19 - 2026...bora construir um projeto incrível!';

  ngAfterContentInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  protected readonly title = signal('projeto_Angular_2026');

  ngOnInit(): void {
    console.log('App iniciado com sucesso!');
  }

  ngOnChanges(_changes: SimpleChanges): void {
    console.log('OnChanges chamado');
    this.title.update(v => v + 'a');
  }

  ngDoCheck(): void {
    console.log('DoCheck chamado');
  }

  mudarTexto() {
    this.title.update(v => v + 'a');
  }
  //  Quarta-feira, 19 de junho de 2024 - 19:52:00 h+|-
  //  Interpolação: {{ frase() }}
  // property binding: [innerText]="frase()"
  imgUrl:string = 'https://cdn.hashnode.com/res/hashnode/image/upload/v1701608958772/rx0OQPPos.png';
  // Two-way data binding: <input [(ngModel)]="frase">

}

