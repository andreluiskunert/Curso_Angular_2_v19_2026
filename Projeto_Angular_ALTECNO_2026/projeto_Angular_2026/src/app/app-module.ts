import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { App } from './app';
import { AppRoutingModule } from './app-routing-module';
import { ToolbarComponent } from './toolbar/toolbar';

@NgModule({
  declarations: [
    App,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
  ],
  bootstrap: [App],
})
export class AppModule {}