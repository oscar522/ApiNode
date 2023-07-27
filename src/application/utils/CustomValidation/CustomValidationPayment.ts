import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments, IsDefined, IsNumber, Length, Contains, IsInt, Min, Max, IsEmail, IsFQDN, IsDate, validate, validateOrReject, IsString, ValidateIf, IsObject, ValidateNested } from 'class-validator';
import { Bank, Method, Payment, Plan } from '../../../domain/models/ResposeDto/Payment';



@ValidatorConstraint({ name: 'customText2', async: true })
export class CustomValidationPayment implements ValidatorConstraintInterface {
  async validate(methodData: any) {
    // const validateMethod = new PaymentMethod();
    // validateMethod.id = methodData.method.id
    // validateMethod.idDescription = methodData.method.idDescription
    // validateMethod.type = methodData.method.type
    // return await this.resultError(validateMethod) 

    let validateMethod = new Payment()

      const method = new Method()
      method.id = methodData.method.id
      //method.idStatus = true
  
      method.idDescription = methodData.method.idDescription
      //method.idDescriptionStatus = true
  
      method.type = methodData.method.type
      //method.typeStatus = true

      const plan = new Plan()
      plan.description = methodData.plan.description
      plan.value = methodData.plan.value
      validateMethod.plan = plan

  
      switch (methodData.method.id) {
        case "1" :
         
          break;

        case "35" : // 
  
          return {}

        case "5" : 

          method.accountNumber = methodData.method.accountNumber 
          method.accountNumberStatus = true

          break;

        case "9" : 

          method.accountNumber = methodData.method.accountNumber 
          method.accountNumberStatus = true
          method.expirationDate = methodData.method.expirationDate 
          method.expirationDateStatus = true
          method.expirationDate = new Date(methodData.method.expirationDate).toString()

          break;
        
        case "8" : 

          method.accountNumber = methodData.method.accountNumber 
          method.accountNumberStatus = true
          method.expirationDate = methodData.method.expirationDate 
          method.expirationDateStatus = true
          method.expirationDate = new Date(methodData.method.expirationDate).toString()

          break;

        case "26" : // 

          method.accountNumber = methodData.method.accountNumber 
          method.accountNumberStatus = true

          method.expirationDate = methodData.method.expirationDate 
          method.expirationDateStatus = true
          method.expirationDate = new Date(methodData.method.expirationDate).toString()

          method.bank = methodData.method.bank 
          method.bankStatus = true

          validateMethod.diaStatus = true
          validateMethod.dia = methodData.day
  
          break;
        
        default:
          return {}
      }

      validateMethod.method = method
      return await this.resultError(validateMethod) 
      
  }

  async resultError(method : any){
    let result : any
      result = await validate(method).then(errors => {
        if (errors.length > 0) {
          /// si es decorador retorna boolean  return false
          throw ({status : 503, message : "the answer is not as expected CustomValidationPayment " , errors : errors })
        } else {
          console.log('validation succeed');
           /// si es decorador retorna boolean  return true
          return  method.getMethod()
        }
      });
    return result 
  }
}