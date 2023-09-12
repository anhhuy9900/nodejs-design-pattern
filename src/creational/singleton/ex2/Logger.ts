class Logger {

    static instance: any;

    getInstance() {
        return Logger.instance;
    }

    logs: (string | Date | object)[];

    constructor() {
        this.logs = [];
    }

    get count() {
        return this.logs.length;
    }

    log(message: string): void {
        const timestamp = new Date().toISOString();
        this.logs.push({ message, timestamp });
        console.log(`${timestamp} - ${message}`);
    }

}


class Singleton {
    static instance: any;

    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new Logger();
        }
    }

    getInstance() {
        return Singleton.instance;
    }

}

export { Logger , Singleton}
