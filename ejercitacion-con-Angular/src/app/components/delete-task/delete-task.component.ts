import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.scss']
})
export class DeleteTaskComponent implements OnInit {

  @Input() oldname = "";
  @Output() close = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  Eliminar(){

  }
  Cancelar(){
    this.close.emit(null);
  }
}
