import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Models/Person';
import { ServicePersonService } from 'src/app/service/service-person/service-person.service';
import { Grupo } from 'src/app/Models/Grupo';
import { Task } from 'src/app/Models/Task';
import { GrupoTask } from 'src/app/Models/GrupoTask';
import * as moment from 'moment';

@Component({
  selector: 'app-home-task',
  templateUrl: './home-task.component.html',
  styleUrls: ['./home-task.component.scss']
})
export class HomeTaskComponent implements OnInit {
  habilitarTask: boolean = false;
  habilitarPlaceholderTask: boolean = false;
  HabilitarAgregarTarea: boolean = false;
  seleccionarGrupo: boolean = false;
  tituloGrupo: String = "Seleccione un grupo"
  mostrarGrupo: boolean = false;

  person: Person = new Person();
  task: Task[];
  grupoTask: GrupoTask = new GrupoTask();
  grupo: Grupo = new Grupo();
  constructor(public service: ServicePersonService) { }

  ngOnInit(): void {
    var IDPerson = JSON.parse(localStorage.getItem('Usuario'))

    this.ConsultarDatosPerson(IDPerson);
  }

  SeleccionarGrupo(grupo: Grupo){
    this.grupo = grupo;
    this.habilitarTask = false
    this.habilitarPlaceholderTask = true

    this.tituloGrupo = grupo.Titulo
    this.task = grupo.Task;

    // objeto de grupoTask
    this.grupoTask.IDGrupo = grupo.ID;
    this.grupoTask.IDPersonColocador = this.person.ID;

    this.seleccionarGrupo = false

    this.habilitarPlaceholderTask = false
    this.habilitarTask = true
  }

  async MostrarNuevaTarea(){
    this.HabilitarAgregarTarea = false

    this.habilitarTask = false
    this.habilitarPlaceholderTask = true
    await this.ConsultarDatosPerson(this.person)
    await this.person.Grupo.forEach(e=> {
      if(e.ID === this.grupo.ID) this.grupo = e; return null;
    })
    this.habilitarPlaceholderTask = false
    this.habilitarTask = true
  }

  ConsultarDatosPerson(IDPerson){
    this.service.ObtnerUnaPerson(IDPerson.ID).subscribe(
      value => {
        if(value.Grupo != null) {this.mostrarGrupo = true};
        value.Grupo.forEach(element => {
          element.Task.forEach(task => {
            if(task.FechaComienzo != null)
            {
              var fechaData = task.FechaComienzo.substr(0, 10);
              task.FechaComienzo = moment(fechaData).format('yyyy-MM-DD')
            }
          })
        });
        this.person = value;
      },
      () => console.log("Ocurio un error")
    )
  }

}
