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

  readonly loginStateEnum = LoginStateEnum;

  constructor(private formBuilder: FormBuilder, private store: Store, private router : Router) { 
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.isAuthenticate$ = this.store.pipe(select(isAuthenticate));
  }

  ngOnInit(): void {
  }

  onLogin(form: FormGroup){
    console.log(form.value);
    const email = form.value.email;
    const password = form.value.password;
    if(form.valid){
      this.store.dispatch(new OnLoginAction({email : email, password : password}));
      
      this.isAuthenticate$.pipe(
        map(authenticate =>{
            if(authenticate){
              this.router.navigateByUrl('aircrafts');
            }
          })
      ).subscribe();
    }else{
      this.errorMessage = "Veuillez entrer un mot de passe et un e-mail";
      this.store.dispatch(new OnLoginActionError(this.errorMessage));
    }
  }

}
