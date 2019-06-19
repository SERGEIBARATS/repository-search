import { Pipe, PipeTransform } from '@angular/core';
import {productModel} from '../model/productModel';
@Pipe({
  name: 'sortFilterPipe'
})
export class sortFilterPipe implements PipeTransform {

transform(filteredProducts: productModel[], sortBy: string): productModel[] {

  filteredProducts.sort((prd1, prd2) => {
      if (prd1[sortBy] < prd2[sortBy]) {
        return 1; } else {
          return -1; }
  });

  return filteredProducts;
}
}
