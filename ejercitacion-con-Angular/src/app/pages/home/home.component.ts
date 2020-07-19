import { Component, OnInit } from '@angular/core';
import { SweeNotification } from 'src/app/resource/notification';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public sweevalora;
  public MandarDatosfullname: String;
  public MandarDatosemail: String;

  constructor(   public valor_router: Router ) {
    this.sweevalora = new SweeNotification;
   }

  ngOnInit(): void {
  }

  ValidarCampos(datos){
    this.MandarDatosemail = datos.email.value;
    this.MandarDatosfullname =  datos.fullName.value;

    if( this.MandarDatosfullname.length != 0 && this.MandarDatosemail.length != 0 && this.MandarDatosemail.includes('@gmail.com') )
    {
      this.sweevalora.SuccessModel("Datos agregados");
      this.valor_router.navigate(['/sign-up/data', this.MandarDatosfullname, this.MandarDatosemail])

    }else this.sweevalora.ErrorModel("No lleno los campos o le falta el ' @gmail.com '")
  }





}
