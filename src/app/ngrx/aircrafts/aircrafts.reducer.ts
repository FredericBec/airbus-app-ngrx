import { Action } from "@ngrx/store";
import { AircraftsState, AircraftsStateEnum, Operation, initState } from "./aircrafts.state";
import { AircraftsActionTypes, AircraftsActions } from "./aircrafts.action";
import { EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { OperationActionTypes, OperationActions } from "./operations.action";

export const adapter: EntityAdapter<Operation> = createEntityAdapter<Operation>({

});

export const initialState: AircraftsState = adapter.getInitialState({
    aircrafts : [],
    errorMessage: "",
    dataState: AircraftsStateEnum.INITIAL,
    ids: [],
    entities: {}
});

export function AircraftsReducer(state : AircraftsState = initialState, action: Action){
    switch(action.type){
        case AircraftsActionTypes.GET_ALL_AIRCRAFTS :
            return {...state, dataState: AircraftsStateEnum.LOADING}
        case AircraftsActionTypes.GET_ALL_AIRCRAFTS_SUCCESS :
            return {...state, dataState: AircraftsStateEnum.LOADED, aircrafts: (<AircraftsActions> action).payload}
        case AircraftsActionTypes.GET_ALL_AIRCRAFTS_ERROR :
            return {...state, dataState: AircraftsStateEnum.ERROR, errorMessage: (<AircraftsActions> action).payload}
        case AircraftsActionTypes.GET_DESIGNED_AIRCRAFT :
            return {...state, dataState: AircraftsStateEnum.LOADING}
        case AircraftsActionTypes.GET_DESIGNED_AIRCRAFT_SUCCESS :
            return {...state, dataState: AircraftsStateEnum.LOADED, aircrafts: (<AircraftsActions> action).payload}
        case AircraftsActionTypes.GET_DESIGNED_AIRCRAFT_ERROR :
            return {...state, dataState: AircraftsStateEnum.ERROR, errorMessage: (<AircraftsActions> action).payload}
        case AircraftsActionTypes.GET_DEVELOPMENT_AIRCRAFT :
            return {...state, dataState: AircraftsStateEnum.LOADING}
        case AircraftsActionTypes.GET_DEVELOPMENT_AIRCRAFT_SUCCESS :
            return {...state, dataState: AircraftsStateEnum.LOADED, aircrafts: (<AircraftsActions> action).payload}
        case AircraftsActionTypes.GET_DEVELOPMENT_AIRCRAFT_ERROR :
            return {...state, dataState: AircraftsStateEnum.ERROR, errorMessage: (<AircraftsActions> action).payload}
        case AircraftsActionTypes.GET_SEARCH_AIRCRAFTS :
            return {...state, dataState: AircraftsStateEnum.LOADING}
        case AircraftsActionTypes.GET_SEARCH_AIRCRAFTS_SUCCESS :
            return {...state, dataState: AircraftsStateEnum.LOADED, aircrafts: (<AircraftsActions> action).payload}
        case AircraftsActionTypes.GET_SEARCH_AIRCRAFTS_ERROR :
            return {...state, dataState: AircraftsStateEnum.ERROR, errorMessage: (<AircraftsActions> action).payload}
        case OperationActionTypes.ADD_OPERATION :
            return adapter.addOne((<OperationActions> action).payload, state)
        case OperationActionTypes.REMOVE_ONE :
            return adapter.removeOne((<OperationActions> action).payload, state)
        default :
            return {...state}
    }
}