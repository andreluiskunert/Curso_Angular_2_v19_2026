import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  template: `
    <header style="background:#1976d2;color:white;padding:12px;">
      <h2>Minha Toolbar Angular</h2>
    </header>
  `
})
export class ToolbarComponent {}