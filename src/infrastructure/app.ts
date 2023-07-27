import { Action, createExpressServer, UnauthorizedError, useExpressServer } from 'routing-controllers';
import { smartixGetPolicyController } from './controllers/smartix/smartixGetPolicyController';
import { envVars } from '../application/utils/env-vars.config/env-vars.config';
import { HelmetMiddleware } from './middlewares/helmet/helmet.middleware';
import { ErrorHandlerMiddleware } from './middlewares/errors-handler/error-handler.middleware';
import { smartixGetByIdPolicyController } from './controllers/smartix/smartixGetByIdPolicyController';
import { HealthController } from './controllers/smartix/healthController';
// import {HealthController, LoginController} from '@sf-libs/routing-controllers-controllers'
const logger = require('winston');


export function runServer() {
   
    const port = new envVars().get("PORT") || 3001
    const version = new envVars().get("VERSION") || "v0"
    const appName = new envVars().get("APP_NAME") || "pruebaApi"
    const env = new envVars().get('NODE_ENV') || 'dev' // * puede ser dev, qa o prod
    createExpressServer({
	    routePrefix: `/${appName}/${env}/${version}`,
        defaultErrorHandler: false,
        controllers: [smartixGetPolicyController,HealthController, smartixGetByIdPolicyController ], // we specify controllers we want to use
        middlewares: [ErrorHandlerMiddleware, HelmetMiddleware], // interceptor customers error handler
        classTransformer: true, // transform class, default false
        validation: true, 
	    cors: true,
    }).listen(port, () => {
        logger.info(`Server running at port ${port}`);
    });
}
