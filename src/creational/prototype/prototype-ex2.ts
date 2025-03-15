interface ShapeProperties {
  color: string;
  x: number;
  y: number;
}

abstract class ShapePrototype {
  constructor(public properties: ShapeProperties) {}

  abstract clone(): ShapePrototype;
}

class RectanglePrototype extends ShapePrototype {
  constructor(
    public properties: ShapeProperties,
    public width: number,
    public height: number
  ) {
    super(properties);
    console.log('RectanglePrototype Class');
  }

  clone(): ShapePrototype {
    const shapeProperties: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };

    return new RectanglePrototype(shapeProperties, this.width, this.height);
  }
}

const rectanglePrototype = new RectanglePrototype(
  {
    color: 'blue',
    x: 100,
    y: 200,
  },
  100,
  200
);
console.log('\n------------------------------------');
console.log('LOG: ', 'rectanglePrototype', rectanglePrototype);
console.log('\n------------------------------------');

let anotherRectangle: ShapePrototype = rectanglePrototype.clone();
anotherRectangle.properties.color = 'red';
console.log('LOG: ', 'anotherRectangle', anotherRectangle);
console.log('LOG: ', 'rectanglePrototype', rectanglePrototype);
