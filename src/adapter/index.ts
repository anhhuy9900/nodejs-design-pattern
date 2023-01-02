interface PaymentNormal {
    toBuy(): string;
}

class OrderPayment implements PaymentNormal {
    toBuy(): string {
        return 'Buy a product from payment normal method save data'
    }
}

const buy = new OrderPayment();
console.log(buy.toBuy());

/**
 * Service Pay pal
 */

class ServicePayPal {
    buy() {
        return 'Buy a product from payment pay pal service'
    }
}

class AdapterPayment extends OrderPayment {
    private paymentPayPal: ServicePayPal

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

const newPayment = new AdapterPayment(new ServicePayPal);
console.log('##### Adapter ####');
console.log(newPayment.toBuy());


