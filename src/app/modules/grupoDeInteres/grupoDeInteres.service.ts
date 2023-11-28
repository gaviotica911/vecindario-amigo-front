import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';
import { GrupoDeInteres } from './grupoDeInteres';
import { GrupoDeInteresDetail } from './grupoDeInteres-detail';


@Injectable({
    providedIn: 'root'
})
export class GrupoDeInteresService {
    private apiUrl: string = environment.baseUrl + 'gruposDeInteres';
    constructor(private http: HttpClient) { }

    getGruposDeInteres(page: number, size: number): Observable<any> {
      const params = new HttpParams()
        .set('page', page.toString())
        .set('size', size.toString());
    
      return this.http.get<any>(`${this.apiUrl}`, { params });
    }
    

    getGrupoDeInteres(id: string): Observable<GrupoDeInteresDetail> {
        return this.http.get<GrupoDeInteresDetail>(this.apiUrl + "/" + id);
      }

      

    
}
