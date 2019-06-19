import { Injectable } from '@angular/core';
import { productModel } from '../model/productModel';

@Injectable()

export class serviceList {

  usersList: Array<productModel> = new Array<productModel>();

}
