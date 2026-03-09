import { Routes } from '@angular/router';

import { Home } from './componentes/home/home';
import { Novo } from './componentes/novo/novo';

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home },

  { path: 'sobre', component: Novo },

  { path: '**', redirectTo: 'home' },
  {path:'produto', loadChildren: () =>import('./features/produto/produto-module').then(m => m.ProdutoRoutingModule)}

];