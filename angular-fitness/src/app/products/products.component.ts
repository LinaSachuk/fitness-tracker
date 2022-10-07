import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

onAddProduct(form:NgForm){
  console.log(form)
  if(form.valid){
    this.products.push(form.value.productName)
  }

}

onRemovedProduct(productName:string){
  this.products = this.products.filter(product => product !== productName)
}
}
