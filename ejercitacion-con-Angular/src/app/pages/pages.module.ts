import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { router } from '../router/config-router';
import { SweeNotification } from '../resource/notification';
import { ServicePersonService } from '../service/service-person/service-person.service';



@NgModule({
  declarations: [HomeComponent, SignInComponent, SignUpComponent],
  providers:[ServicePersonService],
  imports:[CommonModule, RouterModule.forRoot(router), FormsModule],
  exports: [
    CommonModule,
    SignInComponent,
    SignUpComponent
  ]
})
export class PagesModule { }
