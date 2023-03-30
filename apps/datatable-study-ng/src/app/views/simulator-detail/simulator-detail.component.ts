import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {SimulatorEntity} from "../../entities/simulator.entity";

@Component({
  selector: 'datatable-study-ws-simulator-detail',
  templateUrl: './simulator-detail.component.html',
  styleUrls: ['./simulator-detail.component.css'],
})
export class SimulatorDetailComponent implements OnInit {

  @Input() simulator: any;
  // some formated properties
  simulatorFormatted : SimulatorFormattedDisplay = {
    created: ' ',
    updated: ' ',
    authors: '',
    fullJson:'',
    interfaceType: ''
  } ;

  constructor(public dialog: MatDialog,
                public dialogRef: MatDialogRef<SimulatorDetailComponent>,
                       @Inject(MAT_DIALOG_DATA) public data: any) {
    this.dialogRef.disableClose = true;  // so just a click or esc key don't close
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    const simulatorData: any = this.data.simulator;
    this.simulator = simulatorData as SimulatorEntity;
    this.formatedSomeProperties();
    console.log('details init')
  }

  private formatedSomeProperties(): void {
    // timestamp just keep the date
    const created = this.simulator.biosimulators.created;
    const updated = this.simulator.biosimulators.updated;

    this.simulatorFormatted.created = created.substring(0, created.indexOf('T'));
    this.simulatorFormatted.updated = updated.substring(0, updated.indexOf('T'));
    // this.simulatorFormated.created =created;
    // this.simulatorFormated.updated =updated;
    const authors = this.simulator.authors as Array<any>;
    let authorsStr = '';
    for (const item  of authors) {
      let middleName = '';
      if (item.middleName !== null) {
        middleName = ' ' + item.middleName + ' ';
      } else {
        middleName = ' ';
      }
      authorsStr += item.firstName + middleName + item.lastName + ', ';
    }
    this.simulatorFormatted.authors = authorsStr;
    this.simulatorFormatted.fullJson = JSON.stringify(this.simulator, null, 2);
    // interface type
    const interfaceType = this.simulator.interfaceTypes as Array<string>;
    let ifcTpeStr = '';
    for (const str  of interfaceType) {
      ifcTpeStr = str + '\n';
    }
    this.simulatorFormatted.interfaceType = ifcTpeStr;
  }

  // --------------------
  // Actions
  // --------------------

  doSomething(): void {
    console.log('do something!!')
    alert('Do something');
  }
} // ./end SimulatorDetailComponent
//////////////////////////////////////////
//  additional helpers outside the class
///////////////////////////////////////////


export interface SimulatorFormattedDisplay {
  created: string;
  updated: string;
  authors: string;
  fullJson: string;
  interfaceType: string;

}
