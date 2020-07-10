import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Models/Person';
import { ServicePersonService } from 'src/app/service/service-person/service-person.service';
import { Grupo } from 'src/app/Models/Grupo';
import { Task } from 'src/app/Models/Task';

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
  constructor(public service: ServicePersonService) { }

  ngOnInit(): void {
    var IDPerson = JSON.parse(localStorage.getItem('Usuario'))

    this.service.ObtnerUnaPerson(IDPerson.ID).subscribe(
      value => {
        this.person = value;
        this.mostrarGrupo = true;
      },
      () => console.log("Ocurio un error")
    )
  }

  SeleccionarGrupo(grupo: Grupo){
    this.habilitarTask = false
    this.habilitarPlaceholderTask = true

    this.tituloGrupo = grupo.Titulo
    this.task = grupo.Task;
    this.seleccionarGrupo = false
    console.log("Grupo: "+grupo.Titulo)

    this.habilitarPlaceholderTask = false
    this.habilitarTask = true
  }

}
