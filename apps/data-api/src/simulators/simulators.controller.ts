import {Controller, Post} from '@nestjs/common';
import {SimulatorsService} from "./simulators.service";

@Controller('simulators')
export class SimulatorsController {



  constructor(private readonly simulatorsService: SimulatorsService) {
    // add
  }

  @Post('/items')
  async getItems () {

    const results = await this.simulatorsService.getItems();
    return results;
  }

} // ./End class DataController
