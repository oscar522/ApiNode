import { Type } from "class-transformer"
import { IsDefined, IsNotEmpty, IsObject, IsString, ValidateNested } from "class-validator"
import { IdentificationDocument } from "./IdentificationDocument"
import  'reflect-metadata'

export class Broker {
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    id: string
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    name: string
    @IsObject()
    @ValidateNested()
    @Type(() => IdentificationDocument)
    identificationDocument : IdentificationDocument

    getDto(){
        return {
            id : this.id,
            name : this.name,
            identificationDocument : this.identificationDocument.getDto()
        } 
    }
}