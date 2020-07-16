import { Component, OnInit } from '@angular/core';
import { ServicePersonService } from 'src/app/service/service-person/service-person.service';
import { Person } from 'src/app/Models/Person';

@Component({
  selector: 'app-pages-group',
  templateUrl: './pages-group.component.html',
  styleUrls: ['./pages-group.component.scss']
})
export class PagesGroupComponent implements OnInit {

  CrearGrupo: boolean = false;
  PlaceholderGrupo: boolean = false;
  person: Person = new Person();
  constructor( public serviceperson: ServicePersonService) { }

  ngOnInit(): void {
    this.person  = JSON.parse(localStorage.getItem('Usuario'))

    this.ObtnerPerson()
  }


  ObtnerPerson(){
    this.PlaceholderGrupo = false;
    this.serviceperson.ObtnerUnaPerson(this.person.ID).subscribe(
      value => {
        this.person = value;
        if(this.person.Grupo.length == 0)
        {
          this.PlaceholderGrupo = false;
        }
        else{
          this.PlaceholderGrupo = true;
        }
      },
      ()=>{}
    )
  }
}
