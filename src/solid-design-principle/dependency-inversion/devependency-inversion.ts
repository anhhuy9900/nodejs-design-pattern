interface IDatabase {
  connection(): void;

  disconnected(): void;
}

class MysqlDatabase implements IDatabase {
  connection() {
    console.log('Connected with mysql database');
  }

  disconnected() {
    console.log('Disconnected with mysql database');
  }
}

class PostgresDatabase implements IDatabase {
  connection() {
    console.log('Connected with postgres database');
  }

  disconnected() {
    console.log('Disconnected with postgres database');
  }
}

class BaseModel {
  private instanceDB: IDatabase;

  constructor(instanceDB: IDatabase) {
    this.instanceDB = instanceDB;
  }

  verify() {
    this.instanceDB.connection();
  }
}

const mysqlModel = new BaseModel(new MysqlDatabase());
mysqlModel.verify();
const pgModel = new BaseModel(new PostgresDatabase());
pgModel.verify();
