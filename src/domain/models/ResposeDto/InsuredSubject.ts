import { Type } from "class-transformer"
import { IsDefined, IsNotEmpty, IsObject, IsString, ValidateIf, ValidateNested } from "class-validator"
import { Broker } from "./Broker"
import { IdentificationDocument } from "./IdentificationDocument"


export class TypeVCFN {
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    code : string

    @IsNotEmpty()
    @IsString()
    @IsDefined()
    name : string

    @IsNotEmpty()
    @IsString()
    @IsDefined()
    descripcion : string
}

export class InsuredSubject {
    
    productSubtype : string

    @ValidateIf(o => o.productSubtype === "VCFN")
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    id : string

    @ValidateIf(o => o.productSubtype === "VCFN")
    @IsObject()
    @ValidateNested()
    @Type(() => TypeVCFN)
    type : TypeVCFN

    async get(){

        switch (this.productSubtype) {
            case "VCFN":
                return {
                    id : this.id,
                    type : this.type,
                }
            default:
                return{};
        }
        
    }

    
}

