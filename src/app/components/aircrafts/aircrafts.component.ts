import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AircraftsState, AircraftsStateEnum } from 'src/app/ngrx/aircrafts/aircrafts.state';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { Aircraft } from 'src/app/model/aircraft.model';
import { AircraftService } from 'src/app/services/aircraft.service';
import { AppDataState, DataStateEnum } from 'src/app/state/aircraft.state';
import { Laboratory } from 'src/app/test/laboratory';

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit {

  aircraftsState$: Observable<AircraftsState> | null = null;

  laboratory: Laboratory = new Laboratory;
  readonly aircraftsStateEnum = AircraftsStateEnum;

  constructor(private store: Store<any>) { 
  }
  
  ngOnInit(): void {
    if(this.laboratory) this.laboratory.tests();
    this.aircraftsState$ = this.store.pipe(
      map((state) => state.airbusState)
    );
  }

  
}
