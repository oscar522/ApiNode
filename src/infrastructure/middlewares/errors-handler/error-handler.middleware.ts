import { logger } from '@sf-libs/winston-logger'
import { ExpressErrorMiddlewareInterface, Middleware } from 'routing-controllers'
import { envVars } from '../../../application/utils/env-vars.config/env-vars.config'

@Middleware({ type: 'after' })
export class ErrorHandlerMiddleware implements ExpressErrorMiddlewareInterface {
	public error(error: any, request: any, response: any, next: (err?: any) => any): void {
		error.status = parseInt(error.status) || error.httpCode || 500
		const errorResponse = this.processError(error)
		logger.info(JSON.stringify(errorResponse))

		response.status(parseInt(error.status)).json(errorResponse)
	}

	private processError(error: any): ErrorResponse {
		const { name, message, status, bodyResponse } = error
		const errorResponse: ErrorResponse = { message: name }

		if ( new envVars().get('NODE_ENV') == 'prod') return errorResponse

		const detail: Detail = {
			error: { message, status: status.toString(), bodyResponse: { message: bodyResponse ?? null } }
		}
		errorResponse.detail = detail
		return errorResponse
	}
}

interface ErrorResponse {
	message: string
	detail?: Detail
}

interface Detail {
	error: DetailError
}

interface DetailError {
	message: string
	status: string
	bodyResponse?: any
}
