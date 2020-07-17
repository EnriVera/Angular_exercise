import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceGrupoPersonService {
  public url: string;

  constructor( private http: HttpClient ) { this.url = environment.production }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  
  DeleteGrupo(idGrupo:number, idPerson:number): Observable<any> {
    return this.http.delete(this.url+`api/grupoPerson/deleteGrupoPerson?IDGrupo=${idGrupo}&IDPerson=${idPerson}`)
  }

  PostGrupo(idGrupo:number, idPerson:number): Observable<any> {
    return this.http.post(this.url+`api/grupoPerson/postGrupoPerson?IDGrupo=${idGrupo}&IDPerson=${idPerson}`,JSON ,this.httpOptions)
  }
}
