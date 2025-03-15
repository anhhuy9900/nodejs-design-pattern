import { IServiceA } from './service-a';
import ServiceLocator from './service-locator';

export interface IServiceB {
  doAction(): void;

  execute(): void;
}

export class ServiceB {
  protected serviceLocator: typeof ServiceLocator;

  constructor() {
    this.serviceLocator = ServiceLocator;
  }

  doAction() {
    console.log('ServiceB - do action something');
  }

  execute() {
    console.log('ServiceA - execute something');
    this.serviceLocator.getService<IServiceA>('ServiceA').doAction();
  }
}
