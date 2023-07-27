
import { processConsumerSmartix } from "../../../application/usecases/costumerSmartix/consumerSmartix";
import { JsonController, Res, Authorized, Get, Req, Param, BadRequestError, QueryParams, UseBefore} from 'routing-controllers';
import { checkHash256 } from '../../../application/utils/checkHash256/utils';
import { identificationDocument } from "../../../domain/models/identificationDocument";
import { CronometerTime } from "../../../application/utils/CronometerTime/CronometerTime";
import { MetadataValidation } from "../../../application/utils/metadataValidation/metadata.validation";
import { http_status_codes } from "../../../application/utils/http-status-code";
import { Logger } from "winston";
// import { AuthenticationMiddleware } from "@sf-libs/routing-controllers-middlewares/dist/authentication/authentication.middleware";
import { dataValidation, SmartixGetValidation } from "../../middlewares/SmartixGetValidation/SmartixGetValidation";

import { envVars } from '../../../application/utils/env-vars.config/env-vars.config';

@JsonController()

export class HealthController {
 private parseSeconds(seconds: number): string {
    const d = Math.floor(seconds/(3600*24))
    const h = Math.floor(seconds%(3600*24)/3600)
    const m = Math.floor(seconds%3600/60)
    const s = Math.floor(seconds%60)
    const formatD = d === 0 || d > 1 ? `${d} Days` : `${d} Day`
    const formatH = h < 10 ? `0${h}` : h
    const formatM = m < 10 ? `0${m}` : m
    const formatS = s < 10 ? `0${s}` : s
    return `${formatD} ${formatH}:${formatM}:${formatS}`
  }

  @Get('/HealthControlle')
  async  getCustomers( @Res() response: any ) { // implementar clase customerIdHash

    const env = new envVars().get('NODE_ENV') //* puede ser dev, qa o prod
    const appName = new envVars().get('APP_NAME')
    const version = new envVars().get("VERSION") || "v0"

    return response.status(200).send(
      { 
        status: `The API ${appName} is healthy`,
        version,
        environment: env,
        memory: `${(process.memoryUsage().rss / 1000000).toString()} MB`,
        cpu: `${(process.cpuUsage().user / 1000000).toString()} MB`,
        date: new Date().toString(),
        uptime: this.parseSeconds(process.uptime())
      }

    )

  }
 
}




