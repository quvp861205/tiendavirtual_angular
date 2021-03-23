import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {ProductsService} from './../../../core/services/products/products.service';
import {Router} from '@angular/router';
import {MyValidators} from './../../../utils/validators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }

  saveProduct(event: Event) {
    event.preventDefault();

    const product = this.form.value;
    this.productService.createProduct(product)
    .subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['./admin/products']);
      }
    );
  }


  ngOnInit() {
    
  }

  onSubmit(): void {
    
  }
}
