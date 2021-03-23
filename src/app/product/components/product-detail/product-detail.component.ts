import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductsService} from './../../../core/services/products/products.service';
import {IProduct} from './../../models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: IProduct = {} as IProduct;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  clickProduct(id: number) {
    console.log("product", id);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.fetchProduct(params.id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id)
      .subscribe(product => {
       this.product = product;
      });
  }

  createProduct() {
    const newProduct: IProduct = {
      id: '222',
      title: 'Nuevo desde angular',
      image: 'assets/images/banner-1.jpg',
      description: 'este articulo es nuevo',
      price: 555,
      count: 1
    };

    this.productsService.createProduct(newProduct)
      .subscribe(product => {
       console.log("Producto creado", product);
      });
  }

  updateProduct() {

    const editProduct: Partial<IProduct> = {
      id: '222',
      description: 'este articulo ya no es nuevo',
      price: 333
    };

    this.productsService.updateProduct('222', editProduct)
      .subscribe(product => {
       console.log("Producto editado", product);
      });
  }

  deleteProduct() {
    this.productsService.deleteProduct('222')
      .subscribe(product => {
        console.log("Producto eliminado", product);
      });
  }

}
