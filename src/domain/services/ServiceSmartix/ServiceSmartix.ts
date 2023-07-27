import { transformAndValidate } from "class-transformer-validator";
import { CronometerTime } from '../../../application/utils/CronometerTime/CronometerTime';
import { envVars } from '../../../application/utils/env-vars.config/env-vars.config';
import { ServiceConsumer } from '../../../infrastructure/serviceConsumer/serviceConsumer';
import { DtoListProposal } from '../../models/ResposeDto/DtoResponseListPolicy';
import { DtoProposal } from '../../models/ResposeDto/DtoResponsePolicy';
import { typeService } from '../../models/enumTypeService';
import  'reflect-metadata'
import { response } from '../../models/response';

const Cronometer_ = new CronometerTime()
const logger = require('winston');

export class serviceSmartix {

    async getService(req : any, type : number) {
        Cronometer_.setInitTime(new Date());
        logger.info(`Making request to getService infrastructure :`)

        // validacion del servicio a consumir
        let urlService : string = "";
        if (type != 1 )
            urlService =  new envVars().get('URL_CUSTOMER_SMARTIX')
        else
            urlService = new envVars().get('URL_LOGIN_SMARTIX')

        // const requestConfig : RequestConfig = {
        //     url : urlService,
        //     data : JSON.stringify(req),
        //     config : {
        //         headers: { "Content-Type" : "application/json" },
        //     },
        //     //timeout : 10000,

        // }
        // const getResult : any = await ServiceConsumer.post(requestConfig);
        const getResult : any ={}
        const resultMapping : any = await this.mappingResponse(getResult , type)

        const time = Cronometer_.getInteval(new Date())
        logger.info(`Making request to getService infrastructure : => Interval Time : ${time} ms, Url :  ${urlService}  `);

        return resultMapping

    }

    private async mappingResponse(req : any , type : number){

        try {

            switch (type) {

                case typeService.Login:
    
                    const responseLogin : response = { data : req.invocarResult.userInfo[0].valor.toString() , code : 200}
                    process.env.tokenLogin = req.invocarResult.userInfo[0].valor.toString() 
                    process.env.dateToken  = req.invocarResult.userInfo[1].valor
                    
                    return responseLogin
    
                case typeService.ListPolicy:
                    
                    const proposals =  req.Result.ProviderResponse.proposals
                    const proposalsListTransform : any = await this.transformAndValidate(proposals, DtoListProposal ).then(function(results : any){
                        return results.map( (x: any) => {
                            return  x.getDto()
                        })
                    })
                    const getDto = await  Promise.all(proposalsListTransform).then((values) => {
                        return values
                      });
    
                    const responseList : response = { 
                        data :  {proposals : getDto},
                        code : 200
                    }
    
                    return responseList 
    
                case typeService.IdPolicy:
                   
                    const proposal = req.Result.ProviderResponse.proposals
                    const proposalTransform : any = await this.transformAndValidate(proposal, DtoProposal )
    
                    const responseDetail : response = { 
                        data : {proposal : await proposalTransform.get()  },
                        code : 200
                    }
                    
                    return responseDetail 
    
                default:
                    break;
            }
            
        } catch (error) {

            const time = Cronometer_.getInteval(new Date())
            logger.info(`Making request to mappingResponse infrastructure error : => Interval Time : ${time} ms`);
            error.name = "the answer is not as expected in " + (type == 1 ? "Login Smartix IC" : "Get data Smartix IC")
            error.status = 503
            throw error
            
        }

        
    }

    async transformAndValidate(result : any, dto : any) {

        return await transformAndValidate(dto, result )
        .then((userObject: any) => {
            // now you can access all your class prototype method
            const time = Cronometer_.getInteval(new Date())
            logger.info(`Making request to mappingResponse Domian : => Interval Time : ${time} ms`);
            return userObject

        })
        .catch(err => {
            const time = Cronometer_.getInteval(new Date())
            logger.info(`Making request to mappingResponse Domian error : => Interval Time : ${time} ms` );
            throw ({status : 503, name :  "the answer is not as expected transformAndValidate" , errors : err })
        });
    }

}






























