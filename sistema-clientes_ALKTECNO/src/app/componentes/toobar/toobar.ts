import { Component } from '@angular/core';
import { ProdutoRoutingModule } from "../../features/produto/produto-module";

@Component({
  selector: 'app-toobar',
  standalone: true,
  imports: [ProdutoRoutingModule],
  templateUrl: './toobar.html',
  styleUrl: './toobar.css'
})
export class Toobar {

}