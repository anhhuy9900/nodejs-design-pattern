import ServiceLocator from './service-locator';
import { IServiceB } from './service-b';

export interface IServiceA {
  doAction(): void;

  execute(): void;
}

export class ServiceA implements IServiceA {
  protected serviceLocator: typeof ServiceLocator;

  constructor() {
    this.serviceLocator = ServiceLocator;
  }

  doAction() {
    console.log('ServiceA - do action something');
  }

  execute() {
    console.log('ServiceA - execute something');
    this.serviceLocator.getService<IServiceB>('ServiceB').doAction();
  }
}
