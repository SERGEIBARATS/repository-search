import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { productModel } from '../model/productModel';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';



@Injectable()
export class ProductsLisService {

  constructor(private http: HttpClient) { }


 /* getAll(): Observable<productModel[]>{
    return this._http.get('https://msbit-exam-products-store.firebaseio.com/products.json').map(res => <productModel[]>res.json());
  }*/

  getAll(){
    return this.http.get('https://msbit-exam-products-store.firebaseio.com/products.json');
//       return this.http.get('http://localhost:12345/?first=' + first + '&second=' + second + '&cmd=' + cmd);
}


}
