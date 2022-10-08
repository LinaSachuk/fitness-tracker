import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  productName = 'A Book';
  isDisabled = true;
  products: string[] = [];
  productsSubscribtion: Subscription | undefined;

  constructor(private productsService: ProductsService) {
    setTimeout(() => {
      //  this.productName = 'A Tree'
      this.isDisabled = false;
    }, 3000);
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    this.productsSubscribtion = this.productsService.productsUpdated.subscribe(
      (products) => {
        this.products = this.productsService.getProducts();
      }
    );
  }

  onAddProduct(form: NgForm) {
    console.log(form);
    if (form.valid) {
      // this.products.push(form.value.productName)
      this.productsService.addProducts(form.value.productName);
    }
  }

  onRemovedProduct(productName: string) {
    this.products = this.products.filter((product) => product !== productName);
  }

  ngOnDestroy() {
    this.productsSubscribtion?.unsubscribe();
  }
}
