
import { processConsumerSmartix } from "../../../application/usecases/costumerSmartix/consumerSmartix";
import { JsonController, Res, Authorized, Get, Req, Param, BadRequestError, QueryParams, UseBefore} from 'routing-controllers';
import { identificationDocument } from "../../../domain/models/identificationDocument";
import { CronometerTime } from "../../../application/utils/CronometerTime/CronometerTime";
import { Logger } from "winston";
// import { AuthenticationMiddleware } from "@sf-libs/routing-controllers-middlewares/dist/authentication/authentication.middleware";
import { dataValidation, SmartixGetValidation } from "../../middlewares/SmartixGetValidation/SmartixGetValidation";

@JsonController()
export class smartixGetPolicyController {
  // @UseBefore(AuthenticationMiddleware)
  @Get('/v1/customers/:customerIdHash/proposals')
  async  getPolicy( @Req() request : any, @Res() response: any , @Param("customerIdHash") customerIdHash: string) { // implementar clase customerIdHash
    const logger = new Logger()

    const Cronometer_ = new CronometerTime()
    Cronometer_.setInitTime(new Date());
    logger.info(`Making request to PolicySmartixRoute:` )
    
    // validaciones de headers hash y query params
    const forValidation : dataValidation =  {
      customerIdHash : customerIdHash,
      response : response,
      request : request ,
      Cronometer_ : Cronometer_ ,
    }
    const Validation = new SmartixGetValidation(forValidation)
    try {
      const getMetadata = await Validation.GetMetadataValidation() // validaciones de headers
      // 
      const processConsumer = new processConsumerSmartix()
      const result = await processConsumer.processSmartixCustomerRequest(
        new identificationDocument( getMetadata.metadata.x_document_type , getMetadata.metadata.x_customer_id  ),
        getMetadata.queryParams, ''
      )

      const time = Cronometer_.getInteval(new Date())
      logger.info(`Making request to PolicySmartixRoute => Interval Time : ${time} ms`);
      return response.status(result.code).send(result.data);
    } catch (error) {
      if (error.status)  return response.status(error.status).send(error);
      return response.status(500).send(error);
    }
  
  }
  
}




