import { CreateRegionDto } from "../dtos/region.dto";
import { IRegion } from "../interfaces/region.interface";
import regionModel from "../models/region.model";




class RegionService {
   public repo = regionModel;


   public async getAllRegion():Promise<IRegion[]> {
      return await this.repo.find().exec();
   }


   public async createReagion(regionData:CreateRegionDto) {

      return await this.repo.create(regionData);
   }
}


export default RegionService;