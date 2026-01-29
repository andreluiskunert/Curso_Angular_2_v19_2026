import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,          // ✅ ISSO É O QUE FALTAVA
  imports: [RouterOutlet],   // ✅ agora é válido
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('projetoAlk');
}
