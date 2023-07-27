import { Equals, IsDefined, IsIn, IsOptional, IsString, validate } from 'class-validator'
import { envVars } from '../../utils/env-vars.config/env-vars.config';

export class MetadataValidation {
  private request
  private metadata = new Metadata();

  constructor(Request : any){
    this.request=Request
  }
  
  async validateMetada(){
  /// Headers 
    
    this.metadata.x_document_type = this.request.headers['x-document-type']
    this.metadata.x_customer_id = this.request.headers['x-customer-id']
    this.metadata.x_country = this.request.headers['x-country']
    this.metadata.x_commerce = this.request.headers['x-commerce']
    this.metadata.x_channel = this.request.headers['x-channel']
    this.metadata.flow = this.request.headers.flow
    this.metadata.x_forwarded_for = this.request.headers['x-forwarded-for']
    this.metadata.branchid = this.request.headers.branchid
    this.metadata.executiveid = this.request.headers.executiveid
    this.metadata.executivedocumenttype = this.request.headers.executivedocumenttype
    this.metadata.x_trace_id = this.request.headers['x-trace-id']
    this.metadata.x_api_key = this.request.headers['x-api-key']

    let returnErrors : any = await validate(this.metadata).then( async errors => {
      // errors is an array of validation errors
        return  errors
    })
   
    return returnErrors
  }

  async getMetadata(){
    return this.metadata
  }

  async ValidQueryParams(){
    const namesQueryParams : [any] =  new envVars().getJSONArray('TYPE_QUERY_PARAMS')
    const keyParamsRequest = Object.keys(this.request.query)
    let notFoundQueryParams : string =  ""
    let QueryParams : any  =  {
      params :[],
      errors : ""
    }
    keyParamsRequest.map(x => {
        const itemQuery = namesQueryParams.find(y => y.name === x)
        if (!itemQuery) {
          notFoundQueryParams = notFoundQueryParams + x + ","
        }else{
          let itemParam : any = {};
          itemParam[x] = this.request.query[x];
          QueryParams.params.push(itemParam)
        }
      }
    )
    //QueryParams.errors = notFoundQueryParams

    return QueryParams
  }


}

class Metadata {
  /// Headers 
  @IsString()
  @IsDefined()
  @IsIn(namesTypeDocument())
  x_document_type : string
  @IsString()
  @IsDefined()
  x_customer_id : string
  @IsString()
  @IsDefined()
  x_country : string
  // @IsString()
  // @IsDefined()
  x_commerce : string
  // @IsString()
  // @IsDefined()
  x_channel : string
  // @IsString()
  // @IsDefined()
  flow: string
  x_forwarded_for : string
  // @IsString()
  // @IsDefined()
  branchid : string
  // @IsString()
  // @IsDefined()
  executiveid : string
  // @IsString()
  // @IsDefined()
  executivedocumenttype : string
  @IsString()
  @IsDefined()
  x_trace_id : string
  x_api_key : string

}

function namesTypeDocument(){

  let names : any  = []
  let namesConcat : [any] =  new envVars().getJSONArray('DOCUMENT_TYPE_HOMOLOGATION')
  namesConcat.map((x : any ) => {
    names.push(x.name)
  });
  return names
}

