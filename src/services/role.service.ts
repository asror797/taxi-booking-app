import { CreateRoleDto } from "../dtos/role.dto";
import { IRole } from "../interfaces/role.interface";
import roleModel from "../models/role.model";



class RoleService {
   
   private repo = roleModel;

   public async getAllRole():Promise<IRole[]> {

      return await this.repo.find().exec()
   }

   public async createRole(params:CreateRoleDto):Promise<IRole> {

      // const newRole:IRole = new this.repo()

      return await this.repo.create({...params});
   }
}

export default  new RoleService();