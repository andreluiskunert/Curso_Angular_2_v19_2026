import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { ToolbarComponent } from './componentes/toolbar/toolbar';
import { AppRoutingModule } from './app-routing-module';

import { HomeComponent } from './componentes/home/home'; // standalone

@NgModule({
  declarations: [
    App,
    ToolbarComponent,
    // HomeComponent NÃO fica aqui
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeComponent, // ✅ standalone entra aqui
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule {}