import { ServiceA } from './service-a';

export interface IServiceB {
    doAction(): void
    execute(): void
}

export class ServiceB implements IServiceB{
    protected service: ServiceA;

    constructor() {
        this.service = new ServiceA();
    }

    doAction() {
        console.log('ServiceB - do action something')
    }

    execute() {
        console.log('ServiceB - execute something')
        this.service.doAction();
    }
}