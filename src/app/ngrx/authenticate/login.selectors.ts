import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LoginState} from "./login.state";

export const selectLogin = createFeatureSelector<LoginState>('authState');

export const selectUser = createSelector(
    selectLogin,
    (state: LoginState) => state.user
);

export const isAuthenticate = createSelector(
    selectLogin,
    (state : LoginState) => state.isAuthenticate
)