import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Negocio } from './negocio';  
@Injectable({
  providedIn: 'root'
})
export class NegocioService {
  private apiUrl = environment.baseUrl + 'negocios';

constructor(private http: HttpClient) { }

getNegocios(): Observable<Negocio[]>{
  return this.http.get<Negocio[]>(this.apiUrl);
}

}
