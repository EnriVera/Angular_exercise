import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Grupo } from 'src/app/Models/Grupo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceGroupService {
  public url: string;

  constructor( private http: HttpClient ) { this.url = environment.production }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  PostGrupo(grupo: Grupo):Observable<any> {
    return this.http.post(this.url+`api/grupo/potsgrupo`,JSON.stringify(grupo),this.httpOptions)
  }

  PutGrupo(grupo: Grupo): Observable<any> {
    return this.http.put(this.url+`api/grupo/putgrupo`,JSON.stringify(grupo), this.httpOptions)
  }
}
