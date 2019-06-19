import { Pipe, PipeTransform } from '@angular/core';
import { productModel } from '../model/productModel';
@Pipe({
  name: 'filterProductsarrayPipe'
})
export class filterProductsPipe implements PipeTransform {

  transform(filteredProducts: productModel[], userInput: string): productModel[] {

    if (userInput && filteredProducts && filteredProducts.length > 0 && userInput.length > 0) {

      let filteredArray: productModel[] = new Array<productModel>();
      filteredProducts.forEach(prd => {
        if (prd.description.toLowerCase().includes(userInput.toLowerCase()) || prd.name.toLowerCase().includes(userInput.toLowerCase()))
          filteredArray.push(prd);
      });
      return filteredArray;
    }
    else {
      return filteredProducts;
    }

  }

}
