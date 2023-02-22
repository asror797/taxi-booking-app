import { CreateUserDto } from "../dtos/user.dto";
import { IUser } from "../interfaces/users.interface";
import userModel from "../models/users.model";




class UserService {


   private repo = userModel;


   public async getAllUser():Promise<IUser[]>{
      return await this.repo.find().exec()
   }


   public async createUser(userData:CreateUserDto):Promise<IUser> {

      return await this.repo.create(userData);
   }
}


export default UserService;