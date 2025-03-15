interface ExampleInterface {
  getList(): string[];

  getFirst(): string;

  getDetail(id: string): string;

  create(data: string): string;

  update(id: string, data: string): string;

  delete(id: string): string;
}
