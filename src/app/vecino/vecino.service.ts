import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
import { Vecino } from './vecino';  
@Injectable({
  providedIn: 'root'
})
export class VecinoService {
  private apiUrl = environment.baseUrl + 'vecinos';

constructor(private http: HttpClient) { }

getVecinos(): Observable<Vecino[]>{
  return this.http.get<Vecino[]>(this.apiUrl);
}

}
