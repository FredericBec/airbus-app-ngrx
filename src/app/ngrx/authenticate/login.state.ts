import { User } from "src/app/model/user.model";

export enum LoginStateEnum{
    IS_LOGIN_IN = "Is Login In",
    LOGIN_IN = "Login In",
    ERROR = "Error",
    INITIAL = "Initial"
}

export interface LoginState{
    user: User | null,
    errorMessage: any,
    dataState: LoginStateEnum
}

export const initialState: LoginState = {
    user: null,
    errorMessage: "",
    dataState: LoginStateEnum.INITIAL,
}