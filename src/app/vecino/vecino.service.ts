import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
import { Vecino } from './vecino';  
import { VecinoDetail } from './vecino-detail';
@Injectable({
  providedIn: 'root'
})
export class VecinoService {
  private apiUrl = environment.baseUrl + 'vecinos';

constructor(private http: HttpClient) { }

getVecinos(): Observable<VecinoDetail[]>{
  return this.http.get<VecinoDetail[]>(this.apiUrl);
}

}
