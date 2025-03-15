// src/repositories/TodoRepository.ts
import { v4 as uuidv4 } from 'uuid';
import { injectable } from 'inversify';
import { ITodo } from '../interfaces/ITodo';
import { ITodoRepository } from '../interfaces/ITodoRepository';

@injectable()
export class TodoRepository implements ITodoRepository {
  private todos: ITodo[] = [];

  async findAll(): Promise<ITodo[]> {
    return this.todos;
  }

  async create(todo: ITodo): Promise<ITodo> {
    const newTodo = { ...todo, id: uuidv4() };
    this.todos.push(newTodo);
    return newTodo;
  }
}
