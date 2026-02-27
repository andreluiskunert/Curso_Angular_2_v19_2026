import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { App } from './app'; // (se o teu componente raiz se chama App)
import { AppRoutingModule } from './app-routing-module';
import { ToolbarComponent } from './componentes/toolbar/toolbar';

@NgModule({
  declarations: [
    App, // componente raiz (não é standalone)
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,     // ✅ rotas aqui
    ToolbarComponent,     // ✅ standalone aqui
  ],
  bootstrap: [App],
})
export class AppModule {}