import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  prioridad: boolean = false;
  @Input() oldname = "";
  @Output() close = new EventEmitter<string>();
  newname = "";

  constructor() { }

  ngOnInit() {
      // copy all inputs to avoid polluting them
      this.newname = this.oldname; 
  }

  ok() {
      this.close.emit(this.newname);
  }

  cancel() {
      this.close.emit(null);
  }

  AgregarTarea(){
    this.close.emit(null);
  }
}
