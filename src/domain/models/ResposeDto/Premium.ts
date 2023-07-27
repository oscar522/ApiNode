import { ArrayMaxSize, ArrayMinSize, IsArray, IsDefined, IsNotEmpty, IsObject, IsString, ValidateNested } from "class-validator"
import { Currency } from "./Currency"
import  'reflect-metadata'
import { Type } from "class-transformer"

export class Premium {
    @IsArray()
    @ValidateNested({ each: true })
    @ArrayMinSize(2)
    @ArrayMaxSize(2)
    @Type(() => Currency)
    amounts : Currency[]

    @IsArray()
    @ValidateNested({ each: true })
    @ArrayMinSize(2)
    @ArrayMaxSize(2)
    @Type(() => Currency)
    installments : Currency[]

    // @IsNotEmpty()
    @IsString()
    @IsDefined()
    paymentFrecuency: string
    // @IsNotEmpty()
    // @IsString()
    // @IsDefined()
    // lastChargeDate: string

    public async getDto(){
        return {
            amounts : this.amounts.map(x => { return x.getDto()}),
            installment : this.installments.map(x => { return x.getDto()}),
            paymentFrecuency : this.paymentFrecuency,
        }
    }

}