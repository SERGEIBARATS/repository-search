import { Component, OnInit ,SimpleChange} from '@angular/core';
import { serviceList } from '../services/serviceList';
import { productModel } from '../model/productModel';
import { Router } from '@angular/router';
import { ProductsLisService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private _serviceList: serviceList, private _ProductsLisService: ProductsLisService,
    private _router: Router) { }

    userInput: string;
    sortBy: string = 'name';
    pruductEdits: productModel = null;
    IDProduct: number;
    filteredUsers: Array<productModel> = new Array<productModel>();

    curpage: number = 1;
    numPages: number =1;
    buttonAble: boolean = false;

  ngOnInit() {

     this._ProductsLisService.getAll()
		.subscribe((data: any) =>
       {
        this.filteredUsers = data;
        this._serviceList.usersList = this.filteredUsers;

        if (this._serviceList.usersList.length < 5) {
          this.numPages = 1;
        } else {
          this.numPages = this._serviceList.usersList.length / 5;
          }
        },
            error => alert('No data to display'));
          }

  ngOnChanges(changes: SimpleChange) { }

  showEditComponent (usr: productModel) {
    this.pruductEdits = usr;
    this.IDProduct = usr.id;
  }

  onSave (usr: productModel) {


    this.filteredUsers.forEach(prdd => {
      console.log(prdd.id);
        console.log(usr.id);
      if (prdd.id === usr.id) {

        prdd.name = usr.name;
        prdd.description = usr.description;
        prdd.price = usr.price;


      }

    });

  }

  clickPrev () {
    this.curpage--;
  }

  clickNext () {
    this.curpage++;
  }

  }
