import { NextFunction, Request, Response } from "express";
import UserService from "../services/user.service";





class UserController {
   public userService = new UserService()

   public GET = async (req:Request,res:Response,next:NextFunction) => {
      try {
         res.json(await this.userService.getAllUser())
      } catch (error) {
         console.log(error)
      }
   }

}


export default UserController;