import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {ProductsService} from './../../../core/services/products/products.service';
import {Router} from '@angular/router';
import {MyValidators} from './../../../utils/validators';
import { Observable } from 'rxjs/internal/Observable';
import {AuthService} from './../../../core/services/auth.service';
import { AngularFireStorage } from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {

  form: FormGroup;
  image$!: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private angularFireStorage: AngularFireStorage
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

  uploadFile(event: Event) {
    const target = event.target as HTMLInputElement;
      const file: File = (target.files as FileList)[0];
      let url: string;

      console.log("file", file);

      const dir = file.name;
      const fileRef = this.angularFireStorage.ref(dir);

      const task = this.angularFireStorage.upload(dir, file);

    task.snapshotChanges()
      .pipe(
        finalize( () => {
           this.image$ = fileRef.getDownloadURL();

           this.image$.subscribe(url => {
             
             this.form.get('image')!.setValue(url);
             console.log("this.form", this.form.value);
           });
           
          })
        
      )
      .subscribe();
  }

  ngOnInit() {
    
  }

  onSubmit(): void {
    
  }
}
