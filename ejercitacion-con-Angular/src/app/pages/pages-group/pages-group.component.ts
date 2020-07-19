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
  mostrarGrupo: boolean = false;
  mostrarMensage: boolean = false;
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
    this.mostrarGrupo = false;
    this.mostrarMensage = false;
    this.PlaceholderGrupo = true;
    this.serviceperson.ObtnerUnaPerson(this.person.ID).subscribe((value) => {
      if(value.Grupo.length == 0) this.mostrarMensage = true
      this.person = value;

      this.PlaceholderGrupo = false;
      this.mostrarGrupo = true;
    });
  }

  BuscarGrupo(IDGrupo: number) {
    this.serviceGrupoPerson.PostGrupo(IDGrupo, this.person.ID).subscribe(
      () => {
        this.sweenotificacion.SuccessModel('Se a agrego el nuevo grupo');
        this.ObtnerPerson();
      },
      () => this.sweenotificacion.ErrorModel('Id del grupo incorrecto o ya esta en el grupo')
    );
  }
}
