import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import {TableScreenComponent} from "./views/table-screen/table-screen.component";
import {BiosimTableComponent} from "./views/biosim-table/biosim-table.component";
import {HomeViewComponent} from "./views/home-view/home-view.component";
import {ProjectsViewComponent} from "./views/projects-view/projects-view.component";




const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeViewComponent },
  { path: 'projects', component: ProjectsViewComponent },
  { path: 'simtbl', component: BiosimTableComponent},
  { path: 'index.html', component: AppComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
