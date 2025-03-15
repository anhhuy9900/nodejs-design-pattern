/**
 * ! Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate
 * Use the Adapter class when you want to use some existing class, but its interface isn’t compatible with the rest of your code.
 * The Adapter pattern lets you create a middle-layer class that serves as a translator between your code and a legacy class, a 3rd-party class or any other class with a weird interface.
 * Use the pattern when you want to reuse several existing subclasses that lack some common functionality that can’t be added to the superclass.
 */
interface PaymentNormal {
  toBuy(): string;
}

class OrderPayment implements PaymentNormal {
  toBuy(): string {
    return 'Buy a product from payment normal method save data';
  }
}

const buy = new OrderPayment();
console.log(buy.toBuy());

/**
 * Service Pay pal
 */

class ServicePayPal {
  buy() {
    return 'Buy a product from payment paypal service';
  }
}

class AdapterPayment extends OrderPayment {
  private paymentPayPal: ServicePayPal;

  constructor(paymentPayPal: ServicePayPal) {
    super();
    this.paymentPayPal = paymentPayPal;
  }

  toBuy() {
    const buyPayPal = this.paymentPayPal.buy();
    console.log(buyPayPal);
    return super.toBuy();
  }
}

const newPayment = new AdapterPayment(new ServicePayPal());
console.log('##### Adapter ####');
console.log(newPayment.toBuy());
