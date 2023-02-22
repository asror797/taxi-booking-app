import { NextFunction, Request, Response } from "express";
import { CreateUserDto } from "../dtos/user.dto";
import UserService from "../services/user.service";





class UserController {
   public userService = new UserService()

   public GET = async (_:Request,res:Response,next:NextFunction) => {
      try {
         res.json(await this.userService.getAllUser())
      } catch (error) {
         console.log(error)
      }
   }


   public CREATE = async (req:Request,res:Response,next:NextFunction) => {
      try {
         const userData:CreateUserDto = req.body
         res.json(await this.userService.createUser(userData))
      } catch (error) {
         console.log(error)
      }
   }

}


export default UserController;