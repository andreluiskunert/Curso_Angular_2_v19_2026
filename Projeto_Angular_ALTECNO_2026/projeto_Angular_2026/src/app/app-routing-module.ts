import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home';
import { NovoComponent } from './componentes/novo/novo';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'novo', component: NovoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}