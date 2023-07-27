import { IsArray, IsDefined, IsNotEmpty, IsObject, IsString, Validate, ValidateNested } from "class-validator"
import { Broker } from "./Broker"
import { ContractCoverages } from "./ContractCoverages"
import { Insured } from "./Insured"
import { Payment } from "./Payment"
import { Premium } from "./Premium"
import { Product } from "./Product"
import { SalesChannel } from "./SalesChannel"
import { SalesExecutive } from "./SalesExecutive"
import { Status } from "./Status"
import { Validity } from "./Validity"
import  'reflect-metadata'
import { Type } from "class-transformer"
import { CustomValidationPayment } from "../../../application/utils/CustomValidation/CustomValidationPayment"
import { CustomValidationInsuredSubject } from "../../../application/utils/CustomValidation/CustomValidationInsuredSubject"
import { envVars } from "../../../application/utils/env-vars.config/env-vars.config"
import { Beneficiaries } from "./Beneficiaries"

export class DtoProposal {
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    Id: string
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    CodReferido: string
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    date: string
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    sourceSystem: string
    @IsDefined()
    hasPersonalHealthDeclaration: boolean
    @IsObject()
    @ValidateNested()
    @Type(() => SalesChannel)
    salesChannel : SalesChannel
    @ValidateNested()
    @Type(() => SalesExecutive)
    public salesExecutive : SalesExecutive
    @IsObject()
    @ValidateNested()
    @Type(() => Broker)
    broker : Broker
    // @IsObject()
    // @ValidateNested()
    // @Type(() => Payment)
    // @IsDefined()
    //@Validate(CustomValidationPayment)
    payment : Payment
    @IsObject()
    @ValidateNested()
    @Type(() => Status)
    status : Status
    @IsObject()
    @ValidateNested()
    @Type(() => Premium)
    premium : Premium
    @IsObject()
    @ValidateNested()
    @Type(() => Product)
    product : Product
    @IsObject()
    @ValidateNested()
    @Type(() => Validity)
    validity : Validity
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ContractCoverages)
    contractCoverages : ContractCoverages[]
    @IsDefined()
    insuredSubject : any // datos dinamicos  // clase padre , hijos con tipo de materia asegurada  OJO SOLO ESTE (DONDE CONSEGUIR EL RESTO DE LOS HIJOS )
    @IsObject()
    @ValidateNested()
    @Type(() => Insured)
    insured : Insured 
    @IsObject()
    @ValidateNested()
    @Type(() => Insured)
    proposalHolder : Insured 
    @IsDefined()
    renewable: boolean // debe ser boolena
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Beneficiaries)
    beneficiaries : Beneficiaries[]

    async get(){
        this.validity.from = new Date(this.validity.from).toISOString()
        this.validity.to = new Date(this.validity.to).toISOString()

        const insuredParse : any = this.insured
        insuredParse.birthdate = new Date(this.insured.birthdate).toString()
        insuredParse.generalPartyInfo.address = this.insured.generalPartyInfo.address.getDtoInsured()

        const proposalHolderParse : any = this.proposalHolder
        proposalHolderParse.birthdate = new Date(this.proposalHolder.birthdate).toString()
        proposalHolderParse.generalPartyInfo.address = this.proposalHolder.generalPartyInfo.address.getDtoProposalHolder()

        const customValidationPayment = new CustomValidationPayment()
        const validatePayment = await customValidationPayment.validate(this.payment)

        const customValidationInsuredSubject = new CustomValidationInsuredSubject()
        this.insuredSubject.productSubtype = this.product.productSubtype
        const validateInsuredSubject = await customValidationInsuredSubject.validate(this.insuredSubject)
        
        const country = new envVars().get('COUNTRY')
        return {
            id: this.CodReferido,
            lastIdOperation: this.Id,
            date : new Date(this.date).toISOString(),
            sourceSystem : this.sourceSystem != `SMARTIX_${country}` ? `SMARTIX_${country}` : this.sourceSystem,
            hasPersonalHealthDeclaration : this.hasPersonalHealthDeclaration,
            salesChannel : this.salesChannel,
            broker : this.broker,
            salesExecutive : this.salesExecutive,
            payment : validatePayment,
            status : this.status,
            premium : await this.premium.getDto() ,
            product : this.product,
            validity : this.validity,
            contractCoverages : this.contractCoverages,
            insuredSubject : validateInsuredSubject ,
            insured : insuredParse,
            proposalHolder : proposalHolderParse,
            renewable : this.renewable,
            beneficiaries : this.beneficiaries.map(x=>x.getDto()),
        }    
    }
}

