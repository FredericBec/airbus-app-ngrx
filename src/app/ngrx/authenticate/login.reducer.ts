import { LoginActionTypes, LoginActions } from "./login.action";
import { LoginState, LoginStateEnum, initialState } from "./login.state";
import { Action } from "@ngrx/store";

export function LoginReducer(state: LoginState = initialState, action: Action){
    switch(action.type){
        case LoginActionTypes.LOGIN :
            return {...state, dataState: LoginStateEnum.IS_LOGIN_IN}
        case LoginActionTypes.LOGIN_SUCCESS :
            return {...state, isAuthenticate: true, dataState: LoginStateEnum.LOGIN_IN, user: (<LoginActions> action).payload}
        case LoginActionTypes.LOGIN_DENIED :
            return {...state, dataState: LoginStateEnum.DENIED, errorMessage: (<LoginActions> action).payload}
        case LoginActionTypes.LOGOUT :
            return initialState;
        default :
            return {...state}
    }
}