import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { router } from '../router/config-router';
import { ServicePersonService } from '../service/service-person/service-person.service';
import { TaskComponent } from './task/task.component';



@NgModule({
  declarations: [NavbarComponent, TaskComponent],
  providers: [ServicePersonService],
  imports: [
    CommonModule,
    RouterModule.forRoot(router)
  ],
  exports: [
    NavbarComponent,
    TaskComponent
  ]
})
export class ComponentsModule { }
