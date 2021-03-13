import { Component } from '@angular/core';
import {NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {IProduct} from './product.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
  ];
}
