/**
 * Facade Pattern
 * Example: Banking System
 * Link reference: https://refactoring.guru/design-patterns/facade
 * - https://cloudaffle.com/series/structural-design-patterns/facade-pattern-applications/
 */
class AuthenticationSystem {
  public authenticate(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      return true;
    }
    return false;
  }
}

class BalanceSystem {
  public getBalance(username: string): number {
    if (username === 'admin') {
      return 1000;
    }
    return 0;
  }
}

class TransactionSystem {
  public makeTransaction(username: string, amount: number): boolean {
    if (username === 'admin' && amount < 1000) {
      return true;
    }
    return false;
  }
}

class ReceiptSystem {
  public generateReceipt(username: string, amount: number): string {
    return `Receipt for ${username} with amount ${amount}`;
  }
}

class BankingFacade {
  private authenticationSystem: AuthenticationSystem;
  private balanceSystem: BalanceSystem;
  private transactionSystem: TransactionSystem;
  private receiptSystem: ReceiptSystem;

  constructor() {
    this.authenticationSystem = new AuthenticationSystem();
    this.balanceSystem = new BalanceSystem();
    this.transactionSystem = new TransactionSystem();
    this.receiptSystem = new ReceiptSystem();
  }

  public makeTransaction(username: string, password: string, amount: number): string {
    if (this.authenticationSystem.authenticate(username, password)) {
      const balance = this.balanceSystem.getBalance(username);
      if (balance < amount) {
        return 'Insufficient balance';
      }
      if (this.transactionSystem.makeTransaction(username, amount)) {
        return this.receiptSystem.generateReceipt(username, amount);
      }
    }
    return 'Transaction failed';
  }
}
