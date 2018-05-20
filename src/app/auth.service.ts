import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = environment.API_URL + '/auth/jwt/create/';
  private registerUrl = environment.API_URL + '/auth/users/create/';
  
  constructor(private http: HttpClient) { }

  login(username: string,password:string): Observable<Object>{
    console.log("haciendo login",this.loginUrl,username,password)
    return this.http.post(this.loginUrl,{username: username,password:password});
  }

  register(username: string,password:string): Observable<Object>{
    console.log("haciendo register",this.loginUrl,username,password)
    return this.http.post(this.registerUrl,{username: username,password:password});
  }
}
