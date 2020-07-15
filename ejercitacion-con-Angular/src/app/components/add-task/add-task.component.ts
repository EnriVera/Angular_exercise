import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Models/Task';
import { SweeNotification } from 'src/app/resource/notification';
import { ServiceTaskService } from 'src/app/service/service-task/service-task.service';
import { GrupoTask } from 'src/app/Models/GrupoTask';
import { ServiceGrupoTaskService } from 'src/app/service/service-grupoTask/service-grupo-task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  prioridad: boolean = false;
  @Input() grupoTask: GrupoTask = new GrupoTask();
  @Output() close = new EventEmitter<string>();
  task: Task = new Task();
  notificacion: SweeNotification = new SweeNotification();

  constructor(
    public serviceTask: ServiceTaskService,
    public serviceGrupoTask: ServiceGrupoTaskService
  ) {}

  ngOnInit() {}

  cancel() {
    this.close.emit(null);
  }

  AgregarTarea() {
    if (this.task.FechaComienzo == undefined) this.task.FechaComienzo = null;

    this.task.FechaCreacion = new Date(Date.now());

    this.task.Titulo != null
      ? this.serviceTask.PostTask(this.task).subscribe(
          (value) => {
            this.grupoTask.IDTask = value.ID;
            this.serviceGrupoTask
              .PostGrupoTask(this.grupoTask)
              .subscribe((value) => {
                this.notificacion.SuccessModel('Se validaron todos los datos');
                this.close.emit(null);
              });
          },
          () =>
            this.notificacion.ErrorModel('Verifique los campos o  el internet')
        )
      : this.notificacion.ErrorModel('No agrego un titulo');
    //this.close.emit(null);
  }
}
