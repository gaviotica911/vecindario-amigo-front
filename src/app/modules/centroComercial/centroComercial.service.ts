import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { CentroComercial } from './centroComercial';

@Injectable({
  providedIn: 'root'
})
export class CentroComercialService {
  private apiUrl = environment.baseUrl + 'centrosComerciales';

  constructor(private http: HttpClient) { }

  getCentroComerciales(page: number, size: number): Observable<any> {
    const url = `${this.apiUrl}?page=${page}&size=${size}`;
    return this.http.get(url);
  }

  getCentroComercialById(id: number): Observable<CentroComercial> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<CentroComercial>(url);
  }
}
