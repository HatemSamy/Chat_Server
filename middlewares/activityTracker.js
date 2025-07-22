import winston from 'winston';
import path from 'path';
import fs from 'fs';

const logsDir = path.resolve('logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json() 
  ),
  transports: [
    new winston.transports.File({ 
      filename: path.join(logsDir, 'activity.log'), 
      sync: true 
    }),
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    })
  ],
});


function logActivity(socketId, action, detail = '') {
  const time = new Date().toISOString();
  const message = `time=${time} socketId=${socketId} action=${action} detail=${detail}`;

  console.log(`Logging activity: ${message}`); 
  logger.info(message); 
}

export { logActivity };
