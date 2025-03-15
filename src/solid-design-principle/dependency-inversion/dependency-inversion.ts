/**
 * ! The Dependency Inversion principle states that our classes should depend upon interfaces or abstract classes instead of concrete classes and functions.
 * ! Entities must depend on abstractions, not on concretions. It states that the high-level module must not depend on the low-level module, but they should depend on abstractions.
 */

class ConnectionDB {
  connection() {
    return 'Connected with database';
  }
}

class BaseConnection {
  instanceDB: ConnectionDB;

  constructor(instanceDB: ConnectionDB) {
    this.instanceDB = instanceDB;
  }

  saveDb() {
    if (this.instanceDB.connection()) {
      // Save data to DB
    }
  }
}

/**
 * The BaseConnection class it's also work ok now
 * But we need to add more some actions like disconnection with database, we must change the code inside in ConnectionDB class and it will affect to many features
 * Therefore, we need to create abstract or interface class for the class extends them and easy maintenance, not affected to other features
 * ! The class should depend on the high-level module must not depend on the low-level module
 */

interface ConnectionDBInterface {
  connection(): boolean;

  disConnection(): boolean;
}

class NewBaseConnection {
  instanceDB: ConnectionDBInterface;

  constructor(instanceDB: ConnectionDBInterface) {
    this.instanceDB = instanceDB;
  }

  saveDb() {
    if (this.instanceDB.connection()) {
      // Save data to DB
    }

    // And then we will save we need to disconnection
    this.instanceDB.disConnection();
  }
}
