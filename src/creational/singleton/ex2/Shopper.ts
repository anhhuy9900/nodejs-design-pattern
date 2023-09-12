import { Logger } from './Logger';

export class Shopper {

    name: string;
    money: number;

    constructor(name: string, money: number = 0) {
        this.name = name;
        this.money = money;
        const logger = new Logger().getInstance();
        logger.log(`New Shopper: ${name} has ${money} in their account.`);
    }

}
