// src/interfaces/ITodoRepository.ts
import { ITodo } from './ITodo';

export interface ITodoRepository {
  findAll(): Promise<ITodo[]>;

  create(todo: ITodo): Promise<ITodo>;
}
