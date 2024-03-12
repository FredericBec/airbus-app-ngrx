import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AircraftsState, AircraftsStateEnum } from 'ngrx/aircrafts.state';
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

  aircraftsState$: Observable<AircraftsState> | null = null;

  readonly aircraftsStateEnum = AircraftsStateEnum;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.aircraftsState$ = this.store.pipe(
      map((state) => state.airbusState)
    );
  }

  
}
