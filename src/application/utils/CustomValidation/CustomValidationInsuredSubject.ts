import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments, IsDefined, IsNumber, Length, Contains, IsInt, Min, Max, IsEmail, IsFQDN, IsDate, validate, validateOrReject, IsString, ValidateIf, IsObject, ValidateNested } from 'class-validator';
import { InsuredSubject, TypeVCFN } from '../../../domain/models/ResposeDto/InsuredSubject';
import { Bank, Method, Payment, Plan } from '../../../domain/models/ResposeDto/Payment';



@ValidatorConstraint({ name: 'customText2', async: true })
export class CustomValidationInsuredSubject implements ValidatorConstraintInterface {
  async validate(insuredSubject: any) {
    let validateInsuredSubject = new InsuredSubject()
    validateInsuredSubject.productSubtype = insuredSubject.productSubtype
    let type :any 
      switch (insuredSubject.productSubtype) {
        case "VCFN" :
          return {}
        
        case "VMLAI" :
          return {}
        
        default:
          return {}

      }

      return await this.resultError(validateInsuredSubject) 
      
  }

  async resultError(method : any){
    let result : any
      result = await validate(method).then(errors => {
        if (errors.length > 0) {
          /// si es decorador retorna boolean  return false
          throw ({status : 503,  message : "the answer is not as expected CustomValidationPayment " , errors : errors } )
        } else {
          console.log('validation succeed');
           /// si es decorador retorna boolean  return true
          return  method.get()
        }
      });
    return result 
  }
}