import { Router } from "express"
import RoleController from "../controllers/role.controller"



class RoleRoute {

   public path = '/role'
   public router = Router()
   public roleController = new RoleController()

   constructor() {
      this.initializeRoute()
   }

   public initializeRoute() {
      this.router.get(`${this.path}`,this.roleController.GET)
   }
   
}

export default RoleRoute;