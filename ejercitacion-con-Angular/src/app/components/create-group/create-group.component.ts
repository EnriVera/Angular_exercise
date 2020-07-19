import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Grupo } from 'src/app/Models/Grupo';
import { ServiceGroupService } from 'src/app/service/service-group/service-group.service';
import { Person } from 'src/app/Models/Person';
import { SweeNotification } from 'src/app/resource/notification';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss'],
})
export class CreateGroupComponent implements OnInit {
  @Input() Person: Person = new Person();
  @Output() close = new EventEmitter<string>();
  sweenotificacion: SweeNotification = new SweeNotification();
  grupo: Grupo = new Grupo();
  constructor(public serviceGrupo: ServiceGroupService) {
  }

  ngOnInit(): void {}

  AgregarGrupo() {
    this.grupo.Administrador = this.Person;
    this.grupo.Titulo != ''
      ? this.serviceGrupo.PostGrupo(this.grupo).subscribe(
          () => {
            this.sweenotificacion.SuccessModel('Se a agregado un nuevo grupo');
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
