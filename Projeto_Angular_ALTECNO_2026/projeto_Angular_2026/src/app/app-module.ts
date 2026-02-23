import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { ToolbarComponent } from './componentes/toolbar/toolbar';
import { AppRoutingModule } from './app-routing-module';

@NgModule({
  declarations: [
    App,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule {}