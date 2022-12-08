import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NopagesfoundComponent } from './pages/nopagesfound/nopagesfound.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NopagesfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    SharedModule,
    AuthModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
