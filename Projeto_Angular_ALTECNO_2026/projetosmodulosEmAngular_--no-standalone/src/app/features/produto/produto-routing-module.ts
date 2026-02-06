import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NovoComponent } from './novo/novo.component';
import { ListagemComponent } from './listagem/listagem.component';

const routes: Routes = [
  { path: '', redirectTo: 'listar', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'novo', component: NovoComponent },
  { path: 'listar', component: ListagemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]   // 👈 MUITO IMPORTANTE
})
export class ProdutoRoutingModule {}
