interface IUserDetails {
  name: string;
  age: number;
  email: string;
}

interface Prototype {
  clone(): Prototype;

  getUserDetails(): IUserDetails;
}

class ConcretePrototype implements Prototype {
  constructor(private user: IUserDetails) {}

  clone(): Prototype {
    const clone = Object.create(this);
    clone.user = { ...this.user };
    return clone;
  }

  getUserDetails(): IUserDetails {
    return this.user;
  }
}

const concretePrototype = new ConcretePrototype({
  name: 'huy',
  age: 10,
  email: 'email@mail.com',
});
console.log('\n------------------------------------');
console.log('LOG: ', 'concretePrototype', concretePrototype);
console.log('LOG: ', 'concretePrototype - getUserDetails: ', concretePrototype.getUserDetails());
console.log('------------------------------------');

const useConcreteClone = concretePrototype.clone();
console.log('\n------------------------------------');
console.log('LOG: ', 'useConcreteClone', useConcreteClone);
console.log('LOG: ', 'useConcreteClone - getUserDetails: ', useConcreteClone.getUserDetails());
console.log('------------------------------------');
