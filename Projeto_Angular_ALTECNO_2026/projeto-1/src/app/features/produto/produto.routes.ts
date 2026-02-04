import { Routes } from '@angular/router';
// Update the import path if the file is located elsewhere, for example:
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
// Or ensure that './produto-lista.component.ts' exists in the current directory.

export const PRODUTO_ROUTES: Routes = [
  {
    path: '',
    component: ProdutoListaComponent
  }
];
