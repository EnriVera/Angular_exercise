import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { router } from '../router/config-router';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(router),
  ],
  exports: [
    NavbarComponent
  ]
})
export class ComponentsModule { }
