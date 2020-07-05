import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public valor_router: Router){}

  ngOnInit(): void {
    var datosLocalStorage = JSON.parse(localStorage.getItem('Usuario'))
    if(datosLocalStorage != null) this.valor_router.navigate(['/home-task'])
  }
  title = 'ejercitacion-con-Angular';
}
