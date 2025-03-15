import { injectable } from 'inversify';
import { IMessageService } from './interfaces';

@injectable()
export class MessageService implements IMessageService {
  public getMessage(): string {
    return 'Hello from MessageService';
  }
}
