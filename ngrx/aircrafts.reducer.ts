import { Action } from "@ngrx/store";
import { AircraftsState, AircraftsStateEnum, initState } from "./aircrafts.state";
import { AircraftsActionTypes } from "./aircrafts.action";

export function AircraftsReducer(state : AircraftsState = initState, action: Action){
    switch(action.type){
        case AircraftsActionTypes.GET_ALL_AIRCRAFTS :
            return {...state, dataState: AircraftsStateEnum.LOADING}
        case AircraftsActionTypes.GET_ALL_AIRCRAFTS_SUCCESS :
            return {...state, dataState: AircraftsStateEnum.LOADED}
        case AircraftsActionTypes.GET_ALL_AIRCRAFTS_ERROR :
            return {...state, dataState: AircraftsStateEnum.ERROR}
        default :
            return {...state}
    }
}