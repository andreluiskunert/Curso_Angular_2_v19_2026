import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro';
import { ListagemComponent } from './listagem/listagem';

const routes: Routes = [
  { path: 'cadastro', component: CadastroComponent },
  { path: 'listagem', component: ListagemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule {}