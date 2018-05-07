import { Injectable } from '@angular/core';
import { Farm } from './farm';
import { FARMS } from './mock-farms';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';




@Injectable({
  providedIn: 'root'
})
export class FarmService {

  private farmsUrl = environment.API_URL+'/api/farms';  // URL to web api  

  constructor(private http: HttpClient) { }

  getFarms(): Observable<Farm[]>{
    //return of(FARMS);
    return this.http.get<Farm[]>(this.farmsUrl)
  }
}
