import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Models/Task';
import { GrupoTask } from 'src/app/Models/GrupoTask';
import { ServiceTaskService } from 'src/app/service/service-task/service-task.service';
import { SweeNotification } from 'src/app/resource/notification';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task = new Task();
  @Output() close = new EventEmitter();
  public validar: boolean = false;
  public modal: boolean = false;
  HabilitarEliminarTarea: boolean = false;

  sweenotificacion: SweeNotification = new SweeNotification();
  constructor(public servicetask: ServiceTaskService) { }

  ngOnInit(): void {
  }

  ngOnChanges():void{
    this.task.Completado ? this.validar = true : this.validar = false;
  }

  ClickTarea(){
    this.servicetask.PutTaskCompletada(this.task.ID).subscribe(
      () => {this.validar = !this.validar},
      ()=>{this.sweenotificacion.ErrorModel('Verifique su internet, no se a completado la tarea')}
    )
  }

  ModificarTitulo(){
    this.servicetask.PatchTask(this.task.ID, this.task.Titulo).subscribe(
      ()=>{}, 
      ()=>this.sweenotificacion.ErrorModel('Verifique su internet')
    );
  }

}
