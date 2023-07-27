import { processConsumerSmartix } from "../../../application/usecases/costumerSmartix/consumerSmartix";
import { checkHash256 } from "../../../application/utils/checkHash256/utils";
import { MetadataValidation } from "../../../application/utils/metadataValidation/metadata.validation";
import { SmartixGetValidation } from "../../middlewares/SmartixGetValidation/SmartixGetValidation";
import { smartixGetPolicyController } from './smartixGetPolicyController'

function mockClearCustom(){
  SmartixGetValidation.prototype.GetValidateHash =  jest.fn().mockClear()
  checkHash256.prototype.checkHash256 =  jest.fn().mockClear()
  MetadataValidation.prototype.validateMetada =  jest.fn().mockClear()
  processConsumerSmartix.prototype.getSmatixLogin = jest.fn().mockClear()
  processConsumerSmartix.prototype.getSmatixService = jest.fn().mockClear()
  MetadataValidation.prototype.ValidQueryParams =  jest.fn().mockClear()
  MetadataValidation.prototype.getMetadata =  jest.fn().mockClear()
}

describe('smartixController', (): void => {
  const GetSmartixController = new smartixGetPolicyController()

  it('Should create an instance ', (): void => {
    expect(GetSmartixController).toBeInstanceOf(smartixGetPolicyController)
  })

  // it('Should consume an instance ok ', async (): Promise<void> => {
  //   mockClearCustom()
  //   checkHash256.prototype.checkHash256 =  jest.fn().mockReturnValue(true);
  //   MetadataValidation.prototype.ValidQueryParams =  jest.fn().mockReturnValue({'params':[{'statusId':'EN MISION'},{'customerRole':'ASEGURADO'},{'inssuredSubjectId':'PRUEBA'},{'paymentMethod':'PRUEBA2'}],'errors':''});
  //   MetadataValidation.prototype.getMetadata =  jest.fn().mockReturnValue({'x_document_type':'RUT','x_customer_id':'770990106','x_country':'CL','x_commerce':'SEGUROS','x_channel':'Web','flow':'SALUD_GRATIS','x_forwarded_for':'192.168.1.1','branchid':'79','executiveid':'333333','executivedocumenttype':'RUT','x_trace_id':'abc123','x_api_key':'21312'});

  //   MetadataValidation.prototype.validateMetada =  jest.fn().mockReturnValue([]);
  //   const Request = {
  //     headers : {
  //       "x-document-type":"RUT",
  //       "x-customer-id":"770990106",
  //       "x-country":"CL",
  //       "x-commerce":"Seguros",
  //       "x-channel":"Web",
  //       "flow":"SALUD_GRATIS",
  //       "x-forwarded-for":"192.168.1.1",
  //       "branchid":"79",
  //       "executiveid":"333333",
  //       "executivedocumenttype":"RUT1",
  //       "x-trace-id":"abc123",
  //       "x-api-key":"863265f5-39fe-421c-a66c-7e3e04a07466",
  //       "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNjUyOTk4NTcxLCJleHAiOjE2NTMwODQ5NzF9.8L6_5nDnHegG4MoX5N4Yca4YxY9xhotpQ9NbH4_8WKg"
  //     },
  //     query:{
  //       customerRoled:'ASEGURADO',
  //       inssuredSubjectId:'PRUEBA',
  //       paymentMethod:'PRUEBA2',
  //       statusId:'EN EMISION'
  //     }
  //   }
  //   let mockRes = {
  //     status: (code: any) => ({
  //       send: (message: any) => ({code, message})
  //     })
  //   }
  //   let customerIdHash = "b17ca3a8e16b99621743b37f8f702451d51f6431cde62aa13bb76ef23aa1b246"
  //   /// mock para el servicio de login 
  //   let responseMockLogin = {
  //     "invocarResult": {
  //         "userInfo": [
  //             {
  //                 "codigo": "USR_APITOKEN",
  //                 "valor": "a945e313e541f0d364df4e0a8c8aee01a8b94fca97b6373f2a86f83fb7e3c3a0",
  //                 "variables": null
  //             },
  //             {
  //                 "codigo": "USR_APITOKENEXPIRY",
  //                 "valor": "2022-04-13 16:56:03",
  //                 "variables": null
  //             }
  //         ],
  //         "msgResult": "Command 'Login' executed correctly."
  //     },
  //     "errores": [],
  //     "erroresConcatenados": "",
  //     "isOk": true,
  //     "warnings": [],
  //     "warningsConcatenados": ""
  //   }
  //   processConsumerSmartix.prototype.getSmatixLogin = jest.fn().mockReturnValue(JSON.stringify(responseMockLogin))
    
  //   let responseMockCustomer = {
  //     "Result": {
  //         "ProviderResponse": {
  //             "customer": {
  //                 "Id": "1",
  //                 "identificationDocument": {
  //                     "type": "1",
  //                     "number": "770990106"
  //                 },
  //                 "generalPartyInfo": {
  //                     "address": [
  //                         {
  //                             "type": 1,
  //                             "fullAddress": "CALLE1",
  //                             "streetName": "CALLE",
  //                             "streetNumber": "1",
  //                             "postalCode": "9999999",
  //                             "area": {
  //                                 "level1": {
  //                                     "name": "Chile",
  //                                     "code": "CL"
  //                                 },
  //                                 "level2": {
  //                                     "name": "METROPOLITANA",
  //                                     "code": "13"
  //                                 },
  //                                 "level3": {
  //                                     "name": "CERRILLOS",
  //                                     "code": "309"
  //                                 },
  //                                 "level4": {
  //                                     "name": "COD. POSTAL DESCONOCIDO (MIGRACION)",
  //                                     "code": ""
  //                                 }
  //                             },
  //                             "apartmentNumber": "",
  //                             "apartmentFloor": "0"
  //                         }
  //                     ],
  //                     "preferredContact": {
  //                         "email": "",
  //                         "phone": "",
  //                         "cellPhone": ""
  //                     },
  //                     "names": "SEG. FALABELLA CORREDORES-Intermediación",
  //                     "paternal": "SEGUROS FALABELLA CORREDORES-A",
  //                     "maternal": ""
  //                 },
  //                 "nationality": "Chile",
  //                 "genderCode": "M",
  //                 "birthdate": "01/01/1950 00:00:00"
  //             }
  //         }
  //     },
  //     "Errores": [],
  //     "Warnings": [],
  //     "IsOk": true,
  //     "ErroresConcatenados": "",
  //     "WarningsConcatenados": ""
  //   }
  //   processConsumerSmartix.prototype.getSmatixService= jest.fn().mockResolvedValue(responseMockCustomer)

  //   let responseMock  = {
  //     code: 200,
  //     message :{  
  //       "Result": {
  //         "ProviderResponse": {
  //             "customer": {
  //                 "Id": "1",
  //                 "identificationDocument": {
  //                     "type": "1",
  //                     "number": "770990106"
  //                 },
  //                 "generalPartyInfo": {
  //                     "address": [
  //                         {
  //                             "type": 1,
  //                             "fullAddress": "CALLE1",
  //                             "streetName": "CALLE",
  //                             "streetNumber": "1",
  //                             "postalCode": "9999999",
  //                             "area": {
  //                                 "level1": {
  //                                     "name": "Chile",
  //                                     "code": "CL"
  //                                 },
  //                                 "level2": {
  //                                     "name": "METROPOLITANA",
  //                                     "code": "13"
  //                                 },
  //                                 "level3": {
  //                                     "name": "CERRILLOS",
  //                                     "code": "309"
  //                                 },
  //                                 "level4": {
  //                                     "name": "COD. POSTAL DESCONOCIDO (MIGRACION)",
  //                                     "code": ""
  //                                 }
  //                             },
  //                             "apartmentNumber": "",
  //                             "apartmentFloor": "0"
  //                         }
  //                     ],
  //                     "preferredContact": {
  //                         "email": "",
  //                         "phone": "",
  //                         "cellPhone": ""
  //                     },
  //                     "names": "SEG. FALABELLA CORREDORES-Intermediación",
  //                     "paternal": "SEGUROS FALABELLA CORREDORES-A",
  //                     "maternal": ""
  //                 },
  //                 "nationality": "Chile",
  //                 "genderCode": "M",
  //                 "birthdate": "01/01/1950 00:00:00"
  //             }
  //         }
  //       },
  //       "Errores": [],
  //       "Warnings": [],
  //       "IsOk": true,
  //       "ErroresConcatenados": "",
  //       "WarningsConcatenados": ""
  //     }
  //   }
  //   const response = await GetSmartixController.getPolicy(Request , mockRes, customerIdHash )
  //   expect(response).toEqual(responseMock)
  // })

  it('Should consumer error ', async (): Promise<void> => {
    mockClearCustom()

    MetadataValidation.prototype.ValidQueryParams =  jest.fn().mockReturnValue({'params':[{'statusId':'EN MISION'},{'customerRole':'ASEGURADO'},{'inssuredSubjectId':'PRUEBA'},{'paymentMethod':'PRUEBA2'}],'errors':'paymentMethod'});

    MetadataValidation.prototype.validateMetada =  jest.fn().mockReturnValue([]);
    MetadataValidation.prototype.getMetadata =  jest.fn().mockReturnValue({'x_document_type':'RUT','x_customer_id':'770990106','x_country':'CL','x_commerce':'SEGUROS','x_channel':'Web','flow':'SALUD_GRATIS','x_forwarded_for':'192.168.1.1','branchid':'79','executiveid':'333333','executivedocumenttype':'RUT','x_trace_id':'abc123','x_api_key':'21312'});
    let authorization = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNjQ4ODQyODYwfQ.ReBihA-uDsIHSi2CfhubrNbHLdIZHNZMK7dEx7y-kGY"
    const Request = {
      headers : {
        "x-document-type":"RUT",
        "x-customer-id":"252739564",
        "x-countrydd":"CL",
        "x-commerce":"Seguros",
        "x-channel":"Web",
        "flow":"SALUD_GRATIS",
        "x-forwarded-for":"192.168.1.1",
        "branchid":"79",
        "executiveid":"333333",
        "executivedocumenttype":"RUT1",
        "x-trace-id":"abc123",
        "x-api-key":"863265f5-39fe-421c-a66c-7e3e04a07466",
        "authorization": authorization
      },
      query:{
        customerRoled:'ASEGURADO',
        inssuredSubjectId:'PRUEBA',
        paymentMethoddd:'PRUEBA2',
        statusId:'EN EMISION'
      }
    }
    let mockRes = {
      status: (code: any) => ({
        send: (message: any) => ({code, message})
      })
    }
    let customerIdHash = "1620717a346fbc14d8271d01e50c4f0e4fb552d44583b44c86b74645a1294180"
    
    let responseMock =  await GetSmartixController.getPolicy(Request , mockRes, customerIdHash )

    expect(responseMock).toEqual({code : 400, message : {"errors": "paymentMethod","message": "QueryParams not valid", "status": 400}});

  })
  
})
