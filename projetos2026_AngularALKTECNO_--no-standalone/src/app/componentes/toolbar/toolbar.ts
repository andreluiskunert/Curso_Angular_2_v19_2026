import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; // 👈 FALTA ISSO

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule // 👈 ADICIONE AQUI
  ],
  templateUrl: './toolbar.html',
  styleUrls: ['./toolbar.scss']
})
export class Toolbar {

}