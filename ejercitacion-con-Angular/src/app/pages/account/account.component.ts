import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicePersonService } from 'src/app/service/service-person/service-person.service';
import { Person } from 'src/app/Models/Person';
import { SweeNotification } from 'src/app/resource/notification';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  person: Person = new Person();
  sweenotificacion = new SweeNotification;
  constructor(public router: ActivatedRoute, public servicePerson: ServicePersonService) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(valor => {
      if(valor.has('id'))
      {
        this.servicePerson.ObtnerUnaPerson(parseInt(valor.get('id'))).subscribe(person => this.person = person, ()=> this.sweenotificacion.ErrorModel('Verifique su internet'));
      }
    });
  }


  MosificarDatos(){
    if(this.person.Nombre != '' && this.person.Apellido != ''){
      this.servicePerson.ModificarPerson(this.person).subscribe(
        ()=>{this.sweenotificacion.SuccessModel('Se han modificado los datos')}, 
        ()=>{this.sweenotificacion.ErrorModel("Verifique su internet o los dotos ingresados")}
      )
    }
  }

}
