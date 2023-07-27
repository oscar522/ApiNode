import { Type } from "class-transformer"
import { IsDefined, IsNotEmpty, IsObject, IsString, ValidateNested } from "class-validator"
import { IdentificationDocument } from "./IdentificationDocument"

export class SalesExecutive {
    //@IsNotEmpty()
    @IsString()
    @IsDefined()
    id: string
    @IsObject()
    @ValidateNested()
    @Type(() => IdentificationDocument)
    identificationDocument : IdentificationDocument
    //@IsNotEmpty()
    @IsString()
    @IsDefined()
    fullName: string = ""

    getDto(){
        return {
            id : this.id,
            identificationDocument : this.identificationDocument.getDto(),
            fullName : this.fullName,
        } 
    }
}