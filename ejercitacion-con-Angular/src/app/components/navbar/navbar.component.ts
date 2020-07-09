import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public habilitar: boolean = false;
  constructor(public router:Router, public route: ActivatedRoute) {
    
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        event.url == '/home-task' ? this.habilitar = true : this.habilitar = false;
      }
    });
  }

  ngOnInit(): void {
  }


}
