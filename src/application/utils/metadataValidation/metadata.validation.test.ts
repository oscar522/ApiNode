import { MetadataValidation } from './metadata.validation'

describe('MetadataValidation', (): void => {
  let request : any = {
    headers : {
      "x-document-type":"RUT1",
      "x-customer-id":"252739564",
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
      "authorization": ""
    },
    query:{
      customerRole:'ASEGURADO',
      inssuredSubjectId:'PRUEBA',
      paymentMethod:'PRUEBA2',
      statusId:'EN EMISION'
    }
  }
  const GetMetadataValidation = new MetadataValidation(request)

  it('Should create an instance ', (): void => {
    expect(GetMetadataValidation).toBeInstanceOf(MetadataValidation)
  })
  it('Should consume an instance getMetadata', async (): Promise<void> => {

    let responseMock = 
    {
      "x_document_type":"RUT1",
      "x_customer_id":"252739564",
      "x_country":"CL",
      "x_commerce":"Seguros",
      "x_channel":"Web",
      "flow":"SALUD_GRATIS",
      "x_forwarded_for":"192.168.1.1",
      "branchid":"79",
      "executiveid":"333333",
      "executivedocumenttype":"RUT1",
      "x_trace_id":"abc123",
      "x_api_key":"863265f5-39fe-421c-a66c-7e3e04a07466"
    }
    await GetMetadataValidation.validateMetada()
    const response = await GetMetadataValidation.getMetadata()
    let xx = JSON.stringify(response);
    expect(response).toEqual(responseMock)
  })
  it('Should consume an instance ValidQueryParams', async (): Promise<void> => {
    let responseMock = {
      "params":[
         {
            "customerRole":"ASEGURADO"
         },
         {
            "inssuredSubjectId":"PRUEBA"
         },
         {
            "paymentMethod":"PRUEBA2"
         },
         {
            "statusId":"EN EMISION"
         }
      ],
      "errors":""
    }
    await GetMetadataValidation.validateMetada()
    const response = await GetMetadataValidation.ValidQueryParams()
    expect(response).toEqual(responseMock)
  })

  // it('Should consume an instance ValidQueryParams error', async (): Promise<void> => {

  //   let requestError : any = {
  //     headers : {
  //       "x-document-type":"RUT1",
  //       "x-customer-id":"252739564",
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
  //       "authorization": ""
  //     },
  //     query:{
  //       customerRoled:'ASEGURADO',
  //       inssuredSubjectId:'PRUEBA',
  //       paymentMethod:'PRUEBA2',
  //       statusId:'EN EMISION'
  //     }
  //   }
  //   let responseMock = {"params":[{"inssuredSubjectId":"PRUEBA"},{"paymentMethod":"PRUEBA2"},{"statusId":"EN EMISION"}],"errors":"customerRoled,"}
  //   const GetMetadataValidationError = new MetadataValidation(requestError)
  //   await GetMetadataValidation.validateMetada()
  //   const response = await GetMetadataValidationError.ValidQueryParams()
  //   expect(response).toEqual(responseMock)
  // })
})
