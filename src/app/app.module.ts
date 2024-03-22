import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AircraftsComponent } from './components/aircrafts/aircrafts.component';
import { AircraftsNavbarComponent } from './components/aircrafts/aircrafts-navbar/aircrafts-navbar.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AircraftsReducer } from 'src/app/ngrx/aircrafts/aircrafts.reducer';
import { AircraftsEffects } from 'src/app/ngrx/aircrafts/aircrafts.effects';
import { LoginoutComponent } from './components/loginout/loginout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginEffects } from './ngrx/authenticate/login.effects';
import { LoginReducer } from './ngrx/authenticate/login.reducer';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AircraftsComponent,
    AircraftsNavbarComponent,
    LoginoutComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({airbusState: AircraftsReducer, authState: LoginReducer}),
    EffectsModule.forRoot([AircraftsEffects, LoginEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
