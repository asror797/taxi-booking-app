import { Document } from "mongoose";
import { IRole } from "./routes.interface";



export interface IUser extends Document {
   firstName:string
   lastName:string
   password:string
   phoneNumberVerified:boolean
   role:IRole['_id']
}

