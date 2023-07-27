import { identificationDocument } from '../identificationDocument'
import { BodySmartixLogin } from './BodySmartixLogin'

let responseMock = {
  context: {
    codOrganization: 'SMARTIX',
    codSistema: 'FALABELLA',
    codNegocio: 'FALABELLA',
    codProducto: "",
    usuario: 'ext_keiacovantuono@falabella.cl',
    token: ''
  },
  request: {
    apiKey: 'd149b9900d94b01cada738d34a7c05016d125d7936ebc1dc923c005de618341e',
    comando: 'Login',
    origenTransaccion: 'B2C',
    formulario: [ 
      {
        codigo: "USR_USERNAME",
        valor: "ext_keiacovantuono@falabella.cl",
      },
      {
        codigo: "USR_PASSWORD",
        valor: "Fiorella*126",
      },
      {
        codigo: "USR_APIKEY",
        valor: "d149b9900d94b01cada738d34a7c05016d125d7936ebc1dc923c005de618341e",
      }
    ]
  }
}
describe('BodySmartixLogin', (): void => {
  const GetBodySmartixLogin = new BodySmartixLogin()

  it('Should create an instance ', (): void => {
    expect(GetBodySmartixLogin).toBeInstanceOf(BodySmartixLogin)
  })

  it('Should consume an instance', async (): Promise<void> => {
    process.env.AVAILABLE_DATA_CODE = "USR_USERNAME|USR_PASSWORD|USR_APIKEY"
    process.env.AVAILABLE_DATA_TYPES_CODE = "ext_keiacovantuono@falabella.cl|Fiorella*126|d149b9900d94b01cada738d34a7c05016d125d7936ebc1dc923c005de618341e"
    
    const response = await GetBodySmartixLogin.getBody()
    expect(response).toEqual(responseMock)
  })

  it('Should consume an undefined env', async (): Promise<void> => {
    responseMock.request.apiKey=""
    responseMock.request.comando=""
    responseMock.request.origenTransaccion=""

    responseMock.request.formulario=[ 
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
    process.env.APIKEY = ""
    process.env.COMANDO = ""
    process.env.ORIGEN_TRANSACCION = ""
    process.env.AVAILABLE_DATA_CODE = ""
    process.env.AVAILABLE_DATA_TYPES_CODE = ""
    const response = await GetBodySmartixLogin.getBody()
    expect(response).toEqual(responseMock)
  })

  it('Should consume an undefined AVAILABLE_DATA_CODE', async (): Promise<void> => {
    responseMock.request.apiKey=""
    responseMock.request.comando=""
    responseMock.request.origenTransaccion=""
    responseMock.request.formulario=[
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
    process.env.APIKEY = ""
    process.env.COMANDO = ""
    process.env.ORIGEN_TRANSACCION = ""
    process.env.AVAILABLE_DATA_CODE = undefined
    process.env.AVAILABLE_DATA_TYPES_CODE = undefined
    const response = await GetBodySmartixLogin.getBody()
    expect(response).toEqual(responseMock)
  })
//   it('Should consume an instance INTEGRATION_COMMAND undefined', async (): Promise<void> => {
//     process.env.INTEGRATION_COMMAND = ""
//     responseMock.integrationCommand = ""
//     const identificationDocumentMock = new identificationDocument("RUT", "252739564"); 
//     const response = await GetBodySmartix.getBody(identificationDocumentMock,"aasdasdasdad")
//     expect(response).toEqual(responseMock)
//   })
// 
})
