import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-toobar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './toobar.html',
  styleUrl: './toobar.scss'
})
export class Toobar {
  title = 'projeto1';
}