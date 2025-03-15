interface ICalculatorService {
  calculate(): number;
}

class CalculatorService implements ICalculatorService {
  calculate(): number {
    return 1000;
  }
}

const calculatorService = new CalculatorService();
console.log(calculatorService.calculate());

interface INewCalculatorService {
  calculate(): number;
}

class BudgetGoogleService implements INewCalculatorService {
  calculate(): number {
    return 200;
  }
}

class AdapterCalculatorService extends CalculatorService {
  calculator: INewCalculatorService;

  constructor(calculator: INewCalculatorService) {
    super();
    this.calculator = calculator;
  }

  calculate(): number {
    const number = super.calculate();
    return number + this.calculator.calculate();
  }
}

const cash = new AdapterCalculatorService(new BudgetGoogleService());
console.log(cash.calculate());
