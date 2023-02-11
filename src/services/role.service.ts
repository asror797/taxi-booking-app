import { IRole } from "../interfaces/role.interface";
import roleModel from "../models/role.model";



class RoleService {
   public repo = roleModel;

   public async getAllRole():Promise<IRole[]> {

      return await this.repo.find()
   }
}

export default RoleService;