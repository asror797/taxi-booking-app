import { model , Schema, Document } from "mongoose";
import { IUser } from "../interfaces/users.interface";


const userSchema: Schema = new Schema(
   {
      firstName: {
         type: String,
         required: true
      },
      lastName: {
         type: String,
         required: true
      }
   }
)