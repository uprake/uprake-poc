import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import loggerConfig from '../config/logger.config';

const dataDog = loggerConfig();
let config;

const httpTransportOptions = {
  host: 'http-intake.logs.datadoghq.com',
  path: `/api/v2/logs?dd-api-key=${dataDog.apiKey}&ddsource=nodejs&service=${dataDog.applicationName}&ddtags=env:${dataDog.env},version:${dataDog.version}`,
  ssl: true,
};

if (process.env.ENV === 'dev' || !process.env.ENV) {
  config = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
      winston.format.timestamp({
        format: 'MMM-DD-YYYY HH:mm:ss',
      }),
      winston.format.colorize({ all: true }),
      winston.format.printf(
        (info) => `${info.level}: ${[info.timestamp]}: ${info.message}`
      )
    ),
  };
} else {
  config = {
    level: 'info',
    exitOnError: false,
    format: winston.format.json(),
    transports: [new winston.transports.Http(httpTransportOptions)],
  };
}
export const loggerModule = WinstonModule.createLogger(config);
