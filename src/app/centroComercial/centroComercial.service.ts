import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { CentroComercial } from './centroComercial';

@Injectable({
  providedIn: 'root',
})
export class CentroComercialService {
  private apiUrl = environment.baseUrl + 'centros-comerciales';

  constructor(private http: HttpClient) {}

  getCentrosComerciales(): Observable<CentroComercial[]> {
    return this.http.get<CentroComercial[]>(this.apiUrl);
  }
}