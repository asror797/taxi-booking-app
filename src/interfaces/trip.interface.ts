import { Document } from "mongoose";
import { IRegion } from "./region.interface";
import { IUser } from "./users.interface";



export interface ITrip extends Document {
   driver:IUser['_id']
   from:IRegion['_id']
   to:IRegion['_id']
   passengers:[IUser]
   departure_time:string
   cost:number
   bargain:boolean
}