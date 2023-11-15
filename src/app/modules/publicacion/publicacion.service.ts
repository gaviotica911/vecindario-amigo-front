import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Publicacion } from './publicacion';  
import { PublicacionDetail } from './publicacion-detail';
@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  private apiUrl = environment.baseUrl + 'publicaciones';

constructor(private http: HttpClient) { }

getPublicacions(): Observable<PublicacionDetail[]>{
  return this.http.get<PublicacionDetail[]>(this.apiUrl);
}

}
