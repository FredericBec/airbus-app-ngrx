import { Action } from "@ngrx/store";
import { Aircraft } from "src/app/model/aircraft.model";

export enum AircraftsActionTypes{
    GET_ALL_AIRCRAFTS = "[Aircrafts] Get All Aircratfs",
    GET_ALL_AIRCRAFTS_SUCCESS = "[Aircrafts] Get All Aircratfs Success",
    GET_ALL_AIRCRAFTS_ERROR = "[Aircrafts] Get All Aircratfs Error",
}

export class GetAllAircraftsAction implements Action{
    type: AircraftsActionTypes = AircraftsActionTypes.GET_ALL_AIRCRAFTS;
    constructor(public payload: any){

    }
}

export class GetAllAircraftsActionSuccess implements Action{
    type: AircraftsActionTypes = AircraftsActionTypes.GET_ALL_AIRCRAFTS_SUCCESS;
    constructor(public payload: Aircraft[]){
        
    }
}

export class GetAllAircraftsActionError implements Action{
    type: AircraftsActionTypes = AircraftsActionTypes.GET_ALL_AIRCRAFTS_ERROR;
    constructor(public payload: string){
        
    }
}

export type AircraftsActions = GetAllAircraftsAction | GetAllAircraftsActionSuccess | GetAllAircraftsActionError;