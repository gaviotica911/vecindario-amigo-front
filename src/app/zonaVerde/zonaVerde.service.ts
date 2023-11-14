import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import{ZonaVerde} from './zonaVerde'; 


@Injectable({
  providedIn: 'root'
})
export class ZonaVerdeService {
  private apiUrl: string=environment.baseUrl+'zonas_verdes';

constructor(private http: HttpClient) { }

getZonasVerdes():Observable<ZonaVerde[]>{
  return this.http.get<ZonaVerde[]>(this.apiUrl);
}

}
