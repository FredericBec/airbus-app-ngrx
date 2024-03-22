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

  login(email : string, password : string): Observable<User[]>{
    return this.http.get<User[]>(environment.host + "/users?email=" + email + "&password=" + password);
  }

  setUser(user: User): any{
    localStorage.setItem('user', btoa(JSON.stringify(user)));
  }
}
