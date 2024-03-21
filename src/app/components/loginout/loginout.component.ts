import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, map, take } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { OnLoginAction, OnLoginActionError, OnLoginActionFailure } from 'src/app/ngrx/authenticate/login.action';
import { isAuthenticate, selectLogin, selectUser } from 'src/app/ngrx/authenticate/login.selectors';
import { LoginState, LoginStateEnum } from 'src/app/ngrx/authenticate/login.state';

@Component({
  selector: 'app-loginout',
  templateUrl: './loginout.component.html',
  styleUrls: ['./loginout.component.css']
})
export class LoginoutComponent implements OnInit {

  userForm: FormGroup;
  isAuthenticate$ : Observable<boolean>;
  errorMessage: string | null = null;
  userConnected$: Observable<User[] | []>;
  loginState$: Observable<LoginState> | null = null;

  readonly loginStateEnum = LoginStateEnum;

  constructor(private formBuilder: FormBuilder, private store: Store<any>, private router : Router) { 
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.isAuthenticate$ = this.store.pipe(select(isAuthenticate));
    this.userConnected$ = this.store.pipe(select(selectUser));
  }

  ngOnInit(): void {
    this.loginState$ = this.store.pipe(
      map((state) => state.authState)
    );
  }

  onLogin(form: FormGroup){
    const email = form.value.email;
    const password = form.value.password;
    if(form.valid){
      this.store.dispatch(new OnLoginAction({email : email, password : password}));
      this.userConnected$.subscribe(userConnected =>{
        if(userConnected){
          this.router.navigateByUrl('aircrafts');
        }else{
          this.errorMessage = "e-mail ou mot de passe incorrect";
        }
      });
    }else{
      this.errorMessage = "Veuillez entrer un mot de passe et un e-mail";
      this.store.dispatch(new OnLoginActionError(this.errorMessage));
    }
  }

}
