import { EntityState } from "@ngrx/entity";
import { Aircraft } from "src/app/model/aircraft.model";
import { Operation } from "./operation.state";

export enum AircraftsStateEnum{
    LOADING = "Loading",
    LOADED = "Loaded",
    ERROR = "Error",
    INITIAL = "Initial"
}

export interface AircraftsState extends EntityState<Operation>{
    aircrafts : Aircraft[],
    errorMessage : string,
    dataState : AircraftsStateEnum
}

export const initState : AircraftsState = {
    aircrafts: [],
    errorMessage: "",
    dataState: AircraftsStateEnum.INITIAL,
    ids: [],
    entities: {}
}