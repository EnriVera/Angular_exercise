import { Component, OnInit } from '@angular/core';
import { ServicePersonService } from 'src/app/service/service-person/service-person.service';
import { Router } from '@angular/router';
import { SweeNotification } from 'src/app/resource/notification';
import { Person } from 'src/app/Models/Person';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  person: Person = new Person();
  private sweenotificacion = new SweeNotification;

  constructor(public serviceperson: ServicePersonService, public valor_router: Router) { }

  ngOnInit(): void {
  }

  IniciarUsuario(){
    if(this.person.Email != '' && this.person.Passwork != '' && this.person.Email.includes('@gmail.com'))
      {
        this.serviceperson.ObtnerPerson(this.person).subscribe(
          valor => {
            localStorage.removeItem('Usuario')
            localStorage.setItem('Usuario', JSON.stringify(valor))

            this.sweenotificacion.SuccessModel('Se ha reguistrado el usuario')
            this.valor_router.navigate(['/home-task'])

          },
          () => this.sweenotificacion.ErrorModel('Verifique los su correo o su passwork')
        )
      }
      else this.sweenotificacion.ErrorModel("No lleno los campos o le falta el ' @gmail.com '")

  }
}
