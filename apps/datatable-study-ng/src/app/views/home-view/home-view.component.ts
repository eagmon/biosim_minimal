import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'datatable-study-ws-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css'],
})
export class HomeViewComponent {
  page_text = 'BioSimulators is a free registry of biosimulation tools. ' +
    'The registry includes tools for a broad range of frameworks (e.g., logical, kinetic), simulation algorithms (e.g., FBA, SSA), ' +
    'and model formats (e.g., BNGL, CellML, NeuroML/LEMS, SBML, Smoldyn). Many of the simulation tools provide Python packages, ' +
    'command-line programs, and Docker images with consistent interfaces. ' +
    'Together, BioSimulators makes it easier to run simulations.' +
    ' BioSimulators is powered by several conventions including SED-ML, KiSAO, COMBINE, and other standards. ';

  constructor( private _router: Router)  {

  }

  goToView(view: string){
    this._router.navigate([view]);
  }
  goToSite(siteLink: string): void {
    console.log('Site URL : ' + siteLink);
    window.open(siteLink, '_blank');
  }
}
