import { Component, OnInit } from '@angular/core';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { Aircraft } from 'src/app/model/aircraft.model';
import { AircraftService } from 'src/app/services/aircraft.service';
import { AppDataState, DataStateEnum } from 'src/app/state/aircraft.state';

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit {

  aircrafts$: Observable<AppDataState<Aircraft[]>> | null = null;

  readonly dataStateEnum = DataStateEnum;

  constructor(private aircraftService : AircraftService) { }

  ngOnInit(): void {
  }

  onActionEvent($event : any){
    if($event == "ALL_AIRCRAFTS") this.getAllAircrafts();
  }

  getAllAircrafts(){
    this.aircrafts$ = this.aircraftService.getAircrafts().pipe(
      map(data => ({dataState : DataStateEnum.LOADED, data : data})),
      startWith({dataState : DataStateEnum.LOADING}),
      catchError(err => of({dataState : DataStateEnum.ERROR}))
    )
  }

  getDesignedAircrafts(){}

  getDevelopmentAircrafts(){}
}
