import { IsDefined, IsNotEmpty, IsObject, IsString, ValidateNested } from "class-validator"
import { identificationDocument } from "../identificationDocument"
import { Company } from "./Company"
import  'reflect-metadata'
import { Type } from "class-transformer"
import { IdentificationDocument } from "./IdentificationDocument"

export class  Level {
    // @IsNotEmpty()
    // @IsString()
    // @IsDefined()
    name: string
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    code: string
}
export class Area {
    @IsObject()
    @ValidateNested()
    @Type(() => Level)
    @IsDefined()
    level1: Level

    @IsDefined()
    @IsObject()
    @ValidateNested()
    @Type(() => Level)
    level2: Level

    @IsObject()
    @ValidateNested()
    @Type(() => Level)
    level3: Level

    @IsDefined()
    @IsObject()
    @ValidateNested()
    @Type(() => Level)
    level4: Level

}

export class Address {
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    streetName : string

    @IsNotEmpty()
    @IsString()
    @IsDefined()
    streetNumber : string

    postalCode : string = ""

    @IsObject()
    @ValidateNested()
    @Type(() => Area)
    area : Area

    //@IsNotEmpty() pueden ser ""
    // @IsString()
    // @IsDefined()
    apartmentNumber: string = ""
    
    //@IsNotEmpty()pueden ser ""
    // @IsString()
    // @IsDefined()
    apartmentFloor: string = ""

    getDtoInsured(){
        return {
            streetName : this.streetName,
            streetNumber : this.streetNumber,
            postalCode : this.postalCode,
            area : this.area
        }
    }

    getDtoProposalHolder(){
        return {
            streetName : this.streetName,
            streetNumber : this.streetNumber,
            area : this.area ,
            apartmentFloor : this.apartmentFloor
        }
    }
}

export class PreferredContact {
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    phone : string

    // @IsNotEmpty()
    // @IsString()
    // @IsDefined()
    email : string = ""

    @IsNotEmpty()
    @IsString()
    @IsDefined()
    cellPhone : string
}

export class GeneralPartyInfo {
    @IsObject()
    @ValidateNested()
    @Type(() => Address)
    address  : Address 

    @IsObject()
    @ValidateNested()
    @Type(() => PreferredContact)
    preferredContact : PreferredContact

    @IsNotEmpty()
    @IsString()
    @IsDefined()
    names : string

    @IsNotEmpty()
    @IsString()
    @IsDefined()
    paternal : string

    maternal : string

}

export class Insured {
    @IsObject()
    @ValidateNested()
    @Type(() => IdentificationDocument)
    identificationDocument : IdentificationDocument

    @IsObject()
    @ValidateNested()
    @Type(() => GeneralPartyInfo)
    generalPartyInfo : GeneralPartyInfo

    @IsDefined()  
    @IsNotEmpty()
    @IsString()
    birthdate: string

    @IsDefined()  
    @IsNotEmpty()
    @IsString()
    nationality: string

    // @IsDefined()  
    // @IsNotEmpty()
    // @IsString()
    genderCode: string = ""
    
}

export class InsuredList {
    @IsObject()
    @ValidateNested()
    @Type(() => IdentificationDocument)
    identificationDocument : IdentificationDocument
    getDto(){
        return {
            identificationDocument: this.identificationDocument.getDto(),
        }
    }
}

