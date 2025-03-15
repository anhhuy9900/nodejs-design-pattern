abstract class Shape {
  abstract calculateArea(): number;
}

class SRectangle extends Shape {
  constructor(
    public width: number,
    public height: number
  ) {
    super();
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

class SSquare extends Shape {
  constructor(public side: number) {
    super();
  }

  calculateArea(): number {
    return this.side * this.side;
  }
}

function area(shape: Shape) {
  return shape.calculateArea();
}

let rectangle = new SRectangle(10, 12);
let square = new SSquare(8);

console.log('area(rectangle): ', area(rectangle));
console.log('area(square): ', area(square));
