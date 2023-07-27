import { Type } from "class-transformer"
import { IsDefined, IsNotEmpty, IsNumber, isNumber, IsObject, IsString, validate, ValidateIf, ValidateNested } from "class-validator"
import { Broker } from "./Broker"
import { IdentificationDocument } from "./IdentificationDocument"

export class Bank {
    //@IsNotEmpty()
    @IsString()
    @IsDefined()
    bankId: string
    //@IsNotEmpty()
    @IsString()
    @IsDefined()
    name : string
}

export class Method {
    // estados de la validacion 
    // idStatus : boolean   = false
    // idDescriptionStatus : boolean = false
    // typeStatus : boolean = false

    accountNumberStatus : boolean = false
    expirationDateStatus : boolean = false
    bankStatus : boolean = false

    // generales 
    // @ValidateIf(o => o.idStatus === true)
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    id: string

    // @ValidateIf(o => o.idDescriptionStatus === true)
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    idDescription : string

    // @ValidateIf(o => o.typeStatus === true)
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    type : string

    @ValidateIf(o => o.accountNumberStatus === true)
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    accountNumber : string

    @ValidateIf(o => o.expirationDateStatus === true)
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    expirationDate : string

    @ValidateNested()
    @Type(() => Bank)
    bank : Bank

    async getMethod(){
       // let results = await this.resultError(this)
        let result : any = {}
        result.id = this.id
        result.idDescription = this.idDescription
        result.type = this.type
        if (this.accountNumberStatus) result.accountNumber = this.accountNumber
        if (this.expirationDateStatus) result.expirationDate =  this.expirationDate
        if (this.bankStatus) result.bank = this.bank
        return result
    }

    // async resultError(method : any){
    //     let result : any
    //       result = await validate(method).then(errors => {
    //         if (errors.length > 0) {
    //           /// si es decorador retorna boolean  return false
    //           throw ({status : 503, message : "the answer is not as expected CustomValidationPayment ", errors  : errors})
    //         } else {
    //           console.log('validation succeed');
    //            /// si es decorador retorna boolean  return true
    //           return  true
    //         }
    //       });
    //     return result 
    // }
   
}

export class Plan {
    @IsNotEmpty()
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    value: string
    @IsNotEmpty()
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    description : string
}

export class Payment {
    
    diaStatus : boolean = false
    @IsObject()
    @ValidateNested()
    @Type(() => Method)
    method : Method

    @IsObject()
    @ValidateNested()
    @Type(() => Plan)
    plan : Plan
    
    //@IsNotEmpty()
    @IsString()
    @IsDefined()
    @ValidateIf(o => o.diaStatus === true)
    dia : string

    async getMethod(){
        return {
            method : await this.method.getMethod(),
            plan : this.plan,
            dia : this.dia
        }
    }

    
}