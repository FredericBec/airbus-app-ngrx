import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { OnLoginAction } from 'src/app/ngrx/authenticate/login.action';
import { selectUser } from 'src/app/ngrx/authenticate/login.selectors';

@Component({
  selector: 'app-loginout',
  templateUrl: './loginout.component.html',
  styleUrls: ['./loginout.component.css']
})
export class LoginoutComponent implements OnInit {

  userForm: FormGroup;
  user: User | undefined;
  userState: Observable<any>;
  constructor(private formBuilder: FormBuilder, private store: Store) { 
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.userState = this.store.select(selectUser);
  }

  ngOnInit(): void {

  }

  onLogin(form: FormGroup){
    const email = form.value.email;
    const password = form.value.password;
    if(form.valid){
      this.store.dispatch(new OnLoginAction({email : email, password : password}));
    }
  }

}
