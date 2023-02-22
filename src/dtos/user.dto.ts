import { IsString } from "class-validator";




export class CreateUserDto {
   @IsString()
   fistName:string

   @IsString()
   lastName:string

   @IsString()
   password:string

   @IsString()
   role:string
}