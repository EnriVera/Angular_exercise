import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SweeNotification } from 'src/app/resource/notification';
import { ServicePersonService } from 'src/app/service/service-person/service-person.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public ValoresDelLink = {fullname: '', email: ''}
  private DatosIngresados = {fullname: '', lastname: '', email: '', passwork: ''}

 /* private fullname: String;
  private lastname: String;
  private email: String;
  private passwork: String;*/
  private sweenotificacion = new SweeNotification;
  public generarJSON = {
    "name_person": '',
    "lastname_person": '',
    "email_person": '',
    "passwork_person": '',
    "image_person": null,
    "description_person": null,
    "id_task2": null
  };

  constructor(private routers: Router, private router: ActivatedRoute, public serviceperson: ServicePersonService, public valor_router: Router) { }

  ngOnInit(): void {

    // Pasar los datos del Link a las variables que van en los input
    this.router.paramMap.subscribe(valor => {
      if(valor.has('fullname') && valor.has('email'))
      {
        this.generarJSON.name_person = valor.get('fullname');
        this.generarJSON.email_person = valor.get('email');
      }
    });
  }

  ReguistrarUsuario(){
    if(this.generarJSON.name_person != '' && this.generarJSON.email_person != '' && this.generarJSON.lastname_person != ''
      && this.generarJSON.passwork_person != '' && this.generarJSON.email_person.includes('@gmail.com'))
      {
        this.serviceperson.Agregar_Person(this.generarJSON).subscribe(
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
