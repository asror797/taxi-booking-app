import { IUser } from "../interfaces/users.interface";
import userModel from "../models/users.model";




class UserService {


   private repo = userModel;


   public async getAllUser():Promise<IUser[]>{
      return await this.repo.find().exec()
   }
}


export default UserService;