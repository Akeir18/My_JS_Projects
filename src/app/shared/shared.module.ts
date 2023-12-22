import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { AboutPageComponent } from './pages/about-page/about-page.component';



@NgModule({
  declarations: [
    SidebarComponent,
    AboutPageComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    SidebarComponent,
    AboutPageComponent
  ]
})
export class SharedModule { }
