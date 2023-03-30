import { Module } from '@nestjs/common';
import { SimulatorsService } from './simulators.service';
import { SimulatorsController } from './simulators.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {SimulatorDataSchema} from "./simulator.model";


@Module({
  imports: [
    MongooseModule.forFeature([{name: "simulatorDataItem", schema: SimulatorDataSchema }] ),
  ],
  providers: [SimulatorsService],
  controllers: [SimulatorsController],
  exports: [SimulatorsService],
})
export class SimulatorsModule {}
