import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/Models/Person';
import { SweeNotification } from 'src/app/resource/notification';
import { Grupo } from 'src/app/Models/Grupo';
import { ServiceGroupService } from 'src/app/service/service-group/service-group.service';

@Component({
  selector: 'app-modify-group',
  templateUrl: './modify-group.component.html',
  styleUrls: ['./modify-group.component.scss']
})
export class ModifyGroupComponent implements OnInit {
  @Output() close = new EventEmitter<string>();
  sweenotificacion: SweeNotification = new SweeNotification();
  @Input() grupo: Grupo = new Grupo();
  constructor(public serviceGrupo: ServiceGroupService) {}

  ngOnInit(): void {}

  ModificarGrupo() {
    this.grupo.Titulo != ''
      ? this.serviceGrupo.PutGrupo(this.grupo).subscribe(
          () => {
            this.sweenotificacion.SuccessModel('Se modifico el grupo');
            this.close.emit(null);
          },
          () => {
            this.sweenotificacion.ErrorModel(
              'Verifique su internet o los datos ingresados'
            );
          }
        )
      : this.sweenotificacion.ErrorModel('Ingrese el titulo del grupo');
  }

}
