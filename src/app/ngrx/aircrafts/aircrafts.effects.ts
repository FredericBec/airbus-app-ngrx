import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, catchError, map, mergeMap, of } from "rxjs";
import { AircraftService } from "src/app/services/aircraft.service";
import { AircraftsActionTypes, GetAllAircraftsActionError, GetAllAircraftsActionSuccess, GetDesignedAircraftsActionError, GetDesignedAircraftsActionSuccess, GetDevelopmentAircraftsActionError, GetDevelopmentAircraftsActionSuccess, GetSearchAircraftsAction, GetSearchAircraftsActionError, GetSearchAircraftsActionSuccess } from "./aircrafts.action";

@Injectable ()
export class AircraftsEffects{
    constructor(private aircraftService : AircraftService, private effectActions : Actions){}

    getAllAircraftsEffect: Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftsActionTypes.GET_ALL_AIRCRAFTS),
            mergeMap((action) => {
                return this.aircraftService.getAircrafts().pipe(
                    map((aircrafts) => new GetAllAircraftsActionSuccess(aircrafts)),
                    catchError((err) => of(new GetAllAircraftsActionError(err.message)))
                )
            })
        )
    );

    getDesignedAircraftsEffect: Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftsActionTypes.GET_DESIGNED_AIRCRAFT),
            mergeMap((action) => {
                return this.aircraftService.getDesignedAircrafts().pipe(
                    map((aircrafts) => new GetDesignedAircraftsActionSuccess(aircrafts)),
                    catchError((err) => of(new GetDesignedAircraftsActionError(err.message)))
                )
            })
        )
    );

    getDevelopmentAircraftsEffect: Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftsActionTypes.GET_DEVELOPMENT_AIRCRAFT),
            mergeMap((action) => {
                return this.aircraftService.getDevelopmentAircrafts().pipe(
                    map((aircrafts) => new GetDevelopmentAircraftsActionSuccess(aircrafts)),
                    catchError((err) => of(new GetDevelopmentAircraftsActionError(err.message)))
                )
            })
        )
    );

    getSearchAircraftsEffect: Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftsActionTypes.GET_SEARCH_AIRCRAFTS),
            mergeMap((action : GetSearchAircraftsAction) => {
                return this.aircraftService.getSearchAircrafts(action.payload.term).pipe(
                    map((aircrafts) => {
                        if(aircrafts && aircrafts.length > 0){
                            return new GetSearchAircraftsActionSuccess(aircrafts)

                        }else{
                            return new GetAllAircraftsActionError("aircrafts doesn't exist")
                        }
                    }),
                    catchError((err) => of(new GetSearchAircraftsActionError(err.message)))
                )
            })
        )
    )
}
