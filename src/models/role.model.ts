import { model , Schema, Document, Model } from "mongoose";
import { IRole } from "../interfaces/role.interface";

const roleSchema: Schema = new Schema(
   {
      name: {
         type: String,
         required: true,
         enum: ['ADMIN', 'CLIENT', 'DRIVER']
      },
      permissionURI: {
         type: [String],
         required: true
      }
   },
   {
      timestamps: true
   }
)


const roleModel = model<IRole & Document>('Role',roleSchema)

// const  roleModel:Model<IRole> = model<IRole>('Role',roleSchema)

export default roleModel;

