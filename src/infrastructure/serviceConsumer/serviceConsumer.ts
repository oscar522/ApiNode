import { AxiosHttpService } from "@sf-libs/axios-http-service";
import { RequestConfig } from "@sf-libs/axios-http-service/dist/http/axios-http-service.interface";
import { logger } from "@sf-libs/winston-logger";
import { envVars } from "../../application/utils/env-vars.config/env-vars.config";
import { CronometerTime } from "../../application/utils/CronometerTime/CronometerTime";

export class ServiceConsumer {
  public static async post<T>(config: RequestConfig): Promise<T> {
    const cronometer = new CronometerTime()
    cronometer.setInitTime(new Date());

      try {
        const env = new envVars().get('NODE_ENV') || 'dev' // * puede ser dev, qa o prod  ||
        if (env != "prod") {process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'}

        const httpService = new AxiosHttpService(undefined,config.timeout);
        const response = await httpService.post(config.url,config.data,config.config)

        const time = cronometer.getInteval(new Date())
        logger.info(`Making request to post axios : => Interval Time : ${time} ms`, {   });

        if (response.status >= 200 && response.status < 300) {
          return response.data
        } else {
          const error = {
            name : response.statusText,
            status : response.status
          }
          throw error
        }
  
      } catch (error) {
        
        const time = cronometer.getInteval(new Date())
        logger.info(`Making request to post axios error : => Interval Time : ${time} ms`, { details : {status : error.status , }});
      
        throw error
  
      }
  }
}
  
