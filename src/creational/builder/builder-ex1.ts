class Product {
  private products: string[] = [];

  public add(product: string) {
    this.products.push(product);
  }

  public listProducts() {
    console.log(`List products: ${this.products.join(', ')}`);
  }
}

interface ProductBuilder {
  setProductA(): void;

  setProductB(): void;

  setProductC(): void;
}

class ConcreteBuilder implements ProductBuilder {
  private product!: Product;

  constructor() {
    this.reset();
  }

  setProductA(): void {
    this.product.add('Product A');
  }

  setProductB(): void {
    this.product.add('Product B');
  }

  setProductC(): void {
    this.product.add('Product C');
  }

  public reset() {
    this.product = new Product();
  }

  getProduct(): Product {
    const result = this.product;
    this.reset();
    return result;
  }
}

class Director {
  private builder!: ProductBuilder;

  public setBuilder(builder: ProductBuilder): void {
    this.builder = builder;
  }

  buildProductMinimal() {
    return this.builder.setProductA();
  }

  public buildFullFeaturedProduct(): void {
    this.builder.setProductA();
    this.builder.setProductB();
    this.builder.setProductC();
  }
}

function runCode(director: Director) {
  const builder = new ConcreteBuilder();
  director.setBuilder(builder);

  console.log('Standard basic product:');
  director.buildProductMinimal();
  builder.getProduct().listProducts();

  console.log('Standard full featured product:');
  director.buildFullFeaturedProduct();
  builder.getProduct().listProducts();

  console.log('Custom product:');
  builder.setProductA();
  builder.setProductB();
  builder.getProduct().listProducts();
}

runCode(new Director());
