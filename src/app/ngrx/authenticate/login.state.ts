import { User } from "src/app/model/user.model";

export enum LoginStateEnum{
    IS_LOGIN_IN = "Is Login In",
    LOGIN_IN = "Login In",
    ERROR = "Error",
    FAILURE = "Login failure",
    INITIAL = "Initial"
}

export interface LoginState{
    isAuthenticate: boolean,
    user: User | null,
    errorMessage: any,
    loginState: LoginStateEnum
}

export const initialState: LoginState = {
    isAuthenticate: false,
    user: null,
    errorMessage: "",
    loginState: LoginStateEnum.INITIAL,
}