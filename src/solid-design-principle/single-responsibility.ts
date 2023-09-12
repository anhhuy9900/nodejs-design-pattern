/**
 * ! The Single Responsibility Principle states that a class should do one thing and therefore it should have only a single reason to change.
 */

interface ICalculator {
    calculate(spend: number, tax: number): void;
}

/**
 * First we need to create a class to calculate price that the user has used in application with provider services of third-party
 * Now let's create the Invoice class which will contain the logic for creating the invoice and calculating the total price
 */
class Invoice {

    price: number;

    constructor() {
        this.price = 0;
    }

    calculateAvg(spend: number, tax: number): number {
        this.price = ( spend / tax ) || 0;
        return this.price;
    }

    createInvoice() {
        return `The first invoice will be create with total price: ${this.price}`;
    }
}


class GoogleInvoice implements ICalculator {

    invoice: Invoice;
    price: number;

    constructor(invoice: Invoice) {
        this.invoice = invoice;
        this.price = 0;
    }

    calculate(spend: number, tax: number) {
        this.price = 100 + this.invoice.calculateAvg(spend, tax);
    }

    getInfoInvoice() {
        return [
            this.invoice.createInvoice(),
            `The invoice will be create with total price has calculated from Google Provider: ${this.price}`
        ];
    }
}

class FacebookInvoice implements ICalculator {

    invoice: Invoice;
    price: number;

    constructor(invoice: Invoice) {
        this.invoice = invoice;
        this.price = 0;
    }

    calculate(spend: number, tax: number) {
        this.price = (100 + ( spend / 20)) + this.invoice.calculateAvg(spend, tax);
    }

    getInfoInvoice() {
        return [
            this.invoice.createInvoice(),
            `The invoice will be create with total price has calculated from Facebook Provider: ${this.price}`
        ];
    }
}

/**
 * Now our classes structure the Single Responsibility Principle and every class is responsible for one aspect of our application
 */

const googleInvoice = new GoogleInvoice(new Invoice());
googleInvoice.calculate(99.88, 0.01);
console.log('GoogleInvoice ====> ', googleInvoice.getInfoInvoice());

console.log('=====================================================');

const facebookInvoice = new FacebookInvoice(new Invoice());
facebookInvoice.calculate(127.12, 0.02);
console.log('FacebookInvoice ====> ', facebookInvoice.getInfoInvoice());