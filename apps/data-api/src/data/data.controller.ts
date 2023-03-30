import { Body, Controller, Post } from "@nestjs/common";
import {DataService} from "./data.service";

@Controller('data')
export class DataController {

  constructor(private readonly dataService: DataService) {
    // add
  }
  @Post('/add')
  async addItem (value: any   ){
       const result = await this.dataService.addNewItem(value);
    if ( result.stat == "failed") {
      return {
          msg: 'Data item addition failed ',
      };
    } else {
      return {
        msg: 'Data item successfully added',
      }
    }
  }
  @Post('/items')
  // (@Body('ownerId') ownerId: string)
  async getItems () {
    const  ownerId: string = "placeholder1234";
    const results = await this.dataService.getItems(ownerId);
    return results;

  }

} // ./End class DataController
