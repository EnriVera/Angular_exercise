import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SweeNotification } from 'src/app/resource/notification';
import { ServicePersonService } from 'src/app/service/service-person/service-person.service';
import { Person } from 'src/app/Models/Person';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  person: Person = new Person();
  private sweenotificacion = new SweeNotification;

  constructor(private routers: Router, private router: ActivatedRoute, public serviceperson: ServicePersonService, public valor_router: Router) { }

  ngOnInit(): void {

    // Pasar los datos del Link a las variables que van en los input
    this.router.paramMap.subscribe(valor => {
      if(valor.has('fullname') && valor.has('email'))
      {
        this.person.Nombre = valor.get('fullname');
        this.person.Email = valor.get('email');
      }
    });
  }

  ReguistrarUsuario(){
    if(this.person.Nombre != '' && this.person.Email != '' && this.person.Apellido != ''
      && this.person.Passwork != '' && this.person.Email.includes('@gmail.com'))
      {
        this.serviceperson.Agregar_Person(this.person).subscribe(
          valor => {
            localStorage.removeItem('Usuario')
            localStorage.setItem('Usuario', JSON.stringify(valor))

            this.sweenotificacion.SuccessModel('Se ha reguistrado el usuario')
            this.valor_router.navigate(['/home-task'])
          },
          () => this.sweenotificacion.ErrorModel('Verifique los campos o su coneccion')
        )
      }
      else this.sweenotificacion.ErrorModel("No lleno los campos o le falta el ' @gmail.com '")

  }
}
