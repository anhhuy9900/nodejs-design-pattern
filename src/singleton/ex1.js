class Database {
    instance = null
    init() {
        console.log('Init Database');
        return {
            db: 'MONGODB'
        }
    }

    getInstance() {
        console.log('getInstance : ', this.instance);
        if (!this.instance) {
            this.instance = this.init();
        }

        return this.instance;
    }
}

const db = new Database();

function getDB1(db) {
    console.log('getDB1 : ', db.getInstance());
}

function getDB2() {
    console.log('getDB2 : ', db.getInstance());
}

getDB1(db);
getDB2(db);
