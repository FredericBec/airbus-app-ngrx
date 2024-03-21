import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AircraftsState, AircraftsStateEnum } from 'src/app/ngrx/aircrafts/aircrafts.state';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { Aircraft } from 'src/app/model/aircraft.model';
import { AircraftService } from 'src/app/services/aircraft.service';
import { AppDataState, DataStateEnum } from 'src/app/state/aircraft.state';
import { Laboratory } from 'src/app/test/laboratory';
import { AddOperationAction, RemoveOperationAction } from 'src/app/ngrx/aircrafts/operations.action';
import { selectCountAlertAircrafts } from 'src/app/ngrx/aircrafts/aircrafts.selectors';

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit {

  aircraftsState$: Observable<AircraftsState> | null = null;

  countAlertAircrafts$: Observable<number>;
  //laboratory: Laboratory = new Laboratory;
  readonly aircraftsStateEnum = AircraftsStateEnum;

  constructor(private store: Store<any>) { 
    this.countAlertAircrafts$ = store.select(selectCountAlertAircrafts);
  }
  
  ngOnInit(): void {
    //if(this.laboratory) this.laboratory.tests();
    this.aircraftsState$ = this.store.pipe(
      map((state) => state.airbusState)
    );
  }

  addOne(){
    const payload = {
      id: "1",
      name: "po"
    }
    this.store.dispatch(new AddOperationAction(payload));
  }
  
  removeOne(){
    const payload = {
      id: "1",
      name: "po"
    }
    this.store.dispatch(new RemoveOperationAction(payload.id));
  }
}
