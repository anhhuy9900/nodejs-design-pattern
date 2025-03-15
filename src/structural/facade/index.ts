/**
 * Facade is a structural design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes.
 * A facade is a class that provides a simple interface to a complex subsystem which contains lots of moving parts.
 * A facade might provide limited functionality in comparison to working with the subsystem directly.
 * However, it includes only those features that clients really care about.
 * ! Use the Facade when you want to structure a subsystem into layers.
 */
class CreateUserDB {
  create() {
    return 'Insert or update user into database';
  }
}

class SendMail {
  send() {
    return 'Send Mail for user';
  }
}

class CreateLogDataTracking {
  create() {
    return 'Create log data to tracking for system';
  }
}

/**
 * Instead of making your code work with dozens of the framework classes directly, you create a facade class which encapsulates that functionality and hides it from the rest of the code
 * The Facade class used to simply the complicated functions in logic code
 * In this case: we have a Facade class to take care whole logic of features instead of create classes to action
 */

class CreateUserFacade {
  createUserDB: CreateUserDB;
  sendMail: SendMail;
  createLogDataTracking: CreateLogDataTracking;

  constructor(
    createUserDB: CreateUserDB,
    sendMail: SendMail,
    createLogDataTracking: CreateLogDataTracking
  ) {
    this.createUserDB = createUserDB;
    this.sendMail = sendMail;
    this.createLogDataTracking = createLogDataTracking;
  }

  run() {
    const createData = this.createUserDB.create();
    console.log(createData);
    const sendMail = this.sendMail.send();
    console.log(sendMail);
    const createLogDataTracking = this.createLogDataTracking.create();
    console.log(createLogDataTracking);

    // To do some logic businesses you want to
  }
}

const facade = new CreateUserFacade(
  new CreateUserDB(),
  new SendMail(),
  new CreateLogDataTracking()
);
facade.run();
