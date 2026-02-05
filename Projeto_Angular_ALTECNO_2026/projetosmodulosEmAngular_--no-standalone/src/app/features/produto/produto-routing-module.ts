import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { NovoComponent } from './novo/novo';
import { ListagemComponent } from './listagem/listagem';
const routes: Routes = [
  {path: '', redirectTo: 'listar', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'novo', component: NovoComponent},
  {path: 'produto',}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
