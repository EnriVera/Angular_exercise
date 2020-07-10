import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from 'src/app/Models/Person';

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

  OntenerTodasPerson(): Observable<any>{
    return this.http.get(this.url+'api/people/getpeople');
  }

  Agregar_Person(person: Person): Observable<any> {
    return this.http.post(this.url+"api/people/postperson", JSON.stringify(person), this.httpOptions);
  }

  ObtnerPerson(person: Person): Observable<any> {
    return this.http.get(this.url+`api/people/get-person-por-datos?email=${person.Email}&passwork=${person.Passwork}`, this.httpOptions);
  }

  ObtnerUnaPerson(IDPerson: number): Observable<any> {
    return this.http.get(this.url+`api/people/getpeopleid?id=${IDPerson}`, this.httpOptions);
  }
}
