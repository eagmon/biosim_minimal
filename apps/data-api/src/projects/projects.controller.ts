import {Controller, Post} from '@nestjs/common';
import {ProjectsService} from "./projects.service";

@Controller('projects')
export class ProjectsController {

  constructor(private readonly projectService: ProjectsService) {
    // add code if needed
  }

  @Post('/items')
  async getItems () {
    const results = await this.projectService.getItems();
    return results;
  }

} // ./ProjectsController
