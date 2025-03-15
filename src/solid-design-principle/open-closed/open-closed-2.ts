interface Customer {
  giveDiscount(): number;

  addLoyaltyPoints(amountSpent: number): number;
}

class RegularCustomer implements Customer {
  giveDiscount(): number {
    return 10;
  }

  addLoyaltyPoints(amountSpent: number): number {
    return amountSpent;
  }
}

class PremiumCustomer implements Customer {
  giveDiscount(): number {
    return 20;
  }

  addLoyaltyPoints(amountSpent: number): number {
    return amountSpent * 2;
    ``;
  }
}

class GoldCustomer implements Customer {
  giveDiscount(): number {
    return 30;
  }

  addLoyaltyPoints(amountSpent: number): number {
    return amountSpent * 3;
  }
}

class Discount {
  giveDiscount(customer: Customer): number {
    return customer.giveDiscount();
  }
}

const discount = new Discount();
const regularDiscount = discount.giveDiscount(new RegularCustomer());
console.log('regularDiscount: ', regularDiscount);
const premiumDiscount = discount.giveDiscount(new PremiumCustomer());
console.log('premiumDiscount: ', premiumDiscount);
const goldDiscount = discount.giveDiscount(new GoldCustomer());
console.log('goldDiscount: ', goldDiscount);
