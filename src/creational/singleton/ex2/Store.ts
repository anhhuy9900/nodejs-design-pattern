import { Logger } from './Logger';

export class Store {
    name: string;
    inventory: object[];

    constructor(name: string, inventory: object[] = []) {
        this.name = name;
        this.inventory = inventory;
        const logger = new Logger().getInstance();
        logger.log(`New Store: ${name} has ${inventory.length} items in stock.`);
    }
}

