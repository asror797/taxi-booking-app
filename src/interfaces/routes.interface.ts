import { Document } from "mongoose";


export interface IRole extends Document {
   name: 'Admin' | 'Client' | 'Driver';
   permissionURI: string[];
}