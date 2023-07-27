import { IsDefined, IsNotEmpty, IsObject, IsString, ValidateNested } from "class-validator"
import { Currency } from "./Currency"
import  'reflect-metadata'
import { Type } from "class-transformer"
import { IdentificationDocument } from "./IdentificationDocument"
import { GeneralPartyInfo } from "./Insured"
import { toNamespacedPath } from "path"


export class Beneficiaries { // no esta llegando en IC 
    @IsObject()
    @ValidateNested()
    @Type(() => IdentificationDocument)
    identificationDocument : IdentificationDocument

    @IsObject()
    @ValidateNested()
    @Type(() => GeneralPartyInfo)
    generalPartyInfo : GeneralPartyInfo


    relationship : string = "" 

    allocationRules : any = {}
    getDto(){

        const beneficiariesParse : any = { 
            names :  this.generalPartyInfo.names,
            paternal :  this.generalPartyInfo.paternal,
            maternal :  this.generalPartyInfo.maternal,
            fullName : this.generalPartyInfo.names + ' ' + this.generalPartyInfo.paternal + ' ' + this.generalPartyInfo.maternal 
        }

        return {
            identificationDocument : this.identificationDocument,
            generalPartyInfo : beneficiariesParse,
            allocationRules: this.allocationRules,
            relationship : this.relationship,
           
        }
    }

}