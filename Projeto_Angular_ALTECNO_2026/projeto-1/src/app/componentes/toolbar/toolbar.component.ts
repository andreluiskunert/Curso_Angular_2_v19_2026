import { Component } from '@angular/core';
import { AppComponent } from "../../app.routes";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

}
