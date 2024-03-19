import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userConnected: User | undefined;

  constructor(private http : HttpClient) { }

  login(email : string, password : string): Observable<User>{
    return this.http.get<User>(environment.host + "/users?email=" + email + "&password=" + password);
  }

  getUser(){
    let user = localStorage.getItem('user');
    if(user){
      this.userConnected = JSON.parse(atob(user));
    }
    return this.userConnected;
  }

  idUser(){
    let user = this.getUser();
    if(user){
      if(user?.roles.length > 0){
        if(user.roles.indexOf('User') > -1) return true; 
      }
    }
    return false;
  }

  setUser(user: User): any{
    localStorage.setItem('user', btoa(JSON.stringify(user)));
  }
}
