import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { router } from './router/config-router';
import { ServicePersonService } from './service/service-person/service-person.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceTaskService } from './service/service-task/service-task.service';
import { ServiceGrupoTaskService } from './service/service-grupoTask/service-grupo-task.service';
import { ServiceGroupService } from './service/service-group/service-group.service';
import { ServiceGrupoPersonService } from './service/service-grupoPerson/service-grupo-person.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(router),
    FormsModule,
    ComponentsModule,
    PagesModule,
    BrowserAnimationsModule
  ],
  providers: [ServicePersonService, ServiceTaskService, ServiceGrupoTaskService, ServiceGroupService, ServiceGrupoPersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
