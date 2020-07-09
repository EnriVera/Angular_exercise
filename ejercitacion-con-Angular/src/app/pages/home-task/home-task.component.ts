import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-task',
  templateUrl: './home-task.component.html',
  styleUrls: ['./home-task.component.scss']
})
export class HomeTaskComponent implements OnInit {
  HabilitarAgregarTarea: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
