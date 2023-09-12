interface IPriceProduct {
    calculate(): number;
}

class CalculateProductPrice {

    calObj: IPriceProduct;

    constructor(calFunc: IPriceProduct) {
        this.calObj = calFunc;
    }

    setCalFunc(calFunc: IPriceProduct) {
        this.calObj = calFunc;
    }

    calculatePrice(price: number = 100) {
        console.log('Calculate Strategy value: ', this.calObj.calculate());
        return this.calObj.calculate() + price * 100;
    }
}

class CalculatePriceSummer implements IPriceProduct {
    calculate(price: number = 100) {
        return (price * 100) / 2;
    }
}

class CalculatePriceWinter implements IPriceProduct {
    calculate(price: number = 100) {
        return (price * 50) / 2;
    }
}

const cal = new CalculateProductPrice(new CalculatePriceSummer());

const priceOfSummer = cal.calculatePrice();
console.log("🚀 --------------------------------------");
console.log("🚀 ~ CalculatePriceSummer ~ value:", priceOfSummer);

cal.setCalFunc(new CalculatePriceWinter());
const priceOfWinter = cal.calculatePrice();
console.log("🚀 --------------------------------------");
console.log("🚀 ~ CalculatePriceSummer ~ value:", priceOfWinter);

