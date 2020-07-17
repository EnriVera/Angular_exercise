import { Component, OnInit } from '@angular/core';
import { ServicePersonService } from 'src/app/service/service-person/service-person.service';
import { Person } from 'src/app/Models/Person';
import { ServiceGrupoPersonService } from 'src/app/service/service-grupoPerson/service-grupo-person.service';
import { SweeNotification } from 'src/app/resource/notification';

@Component({
  selector: 'app-pages-group',
  templateUrl: './pages-group.component.html',
  styleUrls: ['./pages-group.component.scss'],
})
export class PagesGroupComponent implements OnInit {
  CrearGrupo: boolean = false;
  PlaceholderGrupo: boolean = false;
  person: Person = new Person();
  sweenotificacion: SweeNotification = new SweeNotification();
  constructor(
    public serviceperson: ServicePersonService,
    public serviceGrupoPerson: ServiceGrupoPersonService
  ) {}

  ngOnInit(): void {
    this.person = JSON.parse(localStorage.getItem('Usuario'));

    this.ObtnerPerson();
  }

  ObtnerPerson() {
    this.PlaceholderGrupo = false;
    this.serviceperson.ObtnerUnaPerson(this.person.ID).subscribe((value) => {
      this.person = value;
      this.person.Grupo.length == 0
        ? (this.PlaceholderGrupo = false)
        : (this.PlaceholderGrupo = true);
    });
  }

  BuscarGrupo(IDGrupo: number) {
    this.serviceGrupoPerson.PostGrupo(IDGrupo, this.person.ID).subscribe(
      () => {
        this.sweenotificacion.SuccessModel('Se agrego el nuevo grupo');
        this.ObtnerPerson();
      },
      () => this.sweenotificacion.ErrorModel('Id del grupo incorrecto o ya esta en el grupo')
    );
  }
}
