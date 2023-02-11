import { Document } from "mongoose";


export interface IRole extends Document {
   name: 'admin' | 'client' | 'driver';
   permissionURI: string[];
}