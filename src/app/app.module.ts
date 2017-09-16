import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CliComponent } from './cli/cli.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import 'prismjs/prism';
import 'prismjs/components/prism-typescript';
import { PrismComponent } from 'angular-prism';

@NgModule({
  declarations: [
    AppComponent,
    CliComponent,
    HeaderComponent,
    HomeComponent,
    PrismComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
