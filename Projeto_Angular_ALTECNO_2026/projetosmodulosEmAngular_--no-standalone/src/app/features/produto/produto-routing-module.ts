import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './home/home';
import { Novo } from './novo/novo';
import { Listagem } from './listagem/listagem';

const routes: Routes = [
  { path: '', redirectTo: 'listar', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'novo', component: Novo },
  { path: 'listar', component: Listagem }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]   // 👈 MUITO IMPORTANTE
})
export class ProdutoRoutingModule {}

