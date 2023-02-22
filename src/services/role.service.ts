import { IRole } from "../interfaces/role.interface";
import roleModel from "../models/role.model";



class RoleService {
   
   private repo = roleModel;

   public async getAllRole():Promise<IRole[]> {

      return await this.repo.find().exec()
   }

   public async createRole():Promise<number> {

      return 5 ;
   }
}

export default  new RoleService();