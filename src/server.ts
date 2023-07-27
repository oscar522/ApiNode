import dotenv from 'dotenv'
dotenv.config()
import * as App from "./infrastructure/app";
import "reflect-metadata";
import { logger } from '@sf-libs/winston-logger';

async function server() {
    App.runServer()
}

server().catch(error => {
    logger.error(`Error occurred running the server:`, error)
    process.exit(1)
})