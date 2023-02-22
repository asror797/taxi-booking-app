import { Router } from "express"
import RegionController from "../controllers/region.controller"



class RegionRoute {
   public path = '/region'
   public router = Router()
   public regionController = new RegionController()


   constructor() {
      this.initializeRoutes()
   }


   private initializeRoutes() {
      this.router.get(`${this.path}`,this.regionController.GET)
      this.router.post(`${this.path}`,this.regionController.CREATE)
   }
}

export default RegionRoute;