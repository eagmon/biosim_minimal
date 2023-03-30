import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {ISimulator} from "./simulator.model";

@Injectable()
export class SimulatorsService {

  // collection: "biosim_db"
  constructor(@InjectModel('simulatorDataItem') private readonly simulatorModel: Model<ISimulator>) {
    // add code for constructor
  }

  // find all the items for the ownerId
  public async getItems(): Promise<ISimulator[]> {

    console.log("Get simulators items requested ");
    const values = await this.simulatorModel.find();
    // let see them
    // console.log(JSON.stringify(values));
    return values;

  }

} // ./ends SimulatorsService
