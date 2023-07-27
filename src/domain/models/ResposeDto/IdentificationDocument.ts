import { IsDefined, IsNotEmpty, IsString } from "class-validator"
import  'reflect-metadata'

export class IdentificationDocument {
    //@IsNotEmpty()
    @IsString()
    @IsDefined()
    type: string
   // @IsNotEmpty()
    @IsString()
    @IsDefined()
    number: string

    getDto(){
       return {
        type : this.type,
        number : this.number 
       } 
    }
    
}