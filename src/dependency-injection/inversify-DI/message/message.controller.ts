import { inject, injectable } from 'inversify';
import { IMessageService } from './interfaces';

@injectable()
export class MessageController {
  private messageService: IMessageService;

  constructor(@inject('MessageService') messageService: IMessageService) {
    this.messageService = messageService;
  }

  public getMessage(): string {
    return this.messageService.getMessage();
  }
}
