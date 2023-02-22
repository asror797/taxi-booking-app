import { model, Schema, Document } from "mongoose";
import { IRegion } from "../interfaces/region.interface";


const regionSchema: Schema = new Schema(
   {
      name: {
         type: String,
         required:true
      }
   },
   {
      timestamps:true
   }
)

const regionModel = model<IRegion & Document>('Region',regionSchema);


export default regionModel;

