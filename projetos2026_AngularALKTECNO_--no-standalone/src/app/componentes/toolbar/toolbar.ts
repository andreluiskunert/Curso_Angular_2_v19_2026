import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule],
  templateUrl: './toolbar.html',
  styleUrls: ['./toolbar.scss']
})
export class Toolbar {

}