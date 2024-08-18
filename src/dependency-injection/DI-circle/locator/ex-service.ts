import { IServiceA, ServiceA } from './service-a';
import { IServiceB, ServiceB } from './service-b';
import ServiceLocator from './service-locator';

const serviceLocator = ServiceLocator;
serviceLocator.registerService('ServiceA', new ServiceA())
serviceLocator.registerService('ServiceB', new ServiceB())

const serviceA = serviceLocator.getService<IServiceA>('ServiceA');
serviceA.execute()

const serviceB = serviceLocator.getService<IServiceB>('ServiceB');
serviceB.execute()