import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Vecindario } from './vecindario';

@Injectable({
  providedIn: 'root'
})
export class VecindariosService {

  private apiUrl: string = environment.baseUrl + 'vecindarios';

constructor(private http: HttpClient) { }

// getVecindarios(): Observable<Vecindario[]> {
//   return this.http.get<Vecindario[]>(this.apiUrl);
// }

getVecindarios(page: number, size: number): Observable<any> {
  const params = new HttpParams()
    .set('page', page.toString())
    .set('size', size.toString());

  return this.http.get<any>(`${this.apiUrl}`, { params });
}

}
