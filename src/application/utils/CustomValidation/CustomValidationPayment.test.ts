import { ServiceConsumer } from '../../../infrastructure/serviceConsumer/serviceConsumer'
import  'reflect-metadata'
import { serviceSmartix } from '../../../domain/services/ServiceSmartix/ServiceSmartix'
import { DtoProposal } from '../../../domain/models/ResposeDto/DtoResponsePolicy'
import { Bank, Method, Payment, Plan } from '../../../domain/models/ResposeDto/Payment'
import { CustomValidationPayment } from './CustomValidationPayment'

describe('CustomValidationPayment', (): void => {
  const GetServiceSmartix = new serviceSmartix()
  jest.fn().mockClear()

  it('Should create an instance ', (): void => {
    expect(GetServiceSmartix).toBeInstanceOf(serviceSmartix)
  })

  it('Should consumer an getSmatixPolicy detail CustomValidationPayment type error 1 ',async (): Promise<void> => {

    ServiceConsumer.post = jest.fn().mockClear()
    
   let customValidationPayment = new CustomValidationPayment()

    return customValidationPayment.validate(
        {
                "method": {
                    "id": "35",
                        "idDescription": "CMR PUNTOS",
                        "accountNumber": "2913",
                        "expirationDate": "Thu Mar 31 2022 01:00:00 GMT-0300 (Chile Summer Time)",
                        "type": "CMR PUNTOS",
                        "bank": {
                            "bankId": "1",
                            "name": "Banco de Chile / Banco Edwards"
                        }
                },
                "plan": {
                    "valued": "12",
                    "description": ""
                },
                "day": ""
        })
    .catch(err => {
        expect(err).toEqual(JSON.parse("{\"status\":503,\"message\":\"the answer is not as expected CustomValidationPayment \",\"errors\":[{\"target\":{\"diaStatus\":true,\"plan\":{\"description\":\"\"},\"dia\":\"\",\"method\":{\"accountNumberStatus\":true,\"expirationDateStatus\":true,\"bankStatus\":true,\"id\":\"35\",\"idDescription\":\"CMR PUNTOS\",\"type\":\"CMR PUNTOS\",\"accountNumber\":\"2913\",\"expirationDate\":\"Thu Mar 31 2022 04:00:00 GMT+0000 (Coordinated Universal Time)\",\"bank\":{\"bankId\":\"1\",\"name\":\"Banco de Chile / Banco Edwards\"}}},\"value\":{\"description\":\"\"},\"property\":\"plan\",\"children\":[{\"target\":{\"description\":\"\"},\"property\":\"value\",\"children\":[],\"constraints\":{\"isDefined\":\"value should not be null or undefined\",\"isNotEmpty\":\"value should not be empty\",\"isString\":\"value must be a string\"}},{\"target\":{\"description\":\"\"},\"value\":\"\",\"property\":\"description\",\"children\":[],\"constraints\":{\"isNotEmpty\":\"description should not be empty\"}}]}]}"));
      })
  })


  it('Should consumer an getSmatixPolicy detail CustomValidationPayment type 1 ',async (): Promise<void> => {

    ServiceConsumer.post = jest.fn().mockClear()
    
    ServiceConsumer.post = jest.fn().mockReturnValue(
      {
        "Result": {
          "ProviderResponse": {
            "proposals": {
              "Id": "1488",
              "CodReferido" : "12345",
              "date": "6/16/2022 12:00:00 AM",
              "sourceSystem": "CL",
              "hasPersonalHealthDeclaration": "",
              "salesChannel": {
                  "code": "WEB1",
                  "description": "WEB AUTOATENCION"
              },
              "salesExecutive": {
                  "id": "WEB6",
                  "identificationDocument": {
                      "type": "SEGUROS FALABELLA CORREDORES, SEG. FALABELLA CORREDORES-Intermediación",
                      "number": "1"
                  }
              },
              "broker": {
                  "identificationDocument": {
                      "type": "Cedula de Identidad",
                      "number": "76477116-8"
                  },
                  "id": "WEB6",
                  "name": "SEGUROS FALABELLA CORREDORES, SEG. FALABELLA CORREDORES-Intermediación"
              },
              "payment": {
                  "method": {
                      "id": "1",
                      "idDescription": "EFECTIVO",
                      "type": "EFECTIVO",
                  },
                  "plan": {
                      "value": "12",
                      "description": "MONTHLY"
                  },
                  "day": "10"
              },
              "status": {
                  "id": "",
                  "description": ""
              },
              "premium": {
                  "amounts": [
                      {
                          "amount": "5.02000000000",
                          "currency": {
                              "code": "03",
                              "description": "DOLAR"
                          }
                      },
                      {
                        "amount": "5.02000000000",
                        "currency": {
                            "code": "03",
                            "description": "DOLAR"
                        }
                    }
                  ],
                  "installments": [
                      {
                          "amount": "0.41830000000",
                          "currency": {
                              "code": "03",
                              "description": "DOLAR"
                          }
                      },
                      {
                        "amount": "5.02000000000",
                        "currency": {
                            "code": "03",
                            "description": "DOLAR"
                        }
                    }
                  ],
                  "paymentFrecuency": "12"
              },
              "product": {
                  "id": "IN-CL-211-02006-VCFNAP-A01",
                  "productType": "02006",
                  "productSubtype": "VCFNAP",
                  "description": "SEGURO DE VIDA FULL PROTECCIÓN",
                  "line": "211",
                  "plan": "A01",
                  "company": {
                      "identificationDocument": {
                          "type": "Cedula de Identidad",
                          "number": "76477116-8",
                          "validator": "8"
                      },
                      "tradeName": "CF SEGUROS DE VIDA S.A",
                      "businessName": "CF SEGUROS DE VIDA S.A"
                  },
                  "name": "SEGURO DE VIDA FULL PROTECCIÓN",
                  "isLiabilityCarInsurance": false
              },
              "validity": {
                  "from": "6/21/2022 12:00:00 AM",
                  "to": "6/22/2023 12:00:00 AM"
              },
              "contractCoverages": [
                  {
                      "id": "A01",
                      "name": "PLAN 1",
                      "description": "PLAN 1",
                      "value": "5.0200",
                      "descriptionValue": "DOLAR"
                  },
                  {
                      "id": "116",
                      "name": "MUERTE POR ENFERMEDAD",
                      "description": "MUERTE POR ENFERMEDAD",
                      "value": "0.0000",
                      "descriptionValue": "DOLAR"
                  },
                  {
                      "id": "117",
                      "name": "MUERTE POR ACCIDENTE",
                      "description": "MUERTE POR ACCIDENTE",
                      "value": "0.0000",
                      "descriptionValue": "DOLAR"
                  },
                  {
                      "id": "114",
                      "name": "INVALIDEZ 2/3 POR ENFERMEDAD O ACCIDENTE",
                      "description": "INVALIDEZ 2/3 POR ENFERMEDAD O ACCIDENTE",
                      "value": "0.0000",
                      "descriptionValue": "DOLAR"
                  },
                  {
                      "id": "02A",
                      "name": "Consulta Médica Online Mediclic",
                      "description": "Consulta Médica Online Mediclic",
                      "value": "0.0000",
                      "descriptionValue": "DOLAR"
                  },
                  {
                      "id": "01A",
                      "name": "Descuento en Farmacias Ahumada",
                      "description": "Descuento en Farmacias Ahumada",
                      "value": "0.0000",
                      "descriptionValue": "DOLAR"
                  }
              ],
              "insuredSubject": {
                  "secondaryId": "",
                  "type": {
                      "code": "6"
                  }
              },
              "insured": {
                  "identificationDocument": {
                      "type": "Cedula de Identidad",
                      "number": "18069703-9",
                      "validator": "9"
                  },
                  "generalPartyInfo": {
                      "address": {
                          "streetName": "LOS CEDROS  618  SAN MARCOS",
                          "streetNumber": "618",
                          "area": {
                              "level1": {
                                  "code": "618"
                              },
                              "level2": {
                                  "name": "BIOBÍO",
                                  "code": "8"
                              },
                              "level3": {
                                  "name": "CIUDAD DESCONOCIDA-MIGRACION",
                                  "code": "99999"
                              },
                              "level4": {
                                  "name": "4260000",
                                  "code": "4260000"
                              }
                          },
                          "apartmentNumber": "",
                          "apartmentFloor": ""
                      },
                      "preferredContact": {
                          "phone": "+56957517706",
                          "email": "ANDRADESDIAZ.JC@GMAIL.COM",
                          "cellPhone": "+56957517706"
                      },
                      "names": "JUAN CARLOS RENE",
                      "paternal": "ANDRADES",
                      "maternal": "DIAZ"
                  },
                  "genderCode": "M",
                  "birthdate": "1992-09-11T00:00:00",
                  "nationality": "Chile"
              },
              "proposalHolder": {
                  "identificationDocument": {
                      "type": "Cedula de Identidad",
                      "number": "18069703-9",
                      "validator": "9"
                  },
                  "generalPartyInfo": {
                      "address": {
                          "streetName": "LOS CEDROS  618  SAN MARCOS",
                          "streetNumber": "618",
                          "area": {
                              "level1": {
                                  "name": "Chile",
                                  "code": "618"
                              },
                              "level2": {
                                  "name": "BIOBÍO",
                                  "code": "8"
                              },
                              "level3": {
                                  "name": "CIUDAD DESCONOCIDA-MIGRACION",
                                  "code": "99999"
                              },
                              "level4": {
                                  "name": "4260000",
                                  "code": "4260000"
                              }
                          },
                          "apartmentNumber": "",
                          "apartmentFloor": ""
                      },
                      "preferredContact": {
                          "phone": "+56957517706",
                          "email": "ANDRADESDIAZ.JC@GMAIL.COM",
                          "cellPhone": "+56957517706"
                      },
                      "names": "JUAN CARLOS RENE",
                      "paternal": "ANDRADES",
                      "maternal": "DIAZ"
                  },
                  "genderCode": "M",
                  "birthdate": "1992-09-11T00:00:00",
                  "nationality": "Chile"
              },
              "beneficiaries": [
                  {
                      "identificationDocument": {
                          "type": "Cedula de Identidad",
                          "number": "18069703-9",
                          "validator": "9"
                      },
                      "generalPartyInfo": {
                          "address": {
                              "streetName": "LOS CEDROS  618  SAN MARCOS",
                              "streetNumber": "618",
                              "area": {
                                  "level1": {
                                      "name": "Chile",
                                      "code": "618"
                                  },
                                  "level2": {
                                      "name": "BIOBÍO",
                                      "code": "8"
                                  },
                                  "level3": {
                                      "name": "CIUDAD DESCONOCIDA-MIGRACION",
                                      "code": "99999"
                                  },
                                  "level4": {
                                      "name": "4260000",
                                      "code": "4260000"
                                  }
                              },
                              "apartmentNumber": "",
                              "apartmentFloor": ""
                          },
                          "preferredContact": {
                              "phone": "+56957517706",
                              "email": "ANDRADESDIAZ.JC@GMAIL.COM",
                              "cellPhone": "+56957517706"
                          },
                          "names": "JUAN CARLOS RENE",
                          "paternal": "ANDRADES",
                          "maternal": "DIAZ"
                      },
                      "genderCode": "M",
                      "birthdate": "1992-09-11T00:00:00",
                      "nationality": "Chile"
                  }
              ],
              "renewable": true
            },
          }
        },
        "Errores": [],
        "Warnings": [],
        "IsOk": true,
        "ErroresConcatenados": "",
        "WarningsConcatenados": ""
      }
    );
       
    let responseMockBodyLogin ={
      "context": {
          "codOrganization": "SMARTIX",
          "codSistema": "FALABELLA",
          "codNegocio": "FALABELLA",
          "usuario": "ext_keiacovantuono@falabella.cl",
      "token": "dc55513e31e037e42d6a31b36c05b63103452e674e62b5d1cd9cbc836da2b994"	

      },
      "request": {
          "apiKey": "d149b9900d94b01cada738d34a7c05016d125d7936ebc1dc923c005de618341e",
          "comando": "Login",
          "origenTransaccion": "B2C",
          "formulario": [
              {
                  "codigo": "USR_USERNAME",
                  "valor": "ext_keiacovantuono@falabella.cl"
              },
              {
                  "codigo": "USR_PASSWORD",
                  "valor": "Fiorella*126"
              },
              {
                  "codigo": "USR_APIKEY",
                  "valor": "d149b9900d94b01cada738d34a7c05016d125d7936ebc1dc923c005de618341e"
              }
          ]
      }
    }
    const response = await GetServiceSmartix.getService(responseMockBodyLogin,3)
    
    expect(response).toEqual(response)
  })

  it('Should consumer an getSmatixPolicy detail CustomValidationPayment type 0 ',async (): Promise<void> => {

    ServiceConsumer.post = jest.fn().mockClear()
    
    ServiceConsumer.post = jest.fn().mockReturnValue(
      {
        "Result": {
          "ProviderResponse": {
            "proposals": {
              "Id": "1488",
              "CodReferido" : "12345",
              "date": "6/16/2022 12:00:00 AM",
              "sourceSystem": "SMARTIX_CL",
              "hasPersonalHealthDeclaration": "",
              "salesChannel": {
                  "code": "WEB1",
                  "description": "WEB AUTOATENCION"
              },
              "salesExecutive": {
                  "id": "WEB6",
                  "identificationDocument": {
                      "type": "SEGUROS FALABELLA CORREDORES, SEG. FALABELLA CORREDORES-Intermediación",
                      "number": "1"
                  }
              },
              "broker": {
                  "identificationDocument": {
                      "type": "Cedula de Identidad",
                      "number": "76477116-8"
                  },
                  "id": "WEB6",
                  "name": "SEGUROS FALABELLA CORREDORES, SEG. FALABELLA CORREDORES-Intermediación"
              },
              "payment": {
                  "method": {
                      "id": "0",
                      "idDescription": "EFECTIVO",
                      "type": "EFECTIVO",
                  },
                  "plan": {
                      "value": "12",
                      "description": "MONTHLY"
                  },
                  "day": ""
              },
              "status": {
                  "id": "",
                  "description": ""
              },
              "premium": {
                  "amounts": [
                      {
                          "amount": "5.02000000000",
                          "currency": {
                              "code": "03",
                              "description": "DOLAR"
                          }
                      },
                      {
                        "amount": "5.02000000000",
                        "currency": {
                            "code": "03",
                            "description": "DOLAR"
                        }
                    }
                  ],
                  "installments": [
                      {
                          "amount": "0.41830000000",
                          "currency": {
                              "code": "03",
                              "description": "DOLAR"
                          }
                      },
                      {
                        "amount": "5.02000000000",
                        "currency": {
                            "code": "03",
                            "description": "DOLAR"
                        }
                    }
                  ],
                  "paymentFrecuency": "12"
              },
              "product": {
                  "id": "IN-CL-211-02006-VCFNAP-A01",
                  "productType": "02006",
                  "productSubtype": "VCFNAP",
                  "description": "SEGURO DE VIDA FULL PROTECCIÓN",
                  "line": "211",
                  "plan": "A01",
                  "company": {
                      "identificationDocument": {
                          "type": "Cedula de Identidad",
                          "number": "76477116-8",
                          "validator": "8"
                      },
                      "tradeName": "CF SEGUROS DE VIDA S.A",
                      "businessName": "CF SEGUROS DE VIDA S.A"
                  },
                  "name": "SEGURO DE VIDA FULL PROTECCIÓN",
                  "isLiabilityCarInsurance": false
              },
              "validity": {
                  "from": "6/21/2022 12:00:00 AM",
                  "to": "6/22/2023 12:00:00 AM"
              },
              "contractCoverages": [
                  {
                      "id": "A01",
                      "name": "PLAN 1",
                      "description": "PLAN 1",
                      "value": "5.0200",
                      "descriptionValue": "DOLAR"
                  },
                  {
                      "id": "116",
                      "name": "MUERTE POR ENFERMEDAD",
                      "description": "MUERTE POR ENFERMEDAD",
                      "value": "0.0000",
                      "descriptionValue": "DOLAR"
                  },
                  {
                      "id": "117",
                      "name": "MUERTE POR ACCIDENTE",
                      "description": "MUERTE POR ACCIDENTE",
                      "value": "0.0000",
                      "descriptionValue": "DOLAR"
                  },
                  {
                      "id": "114",
                      "name": "INVALIDEZ 2/3 POR ENFERMEDAD O ACCIDENTE",
                      "description": "INVALIDEZ 2/3 POR ENFERMEDAD O ACCIDENTE",
                      "value": "0.0000",
                      "descriptionValue": "DOLAR"
                  },
                  {
                      "id": "02A",
                      "name": "Consulta Médica Online Mediclic",
                      "description": "Consulta Médica Online Mediclic",
                      "value": "0.0000",
                      "descriptionValue": "DOLAR"
                  },
                  {
                      "id": "01A",
                      "name": "Descuento en Farmacias Ahumada",
                      "description": "Descuento en Farmacias Ahumada",
                      "value": "0.0000",
                      "descriptionValue": "DOLAR"
                  }
              ],
              "insuredSubject": {
                  "secondaryId": "",
                  "type": {
                      "code": "6"
                  }
              },
              "insured": {
                  "identificationDocument": {
                      "type": "Cedula de Identidad",
                      "number": "18069703-9",
                      "validator": "9"
                  },
                  "generalPartyInfo": {
                      "address": {
                          "streetName": "LOS CEDROS  618  SAN MARCOS",
                          "streetNumber": "618",
                          "area": {
                              "level1": {
                                  "code": "618"
                              },
                              "level2": {
                                  "name": "BIOBÍO",
                                  "code": "8"
                              },
                              "level3": {
                                  "name": "CIUDAD DESCONOCIDA-MIGRACION",
                                  "code": "99999"
                              },
                              "level4": {
                                  "name": "4260000",
                                  "code": "4260000"
                              }
                          },
                          "apartmentNumber": "",
                          "apartmentFloor": ""
                      },
                      "preferredContact": {
                          "phone": "+56957517706",
                          "email": "ANDRADESDIAZ.JC@GMAIL.COM",
                          "cellPhone": "+56957517706"
                      },
                      "names": "JUAN CARLOS RENE",
                      "paternal": "ANDRADES",
                      "maternal": "DIAZ"
                  },
                  "genderCode": "M",
                  "birthdate": "1992-09-11T00:00:00",
                  "nationality": "Chile"
              },
              "proposalHolder": {
                  "identificationDocument": {
                      "type": "Cedula de Identidad",
                      "number": "18069703-9",
                      "validator": "9"
                  },
                  "generalPartyInfo": {
                      "address": {
                          "streetName": "LOS CEDROS  618  SAN MARCOS",
                          "streetNumber": "618",
                          "area": {
                              "level1": {
                                  "name": "Chile",
                                  "code": "618"
                              },
                              "level2": {
                                  "name": "BIOBÍO",
                                  "code": "8"
                              },
                              "level3": {
                                  "name": "CIUDAD DESCONOCIDA-MIGRACION",
                                  "code": "99999"
                              },
                              "level4": {
                                  "name": "4260000",
                                  "code": "4260000"
                              }
                          },
                          "apartmentNumber": "",
                          "apartmentFloor": ""
                      },
                      "preferredContact": {
                          "phone": "+56957517706",
                          "email": "ANDRADESDIAZ.JC@GMAIL.COM",
                          "cellPhone": "+56957517706"
                      },
                      "names": "JUAN CARLOS RENE",
                      "paternal": "ANDRADES",
                      "maternal": "DIAZ"
                  },
                  "genderCode": "M",
                  "birthdate": "1992-09-11T00:00:00",
                  "nationality": "Chile"
              },
              "beneficiaries": [
                  {
                      "identificationDocument": {
                          "type": "Cedula de Identidad",
                          "number": "18069703-9",
                          "validator": "9"
                      },
                      "generalPartyInfo": {
                          "address": {
                              "streetName": "LOS CEDROS  618  SAN MARCOS",
                              "streetNumber": "618",
                              "area": {
                                  "level1": {
                                      "name": "Chile",
                                      "code": "618"
                                  },
                                  "level2": {
                                      "name": "BIOBÍO",
                                      "code": "8"
                                  },
                                  "level3": {
                                      "name": "CIUDAD DESCONOCIDA-MIGRACION",
                                      "code": "99999"
                                  },
                                  "level4": {
                                      "name": "4260000",
                                      "code": "4260000"
                                  }
                              },
                              "apartmentNumber": "",
                              "apartmentFloor": ""
                          },
                          "preferredContact": {
                              "phone": "+56957517706",
                              "email": "ANDRADESDIAZ.JC@GMAIL.COM",
                              "cellPhone": "+56957517706"
                          },
                          "names": "JUAN CARLOS RENE",
                          "paternal": "ANDRADES",
                          "maternal": "DIAZ"
                      },
                      "genderCode": "M",
                      "birthdate": "1992-09-11T00:00:00",
                      "nationality": "Chile"
                  }
              ],
              "renewable": true
            },
          }
        },
        "Errores": [],
        "Warnings": [],
        "IsOk": true,
        "ErroresConcatenados": "",
        "WarningsConcatenados": ""
      }
    );
       
    let responseMockBodyLogin ={
      "context": {
          "codOrganization": "SMARTIX",
          "codSistema": "FALABELLA",
          "codNegocio": "FALABELLA",
          "usuario": "ext_keiacovantuono@falabella.cl",
      "token": "dc55513e31e037e42d6a31b36c05b63103452e674e62b5d1cd9cbc836da2b994"	

      },
      "request": {
          "apiKey": "d149b9900d94b01cada738d34a7c05016d125d7936ebc1dc923c005de618341e",
          "comando": "Login",
          "origenTransaccion": "B2C",
          "formulario": [
              {
                  "codigo": "USR_USERNAME",
                  "valor": "ext_keiacovantuono@falabella.cl"
              },
              {
                  "codigo": "USR_PASSWORD",
                  "valor": "Fiorella*126"
              },
              {
                  "codigo": "USR_APIKEY",
                  "valor": "d149b9900d94b01cada738d34a7c05016d125d7936ebc1dc923c005de618341e"
              }
          ]
      }
    }
    const response = await GetServiceSmartix.getService(responseMockBodyLogin,3)
    
    expect(response).toEqual(response)
  })

  it('Should consumer an getSmatixPolicy detail CustomValidationPayment type 5 ',async (): Promise<void> => {

    ServiceConsumer.post = jest.fn().mockClear()
    
    ServiceConsumer.post = jest.fn().mockReturnValue(
      {
        "Result": {
          "ProviderResponse": {
            "proposals": {
              "Id": "1488",
              "CodReferido" : "12345",
              "date": "6/16/2022 12:00:00 AM",
              "sourceSystem": "SMARTIX_CL",
              "hasPersonalHealthDeclaration": "",
              "salesChannel": {
                  "code": "WEB1",
                  "description": "WEB AUTOATENCION"
              },
              "salesExecutive": {
                  "id": "WEB6",
                  "identificationDocument": {
                      "type": "SEGUROS FALABELLA CORREDORES, SEG. FALABELLA CORREDORES-Intermediación",
                      "number": "1"
                  }
              },
              "broker": {
                  "identificationDocument": {
                      "type": "Cedula de Identidad",
                      "number": "76477116-8"
                  },
                  "id": "WEB6",
                  "name": "SEGUROS FALABELLA CORREDORES, SEG. FALABELLA CORREDORES-Intermediación"
              },
              "payment": {
                "method": {
                    "id": "5",
                    "idDescription": "TARJETA CMR",
                    "accountNumber": "1185163700",
                    "type": "TARJETA CMR"
                },
                "plan": {
                    "value": "12",
                    "description": "MONTHLY"
                }
            },
              "status": {
                  "id": "",
                  "description": ""
              },
              "premium": {
                  "amounts": [
                      {
                          "amount": "5.02000000000",
                          "currency": {
                              "code": "03",
                              "description": "DOLAR"
                          }
                      },
                      {
                        "amount": "5.02000000000",
                        "currency": {
                            "code": "03",
                            "description": "DOLAR"
                        }
                    }
                  ],
                  "installments": [
                      {
                          "amount": "0.41830000000",
                          "currency": {
                              "code": "03",
                              "description": "DOLAR"
                          }
                      },
                      {
                        "amount": "5.02000000000",
                        "currency": {
                            "code": "03",
                            "description": "DOLAR"
                        }
                    }
                  ],
                  "paymentFrecuency": "12"
              },
              "product": {
                  "id": "IN-CL-211-02006-VCFNAP-A01",
                  "productType": "02006",
                  "productSubtype": "VCFNAP",
                  "description": "SEGURO DE VIDA FULL PROTECCIÓN",
                  "line": "211",
                  "plan": "A01",
                  "company": {
                      "identificationDocument": {
                          "type": "Cedula de Identidad",
                          "number": "76477116-8",
                          "validator": "8"
                      },
                      "tradeName": "CF SEGUROS DE VIDA S.A",
                      "businessName": "CF SEGUROS DE VIDA S.A"
                  },
                  "name": "SEGURO DE VIDA FULL PROTECCIÓN",
                  "isLiabilityCarInsurance": false
              },
              "validity": {
                  "from": "6/21/2022 12:00:00 AM",
                  "to": "6/22/2023 12:00:00 AM"
              },
              "contractCoverages": [
                  {
                      "id": "A01",
                      "name": "PLAN 1",
                      "description": "PLAN 1",
                      "value": "5.0200",
                      "descriptionValue": "DOLAR"
                  },
                  {
                      "id": "116",
                      "name": "MUERTE POR ENFERMEDAD",
                      "description": "MUERTE POR ENFERMEDAD",
                      "value": "0.0000",
                      "descriptionValue": "DOLAR"
                  },
                  {
                      "id": "117",
                      "name": "MUERTE POR ACCIDENTE",
                      "description": "MUERTE POR ACCIDENTE",
                      "value": "0.0000",
                      "descriptionValue": "DOLAR"
                  },
                  {
                      "id": "114",
                      "name": "INVALIDEZ 2/3 POR ENFERMEDAD O ACCIDENTE",
                      "description": "INVALIDEZ 2/3 POR ENFERMEDAD O ACCIDENTE",
                      "value": "0.0000",
                      "descriptionValue": "DOLAR"
                  },
                  {
                      "id": "02A",
                      "name": "Consulta Médica Online Mediclic",
                      "description": "Consulta Médica Online Mediclic",
                      "value": "0.0000",
                      "descriptionValue": "DOLAR"
                  },
                  {
                      "id": "01A",
                      "name": "Descuento en Farmacias Ahumada",
                      "description": "Descuento en Farmacias Ahumada",
                      "value": "0.0000",
                      "descriptionValue": "DOLAR"
                  }
              ],
              "insuredSubject": {
                  "secondaryId": "",
                  "type": {
                      "code": "6"
                  }
              },
              "insured": {
                  "identificationDocument": {
                      "type": "Cedula de Identidad",
                      "number": "18069703-9",
                      "validator": "9"
                  },
                  "generalPartyInfo": {
                      "address": {
                          "streetName": "LOS CEDROS  618  SAN MARCOS",
                          "streetNumber": "618",
                          "area": {
                              "level1": {
                                  "code": "618"
                              },
                              "level2": {
                                  "name": "BIOBÍO",
                                  "code": "8"
                              },
                              "level3": {
                                  "name": "CIUDAD DESCONOCIDA-MIGRACION",
                                  "code": "99999"
                              },
                              "level4": {
                                  "name": "4260000",
                                  "code": "4260000"
                              }
                          },
                          "apartmentNumber": "",
                          "apartmentFloor": ""
                      },
                      "preferredContact": {
                          "phone": "+56957517706",
                          "email": "ANDRADESDIAZ.JC@GMAIL.COM",
                          "cellPhone": "+56957517706"
                      },
                      "names": "JUAN CARLOS RENE",
                      "paternal": "ANDRADES",
                      "maternal": "DIAZ"
                  },
                  "genderCode": "M",
                  "birthdate": "1992-09-11T00:00:00",
                  "nationality": "Chile"
              },
              "proposalHolder": {
                  "identificationDocument": {
                      "type": "Cedula de Identidad",
                      "number": "18069703-9",
                      "validator": "9"
                  },
                  "generalPartyInfo": {
                      "address": {
                          "streetName": "LOS CEDROS  618  SAN MARCOS",
                          "streetNumber": "618",
                          "area": {
                              "level1": {
                                  "name": "Chile",
                                  "code": "618"
                              },
                              "level2": {
                                  "name": "BIOBÍO",
                                  "code": "8"
                              },
                              "level3": {
                                  "name": "CIUDAD DESCONOCIDA-MIGRACION",
                                  "code": "99999"
                              },
                              "level4": {
                                  "name": "4260000",
                                  "code": "4260000"
                              }
                          },
                          "apartmentNumber": "",
                          "apartmentFloor": ""
                      },
                      "preferredContact": {
                          "phone": "+56957517706",
                          "email": "ANDRADESDIAZ.JC@GMAIL.COM",
                          "cellPhone": "+56957517706"
                      },
                      "names": "JUAN CARLOS RENE",
                      "paternal": "ANDRADES",
                      "maternal": "DIAZ"
                  },
                  "genderCode": "M",
                  "birthdate": "1992-09-11T00:00:00",
                  "nationality": "Chile"
              },
              "beneficiaries": [
                  {
                      "identificationDocument": {
                          "type": "Cedula de Identidad",
                          "number": "18069703-9",
                          "validator": "9"
                      },
                      "generalPartyInfo": {
                          "address": {
                              "streetName": "LOS CEDROS  618  SAN MARCOS",
                              "streetNumber": "618",
                              "area": {
                                  "level1": {
                                      "name": "Chile",
                                      "code": "618"
                                  },
                                  "level2": {
                                      "name": "BIOBÍO",
                                      "code": "8"
                                  },
                                  "level3": {
                                      "name": "CIUDAD DESCONOCIDA-MIGRACION",
                                      "code": "99999"
                                  },
                                  "level4": {
                                      "name": "4260000",
                                      "code": "4260000"
                                  }
                              },
                              "apartmentNumber": "",
                              "apartmentFloor": ""
                          },
                          "preferredContact": {
                              "phone": "+56957517706",
                              "email": "ANDRADESDIAZ.JC@GMAIL.COM",
                              "cellPhone": "+56957517706"
                          },
                          "names": "JUAN CARLOS RENE",
                          "paternal": "ANDRADES",
                          "maternal": "DIAZ"
                      },
                      "genderCode": "M",
                      "birthdate": "1992-09-11T00:00:00",
                      "nationality": "Chile"
                  }
              ],
              "renewable": true
            },
          }
        },
        "Errores": [],
        "Warnings": [],
        "IsOk": true,
        "ErroresConcatenados": "",
        "WarningsConcatenados": ""
      }
    );
       
    let responseMockBodyLogin ={
      "context": {
          "codOrganization": "SMARTIX",
          "codSistema": "FALABELLA",
          "codNegocio": "FALABELLA",
          "usuario": "ext_keiacovantuono@falabella.cl",
      "token": "dc55513e31e037e42d6a31b36c05b63103452e674e62b5d1cd9cbc836da2b994"	

      },
      "request": {
          "apiKey": "d149b9900d94b01cada738d34a7c05016d125d7936ebc1dc923c005de618341e",
          "comando": "Login",
          "origenTransaccion": "B2C",
          "formulario": [
              {
                  "codigo": "USR_USERNAME",
                  "valor": "ext_keiacovantuono@falabella.cl"
              },
              {
                  "codigo": "USR_PASSWORD",
                  "valor": "Fiorella*126"
              },
              {
                  "codigo": "USR_APIKEY",
                  "valor": "d149b9900d94b01cada738d34a7c05016d125d7936ebc1dc923c005de618341e"
              }
          ]
      }
    }
    const response = await GetServiceSmartix.getService(responseMockBodyLogin,3)
    
    expect(response).toEqual(response)
  })

  it('Should consumer an getSmatixPolicy detail CustomValidationPayment type 9 ',async (): Promise<void> => {

    ServiceConsumer.post = jest.fn().mockClear()
    
    ServiceConsumer.post = jest.fn().mockReturnValue(
      {
        "Result": {
          "ProviderResponse": {
            "proposals": {
              "Id": "1488",
              "CodReferido" : "12345",
              "date": "6/16/2022 12:00:00 AM",
              "sourceSystem": "SMARTIX_CL",
              "hasPersonalHealthDeclaration": "",
              "salesChannel": {
                  "code": "WEB1",
                  "description": "WEB AUTOATENCION"
              },
              "salesExecutive": {
                  "id": "WEB6",
                  "identificationDocument": {
                      "type": "SEGUROS FALABELLA CORREDORES, SEG. FALABELLA CORREDORES-Intermediación",
                      "number": "1"
                  }
              },
              "broker": {
                  "identificationDocument": {
                      "type": "Cedula de Identidad",
                      "number": "76477116-8"
                  },
                  "id": "WEB6",
                  "name": "SEGUROS FALABELLA CORREDORES, SEG. FALABELLA CORREDORES-Intermediación"
              },
              "payment": {
                "method": {
                    "id": "9",
                    "idDescription": "MANDATO BANCARIO",
                    "accountNumber": "12345678",
                    "expirationDate": "Sat Aug 03 2019 00:00:00 GMT-0400 (Chile Standard Time)",
                    "type": "MANDATO BANCARIO"
                },
                "plan": {
                    "value": "12",
                    "description": "MONTHLY"
                }
            },
              "status": {
                  "id": "",
                  "description": ""
              },
              "premium": {
                  "amounts": [
                      {
                          "amount": "5.02000000000",
                          "currency": {
                              "code": "03",
                              "description": "DOLAR"
                          }
                      },
                      {
                        "amount": "5.02000000000",
                        "currency": {
                            "code": "03",
                            "description": "DOLAR"
                        }
                    }
                  ],
                  "installments": [
                      {
                          "amount": "0.41830000000",
                          "currency": {
                              "code": "03",
                              "description": "DOLAR"
                          }
                      },
                      {
                        "amount": "5.02000000000",
                        "currency": {
                            "code": "03",
                            "description": "DOLAR"
                        }
                    }
                  ],
                  "paymentFrecuency": "12"
              },
              "product": {
                  "id": "IN-CL-211-02006-VCFNAP-A01",
                  "productType": "02006",
                  "productSubtype": "VCFNAP",
                  "description": "SEGURO DE VIDA FULL PROTECCIÓN",
                  "line": "211",
                  "plan": "A01",
                  "company": {
                      "identificationDocument": {
                          "type": "Cedula de Identidad",
                          "number": "76477116-8",
                          "validator": "8"
                      },
                      "tradeName": "CF SEGUROS DE VIDA S.A",
                      "businessName": "CF SEGUROS DE VIDA S.A"
                  },
                  "name": "SEGURO DE VIDA FULL PROTECCIÓN",
                  "isLiabilityCarInsurance": false
              },
              "validity": {
                  "from": "6/21/2022 12:00:00 AM",
                  "to": "6/22/2023 12:00:00 AM"
              },
              "contractCoverages": [
                  {
                      "id": "A01",
                      "name": "PLAN 1",
                      "description": "PLAN 1",
                      "value": "5.0200",
                      "descriptionValue": "DOLAR"
                  },
                  {
                      "id": "116",
                      "name": "MUERTE POR ENFERMEDAD",
                      "description": "MUERTE POR ENFERMEDAD",
                      "value": "0.0000",
                      "descriptionValue": "DOLAR"
                  },
                  {
                      "id": "117",
                      "name": "MUERTE POR ACCIDENTE",
                      "description": "MUERTE POR ACCIDENTE",
                      "value": "0.0000",
                      "descriptionValue": "DOLAR"
                  },
                  {
                      "id": "114",
                      "name": "INVALIDEZ 2/3 POR ENFERMEDAD O ACCIDENTE",
                      "description": "INVALIDEZ 2/3 POR ENFERMEDAD O ACCIDENTE",
                      "value": "0.0000",
                      "descriptionValue": "DOLAR"
                  },
                  {
                      "id": "02A",
                      "name": "Consulta Médica Online Mediclic",
                      "description": "Consulta Médica Online Mediclic",
                      "value": "0.0000",
                      "descriptionValue": "DOLAR"
                  },
                  {
                      "id": "01A",
                      "name": "Descuento en Farmacias Ahumada",
                      "description": "Descuento en Farmacias Ahumada",
                      "value": "0.0000",
                      "descriptionValue": "DOLAR"
                  }
              ],
              "insuredSubject": {
                  "secondaryId": "",
                  "type": {
                      "code": "6"
                  }
              },
              "insured": {
                  "identificationDocument": {
                      "type": "Cedula de Identidad",
                      "number": "18069703-9",
                      "validator": "9"
                  },
                  "generalPartyInfo": {
                      "address": {
                          "streetName": "LOS CEDROS  618  SAN MARCOS",
                          "streetNumber": "618",
                          "area": {
                              "level1": {
                                  "code": "618"
                              },
                              "level2": {
                                  "name": "BIOBÍO",
                                  "code": "8"
                              },
                              "level3": {
                                  "name": "CIUDAD DESCONOCIDA-MIGRACION",
                                  "code": "99999"
                              },
                              "level4": {
                                  "name": "4260000",
                                  "code": "4260000"
                              }
                          },
                          "apartmentNumber": "",
                          "apartmentFloor": ""
                      },
                      "preferredContact": {
                          "phone": "+56957517706",
                          "email": "ANDRADESDIAZ.JC@GMAIL.COM",
                          "cellPhone": "+56957517706"
                      },
                      "names": "JUAN CARLOS RENE",
                      "paternal": "ANDRADES",
                      "maternal": "DIAZ"
                  },
                  "genderCode": "M",
                  "birthdate": "1992-09-11T00:00:00",
                  "nationality": "Chile"
              },
              "proposalHolder": {
                  "identificationDocument": {
                      "type": "Cedula de Identidad",
                      "number": "18069703-9",
                      "validator": "9"
                  },
                  "generalPartyInfo": {
                      "address": {
                          "streetName": "LOS CEDROS  618  SAN MARCOS",
                          "streetNumber": "618",
                          "area": {
                              "level1": {
                                  "name": "Chile",
                                  "code": "618"
                              },
                              "level2": {
                                  "name": "BIOBÍO",
                                  "code": "8"
                              },
                              "level3": {
                                  "name": "CIUDAD DESCONOCIDA-MIGRACION",
                                  "code": "99999"
                              },
                              "level4": {
                                  "name": "4260000",
                                  "code": "4260000"
                              }
                          },
                          "apartmentNumber": "",
                          "apartmentFloor": ""
                      },
                      "preferredContact": {
                          "phone": "+56957517706",
                          "email": "ANDRADESDIAZ.JC@GMAIL.COM",
                          "cellPhone": "+56957517706"
                      },
                      "names": "JUAN CARLOS RENE",
                      "paternal": "ANDRADES",
                      "maternal": "DIAZ"
                  },
                  "genderCode": "M",
                  "birthdate": "1992-09-11T00:00:00",
                  "nationality": "Chile"
              },
              "beneficiaries": [
                  {
                      "identificationDocument": {
                          "type": "Cedula de Identidad",
                          "number": "18069703-9",
                          "validator": "9"
                      },
                      "generalPartyInfo": {
                          "address": {
                              "streetName": "LOS CEDROS  618  SAN MARCOS",
                              "streetNumber": "618",
                              "area": {
                                  "level1": {
                                      "name": "Chile",
                                      "code": "618"
                                  },
                                  "level2": {
                                      "name": "BIOBÍO",
                                      "code": "8"
                                  },
                                  "level3": {
                                      "name": "CIUDAD DESCONOCIDA-MIGRACION",
                                      "code": "99999"
                                  },
                                  "level4": {
                                      "name": "4260000",
                                      "code": "4260000"
                                  }
                              },
                              "apartmentNumber": "",
                              "apartmentFloor": ""
                          },
                          "preferredContact": {
                              "phone": "+56957517706",
                              "email": "ANDRADESDIAZ.JC@GMAIL.COM",
                              "cellPhone": "+56957517706"
                          },
                          "names": "JUAN CARLOS RENE",
                          "paternal": "ANDRADES",
                          "maternal": "DIAZ"
                      },
                      "genderCode": "M",
                      "birthdate": "1992-09-11T00:00:00",
                      "nationality": "Chile"
                  }
              ],
              "renewable": true
            },
          }
        },
        "Errores": [],
        "Warnings": [],
        "IsOk": true,
        "ErroresConcatenados": "",
        "WarningsConcatenados": ""
      }
    );
       
    let responseMockBodyLogin ={
      "context": {
          "codOrganization": "SMARTIX",
          "codSistema": "FALABELLA",
          "codNegocio": "FALABELLA",
          "usuario": "ext_keiacovantuono@falabella.cl",
      "token": "dc55513e31e037e42d6a31b36c05b63103452e674e62b5d1cd9cbc836da2b994"	

      },
      "request": {
          "apiKey": "d149b9900d94b01cada738d34a7c05016d125d7936ebc1dc923c005de618341e",
          "comando": "Login",
          "origenTransaccion": "B2C",
          "formulario": [
              {
                  "codigo": "USR_USERNAME",
                  "valor": "ext_keiacovantuono@falabella.cl"
              },
              {
                  "codigo": "USR_PASSWORD",
                  "valor": "Fiorella*126"
              },
              {
                  "codigo": "USR_APIKEY",
                  "valor": "d149b9900d94b01cada738d34a7c05016d125d7936ebc1dc923c005de618341e"
              }
          ]
      }
    }
    const response = await GetServiceSmartix.getService(responseMockBodyLogin,3)
    
    expect(response).toEqual(response)
  })

  it('Should consumer an getSmatixPolicy detail CustomValidationPayment type 8 ',async (): Promise<void> => {

    ServiceConsumer.post = jest.fn().mockClear()
    
    ServiceConsumer.post = jest.fn().mockReturnValue(
      {
        "Result": {
          "ProviderResponse": {
            "proposals": {
              "Id": "1488",
              "CodReferido" : "12345",
              "date": "6/16/2022 12:00:00 AM",
              "sourceSystem": "SMARTIX_CL",
              "hasPersonalHealthDeclaration": "",
              "salesChannel": {
                  "code": "WEB1",
                  "description": "WEB AUTOATENCION"
              },
              "salesExecutive": {
                  "id": "WEB6",
                  "identificationDocument": {
                      "type": "SEGUROS FALABELLA CORREDORES, SEG. FALABELLA CORREDORES-Intermediación",
                      "number": "1"
                  }
              },
              "broker": {
                  "identificationDocument": {
                      "type": "Cedula de Identidad",
                      "number": "76477116-8"
                  },
                  "id": "WEB6",
                  "name": "SEGUROS FALABELLA CORREDORES, SEG. FALABELLA CORREDORES-Intermediación"
              },
              "payment": {
                "method": {
                  "id": "8",
                  "idDescription": "TRANSBANK",
                  "accountNumber": "************4545",
                  "expirationDate": "Thu Sep 16 2021 01:00:00 GMT-0300 (Chile Summer Time)",
                  "type": "TRANSBANK"
              },
              "plan": {
                  "value": "12",
                  "description": "MONTHLY"
              },
              "day": "22" // DIA DE COBRO
            },
              "status": {
                  "id": "",
                  "description": ""
              },
              "premium": {
                  "amounts": [
                      {
                          "amount": "5.02000000000",
                          "currency": {
                              "code": "03",
                              "description": "DOLAR"
                          }
                      },
                      {
                        "amount": "5.02000000000",
                        "currency": {
                            "code": "03",
                            "description": "DOLAR"
                        }
                    }
                  ],
                  "installments": [
                      {
                          "amount": "0.41830000000",
                          "currency": {
                              "code": "03",
                              "description": "DOLAR"
                          }
                      },
                      {
                        "amount": "5.02000000000",
                        "currency": {
                            "code": "03",
                            "description": "DOLAR"
                        }
                    }
                  ],
                  "paymentFrecuency": "12"
              },
              "product": {
                  "id": "IN-CL-211-02006-VCFNAP-A01",
                  "productType": "02006",
                  "productSubtype": "VCFNAP",
                  "description": "SEGURO DE VIDA FULL PROTECCIÓN",
                  "line": "211",
                  "plan": "A01",
                  "company": {
                      "identificationDocument": {
                          "type": "Cedula de Identidad",
                          "number": "76477116-8",
                          "validator": "8"
                      },
                      "tradeName": "CF SEGUROS DE VIDA S.A",
                      "businessName": "CF SEGUROS DE VIDA S.A"
                  },
                  "name": "SEGURO DE VIDA FULL PROTECCIÓN",
                  "isLiabilityCarInsurance": false
              },
              "validity": {
                  "from": "6/21/2022 12:00:00 AM",
                  "to": "6/22/2023 12:00:00 AM"
              },
              "contractCoverages": [
                  {
                      "id": "A01",
                      "name": "PLAN 1",
                      "description": "PLAN 1",
                      "value": "5.0200",
                      "descriptionValue": "DOLAR"
                  },
                  {
                      "id": "116",
                      "name": "MUERTE POR ENFERMEDAD",
                      "description": "MUERTE POR ENFERMEDAD",
                      "value": "0.0000",
                      "descriptionValue": "DOLAR"
                  },
                  {
                      "id": "117",
                      "name": "MUERTE POR ACCIDENTE",
                      "description": "MUERTE POR ACCIDENTE",
                      "value": "0.0000",
                      "descriptionValue": "DOLAR"
                  },
                  {
                      "id": "114",
                      "name": "INVALIDEZ 2/3 POR ENFERMEDAD O ACCIDENTE",
                      "description": "INVALIDEZ 2/3 POR ENFERMEDAD O ACCIDENTE",
                      "value": "0.0000",
                      "descriptionValue": "DOLAR"
                  },
                  {
                      "id": "02A",
                      "name": "Consulta Médica Online Mediclic",
                      "description": "Consulta Médica Online Mediclic",
                      "value": "0.0000",
                      "descriptionValue": "DOLAR"
                  },
                  {
                      "id": "01A",
                      "name": "Descuento en Farmacias Ahumada",
                      "description": "Descuento en Farmacias Ahumada",
                      "value": "0.0000",
                      "descriptionValue": "DOLAR"
                  }
              ],
              "insuredSubject": {
                  "secondaryId": "",
                  "type": {
                      "code": "6"
                  }
              },
              "insured": {
                  "identificationDocument": {
                      "type": "Cedula de Identidad",
                      "number": "18069703-9",
                      "validator": "9"
                  },
                  "generalPartyInfo": {
                      "address": {
                          "streetName": "LOS CEDROS  618  SAN MARCOS",
                          "streetNumber": "618",
                          "area": {
                              "level1": {
                                  "code": "618"
                              },
                              "level2": {
                                  "name": "BIOBÍO",
                                  "code": "8"
                              },
                              "level3": {
                                  "name": "CIUDAD DESCONOCIDA-MIGRACION",
                                  "code": "99999"
                              },
                              "level4": {
                                  "name": "4260000",
                                  "code": "4260000"
                              }
                          },
                          "apartmentNumber": "",
                          "apartmentFloor": ""
                      },
                      "preferredContact": {
                          "phone": "+56957517706",
                          "email": "ANDRADESDIAZ.JC@GMAIL.COM",
                          "cellPhone": "+56957517706"
                      },
                      "names": "JUAN CARLOS RENE",
                      "paternal": "ANDRADES",
                      "maternal": "DIAZ"
                  },
                  "genderCode": "M",
                  "birthdate": "1992-09-11T00:00:00",
                  "nationality": "Chile"
              },
              "proposalHolder": {
                  "identificationDocument": {
                      "type": "Cedula de Identidad",
                      "number": "18069703-9",
                      "validator": "9"
                  },
                  "generalPartyInfo": {
                      "address": {
                          "streetName": "LOS CEDROS  618  SAN MARCOS",
                          "streetNumber": "618",
                          "area": {
                              "level1": {
                                  "name": "Chile",
                                  "code": "618"
                              },
                              "level2": {
                                  "name": "BIOBÍO",
                                  "code": "8"
                              },
                              "level3": {
                                  "name": "CIUDAD DESCONOCIDA-MIGRACION",
                                  "code": "99999"
                              },
                              "level4": {
                                  "name": "4260000",
                                  "code": "4260000"
                              }
                          },
                          "apartmentNumber": "",
                          "apartmentFloor": ""
                      },
                      "preferredContact": {
                          "phone": "+56957517706",
                          "email": "ANDRADESDIAZ.JC@GMAIL.COM",
                          "cellPhone": "+56957517706"
                      },
                      "names": "JUAN CARLOS RENE",
                      "paternal": "ANDRADES",
                      "maternal": "DIAZ"
                  },
                  "genderCode": "M",
                  "birthdate": "1992-09-11T00:00:00",
                  "nationality": "Chile"
              },
              "beneficiaries": [
                  {
                      "identificationDocument": {
                          "type": "Cedula de Identidad",
                          "number": "18069703-9",
                          "validator": "9"
                      },
                      "generalPartyInfo": {
                          "address": {
                              "streetName": "LOS CEDROS  618  SAN MARCOS",
                              "streetNumber": "618",
                              "area": {
                                  "level1": {
                                      "name": "Chile",
                                      "code": "618"
                                  },
                                  "level2": {
                                      "name": "BIOBÍO",
                                      "code": "8"
                                  },
                                  "level3": {
                                      "name": "CIUDAD DESCONOCIDA-MIGRACION",
                                      "code": "99999"
                                  },
                                  "level4": {
                                      "name": "4260000",
                                      "code": "4260000"
                                  }
                              },
                              "apartmentNumber": "",
                              "apartmentFloor": ""
                          },
                          "preferredContact": {
                              "phone": "+56957517706",
                              "email": "ANDRADESDIAZ.JC@GMAIL.COM",
                              "cellPhone": "+56957517706"
                          },
                          "names": "JUAN CARLOS RENE",
                          "paternal": "ANDRADES",
                          "maternal": "DIAZ"
                      },
                      "genderCode": "M",
                      "birthdate": "1992-09-11T00:00:00",
                      "nationality": "Chile"
                  }
              ],
              "renewable": true
            },
          }
        },
        "Errores": [],
        "Warnings": [],
        "IsOk": true,
        "ErroresConcatenados": "",
        "WarningsConcatenados": ""
      }
    );
       
    let responseMockBodyLogin ={
      "context": {
          "codOrganization": "SMARTIX",
          "codSistema": "FALABELLA",
          "codNegocio": "FALABELLA",
          "usuario": "ext_keiacovantuono@falabella.cl",
      "token": "dc55513e31e037e42d6a31b36c05b63103452e674e62b5d1cd9cbc836da2b994"	

      },
      "request": {
          "apiKey": "d149b9900d94b01cada738d34a7c05016d125d7936ebc1dc923c005de618341e",
          "comando": "Login",
          "origenTransaccion": "B2C",
          "formulario": [
              {
                  "codigo": "USR_USERNAME",
                  "valor": "ext_keiacovantuono@falabella.cl"
              },
              {
                  "codigo": "USR_PASSWORD",
                  "valor": "Fiorella*126"
              },
              {
                  "codigo": "USR_APIKEY",
                  "valor": "d149b9900d94b01cada738d34a7c05016d125d7936ebc1dc923c005de618341e"
              }
          ]
      }
    }
    const response = await GetServiceSmartix.getService(responseMockBodyLogin,3)
    
    expect(response).toEqual(response)
  })

  it('Should consumer an getSmatixPolicy detail CustomValidationPayment type 26',async (): Promise<void> => {

    ServiceConsumer.post = jest.fn().mockClear()
    
    ServiceConsumer.post = jest.fn().mockReturnValue(
      {
        "Result": {
          "ProviderResponse": {
            "proposals": {
              "Id": "1488",
              "CodReferido" : "12345",
              "date": "6/16/2022 12:00:00 AM",
              "sourceSystem": "SMARTIX_CL",
              "hasPersonalHealthDeclaration": "",
              "salesChannel": {
                  "code": "WEB1",
                  "description": "WEB AUTOATENCION"
              },
              "salesExecutive": {
                  "id": "WEB6",
                  "identificationDocument": {
                      "type": "SEGUROS FALABELLA CORREDORES, SEG. FALABELLA CORREDORES-Intermediación",
                      "number": "1"
                  }
              },
              "broker": {
                  "identificationDocument": {
                      "type": "Cedula de Identidad",
                      "number": "76477116-8"
                  },
                  "id": "WEB6",
                  "name": "SEGUROS FALABELLA CORREDORES, SEG. FALABELLA CORREDORES-Intermediación"
              },
              "payment": {
                "method": {
                  "id": "26",
                  "idDescription": "CMR PUNTOS",
                  "accountNumber": "2913",
                  "expirationDate": "Thu Mar 31 2022 01:00:00 GMT-0300 (Chile Summer Time)",
                  "type": "CMR PUNTOS",
                  "bank": {
                      "bankId": "1",
                      "name": "Banco de Chile / Banco Edwards"
                  }
              },
              "plan": {
                  "value": "1",
                  "description": "ONE_SHOT"
              },
              "day": "5"
            },
              "status": {
                  "id": "",
                  "description": ""
              },
              "premium": {
                  "amounts": [
                      {
                          "amount": "5.02000000000",
                          "currency": {
                              "code": "03",
                              "description": "DOLAR"
                          }
                      },
                      {
                        "amount": "5.02000000000",
                        "currency": {
                            "code": "03",
                            "description": "DOLAR"
                        }
                    }
                  ],
                  "installments": [
                      {
                          "amount": "0.41830000000",
                          "currency": {
                              "code": "03",
                              "description": "DOLAR"
                          }
                      },
                      {
                        "amount": "5.02000000000",
                        "currency": {
                            "code": "03",
                            "description": "DOLAR"
                        }
                    }
                  ],
                  "paymentFrecuency": "12"
              },
              "product": {
                  "id": "IN-CL-211-02006-VCFNAP-A01",
                  "productType": "02006",
                  "productSubtype": "VCFNAP",
                  "description": "SEGURO DE VIDA FULL PROTECCIÓN",
                  "line": "211",
                  "plan": "A01",
                  "company": {
                      "identificationDocument": {
                          "type": "Cedula de Identidad",
                          "number": "76477116-8",
                          "validator": "8"
                      },
                      "tradeName": "CF SEGUROS DE VIDA S.A",
                      "businessName": "CF SEGUROS DE VIDA S.A"
                  },
                  "name": "SEGURO DE VIDA FULL PROTECCIÓN",
                  "isLiabilityCarInsurance": false
              },
              "validity": {
                  "from": "6/21/2022 12:00:00 AM",
                  "to": "6/22/2023 12:00:00 AM"
              },
              "contractCoverages": [
                  {
                      "id": "A01",
                      "name": "PLAN 1",
                      "description": "PLAN 1",
                      "value": "5.0200",
                      "descriptionValue": "DOLAR"
                  },
                  {
                      "id": "116",
                      "name": "MUERTE POR ENFERMEDAD",
                      "description": "MUERTE POR ENFERMEDAD",
                      "value": "0.0000",
                      "descriptionValue": "DOLAR"
                  },
                  {
                      "id": "117",
                      "name": "MUERTE POR ACCIDENTE",
                      "description": "MUERTE POR ACCIDENTE",
                      "value": "0.0000",
                      "descriptionValue": "DOLAR"
                  },
                  {
                      "id": "114",
                      "name": "INVALIDEZ 2/3 POR ENFERMEDAD O ACCIDENTE",
                      "description": "INVALIDEZ 2/3 POR ENFERMEDAD O ACCIDENTE",
                      "value": "0.0000",
                      "descriptionValue": "DOLAR"
                  },
                  {
                      "id": "02A",
                      "name": "Consulta Médica Online Mediclic",
                      "description": "Consulta Médica Online Mediclic",
                      "value": "0.0000",
                      "descriptionValue": "DOLAR"
                  },
                  {
                      "id": "01A",
                      "name": "Descuento en Farmacias Ahumada",
                      "description": "Descuento en Farmacias Ahumada",
                      "value": "0.0000",
                      "descriptionValue": "DOLAR"
                  }
              ],
              "insuredSubject": {
                  "secondaryId": "",
                  "type": {
                      "code": "6"
                  }
              },
              "insured": {
                  "identificationDocument": {
                      "type": "Cedula de Identidad",
                      "number": "18069703-9",
                      "validator": "9"
                  },
                  "generalPartyInfo": {
                      "address": {
                          "streetName": "LOS CEDROS  618  SAN MARCOS",
                          "streetNumber": "618",
                          "area": {
                              "level1": {
                                  "code": "618"
                              },
                              "level2": {
                                  "name": "BIOBÍO",
                                  "code": "8"
                              },
                              "level3": {
                                  "name": "CIUDAD DESCONOCIDA-MIGRACION",
                                  "code": "99999"
                              },
                              "level4": {
                                  "name": "4260000",
                                  "code": "4260000"
                              }
                          },
                          "apartmentNumber": "",
                          "apartmentFloor": ""
                      },
                      "preferredContact": {
                          "phone": "+56957517706",
                          "email": "ANDRADESDIAZ.JC@GMAIL.COM",
                          "cellPhone": "+56957517706"
                      },
                      "names": "JUAN CARLOS RENE",
                      "paternal": "ANDRADES",
                      "maternal": "DIAZ"
                  },
                  "genderCode": "M",
                  "birthdate": "1992-09-11T00:00:00",
                  "nationality": "Chile"
              },
              "proposalHolder": {
                  "identificationDocument": {
                      "type": "Cedula de Identidad",
                      "number": "18069703-9",
                      "validator": "9"
                  },
                  "generalPartyInfo": {
                      "address": {
                          "streetName": "LOS CEDROS  618  SAN MARCOS",
                          "streetNumber": "618",
                          "area": {
                              "level1": {
                                  "name": "Chile",
                                  "code": "618"
                              },
                              "level2": {
                                  "name": "BIOBÍO",
                                  "code": "8"
                              },
                              "level3": {
                                  "name": "CIUDAD DESCONOCIDA-MIGRACION",
                                  "code": "99999"
                              },
                              "level4": {
                                  "name": "4260000",
                                  "code": "4260000"
                              }
                          },
                          "apartmentNumber": "",
                          "apartmentFloor": ""
                      },
                      "preferredContact": {
                          "phone": "+56957517706",
                          "email": "ANDRADESDIAZ.JC@GMAIL.COM",
                          "cellPhone": "+56957517706"
                      },
                      "names": "JUAN CARLOS RENE",
                      "paternal": "ANDRADES",
                      "maternal": "DIAZ"
                  },
                  "genderCode": "M",
                  "birthdate": "1992-09-11T00:00:00",
                  "nationality": "Chile"
              },
              "beneficiaries": [
                  {
                      "identificationDocument": {
                          "type": "Cedula de Identidad",
                          "number": "18069703-9",
                          "validator": "9"
                      },
                      "generalPartyInfo": {
                          "address": {
                              "streetName": "LOS CEDROS  618  SAN MARCOS",
                              "streetNumber": "618",
                              "area": {
                                  "level1": {
                                      "name": "Chile",
                                      "code": "618"
                                  },
                                  "level2": {
                                      "name": "BIOBÍO",
                                      "code": "8"
                                  },
                                  "level3": {
                                      "name": "CIUDAD DESCONOCIDA-MIGRACION",
                                      "code": "99999"
                                  },
                                  "level4": {
                                      "name": "4260000",
                                      "code": "4260000"
                                  }
                              },
                              "apartmentNumber": "",
                              "apartmentFloor": ""
                          },
                          "preferredContact": {
                              "phone": "+56957517706",
                              "email": "ANDRADESDIAZ.JC@GMAIL.COM",
                              "cellPhone": "+56957517706"
                          },
                          "names": "JUAN CARLOS RENE",
                          "paternal": "ANDRADES",
                          "maternal": "DIAZ"
                      },
                      "genderCode": "M",
                      "birthdate": "1992-09-11T00:00:00",
                      "nationality": "Chile"
                  }
              ],
              "renewable": true
            },
          }
        },
        "Errores": [],
        "Warnings": [],
        "IsOk": true,
        "ErroresConcatenados": "",
        "WarningsConcatenados": ""
      }
    );
       
    let responseMockBodyLogin ={
      "context": {
          "codOrganization": "SMARTIX",
          "codSistema": "FALABELLA",
          "codNegocio": "FALABELLA",
          "usuario": "ext_keiacovantuono@falabella.cl",
      "token": "dc55513e31e037e42d6a31b36c05b63103452e674e62b5d1cd9cbc836da2b994"	

      },
      "request": {
          "apiKey": "d149b9900d94b01cada738d34a7c05016d125d7936ebc1dc923c005de618341e",
          "comando": "Login",
          "origenTransaccion": "B2C",
          "formulario": [
              {
                  "codigo": "USR_USERNAME",
                  "valor": "ext_keiacovantuono@falabella.cl"
              },
              {
                  "codigo": "USR_PASSWORD",
                  "valor": "Fiorella*126"
              },
              {
                  "codigo": "USR_APIKEY",
                  "valor": "d149b9900d94b01cada738d34a7c05016d125d7936ebc1dc923c005de618341e"
              }
          ]
      }
    }
    const response = await GetServiceSmartix.getService(responseMockBodyLogin,3)
    
    expect(response).toEqual(response)
  })

  it('Should consumer an getSmatixPolicy detail CustomValidationPayment type 35',async (): Promise<void> => {

    ServiceConsumer.post = jest.fn().mockClear()
    
    ServiceConsumer.post = jest.fn().mockReturnValue(
      {
        "Result": {
          "ProviderResponse": {
            "proposals": {
              "Id": "1488",
              "CodReferido" : "12345",
              "date": "6/16/2022 12:00:00 AM",
              "sourceSystem": "SMARTIX_CL",
              "hasPersonalHealthDeclaration": "",
              "salesChannel": {
                  "code": "WEB1",
                  "description": "WEB AUTOATENCION"
              },
              "salesExecutive": {
                  "id": "WEB6",
                  "identificationDocument": {
                      "type": "SEGUROS FALABELLA CORREDORES, SEG. FALABELLA CORREDORES-Intermediación",
                      "number": "1"
                  }
              },
              "broker": {
                  "identificationDocument": {
                      "type": "Cedula de Identidad",
                      "number": "76477116-8"
                  },
                  "id": "WEB6",
                  "name": "SEGUROS FALABELLA CORREDORES, SEG. FALABELLA CORREDORES-Intermediación"
              },
              "payment": {
                "method": {
                  "id": "35",
                  "idDescription": "CMR PUNTOS",
                  "accountNumber": "2913",
                  "expirationDate": "Thu Mar 31 2022 01:00:00 GMT-0300 (Chile Summer Time)",
                  "type": "CMR PUNTOS",
                  "bank": {
                      "bankId": "1",
                      "name": "Banco de Chile / Banco Edwards"
                  }
              },
              "plan": {
                  "value": "1",
                  "description": "ONE_SHOT"
              },
              "day": "5"
            },
              "status": {
                  "id": "",
                  "description": ""
              },
              "premium": {
                  "amounts": [
                      {
                          "amount": "5.02000000000",
                          "currency": {
                              "code": "03",
                              "description": "DOLAR"
                          }
                      },
                      {
                        "amount": "5.02000000000",
                        "currency": {
                            "code": "03",
                            "description": "DOLAR"
                        }
                    }
                  ],
                  "installments": [
                      {
                          "amount": "0.41830000000",
                          "currency": {
                              "code": "03",
                              "description": "DOLAR"
                          }
                      },
                      {
                        "amount": "5.02000000000",
                        "currency": {
                            "code": "03",
                            "description": "DOLAR"
                        }
                    }
                  ],
                  "paymentFrecuency": "12"
              },
              "product": {
                  "id": "IN-CL-211-02006-VCFNAP-A01",
                  "productType": "02006",
                  "productSubtype": "VCFNAP",
                  "description": "SEGURO DE VIDA FULL PROTECCIÓN",
                  "line": "211",
                  "plan": "A01",
                  "company": {
                      "identificationDocument": {
                          "type": "Cedula de Identidad",
                          "number": "76477116-8",
                          "validator": "8"
                      },
                      "tradeName": "CF SEGUROS DE VIDA S.A",
                      "businessName": "CF SEGUROS DE VIDA S.A"
                  },
                  "name": "SEGURO DE VIDA FULL PROTECCIÓN",
                  "isLiabilityCarInsurance": false
              },
              "validity": {
                  "from": "6/21/2022 12:00:00 AM",
                  "to": "6/22/2023 12:00:00 AM"
              },
              "contractCoverages": [
                  {
                      "id": "A01",
                      "name": "PLAN 1",
                      "description": "PLAN 1",
                      "value": "5.0200",
                      "descriptionValue": "DOLAR"
                  },
                  {
                      "id": "116",
                      "name": "MUERTE POR ENFERMEDAD",
                      "description": "MUERTE POR ENFERMEDAD",
                      "value": "0.0000",
                      "descriptionValue": "DOLAR"
                  },
                  {
                      "id": "117",
                      "name": "MUERTE POR ACCIDENTE",
                      "description": "MUERTE POR ACCIDENTE",
                      "value": "0.0000",
                      "descriptionValue": "DOLAR"
                  },
                  {
                      "id": "114",
                      "name": "INVALIDEZ 2/3 POR ENFERMEDAD O ACCIDENTE",
                      "description": "INVALIDEZ 2/3 POR ENFERMEDAD O ACCIDENTE",
                      "value": "0.0000",
                      "descriptionValue": "DOLAR"
                  },
                  {
                      "id": "02A",
                      "name": "Consulta Médica Online Mediclic",
                      "description": "Consulta Médica Online Mediclic",
                      "value": "0.0000",
                      "descriptionValue": "DOLAR"
                  },
                  {
                      "id": "01A",
                      "name": "Descuento en Farmacias Ahumada",
                      "description": "Descuento en Farmacias Ahumada",
                      "value": "0.0000",
                      "descriptionValue": "DOLAR"
                  }
              ],
              "insuredSubject": {
                  "secondaryId": "",
                  "type": {
                      "code": "6"
                  }
              },
              "insured": {
                  "identificationDocument": {
                      "type": "Cedula de Identidad",
                      "number": "18069703-9",
                      "validator": "9"
                  },
                  "generalPartyInfo": {
                      "address": {
                          "streetName": "LOS CEDROS  618  SAN MARCOS",
                          "streetNumber": "618",
                          "area": {
                              "level1": {
                                  "code": "618"
                              },
                              "level2": {
                                  "name": "BIOBÍO",
                                  "code": "8"
                              },
                              "level3": {
                                  "name": "CIUDAD DESCONOCIDA-MIGRACION",
                                  "code": "99999"
                              },
                              "level4": {
                                  "name": "4260000",
                                  "code": "4260000"
                              }
                          },
                          "apartmentNumber": "",
                          "apartmentFloor": ""
                      },
                      "preferredContact": {
                          "phone": "+56957517706",
                          "email": "ANDRADESDIAZ.JC@GMAIL.COM",
                          "cellPhone": "+56957517706"
                      },
                      "names": "JUAN CARLOS RENE",
                      "paternal": "ANDRADES",
                      "maternal": "DIAZ"
                  },
                  "genderCode": "M",
                  "birthdate": "1992-09-11T00:00:00",
                  "nationality": "Chile"
              },
              "proposalHolder": {
                  "identificationDocument": {
                      "type": "Cedula de Identidad",
                      "number": "18069703-9",
                      "validator": "9"
                  },
                  "generalPartyInfo": {
                      "address": {
                          "streetName": "LOS CEDROS  618  SAN MARCOS",
                          "streetNumber": "618",
                          "area": {
                              "level1": {
                                  "name": "Chile",
                                  "code": "618"
                              },
                              "level2": {
                                  "name": "BIOBÍO",
                                  "code": "8"
                              },
                              "level3": {
                                  "name": "CIUDAD DESCONOCIDA-MIGRACION",
                                  "code": "99999"
                              },
                              "level4": {
                                  "name": "4260000",
                                  "code": "4260000"
                              }
                          },
                          "apartmentNumber": "",
                          "apartmentFloor": ""
                      },
                      "preferredContact": {
                          "phone": "+56957517706",
                          "email": "ANDRADESDIAZ.JC@GMAIL.COM",
                          "cellPhone": "+56957517706"
                      },
                      "names": "JUAN CARLOS RENE",
                      "paternal": "ANDRADES",
                      "maternal": "DIAZ"
                  },
                  "genderCode": "M",
                  "birthdate": "1992-09-11T00:00:00",
                  "nationality": "Chile"
              },
              "beneficiaries": [
                  {
                      "identificationDocument": {
                          "type": "Cedula de Identidad",
                          "number": "18069703-9",
                          "validator": "9"
                      },
                      "generalPartyInfo": {
                          "address": {
                              "streetName": "LOS CEDROS  618  SAN MARCOS",
                              "streetNumber": "618",
                              "area": {
                                  "level1": {
                                      "name": "Chile",
                                      "code": "618"
                                  },
                                  "level2": {
                                      "name": "BIOBÍO",
                                      "code": "8"
                                  },
                                  "level3": {
                                      "name": "CIUDAD DESCONOCIDA-MIGRACION",
                                      "code": "99999"
                                  },
                                  "level4": {
                                      "name": "4260000",
                                      "code": "4260000"
                                  }
                              },
                              "apartmentNumber": "",
                              "apartmentFloor": ""
                          },
                          "preferredContact": {
                              "phone": "+56957517706",
                              "email": "ANDRADESDIAZ.JC@GMAIL.COM",
                              "cellPhone": "+56957517706"
                          },
                          "names": "JUAN CARLOS RENE",
                          "paternal": "ANDRADES",
                          "maternal": "DIAZ"
                      },
                      "genderCode": "M",
                      "birthdate": "1992-09-11T00:00:00",
                      "nationality": "Chile"
                  }
              ],
              "renewable": true
            },
          }
        },
        "Errores": [],
        "Warnings": [],
        "IsOk": true,
        "ErroresConcatenados": "",
        "WarningsConcatenados": ""
      }
    );
       
    let responseMockBodyLogin ={
      "context": {
          "codOrganization": "SMARTIX",
          "codSistema": "FALABELLA",
          "codNegocio": "FALABELLA",
          "usuario": "ext_keiacovantuono@falabella.cl",
      "token": "dc55513e31e037e42d6a31b36c05b63103452e674e62b5d1cd9cbc836da2b994"	

      },
      "request": {
          "apiKey": "d149b9900d94b01cada738d34a7c05016d125d7936ebc1dc923c005de618341e",
          "comando": "Login",
          "origenTransaccion": "B2C",
          "formulario": [
              {
                  "codigo": "USR_USERNAME",
                  "valor": "ext_keiacovantuono@falabella.cl"
              },
              {
                  "codigo": "USR_PASSWORD",
                  "valor": "Fiorella*126"
              },
              {
                  "codigo": "USR_APIKEY",
                  "valor": "d149b9900d94b01cada738d34a7c05016d125d7936ebc1dc923c005de618341e"
              }
          ]
      }
    }
    const response = await GetServiceSmartix.getService(responseMockBodyLogin,3)
    
    expect(response).toEqual(response)
  })

})
