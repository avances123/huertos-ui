import { Injectable } from '@angular/core';
import { Farm } from './farm';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';




@Injectable({
  providedIn: 'root'
})
export class FarmService {

  private farmsUrl = environment.API_URL + '/api/farms';

  constructor(private http: HttpClient) { }

  getFarms(): Observable<Farm[]>{
    return this.http.get<Farm[]>(this.farmsUrl)
  }

  getFarm(id: Number): Observable<Farm>{
    return this.http.get<Farm>(this.farmsUrl + '/' + id)
  }
}
