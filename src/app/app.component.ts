import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './model/user.model';
import { selectLogin, selectUser } from './ngrx/authenticate/login.selectors';
import { LoginState } from './ngrx/authenticate/login.state';
import { OnLogOut } from './ngrx/authenticate/login.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'airbus-app-ngrx';

  authState$ : Observable<LoginState> | null = null;
  isAuthenticate: boolean = false;
  user: User | null = null;
  constructor(private store: Store){
    this.authState$ = this.store.pipe(select(selectLogin));
  }

  ngOnInit(){
    this.authState$?.subscribe(
      (state) => {
        this.isAuthenticate = state.isAuthenticate;
        this.user = state.user;
      }
    )
  }

  logOut(){
    this.store.dispatch(new OnLogOut({}));
  }
}
