import { Component, OnInit } from '@angular/core';
import {IProduct} from './../../models/product.model';
import {ProductsService} from './../../../core/services/products/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: IProduct[] = [];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProduct();
  }


  clickProduct(id: number) {
    console.log("product", id);
  }

  fetchProduct() {
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products;
    });
  }


  
}
