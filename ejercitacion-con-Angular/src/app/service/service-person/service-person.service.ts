import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicePersonService {
  public url: string;

  constructor( private http: HttpClient ) { this.url = environment.production }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  Agregar_Person(objeto): Observable<any> {
    return this.http.post(this.url+"api/people/postperson", JSON.stringify(objeto), this.httpOptions);
  }

  ObtnerPerson(objeto): Observable<any> {
    return this.http.get(this.url+`api/people/get-person-por-datos?email=${objeto.email_person}&passwork=${objeto.passwork_person}`, this.httpOptions);
  }
}
