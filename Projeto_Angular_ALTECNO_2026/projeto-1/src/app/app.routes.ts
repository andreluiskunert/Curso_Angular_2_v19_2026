import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'produtos',
    loadChildren: () =>
      import('./features/produto/produto.routes')
        .then(m => m.PRODUTO_ROUTES)
  }
];
