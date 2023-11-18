import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comentario } from './comentario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  private apiUrl = environment.baseUrl + 'comentarios';
constructor(private http: HttpClient) { }

getComentarios(): Observable<Comentario[]> {
  console.log(this.http.get<Comentario[]>(this.apiUrl));
  return this.http.get<Comentario[]>(this.apiUrl);
}
}
