import { model, Schema, Document} from "mongoose"
import { IUser } from "../interfaces/users.interface"


const userSchema: Schema = new Schema(
   {
      firstname: {
         type: String,
         required: true
      },
      lastname: {
         type: String,
         required: true
      },
      password: {
         type: String,
         required: true
      },
      phonenumber: {
         type: String,
         required:true
      },
      phonenumberverified: {
         type:Boolean,
         default:false
      },
      is_active: {
         type: Boolean,
         default:true
      },
      role: {
         type: Schema.Types.ObjectId,
         ref:'Role',
         required:true
      }

   },
   {
      timestamps: true
   }
)

const userModel = model<IUser & Document>('User',userSchema)

export default userModel;