import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuessTheNumberComponent } from './guess-the-number/components/guess-the-number/guess-the-number.component';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';

const routes: Routes = [
  {
    path: 'guess',
    component: GuessTheNumberComponent
  },
  {
    path: '',
    component: AboutPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
