import { ServiceConsumer } from '../../../infrastructure/serviceConsumer/serviceConsumer'
import  'reflect-metadata'
import { serviceSmartix } from '../../../domain/services/ServiceSmartix/ServiceSmartix'
import { CustomValidationInsuredSubject } from './CustomValidationInsuredSubject'

describe('CustomValidationPayment', (): void => {
  const GetServiceSmartix = new serviceSmartix()
  jest.fn().mockClear()

  it('Should create an instance ', (): void => {
    expect(GetServiceSmartix).toBeInstanceOf(serviceSmartix)
  })

  it('Should consumer an getSmatixPolicy detail CustomValidationInsuredSubject type VCFN ',async (): Promise<void> => {

    ServiceConsumer.post = jest.fn().mockClear()
    
   let customValidationInsuredSubject = new CustomValidationInsuredSubject()
    return customValidationInsuredSubject.validate(
    {
        'id':'6',
        'type': {
            'code':'6',
            'name':'Vida',
            'descripcion':'Vida'
        },
        'productSubtype':'VCFN'
    }).then(result => {
        expect(result).toEqual(JSON.parse("{}"));
      })
  })


  it('Should consumer an getSmatixPolicy detail CustomValidationInsuredSubject type error ',async (): Promise<void> => {

    ServiceConsumer.post = jest.fn().mockClear()
    
   let customValidationInsuredSubject = new CustomValidationInsuredSubject()
    return customValidationInsuredSubject.validate(
    {
        'id':'6',
        'type': {
            'codedd':'6',
            'name':'Vida',
            'descripcion':'Vida'
        },
        'productSubtype':'VCFN'
    }).catch(err => {
        expect(err).toEqual(JSON.parse("{\"status\":503,\"message\":\"the answer is not as expected CustomValidationPayment \",\"errors\":[{\"target\":{\"productSubtype\":\"VCFN\",\"id\":\"6\",\"type\":{\"name\":\"Vida\",\"descripcion\":\"Vida\"}},\"value\":{\"name\":\"Vida\",\"descripcion\":\"Vida\"},\"property\":\"type\",\"children\":[{\"target\":{\"name\":\"Vida\",\"descripcion\":\"Vida\"},\"property\":\"code\",\"children\":[],\"constraints\":{\"isDefined\":\"code should not be null or undefined\",\"isString\":\"code must be a string\",\"isNotEmpty\":\"code should not be empty\"}}]}]}"));
      })
  })

  it('Should consumer an getSmatixPolicy detail CustomValidationInsuredSubject type defaul ',async (): Promise<void> => {

    ServiceConsumer.post = jest.fn().mockClear()
    
   let customValidationInsuredSubject = new CustomValidationInsuredSubject()
    return customValidationInsuredSubject.validate(
    {
        'id':'6',
        'type': {
            'coded':'6',
            'name':'Vida',
            'descripcion':'Vida'
        },
        'productSubtype':''
    }).catch(err => {
        expect(err).toEqual(JSON.parse("{\"status\":503,\"message\":\"the answer is not as expected CustomValidationPayment \",\"errors\":[{\"target\":{\"productSubtype\":\"VCFN\",\"id\":\"6\",\"type\":{\"name\":\"Vida\",\"descripcion\":\"Vida\"}},\"value\":{\"name\":\"Vida\",\"descripcion\":\"Vida\"},\"property\":\"type\",\"children\":[{\"target\":{\"name\":\"Vida\",\"descripcion\":\"Vida\"},\"property\":\"code\",\"children\":[],\"constraints\":{\"isDefined\":\"code should not be null or undefined\",\"isString\":\"code must be a string\",\"isNotEmpty\":\"code should not be empty\"}}]}]}"));
      })
  })

//   it('Should consumer an getSmatixPolicy detail CustomValidationInsuredSubject type error 2',async (): Promise<void> => {

//     ServiceConsumer.post = jest.fn().mockClear()
    
//     ServiceConsumer.post = jest.fn().mockReturnValue(
//       {
//         "Result": {
//           "ProviderResponse": {
//             "proposals": {
//               "id": "1488",
//               "date": "6/16/2022 12:00:00 AM",
//               "sourceSystem": "SMARTIX_CL",
//               "hasPersonalHealthDeclaration": "",
//               "salesChannel": {
//                   "code": "WEB1",
//                   "description": "WEB AUTOATENCION"
//               },
//               "salesExecutive": {
//                   "id": "WEB6",
//                   "identificationDocument": {
//                       "type": "SEGUROS FALABELLA CORREDORES, SEG. FALABELLA CORREDORES-Intermediación",
//                       "number": "1"
//                   }
//               },
//               "broker": {
//                   "identificationDocument": {
//                       "type": "Cedula de Identidad",
//                       "number": "76477116-8"
//                   },
//                   "id": "WEB6",
//                   "name": "SEGUROS FALABELLA CORREDORES, SEG. FALABELLA CORREDORES-Intermediación"
//               },
//               "payment": {
//                   "method": {
//                       "iddd": "0",
//                       "type": "EFECTIVO",
//                   },
//                   "plan": {
//                       "valued": "12",
//                       "description": "MONTHLY"
//                   },
//                   "day": ""
//               },
//               "status": {
//                   "id": "",
//                   "description": ""
//               },
//               "premium": {
//                   "amounts": [
//                       {
//                           "amount": "5.02000000000",
//                           "currency": {
//                               "code": "03",
//                               "description": "DOLAR"
//                           }
//                       }
//                   ],
//                   "installments": [
//                       {
//                           "amount": "0.41830000000",
//                           "currency": {
//                               "code": "03",
//                               "description": "DOLAR"
//                           }
//                       }
//                   ],
//                   "paymentFrecuency": "12"
//               },
//               "product": {
//                   "id": "IN-CL-211-02006-VCFNAP-A01",
//                   "productType": "02006",
//                   "productSubtype": "VCFNAP",
//                   "description": "SEGURO DE VIDA FULL PROTECCIÓN",
//                   "line": "211",
//                   "plan": "A01",
//                   "company": {
//                       "identificationDocument": {
//                           "type": "Cedula de Identidad",
//                           "number": "76477116-8",
//                           "validator": "8"
//                       },
//                       "tradeName": "CF SEGUROS DE VIDA S.A",
//                       "businessName": "CF SEGUROS DE VIDA S.A"
//                   },
//                   "name": "SEGURO DE VIDA FULL PROTECCIÓN",
//                   "isLiabilityCarInsurance": false
//               },
//               "validity": {
//                   "from": "6/21/2022 12:00:00 AM",
//                   "to": "6/22/2023 12:00:00 AM"
//               },
//               "contractCoverages": [
//                   {
//                       "id": "A01",
//                       "name": "PLAN 1",
//                       "description": "PLAN 1",
//                       "value": "5.0200",
//                       "descriptionValue": "DOLAR"
//                   },
//                   {
//                       "id": "116",
//                       "name": "MUERTE POR ENFERMEDAD",
//                       "description": "MUERTE POR ENFERMEDAD",
//                       "value": "0.0000",
//                       "descriptionValue": "DOLAR"
//                   },
//                   {
//                       "id": "117",
//                       "name": "MUERTE POR ACCIDENTE",
//                       "description": "MUERTE POR ACCIDENTE",
//                       "value": "0.0000",
//                       "descriptionValue": "DOLAR"
//                   },
//                   {
//                       "id": "114",
//                       "name": "INVALIDEZ 2/3 POR ENFERMEDAD O ACCIDENTE",
//                       "description": "INVALIDEZ 2/3 POR ENFERMEDAD O ACCIDENTE",
//                       "value": "0.0000",
//                       "descriptionValue": "DOLAR"
//                   },
//                   {
//                       "id": "02A",
//                       "name": "Consulta Médica Online Mediclic",
//                       "description": "Consulta Médica Online Mediclic",
//                       "value": "0.0000",
//                       "descriptionValue": "DOLAR"
//                   },
//                   {
//                       "id": "01A",
//                       "name": "Descuento en Farmacias Ahumada",
//                       "description": "Descuento en Farmacias Ahumada",
//                       "value": "0.0000",
//                       "descriptionValue": "DOLAR"
//                   }
//               ],
//               "insuredSubject": {
//                   "secondaryId": "",
//                   "type": {
//                       "code": "6"
//                   }
//               },
//               "insured": {
//                   "identificationDocument": {
//                       "type": "Cedula de Identidad",
//                       "number": "18069703-9",
//                       "validator": "9"
//                   },
//                   "generalPartyInfo": {
//                       "address": {
//                           "streetName": "LOS CEDROS  618  SAN MARCOS",
//                           "streetNumber": "618",
//                           "area": {
//                               "level1": {
//                                   "code": "618"
//                               },
//                               "level2": {
//                                   "name": "BIOBÍO",
//                                   "code": "8"
//                               },
//                               "level3": {
//                                   "name": "CIUDAD DESCONOCIDA-MIGRACION",
//                                   "code": "99999"
//                               },
//                               "level4": {
//                                   "name": "4260000",
//                                   "code": "4260000"
//                               }
//                           },
//                           "apartmentNumber": "",
//                           "apartmentFloor": ""
//                       },
//                       "preferredContact": {
//                           "phone": "+56957517706",
//                           "email": "ANDRADESDIAZ.JC@GMAIL.COM",
//                           "cellPhone": "+56957517706"
//                       },
//                       "names": "JUAN CARLOS RENE",
//                       "paternal": "ANDRADES",
//                       "maternal": "DIAZ"
//                   },
//                   "genderCode": "M",
//                   "birthdate": "1992-09-11T00:00:00",
//                   "nationality": "Chile"
//               },
//               "proposalHolder": {
//                   "identificationDocument": {
//                       "type": "Cedula de Identidad",
//                       "number": "18069703-9",
//                       "validator": "9"
//                   },
//                   "generalPartyInfo": {
//                       "address": {
//                           "streetName": "LOS CEDROS  618  SAN MARCOS",
//                           "streetNumber": "618",
//                           "area": {
//                               "level1": {
//                                   "name": "Chile",
//                                   "code": "618"
//                               },
//                               "level2": {
//                                   "name": "BIOBÍO",
//                                   "code": "8"
//                               },
//                               "level3": {
//                                   "name": "CIUDAD DESCONOCIDA-MIGRACION",
//                                   "code": "99999"
//                               },
//                               "level4": {
//                                   "name": "4260000",
//                                   "code": "4260000"
//                               }
//                           },
//                           "apartmentNumber": "",
//                           "apartmentFloor": ""
//                       },
//                       "preferredContact": {
//                           "phone": "+56957517706",
//                           "email": "ANDRADESDIAZ.JC@GMAIL.COM",
//                           "cellPhone": "+56957517706"
//                       },
//                       "names": "JUAN CARLOS RENE",
//                       "paternal": "ANDRADES",
//                       "maternal": "DIAZ"
//                   },
//                   "genderCode": "M",
//                   "birthdate": "1992-09-11T00:00:00",
//                   "nationality": "Chile"
//               },
//               "beneficiaries": [
//                   {
//                       "identificationDocument": {
//                           "type": "Cedula de Identidad",
//                           "number": "18069703-9",
//                           "validator": "9"
//                       },
//                       "generalPartyInfo": {
//                           "address": {
//                               "streetName": "LOS CEDROS  618  SAN MARCOS",
//                               "streetNumber": "618",
//                               "area": {
//                                   "level1": {
//                                       "name": "Chile",
//                                       "code": "618"
//                                   },
//                                   "level2": {
//                                       "name": "BIOBÍO",
//                                       "code": "8"
//                                   },
//                                   "level3": {
//                                       "name": "CIUDAD DESCONOCIDA-MIGRACION",
//                                       "code": "99999"
//                                   },
//                                   "level4": {
//                                       "name": "4260000",
//                                       "code": "4260000"
//                                   }
//                               },
//                               "apartmentNumber": "",
//                               "apartmentFloor": ""
//                           },
//                           "preferredContact": {
//                               "phone": "+56957517706",
//                               "email": "ANDRADESDIAZ.JC@GMAIL.COM",
//                               "cellPhone": "+56957517706"
//                           },
//                           "names": "JUAN CARLOS RENE",
//                           "paternal": "ANDRADES",
//                           "maternal": "DIAZ"
//                       },
//                       "genderCode": "M",
//                       "birthdate": "1992-09-11T00:00:00",
//                       "nationality": "Chile"
//                   }
//               ],
//               "renewable": true
//             },
//           }
//         },
//         "Errores": [],
//         "Warnings": [],
//         "IsOk": true,
//         "ErroresConcatenados": "",
//         "WarningsConcatenados": ""
//       }
//     );
       
//     let responseMockBodyLogin ={
//       "context": {
//           "codOrganization": "SMARTIX",
//           "codSistema": "FALABELLA",
//           "codNegocio": "FALABELLA",
//           "usuario": "ext_keiacovantuono@falabella.cl",
//       "token": "dc55513e31e037e42d6a31b36c05b63103452e674e62b5d1cd9cbc836da2b994"	

//       },
//       "request": {
//           "apiKey": "d149b9900d94b01cada738d34a7c05016d125d7936ebc1dc923c005de618341e",
//           "comando": "Login",
//           "origenTransaccion": "B2C",
//           "formulario": [
//               {
//                   "codigo": "USR_USERNAME",
//                   "valor": "ext_keiacovantuono@falabella.cl"
//               },
//               {
//                   "codigo": "USR_PASSWORD",
//                   "valor": "Fiorella*126"
//               },
//               {
//                   "codigo": "USR_APIKEY",
//                   "valor": "d149b9900d94b01cada738d34a7c05016d125d7936ebc1dc923c005de618341e"
//               }
//           ]
//       }
//     }
//     return GetServiceSmartix.getService(responseMockBodyLogin,3).catch(err => {
//         expect(err.message).toEqual("the answer is not as expected transformAndValidate");
//       })
//   })

//   it('Should consumer an getSmatixPolicy detail CustomValidationInsuredSubject type 1 ',async (): Promise<void> => {

//     ServiceConsumer.post = jest.fn().mockClear()
    
//     ServiceConsumer.post = jest.fn().mockReturnValue(
//       {
//         "Result": {
//           "ProviderResponse": {
//             "proposals": {
//               "Id": "1488",
//               "date": "6/16/2022 12:00:00 AM",
//               "sourceSystem": "SMARTIX_CL",
//               "hasPersonalHealthDeclaration": "",
//               "salesChannel": {
//                   "code": "WEB1",
//                   "description": "WEB AUTOATENCION"
//               },
//               "salesExecutive": {
//                   "id": "WEB6",
//                   "identificationDocument": {
//                       "type": "SEGUROS FALABELLA CORREDORES, SEG. FALABELLA CORREDORES-Intermediación",
//                       "number": "1"
//                   }
//               },
//               "broker": {
//                   "identificationDocument": {
//                       "type": "Cedula de Identidad",
//                       "number": "76477116-8"
//                   },
//                   "id": "WEB6",
//                   "name": "SEGUROS FALABELLA CORREDORES, SEG. FALABELLA CORREDORES-Intermediación"
//               },
//               "payment": {
//                   "method": {
//                       "id": "1",
//                       "idDescription": "EFECTIVO",
//                       "type": "EFECTIVO",
//                   },
//                   "plan": {
//                       "value": "12",
//                       "description": "MONTHLY"
//                   },
//                   "day": "10"
//               },
//               "status": {
//                   "id": "",
//                   "description": ""
//               },
//               "premium": {
//                   "amounts": [
//                       {
//                           "amount": "5.02000000000",
//                           "currency": {
//                               "code": "03",
//                               "description": "DOLAR"
//                           }
//                       }
//                   ],
//                   "installments": [
//                       {
//                           "amount": "0.41830000000",
//                           "currency": {
//                               "code": "03",
//                               "description": "DOLAR"
//                           }
//                       }
//                   ],
//                   "paymentFrecuency": "12"
//               },
//               "product": {
//                   "id": "IN-CL-211-02006-VCFNAP-A01",
//                   "productType": "02006",
//                   "productSubtype": "VCFNAP",
//                   "description": "SEGURO DE VIDA FULL PROTECCIÓN",
//                   "line": "211",
//                   "plan": "A01",
//                   "company": {
//                       "identificationDocument": {
//                           "type": "Cedula de Identidad",
//                           "number": "76477116-8",
//                           "validator": "8"
//                       },
//                       "tradeName": "CF SEGUROS DE VIDA S.A",
//                       "businessName": "CF SEGUROS DE VIDA S.A"
//                   },
//                   "name": "SEGURO DE VIDA FULL PROTECCIÓN",
//                   "isLiabilityCarInsurance": false
//               },
//               "validity": {
//                   "from": "6/21/2022 12:00:00 AM",
//                   "to": "6/22/2023 12:00:00 AM"
//               },
//               "contractCoverages": [
//                   {
//                       "id": "A01",
//                       "name": "PLAN 1",
//                       "description": "PLAN 1",
//                       "value": "5.0200",
//                       "descriptionValue": "DOLAR"
//                   },
//                   {
//                       "id": "116",
//                       "name": "MUERTE POR ENFERMEDAD",
//                       "description": "MUERTE POR ENFERMEDAD",
//                       "value": "0.0000",
//                       "descriptionValue": "DOLAR"
//                   },
//                   {
//                       "id": "117",
//                       "name": "MUERTE POR ACCIDENTE",
//                       "description": "MUERTE POR ACCIDENTE",
//                       "value": "0.0000",
//                       "descriptionValue": "DOLAR"
//                   },
//                   {
//                       "id": "114",
//                       "name": "INVALIDEZ 2/3 POR ENFERMEDAD O ACCIDENTE",
//                       "description": "INVALIDEZ 2/3 POR ENFERMEDAD O ACCIDENTE",
//                       "value": "0.0000",
//                       "descriptionValue": "DOLAR"
//                   },
//                   {
//                       "id": "02A",
//                       "name": "Consulta Médica Online Mediclic",
//                       "description": "Consulta Médica Online Mediclic",
//                       "value": "0.0000",
//                       "descriptionValue": "DOLAR"
//                   },
//                   {
//                       "id": "01A",
//                       "name": "Descuento en Farmacias Ahumada",
//                       "description": "Descuento en Farmacias Ahumada",
//                       "value": "0.0000",
//                       "descriptionValue": "DOLAR"
//                   }
//               ],
//               "insuredSubject": {
//                   "secondaryId": "",
//                   "type": {
//                       "code": "6"
//                   }
//               },
//               "insured": {
//                   "identificationDocument": {
//                       "type": "Cedula de Identidad",
//                       "number": "18069703-9",
//                       "validator": "9"
//                   },
//                   "generalPartyInfo": {
//                       "address": {
//                           "streetName": "LOS CEDROS  618  SAN MARCOS",
//                           "streetNumber": "618",
//                           "area": {
//                               "level1": {
//                                   "code": "618"
//                               },
//                               "level2": {
//                                   "name": "BIOBÍO",
//                                   "code": "8"
//                               },
//                               "level3": {
//                                   "name": "CIUDAD DESCONOCIDA-MIGRACION",
//                                   "code": "99999"
//                               },
//                               "level4": {
//                                   "name": "4260000",
//                                   "code": "4260000"
//                               }
//                           },
//                           "apartmentNumber": "",
//                           "apartmentFloor": ""
//                       },
//                       "preferredContact": {
//                           "phone": "+56957517706",
//                           "email": "ANDRADESDIAZ.JC@GMAIL.COM",
//                           "cellPhone": "+56957517706"
//                       },
//                       "names": "JUAN CARLOS RENE",
//                       "paternal": "ANDRADES",
//                       "maternal": "DIAZ"
//                   },
//                   "genderCode": "M",
//                   "birthdate": "1992-09-11T00:00:00",
//                   "nationality": "Chile"
//               },
//               "proposalHolder": {
//                   "identificationDocument": {
//                       "type": "Cedula de Identidad",
//                       "number": "18069703-9",
//                       "validator": "9"
//                   },
//                   "generalPartyInfo": {
//                       "address": {
//                           "streetName": "LOS CEDROS  618  SAN MARCOS",
//                           "streetNumber": "618",
//                           "area": {
//                               "level1": {
//                                   "name": "Chile",
//                                   "code": "618"
//                               },
//                               "level2": {
//                                   "name": "BIOBÍO",
//                                   "code": "8"
//                               },
//                               "level3": {
//                                   "name": "CIUDAD DESCONOCIDA-MIGRACION",
//                                   "code": "99999"
//                               },
//                               "level4": {
//                                   "name": "4260000",
//                                   "code": "4260000"
//                               }
//                           },
//                           "apartmentNumber": "",
//                           "apartmentFloor": ""
//                       },
//                       "preferredContact": {
//                           "phone": "+56957517706",
//                           "email": "ANDRADESDIAZ.JC@GMAIL.COM",
//                           "cellPhone": "+56957517706"
//                       },
//                       "names": "JUAN CARLOS RENE",
//                       "paternal": "ANDRADES",
//                       "maternal": "DIAZ"
//                   },
//                   "genderCode": "M",
//                   "birthdate": "1992-09-11T00:00:00",
//                   "nationality": "Chile"
//               },
//               "beneficiaries": [
//                   {
//                       "identificationDocument": {
//                           "type": "Cedula de Identidad",
//                           "number": "18069703-9",
//                           "validator": "9"
//                       },
//                       "generalPartyInfo": {
//                           "address": {
//                               "streetName": "LOS CEDROS  618  SAN MARCOS",
//                               "streetNumber": "618",
//                               "area": {
//                                   "level1": {
//                                       "name": "Chile",
//                                       "code": "618"
//                                   },
//                                   "level2": {
//                                       "name": "BIOBÍO",
//                                       "code": "8"
//                                   },
//                                   "level3": {
//                                       "name": "CIUDAD DESCONOCIDA-MIGRACION",
//                                       "code": "99999"
//                                   },
//                                   "level4": {
//                                       "name": "4260000",
//                                       "code": "4260000"
//                                   }
//                               },
//                               "apartmentNumber": "",
//                               "apartmentFloor": ""
//                           },
//                           "preferredContact": {
//                               "phone": "+56957517706",
//                               "email": "ANDRADESDIAZ.JC@GMAIL.COM",
//                               "cellPhone": "+56957517706"
//                           },
//                           "names": "JUAN CARLOS RENE",
//                           "paternal": "ANDRADES",
//                           "maternal": "DIAZ"
//                       },
//                       "genderCode": "M",
//                       "birthdate": "1992-09-11T00:00:00",
//                       "nationality": "Chile"
//                   }
//               ],
//               "renewable": true
//             },
//           }
//         },
//         "Errores": [],
//         "Warnings": [],
//         "IsOk": true,
//         "ErroresConcatenados": "",
//         "WarningsConcatenados": ""
//       }
//     );
       
//     let responseMockBodyLogin ={
//       "context": {
//           "codOrganization": "SMARTIX",
//           "codSistema": "FALABELLA",
//           "codNegocio": "FALABELLA",
//           "usuario": "ext_keiacovantuono@falabella.cl",
//       "token": "dc55513e31e037e42d6a31b36c05b63103452e674e62b5d1cd9cbc836da2b994"	

//       },
//       "request": {
//           "apiKey": "d149b9900d94b01cada738d34a7c05016d125d7936ebc1dc923c005de618341e",
//           "comando": "Login",
//           "origenTransaccion": "B2C",
//           "formulario": [
//               {
//                   "codigo": "USR_USERNAME",
//                   "valor": "ext_keiacovantuono@falabella.cl"
//               },
//               {
//                   "codigo": "USR_PASSWORD",
//                   "valor": "Fiorella*126"
//               },
//               {
//                   "codigo": "USR_APIKEY",
//                   "valor": "d149b9900d94b01cada738d34a7c05016d125d7936ebc1dc923c005de618341e"
//               }
//           ]
//       }
//     }
//     const response = await GetServiceSmartix.getService(responseMockBodyLogin,3)
    
//     expect(response).toEqual(response)
//   })

  

})
