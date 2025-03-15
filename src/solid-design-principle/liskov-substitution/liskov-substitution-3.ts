abstract class PaymentProcessor {
  abstract paymentProcess(amount: number): void;
}

class CreditCardProcessor extends PaymentProcessor {
  paymentProcess(amount: number): void {
    console.log(`Processing Credit Card Payments - Amount $${amount}`);
  }
}

class DebitCardProcessor extends PaymentProcessor {
  paymentProcess(amount: number): void {
    console.log(`Processing Debit Card Payments - Amount $${amount}`);
  }
}

class PayPalProcessor extends PaymentProcessor {
  paymentProcess(amount: number): void {
    console.log(`Processing PayPal Payments - Amount $${amount}`);
  }
}

class BitcoinProcessor extends PaymentProcessor {
  paymentProcess(amount: number): void {
    console.log(`Processing Bitcoin Payments - Amount $${amount}`);
  }
}

function executePayment(processor: PaymentProcessor, amount: number) {
  processor.paymentProcess(amount);
}

let creditCardProcessor = new CreditCardProcessor();
let debitCardProcessor = new DebitCardProcessor();
let payPalProcessor = new PayPalProcessor();

executePayment(creditCardProcessor, 100);
executePayment(debitCardProcessor, 50);
executePayment(payPalProcessor, 150);
