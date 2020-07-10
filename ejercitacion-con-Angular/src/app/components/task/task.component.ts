import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/app/Models/Person';
import { Router } from '@angular/router';
import { ServicePersonService } from 'src/app/service/service-person/service-person.service';
import { Task } from 'src/app/Models/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  public validar: boolean = false;
  public showIt: boolean = false;
  HabilitarEliminarTarea: boolean = false;
  constructor(public router: Router, public personSevice: ServicePersonService) { }

  ngOnInit(): void {
  }
  ngOnChanges():void{
    this.task.Completado ? this.validar = true : this.validar = false;
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
  }

}
