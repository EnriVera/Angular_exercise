import { Component, OnInit } from '@angular/core';
import { ServicePersonService } from 'src/app/service/service-person/service-person.service';
import { Router } from '@angular/router';
import { SweeNotification } from 'src/app/resource/notification';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public generarJSON = {
    "email_person": '',
    "passwork_person": ''
  };
  private sweenotificacion = new SweeNotification;

  constructor(public serviceperson: ServicePersonService, public valor_router: Router) { }

  ngOnInit(): void {
  }

  IniciarUsuario(){
    if(this.generarJSON.email_person != '' && this.generarJSON.passwork_person != '' && this.generarJSON.email_person.includes('@gmail.com'))
      {
        this.serviceperson.ObtnerPerson(this.generarJSON).subscribe(
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
