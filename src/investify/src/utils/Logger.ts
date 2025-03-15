// src/utils/Logger.ts
import { injectable } from 'inversify';
import { ILogger } from '../interfaces/ILogger';

@injectable()
export class Logger implements ILogger {
  log(message: string): void {
    console.log(`[LOG] ${message}`);
  }
}
