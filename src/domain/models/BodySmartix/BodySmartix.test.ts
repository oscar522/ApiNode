import { envVars } from '../../../application/utils/env-vars.config/env-vars.config'
import { identificationDocument } from '../identificationDocument'
import { BodySmartix } from './BodySmartix'


describe('BodySmartix', (): void => {
  const GetBodySmartix = new BodySmartix()

  it('Should create an instance ', (): void => {
    expect(GetBodySmartix).toBeInstanceOf(BodySmartix)
  })

  let queryParams : any = [{STATUSid:"VIGENTE"}]

  it('Should consume an getBody', async (): Promise<void> => {
    let responseMock = {"context":{"codOrganization":"SMARTIX","codSistema":"FALABELLA","codNegocio":"FALABELLA","codProducto":"","usuario":"ext_keiacovantuono@falabella.cl","token":"aasdasdasdad"},"transactionId":null,"IntegrationCommand":"GETPROPOS","data":{"Client":{"CODTIPODOCUMENTOCLIENTE":"6","NRODOCUMENTO":"770990106","PAIS":"CL","STATUSID": "VIGENTE"}}}
    const identificationDocumentMock = new identificationDocument("RUT", "770990106"); 
    const response = GetBodySmartix.getBody(identificationDocumentMock, "aasdasdasdad",queryParams, "")
    let xx = JSON.stringify(response);
    expect(response).toEqual(responseMock)
  })

  it('Should consume an getBody GETPOLIZASDET', async (): Promise<void> => {
   let responseMock = {"context":{"codOrganization":"SMARTIX","codSistema":"FALABELLA","codNegocio":"FALABELLA","codProducto":"","usuario":"ext_keiacovantuono@falabella.cl","token":"aasdasdasdad"},"transactionId":null,"IntegrationCommand":"GETPOLIZASDET","data":{"Poliza":{"POLIZA":"123","TRUE_BY_IDPOLIZA_OR_FALSE_BY_CODIGOREFERIDO": false,"PAIS":"CL" ,"CODREFERIDO": "123", "CUSTOMER_ID": "770990106"}}}
   const identificationDocumentMock = new identificationDocument("DNI", "770990106"); 
   const response = await GetBodySmartix.getBody(identificationDocumentMock,"aasdasdasdad", [], "123")
   let xx = JSON.stringify(response);
   expect(response).toEqual(responseMock)
 })
  
//   it('Should consume an instance INTEGRATION_COMMAND undefined', async (): Promise<void> => {
//     const identificationDocumentMock = new identificationDocument("RUT", "770990106"); 
//     envVars.prototype.getJSONArray = jest.fn().mockReturnValue("{\"type\":\"list\",\"value\":\"\"}, {\"type\":\"detail\",\"value\":\"\"}")
//     const mockResponse = {
//       "context":{
//          "codOrganization":"",
//          "codSistema":"",
//          "codNegocio":"",
//          "codProducto":"",
//          "usuario":"",
//          "token":"aasdasdasdad"
//       },
//       "transactionId":null,
//       "data":{
//          "Client":{
//             "CODTIPODOCUMENTOCLIENTE":"6",
//             "NRODOCUMENTO":"770990106",
//             "PAIS":""
//          },
//          "filters":{
            
//          },
//          "idProporsal":"123"
//       },
//       "IntegrationCommand":""
//    }
//     const response = await GetBodySmartix.getBody(identificationDocumentMock,"aasdasdasdad", {}, "123")
//     let xx = JSON.stringify(response);
//     expect(response).toEqual(mockResponse)
//   })
})
