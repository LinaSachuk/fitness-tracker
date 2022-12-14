import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() productName: string | undefined;
  @Output() productClicked = new EventEmitter();

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    console.log(this.productName);
  }

  onClicked() {
    // this.productClicked.emit()
    this.productsService.deleteProduct(this.productName!);
  }
}
