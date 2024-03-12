import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { Aircraft } from 'src/app/model/aircraft.model';
import { AircraftService } from 'src/app/services/aircraft.service';
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
  constructor(private aircraftService: AircraftService) { }

  ngOnInit(): void {
  }

  getAllAircrafts(){
    this.eventEmitter.emit("ALL_AIRCRAFTS");
  }

  getDesignedAircrafts(){}

  getDevelopmentAircrafts(){}
}
