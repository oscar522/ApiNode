import { ContextSmartix } from './ContextSmartix'

let responseMock : any  = {
    codOrganization: 'SMARTIX',
    codSistema: 'FALABELLA',
    codNegocio: 'FALABELLA',
    usuario: 'ext_keiacovantuono@falabella.cl',
    token: ''
}
describe('ContextSmartix', (): void => {
  const GetContextSmartix = new ContextSmartix()

  it('Should create an instance ', (): void => {
    expect(GetContextSmartix).toBeInstanceOf(ContextSmartix)
  })

  it('Should consume an getContext', async (): Promise<void> => {
   process.env.AVAILABLE_DATA_CODE = "USR_USERNAME|USR_PASSWORD|USR_APIKEY"
   process.env.AVAILABLE_DATA_TYPES_CODE = "ext_keiacovantuono@falabella.cl|Fiorella*126|d149b9900d94b01cada738d34a7c05016d125d7936ebc1dc923c005de618341e"
   responseMock.codProducto = ""
 
    const response = await GetContextSmartix.getContext()
    expect(response).toEqual(responseMock)
  })

  it('Should consume an undefined env', async (): Promise<void> => {
    responseMock.codNegocio = ""
    responseMock.codOrganization = ""
    responseMock.codSistema = ""
    responseMock.usuario = ""
    responseMock.codProducto = ""
    process.env.CODE_ORGANIZATION = ""
    process.env.CODE_SISTEMA = ""
    process.env.CODIGO_NEGOCIO = ""
    process.env.codProducto = ""
    process.env.USUARIO = ""
    const response = await GetContextSmartix.getContext()
    expect(response).toEqual(responseMock)
  })
})
