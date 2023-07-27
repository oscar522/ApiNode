import dotenv from 'dotenv'
dotenv.config()
import * as App from "./infrastructure/app";
import "reflect-metadata";
import { WinstonOption } from './application/utils/winston/winston';
const logger = require('winston');

const winstonOption = new WinstonOption()
winstonOption.option()

async function server() {
    App.runServer()
}

server().catch(error => {
    logger.info(`Error occurred running the server:`, error)
    process.exit(1)
})