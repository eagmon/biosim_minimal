import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import { DataService } from './data.service';
import { DataController } from './data.controller';
import { DataItemSchema } from "./data.model";

@Module({
  imports: [
    MongooseModule.forFeature([{name: "dataItem", schema: DataItemSchema }] ),
  ],
  controllers :[DataController],
  providers :[DataService],
  exports: [DataService],
})
export class DataModule {}
