// src/middleware/LoggingMiddleware.ts
import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { ILogger } from '../interfaces/ILogger';

@injectable()
export class LoggingMiddleware {
  private logger: ILogger;

  constructor(@inject('ILogger') logger: ILogger) {
    this.logger = logger;
  }

  handle = (req: Request, res: Response, next: NextFunction): void => {
    this.logger.log(`Incoming request: ${req.method} ${req.url}`);
    next();
  };
}
