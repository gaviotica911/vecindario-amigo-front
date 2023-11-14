import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../../environments/environment';
import { Observable } from 'rxjs';
import { ZonaVerde } from './zonaVerde';  

@Injectable({
  providedIn: 'root'
})
export class ZonaVerdeService {
  private apiUrl: string= environment.baseUrl + 'zonas_verdes';

constructor(private http: HttpClient) { }

getZonaVerdes(): Observable<ZonaVerde[]>{
  return this.http.get<ZonaVerde[]>(this.apiUrl);
  console.log(this.apiUrl);
}

}
