import { IServiceB, ServiceB } from './service-b';

export interface IServiceA {
  doAction(): void;

  execute(): void;
}

export class ServiceA implements IServiceA {
  protected service: IServiceB;

  constructor() {
    this.service = new ServiceB();
  }

  doAction() {
    console.log('ServiceA - do action something');
  }

  execute() {
    console.log('ServiceA - execute something');
    this.service.doAction();
  }
}
