import { Component, OnInit, Output, Input } from '@angular/core';
import { Grupo } from 'src/app/Models/Grupo';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  @Input() IDPerson: number;
  @Input() grupo: Grupo = new Grupo();
  constructor() { }

  ngOnInit(): void {
  }

}
