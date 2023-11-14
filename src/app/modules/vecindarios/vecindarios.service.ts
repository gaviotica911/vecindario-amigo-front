import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Vecindario } from './vecindario';

@Injectable({
  providedIn: 'root'
})
export class VecindariosService {

  private apiUrl: string = environment.baseUrl + 'vecindarios';

constructor(private http: HttpClient) { }

getVecindarios(): Observable<Vecindario[]> {
  return this.http.get<Vecindario[]>(this.apiUrl);
}
}
