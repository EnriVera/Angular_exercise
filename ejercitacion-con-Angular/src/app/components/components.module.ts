import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

import { router } from '../router/config-router';
import { ServicePersonService } from '../service/service-person/service-person.service';

import { TaskComponent } from './task/task.component';
import { ModalTaskComponent } from './modal-task/modal-task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { PlaceholderTaskComponent } from './placeholder-task/placeholder-task.component';
import { PlaceholderGroupComponent } from './placeholder-group/placeholder-group.component';
import { GroupComponent } from './group/group.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { DeleteGroupComponent } from './delete-group/delete-group.component';
import { ModifyGroupComponent } from './modify-group/modify-group.component';



@NgModule({
  declarations: [NavbarComponent, TaskComponent, ModalTaskComponent, AddTaskComponent, DeleteTaskComponent, PlaceholderTaskComponent, PlaceholderGroupComponent, GroupComponent, CreateGroupComponent, DeleteGroupComponent, ModifyGroupComponent],
  providers: [ServicePersonService],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forRoot(router)
  ],
  exports: [
    DeleteGroupComponent,
    CreateGroupComponent,
    GroupComponent,
    PlaceholderGroupComponent,
    PlaceholderTaskComponent,
    DeleteTaskComponent,
    AddTaskComponent,
    ModalTaskComponent,
    NavbarComponent,
    TaskComponent
  ]
})
export class ComponentsModule { 
}
