import { Action } from "@ngrx/store";

export enum OperationActionTypes{
    ADD_OPERATION = "[Operation] Add One",
    REMOVE_ONE = "[Operation] Remove One"
}

export class AddOperationAction implements Action{
    type: OperationActionTypes = OperationActionTypes.ADD_OPERATION;
    constructor(public payload: {id: string, name: string}){}
}

export class RemoveOperationAction implements Action{
    type: OperationActionTypes = OperationActionTypes.REMOVE_ONE;
    constructor(public payload: any){}
}

export type OperationActions = AddOperationAction | RemoveOperationAction;