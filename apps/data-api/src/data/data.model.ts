import * as MONGO from "mongoose";

export const DataItemSchema = new MONGO.Schema({
    itemId: { type: String },
    name: { type: String, required: "Enter a  name" },
    description: {
      type: String,
      required: "Enter description"
    },
    ownerId: { type: String },
    createdDate: {
      type: Date,
      default: Date.now
    }
  },
  { collection: "my_items" }
);

export interface DataItem extends MONGO.Document {
  _id: string;
  itemId: string;
  name: string;
  description: string;
  ownerId: string;
  creatDate: Date;
}
