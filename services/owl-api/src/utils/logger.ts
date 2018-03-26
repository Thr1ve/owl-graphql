import * as winston from 'winston';

const createLogger = ({ level = 'silly' }) => {
  let transports = [
    new winston.transports.Console({
      level,
      colorize: true,
      prettyPrint: true,
      timestamp: true,
      handleExceptions: true
    })
  ];

  const logger = new winston.Logger({ transports });

  return logger;
};

export const logger = createLogger({ level: process.env.LOG_LEVEL });
