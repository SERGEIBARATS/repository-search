import { Pipe, PipeTransform } from '@angular/core';
import {productModel} from '../model/productModel';
@Pipe({
  name: 'pagingarrayPipe'
})
export class pagingProductsPipe implements PipeTransform {

transform(filteredProducts: productModel[], curPage: number): productModel[] {



      if (curPage && filteredProducts && filteredProducts.length > 0 ) {

        let counter: number = 0;
        let filteredArray: productModel[] = new Array<productModel>();
        if ( curPage != 1){
            curPage = (curPage-1) * 5;
            curPage = curPage+1;
          }

            for (let i = curPage-1; i < filteredProducts.length; i++) {
              filteredArray.push(filteredProducts[i]);
              counter++;
              if (counter == 5) {
                return filteredArray;
              }

          }
          return filteredArray;

      }
    }
}
