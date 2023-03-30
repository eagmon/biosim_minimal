import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AppConfig} from "../AppConfig";
import {DataModule} from "../data/data.module";
import {UsersModule} from "../users/users.module";
import {SimulatorsModule} from "../simulators/simulators.module";
import {ProjectsModule} from "../projects/projects.module";

@Module({
  imports: [
    MongooseModule.forRoot(AppConfig.MONGO_DB_LOCAL_URI_NDJ18),
    DataModule,
    UsersModule,
    SimulatorsModule,
    ProjectsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
