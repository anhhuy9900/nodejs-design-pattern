interface ICustomer {
  fullName: string;
  email: string;
  status: boolean;
  phoneNumber: string;
}

class Customer implements ICustomer {
  fullName: string;
  email: string;
  status: boolean;
  phoneNumber: string;

  constructor(fullName: string, email: string, status: boolean, phoneNumber: string) {
    this.fullName = fullName;
    this.email = email;
    this.status = status;
    this.phoneNumber = phoneNumber;
  }
}

interface ICustomerBuilder {
  setFullName(fullName: string): ICustomerBuilder;

  setEmail(email: string): ICustomerBuilder;

  setStatus(status: boolean): ICustomerBuilder;

  setPhoneNumber(phoneNumber: string): ICustomerBuilder;

  build(): ICustomer;
}

class CustomerBuilder implements ICustomerBuilder {
  private fullName: string = '';
  private email: string = '';
  private phoneNumber: string = '';
  private status: boolean = false;

  setEmail(email: string): ICustomerBuilder {
    this.email = email;
    return this;
  }

  setFullName(firstName: string): ICustomerBuilder {
    this.fullName = firstName;
    return this;
  }

  setPhoneNumber(phoneNumber: string): ICustomerBuilder {
    this.phoneNumber = phoneNumber;
    return this;
  }

  setStatus(status: boolean): ICustomerBuilder {
    this.status = status;
    return this;
  }

  build(): ICustomer {
    return new Customer(this.fullName, this.email, this.status, this.phoneNumber);
  }
}

class CustomerCreate {
  private builder: ICustomerBuilder;

  constructor(builder: ICustomerBuilder) {
    this.builder = builder;
  }

  createCustomerNormal(fullName: string, email: string, status: boolean, phoneNumber: string) {
    return this.builder
      .setFullName(fullName)
      .setEmail(email)
      .setStatus(status)
      .setPhoneNumber(phoneNumber);
  }
}

const customer = new CustomerCreate(new CustomerBuilder());
const customerNormal = customer.createCustomerNormal(
  'Huy Nguyen',
  'huy@meila.com',
  true,
  '2398293928'
);
console.log('\n------------------------------------');
console.log('LOG: ', 'customerNormal: ', customerNormal);
console.log('------------------------------------');
