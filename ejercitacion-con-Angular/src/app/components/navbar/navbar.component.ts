import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Person } from 'src/app/Models/Person';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public habilitar: boolean = false;
  person: Person = new Person();
  constructor(public router:Router) {
    this.person = JSON.parse(localStorage.getItem('Usuario')); 
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        if(this.person != null) event.url == `/account/${this.person.ID}`? this.habilitar = true : this.habilitar = false;
        event.url == '/home-task' || event.url == '/group' ? this.habilitar = true : this.habilitar = false;

        if((event.url == '/home-task' || event.url == '/group') && this.person == null){
          this.router.navigate(['/home'])
          this.habilitar = false;
        }
      }
    });
  }

  ngOnInit(): void {
  }

  CerrarSecion(){
    localStorage.removeItem('Usuario');
    this.router.navigate(['/home'])
  }

  Account(){
    this.router.navigate(['/account', this.person.ID])
  }

}
