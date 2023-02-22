import { NextFunction, Request, Response } from "express";
import { CreateRegionDto } from "../dtos/region.dto";
import RegionService from "../services/region.service";




class RegionController {
   public regionService = new RegionService()

   public GET = async (req:Request,res:Response,next:NextFunction) => {
      try {
         res.json(await this.regionService.getAllRegion())
      } catch (error) {
         console.log(error)
      }
   }

   public CREATE = async (req:Request,res:Response,next:NextFunction) => {
      try {
         const regionData:CreateRegionDto = req.body
         res.json(await this.regionService.createReagion(regionData))
      } catch (error) {
         console.log(error)
      }
   }
}


export default RegionController;