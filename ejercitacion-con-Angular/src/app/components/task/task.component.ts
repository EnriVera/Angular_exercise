import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Models/Person';
import { Router } from '@angular/router';
import { ServicePersonService } from 'src/app/service/service-person/service-person.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  public validar: boolean = false;
  public showIt: boolean = false;
  HabilitarEliminarTarea: boolean = false;
  person: Person = new Person();
  constructor(public router: Router, public personSevice: ServicePersonService) { }

  ngOnInit(): void {
    this.personSevice.OntenerTodasPerson().subscribe(
      valor=>this.person = valor,
      ()=>console.log("Error")
    )
  }

  ClickTarea(){
    this.validar = !this.validar
  }

  BorrarTarea(){
    console.log("Se borro la tarea")
  }

  ModificarTarea(){
    console.log("Se modifico")
    this.showIt = true;
  }

  CerrarModal(newName: string){
    this.showIt = false;
    //if (newName) this.name = newName;
  }

}
