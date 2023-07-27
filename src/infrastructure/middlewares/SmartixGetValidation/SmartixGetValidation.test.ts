import { AxiosHttpService } from "@sf-libs/axios-http-service"
import { checkHash256 } from "../../../application/utils/checkHash256/utils"
import { CronometerTime } from "../../../application/utils/CronometerTime/CronometerTime"
import { envVars } from "../../../application/utils/env-vars.config/env-vars.config"
import { MetadataValidation } from "../../../application/utils/metadataValidation/metadata.validation"
import { ServiceConsumer } from "../../serviceConsumer/serviceConsumer"
import { dataValidation, SmartixGetValidation } from "./SmartixGetValidation"

let mockCustomer = {
  data:JSON.stringify({
    "Result": {
      "ProviderResponse": {
          "customer": {
              "Id": "1",
              "identificationDocument": {
                  "type": "1",
                  "number": "770990106"
              },
              "generalPartyInfo": {
                  "address": [
                      {
                          "type": 1,
                          "fullAddress": "CALLE1",
                          "streetName": "CALLE",
                          "streetNumber": "1",
                          "postalCode": "9999999",
                          "area": {
                              "level1": {
                                  "name": "Chile",
                                  "code": "CL"
                              },
                              "level2": {
                                  "name": "METROPOLITANA",
                                  "code": "13"
                              },
                              "level3": {
                                  "name": "CERRILLOS",
                                  "code": "309"
                              },
                              "level4": {
                                  "name": "COD. POSTAL DESCONOCIDO (MIGRACION)",
                                  "code": ""
                              }
                          },
                          "apartmentNumber": "",
                          "apartmentFloor": "0"
                      }
                  ],
                  "preferredContact": {
                      "email": "",
                      "phone": "",
                      "cellPhone": ""
                  },
                  "names": "SEG. FALABELLA CORREDORES-Intermediación",
                  "paternal": "SEGUROS FALABELLA CORREDORES-A",
                  "maternal": ""
              },
              "nationality": "Chile",
              "genderCode": "M",
              "birthdate": "01/01/1950 00:00:00"
          }
      }
    },
    "Errores": [],
    "Warnings": [],
    "IsOk": true,
    "ErroresConcatenados": "",
    "WarningsConcatenados": ""
  })
}
const Request = {
  headers : {
    "x-document-type":"RUT",
    "x-customer-id":"770990106",
    "x-country":"CL",
    "x-commerce":"Seguros",
    "x-channel":"Web",
    "flow":"SALUD_GRATIS",
    "x-forwarded-for":"192.168.1.1",
    "branchid":"79",
    "executiveid":"333333",
    "executivedocumenttype":"RUT1",
    "x-trace-id":"abc123",
    "x-api-key":"863265f5-39fe-421c-a66c-7e3e04a07466",
    "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNjUyOTk4NTcxLCJleHAiOjE2NTMwODQ5NzF9.8L6_5nDnHegG4MoX5N4Yca4YxY9xhotpQ9NbH4_8WKg"
  },
  query:{
    customerRoled:'ASEGURADO',
    inssuredSubjectId:'PRUEBA',
    paymentMethod:'PRUEBA2',
    statusId:'EN EMISION'
  }
}
let mockRes = {
  status: (code: any) => ({
    send: (message: any) => ({code, message})
  })
}
describe('Service Consumer', (): void => {
  const newCronometerTime =  new CronometerTime()
  newCronometerTime.setInitTime(new Date())
  const forValidation : dataValidation =  {
    customerIdHash : "a",
    response : mockRes,
    request : Request,
    Cronometer_ : newCronometerTime ,
  }
  const GetSmartixGetValidation = new SmartixGetValidation(forValidation)

  it('Should create an instance ', (): void => {
    expect(GetSmartixGetValidation).toBeInstanceOf(SmartixGetValidation)
  })

  it('should consume a service getValidateMetada', async () => {

    MetadataValidation.prototype.validateMetada =  jest.fn().mockReturnValue([{}]);
    MetadataValidation.prototype.getMetadata =  jest.fn().mockReturnValue({'x_document_type':'RUT','x_customer_id':'770990106','x_country':'CL','x_commerce':'SEGUROS','x_channel':'Web','flow':'SALUD_GRATIS','x_forwarded_for':'192.168.1.1','branchid':'79','executiveid':'333333','executivedocumenttype':'RUT','x_trace_id':'abc123','x_api_key':'21312'});
    MetadataValidation.prototype.ValidQueryParams =  jest.fn().mockReturnValue({'params':[{'statusId':'EN MISION'},{'customerRole':'ASEGURADO'},{'inssuredSubjectId':'PRUEBA'},{'paymentMethod':'PRUEBA2'}],'errors':''});
    checkHash256.prototype.checkHash256 =  jest.fn().mockReturnValue(true);
    MetadataValidation.prototype.ValidQueryParams =  jest.fn().mockReturnValue({'params':[{'statusId':'EN MISION'},{'customerRole':'ASEGURADO'},{'inssuredSubjectId':'PRUEBA'},{'paymentMethod':'PRUEBA2'}],'errors':''});
   
    envVars.prototype.get =  jest.fn().mockReturnValue('dev');

    expect.assertions(1);
    return GetSmartixGetValidation.GetMetadataValidation().catch(err => {
      expect(err).toEqual(err);
    })

  })

  it('should consume a service ValidQueryParams', async () => {

    MetadataValidation.prototype.validateMetada =  jest.fn().mockReturnValue([]);
    MetadataValidation.prototype.getMetadata =  jest.fn().mockReturnValue({'x_document_type':'RUT','x_customer_id':'770990106','x_country':'CL','x_commerce':'SEGUROS','x_channel':'Web','flow':'SALUD_GRATIS','x_forwarded_for':'192.168.1.1','branchid':'79','executiveid':'333333','executivedocumenttype':'RUT','x_trace_id':'abc123','x_api_key':'21312'});
    MetadataValidation.prototype.ValidQueryParams =  jest.fn().mockReturnValue({'params':[{'statusId':'EN MISION'},{'customerRole':'ASEGURADO'},{'inssuredSubjectId':'PRUEBA'},{'paymentMethod':'PRUEBA2'}],'errors':'paymentMethod'});
    checkHash256.prototype.checkHash256 =  jest.fn().mockReturnValue(true);
   
    envVars.prototype.get =  jest.fn().mockReturnValue('dev');
    const response = async () => { await GetSmartixGetValidation.GetMetadataValidation()}
    expect.assertions(1);
    return GetSmartixGetValidation.GetMetadataValidation().catch(err => {
      expect(err).toEqual({"errors": "paymentMethod", "message": "QueryParams not valid", "status": 400});
    })

  })

  it('should consume a service validateHash', async () => {

    MetadataValidation.prototype.validateMetada =  jest.fn().mockReturnValue([]);
    MetadataValidation.prototype.getMetadata =  jest.fn().mockReturnValue({'x_document_type':'RUT','x_customer_id':'770990106','x_country':'CL','x_commerce':'SEGUROS','x_channel':'Web','flow':'SALUD_GRATIS','x_forwarded_for':'192.168.1.1','branchid':'79','executiveid':'333333','executivedocumenttype':'RUT','x_trace_id':'abc123','x_api_key':'21312'});
    MetadataValidation.prototype.ValidQueryParams =  jest.fn().mockReturnValue({'params':[{'statusId':'EN MISION'},{'customerRole':'ASEGURADO'},{'inssuredSubjectId':'PRUEBA'},{'paymentMethod':'PRUEBA2'}],'errors':'paymentMethod'});
    checkHash256.prototype.checkHash256 =  jest.fn().mockReturnValue(false);
   
    envVars.prototype.get =  jest.fn().mockReturnValue('dev');
    return GetSmartixGetValidation.GetMetadataValidation().catch(err => {
      expect(err).toEqual({"errors": "", "message": "validate url encryption", "status": 400});
    })


  })

  it('should consume', async () => {

    MetadataValidation.prototype.validateMetada =  jest.fn().mockReturnValue([]);
    MetadataValidation.prototype.getMetadata =  jest.fn().mockReturnValue({'x_document_type':'RUT','x_customer_id':'770990106','x_country':'CL','x_commerce':'SEGUROS','x_channel':'Web','flow':'SALUD_GRATIS','x_forwarded_for':'192.168.1.1','branchid':'79','executiveid':'333333','executivedocumenttype':'RUT','x_trace_id':'abc123','x_api_key':'21312'});
    MetadataValidation.prototype.ValidQueryParams =  jest.fn().mockReturnValue({'params':[{'statusId':'EN MISION'},{'customerRole':'ASEGURADO'},{'inssuredSubjectId':'PRUEBA'},{'paymentMethod':'PRUEBA2'}],'errors':''});
    checkHash256.prototype.checkHash256 =  jest.fn().mockReturnValue(true);
    envVars.prototype.get =  jest.fn().mockReturnValue('dev');
    const response =  await GetSmartixGetValidation.GetMetadataValidation()
    const mockResponse = {'metadata':{'x_document_type':'RUT','x_customer_id':'770990106','x_country':'CL','x_commerce':'SEGUROS','x_channel':'Web','flow':'SALUD_GRATIS','x_forwarded_for':'192.168.1.1','branchid':'79','executiveid':'333333','executivedocumenttype':'RUT','x_trace_id':'abc123','x_api_key':'21312'},'queryParams':[{'statusId':'EN MISION'},{'customerRole':'ASEGURADO'},{'inssuredSubjectId':'PRUEBA'},{'paymentMethod':'PRUEBA2'}]}
    expect(response).toEqual(mockResponse);

  })
})
