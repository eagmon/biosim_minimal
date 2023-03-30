import {Component, OnInit} from '@angular/core';
import {SimulatorEntity} from "../../entities/simulator.entity";
import {ProjectEntity} from "../../entities/project.entity";
import {ItemDisplay} from "../biosim-table/biosim-table.component";
import {HttpDataService} from "../../services/http-data.service";
import {MatDialog} from "@angular/material/dialog";
import {GlobalDataService} from "../../services/GlobalDataService";
import {VtEventsService} from "../../services/EventsService";
import {MatTableDataSource} from "@angular/material/table";
import {SimulatorDetailComponent} from "../simulator-detail/simulator-detail.component";

@Component({
  selector: 'datatable-study-ws-projects-view',
  templateUrl: './projects-view.component.html',
  styleUrls: ['./projects-view.component.css'],
})
export class ProjectsViewComponent implements OnInit {


  private replyData: any;
  projectsList: Array<ProjectEntity> = new Array<ProjectEntity>();
  columns = [
    {
      columnDef: 'id',
      header: 'Id.',
      cell: (element: ProjectDisplay) => `${element.id}`,
      action: true,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: ProjectDisplay) => `${element.name}`,
      action: false,
    },
    {
      columnDef: 'simulator',
      header: 'Simulator',
      cell: (element: ProjectDisplay) => `${element.simulator}`,
      action: false,
    },

    {
      columnDef: 'description',
      header: 'Description',
      cell: (element: ProjectDisplay) => `${element.description}`,
      action: false,
    },
    {
      columnDef: 'created',
      header: 'Created',
      cell: (element: ProjectDisplay) => `${element.created}`,
      action: false,
    },
  ];
  displayedColumns = this.columns.map(c => c.columnDef);

  items: Array<ProjectDisplay>;
  itemsDataSource: MatTableDataSource<ProjectDisplay>;
  isLoadingResults = true;
  //--------------
  // Constructor
  //--------------
  constructor(private _bkndSvc: HttpDataService, public dialog: MatDialog) {

    this.items = new Array<ProjectDisplay>();
    this.itemsDataSource = new MatTableDataSource<ProjectDisplay>();
  }


  ngOnInit() {
    //------------------------------
    //  get the items for the page
    //------------------------------
    this._bkndSvc.postGetProjects().subscribe(
      (reply: any) => {
        this.replyData = reply;    // extractData  the server assigns the data field values to the reply

        console.log('Got simulators: ', this.replyData);
        this.processProjectsList();
        // keep  the full data
        this.projectsList = this.replyData as Array<ProjectEntity>;
      },
    );
  }

// process the reply data
  private processProjectsList(): void {
    const itemList = this.replyData as Array<any>;
    // clear the items
    for (let i = this.items.length; i > 0; i--) {
      this.items.pop();
    }
    // now rebuild the items from the reply
    for (const item of itemList) {
      const itemDisplay: ProjectDisplay = {
        id: item.id,
        name: item.simulationRun.name,
        description: 'placeholder',
        // description: item.simulationRun.metadata[0].description,
        simulator: item.simulationRun.run.simulator.name,
        created: item.created.substring(0, item.created.indexOf('T')),
      };
      this.items.push(itemDisplay);
      console.log(itemDisplay);
    }
    this.itemsDataSource = new MatTableDataSource(this.items);
    console.log('process project list ..');
    this.isLoadingResults = false;
  }

  private getProject(idStr: string): ProjectEntity {

    for (const item of this.projectsList) {
      if (item.id === idStr) {
        return item;
      }
    }
    // default
    alert('Can not find simulator');
    return this.projectsList[0];
  }

  showProjectDetails(id: string): void {
    const project: ProjectEntity = this.getProject(id);
    this.dialog.open(SimulatorDetailComponent, {
      width: '80%',
      height: '80%',
      data: {
        simulator: project,
      }
    });
  }

  doAction(number: number): void {
    console.log('do some action');
    alert('Do some action number:' + number)
  }
} // ./ProjectsViewComponent
//////////////////////////////////////////
//  additional helpers outside the class
///////////////////////////////////////////


export interface ProjectDisplay {
  id: string;
  name: string;
  simulator: string;
  description: string;
  created: string;
}
