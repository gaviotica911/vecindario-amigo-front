import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GrupoDeInteres } from './grupoDeInteres';
import { GrupoDeInteresDetail } from './grupoDeInteres-detail';


@Injectable({
    providedIn: 'root'
})
export class GrupoDeInteresService {
    private apiUrl: string = environment.baseUrl + 'gruposDeInteres';
    constructor(private http: HttpClient) { }

    getGruposDeInteres(): Observable<GrupoDeInteresDetail[]> {
        return this.http.get<GrupoDeInteresDetail[]>(this.apiUrl);
      }

    getGrupoDeInteres(id: string): Observable<GrupoDeInteresDetail> {
        return this.http.get<GrupoDeInteresDetail>(this.apiUrl + "/" + id);
      }
}
