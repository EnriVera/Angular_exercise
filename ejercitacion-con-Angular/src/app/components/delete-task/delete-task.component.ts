import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { SweeNotification } from 'src/app/resource/notification';
import { ServiceTaskService } from 'src/app/service/service-task/service-task.service';
import { Task } from 'src/app/Models/Task';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.scss']
})
export class DeleteTaskComponent implements OnInit {
  @Input() task: Task = new Task();
  @Output() close = new EventEmitter<string>();
  sweenotificacion: SweeNotification = new SweeNotification();
  constructor(public servicetask: ServiceTaskService) { }

  ngOnInit(): void {
  }

  Eliminar(){
    this.servicetask.DeleteTask(this.task.ID).subscribe(
      () =>{
        this.sweenotificacion.SuccessModel('Se a borrado correctamente')
        this.close.emit(null);
      },
      ()=> this.sweenotificacion.ErrorModel('Verifique su internet, no se pude borrar')
    );
  }
  Cancelar(){
    this.close.emit(null);
  }
}
