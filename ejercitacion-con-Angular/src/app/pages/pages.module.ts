import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';



@NgModule({
  declarations: [HomeComponent, SignInComponent],
  imports:[CommonModule],
  exports: [
    CommonModule,
    SignInComponent
  ]
})
export class PagesModule { }
