import { Type } from "class-transformer"
import { IsDefined, IsNotEmpty, IsObject, IsString, ValidateNested } from "class-validator"
import { Company } from "./Company"

export class Product {
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    id: string
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    productType: string
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    productSubtype: string
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    description: string
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    line: string
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    plan : string
    @IsObject()
    @ValidateNested()
    @Type(() => Company)
    company : Company
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    name: string
    // @IsDefined()
    isLiabilityCarInsurance: boolean

    getDto(){
        return {
            id: this.id,
            productType: this.productType,
            productSubtype: this.productSubtype,
            description: this.description,
            line: this.line,
            plan : this.plan ,
            company : this.company.getDto() ,
            name: this.name,
            isLiabilityCarInsurance: this.isLiabilityCarInsurance,
        }
    }
}