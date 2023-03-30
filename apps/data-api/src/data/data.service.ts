import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from 'mongoose';
import {DataItem} from "./data.model";
import { User } from "../users/users.model";

@Injectable()
export class DataService {
// collection: 'my_items',
  constructor(@InjectModel('dataItem') private readonly dataModel: Model<DataItem>) {
    // add code for constructor
  }

  public async addNewItem(value: any ): Promise<any> {
    const newItem = new this.dataModel({ value  });
    const result= {stat: 'OK', values:{} };
    await newItem.save((err:any )   => {
      if (err) {
        result.stat = "failed";
        result.values = err;
        console.log("Save to DB error: " + err);
        return(result);
      } else {
        // this will execute after the function returns ...
        console.log("New Item added successfully");
        result.stat = "success";
        result.values = "New Item added successfully";
        return(result);
      }
    });
  }

  // find all the items for the ownerId
  public async getItems(ownerId: string): Promise<DataItem[]> {
    const result= {stat: 'OK', values:{} };
    let replyJSON: DataItem[] ;
    console.log("Get Data items requested ");
    const values = await this.dataModel.find({"ownerId": ownerId});
    console.log("Got items back I think:");
    // let see them
    console.log(JSON.stringify(values));
    return values;

  }


}
