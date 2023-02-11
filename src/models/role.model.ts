import { model , Schema, Document } from "mongoose";
import { IRole } from "../interfaces/role.interface";

const roleSchema: Schema = new Schema(
   {
      name: {
         type: String,
         required: true,
         enum: ['admin', 'client', 'driver']
      },
      permissionURI: {
         type: [String],
         required: true
      }
   }
)


const roleModel = model<IRole & Document>('Role',roleSchema)

export default roleModel;

