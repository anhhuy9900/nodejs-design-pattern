/**
 * ! The Liskov Substitution Principle states that subclasses should be substitutable for their base classes.
 * ! This means that every subclass or derived class should be substitutable for their base or parent class
 * This means that, given that class B is a subclass of class A, 
 * we should be able to pass an object of class B to any method that expects an object of class A and the method should not give any weird output in that case.
 */

interface ICalculateSalary {
    calculateSalary(salary: number): number;
}

/**
 * This means that, given that class StandardCalculateSalary is a subclass of class BaseCalculateSalary
 *  we should be able to pass an object of class StandardCalculateSalary to any method that expects an object of class BaseCalculateSalary to EmployeeSalary class
 */
class BaseCalculateSalary implements ICalculateSalary {

    salary: number = 0;

    protected tax: number = 0.1;

    calculateForMonth() {
        return this.salary * 30;
    }

    calculateForDay() {
        return this.salary * 1;
    }

    calculateSalary(salary: number) {
        return salary / this.tax;
    }
}

class StandardCalculateSalary extends BaseCalculateSalary {
    constructor() {
        super();
        this.tax = 0.02
    }

    calculateSalary(salary: number) {
        console.log('StandardCalculateSalary :', salary, 'tax: ', this.tax);
        return (salary + 1000) / this.tax;
    }
}

class EmployeeSalary {
    calService: ICalculateSalary;

    constructor(calService: ICalculateSalary) {
        this.calService = calService;
    }

    calculateSalary(salary: number) {
        return this.calService.calculateSalary(salary);
    }
}

/**
 * Now we can inject BaseCalculateSalary or StandardCalculateSalary subclass to EmployeeSalary constructor without affected to calculateSalary method
 *
 */

const employeeSalary = new EmployeeSalary(new BaseCalculateSalary());
const base = employeeSalary.calculateSalary(2000);
console.log('Calculate salary from base formula', base);

console.log('=====================================================');

const employeeStandardSalary = new EmployeeSalary(new StandardCalculateSalary());
const standard = employeeStandardSalary.calculateSalary(2000);
console.log('Calculate salary from standard formula', standard);