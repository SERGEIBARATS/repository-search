import { Component, OnInit, Input, SimpleChange, Output, EventEmitter } from '@angular/core';
import { productModel } from '../model/productModel';
import { serviceList } from '../services/serviceList';


@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {


    @Input() pruduct2show: productModel;
    @Input() IDOfProduct: number;

    @Output() onSaveEvent = new EventEmitter<productModel>();


    nameInput: HTMLScriptElement;
    descriptionInput: HTMLScriptElement;
    valueInput: HTMLScriptElement;

    new_product: productModel;

    Price: number;


    constructor(private _serviceList: serviceList) { }

    ngOnInit() {}

    ngOnChanges(changes: SimpleChange) {
      this.nameInput = <any>(this.pruduct2show.name);
      this.descriptionInput = <any>(this.pruduct2show.description);
      this.valueInput = <any>(this.pruduct2show.price);
     }

    save(name: string, description: string, value: number) {

      this._serviceList.usersList.forEach(prd => {
         if (prd.id === this.IDOfProduct) {

          this.Price = +value;
          this.new_product = {
          id : prd.id,
          name: name,
          description: description,
          price: this.Price,
          thumbnailUrl: prd.thumbnailUrl,
          url: prd.url,
          creationDate: prd.creationDate
        };
        this.onSaveEvent.emit(this.new_product);
        alert('Thank you for updating product ' + name);
}

  });

}


}
