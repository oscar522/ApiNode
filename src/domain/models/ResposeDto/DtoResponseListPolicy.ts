import { Type } from "class-transformer"
import  'reflect-metadata'
import { IsDefined, IsNotEmpty, IsObject, IsString, Validate, ValidateNested } from "class-validator"
import { Broker } from "./Broker"
import { Insured, InsuredList } from "./Insured"
import { Premium } from "./Premium"
import { Product } from "./Product"
import { SalesChannel } from "./SalesChannel"
import { SalesExecutive } from "./SalesExecutive"
import { Status } from "./Status"
import { Validity } from "./Validity"
import { envVars } from "../../../application/utils/env-vars.config/env-vars.config"
import { identificationDocument } from "../identificationDocument"
import { IdentificationDocument } from "./IdentificationDocument"
import { CustomValidationInsuredSubject } from "../../../application/utils/CustomValidation/CustomValidationInsuredSubject"

export class DtoListProposal {
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    public Id : string

    @IsNotEmpty()
    @IsString()
    @IsDefined()
    public CodReferido : string

    @IsNotEmpty()
    @IsString()
    @IsDefined()
    public date : string

    @IsNotEmpty()
    @IsString()
    @IsDefined()
    public sourceSystem : string

    public hasPersonalHealthDeclaration : boolean
    
    @IsObject()
    @ValidateNested()
    @Type(() => SalesChannel)
    public salesChannel : SalesChannel

    @IsObject()
    @ValidateNested()
    @Type(() => Broker)
    public broker : Broker

    @IsObject()
    @ValidateNested()
    @Type(() => SalesExecutive)
    public salesExecutive : SalesExecutive

    @IsObject()
    @ValidateNested()
    @Type(() => Product)
    public product : Product

    @IsObject()
    @ValidateNested()
    @Type(() => Status)
    public status : Status

    @IsObject()
    @ValidateNested()
    @Type(() => Validity)
    public validity : Validity

    @IsObject()
    @ValidateNested()
    @Type(() => Premium)
    public premium : Premium
   
    insuredSubject : any // datos dinamicos  // clase padre , hijos con tipo de materia asegurada  OJO SOLO ESTE (DONDE CONSEGUIR EL RESTO DE LOS HIJOS )

    @IsObject()
    @ValidateNested()
    @Type(() => InsuredList)
    public insured : InsuredList 

    @IsDefined()
    @IsObject()
    @ValidateNested()
    @Type(() => InsuredList)
    public proposalHolder : InsuredList 

    public renewable ? : boolean = false 

    public async getDto(){

            //if (this.hasPersonalHealthDeclaration == null) this.hasPersonalHealthDeclaration = false
            this.date = new Date(this.date).toISOString()
            this.validity.from = new Date(this.validity.from).toISOString()
            this.validity.to = new Date(this.validity.to).toISOString()
            const country = new envVars().get('COUNTRY')
    
            const customValidationInsuredSubject = new CustomValidationInsuredSubject()
            this.insuredSubject.productSubtype = this.product.productSubtype
            const validateInsuredSubject = await customValidationInsuredSubject.validate(this.insuredSubject)
    
            return {
                id: this.CodReferido,
                lastIdOperation: this.Id,
                date: this.date,
                sourceSystem : this.sourceSystem != `SMARTIX_${country}` ? `SMARTIX_${country}` : this.sourceSystem,
                hasPersonalHealthDeclaration: this.hasPersonalHealthDeclaration,
                salesChannel : this.salesChannel ,
                broker : this.broker.getDto() ,
                salesExecutive : this.salesExecutive.getDto() ,
                product : this.product.getDto() ,
                status : this.status ,
                validity : this.validity ,
                premium : await this.premium.getDto() ,
                insuredSubject : validateInsuredSubject ,
                insured : this.insured.getDto() ,
                proposalHolder : this.proposalHolder.getDto() ,
                renewable: this.renewable,
            }    
     
    }
}