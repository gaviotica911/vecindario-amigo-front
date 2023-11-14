import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Negocio } from './negocios';

@Injectable({
  providedIn: 'root'
})
export class NegociosService {

  private apiUrl: string = environment.baseUrl + 'negocios';

constructor(private http: HttpClient) { }

getNegocios(): Observable<Negocio[]> {
  return this.http.get<Negocio[]>(this.apiUrl);
}
}
