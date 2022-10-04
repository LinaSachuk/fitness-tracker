import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productName = 'A Book';
  isDisabled = true;
  products=['A Book', 'A Tree']

  constructor() {
     setTimeout(() => {
      //  this.productName = 'A Tree'
       this.isDisabled = false;
     }, 3000)}


  ngOnInit(): void {
  }

onAddProduct(){
  this.products.push(this.productName)

}

onRemovedProduct(productName:string){
  this.products = this.products.filter(product => product !== productName)
}
}
