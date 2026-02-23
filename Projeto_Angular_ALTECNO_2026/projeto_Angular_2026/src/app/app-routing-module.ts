import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home';
import { NovoComponent } from './componentes/novo/novo'; // <- ajuste o nome aqui

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'novo', component: NovoComponent }, // <- e aqui
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}