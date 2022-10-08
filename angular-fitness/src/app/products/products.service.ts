import { Subject } from 'rxjs';

export class ProductsService {
  private products = ['A book'];
  productsUpdated = new Subject();

  addProducts(productName: string) {
    this.products.push(productName);
    this.productsUpdated.next(productName);
  }

  getProducts() {
    return [...this.products];
  }

  deleteProduct(productName: string) {
    this.products = this.products.filter((product) => product !== productName);
    this.productsUpdated.next(productName);
  }
}
