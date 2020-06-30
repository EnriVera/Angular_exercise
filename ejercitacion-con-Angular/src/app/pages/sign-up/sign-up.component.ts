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

  public ValoresDelLink: any = {fullname: '', email: ''}
  private DatosIngresados = {fullname: '', lastname: '', email: '', passwork: ''}

  private fullname: String;
  private lastname: String;
  private email: String;
  private passwork: String;
  private sweenotificacion = new SweeNotification;
  public serviceperson: ServicePersonService;
  public generarJSON = {
    "name_person": '',
    "lastname_person": '',
    "email_person": '',
    "passwork_person": '',
    "image_person": null,
    "description_person": null,
    "id_task2": null
  };

  constructor(private routers: Router, private router: ActivatedRoute) { }

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

  async ReguistrarUsuario(){
    this.email = this.generarJSON.email_person;
    this.fullname = this.generarJSON.email_person;
    this.lastname = this.generarJSON.email_person;
    this.passwork = this.generarJSON.email_person;
    console.log(this.generarJSON)
    if(this.fullname.length != 0 && this.email.length != 0 && this.lastname.length != 0
      && this.passwork.length != 0 && this.email.includes('@gmail.com'))
      {
        await this.serviceperson.Agregar_Person(this.generarJSON).subscribe(
          valor => {
              console.log(valor)
          },
          error => console.log("te dio un error")
        )
        this.sweenotificacion.SuccessModel('Se ha reguistrado el usuario')
      }
      else this.sweenotificacion.ErrorModel("No lleno los campos o le falta el ' @gmail.com '")

  }
}
