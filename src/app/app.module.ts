import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './modules/home/home.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { SampleModule } from './components/sample/sample.module';
import { TweetModule } from './modules/tweet/tweet.module';
import { registerLocaleData } from '@angular/common';
import localePtbr from '@angular/common/locales/pt';

registerLocaleData(localePtbr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    UsuarioModule,
    SampleModule,
    TweetModule
  ],
  providers: [HttpClient, { provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
