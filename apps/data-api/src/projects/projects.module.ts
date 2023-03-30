import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {ProjectDataSchema} from "./project.model";

@Module({
  imports: [
    MongooseModule.forFeature([{name: "projectDataItem", schema: ProjectDataSchema }] ),
  ],
  providers: [ProjectsService],
  controllers: [ProjectsController],
  exports: [ProjectsService],
})
export class ProjectsModule {}
