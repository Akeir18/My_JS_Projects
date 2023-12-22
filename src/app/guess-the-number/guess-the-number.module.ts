import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { GuessTheNumberComponent } from './components/guess-the-number/guess-the-number.component';


@NgModule({
  declarations: [
    GuessTheNumberComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    GuessTheNumberComponent
  ]
})
export class GuessTheNumberModule { }
