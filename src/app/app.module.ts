import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { GuessTheNumberModule } from './guess-the-number/guess-the-number.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule, 
    GuessTheNumberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
