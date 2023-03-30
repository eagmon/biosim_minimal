import * as MONGO from "mongoose"
export const UserSchema = new MONGO.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export interface User extends MONGO.Document {
  _id: string;
  username: string;
  password: string;
}
