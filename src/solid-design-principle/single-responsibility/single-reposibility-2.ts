class User {
  getName() {
    return "user's name";
  }

  getEmail() {
    return "user's email";
  }

  getStatus() {
    return "user's status";
  }
}

class UserAuthenticate {
  private user: User;

  constructor(user: User) {
    this.user = user;
  }

  getAuthInfo() {
    return `${this.user.getName()}+${this.user.getEmail()}+${this.user.getStatus()}`;
  }
}

const userAuthenticate = new UserAuthenticate(new User());
console.log('UserAuthenticate: ', userAuthenticate.getAuthInfo());
