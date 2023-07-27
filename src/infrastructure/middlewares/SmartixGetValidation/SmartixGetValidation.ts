import { logger } from "@sf-libs/winston-logger"
import { checkHash256 } from "../../../application/utils/checkHash256/utils"
import { http_status_codes } from "../../../application/utils/http-status-code"
import { MetadataValidation } from "../../../application/utils/metadataValidation/metadata.validation"

export class SmartixGetValidation {

    private dataValidation : dataValidation
    constructor(dataValidation : dataValidation){
      this.dataValidation = dataValidation
    }
    async GetMetadataValidation(){
      const metadata = new MetadataValidation(this.dataValidation.request)
      const getValidateMetada  = await metadata.validateMetada()
      const getMetaData = await metadata.getMetadata()
      const metadataQueryParams = await metadata.ValidQueryParams()
      const time = this.dataValidation.Cronometer_.getInteval(new Date())
      
      await this.GetValidateHash(this.dataValidation.customerIdHash, this.dataValidation.response, this.dataValidation.request, this.dataValidation.Cronometer_ ,getMetaData )  // validacion hash headers

      if (getValidateMetada.length > 0) {
  
        logger.error(`Making request to PolicySmartixRoute Error GetMetadataValidation => Interval Time : ${time} ms `, { Request: this.dataValidation.request.headers, Response : {"getValidateMetada": getValidateMetada} });
        
        throw ({status : 400, message : "header not valid" , errors : getValidateMetada })

      } else if (metadataQueryParams.errors != ''){
        
        throw ({status : 400, message : "QueryParams not valid" , errors : metadataQueryParams.errors })

      } else {
  
        return {
          metadata : getMetaData,
          queryParams : metadataQueryParams.params
        }
  
      }
    }
  
    async GetValidateHash( customerIdHash: string, response: any, Request : any, Cronometer_ : any, getMetadata : any ){
      const customerId = getMetadata.x_customer_id
      const token = Request.headers.authorization.replace('Bearer ', '')
  
      const checkHash = new checkHash256(customerId.concat(token), customerIdHash)
      const validateHash = checkHash.checkHash256()
  
      if (!validateHash) {
        const time = Cronometer_.getInteval(new Date())
        logger.error(`Making request to PolicySmartixRoute Error GetValidateHash => Interval Time : ${time} ms `, { Request: Request.headers, Response : {"message": "Bad request"} });
        throw ({status : 400, message : "validate url encryption" , errors : "" })
  
      }else{
        return validateHash
      }
    }
  }
  
  export interface dataValidation {
    customerIdHash : string,
    response : any,
    request : any ,
    Cronometer_ : any ,
  }
  