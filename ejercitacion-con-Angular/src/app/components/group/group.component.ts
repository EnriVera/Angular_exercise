import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Grupo } from 'src/app/Models/Grupo';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  modificarGrupo: boolean = false;
  eliminarGrupo: boolean = false;
  @Input() IDPerson: number;
  @Input() grupo: Grupo = new Grupo();
  @Output() close = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
