import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'listagem', pathMatch: 'full'},
  {path: 'listagem', loadComponent: () => import('./listagem/listagem').then(m => m.Listagem)},
  {path: 'novo-produto', loadComponent: () => import('./novo-produto/novo-produto').then(m => m.NovoProduto)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
