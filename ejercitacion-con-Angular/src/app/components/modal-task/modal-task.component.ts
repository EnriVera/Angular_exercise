import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Models/Task';
import { ServiceTaskService } from 'src/app/service/service-task/service-task.service';
import { SweeNotification } from 'src/app/resource/notification';

@Component({
  selector: 'app-modal-task',
  templateUrl: './modal-task.component.html',
  styleUrls: ['./modal-task.component.scss'],
})
export class ModalTaskComponent implements OnInit {
  prioridad: boolean = false;
  @Input() task: Task = new Task();
  @Output() close = new EventEmitter<string>();

  sweenotificacion: SweeNotification = new SweeNotification();
  constructor(public service: ServiceTaskService) {}

  ngOnInit() {
  }
  
  cancel() {
    this.task.Titulo != ''
      ? this.service.PutTask(this.task).subscribe(
          (value) => {
            this.sweenotificacion.SuccessModel('Se han modificado los datos');
            this.close.emit(null);
          },
          () => this.sweenotificacion.ErrorModel('Verifique los datos o  su conesccion a internet')
        )
      : this.sweenotificacion.ErrorModel('Ingrese el titulo');
  }
}
