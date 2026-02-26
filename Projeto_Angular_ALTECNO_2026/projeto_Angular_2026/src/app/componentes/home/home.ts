import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SexoPipe } from '../../pipes/sexo-pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SexoPipe],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'] // se o seu for CSS, troque por './home.css'
})
export class HomeComponent {
  clientes = [
    { nome: 'Andre Luis', sexo: 'm', idade: 43, profissao: 'Desenvolvedor Full Stack', salario: 150000.00 },
    { nome: 'Antonio Carlos', sexo: 'm', idade: 35, profissao: 'Desenvolvedor Full Stack', salario: 120000.00 },
    { nome: 'Aline Silva', sexo: 'f', idade: 25, profissao: 'Desenvolvedor Front-end', salario: 90000.00 },
    { nome: 'Luis Antônio', sexo: 'm', idade: 30, profissao: 'Q.A. Analyst', salario: 12000.00 },
  ];
}