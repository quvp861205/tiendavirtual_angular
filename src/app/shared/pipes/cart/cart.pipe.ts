import { Pipe, PipeTransform } from '@angular/core';
import {IProduct} from './../../../product/models/product.model';

@Pipe({
  name: 'groupBy'
})
export class CartPipe implements PipeTransform {

  transform(objects: IProduct[], key: string): any {
    const countedObjects: IProduct[] = [];

    for (const object of objects) {
      const count: number = objects.filter(obj => obj["id"] === object["id"]).length;


      if (!countedObjects.find(obj => obj["id"] === object["id"])) {
        object.count = count;
        countedObjects.push({...object});
      }
    }

    return countedObjects;
  }

}
