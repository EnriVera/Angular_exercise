import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SweeNotification } from 'src/app/resource/notification';
import { ServiceGrupoPersonService } from 'src/app/service/service-grupoPerson/service-grupo-person.service';

@Component({
  selector: 'app-delete-group',
  templateUrl: './delete-group.component.html',
  styleUrls: ['./delete-group.component.scss']
})
export class DeleteGroupComponent implements OnInit {

  @Input() idGrupo: number;
  @Input() idPerson: number;
  @Output() close = new EventEmitter<void>();
  sweenotificacion: SweeNotification = new SweeNotification();
  constructor( private grupoPersonService: ServiceGrupoPersonService) { }

  ngOnInit(): void {
  }
  
  EliminarGrupo(){
    this.grupoPersonService.DeleteGrupo(this.idGrupo, this.idPerson).subscribe(
      ()=>{
        this.sweenotificacion.SuccessModel('Se elimino el grupo')
        this.close.emit(null);
      }, 
      ()=>{this.sweenotificacion.ErrorModel('Verifique su internet, no se pudo eliminar')}
    )
  }
} 
