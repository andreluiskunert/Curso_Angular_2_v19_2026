import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { App } from './app';
import { ToolbarComponent } from './componentes/toolbar/toolbar';

@NgModule({
  declarations: [
    App,
    // ❌ ToolbarComponent NÃO fica aqui
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    ToolbarComponent, // ✅ standalone entra aqui
  ],
  bootstrap: [App],
})
export class AppModule {}