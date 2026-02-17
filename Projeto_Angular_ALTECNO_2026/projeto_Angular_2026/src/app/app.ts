import { AfterContentInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit, OnChanges, DoCheck, OnDestroy , AfterContentInit{
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
}
