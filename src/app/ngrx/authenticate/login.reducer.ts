import { LoginActionTypes, LoginActions } from "./login.action";
import { LoginState, LoginStateEnum, initialState } from "./login.state";
import { Action } from "@ngrx/store";

export function LoginReducer(state: LoginState = initialState, action: Action){
    switch(action.type){
        case LoginActionTypes.LOGIN :
            return {...state, loginState: LoginStateEnum.IS_LOGIN_IN}
        case LoginActionTypes.LOGIN_SUCCESS :
            return {...state, isAuthenticate: true, loginState: LoginStateEnum.LOGIN_IN, user: (<LoginActions> action).payload}
        case LoginActionTypes.LOGIN_ERROR :
            return {...state, isAuthenticate: false, loginState: LoginStateEnum.ERROR, errorMessage: (<LoginActions> action).payload}
        case LoginActionTypes.LOGIN_FAILURE :
            return {...state, isAuthenticate: false, loginState: LoginStateEnum.FAILURE, errorMessage: (<LoginActions> action).payload}
        case LoginActionTypes.LOGOUT :
            return initialState;
        default :
            return {...state}
    }
}