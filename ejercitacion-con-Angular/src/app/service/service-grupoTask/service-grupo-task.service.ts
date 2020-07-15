import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GrupoTask } from 'src/app/Models/GrupoTask';

@Injectable({
  providedIn: 'root'
})
export class ServiceGrupoTaskService {
  public url: string;

  constructor( private http: HttpClient ) { this.url = environment.production }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  PostGrupoTask(grupoTask: GrupoTask){
    return this.http.post(this.url+`api/grupoTask?IDGrupo=${grupoTask.IDGrupo}&IDTask=${grupoTask.IDTask}&IDPersonColocador=${grupoTask.IDPersonColocador}`,this.httpOptions)
  }
}
