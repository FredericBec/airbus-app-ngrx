import { Action } from "@ngrx/store";
import { User } from "src/app/model/user.model";

export enum LoginActionTypes{
    LOGIN = "[Login] User Login",
    LOGIN_SUCCESS = "[Login] User Login Success",
    LOGIN_DENIED = "[Login] User Login DENIED",
    LOGOUT = "[Logout] User logout"
}

export class OnLoginAction implements Action{
    type: LoginActionTypes = LoginActionTypes.LOGIN;
    constructor(public payload: {email: string, password: string}){}
}

export class OnLoginActionSuccess implements Action{
    type: LoginActionTypes = LoginActionTypes.LOGIN_SUCCESS;
    constructor(public payload: any){}
}

export class OnLoginActionError implements Action{
    type: LoginActionTypes = LoginActionTypes.LOGIN_DENIED;
    constructor(public payload: string){}
}

export class OnLogOut implements Action{
    type: LoginActionTypes = LoginActionTypes.LOGOUT;
    constructor(public payload: any){}
    
}

export type LoginActions = OnLoginAction | OnLoginActionSuccess | OnLoginActionError | OnLogOut;