import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Models/Person';
import { ServicePersonService } from 'src/app/service/service-person/service-person.service';
import { Grupo } from 'src/app/Models/Grupo';
import { Task } from 'src/app/Models/Task';
import { GrupoTask } from 'src/app/Models/GrupoTask';
import * as moment from 'moment';
import { ServiceTaskService } from 'src/app/service/service-task/service-task.service';

@Component({
  selector: 'app-home-task',
  templateUrl: './home-task.component.html',
  styleUrls: ['./home-task.component.scss']
})
export class HomeTaskComponent implements OnInit {
  consultar: any = {

    habilitarTask: false,
    habilitarPlaceholderTask: false,
    HabilitarAgregarTarea: false,
    seleccionarGrupo: false,
    tituloGrupo: "Seleccione un grupo",
    mostrarGrupo: false,
    mostrarAgregarTarea: false,
    mostrarMensage: false
  }

  person: Person = new Person();
  task: Task[];
  grupoTask: GrupoTask = new GrupoTask();
  grupo: Grupo = new Grupo();
  constructor(public service: ServicePersonService, public serviceTask: ServiceTaskService) { }

  ngOnInit(): void {
    var IDPerson = JSON.parse(localStorage.getItem('Usuario'))

    this.ConsultarDatosPerson(IDPerson);
  }

  SeleccionarGrupo(grupo: Grupo){
    this.consultar.mostrarAgregarTarea = true;

    this.grupo = grupo;

    this.consultar.tituloGrupo = grupo.Titulo

    this.task = grupo.Task;

    // objeto de grupoTask
    this.grupoTask.IDGrupo = grupo.ID;
    this.grupoTask.IDPersonColocador = this.person.ID;

    this.MostrarTareas()
    this.consultar.seleccionarGrupo = false
  }

  MostrarTareas(){
    this.consultar.habilitarTask = false
    this.consultar.habilitarPlaceholderTask = true
    this.serviceTask.GetTask(this.grupo.ID).subscribe(
      value => {
        if(value.length == 0){
          console.log(value)
          this.consultar.habilitarPlaceholderTask = false
          this.consultar.mostrarMensage = true;
        }
        else{
          value.forEach(task => {
            if(task.FechaComienzo != null)
            {
              var fechaData = task.FechaComienzo.substr(0, 10);
              task.FechaComienzo = moment(fechaData).format('yyyy-MM-DD')
            }
          })
          this.consultar.habilitarPlaceholderTask = false
          this.consultar.habilitarTask = true
        }
        this.task = value;
      }
    )
  }

  ConsultarDatosPerson(IDPerson){
    this.service.ObtnerUnaPerson(IDPerson.ID).subscribe(
      value => {
        value.Grupo.length != 0 ? this.consultar.mostrarGrupo = true : this.consultar.mostrarGrupo = false;
        this.person = value;
      }
    )
  }

}
