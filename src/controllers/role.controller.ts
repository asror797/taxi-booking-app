import { NextFunction, Request, Response } from "express";
import RoleService from "../services/role.service";




class RoleController {

   public roleService = RoleService;

   public GET =  async(req:Request,res:Response,next:NextFunction) => {
      try {
         res.json(await this.roleService.getAllRole())
      } catch (error) {
         console.log(error)
      }
   }
}

export default RoleController;