import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "./material.module";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "./routing.module";
import {TableScreenComponent} from "./views/table-screen/table-screen.component";
import {BiosimTableComponent} from "./views/biosim-table/biosim-table.component";
import {HttpDataService} from "./services/http-data.service";
import {GlobalDataService} from "./services/GlobalDataService";
import {SimulatorDetailComponent} from "./views/simulator-detail/simulator-detail.component";
import {HomeViewComponent} from "./views/home-view/home-view.component";
import {ProjectsViewComponent} from "./views/projects-view/projects-view.component";
import {ProjectDetailComponent} from "./views/project-detail/project-detail.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    ProjectsViewComponent,

    TableScreenComponent,
    BiosimTableComponent,
    SimulatorDetailComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    GlobalDataService,
    HttpDataService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
