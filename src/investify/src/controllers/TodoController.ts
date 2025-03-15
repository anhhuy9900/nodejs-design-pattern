// src/controllers/TodoController.ts
import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { ITodoService } from '../interfaces/ITodoService';
import { ITodo } from '../interfaces/ITodo';

@injectable()
export class TodoController {
  private service: ITodoService;

  constructor(@inject('ITodoService') service: ITodoService) {
    this.service = service;
  }

  getTodos = async (req: Request, res: Response): Promise<void> => {
    const todos = await this.service.getAllTodos();
    res.json(todos);
  };

  createTodo = async (req: Request, res: Response): Promise<void> => {
    const todo: ITodo = req.body;
    const newTodo = await this.service.addTodo(todo);
    res.json(newTodo);
  };
}
