
export class Product {
  name: string;
  price: number;
  discount?: number;

  constructor(name: string, price: number, discount?: number) {
    this.name = name;
    this.price = price;
    this.discount = discount;
  }

}
