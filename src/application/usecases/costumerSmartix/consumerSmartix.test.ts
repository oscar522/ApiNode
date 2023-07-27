import { serviceSmartix } from '../../../domain/services/ServiceSmartix/ServiceSmartix';
import { identificationDocument } from '../../../domain/models/identificationDocument'
import { processConsumerSmartix } from './consumerSmartix';

const OLD_ENV = process.env;
process.env.DOCUMENT_TYPE_HOMOLOGATION =  "[{\"value\":\"1\",\"name\":\"RUT\"}]"

const processConsumer = new processConsumerSmartix()
let mockResGetCustomer = {
    "customer": {
        "identificationDocument": {
            "type": "RUT",
            "number": "1111112",
            "validator": "2"
        },
        "generalPartyInfo": {
            "address": {
                "fullAddress": "BOMBERO OSSA123",
                "streetName": "BOMBERO OSSA",
                "streetNumber": "123",
                "postalCode": "1750000",
                "area": {
                    "level1": {
                        "name": "Chile",
                        "code": "cl"
                    },
                    "level2": {
                        "name": "PRIMERA",
                        "code": "1"
                    },
                    "level3": {
                        "name": "ARICA",
                        "code": "1"
                    },
                    "level4": {
                        "name": "SAN NICOLAS",
                        "code": "213"
                    }
                },
                "apartmentNumber": "A",
                "apartmentFloor": "2"
            },
            "preferredContact": {
                "email": "jalvarez@binit.tech",
                "phone": "",
                "cellPhone": ""
            },
            "names": "",
            "paternal": "SEGUROS FALABELLA",
            "maternal": "",
            "commercialAddress": {
                "fullAddress": "BOMBERO OSSA123",
                "streetName": "BOMBERO OSSA",
                "area": {
                    "level1": {
                        "name": "Chile",
                        "code": "cl"
                    },
                    "level2": {
                        "name": "PRIMERA",
                        "code": "1"
                    },
                    "level3": {
                        "name": "ARICA",
                        "code": "1"
                    },
                    "level4": {
                        "name": "SAN NICOLAS",
                        "code": "213"
                    }
                }
            }
        },
        "nationality": "Chile",
        "genderCode": "M",
        "birthdate": ""
    }   
}
let mockResGetCustomerBadRequest = [
  {
      "target": {
          "x_document_type": "RUTt",
          "x_customer_id": "252739564",
          "x_country": "CL",
          "x_commerce": "SEGUROS",
          "x_channel": "Web",
          "flow": "SALUD_GRATIS",
          "x_forwarded_for": "192.168.1.1",
          "branchid": "79",
          "executiveid": "333333",
          "executivedocumenttype": "RUT",
          "x_trace_id": "abc123",
          "x_api_key": "21312"
      },
      "value": "RUTt",
      "property": "x_document_type",
      "children": [],
      "constraints": {
          "isIn": "x_document_type must be one of the following values: RUT"
      }
  }
]

