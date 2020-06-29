import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { router } from '../router/config-router';



@NgModule({
  declarations: [HomeComponent, SignInComponent, SignUpComponent],
  imports:[CommonModule, RouterModule.forRoot(router)],
  exports: [
    CommonModule,
    SignInComponent,
    SignUpComponent
  ]
})
export class PagesModule { }
