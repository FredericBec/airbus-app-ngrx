import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetAllAircraftsAction, GetDesignedAircraftsAction, GetDevelopmentAircraftsAction, GetSearchAircraftsAction } from 'src/app/ngrx/aircrafts/aircrafts.action';


@Component({
  selector: 'app-aircrafts-navbar',
  templateUrl: './aircrafts-navbar.component.html',
  styleUrls: ['./aircrafts-navbar.component.css']
})
export class AircraftsNavbarComponent implements OnInit {
  
  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }

  getAllAircrafts(){
    this.store.dispatch(new GetAllAircraftsAction({}));
  }

  getDesignedAircrafts(){
    this.store.dispatch(new GetDesignedAircraftsAction({}));
  }

  getDevelopmentAircrafts(){
    this.store.dispatch(new GetDevelopmentAircraftsAction({}));
  }

  onSearch(term : string){
    this.store.dispatch(new GetSearchAircraftsAction({term}));
  }
}
