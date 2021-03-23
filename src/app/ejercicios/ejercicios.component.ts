import { Component, OnInit } from '@angular/core';
import {IProduct} from './../product/models/product.model';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.scss']
})
export class EjerciciosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Bienvenido al curso de angular';

  itemsName = ['nicolas', 'julian', 'ana'];

  power = 10;

  
  addItem(){
    this.itemsName.push("nuevo item");
  }

  deleteItem(index: number){
    this.itemsName.splice(index,1);
  }  

  products: IProduct[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla',
      count: 1
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla',
      count: 1
    },
  ];

}
