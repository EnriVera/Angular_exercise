import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { router } from '../router/config-router';
import { ServicePersonService } from '../service/service-person/service-person.service';
import { HomeTaskComponent } from './home-task/home-task.component';
import { ComponentsModule } from '../components/components.module';
import { PagesGroupComponent } from './pages-group/pages-group.component';


@NgModule({
  declarations: [HomeComponent, SignInComponent, SignUpComponent, HomeTaskComponent, PagesGroupComponent],
  providers:[ServicePersonService],
  imports:[ComponentsModule ,CommonModule, RouterModule.forRoot(router), FormsModule],
  exports: [
    PagesGroupComponent,
    CommonModule,
    SignInComponent,
    SignUpComponent
  ]
})
export class PagesModule { }
