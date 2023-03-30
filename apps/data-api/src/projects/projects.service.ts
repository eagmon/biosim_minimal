import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {IProject} from "./project.model";

@Injectable()
export class ProjectsService {

  // collection: "biosim_projects"
  constructor(@InjectModel('projectDataItem') private readonly projectModel: Model<IProject>) {
    // add code for constructor
  }

  // find all the items for the ownerId
  public async getItems(): Promise<IProject[]> {
    console.log("Get project items requested ");
    const values = await this.projectModel.find();
    // let see them
    // console.log(JSON.stringify(values));
    return values;
  }

} // ./ProjectsService
