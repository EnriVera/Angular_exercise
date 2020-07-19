import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Task } from 'src/app/Models/Task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceTaskService {
  public url: string;

  constructor(private http: HttpClient ) { this.url = environment.production  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'text/json'
    })
  };

  GetTask(IDGrupo: number): Observable<any>{
    return this.http.get(this.url+`api/task/getTask?grupo=${IDGrupo}`);
  }

  PostTask(task: Task): Observable<any>{
    return this.http.post(this.url+`api/task/postTask`, JSON.stringify(task), this.httpOptions);
  }

  PutTask(task: Task): Observable<any>{
    return this.http.put(this.url+`api/task/modificarTask`, JSON.stringify(task), this.httpOptions);
  }

  PatchTask(id: number, titulo: string): Observable<any>{
    return this.http.patch(this.url+`api/task/modificarTitulotask?id=${id}&titulo=${titulo}`, this.httpOptions)
  }

  PutTaskCompletada(id:number): Observable<any> {
    return this.http.patch(this.url+`api/task/completado?id=${id}`, this.httpOptions)
  }

  DeleteTask(id:number): Observable<any>{
    return this.http.delete(this.url+`api/task/eliminartask?id=${id}`)
  }
}
