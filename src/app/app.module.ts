import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { HttpClientModule } from '@angular/common/http';
import { serviceList } from './services/serviceList';
import { filterProductsPipe } from './Pipe/filterProductsPipe';
import { sortFilterPipe } from './Pipe/sortFilter';
import { pagingProductsPipe } from './Pipe/pagingPipe';
import { ProductsLisService } from './services/products.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    DetailsProductComponent,
    filterProductsPipe,
    sortFilterPipe,
    pagingProductsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [serviceList, ProductsLisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
