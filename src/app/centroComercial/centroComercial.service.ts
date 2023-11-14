import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { CentroComercial } from './centroComercial';
import { CentroComercialDetail } from './centro-comercial-detail';

@Injectable({
  providedIn: 'root'
})
export class CentroComercialService {
  private apiUrl = environment.baseUrl + 'centrosComerciales';

  constructor(private http: HttpClient) { }

  getCentrosComerciales(): Observable<CentroComercialDetail[]> {
    return this.http.get<CentroComercialDetail[]>(this.apiUrl);
  }
}
