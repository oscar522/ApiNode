import { Action, createExpressServer, UnauthorizedError, useExpressServer } from 'routing-controllers';
import { smartixGetPolicyController } from './controllers/smartix/smartixGetPolicyController';
import { envVars } from '../application/utils/env-vars.config/env-vars.config';
import { logger } from '@sf-libs/winston-logger';
import { HelmetMiddleware } from './middlewares/helmet/helmet.middleware';
import { ErrorHandlerMiddleware } from './middlewares/errors-handler/error-handler.middleware';
import { smartixGetByIdPolicyController } from './controllers/smartix/smartixGetByIdPolicyController';
import {HealthController, LoginController} from '@sf-libs/routing-controllers-controllers'
import tracer from 'dd-trace';

tracer.init({
    hostname: process.env.DDHOSTNAME,
    port: process.env.DDPORT,
});
export function runServer() {
   
    const port = new envVars().get("PORT") || 3001
    const env = new envVars().get('NODE_ENV') || 'dev' // * puede ser dev, qa o prod
    createExpressServer({
	    routePrefix: `/smartix-policy-pe-adapter/${env}`,
        defaultErrorHandler: false,
        controllers: [smartixGetPolicyController, LoginController, HealthController, smartixGetByIdPolicyController ], // we specify controllers we want to use
        middlewares: [ErrorHandlerMiddleware, HelmetMiddleware], // interceptor customers error handler
        classTransformer: true, // transform class, default false
        validation: true, 
	    cors: true,
    }).listen(port, () => {
        logger.info(`Server running at port ${port}`);
    });
}
