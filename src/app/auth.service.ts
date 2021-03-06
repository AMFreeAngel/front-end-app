import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { RegisterResponse} from './RegisterResponse';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  token: any;
  user: any;

  constructor(private http: HttpClient) { }

  registerUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<RegisterResponse>(
      'http://localhost:3000/account/reg', 
      user, 
      {headers: headers})
      //.pipe(map((response: any) => response.json()))
      ;
  }

  authUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<RegisterResponse>(
      'http://localhost:3000/account/auth', 
      user, 
      {headers: headers});
      //.pipe(map((response: any) => response.json()));
  }

  storeUser(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.token = token;
    this.user = user;
  }

  logout(){
    this.token = null;
    this.user = null;
    localStorage.clear();
  }
  
  isLoggedIn() {
    return tokenNotExpired();
  }

}
