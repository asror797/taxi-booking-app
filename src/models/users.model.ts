import { model, Schema, Document} from "mongoose"
import { IUser } from "../interfaces/users.interface"


const userSchema: Schema = new Schema(
   {
      firstName: {
         type: String,
         required: true
      },
      lastName: {
         type: String,
         required: true
      },
      password: {
         type: String,
         required: true
      },
      phoneNumberVerified: {
         type:Boolean,
         default:false
      },
      isActive: {
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