import * as MONGO from "mongoose";

export const SimulatorDataSchema = new MONGO.Schema({
    id: {type: String},
    name: {type: String},
    description: {type: String },
  },
  {collection: "simulators"}
);

export interface ISimulator extends MONGO.Document {
  _id: string;
  id: string;
  biosimulators: object;
  name: string;
  version: string;
  description: string;
  urls: object[];
  image: string | null;
  cli: object | null;
  pythonApi: object | null;
  authors: object[];
  references: object;
  license: object | null;
  algorithms: object[];
  interfaceTypes: string[];
  supportedOperatingSystemTypes: string[];
  supportedProgrammingLanguages: string[];
  funding: string[];
}
