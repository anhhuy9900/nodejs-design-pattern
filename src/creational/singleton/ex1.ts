/**
 * !Document
 * * https://refactoring.guru/design-patterns/singleton/typescript/example
 */

type DatabaseType = Database | undefined | object

class Database {
    instance: DatabaseType;

    init(): { db: string } {
        console.log('========== Init Database ==========');
        return {
            db: 'MONGODB'
        }
    }

    getInstance(): DatabaseType {
        console.log('getInstance : ', this.instance);
        if (!this.instance) {
            this.instance = this.init();
        }

        return this.instance;
    }
}

const db = new Database();

function getDB1(db: Database) {
    console.log('getDB1: ', db.getInstance());
}

function getDB2() {
    console.log('getDB2: ', db.getInstance());
}

getDB1(db);
getDB2();
