import { Document } from "mongoose";
import { IRole } from "./role.interface";



export interface IUser extends Document {
   firstName:string
   lastName:string
   password:string
   phoneNumberVerified:boolean
   isActive:boolean
   role:IRole['_id']
}

