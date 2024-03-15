import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './model/user.model';
import { selectUser } from './ngrx/authenticate/login.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'airbus-app-ngrx';

  //user$: Observable<User>;
  constructor(private store: Store){
    //this.user$ = this.store.pipe(select(selectUser));
  }
}
