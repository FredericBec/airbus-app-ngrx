import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AircraftsComponent } from './components/aircrafts/aircrafts.component';
import { UserGuard } from './guards/user.guard';
import { LoginoutComponent } from './components/loginout/loginout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: "aircrafts", component: AircraftsComponent, canActivate: [UserGuard]},
  {path: "login", component : LoginoutComponent},
  {path: "", redirectTo: "aircrafts", pathMatch: "full"},
  {path: "404", component: PageNotFoundComponent},
  {path: "**", redirectTo: "404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
