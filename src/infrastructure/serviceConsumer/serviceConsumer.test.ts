import { ServiceConsumer } from './serviceConsumer'
import { AxiosHttpService } from "@sf-libs/axios-http-service";
import { envVars } from '../../application/utils/env-vars.config/env-vars.config';

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
    "WarningsConcatenados": "",
  } ) ,
  "status" : 200 ,
}

describe('Service Consumer', (): void => {
  const GetServiceConsumer = new ServiceConsumer()

  it('Should create an instance ', (): void => {
    expect(GetServiceConsumer).toBeInstanceOf(ServiceConsumer)
  })

  it('should consume a service ', async () => {
    AxiosHttpService.prototype.post =  jest.fn().mockReturnValue(mockCustomer);
    const data = {
      url : "https://as-apiwsproxy-dev-r9l2.ase-smartixsecondary-dev-cma8.p.azurewebsites.net/api/user/login",
      data : { data: {NRODOCUMENTO: "252739564"} },
      config : {
          headers: { "Content-Type" : "application/json" }
      }
    }
    envVars.prototype.get =  jest.fn().mockReturnValue('dev');
    const response = await ServiceConsumer.post(data)
    expect(response).toEqual(mockCustomer.data)
  })

  it('should consume a service var env undefined', async () => {
    AxiosHttpService.prototype.post =  jest.fn().mockReturnValue(mockCustomer);
    const data = {
      url : "https://as-apiwsproxy-dev-r9l2.ase-smartixsecondary-dev-cma8.p.azurewebsites.net/api/user/login",
      data : { data: {NRODOCUMENTO: "252739564"} },
      config : {
          headers: { "Content-Type" : "application/json" }
      }
    }
    envVars.prototype.get =  jest.fn().mockReturnValue(undefined);
    const response = await ServiceConsumer.post(data)
    expect(response).toEqual(mockCustomer.data)
  })

  it('should consume a service error', async () => {
    AxiosHttpService.prototype.post =  jest.fn().mockClear()
    const data = {
      url : "",
      data : { data: {NRODOCUMENTO: "252739564"} },
      config : {
          headers: { "Content-Type" : "application/json" },
          //timeout : 1
      }
    }
    envVars.prototype.get =  jest.fn().mockReturnValue('dev');
    const response = async () => { await ServiceConsumer.post(data)}
    expect(response()).rejects.toThrow("Cannot read properties of undefined (reading 'status')");
  })
})
