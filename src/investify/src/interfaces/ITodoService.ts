// src/interfaces/ITodoService.ts
import { ITodo } from './ITodo';

export interface ITodoService {
  getAllTodos(): Promise<ITodo[]>;

  addTodo(todo: ITodo): Promise<ITodo>;
}
