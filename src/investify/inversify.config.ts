// src/inversify.config.ts
import { Container } from 'inversify';
import { TodoController } from './src/controllers/TodoController';
import { TodoService } from './src/services/TodoService';
import { TodoRepository } from './src/repositories/TodoRepository';
import { ITodoService } from './src/interfaces/ITodoService';
import { ITodoRepository } from './src/interfaces/ITodoRepository';
import { ILogger } from './src/interfaces/ILogger';
import { LoggingMiddleware } from './src/middleware/LoggingMiddleware';
import { Logger } from './src/utils/Logger';

const container = new Container();

// Bind logger
container.bind<ILogger>('ILogger').to(Logger).inSingletonScope();

// Bind middleware
container.bind<LoggingMiddleware>(LoggingMiddleware).toSelf();

container.bind<ITodoService>('ITodoService').to(TodoService);
container.bind<ITodoRepository>('ITodoRepository').to(TodoRepository);
container.bind<TodoController>(TodoController).toSelf();

export { container };
