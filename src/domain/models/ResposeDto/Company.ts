import { Type } from "class-transformer"
import { IsDefined, IsNotEmpty, IsObject, IsString, ValidateNested } from "class-validator"
import { IdentificationDocument } from "./IdentificationDocument"
export class Company {
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    tradeName: string
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    businessName: string
    @IsObject()
    @ValidateNested()
    @Type(() => IdentificationDocument)
    identificationDocument: IdentificationDocument

    getDto(){
        return {
            tradeName : this.tradeName,
            businessName : this.businessName,
            identificationDocument : this.identificationDocument.getDto(),
        } 
    }
}