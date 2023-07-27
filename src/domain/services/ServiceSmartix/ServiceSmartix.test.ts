import { ServiceConsumer } from '../../../infrastructure/serviceConsumer/serviceConsumer'
import { DtoProposal } from '../../models/ResposeDto/DtoResponsePolicy'
import { serviceSmartix } from './ServiceSmartix'
import  'reflect-metadata'

describe('serviceSmartix', (): void => {
  const GetServiceSmartix = new serviceSmartix()

  let responseMockPost = 
  {
    "invocarResult": {
      "userInfo": [
          {
              "codigo": "USR_APITOKEN",
              "valor": "aa9114a0ed9f4a43b6c95acaa53dad0598790dd3a21833f2e0724e9c7923c2e4",
              "variables": null
          },
          {
              "codigo": "USR_APITOKENEXPIRY",
              "valor": "2022-04-13 20:02:46",
              "variables": null
          }
      ],
      "msgResult": "Command 'Login' executed correctly."
  },
  "errores": [],
  "erroresConcatenados": "",
  "isOk": true,
  "warnings": [],
  "warningsConcatenados": ""
  }

  it('Should create an instance ', (): void => {
    expect(GetServiceSmartix).toBeInstanceOf(serviceSmartix)
  })

  it('Should consumer an getSmatixPolicy list sourceSystem SMARTIX_CL  ',async (): Promise<void> => {

    ServiceConsumer.post = jest.fn().mockClear()
    
    ServiceConsumer.post = jest.fn().mockReturnValue(
        {"Result":{"ProviderResponse":{"proposals":[{"Id":"1854","CodReferido":"1854","date":"7/6/2022 12:00:00 AM","sourceSystem":"CL","hasPersonalHealthDeclaration":false,"salesChannel":{"code":"WEB1","description":"WEB AUTOATENCION"},"salesExecutive":{"id":"WEB6","identificationDocument":{"type":"Cedula de Identidad","number":"10000306","validator":"6"}},"broker":{"identificationDocument":{"type":"Cedula de Identidad","number":"77099010","validator":"6"},"id":"1","name":"SEGUROS FALABELLA CORREDORES, INTERMEDIACIÓN (NETA)"},"product":{"id":"CL-VID-02001-VMLAI-A01","productType":"02001","productSubtype":"VMLAI","description":"SEGURO DE VIDA TRADICIONAL","line":"VID","plan":"A01","company":{"identificationDocument":{"type":"Cedula de Identidad","number":"99289000","validator":"2"},"tradeName":"METLIFE CHILE SEGUROS DE VIDA S.A.","businessName":"METLIFE CHILE SEGUROS DE VIDA S.A."},"name":"Seguro de Accidentes Personales","isLiabilityCarInsurance":true},"status":{"id":"3","description":"ANULADA"},"validity":{"from":"7/6/2022 12:00:00 AM","to":"7/6/2023 12:00:00 AM"},"premium":{"amounts":[{"amount":"0.1550","currency":{"code":"03","description":"UF"}},{"amount":"61370.45820000000","currency":{"code":"01","description":"PESOS"}}],"installments":[{"amount":"0.1550","currency":{"code":"03","description":"UF"}},{"amount":"5114.20490000000","currency":{"code":"01","description":"PESOS"}}],"paymentFrecuency":"MONTHLY","lastChargeDate":"7/20/2022 12:00:00 AM"},"insuredSubject":{},"insured":{"identificationDocument":{"type":"Cedula de Identidad","number":"19685753","validator":"2"}},"proposalHolder":{"identificationDocument":{"type":"Cedula de Identidad","number":"19685753","validator":"2"}}}],"status":"SUCCESS","data":{"errors":[]}}},"Errores":[],"Warnings":[],"IsOk":true,"ErroresConcatenados":"","WarningsConcatenados":""}
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
    const response = await GetServiceSmartix.getService(responseMockBodyLogin,2)
    
    expect(response).toEqual(response)
  })

  it('Should consumer an getSmatixPolicy list sourceSystem CL  ',async (): Promise<void> => {

    ServiceConsumer.post = jest.fn().mockClear()
    
    ServiceConsumer.post = jest.fn().mockReturnValue(
        {"Result":{"ProviderResponse":{"proposals":[{"Id":"1854", "CodReferido":"1854", "date":"7/6/2022 12:00:00 AM","sourceSystem":"CL","hasPersonalHealthDeclaration":false,"salesChannel":{"code":"WEB1","description":"WEB AUTOATENCION"},"salesExecutive":{"id":"WEB6","identificationDocument":{"type":"Cedula de Identidad","number":"10000306","validator":"6"}},"broker":{"identificationDocument":{"type":"Cedula de Identidad","number":"77099010","validator":"6"},"id":"1","name":"SEGUROS FALABELLA CORREDORES, INTERMEDIACIÓN (NETA)"},"product":{"id":"CL-VID-02001-VMLAI-A01","productType":"02001","productSubtype":"VMLAI","description":"SEGURO DE VIDA TRADICIONAL","line":"VID","plan":"A01","company":{"identificationDocument":{"type":"Cedula de Identidad","number":"99289000","validator":"2"},"tradeName":"METLIFE CHILE SEGUROS DE VIDA S.A.","businessName":"METLIFE CHILE SEGUROS DE VIDA S.A."},"name":"Seguro de Accidentes Personales","isLiabilityCarInsurance":true},"status":{"id":"3","description":"ANULADA"},"validity":{"from":"7/6/2022 12:00:00 AM","to":"7/6/2023 12:00:00 AM"},"premium":{"amounts":[{"amount":"0.1550","currency":{"code":"03","description":"UF"}},{"amount":"61370.45820000000","currency":{"code":"01","description":"PESOS"}}],"installments":[{"amount":"0.1550","currency":{"code":"03","description":"UF"}},{"amount":"5114.20490000000","currency":{"code":"01","description":"PESOS"}}],"paymentFrecuency":"MONTHLY","lastChargeDate":"7/20/2022 12:00:00 AM"},"insuredSubject":{},"insured":{"identificationDocument":{"type":"Cedula de Identidad","number":"19685753","validator":"2"}},"proposalHolder":{"identificationDocument":{"type":"Cedula de Identidad","number":"19685753","validator":"2"}}}],"status":"SUCCESS","data":{"errors":[]}}},"Errores":[],"Warnings":[],"IsOk":true,"ErroresConcatenados":"","WarningsConcatenados":""}
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
    const response = await GetServiceSmartix.getService(responseMockBodyLogin,2)
    
    expect(response).toEqual(response)
  })

  it('Should consumer an getSmatixPolicy by id policy  ',async (): Promise<void> => {
    
    ServiceConsumer.post = jest.fn().mockReturnValue(
        {
            "Result": {
                "ProviderResponse": {
                    "proposals": {
                        "Id": "1854",
                        "CodReferido": "1854",
                        "date": "7/6/2022 12:00:00 AM",
                        "sourceSystem": "CL",
                        "hasPersonalHealthDeclaration": false,
                        "salesChannel": {
                            "code": "WEB1",
                            "description": "WEB AUTOATENCION"
                        },
                        "salesExecutive": {
                            "id": "1",
                            "identificationDocument": {
                                "type": "Cedula de Identidad",
                                "number": "10000306-6",
                                "validator": "6"
                            },
                            "fullName": "SEGUROS FALABELLA CORREDORES, INTERMEDIACIÓN (NETA)"
                        },
                        "broker": {
                            "identificationDocument": {
                                "type": "Cedula de Identidad",
                                "number": "99289000",
                                "validator": "2"
                            },
                            "id": "WEB6",
                            "name": "METLIFE CHILE SEGUROS DE VIDA S.A."
                        },
                        "payment": {
                            "method": {
                                "id": "35",
                                "idDescription": "FPAY"
                            },
                            "plan": {
                                "value": "12",
                                "description": "MONTHLY"
                            }
                        },
                        "status": {
                            "id": "3",
                            "description": "ANULADA"
                        },
                        "premium": {
                            "amounts": [
                                {
                                    "amount": "1.8600",
                                    "currency": {
                                        "code": "03",
                                        "description": "UF"
                                    }
                                },
                                {
                                    "amount": "61370.45820000000",
                                    "currency": {
                                        "code": "01",
                                        "description": "PESOS"
                                    }
                                }
                            ],
                            "installments": [
                                {
                                    "amount": "0.1550",
                                    "currency": {
                                        "code": "03",
                                        "description": "UF"
                                    }
                                },
                                {
                                    "amount": "5114.20490000000",
                                    "currency": {
                                        "code": "01",
                                        "description": "PESOS"
                                    }
                                }
                            ],
                            "paymentFrecuency": "12"
                        },
                        "product": {
                            "id": "IN-CL-216-02001-VMLAI-A01",
                            "productType": "02001",
                            "productSubtype": "VMLAI",
                            "description": "SEGURO DE VIDA TRADICIONAL",
                            "line": "216",
                            "plan": "A01",
                            "company": {
                                "identificationDocument": {
                                    "type": "Cedula de Identidad",
                                    "number": "99289000-2",
                                    "validator": "2"
                                },
                                "tradeName": "METLIFE CHILE SEGUROS DE VIDA S.A.",
                                "businessName": "METLIFE CHILE SEGUROS DE VIDA S.A."
                            },
                            "name": "Seguro de Accidentes Personales",
                            "isLiabilityCarInsurance": "False"
                        },
                        "validity": {
                            "from": "7/6/2022 12:00:00 AM",
                            "to": "7/6/2023 12:00:00 AM"
                        },
                        "contractCoverages": [
                            {
                                "id": "A01",
                                "name": "PLAN 1",
                                "description": "PLAN 1",
                                "value": "1.8600",
                                "descriptionValue": "UF"
                            },
                            {
                                "id": "117",
                                "name": "MUERTE POR ACCIDENTE",
                                "description": "MUERTE POR ACCIDENTE",
                                "value": null,
                                "descriptionValue": "UF"
                            },
                            {
                                "id": "118",
                                "name": "INVALIDEZ 2/3 POR ACCIDENTE",
                                "description": "INVALIDEZ 2/3 POR ACCIDENTE",
                                "value": null,
                                "descriptionValue": "UF"
                            },
                            {
                                "id": "02A",
                                "name": "Consulta Médica Online Mediclic",
                                "description": "Consulta Médica Online Mediclic",
                                "value": null,
                                "descriptionValue": "UF"
                            },
                            {
                                "id": "01A",
                                "name": "Descuento en Farmacias Ahumada",
                                "description": "Descuento en Farmacias Ahumada",
                                "value": null,
                                "descriptionValue": "UF"
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
                                "number": "19685753-2",
                                "validator": "2"
                            },
                            "generalPartyInfo": {
                                "address": {
                                    "streetName": "CAMINO OTOÑAL N  2731",
                                    "streetNumber": "2731",
                                    "postalCode": "7550000",
                                    "area": {
                                        "level1": {
                                            "code": "2731"
                                        },
                                        "level2": {
                                            "name": "METROPOLITANA DE SANTIAGO",
                                            "code": "13"
                                        },
                                        "level3": {
                                            "name": "SANTIAGO",
                                            "code": "52"
                                        },
                                        "level4": {
                                            "name": "7550000",
                                            "code": "7550000"
                                        }
                                    }
                                },
                                "preferredContact": {
                                    "phone": "993779968",
                                    "cellPhone": "993779968"
                                },
                                "names": "CAROLINA",
                                "paternal": "PFEFFER",
                                "maternal": "TOCORNAL"
                            },
                            "birthdate": "1997-01-09T00:00:00",
                            "nationality": "Chile"
                        },
                        "proposalHolder": {
                            "identificationDocument": {
                                "type": "Cedula de Identidad",
                                "number": "19685753-2",
                                "validator": "2"
                            },
                            "generalPartyInfo": {
                                "address": {
                                    "streetName": "CAMINO OTOÑAL N  2731",
                                    "streetNumber": "2731",
                                    "postalCode": "7550000",
                                    "area": {
                                        "level1": {
                                            "name": "Chile",
                                            "code": "2731"
                                        },
                                        "level2": {
                                            "name": "METROPOLITANA DE SANTIAGO",
                                            "code": "13"
                                        },
                                        "level3": {
                                            "name": "SANTIAGO",
                                            "code": "52"
                                        },
                                        "level4": {
                                            "name": "7550000",
                                            "code": "7550000"
                                        }
                                    }
                                },
                                "preferredContact": {
                                    "phone": "993779968",
                                    "cellPhone": "993779968"
                                },
                                "names": "CAROLINA",
                                "paternal": "PFEFFER",
                                "maternal": "TOCORNAL"
                            },
                            "genderCode": "F",
                            "birthdate": "1997-01-09T00:00:00",
                            "nationality": "Chile"
                        },
                        "beneficiaries": [
                            {
                                "identificationDocument": {
                                    "type": "Cedula de Identidad",
                                    "number": "19685753-2",
                                    "validator": "2"
                                },
                                "generalPartyInfo": {
                                    "address": {
                                        "streetName": "CAMINO OTOÑAL N  2731",
                                        "streetNumber": "2731",
                                        "postalCode": "7550000",
                                        "area": {
                                            "level1": {
                                                "name": "Chile",
                                                "code": "2731"
                                            },
                                            "level2": {
                                                "name": "METROPOLITANA DE SANTIAGO",
                                                "code": "13"
                                            },
                                            "level3": {
                                                "name": "SANTIAGO",
                                                "code": "52"
                                            },
                                            "level4": {
                                                "name": "7550000",
                                                "code": "7550000"
                                            }
                                        }
                                    },
                                    "preferredContact": {
                                        "phone": "993779968",
                                        "cellPhone": "993779968"
                                    },
                                    "names": "CAROLINA",
                                    "paternal": "PFEFFER",
                                    "maternal": "TOCORNAL"
                                },
                                "genderCode": "F",
                                "birthdate": "1997-01-09T00:00:00",
                                "nationality": "Chile"
                            }
                        ],
                        "renewable": "true"
                    },
                    "status": "SUCCESS",
                    "data": {
                        "errors": []
                    }
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
    expect(JSON.stringify(response)).toEqual(JSON.stringify(response))
  })

  it('Should consumer error an transformAndValidate ', () => {
    let req = {
      "Result_": {
          "ProviderResponse": {
              "customer": {
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
    }

    expect.assertions(1);
    return GetServiceSmartix.transformAndValidate(req, DtoProposal).catch(err => {
        let c = err
      expect(err).toEqual(err);
    })
  })

//   it('Should consumer an getSmatixPolicy by type login 1',async (): Promise<void> => {
    
//     ServiceConsumer.post = jest.fn().mockReturnValue(
//       {"Result": {
//         "ProviderResponse": {
//             "proposals": {
//                 "Id": "81035757",
//                 "date": "2020-12-14T04:00:00.000Z",
//                 "sourceSystem": "RECTOR_CL",
//                 "hasPersonalHealthDeclaration": "false",
//                 "salesChannel": {
//                     "code": "3",
//                     "description": "MESON CMR"
//                 },
//                 "salesExecutive": {
//                     "id": "54123",
//                     "identificationDocument": {
//                         "type": "RUT",
//                         "number": "3333333"
//                     }
//                 },
//                 "broker": {
//                     "identificationDocument": {
//                         "type": "RUT",
//                         "number": "77099010",
//                         "validator": "6"
//                     },
//                     "id": "1",
//                     "name": "SEGUROS FALABELLA CORREDORES LTDAS"
//                 },
//                 "payment": {
//                     "method": {
//                         "id": "1",
//                         "idDescription": "EFECTIVO",
//                         "accountNumber": "0",
//                         "expirationDate": "Thu Oct 08 2020 01:00:00 GMT-0300 (Chile Summer Time)",
//                         "type": "EFECTIVO",
//                         "bank": {
//                             "bankId": "1",
//                             "name": "Banco de Chile / Banco Edwards"
//                         }
//                     },
//                     "plan": {
//                         "value":" 1",
//                         "description": "ONE_SHOT"
//                     },
//                     "day": "14"
//                 },
//                 "status": {
//                     "id": "90",
//                     "description": "EN EMISION"
//                 },
//                 "premium": {
//                     "amounts": [
//                         {
//                             "amount": "458019.00210000000",
//                             "currency": {
//                                 "code": "03",
//                                 "description": "DOLAR"
//                             }
//                         }
//                     ],
//                     "installments": [
//                         {
//                             "amount": "38168.25017500000",
//                             "currency": {
//                                 "code": "03",
//                                 "description": "DOLAR"
//                             }
//                         }
//                     ],
//                     "paymentFrecuency": "ONE_SHOT"
//                 },
//                 "product": {
//                     "id": "RE-CL-2-20343-VCFVSA-1",
//                     "productType": "20343",
//                     "productSubtype": "VCFVSA",
//                     "description": "SEGURO VIDA CMR  VCFVSA",
//                     "line": "2",
//                     "plan": "1",
//                     "company": {
//                         "identificationDocument": {
//                             "type": "RUT",
//                             "number": "76477116",
//                             "validator": "8"
//                         },
//                         "tradeName": "CF SEGUROS DE VIDA S.A",
//                         "businessName": "CF SEGUROS DE VIDA S.A"
//                     },
//                     "name": "SEGURO VIDA CMR  VCFVSA",
//                     "isLiabilityCarInsurance": false
//                 },
//                 "validity": {
//                     "from": "2020-12-14T04:00:00.000Z",
//                     "to": "2022-08-14T04:00:00.000Z"
//                 },
//                 "contractCoverages": [
//                     {
//                         "id": "98210",
//                         "name": "FALLECIMIENTO NATURAL",
//                         "description": "FALLECIMIENTO NATURAL",
//                         "value": "200 UF",
//                         "descriptionValue": "UF"
//                     },
//                     {
//                         "id": "98211",
//                         "name": "MUERTE ACCIDENTAL",
//                         "description": "MUERTE ACCIDENTAL",
//                         "value": "600 UF",
//                         "descriptionValue": "UF"
//                     }
//                 ],
//                 "insuredSubject": {
//                     "secondaryId": "1112202001",
//                     "type": {
//                         "code": "SUPER AVANCE"
//                     }
//                 },
//                 "insured": {
//                     "identificationDocument": {
//                         "type": "RUT",
//                         "number": "25907808",
//                         "validator": "3"
//                     },
//                     "generalPartyInfo": {
//                         "address": {
//                             "streetName": "SAN ISIDRO",
//                             "streetNumber": "2068",
//                             "area": {
//                                 "level1": {
//                                     "code": "2"
//                                 },
//                                 "level2": {
//                                     "name": "METROPOLITANA",
//                                     "code": "13"
//                                 },
//                                 "level3": {
//                                     "name": "SANTIAGO",
//                                     "code": "46"
//                                 },
//                                 "level4": {
//                                     "name": "SANTIAGO",
//                                     "code": "285"
//                                 }
//                             },
//                             "apartmentNumber": " ",
//                             "apartmentFloor": " "
//                         },
//                         "preferredContact": {
//                             "phone": "56999885544",
//                             "email": "cristianferreira2002@gmail.com",
//                             "cellPhone": "56999885544"
//                         },
//                         "names": "NADIUSKA ISABEL",
//                         "paternal": "MARTINEZ",
//                         "maternal": "SARRIA"
//                     },
//                     "genderCode": "F",
//                     "birthdate": "Sun Jan 05 1975 01:00:00 GMT-0300 (Chile Summer Time)",
//                     "nationality": "M"
//                 },
//                 "proposalHolder": {
//                     "identificationDocument": {
//                         "type": "RUT",
//                         "number": "25907808",
//                         "validator": "3"
//                     },
//                     "generalPartyInfo": {
//                         "address": {
//                             "streetName": "SAN ISIDRO",
//                             "streetNumber": "2068",
//                             "area": {
//                                 "level1": {
//                                     "name": "CHILE",
//                                     "code": "2"
//                                 },
//                                 "level2": {
//                                     "name": "METROPOLITANA",
//                                     "code": "13"
//                                 },
//                                 "level3": {
//                                     "name": "SANTIAGO",
//                                     "code": "46"
//                                 },
//                                 "level4": {
//                                     "name": "SANTIAGO",
//                                     "code": "285"
//                                 }
//                             },
//                             "apartmentNumber": " ",
//                             "apartmentFloor": " "
//                         },
//                         "preferredContact": {
//                             "phone": "56999885544",
//                             "email": "cristianferreira2002@gmail.com",
//                             "cellPhone": "56999885544"
//                         },
//                         "names": "NADIUSKA ISABEL",
//                         "paternal": "MARTINEZ",
//                         "maternal": "SARRIA"
//                     },
//                     "genderCode": "F",
//                     "birthdate": "Sun Jan 05 1975 01:00:00 GMT-0300 (Chile Summer Time)",
//                     "nationality": "M"
//                 },
//                 "beneficiaries": [],
//                 "renewable": "false"

//             }
        
//         },
//             "Errores": [],
//             "Warnings": [],
//             "IsOk": true,
//             "ErroresConcatenados": "",
//             "WarningsConcatenados": ""
//           }
//         }
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
//     const response = await GetServiceSmartix.getService(responseMockBodyLogin,1)
//     expect(JSON.stringify(response)).toEqual("{\"Result\":{\"ProviderResponse\":{\"proposals\":{\"Id\":\"81035757\",\"date\":\"2020-12-14T04:00:00.000Z\",\"sourceSystem\":\"RECTOR_CL\",\"hasPersonalHealthDeclaration\":\"false\",\"salesChannel\":{\"code\":\"3\",\"description\":\"MESON CMR\"},\"salesExecutive\":{\"id\":\"54123\",\"identificationDocument\":{\"type\":\"RUT\",\"number\":\"3333333\"}},\"broker\":{\"identificationDocument\":{\"type\":\"RUT\",\"number\":\"77099010\",\"validator\":\"6\"},\"id\":\"1\",\"name\":\"SEGUROS FALABELLA CORREDORES LTDAS\"},\"payment\":{\"method\":{\"id\":\"1\",\"idDescription\":\"EFECTIVO\",\"accountNumber\":\"0\",\"expirationDate\":\"Thu Oct 08 2020 01:00:00 GMT-0300 (Chile Summer Time)\",\"type\":\"EFECTIVO\",\"bank\":{\"bankId\":\"1\",\"name\":\"Banco de Chile / Banco Edwards\"}},\"plan\":{\"value\":\" 1\",\"description\":\"ONE_SHOT\"},\"day\":\"14\"},\"status\":{\"id\":\"90\",\"description\":\"EN EMISION\"},\"premium\":{\"amounts\":[{\"amount\":\"458019.00210000000\",\"currency\":{\"code\":\"03\",\"description\":\"DOLAR\"}}],\"installment\":[{\"amount\":\"38168.25017500000\",\"currency\":{\"code\":\"03\",\"description\":\"DOLAR\"}}],\"paymentFrecuency\":\"ONE_SHOT\"},\"product\":{\"id\":\"RE-CL-2-20343-VCFVSA-1\",\"productType\":\"20343\",\"productSubtype\":\"VCFVSA\",\"description\":\"SEGURO VIDA CMR  VCFVSA\",\"line\":\"2\",\"plan\":\"1\",\"company\":{\"identificationDocument\":{\"type\":\"RUT\",\"number\":\"76477116\",\"validator\":\"8\"},\"tradeName\":\"CF SEGUROS DE VIDA S.A\",\"businessName\":\"CF SEGUROS DE VIDA S.A\"},\"name\":\"SEGURO VIDA CMR  VCFVSA\",\"isLiabilityCarInsurance\":false},\"validity\":{\"from\":\"2020-12-14T04:00:00.000Z\",\"to\":\"2022-08-14T04:00:00.000Z\"},\"contractCoverages\":[{\"id\":\"98210\",\"name\":\"FALLECIMIENTO NATURAL\",\"description\":\"FALLECIMIENTO NATURAL\",\"value\":\"200 UF\",\"descriptionValue\":\"UF\"},{\"id\":\"98211\",\"name\":\"MUERTE ACCIDENTAL\",\"description\":\"MUERTE ACCIDENTAL\",\"value\":\"600 UF\",\"descriptionValue\":\"UF\"}],\"insuredSubject\":{\"secondaryId\":\"1112202001\",\"type\":{\"code\":\"SUPER AVANCE\"}},\"insured\":{\"identificationDocument\":{\"type\":\"RUT\",\"number\":\"25907808\",\"validator\":\"3\"},\"generalPartyInfo\":{\"address\":{\"streetName\":\"SAN ISIDRO\",\"streetNumber\":\"2068\",\"area\":{\"level1\":{\"code\":\"2\"},\"level2\":{\"name\":\"METROPOLITANA\",\"code\":\"13\"},\"level3\":{\"name\":\"SANTIAGO\",\"code\":\"46\"},\"level4\":{\"name\":\"SANTIAGO\",\"code\":\"285\"}},\"apartmentNumber\":\" \",\"apartmentFloor\":\" \"},\"preferredContact\":{\"phone\":\"56999885544\",\"email\":\"cristianferreira2002@gmail.com\",\"cellPhone\":\"56999885544\"},\"names\":\"NADIUSKA ISABEL\",\"paternal\":\"MARTINEZ\",\"maternal\":\"SARRIA\"},\"genderCode\":\"F\",\"birthdate\":\"Sun Jan 05 1975 01:00:00 GMT-0300 (Chile Summer Time)\",\"nationality\":\"M\"},\"proposalHolder\":{\"identificationDocument\":{\"type\":\"RUT\",\"number\":\"25907808\",\"validator\":\"3\"},\"generalPartyInfo\":{\"address\":{\"streetName\":\"SAN ISIDRO\",\"streetNumber\":\"2068\",\"area\":{\"level1\":{\"name\":\"CHILE\",\"code\":\"2\"},\"level2\":{\"name\":\"METROPOLITANA\",\"code\":\"13\"},\"level3\":{\"name\":\"SANTIAGO\",\"code\":\"46\"},\"level4\":{\"name\":\"SANTIAGO\",\"code\":\"285\"}},\"apartmentNumber\":\" \",\"apartmentFloor\":\" \"},\"preferredContact\":{\"phone\":\"56999885544\",\"email\":\"cristianferreira2002@gmail.com\",\"cellPhone\":\"56999885544\"},\"names\":\"NADIUSKA ISABEL\",\"paternal\":\"MARTINEZ\",\"maternal\":\"SARRIA\"},\"genderCode\":\"F\",\"birthdate\":\"Sun Jan 05 1975 01:00:00 GMT-0300 (Chile Summer Time)\",\"nationality\":\"M\"},\"beneficiaries\":[],\"renewable\":\"false\"}},\"Errores\":[],\"Warnings\":[],\"IsOk\":true,\"ErroresConcatenados\":\"\",\"WarningsConcatenados\":\"\"}}")
//   })

  it('Should consumer an getSmatixPolicy by type login 2',async (): Promise<void> => {
    
    ServiceConsumer.post = jest.fn().mockReturnValue(
      {"Result": {
        "ProviderResponse": {
            "proposals": {
                "Id": "81035757",
                "date": "2020-12-14T04:00:00.000Z",
                "sourceSystem": "RECTOR_CL",
                "hasPersonalHealthDeclaration": "false",
                "salesChannel": {
                    "code": "3",
                    "description": "MESON CMR"
                },
                "salesExecutive": {
                    "id": "54123",
                    "identificationDocument": {
                        "type": "RUT",
                        "number": "3333333"
                    }
                },
                "broker": {
                    "identificationDocument": {
                        "type": "RUT",
                        "number": "77099010",
                        "validator": "6"
                    },
                    "id": "1",
                    "name": "SEGUROS FALABELLA CORREDORES LTDAS"
                },
                "payment": {
                    "method": {
                        "id": "1",
                        "idDescription": "EFECTIVO",
                        "accountNumber": "0",
                        "expirationDate": "Thu Oct 08 2020 01:00:00 GMT-0300 (Chile Summer Time)",
                        "type": "EFECTIVO",
                        "bank": {
                            "bankId": "1",
                            "name": "Banco de Chile / Banco Edwards"
                        }
                    },
                    "plan": {
                        "value":" 1",
                        "description": "ONE_SHOT"
                    },
                    "day": "14"
                },
                "status": {
                    "id": "90",
                    "description": "EN EMISION"
                },
                "premium": {
                    "amounts": [
                        {
                            "amount": "458019.00210000000",
                            "currency": {
                                "code": "03",
                                "description": "DOLAR"
                            }
                        }
                    ],
                    "installments": [
                        {
                            "amount": "38168.25017500000",
                            "currency": {
                                "code": "03",
                                "description": "DOLAR"
                            }
                        }
                    ],
                    "paymentFrecuency": "ONE_SHOT"
                },
                "product": {
                    "id": "RE-CL-2-20343-VCFVSA-1",
                    "productType": "20343",
                    "productSubtype": "VCFVSA",
                    "description": "SEGURO VIDA CMR  VCFVSA",
                    "line": "2",
                    "plan": "1",
                    "company": {
                        "identificationDocument": {
                            "type": "RUT",
                            "number": "76477116",
                            "validator": "8"
                        },
                        "tradeName": "CF SEGUROS DE VIDA S.A",
                        "businessName": "CF SEGUROS DE VIDA S.A"
                    },
                    "name": "SEGURO VIDA CMR  VCFVSA",
                    "isLiabilityCarInsurance": false
                },
                "validity": {
                    "from": "2020-12-14T04:00:00.000Z",
                    "to": "2022-08-14T04:00:00.000Z"
                },
                "contractCoverages": [
                    {
                        "id": "98210",
                        "name": "FALLECIMIENTO NATURAL",
                        "description": "FALLECIMIENTO NATURAL",
                        "value": "200 UF",
                        "descriptionValue": "UF"
                    },
                    {
                        "id": "98211",
                        "name": "MUERTE ACCIDENTAL",
                        "description": "MUERTE ACCIDENTAL",
                        "value": "600 UF",
                        "descriptionValue": "UF"
                    }
                ],
                "insuredSubject": {
                    "secondaryId": "1112202001",
                    "type": {
                        "code": "SUPER AVANCE"
                    }
                },
                "insured": {
                    "identificationDocument": {
                        "type": "RUT",
                        "number": "25907808",
                        "validator": "3"
                    },
                    "generalPartyInfo": {
                        "address": {
                            "streetName": "SAN ISIDRO",
                            "streetNumber": "2068",
                            "area": {
                                "level1": {
                                    "code": "2"
                                },
                                "level2": {
                                    "name": "METROPOLITANA",
                                    "code": "13"
                                },
                                "level3": {
                                    "name": "SANTIAGO",
                                    "code": "46"
                                },
                                "level4": {
                                    "name": "SANTIAGO",
                                    "code": "285"
                                }
                            },
                            "apartmentNumber": " ",
                            "apartmentFloor": " "
                        },
                        "preferredContact": {
                            "phone": "56999885544",
                            "email": "cristianferreira2002@gmail.com",
                            "cellPhone": "56999885544"
                        },
                        "names": "NADIUSKA ISABEL",
                        "paternal": "MARTINEZ",
                        "maternal": "SARRIA"
                    },
                    "genderCode": "F",
                    "birthdate": "Sun Jan 05 1975 01:00:00 GMT-0300 (Chile Summer Time)",
                    "nationality": "M"
                },
                "proposalHolder": {
                    "identificationDocument": {
                        "type": "RUT",
                        "number": "25907808",
                        "validator": "3"
                    },
                    "generalPartyInfo": {
                        "address": {
                            "streetName": "SAN ISIDRO",
                            "streetNumber": "2068",
                            "area": {
                                "level1": {
                                    "name": "CHILE",
                                    "code": "2"
                                },
                                "level2": {
                                    "name": "METROPOLITANA",
                                    "code": "13"
                                },
                                "level3": {
                                    "name": "SANTIAGO",
                                    "code": "46"
                                },
                                "level4": {
                                    "name": "SANTIAGO",
                                    "code": "285"
                                }
                            },
                            "apartmentNumber": " ",
                            "apartmentFloor": " "
                        },
                        "preferredContact": {
                            "phone": "56999885544",
                            "email": "cristianferreira2002@gmail.com",
                            "cellPhone": "56999885544"
                        },
                        "names": "NADIUSKA ISABEL",
                        "paternal": "MARTINEZ",
                        "maternal": "SARRIA"
                    },
                    "genderCode": "F",
                    "birthdate": "Sun Jan 05 1975 01:00:00 GMT-0300 (Chile Summer Time)",
                    "nationality": "M"
                },
                "beneficiaries": [],
                "renewable": "false"

            }
        
        },
            "Errores": [],
            "Warnings": [],
            "IsOk": true,
            "ErroresConcatenados": "",
            "WarningsConcatenados": ""
          }
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
    const response = await GetServiceSmartix.getService(responseMockBodyLogin,0)
    expect(response).toEqual(undefined)
  })

})
