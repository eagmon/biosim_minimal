import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpDataService} from "../../services/http-data.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {GlobalDataService} from "../../services/GlobalDataService";
import {VtEventsService} from "../../services/EventsService";
import {SimulatorEntity} from "../../entities/simulator.entity";
import {SimulatorDetailComponent} from "../simulator-detail/simulator-detail.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'datatable-study-ws-biosim-table',
  templateUrl: './biosim-table.component.html',
  styleUrls: ['./biosim-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class BiosimTableComponent implements OnInit {
  private gData: GlobalDataService;
  private _evtSvc: VtEventsService;

  private replyData: any;
  simulatorList: Array<SimulatorEntity> = new Array<SimulatorEntity>();

  columns = [
    {
      columnDef: 'id',
      header: 'Id.',
      cell: (element: ItemDisplay) => `${element.id}`,
      action: false,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: ItemDisplay) => `${element.name}`,
      action: true,
    },
    {
      columnDef: 'description',
      header: 'Description',
      cell: (element: ItemDisplay) => `${element.description}`,
      action: false,
    },
    {
      columnDef: 'version',
      header: 'Version',
      cell: (element: ItemDisplay) => `${element.version}`,
      action: false,
    },
  ];
  displayedColumns = this.columns.map(c => c.columnDef);


  clickedRows = new Set<ItemDisplay>();
  columnsToDisplay = ['id', 'name', 'description', 'version'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: ItemDisplay | null;

  items: Array<ItemDisplay>;
  private selectedItem: ItemDisplay | undefined;
  itemsDataSource: MatTableDataSource<ItemDisplay>;
  isLoadingResults = true;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  //--------------
  // Constructor
  //--------------
  constructor(private _bkndSvc: HttpDataService, public dialog: MatDialog) {
    this.gData = GlobalDataService.getInstance();
    this._evtSvc = VtEventsService.getInstance();
    this.items = new Array<ItemDisplay>();
    this.itemsDataSource = new MatTableDataSource<ItemDisplay>();
  }


  ngOnInit() {
    //------------------------------
    //  get the items for the page
    //------------------------------
    this._bkndSvc.postGetSimulators().subscribe(
      (reply: any) => {
        this.replyData = reply;    // extractData   the server assigns the data field values to the reply

        console.log('Got simulators: ', this.replyData);
        this.processItemList();
        // keep  the full data
        this.simulatorList = this.replyData as Array<SimulatorEntity>;
      },
    );

  }

// process the reply data
  private processItemList(): void {
    const itemList = this.replyData as Array<any>;

    // clear the items
    for (let i = this.items.length; i > 0; i--) {
      this.items.pop();
    }
    // now rebuild the items from the reply
    for (const item of itemList) {
      const itemDisplay: ItemDisplay = {
        id: item.id,
        name: item.name,
        description: item.description,
        version: item.version
      };
      this.items.push(itemDisplay);
      // console.log(itemDisplay);
    }
    this.itemsDataSource = new MatTableDataSource(this.items);
    // Flip flag to show that loading has finished.
    this.isLoadingResults = false;
  }

  private getSimulator(name: string): SimulatorEntity {

    for (const item of this.simulatorList) {
      if (item.name == name) {
        return item;
      }
    }
    // default
    alert('Can not find simulator');
    return this.simulatorList[0];
  }

  doSomethingRecord(name: string): void {
    console.log('I got a name: ' + name);
  }

  doAction(number: number): void {
    console.log('do some action');
    alert('Do some action number:' + number)
  }

  showSimulatorDetails(name: string): void {
    const simulator: SimulatorEntity = this.getSimulator(name);
    this.dialog.open(SimulatorDetailComponent, {
      width: '80%',
      height: '80%',
      data: {
        simulator: simulator,
      }
    });
  }
} // ./ end BiosimTableComponent

//////////////////////////////////////////
//  additional helpers outside the class
///////////////////////////////////////////


export interface ItemDisplay {
  id: string;
  name: string;
  description: string;
  version: string,
}

