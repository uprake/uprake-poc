import { WinstonModule } from "nest-winston";
import * as winston from "winston";
import { dataDog } from "../config/logger.config";
require("dotenv").config();
let loggerConfig;
const httpTransportOptions = {
  host: "http-intake.logs.datadoghq.com",
  path: `/api/v2/logs?dd-api-key=${dataDog.apiKey}&ddsource=nodejs&service=${dataDog.applicationName}&ddtags=env:${dataDog.env},version:${dataDog.version}`,
  ssl: true,
};

if (process.env.ENV === "dev") {
  loggerConfig = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
      winston.format.timestamp({
        format: "MMM-DD-YYYY HH:mm:ss",
      }),
      winston.format.colorize({ all: true }),
      winston.format.printf(
        (info) => `${info.level}: ${[info.timestamp]}: ${info.message}`
      )
    ),
  };
} else {
  loggerConfig = {
    level: "info",
    exitOnError: false,
    format: winston.format.json(),
    transports: [new winston.transports.Http(httpTransportOptions)],
  };
}
export const loggerModule = WinstonModule.createLogger(loggerConfig);
