class BankAccount {
  constructor(balance: number) {
    this._balance = balance;
  }

  private _balance: number;

  public get balance(): number {
    return this._balance;
  }

  deposit(amount: number) {
    if (amount < 0) {
      console.log('Invalid deposit amount');
      return;
    }

    this._balance += amount;
  }

  withdraw(amount: number): void {
    if (amount < 0) {
      console.log('Invalid withdrawal amount');
      return;
    }
    if (this._balance - amount < 0) {
      console.log('Insufficient Funds');
      return;
    }

    this._balance -= amount;
  }
}

const bankAccount = new BankAccount(100);
bankAccount.deposit(1000);
console.log('Balance deposit: ', bankAccount.balance);
bankAccount.deposit(2000);
console.log('Balance deposit: ', bankAccount.balance);
bankAccount.withdraw(500);
console.log('Balance withdraw: ', bankAccount.balance);
