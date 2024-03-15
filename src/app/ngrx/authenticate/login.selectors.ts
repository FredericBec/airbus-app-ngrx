import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LoginState} from "./login.state";

export const selectLogin = createFeatureSelector<LoginState>('login');

export const selectUser = createSelector(
    selectLogin,
    (state: LoginState) => state.user
);

export const isAuthenticate = createSelector(
    selectLogin,
    (state : LoginState) => state.isAuthenticate
)