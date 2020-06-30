import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicePersonService {
  public url: string;

  constructor( private http: HttpClient ) { this.url = "https://localhost:44341/"; }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  Agregar_Person(objeto): Observable<any> {
    return this.http.post(this.url+"api/people/post", JSON.stringify(objeto), this.httpOptions);
  }

  Get_Usuario(id: number): Observable<any> {
    return this.http.get(this.url+"api/Usuarios/"+id, this.httpOptions);
  }
}
