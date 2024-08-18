import { Container } from 'inversify';
import { IMessageService } from './interfaces';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';

const messageContainer = new Container();
messageContainer.bind<IMessageService>("MessageService").to(MessageService);
messageContainer.bind<MessageController>(MessageController).toSelf();

export { messageContainer };