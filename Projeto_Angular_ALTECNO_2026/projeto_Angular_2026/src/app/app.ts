
import { Component, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  protected readonly title = signal('projeto_Angular_2026');

  ngOnInit(): void {
    // Aqui você coloca sua lógica de inicialização
    console.log('App iniciado com sucesso!');
  }
  mudarTexto() {
    this.title.update(current => current + 'a');
  }
}
