import {Component, Input, Output, 
    EventEmitter, OnChanges, SimpleChanges, 
    OnInit, DoCheck, OnDestroy} from '@angular/core';
import {IProduct} from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent implements /*OnChanges,*/ OnInit, DoCheck, OnDestroy {
    
    @Input() product!: IProduct;
    @Output() productClick = new EventEmitter<any>();

    today = new Date();
    
    productExample: IProduct = {
        id: '1',
        image: 'assets/images/camiseta.png',
        title: 'Camiseta',
        price: 80000,
        description: 'bla bla bla bla'
    }

    constructor()
    {
        console.log("1. constructor productos");
    }

    /*
    Colisiona con ngDoCheck
    Este evento se ejecuta antes del onInit
    ngOnChanges(changes: SimpleChanges) {
        console.log("2. ngOnChanges", changes);
    }
    */

    ngOnInit() {
        console.log("3. ngOnInit")
    }

    //Este evento se ejecuta despues del onInit
    ngDoCheck() {
        console.log("4. ngDoCheck");
    }

    ngOnDestroy() {
        console.log("5. ngOnDestroy");
    }

    addCar() {
        console.log("añadir a carrito");
        this.productClick.emit(this.product.id);
    }
}