import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  public validar: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  ClickTarea(){
    this.validar = !this.validar
  }

}
