import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Listagem } from './listagem/listagem';
import { NovoComponent } from '../../componentes/novo/novo';
import { Produto } from './produto';

const routes: Routes = [
  {path: '', redirectTo: 'listagem', pathMatch: 'full'},
  {path: 'listagem', component: Listagem},
  {path: 'novo-produto', component: Produto},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
