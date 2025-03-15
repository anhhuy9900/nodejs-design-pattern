interface Shape {
  area(): number;

  perimeter(): number;
}

class Circle implements Shape {
  private readonly radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }

  perimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle implements Shape {
  constructor(
    private width: number,
    private height: number
  ) {}

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}

function calculator(shape: Shape) {
  const areaValue = shape.area();
  const perimeterValue = shape.perimeter();
  return areaValue + perimeterValue;
}

console.log('calculator - Circle: ', calculator(new Circle(2)));
console.log('calculator - Rectangle: ', calculator(new Rectangle(2, 5)));
