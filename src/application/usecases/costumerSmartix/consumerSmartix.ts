import { serviceSmartix } from '../../../domain/services/ServiceSmartix/ServiceSmartix';
import { BodySmartixLogin } from '../../../domain/models/BodySmartixLogin/BodySmartixLogin';
import { identificationDocument } from '../../../domain/models/identificationDocument';
import { typeService } from '../../../domain/models/enumTypeService';
import { BodySmartix } from '../../../domain/models/BodySmartix/BodySmartix';
import { response } from '../../../domain/models/response';
import { CronometerTime } from '../../utils/CronometerTime/CronometerTime';
import { http_status_codes } from '../../utils/http-status-code';
import { GetSmartixCustomerUseCase } from '../../../domain/usecases/consumerSmartix/smartixCustomer.usecase';
import { envVars } from '../../utils/env-vars.config/env-vars.config';
const logger = require('winston');
export class processConsumerSmartix implements GetSmartixCustomerUseCase {
  private getServiceConsumerSmartix = new serviceSmartix();
  private Cronometer_ = new CronometerTime()

  async processSmartixCustomerRequest(req : identificationDocument, queryParams : any [], idProporsal : string): Promise<response> {
    this.Cronometer_.setInitTime(new Date());
    logger.info(`Making request to processConsumerSmartix Domain/UseCases:` + req )

    const tokenLoginSmartix = await this.getSmatixLogin();
    const responseSmatixService = await this.getSmatixService(req, tokenLoginSmartix.data, queryParams, idProporsal );

    const time = this.Cronometer_.getInteval(new Date())

    logger.info(`Making request to processConsumerSmartix Domain/UseCases: => Interval Time : ${time} ms`);
    return responseSmatixService
  }

  async getSmatixLogin(){  // consume servicio de login Smartix
    this.Cronometer_.setInitTime(new Date());

    // valida token 
    const resultValidation = await this.ValidationTokenGenerate()
    const body = new BodySmartixLogin();
    logger.info(`Making request to processConsumerSmartix Login Domain/UseCases:` )

    const time = this.Cronometer_.getInteval(new Date())

    if (resultValidation.validationResult) {

      const response  = await this.getServiceConsumerSmartix.getService(body.getBody(), 1)

      logger.info(`Making request to processConsumerSmartix Login new Domain/UseCases: => Interval Time : ${time} ms`);
      return response

    } else {

      const response = {
        code : 200,
        data : new envVars().get('tokenLogin'),
      }

      logger.info(`Making request to processConsumerSmartix Login recycler Domain/UseCases: => Interval Time : ${time} ms`);
      return response
    }

  }

  async getSmatixService(req : any, tokenLoginSmartix : string , queryParams : any [], idProporsal : string ){  // consume servicio de Consumer Smartix
    this.Cronometer_.setInitTime(new Date());

    const body = new BodySmartix();
    logger.info(`Making request to processConsumerSmartix Consumer Domain/UseCases:` )
    
    let type : number  = 0 
    if (idProporsal != "") 
      type = typeService.IdPolicy // validamos si mapeamos una poliza 
    else 
      type = typeService.ListPolicy // validamos si mapeamos una lista poliza 
    
    const respose : any = await this.getServiceConsumerSmartix.getService(body.getBody(req, tokenLoginSmartix, queryParams, idProporsal), type) ;

    const time = this.Cronometer_.getInteval(new Date())

    logger.info(`Making request to processConsumerSmartix Consumer Domain/UseCases: => Interval Time : ${time} ms`);

    return respose;
  }

  async ValidationTokenGenerate(){  // Valida si genera token o lo recicla 
    const dateCurrent = new Date() // se demora aprox dos seg mas en llegar
    const dateTokenExpiration  = new envVars().get('dateToken')

    if (dateTokenExpiration == '') {
      return { validationResult : true , dateCurrent : dateCurrent.toString() , expiration : dateTokenExpiration }
    }

    const dateExpiration : any = new Date(dateTokenExpiration) 
    
    if ( dateCurrent <= dateExpiration )
      return { validationResult : false, dateCurrent :dateCurrent.toString() , expiration : dateExpiration.toString() }
    else 
      return { validationResult : true , dateCurrent :dateCurrent.toString() , expiration : dateExpiration.toString() }
  }

}




