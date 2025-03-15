// src/app.ts
import express, { Application } from 'express';
import { container } from './inversify.config';
import { TodoController } from './src/controllers/TodoController';
import { LoggingMiddleware } from './src/middleware/LoggingMiddleware';

const app: Application = express();

// Middleware
app.use(express.json());

// Middleware
const loggingMiddleware = container.resolve(LoggingMiddleware);
app.use(loggingMiddleware.handle);

// Resolve Controller
const todoController = container.resolve(TodoController);

// Routes
app.get('/todos', todoController.getTodos);
app.post('/todos', todoController.createTodo);

export { app };
