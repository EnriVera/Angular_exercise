import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-task',
  templateUrl: './modal-task.component.html',
  styleUrls: ['./modal-task.component.scss']
})
export class ModalTaskComponent implements OnInit {
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

}
