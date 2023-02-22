import { Document } from "mongoose";
import { IRole } from "./role.interface";



export interface IUser extends Document {
   firstname:string
   lastname:string
   password:string
   phonenumber:string
   isactive:boolean
   role:IRole['_id']
}

