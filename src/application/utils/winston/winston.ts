
export class WinstonOption {
    
    private logger = require('winston');
    private date = new Date();

    option(){
        const optionsLogFile = this.logger.createLogger({
            level: "debug",
            transports: [
            new this.logger.transports.Console({
                format: this.logger.format.combine(
                this.logger.format.colorize()
                ),
            }),
            new this.logger.transports.File({
                filename: "logs/example-"+this.date.toDateString()+".log",
                maxsize: 1024,
                format: this.logger.format.combine(
                this.logger.format.timestamp({
                    format: "YYYY-MM-DD HH:mm:ss",
                }),
                this.logger.format.json()
                ),
            }),
            ],
        });
    
        this.logger.add(new this.logger.transports.Console())
        this.logger.add(optionsLogFile)
    }

}


