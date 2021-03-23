import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

 
  form: FormGroup;
  id!: string;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({   
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }

  updateProduct(event: Event) {
    event.preventDefault();

    const product = this.form.value;
    this.productService.updateProduct(this.id, product)
    .subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['./admin/products']);
      }
    );
  }


  ngOnInit() {
    this.activedRoute.params.subscribe((params) => {
      this.id = params.id;
      this.productService.getProduct(this.id).subscribe(product => {
        this.form.patchValue(product);
      });
    });
  }

  onSubmit(): void {
    
  }

}