let responseMockLogin ={
    "invocarResult": {
        "userInfo": [
            {
                "codigo": "USR_APITOKEN",
                "valor": "a945e313e541f0d364df4e0a8c8aee01a8b94fca97b6373f2a86f83fb7e3c3a0",
                "variables": null
            },
            {
                "codigo": "USR_APITOKENEXPIRY",
                "valor": "2022-04-13 16:56:03",
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

describe('processConsumerSmartix', () : void => {

  it('Should create an instance ',async (): Promise<void> => {
    expect(processConsumer).toBeInstanceOf(processConsumerSmartix)
  })

  it('Should consumer an getSmatixLogin  ',async (): Promise<void> => {
    serviceSmartix.prototype.getService = jest.fn().mockReturnValue( { data : 'asda' , code : 200})
    const response = await processConsumer.getSmatixLogin()
    expect({ data : 'asda' , code : 200}).toEqual(response)
  })

  it('Should consumer an getSmatixLogin error  ',async (): Promise<void> => {
    jest.fn().mockClear()
    serviceSmartix.prototype.getService = jest.fn().mockReturnValue({
        "invocarResult": {
            "userInfo":null,
            "msgResult": "Command 'Login' executed correctly."
        },
        "errores": [{"msgResult": "Command 'Login' executed correctly."}],
        "erroresConcatenados": "",
        "isOk": true,
        "warnings": [{"msgResult": "Command 'Login' executed correctly."}],
        "warningsConcatenados": "Command 'Login' executed correctly"
    })

    return await processConsumer.getSmatixLogin()
    .catch(err => {
        expect(err).toEqual(JSON.parse("{\"status\":503,\"message\":\"processConsumerSmartix Login \",\"errors\":{\"invocarResult\":{\"userInfo\":null,\"msgResult\":\"Command 'Login' executed correctly.\"},\"errores\":[{\"msgResult\":\"Command 'Login' executed correctly.\"}],\"erroresConcatenados\":\"\",\"isOk\":true,\"warnings\":[{\"msgResult\":\"Command 'Login' executed correctly.\"}],\"warningsConcatenados\":\"Command 'Login' executed correctly\"}}"));
      })
  })

  it('Should consumer an getSmatixService List ',async (): Promise<void> => {
    serviceSmartix.prototype.getService = jest.fn().mockReturnValue(mockResGetCustomer);
    let request = {
                entity: {
                    typeDocument: { value: '1', name: 'RUT' },
                    numberDocument: '211546956'
                }
        }
    const response = await processConsumer.getSmatixService(request, 'babdb54b27ae7771c5a4d56bfdacd5f6f9dd1e5356c7bcd79bccdeccbe8fca0f',  [], "" )
    expect(mockResGetCustomer).toEqual(response)
  })

  it('Should consumer an getSmatixService id policy ',async (): Promise<void> => {
    serviceSmartix.prototype.getService = jest.fn().mockReturnValue(mockResGetCustomer);
    let request = {
                entity: {
                    typeDocument: { value: '1', name: 'RUT' },
                    numberDocument: '211546956'
                }
        }
    const response = await processConsumer.getSmatixService(request, 'babdb54b27ae7771c5a4d56bfdacd5f6f9dd1e5356c7bcd79bccdeccbe8fca0f',  [], "123" )
    expect(mockResGetCustomer).toEqual(response)
  })

  it('Should consumer an instance ',async (): Promise<void> => {
    
    processConsumerSmartix.prototype.getSmatixLogin = jest.fn().mockReturnValue(responseMockLogin);
    processConsumerSmartix.prototype.getSmatixService = jest.fn().mockReturnValue(mockResGetCustomer);

    const identificationDocumentMock = new identificationDocument("RUT", "252739564"); 
    const response = await processConsumer.processSmartixCustomerRequest(identificationDocumentMock,  [], "")
    const responseMock =  mockResGetCustomer
    expect(response).toEqual(responseMock)
  })

  it('Should consumer an instance NOT_FOUND ',async (): Promise<void> => {
    
    processConsumerSmartix.prototype.getSmatixLogin = jest.fn().mockReturnValue(responseMockLogin);
    processConsumerSmartix.prototype.getSmatixService = jest.fn().mockReturnValue({});

    const identificationDocumentMock = new identificationDocument("RUT", "252739564"); 
    const response = await processConsumer.processSmartixCustomerRequest(identificationDocumentMock,  [], "")
    const responseMock = {}
    expect(response).toEqual(responseMock)
  })

  it('Should consumer an instance INTERNAL_SERVER_ERROR ',async (): Promise<void> => {
    
    processConsumerSmartix.prototype.getSmatixLogin = jest.fn().mockReturnValue(responseMockLogin);
    processConsumerSmartix.prototype.getSmatixService = jest.fn().mockReturnValue({
        error : "1" ,

    });

    const identificationDocumentMock = new identificationDocument("RUT", "252739564"); 
    const response = await processConsumer.processSmartixCustomerRequest(identificationDocumentMock, [], "")
    const responseMock = {
        error : "1" ,
    }
    expect(response).toEqual(responseMock)
  })

  it('Should consumer an instance Bad request  ',async (): Promise<void> => {
    processConsumerSmartix.prototype.processSmartixCustomerRequest = jest.fn().mockReturnValue(mockResGetCustomerBadRequest);
    const identificationDocumentMock = new identificationDocument("RUT2", "252739564"); 
    const response = await processConsumer.processSmartixCustomerRequest(identificationDocumentMock,  [], "")
    expect(response).toEqual(mockResGetCustomerBadRequest)
  })

  it('Should consumer an instance Not found  ',async (): Promise<void> => {
    processConsumerSmartix.prototype.processSmartixCustomerRequest = jest.fn().mockReturnValue({});
    const identificationDocumentMock = new identificationDocument("RUT", "211546956"); 
    const response = await processConsumer.processSmartixCustomerRequest(identificationDocumentMock,  [], "")
    expect(response).toEqual({})
  })
  
})
