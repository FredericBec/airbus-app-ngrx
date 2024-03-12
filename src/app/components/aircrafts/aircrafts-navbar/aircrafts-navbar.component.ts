import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetAllAircraftsAction } from 'ngrx/aircrafts.action';
import { Observable} from 'rxjs';
import { Aircraft } from 'src/app/model/aircraft.model';
import { AppDataState, DataStateEnum } from 'src/app/state/aircraft.state';

@Component({
  selector: 'app-aircrafts-navbar',
  templateUrl: './aircrafts-navbar.component.html',
  styleUrls: ['./aircrafts-navbar.component.css']
})
export class AircraftsNavbarComponent implements OnInit {
  @Output() eventEmitter : EventEmitter<any> = new EventEmitter();
  aircrafts$: Observable<AppDataState<Aircraft[]>> | null = null;

  readonly dataStateEnum = DataStateEnum;
  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }

  getAllAircrafts(){
    this.store.dispatch(new GetAllAircraftsAction({}));
  }

  getDesignedAircrafts(){}

  getDevelopmentAircrafts(){}
}
