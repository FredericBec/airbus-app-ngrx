import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, catchError, map, mergeMap, of, tap } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { LoginActionTypes, OnLoginAction, OnLoginActionError, OnLoginActionFailure, OnLoginActionSuccess } from "./login.action";

@Injectable()
export class LoginEffects{
    constructor(private authService: AuthService, private effectActions: Actions){}

    loginEffect: Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(LoginActionTypes.LOGIN),
            tap((user) => {
                this.authService.setUser(user);
            }),
            mergeMap((action: OnLoginAction) => {
                return this.authService.login(action.payload.email, action.payload.password).pipe(
                    map((user) => {
                        if(user[0].email === action.payload.email && user[0].password === action.payload.password){
                            return new OnLoginActionSuccess(user);
                        }else{
                            return new OnLoginActionFailure("e-mail ou mot de passe incorrect");
                        }
                    }),
                    catchError((err) => of(new OnLoginActionError(err.message)))
                )
            })
        )
    )
}