// src/services/TodoService.ts
import { inject, injectable } from 'inversify';
import { ITodoService } from '../interfaces/ITodoService';
import { ITodoRepository } from '../interfaces/ITodoRepository';
import { ITodo } from '../interfaces/ITodo';

@injectable()
export class TodoService implements ITodoService {
  private repository: ITodoRepository;

  constructor(@inject('ITodoRepository') repository: ITodoRepository) {
    this.repository = repository;
  }

  async getAllTodos(): Promise<ITodo[]> {
    return this.repository.findAll();
  }

  async addTodo(todo: ITodo): Promise<ITodo> {
    return this.repository.create(todo);
  }
}
