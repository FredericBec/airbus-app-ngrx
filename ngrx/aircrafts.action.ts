import { Action } from "@ngrx/store";
import { Aircraft } from "src/app/model/aircraft.model";

export enum AircraftsActionTypes{
    GET_ALL_AIRCRAFTS = "[Aircrafts] Get All Aircratfs",
    GET_ALL_AIRCRAFTS_SUCCESS = "[Aircrafts] Get All Aircratfs Success",
    GET_ALL_AIRCRAFTS_ERROR = "[Aircrafts] Get All Aircratfs Error",
    GET_DESIGNED_AIRCRAFT = "[Aircrafts] Get Designed Aircratfs",
    GET_DESIGNED_AIRCRAFT_SUCCESS = "[Aircrafts] Get Designed Aircratfs Success",
    GET_DESIGNED_AIRCRAFT_ERROR = "[Aircrafts] Get Designed Aircratfs Error",
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

export class GetDesignedAircraftsAction implements Action{
    type: AircraftsActionTypes = AircraftsActionTypes.GET_DESIGNED_AIRCRAFT;
    constructor(public payload: any){
        
    }
}

export class GetDesignedAircraftsActionSuccess implements Action{
    type: AircraftsActionTypes = AircraftsActionTypes.GET_DESIGNED_AIRCRAFT_SUCCESS;
    constructor(public payload: Aircraft[]){
        
    }
}

export class GetDesignedAircraftsActionError implements Action{
    type: AircraftsActionTypes = AircraftsActionTypes.GET_DESIGNED_AIRCRAFT_ERROR;
    constructor(public payload: string){
        
    }
}

export type AircraftsActions = GetAllAircraftsAction | GetAllAircraftsActionSuccess | GetAllAircraftsActionError | 
                               GetDesignedAircraftsAction | GetDesignedAircraftsActionSuccess | GetDesignedAircraftsActionError;