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
    PagesModule
  ],
  providers: [ServicePersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
