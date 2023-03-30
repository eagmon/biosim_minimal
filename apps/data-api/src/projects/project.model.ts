import * as MONGO from "mongoose";

export const ProjectDataSchema = new MONGO.Schema({
    id: {type: String},
    name: {type: String},
    simulationRun: {type: Object },
    owner: {type: Object },
    created: Date,
    updated: Date,
  },
  {collection: "projects"}
);

export interface IProject extends MONGO.Document {
  _id: string;
  id: string;
  simulationRun: object;
  owner: object;
  created: Date;
  updated: Date;
}
