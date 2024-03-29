import { Action } from "@ngrx/store";
import { Aircraft } from "src/app/model/aircraft.model";

export enum AircraftsActionTypes{
    GET_ALL_AIRCRAFTS = "[Aircrafts] Get All Aircratfs",
    GET_ALL_AIRCRAFTS_SUCCESS = "[Aircrafts] Get All Aircratfs Success",
    GET_ALL_AIRCRAFTS_ERROR = "[Aircrafts] Get All Aircratfs Error",
    GET_DESIGNED_AIRCRAFT = "[Aircrafts] Get Designed Aircratfs",
    GET_DESIGNED_AIRCRAFT_SUCCESS = "[Aircrafts] Get Designed Aircratfs Success",
    GET_DESIGNED_AIRCRAFT_ERROR = "[Aircrafts] Get Designed Aircratfs Error",
    GET_DEVELOPMENT_AIRCRAFT = "[Aircrafts] Get Development Aircratfs",
    GET_DEVELOPMENT_AIRCRAFT_SUCCESS = "[Aircrafts] Get Development Aircratfs Success",
    GET_DEVELOPMENT_AIRCRAFT_ERROR = "[Aircrafts] Get Development Aircratfs Error",
    GET_SEARCH_AIRCRAFTS = "[Aircrafts] Get Search Aircrafts",
    GET_SEARCH_AIRCRAFTS_SUCCESS = "[Aircrafts] Get Search Aircrafts Success",
    GET_SEARCH_AIRCRAFTS_ERROR = "[Aircrafts] Get Search Aircrafts Error"
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

export class GetDevelopmentAircraftsAction implements Action{
    type: AircraftsActionTypes = AircraftsActionTypes.GET_DEVELOPMENT_AIRCRAFT;
    constructor(public payload: any){
        
    }
}

export class GetDevelopmentAircraftsActionSuccess implements Action{
    type: AircraftsActionTypes = AircraftsActionTypes.GET_DEVELOPMENT_AIRCRAFT_SUCCESS;
    constructor(public payload: Aircraft[]){
        
    }
}

export class GetDevelopmentAircraftsActionError implements Action{
    type: AircraftsActionTypes = AircraftsActionTypes.GET_DEVELOPMENT_AIRCRAFT_ERROR;
    constructor(public payload: string){
        
    }
}

export class GetSearchAircraftsAction implements Action{
    type: AircraftsActionTypes = AircraftsActionTypes.GET_SEARCH_AIRCRAFTS;
    constructor(public payload: {term : string}){

    }
}

export class GetSearchAircraftsActionSuccess implements Action{
    type: AircraftsActionTypes = AircraftsActionTypes.GET_SEARCH_AIRCRAFTS_SUCCESS;
    constructor(public payload: Aircraft[]){
        
    }
}

export class GetSearchAircraftsActionError implements Action{
    type: AircraftsActionTypes = AircraftsActionTypes.GET_SEARCH_AIRCRAFTS_ERROR;
    constructor(public payload: string){
        
    }
}

export type AircraftsActions = GetAllAircraftsAction | GetAllAircraftsActionSuccess | GetAllAircraftsActionError | 
                               GetDesignedAircraftsAction | GetDesignedAircraftsActionSuccess | GetDesignedAircraftsActionError |
                               GetDevelopmentAircraftsAction | GetDevelopmentAircraftsActionSuccess | GetDevelopmentAircraftsActionError |
                               GetSearchAircraftsAction | GetSearchAircraftsActionSuccess | GetSearchAircraftsActionError;